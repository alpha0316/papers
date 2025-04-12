import React from "react";

const CustomButton = ({ text, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-[#1C76FD] hover:bg-[#1559C3] text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
