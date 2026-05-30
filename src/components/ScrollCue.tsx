'use client';

import { useLenis } from 'lenis/react';

type Props = {
	/** id of the element to bring fully into view when clicked. */
	targetId: string;
	label?: string;
	className?: string;
	/** Top clearance (e.g. for a fixed navbar) used only when the target is taller than the viewport. */
	clearance?: number;
};

/** Document-relative top of an element, ignoring any CSS transforms (e.g. reveal animations). */
function layoutTop(el: HTMLElement): number {
	let y = 0;
	for (let node: HTMLElement | null = el; node; node = node.offsetParent as HTMLElement | null) {
		y += node.offsetTop;
	}
	return y;
}

/**
 * A homepage-style "Scroll" cue that snaps straight down and brings the full
 * target into view: centered within the available viewport when it fits, or
 * aligned under the navbar when it's taller than the viewport. Drives the
 * shared Lenis instance with a numeric target (numbers bypass Lenis's
 * scroll-margin math); falls back to native smooth scroll if Lenis isn't running.
 */
export function ScrollCue({ targetId, label = 'Scroll', className = '', clearance = 0 }: Props) {
	const lenis = useLenis();

	const handleClick = () => {
		const el = document.getElementById(targetId);
		if (!el) return;

		const elTop = layoutTop(el);
		const elHeight = el.offsetHeight;
		const viewport = window.innerHeight;
		// Centre the target dead-centre in the viewport when it fits; otherwise pin
		// it just below the navbar so at least the top is fully clear.
		const top =
			elHeight <= viewport
				? elTop - (viewport - elHeight) / 2
				: elTop - clearance;
		const target = Math.max(0, top);

		if (lenis) {
			lenis.scrollTo(target, { duration: 1.1 });
		} else {
			window.scrollTo({ top: target, behavior: 'smooth' });
		}
	};

	return (
		<button
			type="button"
			onClick={handleClick}
			aria-label={`${label} down to the next section`}
			className={`group flex flex-col items-center gap-2 text-deep-ocean/70 hover:text-crab transition-colors text-[10px] md:text-xs tracking-[0.3em] uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-crab focus-visible:ring-offset-2 rounded-sm ${className}`}
		>
			<span>{label}</span>
			<span className="w-px h-8 md:h-10 bg-deep-ocean/40 group-hover:bg-crab/60 animate-pulse" aria-hidden="true" />
		</button>
	);
}
