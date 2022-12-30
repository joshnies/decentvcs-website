import { createMediaQuery } from "@solid-primitives/media";
import { ParentComponent } from "solid-js";
import { Root } from "./HomeFeature.styles";
import { HomeFeatureProps } from "./HomeFeature.types";

const HomeFeature: ParentComponent<HomeFeatureProps> = (props) => {
  const isLarge = createMediaQuery("(min-width: 768px)");

  const header = (
    <div>
      <h4>{props.subtitle}</h4>
      <h2>{props.title}</h2>
    </div>
  );

  const description = <p>{props.children}</p>;

  return (
    <Root>
      {props.flip && isLarge() ? [description, header] : [header, description]}
    </Root>
  );
};

export default HomeFeature;
