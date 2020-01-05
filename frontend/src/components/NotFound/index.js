import React from 'react';

import { Container } from './styles';

import dbEmpty from '~/assets/images/empty-data.png';

export default function NotFound() {
  return (
    <Container>
      <img src={dbEmpty} alt="Banco vazio" />
      <p>Nenhum registro ou arquivo encontrado.</p>
    </Container>
  );
}
