import Link from 'next/link';
import { TeamMember } from '@/components/TeamMember';
import { Parallax } from '@/components/Parallax';
import { Reveal } from '@/components/Reveal';
import {
	Arrow,
	Heart,
	Flower,
	Pencil,
	Plus,
	Scribble,
	Sparkle,
	Squiggle,
	Star,
	Underline,
} from '@/components/Doodles';

const teamMembers = [
	{
		name: 'Anlin Huang',
		role: 'President',
		description:
			"Anlin has been a tutor at Empower Initiative for over a year. Over that time, she has built strong connections with the students she has worked with and helped many of them to succeed in their courses. Anlin is very passionate about educational equality, and loves working with children to help them reach their full potential. Aside from Empower Initiative, Anlin serves as treasurer in the Class of 2028 student government, as well as the financial department head of the Angel Dance Youth League, where she helps to spread the culture of Chinese Traditional Dance across the community. Anlin is an All-State violist and plays in the Boston Youth Symphony Orchestras, and in her free time, she enjoys painting, playing with her chickens, and spending time with her family.",
		email: 'huanganlin2@gmail.com',
		imageUrl: '/team/anlin.png',
	},
	{
		name: 'Zoey Ying',
		role: 'Vice President',
		description:
			'Zoey has been an active member of Empower Initiative for over a year. She has worked with many different kids, building bonds and helping them thrive in their academic endeavors. By doing so, she has experience in tutoring and helping kids of different ages and abilities. Zoey also challenges herself by taking two languages, Latin and French, as well as speaking Cantonese with her parents at home. Outside of Empower Initiative, Zoey does ballet and plays the viola. In her free time, Zoey enjoys crocheting, serving her community, hanging out with her family and friends, baking as well as reading books.',
		email: 'zoeysying@gmail.com',
		imageUrl: '/team/zoey.jpg',
	},
	{
		name: 'Michelle Bi',
		role: 'Secretary',
		description:
			'Michelle has been an active member of Empower Initiative for over a year, where she has worked with students of different ages, building meaningful connections and supporting their academic growth. Through this experience, she has developed strong tutoring skills and the ability to adapt to a variety of learning styles. She also speaks Mandarin and uses it to support students in their learning. In addition to her work with Empower, Michelle is a member of her school’s fencing team. Outside of school and volunteering, Michelle enjoys traveling, baking, reading, and spending time with family and friends.',
		email: 'michelle.kailan.bi@gmail.com',
		imageUrl: '/team/michelle.jpg',
	},
	{
		name: 'Ethan Zhuang',
		role: 'Treasurer',
		description:
			'Ethan has been a tutor at Empower Initiative for over a year, working with a wide range of students in various subjects. He focuses on teaching the underlying logic of a topic rather than just having students memorize steps for a test, helping them understand how to handle more difficult problems on their own. Ethan is passionate about helping others and loves seeing his students succeed as they learn new concepts. In school, Ethan is an active member of the science team and the math team, where he competes in the AMCs and other competitions. He also competes with GNCE Robotics, where his team is ranked top 20 in the world and has traveled to the World Championships. Outside of school, Ethan is a competitive speedcuber, placing 5th at the World Championships. He also plays the violin and serves as a section leader in the Rivers Youth Symphony.',
		email: 'ethanzhuang2400@gmail.com',
		imageUrl: '/team/ethanzhu.png',
	},
	{
		name: 'Felix Dschung',
		role: 'Historian',
		description:
			'Felix is a founding member at Empower Initiative and has stayed committed to the organization for the past three years. Entering his final year of high school, he has now five years of mentoring and tutoring students. In school, he serves as the Captain of the Robotics Team, President of the Cybersecurity Club, and Co-President of Computer Science Club. Felix has taken 8 AP courses in high school so far and is proficient in English, Cantonese, and Mandarin.',
		email: '',
		imageUrl: '/team/felix.jpeg',
	},
	{
		name: 'Dohun Kim',
		role: 'Website Coordinator',
		description:
			'Dohun has been a tutor at Empower Initiative for over a year. He likes to support students tackling difficult concepts through asking guiding questions instead of directly teaching them. He has experience in teaching a wide range of subjects from novice Spanish to chess and competition math. Outside of the Empower Initiative, he has mentored less experienced 4th graders to advanced 7th grade students in First Lego League. In his freshman year, Dohun has gotten a 5 on the AP Calculus BC and Computer Science A exams, 141 on AMC 10A, and a 9 on the AIME.',
		email: 'genius0412.tech@gmail.com',
		imageUrl: '/team/DohunKim.JPG',
	},
];

