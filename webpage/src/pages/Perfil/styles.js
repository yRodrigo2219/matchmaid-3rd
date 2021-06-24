import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.color.theme.light.zero};
  min-height: 100vh;

  > div {
    width: 1312px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 144px;

    > h3 {
      margin-bottom: 56px;
    }

    > div {
      display: flex;
      width: 100%;
      justify-content: space-evenly;

      > div {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

export const Selector = styled(NavLink)`
  margin-bottom: 24px;
  font-family: ${(props) => props.theme.font.montserrat};
  font-size: ${(props) => props.theme.font.size.h6};
  color: ${(props) => props.theme.color.secondary.zero};
  font-weight: 400;
  width: fit-content;

  :hover {
    font-weight: 700;
  }

  :active {
    transform: translateY(2px);
  }
`;

export const MaidPerfil = styled.section`
  width: 230px;
  display: flex;
  flex-direction: column;

  > span {
    img {
      width: 192px;
    }
  }

  .basicInfo {
    margin: 40px 0px;

    > h5 {
      font-weight: 400;
    }

    > span {
      display: flex;
      align-items: center;
      font-family: ${(props) => props.theme.font.montserrat};
      font-size: ${(props) => props.theme.font.size.paragraph};
      color: ${(props) => props.theme.color.theme.dark.zero};
      font-weight: 700;

      img {
        margin-left: 8px;
      }
    }
  }

  .options {
    display: flex;
    flex-direction: column;
  }
`;

export const MaidInfo = styled.section`
  width: 530px;

  > div {
    width: 100%;
    background-color: ${(props) => props.theme.color.theme.background.minus};
    box-shadow: 0px 0px 8px rgba(87, 87, 87, 0.3);
    border-radius: 16px;
    padding: 32px;
    margin-bottom: 40px;

    > div {
      margin-top: 8px;
      display: flex;
      flex-direction: column;

      span,
      a {
        display: flex;
        align-items: center;
        margin-top: 16px;
        font-family: ${(props) => props.theme.font.roboto};
        font-weight: 400;
        font-size: ${(props) => props.theme.font.size.paragraph};
        color: ${(props) => props.theme.color.theme.dark.zero};
        text-decoration: underline;
        width: fit-content;

        > img {
          margin-right: 8px;
        }
      }
    }
  }

  p {
    margin-top: 24px;
    font-family: ${(props) => props.theme.font.roboto};
    font-weight: 400;
    font-size: ${(props) => props.theme.font.size.paragraph};
  }
`;

export const Tags = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 280px;
  margin-bottom: 16px;

  > h5 {
    width: 100%;
  }

  > span {
    display: inline-block;
    padding: 7px;
    margin: 4px;
    border-radius: 25px;
    font-family: ${(props) => props.theme.font.roboto};
    font-weight: 700;
    color: ${(props) => props.theme.color.theme.light.minus};
  }

  .cyan {
    background: #30e3ca 0% 0% no-repeat padding-box;
  }

  .red {
    background: #ff7272 0% 0% no-repeat padding-box;
  }

  .blue {
    background: #219fff 0% 0% no-repeat padding-box;
  }

  .lightblue {
    background: #65dbfc 0% 0% no-repeat padding-box;
  }

  .yellow {
    background: #ffe791 0% 0% no-repeat padding-box;
  }

  .orange {
    background: #ff966b 0% 0% no-repeat padding-box;
  }

  .purple {
    background: #a777eb 0% 0% no-repeat padding-box;
  }
`;

export const Editor = styled.div`
  width: 877px;
  background-color: ${(props) => props.theme.color.theme.background.minus};
  border-radius: 16px;
  box-shadow: 0px 0px 8px rgba(87, 87, 87, 0.3);
  padding: 0 32px 32px;
  margin-bottom: 64px;

  label {
    margin-top: 16px;
  }

  h5 {
    margin-top: 32px;
  }

  > section {
    display: flex;
    > * {
      flex: 1;
    }
  }

  > span {
    display: flex;
    margin-top: 32px;
    justify-content: flex-end;
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
`;

export const CheckList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  > label {
    margin-top: 8px;
  }
`;
