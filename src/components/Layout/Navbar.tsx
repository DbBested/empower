import { Link, NavLink } from 'react-router-dom';
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

const LogoContainer = styled(Link)`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	font-family: ${({ theme }) => theme.fonts.heading};
	font-size: 1.5rem;
	font-weight: 700;
	color: ${({ theme }) => theme.colors.deepOcean};
`;

const LogoImage = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.sandDollar};
  margin-right: .5rem;
  transition: transform 0.2s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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

const MyNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  transition: color 0.2s ease;
  font-family: ${({ theme }) => theme.fonts.body};

  &:hover {
    color: ${({ theme }) => theme.colors.crab};
  }

  &.active {
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
  	color: ${({ theme }) => theme.colors.white};
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
	const closeMenu = () => setIsMenuOpen(false);

	return (
		<Nav>
			<NavContainer>
				<LogoContainer to="/" onClick={closeMenu}>
					<LogoImage><img src="/logo.png" alt="Logo" /></LogoImage>
					Empower
				</LogoContainer>
				<MenuButton onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? '✕' : '☰'}
				</MenuButton>
				<NavLinks isOpen={isMenuOpen}>
					<MyNavLink to="/webinars" onClick={closeMenu}>Webinars</MyNavLink>
					<MyNavLink to="/our-team" onClick={closeMenu}>Our Team</MyNavLink>
					<MyNavLink to="/resources" onClick={closeMenu}>Resources</MyNavLink>
					<MyNavLink to="/tutoring" onClick={closeMenu}>Tutoring</MyNavLink>
					<MyNavLink to="/donate" onClick={closeMenu}>Donate</MyNavLink>
					<Link className='button-primary py-2 px-6 font-semibold rounded-sm' to="/join-us" onClick={closeMenu}>Join Us</Link>
				</NavLinks>
			</NavContainer>
		</Nav>
	);
}; 