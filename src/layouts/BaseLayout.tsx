import { createSignal, ParentComponent } from "solid-js";
import { Title } from "solid-start";
import { createGlobalStyles, ThemeProvider } from "solid-styled-components";
import { Toaster } from "solid-toast";
import { lightTheme } from "~/themes";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Content, Root } from "./BaseLayout.styles";

export interface BaseLayoutProps {
  title?: string;
}

const BaseLayout: ParentComponent<BaseLayoutProps> = (props) => {
  const [theme] = createSignal<typeof lightTheme>(lightTheme);

  // Styles for applying current theme globally
  const GlobalStyles = createGlobalStyles`
    a {
      color: ${theme().colors.primary[500]};
    }
    a:hover {
      color: ${theme().colors.primary[700]};
    }

    input, textarea {
      border: 1px solid ${theme().colors.neutral[400]};
  
      &:focus {
        border-color: ${theme().colors.neutral[0]};
      }

      ::placeholder {
        color: ${theme().colors.neutral[400]};
      }
    }
  `;

  return (
    <ThemeProvider theme={theme()}>
      <GlobalStyles />
      <Toaster />
      <Root>
        <Title>
          {props.title ? `${props.title} | DecentVCS` : "DecentVCS"}
        </Title>
        <Nav />
        <Content>{props.children}</Content>
        <Footer />
      </Root>
    </ThemeProvider>
  );
};

export default BaseLayout;
