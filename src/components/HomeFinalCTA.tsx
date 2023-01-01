import { Component } from "solid-js";
import { Root, StyledInputWithButton } from "./HomeFinalCTA.styles";

export interface HomeFinalCTAProps {
  onSubmitWaitlistForm: (ref: HTMLInputElement, value: string) => void;
}

const HomeFinalCTA: Component<HomeFinalCTAProps> = (props) => {
  return (
    <Root>
      <div>
        <h4>Join the waitlist</h4>
        <h2>We&apos;ll let you know when it&apos;s ready.</h2>
        <StyledInputWithButton
          type="email"
          placeholder="Enter email address"
          onSubmit={props.onSubmitWaitlistForm}
        >
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
