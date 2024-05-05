"use client";

import React, { useState } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectButtons from "./ProjectButtons";

const projectsData = [
  {
    id: 1,
    title: "Acme",
    description:
      "Next.js dashboard project. Using React, Next.js, Postgres, API's, login methods...",
    image: "/images/projects/acme.png",
    github: "https://github.com/giovannibraaga/Acme",
    preview: "https://acmeproject.vercel.app/dashboard",
    tag: ["All", "Web", "API"],
  },
  {
    id: 2,
    title: "Pitchulinho - FIAP",
    description:
      "Made with HTML, Css, Bootstrap. A college project to make a showroom of our Robot, 'Pitchulinho'.",
    image: "/images/projects/pitchulinho.png",
    github: "https://github.com/giovannibraaga/Pitchulinho",
    preview: "https://pitchulinho.vercel.app",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "PassIn",
    description:
      "Java Project develop with Spring Boot, HyperSQLDB, developing API's.",
    image: "/images/projects/passin.png",
    github: "https://github.com/giovannibraaga/PassIn",
    preview: "https://github.com/giovannibraaga/PassIn",
    tag: ["All", "API"],
  },
  {
    id: 4,
    title: "GiGPT",
    description:
      "Typescript and React project using ChatGpt API to integrate the AI with the project. Upload a local video, and the AI will generate a title, description and hashtags for your video.",
    image: "/images/projects/gigpt.png",
    github: "https://github.com/giovannibraaga/GiGPT",
    preview: "https://rauschgpt.vercel.app/",
    tag: ["All", "Web", "API"],
  },
  {
    id: 5,
    title: "Habits",
    description: "Habit tracker made with JavaScript, HTML and Css.",
    image: "/images/projects/habits.png",
    github: "https://github.com/giovannibraaga/Habits",
    preview: "https://habitss.vercel.app/",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "SzOnTop",
    description: "React site to organize 'Valorant' teams.",
    image: "/images/projects/szontop.png",
    github: "https://github.com/giovannibraaga/SzonTop",
    preview: "https://szontop.vercel.app/",
    tag: ["All", "Web"],
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div className="pt-5" id="projects">
      <div className="md:pt-5 md:mt-5">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6 ">
          <ProjectButtons
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectButtons
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectButtons
            onClick={handleTagChange}
            name="API"
            isSelected={tag === "API"}
          />
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProject.map((project) => (
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
