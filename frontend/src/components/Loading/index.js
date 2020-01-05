import React from 'react';
import PropTypes from 'prop-types';

import { Container, LoadingStyles, Message } from './styles';

import LoadingImg from '~/assets/images/loading.gif';

export default function Loading({ message }) {
  return (
    <Container>
      <LoadingStyles />
      <img src={LoadingImg} alt="Carregando" />
      <Message>{message}</Message>
    </Container>
  );
}

Loading.defaultProps = {
  message: 'Carregando ...',
};

Loading.propTypes = {
  message: PropTypes.string,
};
