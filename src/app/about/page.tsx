import type { Metadata } from 'next';
import Link from 'next/link';
import { Parallax } from '@/components/Parallax';
import { Reveal } from '@/components/Reveal';
import {
	Arrow,
	Flower,
	Pencil,
	Plus,
	Scribble,
	Sparkle,
	Squiggle,
	Star,
	Underline,
} from '@/components/Doodles';
import { about } from '@/content/copy';

export const metadata: Metadata = {
	title: 'Our Story | Empower Initiative',
	description: about.aboutEmpower,
};

export default function AboutPage() {
	return (
		<div className="flex flex-col w-full bg-white overflow-x-clip">
			{/* HERO */}
			<section className="relative pt-40 md:pt-48 pb-20 md:pb-28 px-6 overflow-hidden">
				<Parallax speed={-0.15} className="absolute top-32 left-6 md:left-20 text-crab/80 pointer-events-none">
					<Sparkle className="w-10 h-10 animate-wiggle" style={{ ['--rot' as string]: '0deg' }} />
				</Parallax>
				<Parallax speed={-0.25} className="absolute top-40 right-8 md:right-28 text-butterscotch pointer-events-none">
					<Star className="w-14 h-14 animate-float" style={{ ['--rot' as string]: '10deg' }} />
				</Parallax>
				<Parallax speed={0.2} className="absolute bottom-6 left-10 md:left-32 text-vista-blue pointer-events-none">
					<Flower className="w-16 h-16 animate-float-slow" />
				</Parallax>
				<Parallax speed={0.15} className="absolute bottom-10 right-10 md:right-32 text-crab/80 pointer-events-none">
					<Scribble className="w-20 h-20 animate-spin-slow" />
				</Parallax>

				<Reveal className="max-w-4xl mx-auto text-center relative">
					<p className="text-xs md:text-sm tracking-[0.3em] uppercase text-crab font-semibold mb-5">
						Our Story
					</p>
					<h1 className="text-deep-ocean leading-[1.05] tracking-tight">
						Learning, made{' '}
						<span className="relative inline-block">
							<span className="relative z-10">accessible</span>
							<Underline
								className="absolute left-0 right-0 -bottom-3 w-full h-3 text-crab doodle-draw"
								style={{ ['--dash' as string]: '300' }}
							/>
						</span>
						.
					</h1>
					<p className="mt-6 md:mt-8 text-gray text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
						{about.aboutEmpower}
					</p>
				</Reveal>
			</section>

			{/* WHAT WE DO */}
			<section className="relative px-6 py-20 md:py-28 border-y border-gray-100 overflow-hidden">
				<Parallax speed={0.25} className="absolute -left-6 top-16 text-butterscotch/45 pointer-events-none">
					<Pencil className="w-32 md:w-48 h-auto -rotate-12" />
				</Parallax>
				<Parallax speed={-0.2} className="absolute right-4 md:right-24 top-24 text-butterscotch pointer-events-none">
					<Plus className="w-10 h-10 animate-wiggle" />
				</Parallax>

				<Reveal className="max-w-3xl mx-auto text-center mb-16 md:mb-20 relative">
					<p className="text-xs md:text-sm tracking-[0.25em] uppercase text-crab font-semibold mb-5">
						What we do
					</p>
					<h2 className="text-deep-ocean mb-6 leading-tight">Tutoring that meets students where they are</h2>
					<Squiggle className="mx-auto mb-8 w-40 h-5 text-crab" />
					<p className="text-gray text-base md:text-lg leading-relaxed">{about.whatWeDo}</p>
				</Reveal>

				<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 relative">
					{about.services.map((service, i) => (
						<Reveal key={service.title} delay={(i % 3) * 100} from="up">
							<article className="h-full bg-white rounded-2xl ring-1 ring-gray-200 p-8 md:p-10 transition-all duration-300 hover:ring-crab/40 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(32,78,207,0.35)]">
								<h3 className="text-deep-ocean mb-4 leading-tight">{service.title}</h3>
								<p className="text-gray text-sm md:text-base leading-relaxed">{service.description}</p>
							</article>
						</Reveal>
					))}
				</div>
			</section>

			{/* MISSION */}
			<section className="relative w-full bg-rose-50 px-6 py-24 md:py-32 overflow-hidden">
				<Parallax speed={0.3} className="absolute left-4 md:left-16 top-12 text-crab/40 pointer-events-none">
					<Sparkle className="w-12 h-12 animate-wiggle" />
				</Parallax>
				<Parallax speed={-0.25} className="absolute right-6 md:right-20 top-16 text-vista-blue/60 pointer-events-none">
					<Star className="w-14 h-14 animate-float" />
				</Parallax>
				<Parallax speed={0.2} className="absolute left-1/4 bottom-8 text-vista-blue/55 pointer-events-none">
					<Flower className="w-16 h-16 animate-spin-slow" />
				</Parallax>

				<Reveal className="max-w-3xl mx-auto text-center relative">
					<p className="text-xs md:text-sm tracking-[0.25em] uppercase text-crab font-semibold mb-5">
						Our mission
					</p>
					<h2 className="text-deep-ocean mb-6 leading-tight">Why we do it</h2>
					<Squiggle className="mx-auto mb-8 w-40 h-5 text-crab" />
					<p className="text-gray text-base md:text-lg leading-relaxed mb-10">{about.mission}</p>
					<Link
						href="/our-team"
						className="group inline-flex items-center gap-3 text-deep-ocean font-semibold border-b-2 border-deep-ocean pb-1 hover:text-crab hover:border-crab transition-colors"
					>
						Meet our team
						<Arrow className="w-8 h-6 -mb-1 group-hover:translate-x-1 transition-transform" />
					</Link>
				</Reveal>
			</section>
		</div>
	);
}
