"use client";

import { useEffect, useRef, useState } from "react";
import { work } from "../../../public/constants/constants";
import Image from "next/image";
import Switch from "@/components/Switch";
import brainwave from "../../../public/assets/icons/brainwave.png";
import apple from "../../../public/assets/icons/apple.png";
import nftsfeo from "../../../public/assets/icons/nftsfeo.png";
import securely from "../../../public/assets/icons/securely.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const knowRef = useRef();
  const careerRef = useRef();
  const mainRef = useRef();
  const latestRef = useRef();

  let count = 0;

  const [toggle, setToggle] = useState(true);
  const [filter, setFilter] = useState("Live Site");
  const [opened, setOpened] = useState("");

  const changeFilter = () => {
    if (toggle === true) {
      setFilter("Design");
    } else {
      setFilter("Live Site");
    }
  };

  useEffect(() => {
    gsap.to(knowRef.current, {
      scale: 1,
      duration: 2,
      scrollTrigger: {
        trigger: knowRef.current,
        toggleActions: "play reverse play reverse",
        start: "top 85%",
        end: "bottom 15%",
      },
    });
    gsap.to(careerRef.current, {
      scale: 1,
      duration: 2,
      scrollTrigger: {
        trigger: careerRef.current,
        toggleActions: "play reverse play reverse",
        start: "top 85%",
        end: "bottom 15%",
      },
    });
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
    gsap.to(latestRef.current, {
      scale: 1,
      duration: 2,
      stagger: 0.5,
      scrollTrigger: {
        trigger: latestRef.current,
        toggleActions: "play reverse play reverse",
        start: "top 85%",
        end: "bottom 15%",
      },
    });
  }, []);

  const renderItems = () => {
    let count = 0;

    return work.map((item, index) => {
      if (item.category === filter && item.icon && count < 4) {
        count++;

        return (
          <div
            key={index}
            className="my-4 px-4 py-2 rounded-lg cursor-pointer hover:bg-black-100 bg-gray-700 transition-all"
            onClick={() => {
              if (opened != item.name) {
                setOpened(item.name);
              } else {
                setOpened(" ");
              }
            }}
          >
            <div className="flex items-center  ">
              <div className="flex items-center p-3 w-[3.5em] h-[3.5em]">
                <Image src={item.icon} width={item.width} alt="icon" />
              </div>
              <div className="ml-2">
                <p>{item.name}</p>
                <p className="max-md:hidden text-[13px] text-gray-400">
                  {item.sub}
                </p>
              </div>
            </div>

            {item.name === opened && (
              <div className="my-2 mx-auto w-[90%] bg-black-300 p-3 rounded-lg flex gap-3 flex-wrap">
                {item.tech.map((techItem, i) => (
                  <div key={i} className="bg-black-100 px-2 py-1 rounded-md">
                    <p className="text-sm">{techItem}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      }
    });
  };

  return (
    <section className="w-full h-full ">
      <div className="pt-24 max-md:pt-10 md:px-7 md:w-full flex gap-32 justify-center">
        <div className="md:w-[60%] w-[80%]">
          <div ref={mainRef} className="scale-75 origin-left">
            <h2 className="page-header">About</h2>
            <p className="page-desc mt-5">
              I am a dedicated Fullstack Web Developer specializing in React and
              Next.js, with a proven track record in creating dynamic,
              responsive web applications. I also have a good interest in gym,
              finance and entrepreneurship. If this excites you, welcome to my
              area of the internet.
            </p>
          </div>
          <div className="scale-75 origin-left" ref={latestRef}>
            <div className="mt-16 mb-5 flex justify-between items-center">
              <h3 className="page-sub">Latest Work</h3>
              <Switch
                primary="Live Site"
                secondary="Design"
                onChange={() => {
                  setToggle((prev) => !prev);
                  changeFilter();
                }}
              />
            </div>
            <div className="mb-20">{renderItems()}</div>
          </div>
          <div ref={knowRef} className="scale-75 origin-left">
            <h3 id="know" className="page-sub mb-5  origin-left">
              Get to Know Me
            </h3>
            <p className="page-desc origin-left">
              I&apos;ve always loved to CREATE. Whether it is a mechanical robot
              arm with hydraulics or a completely digital product. From
              professional video editing to software engineering, I have been
              through quite a roller coaster. <br />
              <br />
              I&apos;ve always had an avid interest in computing which is why
              the degree I&apos;m pursuing alongside my entrepreneurship journey
              is a Bachelor&apos;s in Software Engineering. Designing have
              always been my strength which lead me to UI/UX Design. That is
              where my web development journey begun. My will to create and
              imaginative designs pushed me to learn web development frameworks.
              Starting my journey from online courses to coding up-to-date
              projects, I have mastered most of the JavaScript frameworks.{" "}
              <br />
              <br />
              To keep myself always on the action, I hit the gym everyday and
              pla volleyball from time to time. Adding to that, I have also been
              a world class debater in my school life and competed
              internationally. Yes, I yap!{" "}
            </p>
          </div>
          <div className="scale-75 origin-left" ref={careerRef}>
            <h3 className="mt-20 mb-5 page-sub">Career</h3>
            <p className="page-desc mb-24">
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
        </div>
        <div className="max-lg:hidden  items-center flex flex-col justify-center">
          <div className="bg-[#210940] mx-auto p-8 rounded-full">
            <Image className="" src={brainwave} alt="Brainwave Icon" />
          </div>
          <div className="w-[0.8em] mt-4 h-[0.8em] bg-gray-700 rounded-full" />
          <div className="w-[0.8em] mt-4 h-[0.8em] bg-gray-700 rounded-full" />
          <div className="w-[0.8em] mt-4 h-[0.8em] bg-gray-700 rounded-full" />
          <div className="w-[0.8em] mt-4 h-[0.8em] bg-gray-700 rounded-full" />
          <div className="w-[0.8em] mt-4 h-[0.8em] bg-gray-700 rounded-full" />
          <div className="w-[0.8em] mt-4 h-[0.8em] bg-gray-700 rounded-full" />
          <div className="mt-4 bg-[#242424] mx-auto p-8 rounded-full">
            <Image className="px-1" src={apple} alt="Apple Icon" />
          </div>
          <div className="w-[0.8em] mt-4 h-[0.8em] bg-gray-700 rounded-full" />
          <div className="w-[0.8em] mt-4 h-[0.8em] bg-gray-700 rounded-full" />
          <div className="w-[0.8em] mt-4 h-[0.8em] bg-gray-700 rounded-full" />
          <div className="w-[0.8em] mt-4 h-[0.8em] bg-gray-700 rounded-full" />
          <div className="w-[0.8em] mt-4 h-[0.8em] bg-gray-700 rounded-full" />
          <div className="w-[0.8em] mt-4 h-[0.8em] bg-gray-700 rounded-full" />
          <div className="mt-4 bg-[#002E42] mx-auto p-6 rounded-full">
            <Image
              className="px-1 "
              width={65}
              src={nftsfeo}
              alt="NFTs Feo Icon"
            />
          </div>
          <div className="w-[0.8em] mt-4 h-[0.8em] bg-gray-700 rounded-full" />
          <div className="w-[0.8em] mt-4 h-[0.8em] bg-gray-700 rounded-full" />
          <div className="w-[0.8em] mt-4 h-[0.8em] bg-gray-700 rounded-full" />
          <div className="w-[0.8em] mt-4 h-[0.8em] bg-gray-700 rounded-full" />
          <div className="w-[0.8em] mt-4 h-[0.8em] bg-gray-700 rounded-full" />
          <div className="w-[0.8em] mt-4 h-[0.8em] bg-gray-700 rounded-full" />
          <div className="mt-4 bg-[#242424] mx-auto p-8 rounded-full">
            <Image
              className="py-2"
              width={50}
              src={securely}
              alt="NFTs Feo Icon"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
