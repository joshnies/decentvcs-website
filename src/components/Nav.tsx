import { A } from "@solidjs/router";
import { createMediaQuery } from "@solid-primitives/media";
import config from "../config";
import { LinkButton } from "./Buttons";
import { HamburgerButton, Link, LinksContainer, Root } from "./Nav.styles";
import { createSignal } from "solid-js";
import NavOverlay from "./NavDrawer";

export default function Nav() {
  const [showDrawer, setShowDrawer] = createSignal(false);
  const showLinks = createMediaQuery("(min-width: 768px)");

  return (
    <>
      <NavOverlay style={{ height: showDrawer() ? "100%" : "0" }} />
      <Root>
        <A href="/">
          <img
            src="/src/assets/logo-full-white.svg"
            alt="DecentVCS"
            width={144}
            height={24}
          />
        </A>
        {!showLinks() && (
          <HamburgerButton onClick={() => setShowDrawer(!showDrawer())}>
            <i class={showDrawer() ? "ph-x" : "ph-list"} />
          </HamburgerButton>
        )}
        {showLinks() && (
          <LinksContainer>
            <Link href={config.docsUrl}>Documentation</Link>
            <Link href="/support">Support</Link>
            <Link href={config.dashUrl}>Sign in</Link>
            <LinkButton href="/">Join waitlist</LinkButton>
          </LinksContainer>
        )}
      </Root>
    </>
  );
}
