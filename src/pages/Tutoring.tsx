import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.deepOcean};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  font-size: 1.2rem;
  line-height: 1.6;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ServiceCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ServiceTitle = styled.h3`
  color: ${({ theme }) => theme.colors.deepOcean};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.deepOcean};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: 4px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.crab};
  	color: ${({ theme }) => theme.colors.white};
  }
`;

export const Tutoring = () => {
  const services = [
    {
      title: "English Language Learning",
      description: "Specialized tutoring for Chinese students learning English, focusing on conversation, writing, and comprehension skills."
    },
    {
      title: "Academic Support",
      description: "Comprehensive academic assistance in various subjects, tailored to each student's curriculum and learning style."
    },
    {
      title: "Cultural Exchange",
      description: "Bridge cultural gaps while learning, helping students understand both language and cultural contexts."
    },
    {
      title: "Test Preparation",
      description: "Targeted preparation for standardized tests, including SAT, ACT, and English proficiency exams."
    }
  ];

  return (
    <PageContainer>
      <Title>Our Tutoring Services</Title>
      <Description>
        Our dedicated tutors specialize in providing personalized education support, 
        with a focus on helping Chinese students master English and excel in their academic journey. 
        We create a supportive, engaging environment that promotes both language acquisition and 
        cultural understanding.
      </Description>
      
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <CTASection>
        <CTAButton to="/join-us">Start Your Learning Journey</CTAButton>
      </CTASection>
    </PageContainer>
  );
}; 