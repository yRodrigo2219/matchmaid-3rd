import styled from "styled-components";

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 3px solid ${(props) => props.theme.color.secondary.minus};
  background: ${(props) =>
    props.checked
      ? props.theme.color.secondary.zero
      : props.theme.color.theme.light.minus};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px ${(props) => props.theme.color.secondary.minus};
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

export const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const Label = styled.label`
  cursor: pointer;
  width: fit-content;

  > span {
    margin-left: 8px;
    color: ${(props) => props.theme.color.theme.dark.zero};
    font-family: ${(props) => props.theme.font.roboto};
    font-weight: 700;
    font-size: ${(props) => props.theme.font.size.paragraph};
  }
`;
