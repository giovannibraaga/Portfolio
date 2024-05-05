import React from "react";

const ProjectButtons = ({name, onClick, isSelected}) => {

    const buttonStyle = isSelected
    ? "text-white border-green-500" : "text-[#adb7be] border-slate-600 hover:border-white hover:text-white"

  return (
    <button className={`${buttonStyle} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`} onClick={() => onClick(name)}>
      {name}
    </button>
  );
};

export default ProjectButtons;
