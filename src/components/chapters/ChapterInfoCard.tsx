'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import type { Chapter } from '@/content/types';
import { TeamMember } from '@/components/TeamMember';
import { ChapterLinks } from './ChapterLinks';
import { Arrow } from '@/components/Doodles';

/**
 * The selected chapter's detail card: officers + grouped signup links + a link
 * to the full chapter page. Escape closes and returns focus to the trigger that
 * opened it (passed via returnFocusRef).
 */
type Props = {
	chapter: Chapter;
	onClose: () => void;
	returnFocusRef: React.RefObject<HTMLElement | null>;
};

export const ChapterInfoCard = ({ chapter, onClose, returnFocusRef }: Props) => {
	const headingRef = useRef<HTMLHeadingElement>(null);

	// Move focus into the card on open for keyboard/SR users. preventScroll so it
	// doesn't instantly jump the page — ChapterLocator smooth-scrolls it into view.
	useEffect(() => {
		headingRef.current?.focus({ preventScroll: true });
	}, [chapter.slug]);

	const handleClose = () => {
		onClose();
		returnFocusRef.current?.focus();
	};

	return (
		<section
			aria-labelledby="chapter-card-heading"
			onKeyDown={(e) => {
				if (e.key === 'Escape') {
					e.stopPropagation();
					handleClose();
				}
			}}
			className="relative bg-white rounded-2xl ring-1 ring-gray-200 p-6 md:p-8"
		>
			<div className="flex items-start justify-between gap-4 mb-6">
				<div>
					<h3
						id="chapter-card-heading"
						ref={headingRef}
						tabIndex={-1}
						className="text-deep-ocean focus:outline-none"
					>
						{chapter.name}
					</h3>
					<p className="mt-1 text-crab text-[0.7rem] md:text-xs tracking-[0.25em] uppercase font-semibold">
						{chapter.location}
					</p>
					{/* Prominent jump to the full chapter page — left-aligned so it's in
					    the natural left-to-right scan path. */}
					<Link
						href={`/chapters/${chapter.slug}`}
						className="group mt-4 inline-flex items-center gap-1.5 rounded-full bg-deep-ocean text-white text-xs md:text-sm font-semibold px-4 py-2 hover:bg-crab transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crab focus-visible:ring-offset-2"
					>
						View full page
						<Arrow className="w-5 h-3.5 group-hover:translate-x-1 transition-transform" />
					</Link>
				</div>
				<button
					type="button"
					onClick={handleClose}
					className="shrink-0 rounded-full w-9 h-9 flex items-center justify-center text-gray hover:text-crab hover:bg-sand-dollar/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crab focus-visible:ring-offset-2"
					aria-label={`Close ${chapter.name} details`}
				>
					<svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
						<path d="M6 6l12 12M18 6L6 18" />
					</svg>
				</button>
			</div>

			{chapter.officers.length > 0 && (
				<div className="mb-8">
					<p className="text-[0.7rem] md:text-xs tracking-[0.25em] uppercase text-vista-blue font-semibold mb-4">
						Officers
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
						{chapter.officers.slice(0, 5).map((o) => (
							<TeamMember
								key={o.name}
								name={o.name}
								role={o.role}
								description={o.description ?? ''}
								email={o.email ?? ''}
								imageUrl={o.imageUrl}
								compact
							/>
						))}
					</div>
				</div>
			)}

			<div className="mb-8">
				<ChapterLinks chapter={chapter} />
			</div>

			<Link
				href={`/chapters/${chapter.slug}`}
				className="group inline-flex items-center gap-2 text-deep-ocean font-semibold border-b-2 border-deep-ocean/40 hover:border-crab hover:text-crab pb-0.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crab focus-visible:ring-offset-2 rounded-sm"
			>
				View full chapter page
				<Arrow className="w-6 h-4 -mb-0.5 group-hover:translate-x-1 transition-transform" />
			</Link>
		</section>
	);
};
