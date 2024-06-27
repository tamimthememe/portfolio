"use client";

import { useEffect, useRef } from "react";
import { loaderText } from "../../public/constants/constants";
import gsap from "gsap";

const Loader = ({ timeline }) => {
  const textRef = useRef();
  const progressRef = useRef();

  useEffect(() => {
    timeline &&
      timeline.add(
        gsap.to(textRef.current, {
          yPercent: -80,
          duration: 5,
          ease: "power3.inOut",
        }),
        gsap.to(progressRef.current, {
          scaleX: 1,
          duration: 5,
          ease: "power3.inOut",
        })
      );
  }, [timeline]);

  return (
    <div className="relative w-full max-md:h-[100vh]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="relative w-[8em] h-[15em] overflow-hidden">
          <div className="absolute h-[6.5em] w-full bg-black-300 z-10 opacity-70" />
          <div className="absolute bottom-0 h-[6.5em] w-full bg-black-300 z-10 opacity-70" />
          <div ref={textRef}>
            {loaderText.map((item, index) => (
              <h2 key={index} className="my-[2px]">
                {item}
              </h2>
            ))}
          </div>
        </div>
      </div>
      <div
        ref={progressRef}
        className="absolute origin-left
         h-[2.5em] w-full scale-x-0 bg-white bottom-0"
      />
    </div>
  );
};

export default Loader;
Loader;
