import { A } from "@solidjs/router";
import { Component } from "solid-js";
import config from "../config";
import {
  Content,
  Copyright,
  MainGroup,
  Root,
  Sitemap,
  SitemapGroup,
} from "./Footer.styles";

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
          <Sitemap>
            <SitemapGroup>
              <h3>Version Control</h3>
              <A href="/">About</A>
              <A href={config.docsUrl}>Documentation</A>
              <A href="/downloads">Downloads</A>
              <A href="/support">Support</A>
              <A href={config.dashUrl}>Sign in</A>
            </SitemapGroup>
            <SitemapGroup>
              <h3>Legal</h3>
              <A href="/terms-of-service">Terms of service</A>
              <A href="/privacy-policy">Privacy policy</A>
            </SitemapGroup>
          </Sitemap>
        </MainGroup>
        <Copyright>
          Copyright 2023 DecentVCS, LLC. All rights reserved.
        </Copyright>
      </Content>
    </Root>
  );
};

export default Footer;
