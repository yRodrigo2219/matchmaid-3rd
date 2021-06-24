import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.color.theme.light.zero};
  min-height: 100vh;
`;

export const Interactable = styled.div`
  padding-bottom: 32px;
  width: 1312px;
  height: calc(100vh + 88px);
  position: relative;
  color: ${(props) => props.theme.color.theme.dark.zero};

  label {
    margin-top: 16px;
  }

  > img {
    position: absolute;
    bottom: 32px;
    left: -48px;
    height: 508px;
  }

  > a {
    position: absolute;
    left: 112px;
    top: 122px;
    z-index: 1;
  }

  > div {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 864px;
    height: 870px;
    top: 122px;
    right: 112px;
    z-index: 0;
    color: ${(props) => props.theme.color.theme.dark.zero};

    > span {
      margin-top: 32px;
      padding: 32px 112px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: ${(props) => props.theme.color.theme.background.minus};
      height: 750px;
      width: 100%;
      border-radius: 48px;
      box-shadow: 0px 0px 8px rgba(87, 87, 87, 0.3);

      > div {
        display: flex;
        flex-direction: column;
        margin-top: 16px;
        width: 100%;

        > section {
          display: flex;
          > * {
            flex: 1;
          }
        }

        > div {
          display: flex;
          justify-content: space-between;
          > * {
            flex: 1;
          }
          > :first-child {
            margin-right: 32px;
          }
          > span {
            margin-top: 41px;
            height: 55px;
            display: flex;
          }
        }
      }
    }
  }
`;

export const Progression = styled.section`
  width: 100%;
  margin-top: 32px;
  display: flex;
  justify-content: space-around;
`;

export const ProgressItem = styled(NavLink)`
  background-color: ${(props) =>
    props.active
      ? props.theme.color.primary.zero
      : props.theme.color.theme.light.plus};
  color: ${(props) => props.theme.color.theme.background.minus};
  font-family: ${(props) => props.theme.font.roboto};
  font-weight: 700;
  font-size: ${(props) => props.theme.font.size.h3};
  text-align: center;
  border-radius: 50%;
  line-height: 80px;
  width: 80px;

  :active {
    transform: translateY(2px);
  }
`;

export const Next = styled.section`
  position: absolute;
  bottom: 64px;
  width: calc(100% - 224px);
  display: flex;
  justify-content: space-between;

  > span {
    height: 68px;
    display: flex;
  }
`;

export const CheckList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  > label {
    margin-top: 8px;
  }
`;
