import Link from 'next/link';
import QuotesSlide from '@/components/QuotesSlide';
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

const sections = [
	{
		overline: '01 / About Us',
		title: 'A community of tutors and learners.',
		body: 'Empower Initiative connects local students with passionate volunteer tutors. We focus on personalized, one-on-one support that adapts to every learner.',
		href: '/our-team',
		accent: 'text-crab',
	},
	{
		overline: '02 / Tutoring',
		title: 'Personalized academic support.',
		body: 'From English language learning to competition math, our tutors meet students where they are — free, flexible, and grounded in real relationships.',
		href: '/tutoring',
		accent: 'text-butterscotch',
	},
	{
		overline: '03 / Resources',
		title: 'Learning materials and webinars.',
		body: 'Curated guides, posters, and online webinars on college admissions, academic Olympiads, and study strategies — created by our own student officers.',
		href: '/resources',
		accent: 'text-vista-blue',
	},
	{
		overline: '04 / Join Us',
		title: 'Find a tutor. Become a tutor. Start a chapter.',
		body: "Whether you're a parent, a student, or a future chapter founder — there's a place for you here.",
		href: '/join-us',
		accent: 'text-deep-ocean',
	},
];

const stats = [
	{ value: '100+', label: 'Children Supported' },
	{ value: '180+', label: 'Parents Connected' },
	{ value: '#1', label: 'Largest Volunteering Club' },
];

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

export default function HomePage() {
	return (
		<div className="flex flex-col w-full bg-white overflow-x-clip">
			{/* HERO */}
			<section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden">
				<Parallax speed={0.4} className="absolute inset-0 w-full h-[120%] -top-[10%]">
					<img
						src="/tutorimage/img2.jpg"
						alt="Tutors and students together"
						className="w-full h-full object-cover"
					/>
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
						Learn vividly
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
			<section className="relative px-6 py-24 md:py-32 border-b border-gray-100">
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

			{/* MODULAR SECTIONS */}
			{sections.map((s, idx) => (
				<section
					key={s.overline}
					className="relative px-6 py-24 md:py-36 border-b border-gray-100 overflow-hidden"
				>
					{/* side doodles, alternate sides */}
					{idx % 2 === 0 ? (
						<>
							<Parallax speed={0.25} className="absolute -left-8 top-20 text-crab/70 pointer-events-none">
								<Pencil className="w-40 md:w-56 h-auto -rotate-6" />
							</Parallax>
							<Parallax speed={-0.2} className="absolute right-4 md:right-24 top-16 text-butterscotch pointer-events-none">
								<Star className="w-12 h-12 animate-float" style={{ ['--rot' as string]: '-8deg' }} />
							</Parallax>
							<Parallax speed={0.15} className="absolute right-10 bottom-16 text-vista-blue pointer-events-none">
								<Plus className="w-10 h-10 animate-wiggle" />
							</Parallax>
						</>
					) : (
						<>
							<Parallax speed={-0.25} className="absolute -right-8 top-20 text-vista-blue pointer-events-none">
								<Pencil className="w-40 md:w-56 h-auto rotate-6" />
							</Parallax>
							<Parallax speed={0.2} className="absolute left-6 md:left-20 top-20 text-crab pointer-events-none">
								<Heart className="w-10 h-10 animate-float-slow" />
							</Parallax>
							<Parallax speed={-0.15} className="absolute left-12 bottom-16 text-butterscotch pointer-events-none">
								<Flower className="w-14 h-14 animate-spin-slow" />
							</Parallax>
						</>
					)}

					<Reveal className="max-w-3xl mx-auto text-center relative">
						<p className={`text-xs md:text-sm tracking-[0.25em] uppercase font-semibold mb-5 ${s.accent}`}>
							{s.overline}
						</p>
						<h2 className="text-deep-ocean mb-6 leading-tight relative inline-block">
							{s.title}
						</h2>
						<Squiggle className={`mx-auto mb-8 w-40 h-5 ${s.accent}`} />
						<p className="text-gray text-base md:text-lg leading-relaxed mb-10">
							{s.body}
						</p>
						<Link
							href={s.href}
							className="group inline-flex items-center gap-3 text-deep-ocean font-semibold border-b-2 border-deep-ocean pb-1 hover:text-crab hover:border-crab transition-colors"
						>
							See details
							<Arrow className="w-8 h-6 -mb-1 group-hover:translate-x-1 transition-transform" />
						</Link>
					</Reveal>
				</section>
			))}

			{/* TESTIMONIALS */}
			<section className="relative w-full bg-rose-50 py-24 md:py-32 overflow-hidden">
				<Parallax speed={0.3} className="absolute left-4 md:left-12 top-12 text-crab/40 pointer-events-none">
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
