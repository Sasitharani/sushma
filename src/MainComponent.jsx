"use client";
import React, { useEffect, useState } from "react";
import "./app/globals.css";
import Header from "./app/common/Header";
import Footer from "./app/common/Footer";
import SimpleSlider from "./SimpleSlider";

export default function MainComponent({ children }) {
  let [headerTop, setHeaderTop] = useState(false);
  let [scrollStatus, setScrollStatus] = useState(false);
  let { pathname } = window.location;
  useEffect(() => {
    window.scrollTo({
      top: "0px",
      beahviour: "smooth",
    });
  }, [pathname]);
  useEffect(() => {
    window.onscroll = () => {
      let topScroll = window.scrollY;
      if (topScroll >= 250) {
        setScrollStatus(true);
        console.log(scrollStatus);
      } else {
        setScrollStatus(false);
      }

      console.log(topScroll);
    };
  }, []);
  return (
    <div>
      <div
        className={`${
          scrollStatus ? "bg-gray-400" : "bg-black"
        } fixed top-0 left-0 w-full `}
      >
        <Header />
      </div>
      <div className="bg-slate-100 border-4 border-black-600 border-solid">
        <div className="grid grid-cols-2 gap-4">
          {/* <!-- Column 1 --> */}
          <div className="grid grid-rows-2 gap-4 w-[100%]">
            {/* <!-- Row 1 --> */}
            <div className="bg-my-blue p-4 flex-col  grid-rows-2">
              <div className="rows1 h-60"></div>
              <span className="flex grid-cols-2 w-full">
                <div className="space-y-4 ps-2  w-1/12">
                  <div className="w-1 h-10 bg-white rounded-lg"></div>
                  <div className="w-1 h-10 bg-white rounded-lg"></div>
                  <div className="w-1 h-10 bg-white rounded-lg"></div>
                  <div className="w-1 h-10 bg-white rounded-lg"></div>
                </div>
                <div className="space-y-4 px-3 w-11/12">
                  <h1 className="text-[42px] uppercase text-white m-3">
                    We make
                  </h1>
                  <h1 className="text-[42px] uppercase text-white m-3">
                    Homes That
                  </h1>
                  <h1 className="text-[42px] uppercase text-white m-3">
                    Understand
                  </h1>
                  <h1 className="text-[42px] uppercase text-white m-3">you</h1>
                  <button class="bg-transparent text-white text-s  p-2 rounded-3xl border-white border-[1px] mb-[14rem]">
                    SEE ALL PROJECTS
                  </button>
                </div>
              </span>
            </div>
            {/* <!-- Row 2 --> */}
            <div className="h-[80%] text-[42px] bg-my-blue">Animated image</div>
          </div>
          {/* <!-- Column 2 --> */}
          <div className="h-[20%] text-[42px] bg-slate-500">Animated Image</div>
        </div>
        {children}
      </div>
      <SimpleSlider />   
      <Footer />
    </div>
  );
}
