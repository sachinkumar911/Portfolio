/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei"
import skyScene from '../assets/3d/sky.glb';
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Sky = ({ isRotating }) => {

  const skyref= useRef();

  const skys= useGLTF(skyScene);

  useFrame((_,delta)=>{
    
    skyref.current.rotation.y+=0.05*delta
    if(isRotating)
    skyref.current.rotation.y+=0.5*delta

  })
  return (
    <mesh ref={skyref}>
      <primitive object={skys.scene}/>
    </mesh>
  )
}

export default Sky