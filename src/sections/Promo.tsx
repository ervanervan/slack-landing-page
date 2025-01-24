import slackText from "../assets/images/slack-text.svg";
import Button from "../components/Button";
import StatCard from "../components/StatCard";
import { stats } from "../data/statData";

const Promo = () => {
  return (
    <section className="px-4 lg:px-0 py-16 max-w-[980px] mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div>
          <div className="flex items-end justify-center">
            <h2 className="font-semibold text-[1.75rem]">
              Teams <span className="font-extrabold">large</span> and small rely
              on
            </h2>
            <img src={slackText} alt="" className="w-36 mb-2.5" />
          </div>
          <p className="font-semibold text-lg md:text-center mt-3 w-full md:max-w-[37rem] mx-auto">
            Slack securely scales up to support collaboration at the
            world&apos;s biggest companies.
          </p>
        </div>
        <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-3 w-full lg:w-fit">
          <Button variant="secondary">Meet Slack For Enterprise</Button>
          <Button variant="primary">Talk to Sales</Button>
        </div>
        <div className="mt-14 w-full md:w-[45rem] flex flex-col items-center md:items-start md:flex-row justify-center gap-24">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              percentage={stat.percentage}
              text={stat.text}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promo;
