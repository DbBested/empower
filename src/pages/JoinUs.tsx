import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.deepOcean};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  font-size: 1.2rem;
  line-height: 1.6;
`;

const JoinButton = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.crab};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.2rem;
  text-decoration: none;
  transition: background-color 0.2s ease;
  margin-top: ${({ theme }) => theme.spacing.lg};

  &:hover {
    background-color: ${({ theme }) => theme.colors.deepOcean};
  }
`;

const InfoSection = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.sandDollar};
  border-radius: 8px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;

  h3 {
    color: ${({ theme }) => theme.colors.deepOcean};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    text-align: center;
    font-size: 1.5rem;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

const FeatureBox = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 1.1rem;
  line-height: 1.5;
  transition: all 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.colors.deepOcean};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const JoinUs = () => {
  const features = [
    "Access to experienced tutors",
    "Personalized learning support",
    "Interactive learning materials",
    "Supportive community environment"
  ];

  return (
    <PageContainer>
      <Title>Join Our Learning Community</Title>
      <Description>
        Take the first step towards academic excellence by joining our supportive learning community. 
        Whether you're a student looking for guidance or a tutor wanting to make a difference, 
        we welcome you to be part of our journey.
      </Description>

      <JoinButton 
        href="https://classroom.google.com/c/NjYxMjA4MzYwODYx?cjc=uejjzpk" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Join Our Google Classroom
      </JoinButton>

      <InfoSection>
        <h3>What to Expect</h3>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureBox key={index}>
              {feature}
            </FeatureBox>
          ))}
        </FeaturesGrid>
      </InfoSection>
    </PageContainer>
  );
}; 