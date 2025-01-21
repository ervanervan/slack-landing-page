import Articles from "../sections/Articles";
import Companies from "../sections/Companies";
import Features from "../sections/Features";
import Hero from "../sections/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Companies />
      <Features />
      <Articles />
    </>
  );
};

export default HomePage;
