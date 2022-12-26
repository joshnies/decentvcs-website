import { A } from "@solidjs/router";
import { Root } from "./Nav.styles";

export default function Nav() {
  return (
    <Root>
      <A href="/">
        <img
          src="/src/assets/logo-white.svg"
          alt="DecentVCS Logo"
          width={32}
          height={32}
        />
      </A>
    </Root>
  );
}
