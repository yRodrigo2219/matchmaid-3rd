import React from "react";

import {
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxContainer,
  Icon,
  Label,
} from "./styles";

export default function index({ className, checked, children, ...props }) {
  return (
    <Label className={className}>
      <CheckboxContainer>
        <HiddenCheckbox checked={checked} {...props} />
        <StyledCheckbox checked={checked}>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
        </StyledCheckbox>
      </CheckboxContainer>
      <span>{children}</span>
    </Label>
  );
}
