"use client";

import Image from "next/image";
import { work } from "../../../public/constants/constants";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import closeIcon from "../../../public/assets/icons/Close.png";
import linkIcon from "../../../public/assets/icons/link.png";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const mainRef = useRef();
  const projRef = useRef();

  const [openModal, setOpenModal] = useState(null);

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

  const handleClick = (url, item) => {
    setOpenModal(item);
  };

  return (
    <section className="relative w-full h-full">
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
                onClick={() => {
                  handleClick(item.url, item);
                }}
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
                      <p className="max-md:hidden text-[14px] text-gray-200 mb-2">
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
      {openModal && (
        <div>
          <div
            className="absolute left-0 top-0 w-[100%] h-[100%] bg-black-200 opacity-75 cursor-pointer"
            onClick={() => setOpenModal("")}
          />
          <div
            className="fixed bg-black-100 h-[80%] w-[60%] px-10 py-5 max-md:w-[80%] max-md:bottom-[3em] md:left-[15em] m-auto inset-x-0 inset-y-0 rounded-lg"
          >
            <div className="flex justify-between items-center">
              <h1 className="md:page-header ">{openModal.name}</h1>
              <Image
                className="cursor-pointer"
                src={closeIcon}
                alt="Close Icon"
                width={35}
                onClick={() => setOpenModal("")}
              />
            </div>
            <div className="overflow-y-auto h-[92%] mt-3 mb-2 no-scrollbar">
              <div className="flex flex-wrap justify-center gap-4 h-full items-start ">
                <div>
                  <Image
                    className="w-[24em] mt-3"
                    src={openModal.mockup}
                    alt={`${openModal.name} Mockup`}
                  />
                  {openModal.url && (
                    <div className=" mt-2 ml-3 flex gap-2 items-center hover:opacity-50">
                      <a
                        target="_blank"
                        className=" text-white"
                        href={openModal.url}
                      >
                        Visit the Live Website Here
                      </a>
                      <Image src={linkIcon} alt="Link Icon" width={18} />
                    </div>
                  )}
                </div>
                <div className="w-[24em]">
                  <h1 className="page-sub mt-5">The Concept</h1>
                  <p className="page-desc">{openModal.longDesc}</p>
                  <h1 className="page-sub mt-5">Tech Stack</h1>
                  <div className="mt-1 mx-2 flex flex-wrap gap-2 mb-5">
                    {openModal.tech.map((item, index) => (
                      <div
                        key={index}
                        className="bg-black-300 px-2 py-1 rounded-md"
                      >
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                  {openModal.colours && (
                    <div className="">
                      <h1 className="page-sub mb-2">Colours</h1>
                      <div className="flex mb-5">
                        {openModal.colours.map((colour, index) => (
                          <div
                            key={index}
                            style={{ backgroundColor: colour }}
                            className={`h-[10em] flex-1`}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
