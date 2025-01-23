import slackText from "../assets/images/slack-text.svg";
import Button from "../components/Button";

const Promo = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center justify-center">
        <div>
          <div className="flex items-end justify-center">
            <h2 className="font-semibold text-[1.75rem]">
              Teams <span className="font-extrabold">large</span> and small rely
              on
            </h2>
            <img src={slackText} alt="" className="w-36 mb-2.5" />
          </div>
          <p className="font-semibold text-lg text-center mt-3 w-full md:max-w-[37rem] mx-auto">
            Slack securely scales up to support collaboration at the
            world&apos;s biggest companies.
          </p>
        </div>
        <div className="mt-14 flex items-center gap-3">
          <Button variant="secondary">Meet Slack For Enterprise</Button>
          <Button variant="primary">Talk to Sales</Button>
        </div>
        <div className="mt-14 flex items-center justify-center gap-24"></div>
      </div>
    </section>
  );
};

export default Promo;
