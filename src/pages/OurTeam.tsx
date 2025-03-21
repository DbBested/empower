import styled from 'styled-components';
import { TeamMember } from '../components/TeamMember';

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

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const OurTeam = () => {
  const teamMembers = [
    {
      name: "Vienna Dschung",
      role: "Founder & Lead Mentor",
      description: "Passionate about education and helping students reach their full potential.",
      email: "vienna@example.com", // Replace with actual email
      imageUrl: "/team/vienna.jpg" // Add actual image path
    },
    {
      name: "Pammela",
      role: "Senior Mentor",
      description: "Experienced educator specializing in personalized learning approaches.",
      email: "pammela@example.com", // Replace with actual email
      imageUrl: "/team/pammela.jpg" // Add actual image path
    },
    {
      name: "Team Member 3",
      role: "Mentor",
      description: "Dedicated to creating engaging learning experiences for students.",
      email: "mentor3@example.com",
      imageUrl: "/team/placeholder.jpg"
    }
  ];

  return (
    <PageContainer>
      <Title>Meet Our Team</Title>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamMember
            key={index}
            name={member.name}
            role={member.role}
            description={member.description}
            email={member.email}
            imageUrl={member.imageUrl}
          />
        ))}
      </TeamGrid>
    </PageContainer>
  );
}; 