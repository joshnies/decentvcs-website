// import { A } from "@solidjs/router";
import { Component } from "solid-js";
// import config from "../config";
import {
  Content,
  Copyright,
  MainGroup,
  Root,
  // Sitemap,
  // SitemapGroup,
} from "./Footer.styles";

const Footer: Component = () => {
  return (
    <Root>
      <Content>
        <MainGroup>
          <img
            src="/images/logo-full-white.svg"
            alt="DecentVCS"
            width={144}
            height={24}
          />
          {/* <Sitemap>
            <SitemapGroup>
              <h3>Version Control</h3>
              <A href={config.routes.documentation}>Documentation</A>
              <A href={config.routes.downloads}>Downloads</A>
              <A href={config.routes.support}>Support</A>
            </SitemapGroup>
            <SitemapGroup>
              <h3>Legal</h3>
              <A href={config.routes.termsOfService}>Terms of service</A>
              <A href={config.routes.privacyPolicy}>Privacy policy</A>
            </SitemapGroup>
          </Sitemap> */}
        </MainGroup>
        <Copyright>
          Copyright {new Date().getFullYear()} DecentVCS, LLC. All rights
          reserved.
        </Copyright>
      </Content>
    </Root>
  );
};

export default Footer;
