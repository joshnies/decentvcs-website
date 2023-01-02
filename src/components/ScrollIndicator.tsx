import {
  DesktopIndicator,
  DesktopIndicatorLine,
  Root,
  Text,
  // TouchIndicator,
} from "./ScrollIndicator.styles";

export default function ScrollIndicator() {
  // const isDesktop =
  //   !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  //     navigator.userAgent
  //   );

  return (
    <Root>
      <Text>See how it works</Text>
      {/* {!isDesktop && <TouchIndicator />}
      {isDesktop && (
        <DesktopIndicator>
          <DesktopIndicatorLine />
        </DesktopIndicator>
      )} */}

      <DesktopIndicator>
        <DesktopIndicatorLine />
      </DesktopIndicator>
    </Root>
  );
}
