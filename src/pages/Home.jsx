/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
import { Suspense, useState,useEffect,useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Loder from "../component/Loder";
import Island from "../models/Island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../component/HomeInfo";
import sakura from '../assets/sakura.mp3';
import { soundoff, soundon } from "../assets/icons";


const Home = () => {

const audioref=useRef(new Audio(sakura));
  audioref.current.volume=0.5;
  audioref.current.loop=true;
  


  const [isRotating, setisRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isplaying,setisplaying]=useState(false);
  
  useEffect(()=>{
    if(isplaying)
    {
      audioref.current.play();
    }

    return ()=>{

      audioref.current.pause();
    }
  },[isplaying])

  const adjustisland = () => {
    let screenScale = null;
    let screenPostion = [0, -6.5, -43.4];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPostion, rotation];
  };

  const adjustplane = () => {
    let screenScale;
    let screenPostion;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPostion = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPostion = [0, -4, -4];
    }

    return [screenScale, screenPostion];
  };

  const [islandScale, islandPostion, islandRotation] = adjustisland();
  const [planeScale, planePostion] = adjustplane();
  return (
    <section className=" w-full h-screen relative">
      <div className=" absolute top-28 left-0 right-0 z-50 flex items-center justify-center">
        {" "}
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : " cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loder />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          {
            // directionlight menas the light comming from a distance  like sun
          }
          <ambientLight intensity={0.3} />
          {
            // ambient light  illuminate all the object over the model  with their intensity
          }
          {/* { <pointLight />} point light like a light comming from a distance a acting at a single point  */}

          {
            // <spotLight  /> similar to the piont light
          }
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor={`#000000`}
            intensity={1}
          />
          {
            // hemisphere light is used ti illuminate the object with the gradient light
          }
          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            position={islandPostion}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setisRotating={setisRotating}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            isRotating={isRotating}
            planeScale={planeScale}
            planePostion={planePostion}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>

      <div className=" absolute bottom-2 left-2">
        <img src={!isplaying ? soundoff:soundon} alt="sound"  className="w-10 h-10 cursor-pointer object-contain"
        onClick={()=>setisplaying(!isplaying)}
        />
      </div>
    </section>
  );
};

export default Home;
