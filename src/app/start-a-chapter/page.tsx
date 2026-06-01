import type { Metadata } from 'next';
import { Parallax } from '@/components/Parallax';
import { Reveal } from '@/components/Reveal';
import {
	Flower,
	Pencil,
	Plus,
	Scribble,
	Sparkle,
	Squiggle,
	Star,
	Underline,
} from '@/components/Doodles';
import { startAChapter } from '@/content/copy';

export const metadata: Metadata = {
	title: 'Start a Chapter | Empower Initiative',
	description:
		'A step-by-step guide to bringing an Empower Initiative tutoring chapter to your school.',
};

export default function StartAChapterPage() {
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
						Start a Chapter
					</p>
					<h1 className="text-deep-ocean leading-[1.05] tracking-tight">
						Bring Empower to{' '}
						<span className="relative inline-block">
							<span className="relative z-10">your school</span>
							<Underline
								className="absolute left-0 right-0 -bottom-3 w-full h-3 text-crab doodle-draw"
								style={{ ['--dash' as string]: '300' }}
							/>
						</span>
						.
					</h1>
					<p className="mt-6 md:mt-8 text-gray text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
						Don&apos;t see a chapter in your area? Start one. Here&apos;s the checklist we follow — and the interest form that kicks it all off.
					</p>
					<a
						href={startAChapter.interestForm}
						target="_blank"
						rel="noopener noreferrer"
						className="button-primary inline-block px-8 py-4 rounded-md font-semibold mt-10"
					>
						Fill out the interest form
					</a>
				</Reveal>
			</section>

			{/* CHECKLIST */}
			<section className="relative px-6 py-20 md:py-28 border-y border-gray-100 overflow-hidden">
				<Parallax speed={0.25} className="absolute -left-6 top-16 text-vista-blue/45 pointer-events-none">
					<Pencil className="w-32 md:w-48 h-auto -rotate-12" />
				</Parallax>
				<Parallax speed={-0.2} className="absolute right-4 md:right-24 top-24 text-butterscotch pointer-events-none">
					<Plus className="w-10 h-10 animate-wiggle" />
				</Parallax>
				<Parallax speed={0.18} className="absolute -right-6 top-1/2 text-vista-blue/55 pointer-events-none">
					<Scribble className="w-28 h-auto animate-spin-slow" />
				</Parallax>
				<Parallax speed={-0.15} className="absolute -left-4 bottom-20 text-crab/50 pointer-events-none">
					<Star className="w-12 h-12 animate-float" />
				</Parallax>
				<Parallax speed={0.22} className="absolute right-6 md:right-20 bottom-16 text-butterscotch/70 pointer-events-none">
					<Sparkle className="w-9 h-9 animate-wiggle" />
				</Parallax>

				<Reveal className="max-w-3xl mx-auto text-center mb-16 md:mb-20 relative">
					<p className="text-xs md:text-sm tracking-[0.25em] uppercase text-crab font-semibold mb-5">
						The guide
					</p>
					<h2 className="text-deep-ocean mb-6 leading-tight">Your step-by-step checklist</h2>
					<Squiggle className="mx-auto mb-8 w-40 h-5 text-crab" />
					<p className="text-gray text-base md:text-lg leading-relaxed">
						Work through these in order. They&apos;re drawn from how our founding chapter got off the ground.
					</p>
				</Reveal>

				<ol className="max-w-3xl mx-auto list-none p-0 m-0 space-y-5 relative">
					{startAChapter.steps.map((step, i) => (
						<Reveal key={step} delay={(i % 3) * 80} from="up">
							<li className="flex items-start gap-5 bg-white rounded-2xl ring-1 ring-gray-200 p-6 md:p-7 transition-all duration-300 hover:ring-crab/40 hover:shadow-[0_18px_40px_-20px_rgba(32,78,207,0.35)]">
								<span
									aria-hidden="true"
									className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-sand-dollar text-deep-ocean font-poppins font-bold"
								>
									{String(i + 1).padStart(2, '0')}
								</span>
								<p className="text-gray text-sm md:text-base leading-relaxed pt-1.5">{step}</p>
							</li>
						</Reveal>
					))}
				</ol>
			</section>

			{/* CTA */}
			<section className="relative w-full bg-rose-50 px-6 py-24 md:py-32 overflow-hidden">
				<Parallax speed={0.3} className="absolute left-4 md:left-16 top-12 text-crab/40 pointer-events-none">
					<Sparkle className="w-12 h-12 animate-wiggle" />
				</Parallax>
				<Parallax speed={-0.25} className="absolute right-6 md:right-20 top-16 text-vista-blue/60 pointer-events-none">
					<Star className="w-14 h-14 animate-float" />
				</Parallax>

				<Reveal className="max-w-3xl mx-auto text-center relative">
					<p className="text-xs md:text-sm tracking-[0.25em] uppercase text-crab font-semibold mb-5">
						Ready to begin?
					</p>
					<h2 className="text-deep-ocean mb-6 leading-tight">Start with the interest form</h2>
					<Squiggle className="mx-auto mb-8 w-40 h-5 text-crab" />
					<p className="text-gray text-base md:text-lg leading-relaxed mb-10">
						Tell us about you and your school. We&apos;ll reach out and help you through every step above.
					</p>
					<a
						href={startAChapter.interestForm}
						target="_blank"
						rel="noopener noreferrer"
						className="button-primary inline-block px-8 py-4 rounded-md font-semibold"
					>
						Open the interest form
					</a>
				</Reveal>
			</section>
		</div>
	);
}
