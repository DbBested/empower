import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { TeamMember } from '@/components/TeamMember';
import { Parallax } from '@/components/Parallax';
import { Reveal } from '@/components/Reveal';
import { ScrollCue } from '@/components/ScrollCue';
import { SectionSnap } from '@/components/SectionSnap';
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
import { team } from '@/content/copy';

const { founder, provisionalOfficers } = team;

export const metadata: Metadata = {
	title: 'Our Team | Empower Initiative',
	description:
		"The student officers, founder, and alumni who've built Empower Initiative from the ground up.",
};

export default function OurTeamPage() {
	return (
		<div className="flex flex-col w-full bg-white overflow-x-clip">
			<SectionSnap targetId="founder" />
			{/* HERO */}
			<section className="relative min-h-[100svh] flex flex-col items-center justify-center px-6 pt-28 pb-24 overflow-hidden">
				<Parallax speed={-0.15} className="absolute top-32 left-6 md:left-20 text-crab/80 pointer-events-none">
					<Sparkle className="w-10 h-10 animate-wiggle" style={{ ['--rot' as string]: '0deg' }} />
				</Parallax>
				<Parallax speed={-0.25} className="absolute top-40 right-8 md:right-28 text-butterscotch pointer-events-none">
					<Star className="w-14 h-14 animate-float" style={{ ['--rot' as string]: '12deg' }} />
				</Parallax>
				<Parallax speed={0.2} className="absolute bottom-24 left-10 md:left-32 text-vista-blue pointer-events-none">
					<Flower className="w-16 h-16 animate-float-slow" />
				</Parallax>
				<Parallax speed={0.15} className="absolute bottom-28 right-10 md:right-32 text-crab/80 pointer-events-none">
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
						Our founder and the provisional officers who lead the program today. For now, the founding chapter&apos;s members serve both their chapter and the wider initiative.
					</p>
				</Reveal>

				<ScrollCue
					targetId="founder"
					label="Scroll"
					clearance={96}
					className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
				/>
			</section>

			{/* FOUNDER */}
			<section className="relative px-6 pt-12 md:pt-16 pb-20 md:pb-28 overflow-hidden">
				<Parallax speed={0.2} className="absolute -left-10 top-10 text-crab/35 pointer-events-none">
					<Scribble className="w-28 md:w-40 h-auto animate-spin-slow" />
				</Parallax>
				<Parallax speed={-0.18} className="absolute right-2 md:right-16 bottom-10 text-butterscotch/80 pointer-events-none">
					<Star className="w-12 h-12 animate-float" style={{ ['--rot' as string]: '-10deg' }} />
				</Parallax>

				<Reveal className="max-w-5xl mx-auto relative">
					<div id="founder" className="relative grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-14 items-center bg-white rounded-[32px] ring-1 ring-gray-200 shadow-[0_30px_70px_-30px_rgba(32,78,207,0.4)] p-8 md:p-12 overflow-hidden">
						<div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-sand-dollar/40 blur-2xl pointer-events-none" aria-hidden="true" />

						{founder.imageUrl && (
							<div className="relative mx-auto md:mx-0">
								<div className="absolute -inset-3 rounded-[28px] bg-sand-dollar/60 -rotate-2 -z-10" aria-hidden="true" />
								<div className="relative w-60 h-72 md:w-full md:h-[26rem] rounded-[24px] overflow-hidden ring-4 ring-white shadow-md">
									<Image
										src={founder.imageUrl}
										alt={founder.name}
										fill
										sizes="(min-width: 768px) 420px, 240px"
										className="object-cover"
									/>
								</div>
							</div>
						)}

						<div className="relative text-center md:text-left">
							<p className="text-xs md:text-sm tracking-[0.25em] uppercase text-butterscotch font-semibold mb-4">
								The Founder
							</p>
							<h2 className="text-deep-ocean leading-tight mb-6">{founder.name}</h2>
							<Squiggle className="mb-7 w-40 h-5 text-butterscotch mx-auto md:mx-0" />
							<p className="text-gray text-sm md:text-base leading-relaxed mb-8">
								{founder.description}
							</p>
							{founder.email && (
								<a
									href={`mailto:${founder.email}`}
									className="group inline-flex items-center gap-2 text-deep-ocean font-semibold border-b-2 border-deep-ocean/40 hover:border-crab hover:text-crab pb-0.5 transition-colors text-sm"
								>
									Get in touch
									<Arrow className="w-7 h-4 group-hover:translate-x-1 transition-transform" />
								</a>
							)}
						</div>
					</div>
				</Reveal>
			</section>

			{/* PROVISIONAL OFFICERS */}
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

				<Reveal className="max-w-3xl mx-auto text-center mb-16 md:mb-20 relative">
					<h2 className="text-deep-ocean mb-6 leading-tight">Provisional leadership</h2>
					<Squiggle className="mx-auto mb-8 w-40 h-5 text-crab" />
					<p className="text-gray text-base md:text-lg leading-relaxed">
						Passionate, hardworking student officers who pair students with tutors, organize events, facilitate learning, and keep the community connected.
					</p>
				</Reveal>

				<div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 md:gap-10 relative">
					{provisionalOfficers.map((member, i) => (
						<Reveal key={member.name} delay={(i % 2) * 100} from="up" className="w-full lg:w-[calc(50%-1.25rem)]">
							<TeamMember
								name={member.name}
								role={member.role}
								description={member.description ?? ''}
								email={member.email ?? ''}
								imageUrl={member.imageUrl}
							/>
						</Reveal>
					))}
				</div>
			</section>

			{/* CHAPTER OFFICERS POINTER */}
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
						By chapter
					</p>
					<h2 className="text-deep-ocean mb-6 leading-tight">Looking for your local team?</h2>
					<Squiggle className="mx-auto mb-8 w-40 h-5 text-crab" />
					<p className="text-gray text-base md:text-lg leading-relaxed mb-10">
						Each chapter has its own officers and alumni. Find a chapter near you to meet the people leading it.
					</p>
					<Link
						href="/chapters"
						className="group inline-flex items-center gap-3 text-deep-ocean font-semibold border-b-2 border-deep-ocean pb-1 hover:text-crab hover:border-crab transition-colors"
					>
						Look for chapter-specific officers
						<Arrow className="w-8 h-6 -mb-1 group-hover:translate-x-1 transition-transform" />
					</Link>
				</Reveal>
			</section>
		</div>
	);
}
