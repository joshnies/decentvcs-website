import { Component } from "solid-js";
import { Content, Copyright, MainGroup, Root } from "./Footer.styles";

const Footer: Component = () => {
  return (
    <Root>
      <Content>
        <MainGroup>
          <img
            src="/src/assets/logo-full-white.svg"
            alt="DecentVCS"
            width={144}
            height={24}
          />
        </MainGroup>
        <Copyright>
          Copyright 2023 DecentVCS, LLC. All rights reserved.
        </Copyright>
      </Content>
    </Root>
  );
};

export default Footer;
