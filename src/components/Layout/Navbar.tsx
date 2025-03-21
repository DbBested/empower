import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.deepOcean};
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.lg};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  transition: color 0.2s ease;
  font-family: ${({ theme }) => theme.fonts.body};

  &:hover {
    color: ${({ theme }) => theme.colors.crab};
  }
`;

const JoinButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.deepOcean};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border-radius: 4px;
  font-weight: 600;
  transition: background-color 0.2s ease;
  font-family: ${({ theme }) => theme.fonts.body};

  &:hover {
    background-color: ${({ theme }) => theme.colors.crab};
  }
`;

const MenuButton = styled.button`
  display: none;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.deepOcean};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`;

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">Empower</Logo>
        <MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/webinars">Webinars</NavLink>
          <NavLink to="/our-team">Our Team</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/tutoring">Tutoring</NavLink>
          <JoinButton to="/join-us">Join Us</JoinButton>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}; 