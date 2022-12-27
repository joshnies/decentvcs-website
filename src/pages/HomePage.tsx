import BaseLayout from "../layouts/BaseLayout";
import { Hero, HeroTitle, HeroWaitlistInput } from "./HomePage.styles";

const HomePage = () => {
  const onSubmitWaitlistForm = (e: Event) => {
    e.preventDefault();
    console.log("TODO: Handle waitlist form submission");
  };

  return (
    <BaseLayout>
      <Hero>
        <h4>Introducing DecentVCS</h4>
        <HeroTitle>Simple version control for massive projects.</HeroTitle>
        <HeroWaitlistInput
          placeholder="Enter email address"
          onSubmit={onSubmitWaitlistForm}
        >
          Join waitlist
        </HeroWaitlistInput>
      </Hero>
    </BaseLayout>
  );
};

export default HomePage;
