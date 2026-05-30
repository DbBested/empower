import Image from 'next/image';
import Link from 'next/link';
import QuotesSlide from '@/components/QuotesSlide';
import { Parallax } from '@/components/Parallax';
import { Reveal } from '@/components/Reveal';
import SlotMachineText from '@/components/SlotMachineText';
import {
	Arrow,
	Heart,
	Flower,
	Pencil,
	Scribble,
	Sparkle,
	Squiggle,
	Star,
	Underline,
} from '@/components/Doodles';

const aboutSection = {
	index: '01',
	overline: 'About Us',
	title: 'A community of tutors and learners.',
	body: 'Empower Initiative connects local students with passionate volunteer tutors. We focus on personalized, one-on-one support that adapts to every learner — building real relationships, not just raising grades.',
	href: '/our-team',
	accent: 'text-crab',
};

const tutoringSection = {
	index: '02',
	overline: 'Tutoring',
	title: 'Personalized academic support.',
	body: 'Our tutors meet students exactly where they are. Every session is shaped around one learner, their goals, and their pace.',
	href: '/tutoring',
	accent: 'text-butterscotch',
	offerings: [
		'English language learning',
		'Competition & school math',
		'One-on-one mentorship',
		'Always free & flexible',
	],
};

const joinPaths = [
	{
		label: 'Parents',
		body: 'Find a caring, vetted tutor matched to your child’s needs.',
		href: '/join-us',
	},
	{
		label: 'Students',
		body: 'Volunteer your skills and mentor a learner in your community.',
		href: '/join-us',
	},
	{
		label: 'Future leaders',
		body: 'Bring Empower to your school and start a new chapter.',
		href: '/join-us',
	},
];

const stats = [
	{ value: '100+', label: 'Children Supported' },
	{ value: '180+', label: 'Parents Connected' },
	{ value: '#1', label: 'Largest Volunteering Club' },
];

const learnAdverbs = ['vividly', 'boldly', 'joyfully', 'deeply', 'freely', 'curiously'];

const marqueeWords = [
	'curiosity',
	'community',
	'mentorship',
	'tutoring',
	'growth',
	'belonging',
	'discovery',
	'learning',
];

/**
 * A diagonal section divider that paints the section's background in two colors
 * split by a slanted line: above the line takes the previous section's color
 * (`over`), below takes this section's color (`fill`), with a thin accent line
 * running along the seam. It sits fully inside the section (`inset-0`) so the
 * diagonal stays visible even though sections use `overflow-hidden`. `slant` is a
 * viewport-width value so the angle stays consistent across screen sizes.
 */
function DiagonalTop({
	fill,
	over = 'bg-white',
	accent = 'bg-butterscotch',
	direction = 'left',
	slant = '7vw',
}: {
	fill: string;
	over?: string;
	accent?: string;
	direction?: 'left' | 'right';
	slant?: string;
}) {
	const clip =
		direction === 'left'
			? `polygon(0 0, 100% ${slant}, 100% 100%, 0 100%)`
			: `polygon(0 ${slant}, 100% 0, 100% 100%, 0 100%)`;
	return (
		<div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
			<div className={`absolute inset-0 ${over}`} />
			<div className={`absolute inset-0 ${accent}`} style={{ clipPath: clip }} />
			<div className={`absolute inset-0 ${fill}`} style={{ clipPath: clip, transform: 'translateY(5px)' }} />
		</div>
	);
}

