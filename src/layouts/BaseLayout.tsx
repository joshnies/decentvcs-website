import { ParentComponent } from "solid-js";

import Nav from "../components/Nav";
import { Content, Root } from "./BaseLayout.styles";

const BaseLayout: ParentComponent = (props) => {
  return (
    <Root>
      <Nav />
      <Content>{props.children}</Content>
    </Root>
  );
};

export default BaseLayout;
