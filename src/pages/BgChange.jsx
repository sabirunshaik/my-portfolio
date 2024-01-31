import React, { useState } from "react";

const ColorChangeButton = () => {
  const [isBodyColorChanged, setIsBodyColorChanged] = useState(false);

  const handleButtonClick = () => {
    // Toggle the state value
    setIsBodyColorChanged(!isBodyColorChanged);

    // Get the body element and change its background color
    const body = document.querySelector(".body");
    if (body) {
      body.style.backgroundColor = isBodyColorChanged ? "#ffffff" : "#000000";
    }
  };

  return (
    <div className="body h-screen w-full flex justify-end items-start p-5">
      <button className="border-0 px-5 py-1 shadow-xl rounded-lg bg-black text-white" onClick={handleButtonClick}>
        toggle
      </button>
    </div>
  );
};

export default ColorChangeButton;
