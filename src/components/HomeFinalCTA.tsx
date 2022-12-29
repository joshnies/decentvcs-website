import { Component } from "solid-js";
import { Root, StyledInputWithButton } from "./HomeFinalCTA.styles";

const HomeFinalCTA: Component = () => {
  return (
    <Root>
      <div>
        <h4>Join the waitlist</h4>
        <h2>We&apos;ll let you known when it&apos;s ready.</h2>
        <StyledInputWithButton type="email" placeholder="Enter email address">
          Join waitlist
        </StyledInputWithButton>
      </div>
      <p>
        We&apos;ll be rolling out access to DecentVCS over time, so join the
        waitlist to secure your spot in line and be one of the first teams to
        experience it.
      </p>
    </Root>
  );
};

export default HomeFinalCTA;
