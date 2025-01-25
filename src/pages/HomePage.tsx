import Hero from "../sections/Hero";
import Promo from "../sections/Promo";
import Articles from "../sections/Articles";
import Companies from "../sections/Companies";
import Features from "../sections/Features";
import Testimonial from "../sections/Testimonial";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Companies />
      <Features />
      <Promo />
      <Testimonial />
      <Articles />
    </>
  );
};

export default HomePage;
