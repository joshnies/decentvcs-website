import {
  DesktopIndicator,
  DesktopIndicatorLine,
  Root,
  Text,
} from "./ScrollIndicator.styles";

export default function ScrollIndicator() {
  return (
    <Root>
      <Text>See how it works</Text>
      <DesktopIndicator>
        <DesktopIndicatorLine />
      </DesktopIndicator>
    </Root>
  );
}
