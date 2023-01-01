import { Component, createSignal } from "solid-js";
import BackgroundImage from "../components/BackgroundImage";
import { Button } from "../components/Buttons";
import BaseLayout from "../layouts/BaseLayout";
import { Content, Form, FormContainer, InputGroup } from "./SupportPage.styles";
import bgImageUrl from "../assets/bg-2.png";
import PageHeader from "../components/PageHeader";
import OptionSelect from "../components/OptionSelect";
import toast from "solid-toast";
import { isEmail } from "class-validator";

const SupportPage: Component = () => {
  let firstNameRef: HTMLInputElement | undefined;
  let lastNameRef: HTMLInputElement | undefined;
  let emailRef: HTMLInputElement | undefined;
  let messageRef: HTMLTextAreaElement | undefined;

  const inquiryOptions = [
    "Technical Support",
    "Enterprise",
    "Billing",
    "Other",
  ];

  const [inquiryType, setInquiryType] = createSignal<string>(inquiryOptions[0]);

  const onSubmit = (e: Event) => {
    e.preventDefault();

    // Validate form
    const firstName = firstNameRef?.value?.trim() ?? "";
    const lastName = lastNameRef?.value?.trim() ?? "";
    const email = emailRef?.value?.trim() ?? "";
    const message = messageRef?.value?.trim() ?? "";

    if (firstName.length === 0) {
      toast.error("Please enter your first name.");
      return;
    }

    if (lastName.length === 0) {
      toast.error("Please enter your last name.");
      return;
    }

    if (email.length === 0) {
      toast.error("Please enter your email address.");
      return;
    }

    if (!isEmail(email)) {
      toast.error("Invalid email address.");
      return;
    }

    if (message.length === 0) {
      toast.error("Please enter a message.");
      return;
    }

    if (message.length < 32) {
      toast.error("Your message must be at least 32 characters long.");
      return;
    }

    // TODO: Send request to cloud function for sending email
    console.log("TODO: Handle onSubmit");
    console.log({
      inquiryType: inquiryType(),
      firstName: firstNameRef?.value,
      lastName: lastNameRef?.value,
      email: emailRef?.value,
      message: messageRef?.value,
    });
  };

  return (
    <BaseLayout>
      <BackgroundImage src={bgImageUrl} />
      <PageHeader
        subtitle="Support"
        title="We've got all 'dem answers."
        description="We should get back to you within 24 business hours."
      />
      <Content>
        <FormContainer>
          <Form onSubmit={onSubmit}>
            <h3>What's your inquiry about?</h3>
            <OptionSelect
              options={inquiryOptions}
              selected={inquiryType()}
              onChange={setInquiryType}
              style={{
                "margin-bottom": "1rem",
              }}
            />
            <InputGroup>
              <input ref={firstNameRef} type="text" placeholder="First name" />
              <input ref={lastNameRef} type="text" placeholder="Last name" />
            </InputGroup>
            <input ref={emailRef} type="email" placeholder="Email" />
            <textarea ref={messageRef} placeholder="Message" />
            <Button type="submit" style={{ width: "170px" }}>
              Send message
            </Button>
          </Form>
        </FormContainer>
      </Content>
    </BaseLayout>
  );
};

export default SupportPage;
