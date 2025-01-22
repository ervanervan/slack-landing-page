import ArticleCard from "../components/ArticleCard";
import { articleList } from "../data/articleList";

const Articles = () => {
  return (
    <section className="relative py-16 bg-custom-gray-light">
      <div className="absolute inset-0 bg-sigma-pattern bg-repeat bg-[length:450px] opacity-20"></div>
      <div className="relative z-10 max-w-[61.25rem] mx-auto px-4 lg:px-0">
        <h2 className="text-center font-bold text-2xl text-white custom-text-shadow mb-16">
          Take a{" "}
          <span className="text-custom-yellow font-extrabold">deeper dive</span>{" "}
          into a new way to work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-8 md:gap-12">
          {articleList.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
