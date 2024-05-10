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
    tag: ["All", "Front-End", "Back-End"],
  },
  {
    id: 2,
    title: "Pitchulinho - FIAP",
    description:
      "Made with HTML, Css, Bootstrap. A college project to make a showroom of our Robot, 'Pitchulinho'.",
    image: "/images/projects/pitchulinho.png",
    github: "https://github.com/giovannibraaga/Pitchulinho",
    preview: "https://pitchulinho.vercel.app",
    tag: ["All", "Front-End"],
  },
  {
    id: 3,
    title: "passIn",
    description:
      "Java Project develop with Spring Boot, HyperSQLDB, developing API's.",
    image: "/images/projects/passin.png",
    github: "https://github.com/giovannibraaga/PassIn",
    preview: "https://github.com/giovannibraaga/PassIn",
    tag: ["All", "Back-End"],
  },
  {
    id: 4,
    title: "rausch.ai",
    description:
      "Typescript and React project using ChatGpt API to integrate the AI with the project. Upload a local video, and the AI will generate a title, description and hashtags for your video.",
    image: "/images/projects/rausch-ai.png",
    github: "https://github.com/giovannibraaga/rausch.ai",
    preview: "https://rauschai.vercel.app/",
    tag: ["All", "Front-End"],
  },
  {
    id: 5,
    title: "Habits",
    description: "Habit tracker made with JavaScript, HTML and Css.",
    image: "/images/projects/habits.png",
    github: "https://github.com/giovannibraaga/Habits",
    preview: "https://habitss.vercel.app/",
    tag: ["All", "Front-End"],
  },
  {
    id: 6,
    title: "rausch.ai API",
    description: "API to integrate ChatGPT to my application, made with Typescript, Prisma and used Fastify and zod.",
    image: "/images/projects/rausch-api.png",
    github: "https://github.com/giovannibraaga/rausch.ai-api",
    preview: 'https://github.com/giovannibraaga/rausch.ai-api',
    tag: ["All", "Back-End"],
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
            name="Front-End"
            isSelected={tag === "Front-End"}
          />
          <ProjectButtons
            onClick={handleTagChange}
            name="Back-End"
            isSelected={tag === "Back-End"}
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
