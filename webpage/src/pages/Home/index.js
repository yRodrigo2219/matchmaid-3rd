import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

import Banner from "../../assets/imgs/hero/main.png";
import Cadastro from "../../assets/imgs/ilust/cadastro.svg";
import Dica from "../../assets/imgs/ilust/dica.svg";
import Confie from "../../assets/imgs/ilust/confie.svg";
import Flexibilidade from "../../assets/imgs/ilust/flexibilidade.svg";
import ManMaid from "../../assets/imgs/maid/man.png";
import WomanMaid from "../../assets/imgs/maid/woman.png";

import Button from "../../components/Button";
import {
  Container,
  CTAhero,
  CaseDescriptions,
  ProductDescriptions,
  ProductText,
  ProductImage,
  Testemonials,
} from "./styles";

export default function Home() {
  const theme = useContext(ThemeContext);

  return (
    <Container>
      <img src={Banner} alt="" />
      <div>
        <CTAhero>
          <div>
            <h3>
              Encontre a melhor e mais perto de você, para te ajudar nos
              serviços do lar
            </h3>
            <Button
              to="/buscar"
              isFilled
              width={416}
              height={66}
              color={theme.color.theme.light.minus}
              colorHover={theme.color.theme.light.zero}
              background={theme.color.primary.zero}
              backgroundHover={theme.color.primary.plus}
              fontSize={theme.font.size.h5}
            >
              buscar por maids
            </Button>
          </div>
        </CTAhero>

        <CaseDescriptions>
          <span>
            <img src={Flexibilidade} alt="flexibilidade" />
            <h5>Maior Flexibilidade</h5>
            <h6>
              Procure o serviço que quiser, a hora que quiser. Todo serviço
              doméstico você encontra aqui
            </h6>
            <Button
              to="/buscar"
              isFilled
              width={416}
              height={74}
              color={theme.color.theme.light.minus}
              colorHover={theme.color.theme.light.zero}
              background={theme.color.primary.zero}
              backgroundHover={theme.color.primary.plus}
              fontSize={theme.font.size.h6}
            >
              buscar por maids
            </Button>
          </span>
          <span>
            <img src={Cadastro} alt="cadastro" />
            <h5>Mostre seu trabalho</h5>
            <h6>
              Monte seu Perfil, deixe sua marca, seja bem avaliada e consiga
              mais trabalhos
            </h6>
            <Button
              to="/cadastro"
              isFilled
              width={416}
              height={74}
              color={theme.color.theme.light.minus}
              colorHover={theme.color.theme.light.zero}
              background={theme.color.primary.zero}
              backgroundHover={theme.color.primary.plus}
              fontSize={theme.font.size.h6}
            >
              CADASTRE-SE COMO MAID
            </Button>
          </span>
        </CaseDescriptions>

        <ProductDescriptions>
          <span>
            <ProductImage isleft>
              <img src={Confie} alt="confie" />
            </ProductImage>
            <ProductText>
              <h3>Confie</h3>
              <h5>
                As mais bem avaliadas são mais confiáveis, para que seja assim
                desde o início, devem apresentar portfólio ou currículo.
              </h5>
            </ProductText>
          </span>
          <span>
            <ProductText isleft>
              <h3>Dica</h3>
              <h5>Acompanhe o trabalho para saber avaliar seu colaborador.</h5>
            </ProductText>
            <ProductImage>
              <img src={Dica} alt="dica" />
            </ProductImage>
          </span>
        </ProductDescriptions>

        <Testemonials>
          <h5>Nossos Maids</h5>
          <h3>Estão mudando de vida!</h3>
          <div>
            <span>
              <img src={WomanMaid} alt="maid" />
              <h6>
                Crio três filho com esse trabalho e graças à este site consigo
                um rendimento maior e mais tempo para passar com meus filhos.
              </h6>
              <h5>Juliana Ferreira</h5>
            </span>
            <span>
              <img src={ManMaid} alt="maid" />
              <h6>
                Eu não tinha nenhuma espectativa de crescimento no meu ultimo
                emprego, mas graças ao MM eu consigo pagar minha faculdade hoje.{" "}
              </h6>
              <h5>Jonas Nascimento</h5>
            </span>
          </div>

          <span>
            <Button
              to="/cadastro"
              isFilled
              width={328}
              height={66}
              color={theme.color.theme.light.minus}
              colorHover={theme.color.theme.light.zero}
              background={theme.color.primary.zero}
              backgroundHover={theme.color.primary.plus}
              fontSize={theme.font.size.h6}
            >
              quero ser maid
            </Button>
          </span>
        </Testemonials>
      </div>
    </Container>
  );
}
