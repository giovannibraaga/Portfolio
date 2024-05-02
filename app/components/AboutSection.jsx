import React from "react";
import Image from "next/image";

const AboutSection = () => {
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
            strong skills in Java, JavaScript, React, HTML, CSS and Git. My academic
            journey is complemented by hands-on project experience, including a
            notable stint at RoboCup, where I developed critical teamwork and
            technical skills.
          </p>
          <div className="flex flex-row mt-8"> 
            <span className="mr-3 font-semibold hover: text-white text-[ADB7B3] border-b border-green-500">Skills</span>
            <span>Education</span>
            <span>Experience</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
