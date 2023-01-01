import { A, useLocation } from "@solidjs/router";
import { createMediaQuery } from "@solid-primitives/media";
import { createSignal } from "solid-js";
import config from "../config";
import { LinkButton } from "./Buttons";
import { HamburgerButton, Link, LinksContainer, Root } from "./Nav.styles";
import NavOverlay from "./NavDrawer";
import logoFullWhiteUrl from "../assets/logo-full-white.svg";

export default function Nav() {
  const [showDrawer, setShowDrawer] = createSignal(false);
  const location = useLocation();
  const showLinks = createMediaQuery("(min-width: 768px)");

  const downloadsRoute = "/downloads";
  const supportRoute = "/support";

  return (
    <>
      <NavOverlay style={{ height: showDrawer() ? "100%" : "0" }} />
      <Root>
        <A href="/">
          <img src={logoFullWhiteUrl} alt="DecentVCS" width={144} height={24} />
        </A>
        {!showLinks() && (
          <HamburgerButton onClick={() => setShowDrawer(!showDrawer())}>
            <i class={showDrawer() ? "ph-x" : "ph-list"} />
          </HamburgerButton>
        )}
        {showLinks() && (
          <LinksContainer>
            <Link href={config.docsUrl}>Documentation</Link>
            <Link
              href={downloadsRoute}
              active={location.pathname === downloadsRoute}
            >
              Downloads
            </Link>
            <Link
              href={supportRoute}
              active={location.pathname === supportRoute}
            >
              Support
            </Link>
            <LinkButton href={config.dashUrl}>Sign in</LinkButton>
          </LinksContainer>
        )}
      </Root>
    </>
  );
}
