import type { Metadata } from 'next';
import Link from 'next/link';
import { Parallax } from '@/components/Parallax';
import { Reveal } from '@/components/Reveal';
import {
	Arrow,
	Flower,
	Heart,
	Pencil,
	Plus,
	Scribble,
	Sparkle,
	Star,
	Underline,
} from '@/components/Doodles';
import { tutors } from '@/content/copy';

export const metadata: Metadata = {
	title: 'Tutoring Guidelines | Empower Initiative',
	description: tutors.whatTheyDo,
};

const Bullet = () => (
	<span aria-hidden="true" className="mt-2 mr-3 h-1.5 w-1.5 shrink-0 rounded-full bg-crab" />
);

export default function TutoringGuidelinesPage() {
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

				<Reveal className="max-w-4xl mx-auto text-center relative">
					<p className="text-xs md:text-sm tracking-[0.3em] uppercase text-crab font-semibold mb-5">
						Resources · Tutoring Guidelines
					</p>
					<h1 className="text-deep-ocean leading-[1.05] tracking-tight">
						What our{' '}
						<span className="relative inline-block">
							<span className="relative z-10">tutors</span>
							<Underline
								className="absolute left-0 right-0 -bottom-3 w-full h-3 text-crab doodle-draw"
								style={{ ['--dash' as string]: '300' }}
							/>
						</span>{' '}
						do.
					</h1>
					<p className="mt-6 md:mt-8 text-gray text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
						{tutors.whatTheyDo}
					</p>
				</Reveal>
			</section>

			{/* BENEFITS + RESPONSIBILITIES */}
			<section className="relative px-6 py-20 md:py-28 border-y border-gray-100 overflow-hidden">
				<Parallax speed={0.25} className="absolute -left-6 top-16 text-crab/35 pointer-events-none">
					<Pencil className="w-32 md:w-48 h-auto -rotate-12" />
				</Parallax>
				<Parallax speed={-0.2} className="absolute right-4 md:right-24 top-24 text-butterscotch pointer-events-none">
					<Plus className="w-10 h-10 animate-wiggle" />
				</Parallax>
				<Parallax speed={0.15} className="absolute -right-6 bottom-20 text-vista-blue/60 pointer-events-none">
					<Scribble className="w-32 h-auto animate-spin-slow" />
				</Parallax>

				<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 relative">
					<Reveal from="up">
						<article className="h-full bg-white rounded-2xl ring-1 ring-gray-200 p-8 md:p-10">
							<p className="text-[0.7rem] md:text-xs tracking-[0.25em] uppercase text-crab font-semibold mb-4">
								Benefits
							</p>
							<h2 className="text-deep-ocean mb-6 leading-tight">What tutors get out of it</h2>
							<ul className="list-none p-0 m-0 space-y-2.5">
								{tutors.benefits.map((item) => (
									<li key={item} className="flex items-start text-gray text-sm md:text-base leading-relaxed">
										<Bullet />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</article>
					</Reveal>

					<Reveal from="up" delay={100}>
						<article className="h-full bg-white rounded-2xl ring-1 ring-gray-200 p-8 md:p-10">
							<p className="text-[0.7rem] md:text-xs tracking-[0.25em] uppercase text-vista-blue font-semibold mb-4">
								Responsibilities
							</p>
							<h2 className="text-deep-ocean mb-6 leading-tight">What we ask of tutors</h2>
							<ul className="list-none p-0 m-0 space-y-2.5">
								{tutors.responsibilities.map((item) => (
									<li key={item} className="flex items-start text-gray text-sm md:text-base leading-relaxed">
										<Bullet />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</article>
					</Reveal>
				</div>
			</section>

			{/* QUIET ONWARD LINK (reference page, not a funnel) */}
			<section className="relative w-full px-6 py-16 md:py-20 overflow-hidden">
				<Parallax speed={0.25} className="absolute left-6 md:left-24 top-10 text-vista-blue/50 pointer-events-none">
					<Flower className="w-14 h-14 animate-float-slow" />
				</Parallax>
				<Parallax speed={-0.2} className="absolute right-8 md:right-28 top-8 text-butterscotch/80 pointer-events-none">
					<Sparkle className="w-11 h-11 animate-wiggle" />
				</Parallax>

				<Reveal className="max-w-3xl mx-auto text-center relative">
					<Heart className="mx-auto mb-5 w-8 h-8 text-crab/70" aria-hidden="true" />
					<p className="text-gray text-base md:text-lg leading-relaxed">
						Ready to tutor with a chapter near you?{' '}
						<Link
							href="/chapters"
							className="group inline-flex items-center gap-1.5 text-deep-ocean font-semibold border-b-2 border-deep-ocean/40 hover:border-crab hover:text-crab pb-0.5 transition-colors"
						>
							Find your chapter
							<Arrow className="w-6 h-4 -mb-0.5 group-hover:translate-x-1 transition-transform" />
						</Link>
					</p>
				</Reveal>
			</section>
		</div>
	);
}
