import React from "react";
import * as S from "./styled";

const AboutMe = () => {
  return (
    <S.container>
      <S.title>Sobre mim</S.title>
      <S.description>
        Meu nome é <strong>Maria Lisboa</strong>, sou formada em Análise e desenvolvimento de sistemas. Nasci em Maceió - AL.
        Comecei como fullStack em uma loja de imóveis (Lojas Guido) na cidade onde nasci, trabalhando com Angular 4+ para o frondEnd,
        no backEnd utilizei o nodeJS e usava o banco SQL Server.
      </S.description>

      <S.description>
        Em 2019 consegui uma vaga de frontEnd na empresa Praxio em SP, utilizando o angular 8+.
        Aprendi a trabalhar em equipe junto com o pessoal de back, QA e scrum master. Utizando a metodologia ágil scrum.
      </S.description>

      <S.description>
        No inicio de 2020 consegui uma vaga de frontEnd na empresa Zup trabalhando com Angular 8+ onde trabalho até hoje.
      </S.description>
    </S.container>
  )
};

export default AboutMe;