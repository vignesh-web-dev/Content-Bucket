// components/ScrollingDiv.js
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../style/index.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollingDiv() {
  const divRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth > 840) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".scrolling-div", {
        scrollTrigger: {
          trigger: ".scrolling-div",
          start: "top 70%",
          end: "top 50%",
          scrub: true,
        },
        width: "200%",
        y: -400,
      });
    } else if (window.innerWidth > 480) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".scrolling-div", {
        scrollTrigger: {
          trigger: ".scrolling-div",
          start: "bottom 95%",
          end: "top 30%",
          scrub: true,
        },
        width: "200%",
        y: -400,
      });
    } else {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".scrolling-div", {
        scrollTrigger: {
          trigger: ".scrolling-div",
          start: "bottom 85%",
          end: "top 30%",
          scrub: true,
        },
        width: "200%",
        y: -400,
      });
    }
  }, []);

  return (
    <div
      className="scrolling-div absolute z-0 flex justify-center items-top top-[75%]"
      ref={divRef}
    >
      <img className="" src="profile.webp"></img>
    </div>
  );
}
