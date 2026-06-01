import type { Metadata } from 'next';
import Link from 'next/link';
import { Parallax } from '@/components/Parallax';
import { Reveal } from '@/components/Reveal';
import { OfficerRoleCard } from '@/components/OfficerRoleCard';
import {
	Arrow,
	Flower,
	Heart,
	Pencil,
	Plus,
	Sparkle,
	Star,
	Underline,
} from '@/components/Doodles';
import { officers } from '@/content/copy';

export const metadata: Metadata = {
	title: 'Officer Roles | Empower Initiative',
	description:
		'The five officer roles that lead an Empower Initiative chapter, with expectations and responsibilities for each.',
};

export default function OfficerRolesPage() {
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
						Resources · Officer Roles
					</p>
					<h1 className="text-deep-ocean leading-[1.05] tracking-tight">
						Who runs a{' '}
						<span className="relative inline-block">
							<span className="relative z-10">chapter</span>
							<Underline
								className="absolute left-0 right-0 -bottom-3 w-full h-3 text-crab doodle-draw"
								style={{ ['--dash' as string]: '300' }}
							/>
						</span>
						.
					</h1>
					<p className="mt-6 md:mt-8 text-gray text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
						Each chapter is led by a team of student officers. Here&apos;s what each role expects and is responsible for.
					</p>
				</Reveal>
			</section>

			{/* ROLES */}
			<section className="relative px-6 py-20 md:py-28 border-y border-gray-100 overflow-hidden">
				<Parallax speed={0.25} className="absolute -left-6 top-16 text-vista-blue/45 pointer-events-none">
					<Pencil className="w-32 md:w-48 h-auto -rotate-12" />
				</Parallax>
				<Parallax speed={-0.2} className="absolute right-4 md:right-24 top-24 text-butterscotch pointer-events-none">
					<Plus className="w-10 h-10 animate-wiggle" />
				</Parallax>
				<Parallax speed={0.2} className="absolute -left-4 bottom-24 text-vista-blue/60 pointer-events-none">
					<Star className="w-12 h-12 animate-float" />
				</Parallax>
				<Parallax speed={-0.15} className="absolute right-2 md:right-16 bottom-16 text-crab/50 pointer-events-none">
					<Sparkle className="w-10 h-10 animate-wiggle" />
				</Parallax>
				<Parallax speed={0.15} className="absolute -left-4 top-1/2 text-crab/40 pointer-events-none">
					<Flower className="w-16 h-16 animate-float-slow" />
				</Parallax>
				<Parallax speed={-0.18} className="absolute right-2 md:right-12 top-1/3 text-vista-blue/55 pointer-events-none">
					<Heart className="w-10 h-10 animate-float-slow" />
				</Parallax>
				<Parallax speed={0.22} className="absolute -left-3 top-2/3 text-butterscotch/70 pointer-events-none">
					<Plus className="w-9 h-9 animate-wiggle" />
				</Parallax>
				<Parallax speed={-0.12} className="absolute right-4 md:right-20 top-2/3 text-crab/45 pointer-events-none">
					<Star className="w-11 h-11 animate-float" />
				</Parallax>

				<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 relative">
					{officers.map((role, i) => (
						<Reveal
							key={role.role}
							delay={(i % 2) * 100}
							from="up"
							className={i === 0 ? 'md:col-span-2' : ''}
						>
							<OfficerRoleCard role={role} index={i} featured={i === 0} />
						</Reveal>
					))}
				</div>
			</section>

			{/* QUIET ONWARD LINK (reference page, not a funnel) */}
			<section className="relative w-full px-6 py-16 md:py-20 overflow-hidden">
				<Parallax speed={0.25} className="absolute left-6 md:left-24 top-10 text-vista-blue/50 pointer-events-none">
					<Flower className="w-14 h-14 animate-float-slow" />
				</Parallax>
				<Parallax speed={-0.2} className="absolute right-8 md:right-28 top-8 text-butterscotch/80 pointer-events-none">
					<Star className="w-12 h-12 animate-float" />
				</Parallax>

				<Reveal className="max-w-3xl mx-auto text-center relative">
					<Heart className="mx-auto mb-5 w-8 h-8 text-crab/70" aria-hidden="true" />
					<p className="text-gray text-base md:text-lg leading-relaxed">
						Want to take on one of these roles?{' '}
						<Link
							href="/start-a-chapter"
							className="group inline-flex items-center gap-1.5 text-deep-ocean font-semibold border-b-2 border-deep-ocean/40 hover:border-crab hover:text-crab pb-0.5 transition-colors"
						>
							Start a chapter
							<Arrow className="w-6 h-4 -mb-0.5 group-hover:translate-x-1 transition-transform" />
						</Link>
					</p>
				</Reveal>
			</section>
		</div>
	);
}
