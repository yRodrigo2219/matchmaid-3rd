import styled from "styled-components";

export const Container = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.color.theme.dark.zero};
  font-family: ${(props) => props.theme.font.montserrat};
  font-size: ${(props) => props.theme.font.size.h6};
  font-weight: 400;

  > div {
    position: absolute;
    display: inline;
    color: ${(props) => props.theme.color.theme.dark.zero};
    font-family: ${(props) => props.theme.font.montserrat};
    font-size: ${(props) => props.theme.font.size.h6};
    font-weight: 400;
    top: 42px;
    left: 12px;
  }

  > span {
    visibility: hidden;
    padding: 0.5em;
    width: 100%;
    background-color: ${(props) => props.theme.color.helpers.danger};
    color: ${(props) => props.theme.color.theme.light.minus};
    text-align: left;
    border-radius: 8px;
    line-height: 1.5em;

    /* Position the tooltip */
    position: absolute;
    top: 4em;
    left: 0em;
    z-index: 1;
  }

  :hover {
    > span {
      visibility: visible;
    }
  }

  input {
    height: 58px;
    padding-left: ${(props) => (props.symbol ? "48px" : "32px")};
  }

  input,
  textarea {
    color: ${(props) => props.theme.color.theme.dark.zero};
    font-family: ${(props) => props.theme.font.roboto};
    font-size: ${(props) => props.theme.font.size.paragraph};
    font-weight: 400;
    border: 3px solid ${(props) => props.theme.color.secondary.zero};
    border-radius: 8px;
    background-color: ${(props) => props.theme.color.theme.light.minus};
  }

  textarea {
    padding: 8px 16px;
    resize: none;
  }

  .errado {
    border: 3px solid ${(props) => props.theme.color.helpers.danger};
  }

  .correto {
    border: 3px solid ${(props) => props.theme.color.helpers.success};
  }
`;
