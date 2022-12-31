import { Component } from "solid-js";
import { Button } from "../components/Buttons";
import BaseLayout from "../layouts/BaseLayout";
import { Container, Form, Header, InputGroup } from "./SupportPage.styles";

const SupportPage: Component = () => {
  let firstNameRef: HTMLInputElement | undefined;
  let lastNameRef: HTMLInputElement | undefined;
  let emailRef: HTMLInputElement | undefined;
  let messageRef: HTMLTextAreaElement | undefined;

  const onSubmit = (e: Event) => {
    e.preventDefault();

    // TODO: Handle onSubmit
    console.log("TODO: Handle onSubmit");
    console.log({
      firstName: firstNameRef?.value,
      lastName: lastNameRef?.value,
      email: emailRef?.value,
      message: messageRef?.value,
    });
  };

  return (
    <BaseLayout>
      <Container>
        <Header>
          <h4>Support</h4>
          <h2>We&apos;ve got all &apos;dem answers.</h2>
          <p>We should get back to you within 24 business hours.</p>
        </Header>
        <Form onSubmit={onSubmit}>
          <InputGroup>
            <input ref={firstNameRef} type="text" placeholder="First name" />
            <input ref={lastNameRef} type="text" placeholder="Last name" />
          </InputGroup>
          <input type="email" placeholder="Email" />
          <textarea ref={messageRef} placeholder="Message" />
          <Button type="submit">Send message</Button>
        </Form>
      </Container>
    </BaseLayout>
  );
};

export default SupportPage;
