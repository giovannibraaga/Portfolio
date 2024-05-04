import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectsCard = ({ imgUrl, title, description, gitURL, previewURL }) => {
  return (
    <div className="pt-3" id="projects">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay justify-center items-center absolute top-0 left-0 w-full h-full bg-[#31373F] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-1000">
          <Link
            href={gitURL}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7B3] hover:border-white group/link mr-2"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewURL}
            target="_blank"
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7B3] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      <div className="text-white rounded-b-xl bg-[#31373F] py-6 px-4 mt-2 ">
        <h5 className="font-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
