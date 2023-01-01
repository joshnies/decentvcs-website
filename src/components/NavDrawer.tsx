import { A } from "@solidjs/router";
import { Component, JSX } from "solid-js";
import config from "../config";
import { Root } from "./NavDrawer.styles";

const NavOverlay: Component<JSX.BaseHTMLAttributes<HTMLElement>> = (props) => {
  return (
    <Root style={props.style}>
      {/* <A href={config.routes.documentation}>Documentation</A>
      <A href={config.routes.downloads}>Downloads</A> */}
      <A href={config.routes.support}>Support</A>
      {/* <A href={config.routes.dashboard}>Sign in</A> */}
      <A href="/">Join waitlist</A>
    </Root>
  );
};

export default NavOverlay;
