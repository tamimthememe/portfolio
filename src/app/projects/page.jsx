"use client";

import Image from "next/image";
import { work } from "../../../public/constants/constants";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const mainRef = useRef();
  const projRef = useRef();

  useEffect(() => {
    gsap.to(mainRef.current, {
      scale: 1,
      duration: 2,
      scrollTrigger: {
        trigger: mainRef.current,
        toggleActions: "play reverse play reverse",
        start: "top 85%",
        end: "bottom 15%",
      },
    });
    gsap.to(projRef.current, {
      scale: 1,
      duration: 2,
      stagger: 0.5,
      scrollTrigger: {
        trigger: projRef.current,
        toggleActions: "play none play none",
        start: "top 85%",
      },
    });
  }, []);

  const handleClick = (url)=>{
    window.location.href=url;
  }

  return (
    <section className="w-full h-full">
      <div className="pt-24 max-md:pt-10 max-md:px-7 md:w-[60%] mx-auto">
        <div className="">
          <div ref={mainRef} className="scale-75 origin-left">
            <h2 className="page-header">Projects</h2>
            <p className="my-5 page-desc">
              I am currently working with clients to ensure that they get the
              best websites, landing pages and web apps. Ranging from great
              copywriting to eye-catching animations, I&apos;ve got it all.{" "}
              <br />
              <br />I am also pursuing my Bachelor&apos;s in Software
              Engineering in FAST - NUCES , Islamabad. In the last 3+ years, I
              have focused heavily on designing and bringing those designs to
              life through the internet.
            </p>
          </div>
          <div ref={projRef} className="scale-75 origin-top mt-10 mx-auto">
            {work.map((item, index) => (
              <div
                className="bg-[#171717] my-5 p-3 rounded-lg"
                key={index}
                onClick={()=> {item.url && handleClick(item.url)}}
              >
                <div className="relative m-auto rounded-lg">
                  <div
                    style={{ backgroundImage: `url('${item.background}')` }}
                    className="bg-opacity-0 bg-cover bg-center overflow-hidden rounded-lg"
                  >
                    <div className="cursor-pointer bg-[#202020] group hover:bg-opacity-0 px-10 transition-all duration-1000 rounded-lg">
                      <div className="pt-8 md:flex items-center justify-between">
                        <h3 className="page-sub">{item.name}</h3>
                        <p className="text-sm font-light max-md:mb-2">
                          {item.date}
                        </p>
                      </div>
                      <p className="text-[14px] text-gray-200 mb-2">
                        {item.sub}
                      </p>
                      <Image
                        className={`${
                          item.device === "mobile"
                            ? "md:w-[13em] mx-auto"
                            : "max-md:scale-125"
                        } group-hover:translate-y-0 translate-y-10 transition-all duration-1000`}
                        src={item.mockup}
                        alt={`${item.name} Mockup`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
