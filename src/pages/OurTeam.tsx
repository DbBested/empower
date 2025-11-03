import styled from 'styled-components';
import { TeamMember } from '../components/TeamMember';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.md};
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
      description: "Pamela has worked at Empower Initiative since its founding at Weston High School. She enjoys helping students understand complex concepts and develop their problem-solving skills. Pamela has helped students with various subjects, particularly math and Spanish. As a sophomore, Pamela got a 5 on her AP Calc BC exam, took AP Chemistry as a junior, and continues to challenge herself with college-level classes with dual enrollment math. Furthermore, she received the high honors award from the US National Chemistry Olympiad.",
      email: "pamela@example.com", // Replace with actual email
      imageUrl: "/team/Pamela.png" // Add actual image path
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
      email: "zoeysying@gmail.com",
      imageUrl: "/team/zoey.jpg"
    },
    {
      name: "Dohun Kim",
      role: "Website Coordinator",
      description: "Dohun has been a tutor at Empower Initiative for over a year. He likes to support students tackling difficult concepts through asking guiding questions instead of directly teaching them. He has experience in teaching a wide range of subjects from novice Spanish to chess and competition math. Outside of the Empower Initiative, he has mentored less experienced 4th graders to advanced 7th grade students in First Lego League. In his freshman year, Dohun has gotten a 5 on the AP Calculus BC and Computer Science A exams, 141 on AMC 10A, and a 9 on the AIME.",
      email: "genius0412.tech@gmail.com",
      imageUrl: "/team/DohunKim.JPG"
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