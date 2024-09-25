import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

import blankAvatar from '../../assets/user/blankavatar.jpg';
import { useScreenConfig } from '../../contexts/ScreenConfigContext';
import AuthModal from '../Modals/AuthModal';
import AppLogo from './AppLogo';
import UserAvatar from './UserAvatar';
import { IReduxStore } from '../../interfaces/IRedux';

const HeaderContainer = styled.div<{ $isScrolled: boolean }>`
  user-select: none;
  height: var(--header-height);
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10;
  width: 100%;
  background: rgb(255, 255, 255, 0.8);
  transition: box-shadow 0.3s ease;
  backdrop-filter: blur(8px);
  box-shadow: ${({ $isScrolled }) => ($isScrolled ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none')};
`;

const HeaderMenusContainer = styled.div`
  max-width: var(--page-mx-width);
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;

  img {
    width: 20px;
  }
`;

const MenuItemsContainer = styled.div<{ $screenWidth: number }>`
  height: 100%;
  display: ${({ $screenWidth }) => ($screenWidth > 1150 ? 'flex' : 'none')};
  justify-content: space-between;
  text-transform: uppercase;
  transition: all 0.25s ease-in-out;
`;

const RightContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  a {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const HeaderMenuItem = styled.div<{ $isActive: boolean }>`
  cursor: pointer;
  display: flex;
  gap: 12px;
  height: 100%;
  align-items: center;
  white-space: nowrap;
  transition: all 0.15s;
  box-shadow: ${({ $isActive }) => ($isActive ? 'inset 0px -2px 0px var(--color-primary)' : 'none')};

  span {
    text-transform: none;
    color: ${({ $isActive }) => ($isActive ? 'var(--color-primary)' : 'var(--color-grey)')};
  }
  svg {
    fill: ${({ $isActive }) => ($isActive ? 'var(--color-black)' : 'var(--color-grey)')};
  }

  &:hover {
    box-shadow: inset 0px -2px 0px var(--color-primary);

    span {
      color: var(--color-primary);
    }
    h4 {
      color: var(--color-primary);
    }
    svg {
      fill: var(--color-black);
    }
  }
`;

export interface IHeaderMenuItems {
  [menu: string]: { path: string; icon?: JSX.Element };
}

export const menuItems: IHeaderMenuItems = {
  Início: { path: '/' },
  Viagens: { path: '/viagens' },
  Ajuda: { path: '/ajuda' },
};

const Header = () => {
  const userCredentials = useSelector<IReduxStore, IReduxStore['auth']['userCredentials']>(
    (state) => state.auth.userCredentials,
  );
  const { width } = useScreenConfig();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer $isScrolled={isScrolled}>
      <HeaderMenusContainer>
        <AppLogo />

        <RightContainer>
          <MenuItemsContainer $screenWidth={width}>
            {Object.entries(menuItems).map(([item, { path, icon }], i) => (
              <HeaderMenuItem key={i} $isActive={location.pathname === path}>
                <Link to={path}>
                  {icon && icon}
                  <span>{item}</span>
                </Link>
              </HeaderMenuItem>
            ))}
          </MenuItemsContainer>

          {userCredentials && (
            <Link to={`/profile/${userCredentials?.username}`}>
              <UserAvatar
                userInfo={{ url: userCredentials.avatar ? userCredentials.avatar : blankAvatar }}
                sizeInPx={40}
              />
            </Link>
          )}

          {!userCredentials && <AuthModal />}
        </RightContainer>
      </HeaderMenusContainer>
    </HeaderContainer>
  );
};

export default Header;
