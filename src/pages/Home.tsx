import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Slideshow from '../components/Slideshow';




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



const Stat = ({title, label}: {title: string; label: string}) => {
	return (
		<div>
			<h2 className='text-crab'>{title}</h2>
			<p className='text-deep-ocean text-lg m-0'>{label}</p>
		</div>
	);
}

export const Home = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='bg-rose-50 p-10 lg:p-20 min-h-[60vh] flex items-center w-full'>
        <div className='w-full mx-auto px-5 text-center lg:text-left flex flex-col lg:flex-row items-center gap-3'>
          <div className='flex-1'>
            <h1 className='text-deep-ocean mb-3'>Connecting Local Students with Expert Tutors</h1>
            <p className='text-gray mx-auto lg:m-0 mb-5 text-lg max-w-2xl'>
              Join our community of passionate educators and eager learners to create meaningful connections and foster academic success in your neighborhood
            </p>
            <div className='grid grid-cols-[1fr] lg:grid-cols-3 gap-3 lg:gap-4 mt-10 text-center'>
              <Stat title="70+" label="Children Supported" />
              <Stat title="160+" label="Parents Connected" />
              <Stat title="10%" label="School Volunteers" />
            </div>
            <div className='flex gap-4 mt-10 justify-center lg:justify-start'>
              <Link className='button-primary p-2 lg:p-4 rounded-lg font-bold text-lg' to="/join-us">Find a Tutor</Link>
              <Link className='button-secondary p-2 lg:p-4 rounded-lg font-bold text-lg' to="/tutoring">Become a Tutor</Link>
            </div>
          </div>
          <Slideshow images={['/tutorimage/img1.jpg','/tutorimage/img2.jpg','/tutorimage/img3.jpg']} interval={4500} />
        </div>
      </div>

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
    </div>
  );
}; 