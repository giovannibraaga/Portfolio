"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-600 via-green-400 to-green-200">
              Hi, I am{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Giovanni", 1000, "a Web Developer", 1000]}
              wrapper="span"
              speed={1}
              repeat={Infinity}
            />
          </h1>
          <ul className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl list-disc">
            <li>Information Systems student at FIAP</li>
            <li>Passionate with technology</li>
            <li>C1 Advanced English Level</li>
          </ul>
          <div>
            <Link
              href="https://www.linkedin.com/in/giovannibraga"
              target="_blank"
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-600 via-green-400 to-green-200 hover:bg-slate-200 text-[#22272E] font-bold">
                LinkedIn
              </button>
            </Link>

            <Link
              href="https://www.github.com/giovannibraaga"
              target="_blank"
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-transparent bg-gradient-to-br from-green-600 via-green-400 to-green-200 hover:bg-slate-800 text-[#2FBF64] mt-3 font-bold">
                <span className="block bg-[#22272E] hover:bg-[#31373f] rounded-full px-5 py-2">
                  Github
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#31373f] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/avatar.png"
              alt="Giovanni's Pixar photo AI generated - hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
