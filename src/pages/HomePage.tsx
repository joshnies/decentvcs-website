import HeroUXSection from "../components/HeroUXSection";
import ScrollIndicator from "../components/ScrollIndicator";
import BaseLayout from "../layouts/BaseLayout";
import {
  BackgroundImage,
  Hero,
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
        <h4>Introducing DecentVCS</h4>
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
    </BaseLayout>
  );
};

export default HomePage;
