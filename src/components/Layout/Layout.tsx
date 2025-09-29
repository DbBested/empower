import styled from 'styled-components';
import { Navbar } from './Navbar';
import { ReactNode } from 'react';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const Main = styled.main`
  margin-top: 70px;
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.colors.deepOcean};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  justify-items: center;
  text-align: center;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h4 {
    color: ${({ theme }) => theme.colors.sandDollar};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-size: 1.2rem;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: center;
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.8;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
  width: 100%;
  max-width: 1200px;
`;

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <Navbar />
      <Main>{children}</Main>
      <Footer>
        <FooterContent>
          <FooterSection>
            <h4>About Us</h4>
            <ul>
              <li><a href="/our-team">Our Team</a></li>
              <li><a href="/join-us">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h4>Resources</h4>
            <ul>
              <li><a href="/webinars">Webinars</a></li>
              <li><a href="/resources">Learning Materials</a></li>
              <li><a href="/tutoring">Tutoring</a></li>
            </ul>
          </FooterSection>
          <FooterSection>
            <h4>Connect</h4>
            <ul>
              <li><a href="https://www.instagram.com/empower_init">Instagram</a></li>
              <li><a href="https://linkedin.com">LinkedIn</a></li>
              <li><a href="https://github.com">GitHub</a></li>
            </ul>
          </FooterSection>
        </FooterContent>
        <Copyright>
          <p>© {new Date().getFullYear()} Empower. All rights reserved.</p>
        </Copyright>
      </Footer>
    </LayoutWrapper>
  );
}; 