import styled from 'styled-components';

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

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ResourceCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ResourceTitle = styled.h3`
  color: ${({ theme }) => theme.colors.deepOcean};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const ResourceDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ResourceLink = styled.a`
  color: ${({ theme }) => theme.colors.crab};
  text-decoration: none;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const Resources = () => {
  const resources = [
    {
      title: "Study Guides",
      description: "Comprehensive study guides for various subjects, including math, science, and language arts.",
      link: "#",
      comingSoon: true
    },
    {
      title: "Practice Problems",
      description: "Collection of practice problems with detailed solutions to help reinforce learning concepts.",
      link: "#",
      comingSoon: true
    },
    {
      title: "Video Tutorials",
      description: "Educational videos covering key topics and explaining complex concepts in simple terms.",
      link: "#",
      comingSoon: true
    },
    {
      title: "Learning Tools",
      description: "Interactive tools and resources to enhance the learning experience.",
      link: "#",
      comingSoon: true
    }
  ];

  return (
    <PageContainer>
      <Title>Learning Resources</Title>
      <ResourcesGrid>
        {resources.map((resource, index) => (
          <ResourceCard key={index}>
            <ResourceTitle>{resource.title}</ResourceTitle>
            <ResourceDescription>{resource.description}</ResourceDescription>
            <ResourceLink href={resource.link}>
              {resource.comingSoon ? "Coming Soon" : "Access Resource"}
            </ResourceLink>
          </ResourceCard>
        ))}
      </ResourcesGrid>
    </PageContainer>
  );
}; 