import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 88px;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.color.primary.zero};
  background: linear-gradient(
    270deg,
    rgba(241, 246, 249, 0.4) 0%,
    #f1f6f9 100%,
    rgba(241, 246, 249, 0.1) 100%
  );
  backdrop-filter: blur(40px);
  z-index: 99;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
`;

export const Interactable = styled.div`
  width: 1312px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoLink = styled(Link)`
  padding-left: 22px;
  width: 192px;
  height: 66px;

  img {
    width: 192px;
    height: 66px;
  }

  :active {
    transform: translateY(2px);
  }
`;

export const NavBar = styled.div`
  display: flex;
  padding-right: 22px;
  justify-content: space-around;
  width: 500px;

  a {
    font-family: ${(props) => props.theme.font.montserrat};
    font-weight: 700;
    font-size: ${(props) => props.theme.font.size.h5};
    line-height: ${(props) => props.theme.font.size.h4};
    color: ${(props) => props.theme.color.secondary.zero};

    :active {
      transform: translateY(2px);
    }

    :hover {
      color: ${(props) => props.theme.color.secondary.plus};
    }
  }
`;

export const Logged = styled(Link)`
  display: flex;
  font-family: ${(props) => props.theme.font.montserrat};
  font-size: ${(props) => props.theme.font.size.h6};
  line-height: ${(props) => props.theme.font.size.h5};
  color: ${(props) => props.theme.color.secondary.zero};
  align-items: center;
  margin-right: 20px;

  img {
    margin-left: 8px;
    height: 66px;
    border-radius: 50%;
  }
`;
