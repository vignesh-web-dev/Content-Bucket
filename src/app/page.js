"use client";
import { useEffect, useState, useRef } from "react";
import "../style/index.css";
import "../app/globals.css";
import ScrollingDiv from "../components/scroll";

export default function Home() {
  const para = useRef(null);
  useEffect(() => {
    let elem = document.getElementById("cursor");
    function size() {
      elem.style.width = "80px";
      elem.style.height = "80px";
      elem.style.backgroundColor = "yellow";
    }
    function sizeReset() {
      elem.style.width = "15px";
      elem.style.height = "15px";
      elem.style.backgroundColor = "#fff";
    }
    if (para && para.current) {
      para.current.addEventListener("mouseenter", size, false);
      para.current.addEventListener("mouseleave", sizeReset, false);
    }
  });

  return (
    <>
      <section className="relative bg-white	text-black overflow-hidden flex gap-20  flex-col">
        <ScrollingDiv />
        <div className="w-11/12 max-w-screen-xl mx-auto h-[100dvh] flex flex-col justify-center md:gap-6 gap-4	items-center relative z-[1] ">
          <div className="flex justify-center gap-4 items-center">
            <p className="text-7xl font-bold not-italic hello" ref={para}>
              <span className="inline-block">Hello</span>
              <span className="inline-block">World!</span>
            </p>
            <img className="wave" src="wave.webp"></img>
          </div>
          <p className="text-3xl font-medium text-left md:text-center max-w-3xl">
            I am a monk with a Mac who loves designing and coding from scratch
            and gets a kick out of turning ideas into vibrant reality on the
            screen.
          </p>
        </div>
        <div className="w-full	mx-auto h-[100dvh] flex justify-center items-center bg-[#ffe67b] relative z-1">
          fffffffffff
        </div>
      </section>
    </>
  );
}
