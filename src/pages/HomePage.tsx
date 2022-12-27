import BaseLayout from "../layouts/BaseLayout";
import { Hero, HeroTitle } from "./HomePage.styles";

const HomePage = () => {
  return (
    <BaseLayout>
      <Hero>
        <h4>Introducing DecentVCS</h4>
        <HeroTitle>Simple version control for massive projects.</HeroTitle>
      </Hero>
    </BaseLayout>
  );
};

export default HomePage;
