import { A, useLocation } from "@solidjs/router";
import { createMediaQuery } from "@solid-primitives/media";
import { createSignal } from "solid-js";
import config from "../config";
import LinkButton from "./LinkButton";
import { HamburgerButton, Link, LinksContainer, Root } from "./Nav.styles";
import NavOverlay from "./NavDrawer";
import logoFullWhiteUrl from "../assets/logo-full-white.svg";

export default function Nav() {
  const [showDrawer, setShowDrawer] = createSignal(false);
  const location = useLocation();
  const showLinks = createMediaQuery("(min-width: 768px)");

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
            <Link href={config.routes.documentation}>Documentation</Link>
            <Link
              href={config.routes.downloads}
              active={location.pathname === config.routes.downloads}
            >
              Downloads
            </Link>
            <Link
              href={config.routes.support}
              active={location.pathname === config.routes.support}
            >
              Support
            </Link>
            <LinkButton href={config.routes.dashboard}>Sign in</LinkButton>
          </LinksContainer>
        )}
      </Root>
    </>
  );
}
