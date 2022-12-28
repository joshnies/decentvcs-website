import { Content, Root, Screen, TextBlock } from "./HeroUXSection.styles";

export default function HeroUXSection() {
  return (
    <Root>
      <Content>
        <TextBlock>
          <h4>Developer experience</h4>
          <h2>Built from the ground up.</h2>
          <p>
            DecentVCS saves you an astounding amount on development costs by
            utilizing decentralized storage by default. This also brings other
            benefits such as an always-available data infrastructure with 100%
            uptime, as well as enhanced security across the board.
          </p>
        </TextBlock>
        <Screen
          src="/src/assets/home-ux-4k.png"
          alt="DecentVCS desktop app screenshot"
        />
      </Content>
    </Root>
  );
}
