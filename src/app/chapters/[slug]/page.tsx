import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Parallax } from '@/components/Parallax';
import { Reveal } from '@/components/Reveal';
import { TeamMember } from '@/components/TeamMember';
import { ChapterLinks } from '@/components/chapters/ChapterLinks';
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
import { chapters, getChapter } from '@/content';
import { parents } from '@/content/copy';

// One static page per chapter file (index.ts → chapters[]).
export function generateStaticParams() {
	return chapters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const chapter = getChapter(slug);
	if (!chapter) return { title: 'Chapter not found | Empower Initiative' };
	return {
		title: `${chapter.name} | Empower Initiative`,
		description: `Officers, alumni, and sign-up links for the Empower Initiative ${chapter.name} in ${chapter.location}.`,
	};
}

export default async function ChapterPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const chapter = getChapter(slug);
	if (!chapter) notFound();

	return (
		<div className="flex flex-col w-full bg-white overflow-x-clip">
			{/* HERO */}
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

				<Reveal className="max-w-4xl mx-auto text-center relative">
					<Link
						href="/chapters"
						className="group inline-flex items-center gap-1.5 text-gray hover:text-crab text-sm font-semibold mb-6 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crab focus-visible:ring-offset-2 rounded-sm"
					>
						<Arrow className="w-6 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
						All chapters
					</Link>
					<p className="text-xs md:text-sm tracking-[0.3em] uppercase text-crab font-semibold mb-5">
						{chapter.location}
					</p>
					<h1 className="text-deep-ocean leading-[1.05] tracking-tight">
						<span className="relative inline-block">
							<span className="relative z-10">{chapter.name}</span>
							<Underline
								className="absolute left-0 right-0 -bottom-3 w-full h-3 text-crab doodle-draw"
								style={{ ['--dash' as string]: '300' }}
							/>
						</span>
					</h1>
				</Reveal>
			</section>

			{/* OFFICERS */}
			{chapter.officers.length > 0 && (
				<section className="relative px-6 py-16 md:py-24 border-y border-gray-100 overflow-hidden">
					<Parallax speed={0.25} className="absolute -left-6 top-16 text-crab/35 pointer-events-none">
						<Pencil className="w-32 md:w-48 h-auto -rotate-12" />
					</Parallax>
					<Parallax speed={-0.2} className="absolute right-4 md:right-24 top-24 text-butterscotch pointer-events-none">
						<Plus className="w-10 h-10 animate-wiggle" />
					</Parallax>
					<Parallax speed={0.2} className="absolute right-2 md:right-20 bottom-12 text-crab/60 pointer-events-none">
						<Sparkle className="w-10 h-10 animate-wiggle" />
					</Parallax>
					<Parallax speed={-0.15} className="absolute -left-4 bottom-16 text-vista-blue/60 pointer-events-none">
						<Star className="w-12 h-12 animate-float" />
					</Parallax>

					<Reveal className="max-w-3xl mx-auto text-center mb-14 md:mb-16 relative">
						<p className="text-xs md:text-sm tracking-[0.25em] uppercase text-crab font-semibold mb-5">
							The team
						</p>
						<h2 className="text-deep-ocean mb-6 leading-tight">Officers</h2>
						<Squiggle className="mx-auto w-40 h-5 text-crab" />
					</Reveal>

					<div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 md:gap-10 relative">
						{chapter.officers.map((o, i) => (
							<Reveal key={o.name} delay={(i % 2) * 100} from="up" className="w-full lg:w-[calc(50%-1.25rem)]">
								<TeamMember
									name={o.name}
									role={o.role}
									description={o.description ?? ''}
									email={o.email ?? ''}
									imageUrl={o.imageUrl}
								/>
							</Reveal>
						))}
					</div>
				</section>
			)}

			{/* ALUMNI */}
			{chapter.alums.length > 0 && (
				<section className="relative px-6 py-16 md:py-24 overflow-hidden">
					<Parallax speed={0.25} className="absolute -left-6 top-12 text-crab/35 pointer-events-none">
						<Pencil className="w-28 md:w-40 h-auto rotate-6" />
					</Parallax>
					<Parallax speed={-0.2} className="absolute right-6 md:right-24 top-16 text-butterscotch pointer-events-none">
						<Star className="w-12 h-12 animate-float" />
					</Parallax>
					<Parallax speed={0.15} className="absolute right-2 md:right-20 bottom-12 text-crab/50 pointer-events-none">
						<Flower className="w-14 h-14 animate-float-slow" />
					</Parallax>

					<Reveal className="max-w-3xl mx-auto text-center mb-14 md:mb-16 relative">
						<p className="text-xs md:text-sm tracking-[0.25em] uppercase text-vista-blue font-semibold mb-5">
							Where it started
						</p>
						<h2 className="text-deep-ocean mb-6 leading-tight">Alumni</h2>
						<Squiggle className="mx-auto w-40 h-5 text-vista-blue" />
					</Reveal>

					<div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 relative">
						{chapter.alums.map((a, i) => (
							<Reveal key={a.name} delay={(i % 3) * 100} from="up">
								<TeamMember
									name={a.name}
									role={a.pastRole}
									description={a.description ?? ''}
									email={a.email ?? ''}
									imageUrl={a.imageUrl}
								/>
							</Reveal>
						))}
					</div>
				</section>
			)}

			{/* SIGN-UP LINKS */}
			<section className="relative px-6 py-16 md:py-24 border-y border-gray-100 overflow-hidden">
				<Parallax speed={0.25} className="absolute -left-6 top-12 text-crab/35 pointer-events-none">
					<Pencil className="w-28 md:w-40 h-auto -rotate-12" />
				</Parallax>
				<Parallax speed={-0.2} className="absolute right-8 md:right-28 top-16 text-butterscotch pointer-events-none">
					<Plus className="w-10 h-10 animate-wiggle" />
				</Parallax>
				<Parallax speed={0.15} className="absolute -right-6 bottom-16 text-vista-blue/60 pointer-events-none">
					<Scribble className="w-32 h-auto animate-spin-slow" />
				</Parallax>

				<Reveal className="max-w-3xl mx-auto text-center mb-14 md:mb-16 relative">
					<p className="text-xs md:text-sm tracking-[0.25em] uppercase text-crab font-semibold mb-5">
						Get involved
					</p>
					<h2 className="text-deep-ocean mb-6 leading-tight">Sign up</h2>
					<Squiggle className="mx-auto w-40 h-5 text-crab" />
				</Reveal>

				<div className="max-w-4xl mx-auto bg-white rounded-2xl ring-1 ring-gray-200 p-8 md:p-10 relative">
					<ChapterLinks chapter={chapter} />
				</div>
			</section>

			{/* FAMILY GUIDANCE */}
			<section className="relative px-6 py-16 md:py-24 overflow-hidden">
				<Parallax speed={0.3} className="absolute left-4 md:left-16 top-12 text-crab/40 pointer-events-none">
					<Heart className="w-10 h-10 animate-float-slow" />
				</Parallax>
				<Parallax speed={-0.25} className="absolute right-6 md:right-24 top-20 text-vista-blue pointer-events-none">
					<Flower className="w-14 h-14 animate-spin-slow" />
				</Parallax>
				<Parallax speed={0.15} className="absolute left-1/4 bottom-8 text-butterscotch/70 pointer-events-none">
					<Sparkle className="w-9 h-9 animate-wiggle" />
				</Parallax>

				<Reveal className="max-w-3xl mx-auto relative">
					<div className="text-center mb-12">
						<p className="text-xs md:text-sm tracking-[0.25em] uppercase text-crab font-semibold mb-5">
							For families
						</p>
						<h2 className="text-deep-ocean mb-6 leading-tight">Good to know</h2>
						<Squiggle className="mx-auto w-40 h-5 text-crab" />
					</div>
					<ul className="list-none p-0 m-0 space-y-3">
						{parents.map((item) => (
							<li
								key={item}
								className="flex items-start gap-4 bg-white rounded-2xl ring-1 ring-gray-200 p-5 md:p-6"
							>
								<span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-crab" />
								<span className="text-gray text-sm md:text-base leading-relaxed">{item}</span>
							</li>
						))}
					</ul>
				</Reveal>
			</section>
		</div>
	);
}
