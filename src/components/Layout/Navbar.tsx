'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { coverDelayMs } from '@/components/transitionTimings';
import { navGroups, donateLink } from './navConfig';
import { NavDropdown } from './NavDropdown';
import { MobileNavAccordion } from './MobileNavAccordion';

// Visible keyboard-focus indicator (mouse clicks stay clean via focus-visible).
const focusRing =
	'focus:outline-none focus-visible:ring-2 focus-visible:ring-crab focus-visible:ring-offset-2 rounded-sm';

// "Open in new tab" glyph shown beside the (external) Donate link.
const ExternalLinkIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
		{...props}
	>
		<path d="M15 3h6v6" />
		<path d="M10 14 21 3" />
		<path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
	</svg>
);

type NavBodyProps = {
	isMenuOpen: boolean;
	toggleMenu: () => void;
	closeMenu: () => void;
	pathname: string;
	light: boolean;
};

const NavBody = ({ isMenuOpen, toggleMenu, closeMenu, pathname, light }: NavBodyProps) => {
	const router = useRouter();
	const logoColor = light ? 'text-white' : 'text-deep-ocean';
	const menuButtonColor = light ? 'text-white' : 'text-deep-ocean';

	const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const href = e.currentTarget.getAttribute('href');
		const isModified = e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0;
		if (isModified || !href || href === pathname) {
			closeMenu();
			return;
		}

		e.preventDefault();
		const rect = e.currentTarget.getBoundingClientRect();
		const realClick = e.detail > 0;
		const px = realClick ? e.clientX : rect.left + rect.width / 2;
		const py = realClick ? e.clientY : rect.top + rect.height / 2;
		window.dispatchEvent(
			new CustomEvent('page-transition-start', {
				detail: {
					x: (px / window.innerWidth) * 100,
					y: (py / window.innerHeight) * 100,
				},
			})
		);
		closeMenu();
		window.setTimeout(() => router.push(href), coverDelayMs);
	};

	return (
		<div className="flex justify-between items-center relative w-full">
			<Link
				href="/"
				onClick={handleNavClick}
				data-transition-manual="true"
				className={`flex flex-row justify-between items-center font-poppins text-2xl font-bold ${logoColor} ${focusRing}`}
			>
				<span className="w-12 h-12 rounded-full overflow-hidden bg-sand-dollar mr-2 transition-transform duration-200 inline-block">
					<img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
				</span>
				Empower Initiative
			</Link>

			<button
				type="button"
				onClick={toggleMenu}
				className={`hidden max-[900px]:block text-2xl cursor-pointer ${menuButtonColor} ${focusRing}`}
				aria-label="Toggle menu"
				aria-expanded={isMenuOpen}
			>
				{isMenuOpen ? '✕' : '☰'}
			</button>

			{/* Desktop: dropdown groups + Donate button. Mobile (<900px): hidden here;
			    the hamburger panel below renders the accordion instead. */}
			<div className="flex gap-8 items-center max-[900px]:hidden">
				{navGroups.map((group) => (
					<NavDropdown
						key={group.label}
						label={group.label}
						items={group.items}
						pathname={pathname}
						light={light}
						onNavClick={handleNavClick}
					/>
				))}
				<a
					href={donateLink.href}
					target="_blank"
					rel="noopener noreferrer"
					className={`button-primary inline-flex items-center gap-1.5 px-5 py-2.5 rounded-md font-semibold ${focusRing}`}
				>
					{donateLink.label}
					<ExternalLinkIcon className="w-4 h-4" />
				</a>
			</div>

			{/* Mobile hamburger panel: groups as an accordion + Donate. */}
			<div
				className={`hidden max-[900px]:flex flex-col absolute top-full right-0 mt-2 w-64 bg-white rounded-2xl shadow-md ring-1 ring-gray-200 p-6 gap-2 ${
					isMenuOpen ? 'max-[900px]:flex' : 'max-[900px]:hidden'
				}`}
			>
				<MobileNavAccordion groups={navGroups} pathname={pathname} onNavClick={handleNavClick} />
				<a
					href={donateLink.href}
					target="_blank"
					rel="noopener noreferrer"
					onClick={closeMenu}
					className={`button-primary inline-flex items-center justify-center gap-1.5 text-center px-5 py-2.5 rounded-md font-semibold mt-2 ${focusRing}`}
				>
					{donateLink.label}
					<ExternalLinkIcon className="w-4 h-4" />
				</a>
			</div>
		</div>
	);
};

export const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [showFloating, setShowFloating] = useState(false);
	const [atTop, setAtTop] = useState(true);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setShowFloating(window.scrollY > window.innerHeight);
			setAtTop(window.scrollY < 120);
		};
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMenu = () => setIsMenuOpen((open) => !open);
	const closeMenu = () => setIsMenuOpen(false);
	const lightTheme = pathname === '/' && atTop;

	return (
		<>
			{/* Top bar: transparent over the page hero. When in white-text mode
			    (home hero), a soft gradient scrim guarantees the links stay legible
			    no matter how light the image behind them is. */}
			<nav
				className="bg-transparent px-4 py-3 w-full absolute top-0 left-0 right-0 z-20"
				inert={showFloating}
			>
				{lightTheme && (
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/50 to-transparent"
					/>
				)}
				<div className="relative">
					<NavBody
						isMenuOpen={isMenuOpen}
						toggleMenu={toggleMenu}
						closeMenu={closeMenu}
						pathname={pathname}
						light={lightTheme}
					/>
				</div>
			</nav>

			{/* Floating bar: appears on scroll. A frosted-white backdrop keeps the
			    dark text readable over any section it passes — light or dark. */}
			<nav
				className={`bg-white/85 backdrop-blur-md border-b border-black/5 shadow-[0_4px_24px_-12px_rgba(0,0,0,0.35)] px-4 py-3 w-full fixed top-0 left-0 right-0 z-[1000] transition-transform duration-500 ease-out will-change-transform ${
					showFloating ? 'translate-y-0' : '-translate-y-full'
				}`}
				inert={!showFloating}
			>
				<NavBody
					isMenuOpen={isMenuOpen}
					toggleMenu={toggleMenu}
					closeMenu={closeMenu}
					pathname={pathname}
					light={false}
				/>
			</nav>
		</>
	);
};
