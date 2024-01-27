/* eslint-disable react/no-unknown-property */
import { Suspense, useState } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import Loder from "../component/Loder";
import Fox from "../models/Fox";
import useAlert from "../hooks/useAlert";
import Alert from "../component/Alert";

const Contact = () => {
  const [form, setform] = useState({ name: "", email: "", message: "" });
  const [isloading, setisloading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();

  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  const handlefoucs = () => {
    setCurrentAnimation("walk");
  };
  const handleblur = () => {
    setCurrentAnimation("idle");
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    setisloading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Sachin",
          from_email: form.email,
          to_email: "sk131461@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setisloading(false);
        showAlert({
          show: true,
          text: "Thank you for your message 😃",
          type: "success",
        });
        
        setTimeout(()=>{
          hideAlert(false);
          setCurrentAnimation('idle');
          setform({ name: "", email: "", message: "" });
        },[3000])
      })
      .catch((error) => {
        setisloading(false);
        console.error(error);
        showAlert({
          show: true,
          text: "I didn't receive your message 😢",
          type: "danger",
        });
      });
  };
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className=" flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handlesubmit}
        >
          <label className="text-black-500 font-semibold">
            {" "}
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
              value={form.name}
              onChange={handlechange}
              onFocus={handlefoucs}
              onBlur={handleblur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            {" "}
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="email"
              required
              value={form.email}
              onChange={handlechange}
              onFocus={handlefoucs}
              onBlur={handleblur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            {" "}
            Your Message
            <textarea
              name="message"
              rows={4}
              className="textarea"
              placeholder="Let me know how can I help you"
              value={form.message}
              required
              onChange={handlechange}
              onFocus={handlefoucs}
              onBlur={handleblur}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isloading}
            onFocus={handlefoucs}
            onBlur={handleblur}
          >
            {isloading ? "sending..." : "send message"}
          </button>
        </form>
      </div>

      <div className=" lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <Suspense fallback={<Loder />}>
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
