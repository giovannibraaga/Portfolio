import React from "react";
import ProjectsCard from "./ProjectsCard";

const projectsData = [
  {
    id: 1,
    title: "Acme",
    description:
      "Next.js dashboard project. Using React, Next.js, Postgres, API's, login methods...",
    image: "/images/projects/acme.png",
    widht: "450px",
    height:"280px",
    github: "https://github.com/giovannibraaga/Acme",
    preview: "https://acmeproject.vercel.app/dashboard",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Pitchulinho - FIAP",
    description:
      "Made with HTML, Css, Bootstrap. A college project to make a showroom of our Robot, 'Pitchulinho'.",
    image: "/images/projects/pitchulinho.png",
    widht: "450px",
    height:"280px",
    github: "https://github.com/giovannibraaga/Pitchulinho",
    preview: "https://pitchulinho.vercel.app",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "PassIn",
    description:
      "Java Project develop with Spring Boot, HyperSQLDB, developing API's",
    image: "/images/projects/passin.png",
    github: "https://github.com/giovannibraaga/PassIn",
    preview: "",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "GiGPT",
    description:
      "Typescript and React project using ChatGpt API to integrate the AI with the project. Upload a local video, and then, the ai will generate a title, description and hashtags for your video. Soon will updato to GPT-4 👀",
    image: "/images/projects/gigpt.png",
    github: "https://github.com/giovannibraaga/GiGPT",
    preview: "https://rauschgpt.vercel.app/",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Habits",
    description: "Habit tracker made with JavaScript, HTML and Css",
    image: "/images/projects/habits.png",
    github: "https://github.com/giovannibraaga/Habits",
    preview: "https://habitss.vercel.app/",
    tag: ["All", "Web"],
  },
];

const ProjectSection = () => {
  return (
    <div className="pt-5" id="projects">
    <div className="md:pt-5 md:mt-5">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsData.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitURL={project.github}
            previewURL={project.preview}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProjectSection;
