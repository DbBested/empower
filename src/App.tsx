import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home';
import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
`;

// Placeholder components for other pages
const Webinars = () => <h1>Webinars Page</h1>;
const OurTeam = () => <h1>Our Team Page</h1>;
const Resources = () => <h1>Resources Page</h1>;
const Tutoring = () => <h1>Tutoring Page</h1>;
const JoinUs = () => <h1>Join Us Page</h1>;

function App() {
  return (
    <AppWrapper>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/webinars" element={<Webinars />} />
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/tutoring" element={<Tutoring />} />
              <Route path="/join-us" element={<JoinUs />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </AppWrapper>
  );
}

export default App;
