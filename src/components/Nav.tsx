import { A } from "@solidjs/router";
import { Root } from "./Nav.styles";

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
    </Root>
  );
}