export default function HomePage() {
	return (
		<div className="flex flex-col w-full bg-white overflow-x-clip">
			{/* HERO */}
			<section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden">
				<Parallax speed={0.4} className="absolute inset-0 w-full h-[120%] -top-[10%]">
					<div className="relative w-full h-full">
						<Image
							src="/tutorimage/img1.jpg"
							alt="Tutors and students together"
							fill
							priority
							sizes="100vw"
							className="object-cover"
						/>
					</div>
				</Parallax>
				<div className="absolute inset-0 bg-black/65" aria-hidden="true" />

				<Parallax speed={-0.15} className="absolute top-20 left-6 md:top-28 md:left-16 text-sand-dollar/80 pointer-events-none">
					<Sparkle className="w-10 h-10 animate-wiggle" style={{ ['--rot' as string]: '0deg' }} />
				</Parallax>
				<Parallax speed={-0.25} className="absolute top-24 right-8 md:top-42 md:right-24 text-butterscotch pointer-events-none">
					<Star className="w-14 h-14 animate-float" style={{ ['--rot' as string]: '12deg' }} />
				</Parallax>
				<Parallax speed={-0.2} className="absolute bottom-24 left-10 md:bottom-32 md:left-32 text-crab pointer-events-none">
					<Scribble className="w-20 h-20 animate-spin-slow" />
				</Parallax>
				<Parallax speed={-0.3} className="absolute bottom-28 right-6 md:bottom-48 md:right-32 text-vista-blue pointer-events-none">
					<Flower className="w-16 h-16 animate-float-slow" />
				</Parallax>

				<Parallax speed={-0.4} className="relative z-10 px-6 text-center text-white">
					<p className="text-xs md:text-sm tracking-[0.3em] uppercase font-semibold mb-3 md:mb-4 text-white/90">
						Empower Initiative
					</p>
					<h1 className="leading-[1.05] tracking-tight max-w-5xl mx-auto text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
						Learn{' '}
						<SlotMachineText words={learnAdverbs} className="text-butterscotch" />
						<span className="relative inline-block ml-3">
							<span className="relative z-10">through</span>
							<Underline className="absolute left-0 right-0 -bottom-3 w-full h-3 text-crab doodle-draw" style={{ ['--dash' as string]: '300' }} />
						</span>
						<br />
						connection.
					</h1>
					<p className="mt-5 md:mt-6 text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-white/90">
						A local tutoring nonprofit pairing high-school volunteers with students who want to learn.
					</p>
					<div className="flex flex-wrap gap-4 mt-6 md:mt-8 justify-center">
						<Link
							className="button-primary px-8 py-4 rounded-md font-semibold text-base shadow-lg hover:scale-[1.03] transition-transform"
							href="/join-us"
						>
							Find a Tutor
						</Link>
						<Link
							className="bg-white/95 hover:bg-white text-deep-ocean px-8 py-4 rounded-md font-semibold text-base transition-transform hover:scale-[1.03]"
							href="/tutoring"
						>
							Become a Tutor
						</Link>
					</div>
				</Parallax>

				<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 text-[10px] md:text-xs tracking-[0.3em] uppercase flex flex-col items-center gap-2 pointer-events-none">
					<span>Scroll</span>
					<span className="w-px h-8 md:h-10 bg-white/60 animate-pulse" />
				</div>
			</section>

			{/* MARQUEE STRIP */}
			<section className="bg-deep-ocean text-white py-6 overflow-hidden border-y border-white/10">
				<div className="flex w-max animate-marquee whitespace-nowrap">
					{[...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
						<span key={i} className="flex items-center text-2xl md:text-4xl font-poppins font-bold tracking-tight px-8">
							{word}
							<Sparkle className="w-5 h-5 mx-6 text-butterscotch" />
						</span>
					))}
				</div>
			</section>

			{/* STATS */}
			<section className="relative px-6 py-24 md:py-32">
				<Parallax speed={0.2} className="absolute -left-6 top-12 text-sand-dollar pointer-events-none">
					<Pencil className="w-32 md:w-48 h-auto -rotate-12" />
				</Parallax>
				<Parallax speed={-0.2} className="absolute right-2 bottom-8 text-vista-blue/60 pointer-events-none">
					<Scribble className="w-28 md:w-40 h-auto animate-spin-slow" />
				</Parallax>

				<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 text-center relative">
					{stats.map((stat, i) => (
						<Reveal key={stat.label} delay={i * 120}>
							<div className="relative">
								<p className="text-crab font-poppins text-5xl md:text-7xl font-bold leading-none">
									{stat.value}
								</p>
								<Underline className="mx-auto mt-3 w-32 h-3 text-butterscotch" />
								<p className="text-deep-ocean text-sm md:text-base mt-4">{stat.label}</p>
							</div>
						</Reveal>
					))}
				</div>
			</section>

			{/* ABOUT — editorial, image right with floating stat card */}
			<section className="relative px-6 py-24 md:py-36 overflow-hidden">
				<Parallax speed={0.18} className="absolute -left-12 top-24 text-sand-dollar pointer-events-none">
					<Pencil className="w-36 md:w-52 h-auto -rotate-6" />
				</Parallax>

				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center relative">
					<Reveal className="text-center md:text-left">
						<div className="flex items-center gap-4 justify-center md:justify-start mb-6">
							<span className="font-poppins text-5xl md:text-6xl font-bold text-sand-dollar leading-none select-none">
								{aboutSection.index}
							</span>
							<span className={`text-xs md:text-sm tracking-[0.25em] uppercase font-semibold ${aboutSection.accent}`}>
								{aboutSection.overline}
							</span>
						</div>
						<h2 className="text-deep-ocean mb-6 leading-tight">{aboutSection.title}</h2>
						<Squiggle className={`mb-8 w-36 h-5 ${aboutSection.accent} mx-auto md:mx-0`} />
						<p className="text-gray text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto md:mx-0">
							{aboutSection.body}
						</p>
						<Link
							href={aboutSection.href}
							className="group inline-flex items-center gap-2 text-deep-ocean font-semibold border-b-2 border-deep-ocean pb-1 hover:text-crab hover:border-crab transition-colors"
						>
							Meet the team
							<Arrow className="w-7 h-4 group-hover:translate-x-1 transition-transform" />
						</Link>
					</Reveal>

					<Reveal from="up" className="relative h-[460px] md:h-[600px]">
						{/* primary image — upper right */}
						<div className="absolute top-0 right-0 w-[82%] md:w-[78%] h-[78%] rounded-[28px] overflow-hidden shadow-[0_30px_70px_-25px_rgba(32,78,207,0.45)] ring-1 ring-black/5">
							<Image
								src="/tutorimage/img2.jpg"
								alt="Students collaborating around a table"
								fill
								sizes="(min-width: 768px) 460px, 80vw"
								className="object-cover"
							/>
						</div>
						{/* secondary image — overlapping lower left */}
						<div className="absolute bottom-0 left-0 w-[54%] md:w-[50%] h-[52%] rounded-[24px] overflow-hidden ring-[6px] ring-white shadow-[0_24px_50px_-18px_rgba(32,78,207,0.5)]">
							<Image
								src="/tutorimage/img4.webp"
								alt="A tutor and student working one-on-one"
								fill
								sizes="(min-width: 768px) 290px, 54vw"
								className="object-cover"
							/>
						</div>
						{/* floating stat badge */}
						<div className="absolute top-2 left-0 md:-left-6 bg-white rounded-2xl shadow-[0_18px_40px_-18px_rgba(32,78,207,0.45)] ring-1 ring-gray-100 px-5 py-4 flex items-center gap-3">
							<p className="font-poppins text-3xl md:text-4xl font-bold text-crab leading-none">1:1</p>
							<p className="text-deep-ocean text-[0.7rem] md:text-xs leading-tight text-left max-w-[6.5rem]">
								Every match is one tutor, one student.
							</p>
						</div>
					</Reveal>
				</div>
			</section>

			{/* TUTORING — tinted band, image left + text right, diagonal top divider */}
			<section className="relative isolate px-6 py-24 md:py-36 overflow-hidden">
				<DiagonalTop fill="bg-sand-dollar" accent="bg-butterscotch" direction="left" />

				<Parallax speed={-0.22} className="absolute right-4 md:right-16 top-[9vw] text-crab/40 pointer-events-none">
					<Scribble className="w-28 md:w-40 h-auto animate-spin-slow" />
				</Parallax>

				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative">
					<Reveal from="up" className="relative order-2 md:order-1 h-[400px] md:h-[520px]">
						<div className="absolute inset-0 rounded-[28px] overflow-hidden shadow-[0_30px_70px_-25px_rgba(32,78,207,0.45)] ring-1 ring-black/5">
							<Image
								src="/tutorimage/img3.jpg"
								alt="A tutor working one-on-one with a student"
								fill
								sizes="(min-width: 768px) 540px, 90vw"
								className="object-cover"
							/>
						</div>
						<div className="absolute -top-5 -right-4 md:-right-6 bg-butterscotch text-deep-ocean rounded-full px-5 py-2 text-sm font-poppins font-bold shadow-[0_14px_30px_-10px_rgba(234,152,54,0.9)] rotate-3">
							100% free
						</div>
					</Reveal>

					<Reveal className="order-1 md:order-2 text-center md:text-left">
						<div className="flex items-center gap-4 justify-center md:justify-start mb-6">
							<span className="font-poppins text-5xl md:text-6xl font-bold text-crab/30 leading-none select-none">
								{tutoringSection.index}
							</span>
							<span className="text-xs md:text-sm tracking-[0.25em] uppercase font-semibold text-crab">
								{tutoringSection.overline}
							</span>
						</div>
						<h2 className="text-deep-ocean mb-6 leading-tight">{tutoringSection.title}</h2>
						<p className="text-deep-ocean/75 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
							{tutoringSection.body}
						</p>
						<ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-10 max-w-xl mx-auto md:mx-0">
							{tutoringSection.offerings.map((item) => (
								<li key={item} className="flex items-center gap-3 text-deep-ocean text-sm md:text-base">
									<span className="flex-shrink-0 grid place-items-center w-7 h-7 rounded-full bg-crab/15">
										<Sparkle className="w-4 h-4 text-crab" />
									</span>
									<span className="text-left">{item}</span>
								</li>
							))}
						</ul>
						<Link
							href={tutoringSection.href}
							className="group inline-flex items-center gap-2 text-deep-ocean font-semibold border-b-2 border-deep-ocean pb-1 hover:text-crab hover:border-crab transition-colors"
						>
							How tutoring works
							<Arrow className="w-7 h-4 group-hover:translate-x-1 transition-transform" />
						</Link>
					</Reveal>
				</div>
			</section>

			{/* JOIN — deep-ocean band with diagonal top divider (alternating direction) */}
			<section className="relative isolate w-full text-white px-6 py-28 md:py-40 overflow-hidden">
				<DiagonalTop fill="bg-deep-ocean" over="bg-sand-dollar" accent="bg-butterscotch" direction="right" />
				<Parallax speed={-0.2} className="absolute -right-6 top-24 text-butterscotch pointer-events-none">
					<Star className="w-14 h-14 animate-float" style={{ ['--rot' as string]: '-8deg' }} />
				</Parallax>
				<Parallax speed={0.2} className="absolute left-6 bottom-16 text-vista-blue pointer-events-none">
					<Flower className="w-16 h-16 animate-float-slow" />
				</Parallax>
				<Parallax speed={-0.3} className="absolute right-1/4 bottom-8 text-sand-dollar/80 pointer-events-none">
					<Heart className="w-10 h-10 animate-float-slow" />
				</Parallax>

				<Reveal className="max-w-3xl mx-auto text-center relative mb-14 md:mb-16">
					<p className="text-xs md:text-sm tracking-[0.25em] uppercase font-semibold mb-5 text-butterscotch">
						Join Us
					</p>
					<h2 className="mb-6 leading-tight">There&apos;s a place for you here.</h2>
					<Underline className="mx-auto mb-6 w-44 h-3 text-butterscotch" />
					<p className="text-white/80 text-base md:text-lg leading-relaxed">
						Whether you&apos;re a parent, a student, or a future chapter founder — find the path that fits.
					</p>
				</Reveal>

				<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative">
					{joinPaths.map((path, i) => (
						<Reveal key={path.label} delay={i * 110} from="up">
							<Link
								href={path.href}
								className="group flex flex-col h-full bg-white/[0.06] hover:bg-white/[0.12] ring-1 ring-white/15 hover:ring-white/40 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1"
							>
								<span className="font-poppins text-sm font-bold text-butterscotch mb-4">
									0{i + 1}
								</span>
								<h3 className="text-white mb-3">{path.label}</h3>
								<p className="text-white/70 text-sm md:text-base leading-relaxed flex-1">
									{path.body}
								</p>
								<span className="mt-6 inline-flex items-center gap-2 text-butterscotch font-semibold text-sm">
									Explore
									<Arrow className="w-7 h-4 group-hover:translate-x-1 transition-transform" />
								</span>
							</Link>
						</Reveal>
					))}
				</div>
			</section>

			{/* TESTIMONIALS — diagonal top divider into the band above, flat bottom into footer */}
			<section className="relative isolate w-full py-28 md:py-36 overflow-hidden">
				<DiagonalTop fill="bg-rose-50" over="bg-deep-ocean" accent="bg-crab" direction="left" />
				<Parallax speed={0.3} className="absolute left-4 md:left-12 top-20 text-crab/40 pointer-events-none">
					<Sparkle className="w-12 h-12 animate-wiggle" />
				</Parallax>
				<Parallax speed={-0.25} className="absolute right-6 md:right-16 top-16 text-vista-blue/60 pointer-events-none">
					<Star className="w-14 h-14 animate-float" />
				</Parallax>
				<Parallax speed={0.2} className="absolute left-1/4 bottom-8 text-butterscotch/70 pointer-events-none">
					<Flower className="w-16 h-16 animate-spin-slow" />
				</Parallax>
				<Parallax speed={-0.3} className="absolute right-1/4 bottom-4 text-crab/50 pointer-events-none">
					<Heart className="w-10 h-10 animate-float-slow" />
				</Parallax>

				<Reveal className="max-w-4xl mx-auto px-6 text-center mb-12 relative">
					<p className="text-xs md:text-sm tracking-[0.25em] uppercase text-crab font-semibold mb-4">
						Testimonials
					</p>
					<h2 className="text-deep-ocean mb-4">What families are saying</h2>
					<Underline className="mx-auto mb-6 w-48 h-3 text-crab" />
					<p className="text-gray text-base md:text-lg max-w-2xl mx-auto">
						Real feedback from parents and students in our local tutoring community.
					</p>
				</Reveal>
				<QuotesSlide />
			</section>
		</div>
	);
}
