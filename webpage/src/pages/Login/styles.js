import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.color.theme.light.zero};
  min-height: 100vh;
`;

export const Interactable = styled.div`
  width: 1312px;
  position: relative;
  color: ${(props) => props.theme.color.theme.dark.zero};

  > img {
    position: absolute;
    bottom: 32px;
    left: -152px;
    height: 508px;
  }

  > div {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 752px;
    height: 672px;
    top: 148px;
    right: 112px;
    z-index: 1;

    > span {
      display: flex;
      flex-direction: column;
      padding: 32px 112px;
      margin-top: 32px;
      background-color: ${(props) => props.theme.color.theme.background.minus};
      height: 592px;
      width: 100%;
      border-radius: 48px;
      box-shadow: 0px 0px 8px rgba(87, 87, 87, 0.3);

      > a {
        align-self: flex-end;
      }

      > div {
        label,
        > span {
          margin-top: 32px;
        }

        > span {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
`;
