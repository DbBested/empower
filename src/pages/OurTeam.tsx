import styled from 'styled-components';
import { TeamMember } from '../components/TeamMember';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.deepOcean};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  text-align: center;
`;

export const OurTeam = () => {
  const teamMembers = [
    {
      name: "Vienna Dschung",
      role: "Founder & President",
      description: "Vienna founded Empower Initiative during her sophomore year of high school and remains deeply committed to this cause. As an oldest sibling, she has many years of experience tutoring younger kids. In school, Vienna has taken over 12 AP and dual enrollment classes, with a special interest in history and math. Outside of school, Vienna pursues many interests, such as serving on the Youth Council of the Asian American Pacific Islanders Commission, working with local nonprofit organizations, and advocating for plant-based food in schools.",
      email: "vz1689@hotmail.com",
      imageUrl: "/team/vienna.JPG"
    },
	{
      name: "Kirsten Choi",
      role: "Vice President",
      description: "Experienced educator specializing in personalized learning approaches.",
      email: "kirsten@example.com", // Replace with actual email
      imageUrl: "/team/kirsten.jpg" // Add actual image path
    },
    {
      name: "Pamela Hao",
      role: "Event Coordinator",
      description: "Experienced educator specializing in personalized learning approaches.",
      email: "pamela@example.com", // Replace with actual email
      imageUrl: "/team/pamela.jpg" // Add actual image path
    },{
      name: "Eric Mu",
      role: "Secretary",
      description: "Experienced educator specializing in personalized learning approaches.",
      email: "eric@example.com", // Replace with actual email
      imageUrl: "/team/eric.jpg" // Add actual image path
    },
    {
      name: "Anlin Huang",
      role: "Treasurer",
      description: "Anlin has been a tutor at Empower Initiative for over a year. Over that time, she has built strong connections with the students she has worked with and helped many of them to succeed in their courses. Anlin is very passionate about educational equality, and loves working with children to help them reach their full potential. Aside from Empower Initiative, Anlin serves as treasurer in the Class of 2028 student government, as well as the financial department head of the Angel Dance Youth League, where she helps to spread the culture of Chinese Traditional Dance across the community. Anlin is an All-State violist and plays in the Boston Youth Symphony Orchestras, and in her free time, she enjoys painting, playing with her chickens, and spending time with her family.",
      email: "huanganlin2@gmail.com",
      imageUrl: "/team/anlin.png"
    },
    {
      name: "Zoey Ying",
      role: "Historian",
      description: "Zoey has been an active member of Empower Initiative for over a year. She has worked with many different kids, building bonds and helping them thrive in their academic endeavors. By doing so, she has experience in tutoring and helping kids of different ages and abilities. Zoey also challenges herself by taking two languages, Latin and French, as well as speaking Cantonese with her parents at home. Outside of Empower Initiative, Zoey does ballet and plays the viola. In her free time, Zoey enjoys crocheting, serving her community, hanging out with her family and friends, baking as well as reading books.",
      email: "28yingz@weston.org",
      imageUrl: "/team/zoey.jpg"
    },
    {
      name: "Dohun Kim",
      role: "Website Coordinator",
      description: "Cool dude",
      email: "genius0412.tech@gmail.com",
      imageUrl: "/team/dohun.jpg"
    },
  ];

  return (
    <PageContainer>
      <h1 className="mt-6 text-deep-ocean text-center lg:text-left">Meet Our Team</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8'>
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
      </div>
    </PageContainer>
  );
}; 