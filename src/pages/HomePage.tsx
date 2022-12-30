import toast from "solid-toast";
import { isEmail } from "class-validator";
import HeroUXSection from "../components/HeroUXSection";
import HomeFeature from "../components/HomeFeature";
import HomeFinalCTA from "../components/HomeFinalCTA";
import HomePriceCard from "../components/HomePriceCard";
import ScrollIndicator from "../components/ScrollIndicator";
import BaseLayout from "../layouts/BaseLayout";
import {
  BackgroundImage,
  Features,
  Hero,
  HeroSubtitle,
  HeroTitle,
  HeroWaitlistInput,
} from "./HomePage.styles";
import config from "../config";

const HomePage = () => {
  const onSubmitWaitlistForm = async (value: string) => {
    const email = value.trim();

    if (email.length === 0) {
      return;
    }

    if (!isEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      await fetch(config.joinWaitlistWebhookUrl, {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again later.");
      return;
    }

    toast.success("You're in! We'll notify you once it's ready.");
  };

  return (
    <BaseLayout>
      <BackgroundImage src="/src/assets/home-bg.png" />
      <Hero>
        <HeroSubtitle>Introducing DecentVCS</HeroSubtitle>
        <HeroTitle>Simple version control for massive projects.</HeroTitle>
        <HeroWaitlistInput
          type="email"
          placeholder="Enter email address"
          onSubmit={onSubmitWaitlistForm}
        >
          Join waitlist
        </HeroWaitlistInput>
      </Hero>
      <ScrollIndicator />
      <HeroUXSection />
      <Features>
        <HomeFeature
          subtitle="Decentralized storage"
          title="Save big on storage space."
        >
          DecentVCS saves you an astounding amount on development costs by
          utilizing decentralized storage by default. This also brings other
          benefits such as an always-available data infrastructure with 100%
          uptime, as well as enhanced security across the board.
        </HomeFeature>
        <HomeFeature
          subtitle="Simplified workflow"
          title="Simplify dev workflows."
          flip
        >
          Version control doesn&apos;t get easier than this. And those with
          previous version control experience will feel right at home, no need
          to learn an entirely different workflow.
        </HomeFeature>
        <HomeFeature subtitle="Cloud" title="Fully-managed cloud hosting.">
          Don&apos;t waste development time setting up and managing
          infrastructure. Hit the ground running and throw away your worries,
          because we handle all the hosting for you, securely in the cloud.
        </HomeFeature>
      </Features>
      <HomePriceCard />
      <HomeFinalCTA />
    </BaseLayout>
  );
};

export default HomePage;
