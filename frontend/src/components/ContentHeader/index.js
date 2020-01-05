import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function ContentHeader({ title, children }) {
  return (
    <Container>
      <h1>{title}</h1>

      <div>{children}</div>
    </Container>
  );
}

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

ContentHeader.defaultProps = {
  children: null,
};
