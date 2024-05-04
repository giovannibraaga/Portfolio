import React from "react";
import ProjectsCard from "./ProjectsCard";

const projectsData = [
  {
    id: 1,
    title: "Acme",
    description:
      "Next.js dashboard project. Using React, Next.js, Postgres, API's, login methods...",
    image: "/images/projects/acme.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Pitchulinho - FIAP",
    description:
      "Made with HTML, Css, Bootstrap. A college project to make a showroom of our Robot, 'Pitchulinho'.",
    image: "/images/projects/pitchulinho.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "PassIn",
    description:
      "Java Project develop with Spring Boot, HyperSQLDB, developing API's",
    image: "/images/projects/passin.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "GiGPT",
    description:
      "Typescript and React project using ChatGpt API to integrate the AI with the project. Upload a local video, and then, the ai will generate a title, description and hashtags for your video. Soon will updato to GPT-4 👀",
    image: "/images/projects/gigpt.png",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Habit",
    description: "Habit tracker made with JavaScript, HTML and Css",
    image: "/images/projects/habits.png",
    tag: ["All", "Web"],
  },
];

const ProjectSection = () => {
  return (
    <div>
      <h2>My Projects</h2>
      <div>
        {projectsData.map((project) => (
          <ProjectsCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
