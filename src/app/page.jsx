"use client";

import { heroShortcuts } from "../../public/constants/constants";
import work from "../../public/assets/icons/work.png";
import location from "../../public/assets/icons/location.png";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Link from "next/link";

export default function Home() {
  const headerRef = useRef();
  const subheaderRef = useRef();
  const bottomRef = useRef();

  const tl = gsap.timeline();

  useEffect(() => {
    tl.add(
      gsap.to(headerRef.current, {
        y: 0,
        duration: 1,
        opacity: 1,
        ease: "power3.inOut",
      }),
      gsap.to("#headerCircle", {
        y: 0,
        duration: 1,
        ease: "power3.inOut",
      })
    );

    tl.to(subheaderRef.current, {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: "power3.inOut",
    }).to(
      "#subheaderCircle",
      {
        y: 0,
        duration: 1,
        ease: "power3.inOut",
      },
      "<"
    );

    tl.to("#shortcut", {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.inOut",
      stagger: -0.5,
    }).to(
      "#right",
      {
        x: 0,
        duration: 1,
        stagger: 0.75,
        opacity: 1,
        ease: "power3.inOut",
      },
      "<"
    );

    tl.to(bottomRef.current, {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: "power3.inOut",
    }).to(
      "#bottom",
      {
        y: 0,
        duration: 1,
        ease: "power3.inOut",
      },
      "<"
    );
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="px-20 py-[3.5em] max-md:px-6 max-md:py-[2em] flex flex-col justify-between md:h-[100vh]">
        <div>
          <h1
            ref={headerRef}
            className=" -translate-y-40 opacity-0 xl:text-[80px] md:text-[60px] leading-[1.3em] max-md:text-[60px] max-md:w-full"
          >
            Hi! I enjoy creating <br />
            <span className="font-ds ">Modern</span> Websites.
          </h1>
          <p
            ref={subheaderRef}
            className="opacity-0 translate-y-20 text-gray-400 mt-2 max-md:text-[14px] "
          >
            My Name is Tamim Rizvi - Welcome to my portfolio.
          </p>
          <div className="">
            <div className="my-[3em] flex gap-8 flex-wrap">
              {heroShortcuts.map((item, index) => (
                <Link
                  href={item.url}
                  key={index}
                  id="shortcut"
                  className="-translate-x-32 opacity-0 flex gap-2 cursor-pointer w-[15em] hover:bg-black-200"
                >
                  <div className="h-[7em] bg-gray-500 w-[0.5px]" />
                  <div className="flex flex-col justify-between py-2 pr-2 ml-1">
                    <p className="text-sm text-gray-200">{item.hook}</p>
                    <p className="text-[12px] text-sm text-gray-200">
                      {item.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div
          ref={bottomRef}
          className="translate-y-40 opacity-0 flex gap-[5em] max-xl:hidden"
        >
          <div className="flex items-center w-[15em] gap-2">
            <Image src={work} width={50} alt="Work Icon" />
            <div>
              <p className="text-[12px] max-md-hidden text-gray-200">
                Most Recent Work
              </p>
              <p className="text-[12px] max-md-hidden">
                Web Designer and Developer of Securely.pk
              </p>
            </div>
          </div>
          <div className="flex items-center w-[15em] gap-2">
            <Image src={location} width={50} alt="Work Icon" />
            <div>
              <p className="text-[12px] max-md-hidden text-gray-200">
                Most Recent Work
              </p>
              <p className="text-[12px] max-md-hidden">
                Web Designer and Developer of Securely.pk
              </p>
            </div>
          </div>
        </div>
        <div
          id="right"
          className="opacity-0 -translate-x-28 max-xl:hidden w-[12em] h-[12em] bg-gray-100 absolute rounded-full bottom-[10em] right-[6em]"
        />
        <div
          id="right"
          className="opacity-0 -translate-x-36 max-xl:hidden w-[8em] h-[8em] bg-gray-100 absolute rounded-full bottom-[5em] right-[17em]"
        />
        <div
          id="subheaderCircle"
          className="translate-y-96 max-xl:hidden w-[3em] h-[3em] bg-gray-100 absolute rounded-full bottom-[5em] right-[13em]"
        />
        <div
          id="bottom"
          className="translate-y-96 max-xl:hidden w-[6em] h-[6em] bg-gray-100 absolute rounded-full bottom-[3em] right-[5em]"
        />
        <div
          id="headerCircle"
          className="-translate-y-96 max-xl:hidden w-[2em] h-[2em] bg-gray-100 absolute rounded-full bottom-[22em] right-[5em]"
        />
      </div>
    </section>
  );
}
