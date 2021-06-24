import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  color: ${(props) => props.textcolor};
  background-color: ${(props) =>
    props.isfilled ? props.backgroundcolor : "none"};
  text-align: center;
  line-height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  font-size: ${(props) => props.fontSize};
  font-family: ${(props) => props.theme.font.montserrat};
  font-weight: 700;
  border: 3px solid ${(props) => props.backgroundcolor};
  border-radius: 8px;

  :hover {
    background-color: ${(props) =>
      props.isfilled
        ? props.backgroundcolorhover ?? props.backgroundcolor
        : "none"};
    color: ${(props) => props.textcolorhover ?? props.textcolor};
    border: 3px solid
      ${(props) => props.backgroundcolorhover ?? props.backgroundcolor};
  }

  :active {
    transform: translateY(2px);
  }
`;
