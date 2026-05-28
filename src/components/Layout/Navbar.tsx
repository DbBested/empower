'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
	{ href: '/webinars', label: 'Webinars' },
	{ href: '/our-team', label: 'Our Team' },
	{ href: '/resources', label: 'Resources' },
	{ href: '/tutoring', label: 'Tutoring' },
	{ href: '/donate', label: 'Donate' },
];

type NavBodyProps = {
	isMenuOpen: boolean;
	toggleMenu: () => void;
	closeMenu: () => void;
	pathname: string;
	light: boolean;
};

const NavBody = ({ isMenuOpen, toggleMenu, closeMenu, pathname, light }: NavBodyProps) => {
	const logoColor = light ? 'text-white' : 'text-deep-ocean';
	const menuButtonColor = light ? 'text-white' : 'text-deep-ocean';
	const linkIdle = light ? 'text-slate-300' : 'text-black';

	return (
		<div className="flex justify-between items-center relative w-full">
			<Link
				href="/"
				onClick={closeMenu}
				className={`flex flex-row justify-between items-center font-poppins text-2xl font-bold ${logoColor}`}
			>
				<span className="w-12 h-12 rounded-full overflow-hidden bg-sand-dollar mr-2 transition-transform duration-200 inline-block">
					<img src="/logo.png" alt="Logo" className="w-full h-full object-cover" />
				</span>
				Empower Initiative
			</Link>

			<button
				type="button"
				onClick={toggleMenu}
				className={`hidden max-[900px]:block text-2xl cursor-pointer ${menuButtonColor}`}
				aria-label="Toggle menu"
			>
				{isMenuOpen ? '✕' : '☰'}
			</button>

			<div
				className={`flex gap-8 items-center max-[900px]:flex-col max-[900px]:absolute max-[900px]:top-full max-[900px]:right-0 max-[900px]:bg-white max-[900px]:p-8 max-[900px]:shadow-md max-[900px]:gap-6 ${
					isMenuOpen ? 'max-[900px]:flex' : 'max-[900px]:hidden'
				}`}
			>
				{navLinks.map((link) => {
					const active = pathname === link.href;
					return (
						<Link
							key={link.href}
							href={link.href}
							onClick={closeMenu}
							className={`font-medium font-sans transition-colors duration-200 hover:text-crab ${
								active ? 'text-crab' : linkIdle
							}`}
						>
							{link.label}
						</Link>
					);
				})}
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
			<nav className="bg-transparent px-4 py-3 w-full absolute top-0 left-0 right-0 z-20">
				<NavBody
					isMenuOpen={isMenuOpen}
					toggleMenu={toggleMenu}
					closeMenu={closeMenu}
					pathname={pathname}
					light={lightTheme}
				/>
			</nav>

			<nav
				className={`bg-transparent px-4 py-3 w-full fixed top-0 left-0 right-0 z-[1000] transition-transform duration-500 ease-out will-change-transform ${
					showFloating ? 'translate-y-0' : '-translate-y-full'
				}`}
				aria-hidden={!showFloating}
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
