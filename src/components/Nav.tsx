import { A } from "@solidjs/router";
import config from "../config";
import { LinkButton } from "./Buttons";
import { Link, LinksContainer, Root } from "./Nav.styles";

export default function Nav() {
  return (
    <Root>
      <A href="/">
        <img
          src="/src/assets/logo-full-white.svg"
          alt="DecentVCS Logo"
          width={144}
          height={24}
        />
      </A>
      <LinksContainer>
        <Link href={config.docsUrl}>Documentation</Link>
        <Link href="/support">Support</Link>
        <Link href={config.dashUrl}>Sign in</Link>
        <LinkButton href="/">Join waitlist</LinkButton>
      </LinksContainer>
    </Root>
  );
}
