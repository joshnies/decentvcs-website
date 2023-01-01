import { Component, For, JSX } from "solid-js";
import { Option, Root } from "./OptionSelect.styles";

export interface OptionSelectProps {
  options: string[];
  selected?: string;
  style?: JSX.CSSProperties;
  onChange: (option: string) => void;
}

const OptionSelect: Component<OptionSelectProps> = (props) => {
  return (
    <Root style={props.style}>
      <For each={props.options}>
        {(option) => (
          <Option
            selected={option === props.selected}
            onClick={() => props.onChange(option)}
          >
            {option}
          </Option>
        )}
      </For>
    </Root>
  );
};

export default OptionSelect;
