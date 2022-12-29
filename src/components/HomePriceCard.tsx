import { Component } from "solid-js";
import {
  AsteriskDescription,
  AsteriskGroup,
  Details,
  Header,
  Root,
} from "./HomePriceCard.styles";

const HomePriceCard: Component = () => {
  return (
    <Root>
      <Header>
        <h2>At a price you can actually afford.</h2>
      </Header>
      <Details>
        <h3>
          $10<span> / month</span>
        </h3>
        <ul>
          <li>
            <i class="ph-check" />
            <AsteriskGroup>
              250 GB of storage <span>†</span>
            </AsteriskGroup>
          </li>
          <li>
            <i class="ph-check" />
            <AsteriskGroup>
              250 GB of bandwidth <span>†</span>
            </AsteriskGroup>
          </li>
          <li>
            <i class="ph-check" />
            Unlimited users
          </li>
          <li>
            <i class="ph-check" />
            Cloud hosting
          </li>
          <li>
            <i class="ph-check" />
            Desktop app and CLI
          </li>
          <li>
            <i class="ph-check" />
            <div>
              10% donated to{" "}
              <a
                href="https://nami.org"
                target="_blank"
                rel="noreferrer noopener"
              >
                National Alliance on Mental Illness
              </a>
            </div>
          </li>
        </ul>
        <AsteriskDescription>
          † Additional storage and bandwidth is available for purchase per-team
          at the same rate.
        </AsteriskDescription>
      </Details>
    </Root>
  );
};

export default HomePriceCard;
