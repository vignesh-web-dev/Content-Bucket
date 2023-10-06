"use client";
import { useEffect, useState, useRef } from "react";
import "../style/index.css";
import "../app/globals.css";
import ScrollingDiv from "../components/scroll";

export default function Home() {
  const Element = useRef();
  const para = useRef(null);
  const [divSize, setDivSize] = useState(100);
  const [divTop, setDivTop] = useState(160);
  useEffect(() => {
    function size() {
      document.getElementById("cursor").style.width = "50px";
      document.getElementById("cursor").style.height = "50px";
    }
    function sizeReset() {
      document.getElementById("cursor").style.width = "25px";
      document.getElementById("cursor").style.height = "25px";
    }
    if (para && para.current) {
      para.current.addEventListener("mouseenter", size, false);
      para.current.addEventListener("mouseleave", sizeReset, false);
    }
  });

  return (
    <>
      <section className="relative bg-white	text-black overflow-hidden ">
        <ScrollingDiv />
        <div className="w-11/12 max-w-screen-xl mx-auto h-screen flex flex-col justify-center gap-4	items-center relative z-[1] ">
          <div className="flex justify-center gap-4 items-center">
            <p className="text-7xl font-bold not-italic" ref={para}>
              <span className="inline-block">Hello</span>
              <span className="inline-block">World!</span>
            </p>
            <img className="wave" src="wave.webp"></img>
          </div>
          <p className="text-3xl font-semibold	 text-center max-w-3xl">
            I am a monk with a Mac who loves designing and coding from scratch
            and gets a kick out of turning ideas into vibrant reality on the
            screen.
          </p>
        </div>
      </section>
      <section className="relative bg-[#ffe67b]">
        <div className="w-11/12 max-w-screen-xl mx-auto h-screen flex justify-center items-center "></div>
      </section>
    </>
  );
}
