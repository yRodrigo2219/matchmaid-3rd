import styled from "styled-components";

export const Container = styled.div`
  .deck-tooltip {
    border-radius: 8px;

    img {
      width: 120px;
      border-radius: 50%;
    }

    h2 {
      font-family: ${(props) => props.theme.font.montserrat};
      font-weight: 700;
      color: ${(props) => props.theme.color.theme.background.minus};
    }

    h4 {
      font-family: ${(props) => props.theme.font.montserrat};
      font-weight: 400;
      color: ${(props) => props.theme.color.theme.background.minus};
    }

    span {
      font-family: ${(props) => props.theme.font.montserrat};
      font-weight: 400;
      color: ${(props) => props.theme.color.theme.background.minus};
    }
  }
`;

export const Filters = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 16px;
  top: 192px;
  right: 112px;
  width: 416px;
  height: 458px;
  background-color: ${(props) => props.theme.color.theme.background.minus};
  z-index: 5;
  box-shadow: 0px 0px 8px rgba(87, 87, 87, 0.3);
  border-radius: 16px;

  p {
    font-family: ${(props) => props.theme.font.roboto};
    font-weight: 700;
    font-size: ${(props) => props.theme.font.size.paragraph};
    margin-top: 16px;
  }
`;

export const CheckList = styled.div`
  display: flex;
  flex-wrap: wrap;

  label {
    width: 50%;
    margin-top: 8px;
  }
`;
