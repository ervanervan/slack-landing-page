import React from "react";
import Button from "./Button";
import LinkIcon from "../assets/icons/LinkIcon";

interface FeatureCardProps {
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  imagePosition?: "left" | "right";
  button: string;
  vectorImgSrc: string; // Properti gambar vektor
  vectorImgPosition?: "left" | "right"; // Posisi gambar vektor
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imgSrc,
  imgAlt,
  imagePosition = "left",
  button,
  vectorImgSrc,
  vectorImgPosition = "right", // Default posisi gambar vektor di kanan
}) => {
  return (
    <div
      className={`relative flex flex-col sm:flex-row items-center bg-white border-4 border-black py-1 rounded-xl shadow-[4px_6px_0px_rgba(0,0,0,1)] ${
        imagePosition === "right" ? "sm:flex-row-reverse" : ""
      }`}
    >
      {/* Bagian Gambar */}
      <div
        className={`w-full sm:w-1/2 flex py-6 ${
          imagePosition === "left"
            ? "justify-start md:border-r-2 border-black"
            : "justify-end md:border-l-2 border-black"
        }`}
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          className={`w-[34.5rem] h-auto ${
            imagePosition === "left" ? "-ml-1" : "-mr-1"
          }`}
        />
      </div>

      {/* Bagian Teks */}
      <div className="w-full sm:w-1/2 p-4 lg:px-16 lg:py-14">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="font-medium text-base text-black/70">{description}</p>
        <Button
          variant="primary"
          icon={<LinkIcon />}
          iconPosition="right"
          className="mt-6"
        >
          {button}
        </Button>
      </div>

      {/* Vector image */}
      <img
        src={vectorImgSrc}
        alt="Vector Image"
        className={`absolute -bottom-5 hidden md:inline-flex ${
          vectorImgPosition === "right" ? "-right-20" : "-left-20"
        }`}
      />
    </div>
  );
};

export default FeatureCard;
