import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Navbar } from '@/components/Layout/Navbar';
import { PageTransition } from '@/components/PageTransition';
import { SmoothScroll } from '@/components/SmoothScroll';
import { TransitionContent } from '@/components/TransitionContent';
import './globals.css';

export const metadata: Metadata = {
	title: 'Empower Initiative',
	description: 'Connecting local students with expert tutors.',
	icons: { icon: '/logo.png' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body>
				<SmoothScroll>
				<PageTransition />
				<div className="page-shell flex flex-col min-h-screen w-full">
					<Navbar />
					<main className="flex-1 w-full flex flex-col">
						<TransitionContent>{children}</TransitionContent>
					</main>
					<footer className="bg-deep-ocean text-white px-16 py-16 w-full flex flex-col items-center">
						<div className="max-w-[1200px] w-full grid gap-16 justify-items-center text-center grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
							<div className="flex flex-col items-center">
								<h4 className="text-sand-dollar mb-6 text-xl">About Us</h4>
								<ul className="list-none p-0 m-0 text-center space-y-4">
									<li><a href="/our-team" className="text-white opacity-80 hover:opacity-100 transition-opacity">Our Team</a></li>
									<li><a href="/join-us" className="text-white opacity-80 hover:opacity-100 transition-opacity">Careers</a></li>
									<li><a href="/contact" className="text-white opacity-80 hover:opacity-100 transition-opacity">Contact</a></li>
								</ul>
							</div>
							<div className="flex flex-col items-center">
								<h4 className="text-sand-dollar mb-6 text-xl">Resources</h4>
								<ul className="list-none p-0 m-0 text-center space-y-4">
									<li><a href="/webinars" className="text-white opacity-80 hover:opacity-100 transition-opacity">Webinars</a></li>
									<li><a href="/resources" className="text-white opacity-80 hover:opacity-100 transition-opacity">Learning Materials</a></li>
									<li><a href="/tutoring" className="text-white opacity-80 hover:opacity-100 transition-opacity">Tutoring</a></li>
								</ul>
							</div>
							<div className="flex flex-col items-center">
								<h4 className="text-sand-dollar mb-6 text-xl">Connect</h4>
								<ul className="list-none p-0 m-0 text-center space-y-4">
									<li><a href="https://www.instagram.com/empower_init" className="text-white opacity-80 hover:opacity-100 transition-opacity">Instagram</a></li>
									<li><a href="https://linkedin.com" className="text-white opacity-80 hover:opacity-100 transition-opacity">LinkedIn</a></li>
									<li><a href="https://github.com" className="text-white opacity-80 hover:opacity-100 transition-opacity">GitHub</a></li>
								</ul>
							</div>
						</div>
						<div className="text-center mt-16 pt-8 border-t border-white/10 text-white opacity-80 w-full max-w-[1200px]">
							<p>© {new Date().getFullYear()} Empower. All rights reserved.</p>
						</div>
					</footer>
				</div>
				</SmoothScroll>
			</body>
		</html>
	);
}
