import { ParentComponent } from "solid-js";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Content, Root } from "./BaseLayout.styles";

const BaseLayout: ParentComponent = (props) => {
  return (
    <Root>
      <Nav />
      <Content>{props.children}</Content>
      <Footer />
    </Root>
  );
};

export default BaseLayout;
