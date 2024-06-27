"use client";

import Sidebar from "@/components/Sidebar";
import BottomBar from "@/components/BottomBar";
import Loader from "@/components/Loader";
import { useLayoutEffect, useState } from "react";
import gsap from "gsap";

const Canvas = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const [timeline, setTimeline] = useState(null);

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => setLoader(true),
      });

      setTimeline(tl);
    });

    return () => context.revert();
  }, []);

  return (
    <div className="flex m-auto w-[100%] md:h-[100%] items-center">
      <div className="rounded-md m-auto bg-black-300 w-full flex max-md:w-full ">
        {!true ? (
          <Loader timeline={timeline} />
        ) : (
          <div className="w-full ">
            <div className="w-full h-full flex ">
              <Sidebar />
              <div className="md:ml-[15em] w-full">
                <h1 className="mt-8 ml-6 font-scp font-bold text-[24px] md:hidden">
                  tamim<span className="text-purple-200">.dev()</span>
                </h1>
                {children}
              </div>
            </div>
            <BottomBar />
          </div>
        )}
      </div>
    </div>
  );
};

export default Canvas;
