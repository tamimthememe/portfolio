"use client";

import contact from "../../public/assets/icons/contact.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { menuItems, socials } from "../../public/constants/constants";
import gsap from "gsap";

const Sidebar = () => {
  const location = usePathname();
  const [active, setActive] = useState(location);

  const sidebarRef = useRef();

  useEffect(() => {
    if (location === "/") {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 2,
        ease: "expo.inOut",
        delay: 8,
      });
    } else{
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0,
        ease: "expo.inOut"
      });
    }
  }, []);

  return (
    <div className="bg-black-300 fixed h-[100vh] max-md:hidden w-[15em] overflow-hidden">
      <div
        ref={sidebarRef}
        className="-translate-x-[15em] overflow-hidden  border-r border-primary w-[15em]  my-auto max-md:hidden h-full flex flex-col justify-between"
      >
        <div className="">
          <h1 className="mt-8 ml-6 font-scp font-bold text-[24px]">
            tamim<span className="text-purple-200">.dev()</span>
          </h1>
          <div className="mt-7 flex flex-col gap-3 mx-3">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                onClick={() => setActive(item.url)}
                className={`flex gap-4 items-center py-2 pl-4 rounded-md ${
                  active === item.url ? "bg-black-100" : "hover:bg-black-200"
                }`}
              >
                <Image src={item.icon} width={25} alt={`${item.title} icon`} />
                <h3 className="text-sm">{item.title}</h3>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-10">
          <p className="ml-3 text-xs text-gray-500">Stay in touch</p>
          <Link
            href="/contact"
            onClick={() => setActive("/contact")}
            className={`mx-2 flex gap-4 items-center py-2 p-1 pl-4 rounded-md ${
              active === "/contact" ? "bg-black-100" : "hover:bg-black-200"
            }`}
          >
            <Image src={contact} width={25} alt="Contact Icon" />
            <h3 className="text-sm">Contact</h3>
          </Link>
          {socials.map((item,index)=>(
            <div key={index} className="mx-2 pl-4 py-2 hover:bg-black-200 rounded-md">
              <a target="_blank" href={item.url} className="flex gap-4 items-center">
                <Image src={item.icon} width={25}/>
                <h3 className="text-sm">{item.title}</h3>
              </a>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
