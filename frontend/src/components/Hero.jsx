import React from "react";
import CostumeButton from "./CostumeButton";
const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Welcome to Our Book Store
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-12">
            Discover a wide range of books for all your interests
          </p>
          <CostumeButton text={"see more"} href={"#"}  />
        </div>
      </div>
    </section>
  );
};

export default Hero;
