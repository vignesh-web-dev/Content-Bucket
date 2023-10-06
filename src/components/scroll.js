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
          start: "top 70%", // Trigger the animation when the top of the div hits the bottom of the viewport
          end: "top 50%", // Reverse the animation when the bottom of the div hits the top of the viewport
          scrub: true,
          // animation: anim,
          markers: true,
          // containerAnimation: "scrollTween", // Smoothly scrub through the animation while scrolling
        },
        width: "200%",
        y: -400,
        // Change the height of the div to 300px
      });
    } else if (window.innerWidth > 480) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".scrolling-div", {
        scrollTrigger: {
          trigger: ".scrolling-div",
          start: "bottom 95%", // Trigger the animation when the top of the div hits the bottom of the viewport
          end: "top 30%", // Reverse the animation when the bottom of the div hits the top of the viewport
          scrub: true,
          // animation: anim,
          markers: true,
          // containerAnimation: "scrollTween", // Smoothly scrub through the animation while scrolling
        },
        width: "200%",
        y: -400,
        // Change the height of the div to 300px
      });
    } else {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(".scrolling-div", {
        scrollTrigger: {
          trigger: ".scrolling-div",
          start: "bottom 85%", // Trigger the animation when the top of the div hits the bottom of the viewport
          end: "top 30%", // Reverse the animation when the bottom of the div hits the top of the viewport
          scrub: true,
          // animation: anim,
          markers: true,
          // containerAnimation: "scrollTween", // Smoothly scrub through the animation while scrolling
        },
        width: "200%",
        y: -400,
        // Change the height of the div to 300px
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
