import React from "react";

import { Container } from "./styles";

export default function index(props) {
  const {
    to,
    children,
    isFilled,
    color,
    background,
    height,
    width,
    fontSize,
    colorHover,
    backgroundHover,
    onClick,
  } = props;
  return (
    <Container
      to={to}
      textcolor={color}
      textcolorhover={colorHover}
      backgroundcolor={background}
      backgroundcolorhover={backgroundHover}
      isfilled={isFilled ? 1 : 0}
      height={height}
      width={width}
      fontSize={fontSize}
      onClick={onClick}
    >
      {children.toUpperCase()}
    </Container>
  );
}
