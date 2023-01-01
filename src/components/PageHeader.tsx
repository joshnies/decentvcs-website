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
        <h4>Support</h4>
        <h2>We&apos;ve got all &apos;dem answers.</h2>
        <p>We should get back to you within 24 business hours.</p>
      </Header>
    </Root>
  );
};

export default PageHeader;
