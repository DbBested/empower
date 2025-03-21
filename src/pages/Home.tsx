import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Hero = styled.section`
  background-color: ${({ theme }) => theme.colors.sandDollar};
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
  min-height: 80vh;
  display: flex;
  align-items: center;
  width: 100%;
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
`;

const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: ${({ theme }) => theme.spacing.xl};
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: ${({ theme }) => theme.colors.deepOcean};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const CTAContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(Link)`
  background-color: ${({ theme }) => theme.colors.deepOcean};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.crab};
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.deepOcean};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.1rem;
  border: 2px solid ${({ theme }) => theme.colors.deepOcean};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.deepOcean};
    color: ${({ theme }) => theme.colors.white};
  }
`;

const Features = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FeaturesGrid = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    color: ${({ theme }) => theme.colors.deepOcean};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    font-size: 1.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1rem;
    margin-bottom: 0;
  }
`;

const ImpactNumbers = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

const ImpactStat = styled.div`
  h3 {
    color: ${({ theme }) => theme.colors.crab};
    font-size: 2.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }

  p {
    color: ${({ theme }) => theme.colors.deepOcean};
    font-size: 1.1rem;
    margin: 0;
  }
`;

export const Home = () => {
  return (
    <PageWrapper>
      <Hero>
        <HeroContainer>
          <HeroContent>
            <Title>Connecting Local Students with Expert Tutors</Title>
            <Subtitle>
              Join our community of passionate educators and eager learners to create meaningful connections and foster academic success in your neighborhood
            </Subtitle>
            <ImpactNumbers>
              <ImpactStat>
                <h3>70+</h3>
                <p>Children Supported</p>
              </ImpactStat>
              <ImpactStat>
                <h3>160+</h3>
                <p>Parents Connected</p>
              </ImpactStat>
              <ImpactStat>
                <h3>10%</h3>
                <p>School Volunteers</p>
              </ImpactStat>
            </ImpactNumbers>
            <CTAContainer>
              <PrimaryButton to="/join-us">Find a Tutor</PrimaryButton>
              <SecondaryButton to="/tutoring">Become a Tutor</SecondaryButton>
            </CTAContainer>
          </HeroContent>
          <HeroImage>
            <img src="/hero-image.jpg" alt="Local Tutoring" />
          </HeroImage>
        </HeroContainer>
      </Hero>

      <Features>
        <FeaturesGrid>
          <FeatureCard>
            <h3>Local Expert Tutors</h3>
            <p>Connect with qualified tutors from your community who understand your local curriculum and learning needs</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Personalized Learning</h3>
            <p>Get one-on-one attention and customized learning plans that adapt to your child's unique learning style</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Community-Driven</h3>
            <p>Join a network where 10% of school members volunteer as tutors, creating a supportive learning environment</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Parent Involvement</h3>
            <p>Stay connected with your child's progress through regular updates and a community of 160+ engaged parents</p>
          </FeatureCard>
        </FeaturesGrid>
      </Features>
    </PageWrapper>
  );
}; 