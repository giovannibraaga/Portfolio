import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-green-500"
    : "text-[#ADB7B3]";

  return (
    <div>
      {" "}
      <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
          {children}
        </p>
      </button>
    </div>
  );
};

export default TabButton;
