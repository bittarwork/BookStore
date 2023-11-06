import React from "react";

const CostumeButton = ({ text, href }) => {
  return (
    <a
      href={href}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-block transition-colors duration-300"
    >
      {text}
    </a>
  );
};
export default CostumeButton;