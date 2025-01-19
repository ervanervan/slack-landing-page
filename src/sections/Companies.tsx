import { companiesData } from "../data/companiesData";
import vectorC1 from "../assets/images/vector-companies-1.svg";
import vectorC2 from "../assets/images/vector-companies-2.svg";

const Companies = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-[4.5rem]">
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <h2 className="text-xl md:text-4xl font-bold text-center uppercase">
              Trusted by companies <br />
              <span className="text-xl md:text-2xl font-extrabold">
                all over the world
              </span>
            </h2>
            <img
              src={vectorC1}
              alt=""
              className="absolute -top-8 md:-left-9 -left-4"
            />
            <img
              src={vectorC2}
              alt=""
              className="absolute -bottom-4 md:right-8 right-20"
            />
          </div>
          <div className="mt-16 flex justify-center items-center gap-5 md:gap-10 lg:gap-20">
            {companiesData.map(({ id, images }) => (
              <div key={id}>
                <img
                  src={images}
                  loading="lazy"
                  className="size-10 md:size-14 lg:size-16 hover:opacity-80 opacity-100 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Companies;
