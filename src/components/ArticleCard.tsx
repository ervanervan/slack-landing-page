import React from "react";

type ArticleCardProps = {
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  isFeatured: boolean;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  image,
  category,
  link,
  isFeatured,
}) => {
  return (
    <div
      className={`relative rounded-3xl border-2 border-black p-4 transition-all duration-300 shadow-[2px_2px_0px_rgba(0,0,0,1)] cursor-pointer 
      ${isFeatured ? "bg-yellow-400 hover:bg-yellow-500" : "bg-white"} 
      w-52 h-72`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-32 object-cover rounded-lg"
      />
      <span className="text-xs font-medium mt-5 block">{category}</span>
      <h3 className="font-bold mt-1">{title}</h3>
      <p className="text-gray-700 text-sm mt-1">{description}</p>
      <a href={link} className="text-black font-bold mt-2 inline-block">
        {isFeatured ? "See All >" : "Read More >"}
      </a>
    </div>
  );
};

export default ArticleCard;