const alum = [
	{
		name: 'Vienna Dschung',
		role: 'Founder & President',
		description:
			'Vienna founded Empower Initiative during her sophomore year of high school and remains deeply committed to this cause. As an oldest sibling, she has many years of experience tutoring younger kids. In school, Vienna has taken over 12 AP and dual enrollment classes, with a special interest in history and math. Outside of school, Vienna pursues many interests, such as serving on the Youth Council of the Asian American Pacific Islanders Commission, working with local nonprofit organizations, and advocating for plant-based food in schools.',
		email: 'vz1689@hotmail.com',
		imageUrl: '/team/alum/vienna.JPG',
	},
	{
		name: 'Kirsten Choi',
		role: 'Vice President',
		description:
			'Kirsten Choi is a senior at Weston High School and an active leader in her community. At school, she serves in student government and student council, and is the vice president and co-founder of the Empower Initiative, a tutoring club dedicated to supporting others. Beyond the classroom, Kirsten is a member of her school’s Varsity Soccer team and plays cello with the Boston Youth Symphony Orchestra. She hopes to continue her journey in STEM, combining her passion for leadership, teamwork, and education in her future pursuits.',
		email: 'kirsten0829@gmail.com',
		imageUrl: '/team/alum/kirsten.jpg',
	},
	{
		name: 'Pamela Hao',
		role: 'Event Coordinator',
		description:
			'Pamela has worked at Empower Initiative since its founding at Weston High School. She enjoys helping students understand complex concepts and develop their problem-solving skills. Pamela has helped students with various subjects, particularly math and Spanish. As a sophomore, Pamela got a 5 on her AP Calc BC exam, took AP Chemistry as a junior, and continues to challenge herself with college-level classes with dual enrollment math. Furthermore, she received the high honors award from the US National Chemistry Olympiad.',
		email: 'pamela@example.com',
		imageUrl: '/team/alum/Pamela.png',
	},
	{
		name: 'Eric Mu',
		role: 'Secretary',
		description:
			'Eric has tutored at Empower Initiative for over a year, developing close rapports with various students and guiding them to success in their academic coursework. In the past, he has also tutored for the SAT and taught Python to younger children. He particularly values individual education and helping students fully comprehend complex concepts. In his sophomore year, Eric got a 5 on his AP Calculus BC exam, and he continues to challenge himself with other AP courses alongside dual enrollment and competition math, obtaining a 10 on the AIME. In his spare time, he enjoys reading, piecing together jigsaw puzzles, and spending time with family.',
		email: 'ericmu2124@gmail.com',
		imageUrl: '/team/Eric.png',
	},
];

