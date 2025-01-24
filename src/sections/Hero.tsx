import GoogleIcon from "../assets/icons/GoogleIcon";
import Button from "../components/Button";
import heroImage from "../assets/images/hero-image.png";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center border-b-2 border-black pt-16">
        {/* Left section */}
        <div className="bg-custom-purple w-full md:border-r-2 border-black h-full">
          <div className="flex flex-col justify-center h-full px-4 py-16 xl:p-16">
            <div>
              <h1 className="text-custom-white text-[2.5rem] md:text-[2.1rem] font-semibold leading-none w-full md:max-w-[30.5rem]">
                Great teamwork starts{" "}
                <span className="text-[2.4rem] md:text-[2rem] font-black tracking-tighter">
                  with a <span className="text-custom-yellow">digital HQ</span>
                </span>
              </h1>
            </div>
            <p className="mt-12 text-custom-white text-xl font-normal w-full md:max-w-[30.5rem]">
              With all your people, tools and communication in one place, you
              can work <span className="font-semibold">faster</span> and{" "}
              <span className="font-semibold">more flexibly</span> than ever
              before.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-7 mt-16">
              <Button variant="secondary">Email Signup</Button>
              <Button variant="primary" icon={<GoogleIcon />}>
                Google Signup
              </Button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-custom-white w-full">
          <div>
            <img src={heroImage} alt="hero image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
