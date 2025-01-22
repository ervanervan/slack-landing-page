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
  image,
  category,
  link,
  isFeatured,
}) => {
  return (
    <div
      className={`relative rounded-3xl border-2 border-black px-3 py-4 transition-all duration-300 shadow-[2px_2px_0px_rgba(0,0,0,1)] cursor-pointer 
      ${isFeatured ? "bg-yellow-400 hover:bg-yellow-500" : "bg-white"} 
      w-full md:w-52 h-72 flex flex-col justify-between`}
    >
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-28 object-cover rounded-xl"
        />
        <span className="text-xs font-medium mt-5 block">{category}</span>
        <h3 className="font-bold text-sm mt-1">{title}</h3>
      </div>
      <a
        href={link}
        className="text-black text-sm font-bold inline-block self-end"
      >
        {isFeatured ? "See All >" : "Read More >"}
      </a>
    </div>
  );
};

export default ArticleCard;
