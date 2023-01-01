import { A } from "@solidjs/router";
import { Component, JSX } from "solid-js";
import config from "../config";
import { Root } from "./NavDrawer.styles";

const NavOverlay: Component<JSX.BaseHTMLAttributes<HTMLElement>> = (props) => {
  return (
    <Root style={props.style}>
      <A href={config.docsUrl}>Documentation</A>
      <A href="/downloads">Downloads</A>
      <A href="/support">Support</A>
      <A href={config.dashUrl}>Sign in</A>
    </Root>
  );
};

export default NavOverlay;
