import styled from 'styled-components';

const TeamMemberCard = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const MemberImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto ${({ theme }) => theme.spacing.md};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.sandDollar};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MemberName = styled.h3`
  color: ${({ theme }) => theme.colors.deepOcean};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const MemberRole = styled.h4`
  color: ${({ theme }) => theme.colors.crab};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-size: 1.1rem;
`;

const MemberDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const MemberEmail = styled.a`
  color: ${({ theme }) => theme.colors.deepOcean};
  text-decoration: underline;
  
  &:hover {
    color: ${({ theme }) => theme.colors.crab};
  }
`;

interface TeamMemberProps {
  name: string;
  role: string;
  description: string;
  email: string;
  imageUrl?: string;
}

export const TeamMember = ({ name, role, description, email, imageUrl }: TeamMemberProps) => {
  return (
    <TeamMemberCard>
      <MemberImage>
        {imageUrl && <img src={imageUrl} alt={name} />}
      </MemberImage>
      <MemberName>{name}</MemberName>
      <MemberRole>{role}</MemberRole>
      <MemberDescription>{description}</MemberDescription>
      <MemberEmail href={`mailto:${email}`}>{email}</MemberEmail>
    </TeamMemberCard>
  );
}; 