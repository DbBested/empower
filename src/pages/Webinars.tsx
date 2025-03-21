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

const WebinarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const WebinarCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const WebinarTitle = styled.h3`
  color: ${({ theme }) => theme.colors.deepOcean};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const WebinarDate = styled.p`
  color: ${({ theme }) => theme.colors.crab};
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const WebinarDescription = styled.p`
  color: ${({ theme }) => theme.colors.gray};
`;

export const Webinars = () => {
  const webinars = [
    {
      title: "Strategic Course Selection for College Success",
      date: "TBD",
      description: "Learn how to choose high school courses that align with your college goals and strengthen your application. We'll discuss AP, IB, and honors courses, and how they impact college admissions."
    },
    {
      title: "Mastering Academic Olympiads",
      date: "TBD",
      description: "Discover strategies for excelling in academic competitions like Math, Science, and Computing Olympiads. Learn from experienced competitors about preparation techniques and competition tips."
    },
    {
      title: "College Application Workshop",
      date: "TBD",
      description: "Comprehensive guide to college applications, including personal statement writing, activity lists, and how to showcase your achievements effectively."
    },
    {
      title: "Navigating College Essays",
      date: "TBD",
      description: "Expert tips on crafting compelling college essays that stand out. Learn about common pitfalls to avoid and strategies for telling your unique story."
    }
  ];

  return (
    <PageContainer>
      <Title>Upcoming Webinars</Title>
      <WebinarGrid>
        {webinars.map((webinar, index) => (
          <WebinarCard key={index}>
            <WebinarTitle>{webinar.title}</WebinarTitle>
            <WebinarDate>{webinar.date}</WebinarDate>
            <WebinarDescription>{webinar.description}</WebinarDescription>
          </WebinarCard>
        ))}
      </WebinarGrid>
    </PageContainer>
  );
}; 