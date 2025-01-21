import React from "react";

import featureImg1 from "../assets/images/feature-image-1.png";
import featureImg2 from "../assets/images/feature-image-2.png";
import featureImg3 from "../assets/images/feature-image-3.png";
import FeatureCard from "../components/FeatureCard";

const Features: React.FC = () => {
  return (
    <>
      <section className="relative py-16 bg-custom-gray-light">
        <div className="absolute inset-0 bg-wave-pattern bg-repeat bg-[length:450px] opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 space-y-14">
          <FeatureCard
            title="Bring Your Team Together"
            description="At the heart of Slack are channels: organized spaces for everyone and everything you need for work. In channels, it's easier to connect across departments, offices, time zones and even other companies."
            imgSrc={featureImg1}
            imgAlt="Channels"
            imagePosition="left"
            button="More about channels"
          />

          <FeatureCard
            title="Choose how you want to work"
            description="In Slack, you've got all the flexibility to work when, where and how it's best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live."
            imgSrc={featureImg2}
            imgAlt="Flexible"
            imagePosition="right"
            button="Flexible Communication"
          />

          <FeatureCard
            title="Move faster with your tools in one place"
            description="With your other work apps connected to Slack, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks."
            imgSrc={featureImg3}
            imgAlt="Tools"
            imagePosition="left"
            button="Learn more about channels"
          />
        </div>
      </section>
      <section className="relative bg-custom-gray-light h-64 w-full flex items-center justify-center text-gray-700">
        <div className="absolute inset-0 bg-wave-pattern bg-repeat bg-[length:100px] opacity-100"></div>
        <h1 className="text-xl font-bold relative z-10">Background Pudar</h1>
      </section>
    </>
  );
};

export default Features;
