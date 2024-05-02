import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="A guy with a macbook coding"
          src="/images/coding.png"
          width={500}
          height={500}
        />
      </div>
      <div>
        <h2>About Me</h2>
        <p>
          I am currently a third-semester Information Systems student at FIAP,
          deeply passionate about all things tech, with a particular focus on
          web development. I have a solid foundation in programming, with strong
          skills in JavaScript, Java, HTML, and CSS. My academic journey is
          complemented by hands-on project experience, including a notable stint
          at RoboCup, where I developed critical teamwork and technical skills.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
