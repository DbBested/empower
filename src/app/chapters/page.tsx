import type { Metadata } from 'next';
import Link from 'next/link';
import { Parallax } from '@/components/Parallax';
import { Reveal } from '@/components/Reveal';
import { ChapterLocator } from '@/components/chapters/ChapterLocator';
import {
	Arrow,
	Flower,
	Heart,
	Pencil,
	Plus,
	Scribble,
	Sparkle,
	Squiggle,
	Star,
	Underline,
} from '@/components/Doodles';
import { chapters } from '@/content';

export const metadata: Metadata = {
	title: 'Find Your Chapter | Empower Initiative',
	description:
		'Find an Empower Initiative tutoring chapter near you — families can enroll a student, and volunteers can start tutoring.',
};

export default function ChaptersPage() {
	return (
		<div className="flex flex-col w-full bg-white overflow-x-clip">
			{/* HERO — warm "join us" invitation (friendliness lives here, not the nav label) */}
			<section className="relative pt-40 md:pt-48 pb-16 md:pb-20 px-6 overflow-hidden">
				<Parallax speed={-0.15} className="absolute top-32 left-6 md:left-20 text-crab/80 pointer-events-none">
					<Sparkle className="w-10 h-10 animate-wiggle" style={{ ['--rot' as string]: '0deg' }} />
				</Parallax>
				<Parallax speed={-0.25} className="absolute top-40 right-8 md:right-28 text-butterscotch pointer-events-none">
					<Star className="w-14 h-14 animate-float" style={{ ['--rot' as string]: '10deg' }} />
				</Parallax>
				<Parallax speed={0.2} className="absolute bottom-4 left-10 md:left-32 text-vista-blue pointer-events-none">
					<Flower className="w-16 h-16 animate-float-slow" />
				</Parallax>
				<Parallax speed={0.15} className="absolute bottom-8 right-10 md:right-32 text-crab/80 pointer-events-none">
					<Scribble className="w-20 h-20 animate-spin-slow" />
				</Parallax>

				<Reveal className="max-w-4xl mx-auto text-center relative">
					<p className="text-xs md:text-sm tracking-[0.3em] uppercase text-crab font-semibold mb-5">
						Find Your Chapter
					</p>
					<h1 className="text-deep-ocean leading-[1.05] tracking-tight">
						Join us where you{' '}
						<span className="relative inline-block">
							<span className="relative z-10">live</span>
							<Underline
								className="absolute left-0 right-0 -bottom-3 w-full h-3 text-crab doodle-draw"
								style={{ ['--dash' as string]: '300' }}
							/>
						</span>
						.
					</h1>
					<p className="mt-6 md:mt-8 text-gray text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
						<span className="font-semibold text-deep-ocean">Families</span> — find your chapter to enroll your
						student.{' '}
						<span className="font-semibold text-deep-ocean">Volunteers</span> — find your chapter to start
						tutoring. Pick a chapter below to see its team and sign-up links.
					</p>
				</Reveal>
			</section>

			{/* LOCATOR */}
			{/* overflow-x-clip (not overflow-hidden) so the cards' hover-lift and
			    focus ring aren't clipped at the top edge, while still preventing
			    any horizontal scroll. */}
			<section className="relative px-6 pb-20 md:pb-28 overflow-x-clip">
				<div className="max-w-6xl mx-auto relative pt-1.5">
					<ChapterLocator chapters={chapters} />
				</div>
			</section>

			{/* PERSISTENT START-A-CHAPTER CTA */}
			<section className="relative w-full bg-rose-50 px-6 py-20 md:py-28 overflow-hidden">
				<Parallax speed={0.3} className="absolute left-4 md:left-16 top-12 text-crab/40 pointer-events-none">
					<Pencil className="w-28 md:w-40 h-auto -rotate-12" />
				</Parallax>
				<Parallax speed={-0.2} className="absolute right-6 md:right-20 top-16 text-vista-blue/70 pointer-events-none">
					<Plus className="w-10 h-10 animate-wiggle" />
				</Parallax>

				<Reveal className="max-w-3xl mx-auto text-center relative">
					<Heart className="mx-auto mb-5 w-8 h-8 text-crab/70" aria-hidden="true" />
					<h2 className="text-deep-ocean mb-6 leading-tight">Don&apos;t see your area?</h2>
					<Squiggle className="mx-auto mb-8 w-40 h-5 text-crab" />
					<p className="text-gray text-base md:text-lg leading-relaxed mb-10">
						There&apos;s no chapter near you yet — so start one. We&apos;ll walk you through every step.
					</p>
					<Link
						href="/start-a-chapter"
						className="button-primary inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-crab focus-visible:ring-offset-2"
					>
						Start a chapter
						<Arrow className="w-6 h-4" />
					</Link>
				</Reveal>
			</section>
		</div>
	);
}
