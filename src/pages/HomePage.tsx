import HeroUXSection from "../components/HeroUXSection";
import HomeFeature from "../components/HomeFeature";
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

const HomePage = () => {
  const onSubmitWaitlistForm = (e: Event) => {
    e.preventDefault();
    console.log("TODO: Handle waitlist form submission");
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
    </BaseLayout>
  );
};

export default HomePage;
