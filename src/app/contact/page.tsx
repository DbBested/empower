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

const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
		<rect x="3" y="5" width="18" height="14" rx="2" />
		<path d="M3 7l9 7 9-7" />
	</svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
		<rect x="3" y="3" width="18" height="18" rx="5" />
		<circle cx="12" cy="12" r="4" />
		<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
	</svg>
);

export default function ContactPage() {
	return (
		<div className="flex flex-col w-full bg-white overflow-x-clip">
			{/* HERO */}
			<section className="relative pt-40 md:pt-48 pb-20 md:pb-28 px-6 overflow-hidden">
				<Parallax speed={-0.15} className="absolute top-32 left-6 md:left-20 text-crab/80 pointer-events-none">
					<Sparkle className="w-10 h-10 animate-wiggle" style={{ ['--rot' as string]: '0deg' }} />
				</Parallax>
				<Parallax speed={-0.25} className="absolute top-40 right-8 md:right-28 text-butterscotch pointer-events-none">
					<Star className="w-14 h-14 animate-float" style={{ ['--rot' as string]: '8deg' }} />
				</Parallax>
				<Parallax speed={0.2} className="absolute bottom-6 left-10 md:left-32 text-vista-blue pointer-events-none">
					<Flower className="w-16 h-16 animate-float-slow" />
				</Parallax>
				<Parallax speed={0.15} className="absolute bottom-10 right-10 md:right-32 text-crab/80 pointer-events-none">
					<Scribble className="w-20 h-20 animate-spin-slow" />
				</Parallax>

				<Reveal className="max-w-4xl mx-auto text-center relative">
					<p className="text-xs md:text-sm tracking-[0.3em] uppercase text-crab font-semibold mb-5">
						Get in touch
					</p>
					<h1 className="text-deep-ocean leading-[1.05] tracking-tight">
						Let&apos;s{' '}
						<span className="relative inline-block">
							<span className="relative z-10">connect</span>
							<Underline
								className="absolute left-0 right-0 -bottom-3 w-full h-3 text-crab doodle-draw"
								style={{ ['--dash' as string]: '300' }}
							/>
						</span>
						.
					</h1>
					<p className="mt-6 md:mt-8 text-gray text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
						Questions, partnerships, or want to bring Empower Initiative to your school? Reach out — we read every message and reply within a few days.
					</p>
				</Reveal>
			</section>

			{/* CONTACT METHODS */}
			<section className="relative px-6 py-20 md:py-28 border-y border-gray-100 overflow-hidden">
				<Parallax speed={0.25} className="absolute -left-6 top-16 text-sand-dollar pointer-events-none">
					<Pencil className="w-32 md:w-48 h-auto -rotate-12" />
				</Parallax>
				<Parallax speed={-0.2} className="absolute right-4 md:right-24 top-24 text-butterscotch pointer-events-none">
					<Plus className="w-10 h-10 animate-wiggle" />
				</Parallax>
				<Parallax speed={0.15} className="absolute -right-6 bottom-16 text-vista-blue/60 pointer-events-none">
					<Scribble className="w-28 h-auto animate-spin-slow" />
				</Parallax>

				<Reveal className="max-w-3xl mx-auto text-center mb-16 md:mb-20 relative">
					<p className="text-xs md:text-sm tracking-[0.25em] uppercase text-crab font-semibold mb-5">
						Reach Us
					</p>
					<h2 className="text-deep-ocean mb-6 leading-tight">Where to find us</h2>
					<Squiggle className="mx-auto mb-8 w-40 h-5 text-crab" />
					<p className="text-gray text-base md:text-lg leading-relaxed">
						Pick whichever channel works best for you — email for anything detailed, Instagram for quick updates and a window into what we&apos;re up to.
					</p>
				</Reveal>

				<div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 relative">
					<Reveal from="up">
						<article className="group relative h-full bg-white rounded-2xl ring-1 ring-gray-200 p-8 md:p-10 transition-all duration-300 hover:ring-crab/40 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(32,78,207,0.35)]">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-14 h-14 rounded-full bg-sand-dollar/70 flex items-center justify-center text-crab">
									<EmailIcon className="w-7 h-7" />
								</div>
								<p className="text-[0.7rem] md:text-xs tracking-[0.25em] uppercase text-crab font-semibold">
									Email
								</p>
							</div>
							<h3 className="text-deep-ocean mb-4">Drop us a line</h3>
							<p className="text-gray text-sm md:text-base leading-relaxed mb-8">
								For tutoring requests, partnerships, press, or anything else — our inbox is open.
							</p>
							<a
								href="mailto:empowerinit@gmail.com"
								className="inline-flex items-center gap-2 text-deep-ocean font-semibold border-b-2 border-deep-ocean/40 hover:border-crab hover:text-crab pb-0.5 transition-colors text-sm md:text-base break-all"
							>
								empowerinit@gmail.com
								<Arrow className="w-6 h-4 -mb-0.5 group-hover:translate-x-1 transition-transform shrink-0" />
							</a>
						</article>
					</Reveal>

					<Reveal from="up" delay={100}>
						<article className="group relative h-full bg-white rounded-2xl ring-1 ring-gray-200 p-8 md:p-10 transition-all duration-300 hover:ring-vista-blue/50 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(32,78,207,0.35)]">
							<div className="flex items-center gap-4 mb-6">
								<div className="w-14 h-14 rounded-full bg-vista-blue/20 flex items-center justify-center text-deep-ocean">
									<InstagramIcon className="w-7 h-7" />
								</div>
								<p className="text-[0.7rem] md:text-xs tracking-[0.25em] uppercase text-vista-blue font-semibold">
									Instagram
								</p>
							</div>
							<h3 className="text-deep-ocean mb-4">Follow along</h3>
							<p className="text-gray text-sm md:text-base leading-relaxed mb-8">
								Updates, events, and behind-the-scenes from our chapters and tutors.
							</p>
							<a
								href="https://www.instagram.com/empower_init"
								target="_blank"
								rel="noreferrer noopener"
								className="inline-flex items-center gap-2 text-deep-ocean font-semibold border-b-2 border-deep-ocean/40 hover:border-vista-blue hover:text-vista-blue pb-0.5 transition-colors text-sm md:text-base"
							>
								@empower_init
								<Arrow className="w-6 h-4 -mb-0.5 group-hover:translate-x-1 transition-transform shrink-0" />
							</a>
						</article>
					</Reveal>
				</div>
			</section>
		</div>
	);
}
