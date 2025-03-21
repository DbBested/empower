export const theme = {
  colors: {
    crab: '#F26749',
    sandDollar: '#FCDED6',
    vistaBlue: '#83A5F2',
    deepOcean: '#204ECF',
    butterscotch: '#EA9836',
    white: '#FFFFFF',
    black: '#000000',
    gray: '#555555',
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Open Sans', sans-serif",
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '4rem',
  },
};

export type Theme = typeof theme; 