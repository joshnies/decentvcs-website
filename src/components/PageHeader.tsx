import { Component } from "solid-js";
import { Header, Root } from "./PageHeader.styles";

export interface PageHeaderProps {
  title: string;
  subtitle: string;
  description?: string;
}

const PageHeader: Component<PageHeaderProps> = (props) => {
  return (
    <Root>
      <Header>
        <h4>{props.subtitle}</h4>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </Header>
    </Root>
  );
};

export default PageHeader;
