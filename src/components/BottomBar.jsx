"use client";

import home from "../../public/assets/icons/home.png";
import about from "../../public/assets/icons/about.png";
import projects from "../../public/assets/icons/projects.png";
import contact from "../../public/assets/icons/contact.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { menuItems } from "../../public/constants/constants";

const BottomBar = () => {
  const location = usePathname();
  const [active, setActive] = useState(location);

  return (
    <div className="md:hidden w-full fixed bottom-0 bg-primary h-[3.5em] flex items-center rounded-t-xl">
      <div className="flex justify-between w-full mx-5 items-center">
        {menuItems.map((item,index)=>(
            <Link
            key={index}
            href={item.url}
            className={`p-2 rounded-full flex items-center ${
              active === item.url ? "bg-black-300" : ""
            }`}
            onClick={() => setActive(item.url)}
          >
            <Image src={item.icon} width={35} alt={`${item.title} Icon`} />
          </Link>
        ))}
        <Link
          href="/contact"
          className={`p-2 rounded-full flex items-center ${
            active === "/contact" ? "bg-black-300" : ""
          }`}
          onClick={() => setActive("/contact")}
        >
          <Image src={contact} width={35} alt="Contact Icon" />
        </Link>
      </div>
    </div>
  );
};

export default BottomBar;
