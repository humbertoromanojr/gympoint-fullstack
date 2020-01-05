import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Content, Profile, ActiveLink } from './styles';
import colors from '~/styles/colors';

import Logo from '~/assets/images/logo-horizontal.png';

function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <ActiveLink
            to="/dashboard"
            activeStyle={{ color: colors.activeLink }}
          >
            <picture>
              <img src={Logo} alt="logo GymPonit" />
            </picture>
          </ActiveLink>
          <ActiveLink
            to="/dashboard"
            activeStyle={{ color: colors.activeLink }}
          >
            ALUNOS
          </ActiveLink>
          <ActiveLink to="/plans" activeStyle={{ color: colors.activeLink }}>
            PLANOS
          </ActiveLink>
          <ActiveLink
            to="/registrations"
            activeStyle={{ color: colors.activeLink }}
          >
            MATRÍCULAS
          </ActiveLink>
          <ActiveLink
            to="/help-orders"
            activeStyle={{ color: colors.activeLink }}
          >
            PEDIDOS DE AUXÍLIO
          </ActiveLink>
        </nav>

        <Profile>
          <div>
            <strong>{profile.name}</strong>
            <button type="button" onClick={handleSignOut}>
              Sair do sistema
            </button>
          </div>
        </Profile>
      </Content>
    </Container>
  );
}

Header.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default Header;
