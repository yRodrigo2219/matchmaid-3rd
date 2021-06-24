import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.color.theme.background.minus};

  > img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    z-index: 0;
  }

  > div {
    width: 1312px;
    position: relative;
  }
`;

export const CTAhero = styled.div`
  height: 100vh;

  div {
    padding-left: 22px;
    height: 100%;
    width: 690px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h3 {
      color: ${(props) => props.theme.color.secondary.zero};
    }

    a {
      margin-top: 32px;
    }
  }
`;

export const CaseDescriptions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 636px;

  span {
    width: 416px;
    display: flex;
    flex-direction: column;
    text-align: center;

    img {
      height: 216px;
    }

    h5 {
      margin-top: 40px;
      color: ${(props) => props.theme.color.theme.dark.zero};
    }

    h6 {
      margin-top: 32px;
      color: ${(props) => props.theme.color.theme.dark.zero};
      font-weight: 400;
    }

    a {
      margin-top: 32px;
    }
  }
`;

export const ProductDescriptions = styled.div`
  display: flex;
  flex-direction: column;

  span {
    position: relative;
    height: 568px;
  }
`;

export const ProductText = styled.div`
  position: absolute;
  top: 64px;
  left: ${(props) => (props.isleft ? "32px" : "600px")};
  width: 680px;
  height: 440px;
  background-color: ${(props) => props.theme.color.theme.light.zero};
  border-radius: 8px;
  padding: ${(props) =>
    props.isleft ? "92px 116px 92px 72px" : "92px 8px 92px 182px"};
  color: ${(props) => props.theme.color.theme.dark.zero};

  h5 {
    font-weight: 400;
  }
`;

export const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  top: 104px;
  left: ${(props) => (props.isleft ? "32px" : "600px")};
  width: 680px;
  height: 360px;
  background-color: ${(props) => props.theme.color.theme.light.plus};
  border-radius: 8px;

  img {
    height: 296px;
  }
`;

export const Testemonials = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 42px;
  padding-left: 108px;
  padding-right: 108px;
  margin-bottom: 84px;
  color: ${(props) => props.theme.color.theme.dark.zero};
  height: 812px;

  > h3 {
    margin-top: 24px;
  }

  > div {
    margin-top: 64px;
    display: flex;
    justify-content: space-between;

    span {
      width: 530px;
      text-align: center;
      img {
        width: 530px;
        height: 320px;
      }

      h6,
      h5 {
        margin-top: 32px;
        font-weight: 400;
      }
    }
  }

  > span {
    display: flex;
    justify-content: center;
    margin-top: 53px;
  }
`;
