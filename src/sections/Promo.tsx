import BriefcaseIcon from "../assets/icons/BriefcaseIcon";
import ChartIcon from "../assets/icons/ChartIcon";
import FlexedBicepsIcon from "../assets/icons/FlexedBicepsIcon";
import LockedIcon from "../assets/icons/LockedIcon";
import LoveYouIcon from "../assets/icons/LoveYouIcon";
import RedHeartIcon from "../assets/icons/RedHeart";
import slackText from "../assets/images/slack-text.svg";
import Button from "../components/Button";
import StatButton from "../components/StatButton";
import StatCard from "../components/StatCard";
import { stats } from "../data/statData";

const Promo = () => {
  return (
    <section className="px-4 lg:px-0 py-16 max-w-[980px] mx-auto">
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
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

          <StatButton
            icon={<LockedIcon size={24} />}
            count={12}
            size="xlarge"
            className="absolute -top-4 hidden lg:-left-28"
          />
          <StatButton
            icon={<BriefcaseIcon size={18} />}
            count={30}
            size="medium"
            className="absolute top-12 hidden lg:-left-40"
          />
          <StatButton
            icon={<ChartIcon size={18} />}
            count={27}
            size="medium"
            className="absolute -bottom-4 hidden lg:-left-28"
          />
          <StatButton
            icon={<FlexedBicepsIcon size={16} />}
            count={27}
            size="small"
            className="absolute -top-4 hidden lg:-right-32"
          />
          <StatButton
            icon={<RedHeartIcon size={22} />}
            count={42}
            size="large"
            className="absolute top-11 hidden lg:-right-28"
          />
          <StatButton
            icon={<LoveYouIcon size={18} />}
            count={18}
            size="medium"
            className="absolute -bottom-4 hidden lg:-right-40"
          />
        </div>
        <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-3 w-full lg:w-fit">
          <Button variant="secondary">Meet Slack For Enterprise</Button>
          <Button variant="primary">Talk to Sales</Button>
        </div>
        <div className="mt-14 w-full md:w-[45rem] flex flex-col items-center md:items-start md:flex-row justify-center gap-10 md:gap-24">
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
