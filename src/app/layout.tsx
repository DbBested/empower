import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Link from 'next/link';
import { Poppins, Open_Sans } from 'next/font/google';
import { Navbar } from '@/components/Layout/Navbar';
import { PageTransition } from '@/components/PageTransition';
import { SmoothScroll } from '@/components/SmoothScroll';
import { TransitionContent } from '@/components/TransitionContent';
import { Heart, Sparkle, Flower } from '@/components/Doodles';
import './globals.css';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	style: ['normal', 'italic'],
	variable: '--ff-poppins',
	display: 'swap',
});

const openSans = Open_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600'],
	variable: '--ff-open-sans',
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Empower Initiative',
	description: 'Connecting local students with expert tutors.',
	icons: { icon: '/logo.png' },
};

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
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

const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
		<path d="M15 3h6v6" />
		<path d="M10 14 21 3" />
		<path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
	</svg>
);

type FooterLink = { href: string; label: string; external?: boolean };
const footerNav: { explore: FooterLink[]; involved: FooterLink[] } = {
	explore: [
		{ href: '/about', label: 'Our Story' },
		{ href: '/our-team', label: 'Our Team' },
		{ href: '/chapters', label: 'Find Your Chapter' },
		{ href: '/start-a-chapter', label: 'Start a Chapter' },
	],
	involved: [
		{ href: '/resources/tutoring-guidelines', label: 'Tutoring Guidelines' },
		{ href: '/resources/officer-roles', label: 'Officer Roles' },
		{ href: '/contact', label: 'Contact' },
		{
			href: 'https://www.zeffy.com/en-US/donation-form/donate-to-empower-initiative',
			label: 'Donate',
			external: true,
		},
	],
};

const footerLinkClass = 'text-white/70 hover:text-white transition-colors duration-200';

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={`${poppins.variable} ${openSans.variable}`}>
			<body>
				<SmoothScroll>
				<PageTransition />
				<div className="page-shell flex flex-col min-h-screen w-full">
					<a
						href="#main-content"
						className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[2100] focus:px-5 focus:py-3 focus:rounded-md focus:bg-deep-ocean focus:text-white focus:font-semibold focus:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-crab focus-visible:ring-offset-2"
					>
						Skip to main content
					</a>
					<Navbar />
					<main id="main-content" tabIndex={-1} className="flex-1 w-full flex flex-col focus:outline-none">
						<TransitionContent>{children}</TransitionContent>
					</main>
					<footer className="relative bg-deep-ocean text-white w-full overflow-hidden">
						<Sparkle className="pointer-events-none absolute top-10 right-[8%] w-10 h-10 text-butterscotch/25" aria-hidden="true" />
						<Flower className="pointer-events-none absolute bottom-10 left-[5%] w-16 h-16 text-vista-blue/15 animate-float-slow" aria-hidden="true" />

						<div className="relative max-w-[1200px] mx-auto w-full px-6 md:px-10 py-16 md:py-20">
							<div className="grid gap-12 md:gap-10 md:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
								{/* Brand */}
								<div className="max-w-sm">
									<Link href="/" className="inline-flex items-center gap-3 font-poppins text-xl font-bold text-white">
										<span className="w-11 h-11 rounded-full overflow-hidden bg-sand-dollar inline-block shrink-0">
											<img src="/logo.png" alt="Empower Initiative logo" className="w-full h-full object-cover" />
										</span>
										Empower Initiative
									</Link>
									<p className="mt-5 text-sm leading-relaxed text-white/70 max-w-xs">
										A local tutoring nonprofit pairing high-school volunteers with students who want to learn — free, personalized, and rooted in real relationships.
									</p>
								</div>

								{/* Explore */}
								<nav aria-label="Explore">
									<h4 className="text-sand-dollar mb-5 text-xs font-semibold uppercase tracking-[0.2em]">Explore</h4>
									<ul className="list-none p-0 m-0 space-y-3 text-sm">
										{footerNav.explore.map((link) => (
											<li key={link.href}>
												<Link href={link.href} className={footerLinkClass}>{link.label}</Link>
											</li>
										))}
									</ul>
								</nav>

								{/* Get Involved */}
								<nav aria-label="Get involved">
									<h4 className="text-sand-dollar mb-5 text-xs font-semibold uppercase tracking-[0.2em]">Get Involved</h4>
									<ul className="list-none p-0 m-0 space-y-3 text-sm">
										{footerNav.involved.map((link) => (
											<li key={link.href}>
												{link.external ? (
													<a
														href={link.href}
														target="_blank"
														rel="noreferrer noopener"
														className={`inline-flex items-center gap-1.5 ${footerLinkClass}`}
													>
														{link.label}
														<ExternalLinkIcon className="w-3.5 h-3.5" />
													</a>
												) : (
													<Link href={link.href} className={footerLinkClass}>{link.label}</Link>
												)}
											</li>
										))}
									</ul>
								</nav>

								{/* Connect */}
								<div>
									<h4 className="text-sand-dollar mb-5 text-xs font-semibold uppercase tracking-[0.2em]">Connect</h4>
									<ul className="list-none p-0 m-0 space-y-4 text-sm">
										<li>
											<a href="mailto:empowerinit@gmail.com" className={`inline-flex items-center gap-2.5 break-all ${footerLinkClass}`}>
												<MailIcon className="w-5 h-5 shrink-0 text-sand-dollar" />
												empowerinit@gmail.com
											</a>
										</li>
										<li>
											<a
												href="https://www.instagram.com/empower_init"
												target="_blank"
												rel="noreferrer noopener"
												className={`inline-flex items-center gap-2.5 ${footerLinkClass}`}
											>
												<InstagramIcon className="w-5 h-5 shrink-0 text-sand-dollar" />
												@empower_init
											</a>
										</li>
									</ul>
								</div>
							</div>

							<div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
								<p>© {new Date().getFullYear()} Empower Initiative. All rights reserved.</p>
								<p className="inline-flex items-center gap-1">
									Website made with <Heart className="w-4 h-4 text-crab" aria-hidden="true" /> by{' '}
									<a
										href="https://dohunkim.xyz"
										target="_blank"
										rel="noreferrer noopener"
										className={footerLinkClass}
									>
										Dohun Kim
									</a>
								</p>
							</div>
						</div>
					</footer>
				</div>
				</SmoothScroll>
			</body>
		</html>
	);
}
