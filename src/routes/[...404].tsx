import { Component } from "solid-js";
import { HttpStatusCode } from "solid-start/server";
import BaseLayout from "~/layouts/BaseLayout";

const NotFound: Component = () => {
  return (
    <BaseLayout title="Not Found">
      <HttpStatusCode code={404} />
      <h1>Page not found.</h1>
    </BaseLayout>
  );
};

export default NotFound;
