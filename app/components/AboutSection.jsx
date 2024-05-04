"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { Content } from "next/font/google";

const TAB_DATA = [
  {
    title: "Hard Skills",
    id: "hardSkills",
    content: (
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Next.js</li>
        <li>TailwindCss</li>
        <li>Java</li>
        <li>Spring Boot</li>
        <li>SQL</li>
      </ul>
    ),
  },
  {
    title: "Soft Skills",
    id: "hardSkills",
    content: (
      <ul>
        <li>Teamwork</li>
        <li>Communication</li>
        <li>Problem-solving</li>
        <li>Adaptability</li>
        <li>Creativity</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>Information Systems - FIAP (2023-2026)</li>
      </ul>
    ),
  },
  {
    title: "experience",
    id: "experience",
    content: (
      <ul>
        <li>Administration - 3s Sistems (2020-2024)</li>
        <li>Deplhi Software Engineer - 3s Sistems(2024-Current)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("hardSkills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="A guy with a macbook coding"
          src="/images/coding.png"
          width={400}
          height={400}
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am currently a third-semester Information Systems student at FIAP,
            deeply passionate about all things tech, with a particular focus on
            web development. I have a solid foundation in programming, with
            strong skills in Java, JavaScript, React, HTML, CSS and Git. My
            academic journey is complemented by hands-on project experience,
            including a notable stint at RoboCup, where I developed critical
            teamwork and technical skills.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("hardSkills")}
              active={tab === "hardSkills"}
            >
              Hard Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("softSkills")}
              active={tab === "softSkills"}
            >
              Soft Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience{" "}
            </TabButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