export default function OurTeamPage() {
	return (
		<div className="flex flex-col w-full bg-white overflow-x-clip">
			{/* HERO */}
			<section className="relative pt-40 md:pt-48 pb-20 md:pb-28 px-6 overflow-hidden">
				<Parallax speed={-0.15} className="absolute top-32 left-6 md:left-20 text-crab/80 pointer-events-none">
					<Sparkle className="w-10 h-10 animate-wiggle" style={{ ['--rot' as string]: '0deg' }} />
				</Parallax>
				<Parallax speed={-0.25} className="absolute top-40 right-8 md:right-28 text-butterscotch pointer-events-none">
					<Star className="w-14 h-14 animate-float" style={{ ['--rot' as string]: '12deg' }} />
				</Parallax>
				<Parallax speed={0.2} className="absolute bottom-6 left-10 md:left-32 text-vista-blue pointer-events-none">
					<Flower className="w-16 h-16 animate-float-slow" />
				</Parallax>
				<Parallax speed={0.15} className="absolute bottom-10 right-10 md:right-32 text-crab/80 pointer-events-none">
					<Scribble className="w-20 h-20 animate-spin-slow" />
				</Parallax>

				<Reveal className="max-w-4xl mx-auto text-center relative">
					<p className="text-xs md:text-sm tracking-[0.3em] uppercase text-crab font-semibold mb-5">
						Our Team
					</p>
					<h1 className="text-deep-ocean leading-[1.05] tracking-tight">
						Meet the{' '}
						<span className="relative inline-block">
							<span className="relative z-10">team</span>
							<Underline
								className="absolute left-0 right-0 -bottom-3 w-full h-3 text-crab doodle-draw"
								style={{ ['--dash' as string]: '300' }}
							/>
						</span>{' '}
						behind Empower.
					</h1>
					<p className="mt-6 md:mt-8 text-gray text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
						Student officers, founders, and alumni who've built Empower Initiative from the ground up — and the volunteers who keep it growing.
					</p>
				</Reveal>
			</section>

			{/* OFFICERS */}
			<section className="relative px-6 py-20 md:py-28 border-y border-gray-100 overflow-hidden">
				<Parallax speed={0.25} className="absolute -left-6 top-16 text-sand-dollar pointer-events-none">
					<Pencil className="w-32 md:w-48 h-auto -rotate-12" />
				</Parallax>
				<Parallax speed={-0.2} className="absolute right-4 md:right-24 top-24 text-butterscotch pointer-events-none">
					<Plus className="w-10 h-10 animate-wiggle" />
				</Parallax>
				<Parallax speed={0.15} className="absolute -right-6 bottom-20 text-vista-blue/60 pointer-events-none">
					<Scribble className="w-32 h-auto animate-spin-slow" />
				</Parallax>

				<Reveal className="max-w-3xl mx-auto text-center mb-16 md:mb-20 relative">
					<p className="text-xs md:text-sm tracking-[0.25em] uppercase text-crab font-semibold mb-5">
						01 / Officers
					</p>
					<h2 className="text-deep-ocean mb-6 leading-tight">Current leadership</h2>
					<Squiggle className="mx-auto mb-8 w-40 h-5 text-crab" />
					<p className="text-gray text-base md:text-lg leading-relaxed">
						The student leaders running Empower Initiative this year — coordinating tutors, building curriculum, and keeping the community connected.
					</p>
				</Reveal>

				<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 relative">
					{teamMembers.map((member, i) => (
						<Reveal key={member.name} delay={(i % 2) * 100} from="up">
							<TeamMember
								name={member.name}
								role={member.role}
								description={member.description}
								email={member.email}
								imageUrl={member.imageUrl}
							/>
						</Reveal>
					))}
				</div>
			</section>

			{/* ALUMNI */}
			<section className="relative px-6 py-20 md:py-28 border-b border-gray-100 overflow-hidden">
				<Parallax speed={-0.25} className="absolute -right-8 top-20 text-vista-blue/70 pointer-events-none">
					<Pencil className="w-40 md:w-56 h-auto rotate-6" />
				</Parallax>
				<Parallax speed={0.2} className="absolute left-6 md:left-20 top-24 text-crab pointer-events-none">
					<Heart className="w-10 h-10 animate-float-slow" />
				</Parallax>
				<Parallax speed={-0.15} className="absolute left-10 md:left-32 bottom-16 text-butterscotch pointer-events-none">
					<Flower className="w-14 h-14 animate-spin-slow" />
				</Parallax>

				<Reveal className="max-w-3xl mx-auto text-center mb-16 md:mb-20 relative">
					<p className="text-xs md:text-sm tracking-[0.25em] uppercase text-vista-blue font-semibold mb-5">
						02 / Alumni
					</p>
					<h2 className="text-deep-ocean mb-6 leading-tight">Founders & alumni</h2>
					<Squiggle className="mx-auto mb-8 w-40 h-5 text-vista-blue" />
					<p className="text-gray text-base md:text-lg leading-relaxed">
						The students who built Empower from the start — and have since moved on to their next chapters.
					</p>
				</Reveal>

				<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 relative">
					{alum.map((member, i) => (
						<Reveal key={member.name} delay={(i % 2) * 100} from="up">
							<TeamMember
								name={member.name}
								role={member.role}
								description={member.description}
								email={member.email}
								imageUrl={member.imageUrl}
							/>
						</Reveal>
					))}
				</div>
			</section>

			{/* CTA */}
			<section className="relative w-full bg-rose-50 px-6 py-24 md:py-32 overflow-hidden">
				<Parallax speed={0.3} className="absolute left-4 md:left-16 top-12 text-crab/40 pointer-events-none">
					<Sparkle className="w-12 h-12 animate-wiggle" />
				</Parallax>
				<Parallax speed={-0.25} className="absolute right-6 md:right-20 top-16 text-vista-blue/60 pointer-events-none">
					<Star className="w-14 h-14 animate-float" />
				</Parallax>
				<Parallax speed={0.2} className="absolute left-1/4 bottom-8 text-butterscotch/70 pointer-events-none">
					<Flower className="w-16 h-16 animate-spin-slow" />
				</Parallax>
				<Parallax speed={-0.3} className="absolute right-1/4 bottom-4 text-crab/50 pointer-events-none">
					<Heart className="w-10 h-10 animate-float-slow" />
				</Parallax>

				<Reveal className="max-w-3xl mx-auto text-center relative">
					<p className="text-xs md:text-sm tracking-[0.25em] uppercase text-crab font-semibold mb-5">
						Join the team
					</p>
					<h2 className="text-deep-ocean mb-6 leading-tight">Want to tutor with us?</h2>
					<Squiggle className="mx-auto mb-8 w-40 h-5 text-crab" />
					<p className="text-gray text-base md:text-lg leading-relaxed mb-10">
						We're always looking for high-school volunteers who care about learning and community. Applications open each fall.
					</p>
					<Link
						href="/join-us"
						className="group inline-flex items-center gap-3 text-deep-ocean font-semibold border-b-2 border-deep-ocean pb-1 hover:text-crab hover:border-crab transition-colors"
					>
						Apply to join
						<Arrow className="w-8 h-6 -mb-1 group-hover:translate-x-1 transition-transform" />
					</Link>
				</Reveal>
			</section>
		</div>
	);
}
