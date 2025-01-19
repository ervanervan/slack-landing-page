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
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imgSrc,
  imgAlt,
  imagePosition = "left",
  button,
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row items-center bg-white border-4 border-black py-1 rounded-xl  overflow-hidden shadow-[4px_6px_0px_rgba(0,0,0,1)] ${
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
            imagePosition === "left" ? "-ml-2" : "-mr-2"
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
    </div>
  );
};

export default FeatureCard;
