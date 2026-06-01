'use client';

import { useEffect, useRef, useState } from 'react';
import { useLenis } from 'lenis/react';
import type { Chapter } from '@/content/types';
import { ChapterMap } from './ChapterMap';
import { ChapterInfoCard } from './ChapterInfoCard';

/**
 * The locator: an accessible, keyboard-navigable list of chapters paired with a
 * visual map. The list is the first-class path (the map is aria-hidden) — both
 * render from the same `chapters` array and selecting in the list drives the map
 * and opens the info card. Enter/Space select; Escape (in the card) closes and
 * returns focus to the originating list button.
 */
export const ChapterLocator = ({ chapters }: { chapters: Chapter[] }) => {
	const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
	// Track which list button opened the card so Escape can restore focus to it.
	const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
	const activeTriggerRef = useRef<HTMLButtonElement | null>(null);
	const cardRef = useRef<HTMLDivElement>(null);
	const lenis = useLenis();

	const selected = chapters.find((c) => c.slug === selectedSlug) ?? null;

	// When a chapter is selected, smoothly bring its detail card into view
	// (offset clears the fixed navbar). Runs after the card has rendered.
	useEffect(() => {
		if (!selectedSlug) return;
		const el = cardRef.current;
		if (!el) return;
		const id = requestAnimationFrame(() => {
			if (lenis) {
				lenis.scrollTo(el, { offset: -100, duration: 1.1 });
			} else {
				el.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
		return () => cancelAnimationFrame(id);
	}, [selectedSlug, lenis]);

	const select = (slug: string) => {
		activeTriggerRef.current = triggerRefs.current[slug] ?? null;
		setSelectedSlug(slug);
	};

	const close = () => setSelectedSlug(null);

	return (
		<div className="flex flex-col gap-8 lg:gap-10">
			<div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-6 lg:gap-8 items-stretch">
				{/* Accessible list (first-class path) */}
				<nav aria-label="Chapters" className="order-2 lg:order-1">
					<ul className="list-none p-0 m-0 space-y-3">
						{chapters.map((chapter) => {
							const isActive = chapter.slug === selectedSlug;
							return (
								<li key={chapter.slug}>
									<button
										type="button"
										ref={(el) => {
											triggerRefs.current[chapter.slug] = el;
										}}
										onClick={() => select(chapter.slug)}
										aria-pressed={isActive}
										className={`w-full text-left rounded-2xl ring-1 p-5 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-crab focus-visible:ring-offset-2 ${
											isActive
												? 'ring-crab/60 bg-sand-dollar/40'
												: 'ring-gray-200 bg-white hover:ring-crab/40 hover:-translate-y-0.5'
										}`}
									>
										<span className="flex items-center gap-3">
											<span
												aria-hidden="true"
												className={`shrink-0 w-3 h-3 rounded-full ${isActive ? 'bg-deep-ocean' : 'bg-crab'}`}
											/>
											<span>
												<span className="block font-poppins font-semibold text-deep-ocean">
													{chapter.name}
												</span>
												<span className="block text-gray text-sm mt-0.5">{chapter.location}</span>
											</span>
										</span>
									</button>
								</li>
							);
						})}
					</ul>
				</nav>

				{/* Visual map companion */}
				<div className="order-1 lg:order-2 min-h-[340px]">
					<ChapterMap chapters={chapters} selectedSlug={selectedSlug} onSelect={select} />
				</div>
			</div>

			{/* Info card for the selected chapter */}
			{selected && (
				<div ref={cardRef}>
					<ChapterInfoCard chapter={selected} onClose={close} returnFocusRef={activeTriggerRef} />
				</div>
			)}
		</div>
	);
};
