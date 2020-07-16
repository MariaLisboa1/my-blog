import React from 'react';

import * as S from "./styled";

const MySkills = () => {
  return (
    <S.container>
      <S.title>
        Habilidades
      </S.title>

      <S.skills>
        <S.skill>HTML / CSS</S.skill>
        <S.skill></S.skill>
        <S.skill>CSS Frameworks</S.skill>
        <S.skill>Design Responsivo</S.skill>
        <S.skill>Javascript</S.skill>
        <S.skill>Angular 4+</S.skill>
        <S.skill>ReactJS</S.skill>
        <S.skill>NodeJS</S.skill>
        <S.skill>Desenvolvimento Mobile (React, Ionic)</S.skill>
        <S.skill>Métodos Ágeis</S.skill>
        <S.skill>Git</S.skill>
        <S.skill>Testes automatizados</S.skill>
        <S.skill>Aprender</S.skill>
        <S.skill>Ensinar</S.skill>
      </S.skills>
    </S.container>
  );
}

export default MySkills;