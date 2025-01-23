import promoVideo from "../assets/images/promo-video.png";
import vectorTriangle from "../assets/images/vector-triangle.svg";

const Testimonial = () => {
  return (
    <section className="max-w-[980px] mx-auto p-4 md:p-0">
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-y-4">
        <img
          src={vectorTriangle}
          alt=""
          className="absolute top-0 -left-16 -z-10"
        />
        <img
          src={promoVideo}
          alt=""
          className="w-[22rem] lg:w-[26rem] h-auto"
        />
        <div className="flex flex-col md:p-3">
          <p className="text-2xl font-medium">
            “We were able to create a large virtual network of employees that
            can communicate as though they are together. There was a lot of
            disruption in terms of where we worked, but in terms of how we
            worked—very little disruption.”
          </p>
          <div>
            <h3 className="font-bold text-xl mt-3">Mark Smith</h3>
            <p className="text-lg">
              Senior Technical Product Manager, T-Mobile
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
