'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

type Props = {
	/** Words to cycle through. The first word is used for SSR + screen readers. */
	words: string[];
	/** Time each word stays on screen, in ms. */
	interval?: number;
	/** Classes applied to each word (e.g. color / weight). */
	className?: string;
	/**
	 * When true the slot keeps a constant width sized to the widest word.
	 * When false (default) the width animates to fit the current word.
	 */
	fixedWidth?: boolean;
};

/** Matches the transform transition duration in globals.css (.slot-machine-track). */
const ROLL_MS = 600;

export default function SlotMachineText({
	words,
	interval = 2200,
	className = '',
	fixedWidth = false,
}: Props) {
	const [index, setIndex] = useState(0);
	const [animate, setAnimate] = useState(true);
	const [reduced, setReduced] = useState(false);
	const [dims, setDims] = useState({ width: 0, height: 0, widest: 0 });

	const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);

	// A clone of the first word is appended so the reel can roll forward onto it
	// and then snap back to the real first word invisibly — giving an endless,
	// one-directional roll with no jump back to the top.
	const loop = words.length > 1;
	const display = loop ? [...words, words[0]] : words;

	// Honour the user's reduced-motion preference.
	useEffect(() => {
		const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
		const update = () => setReduced(mq.matches);
		update();
		mq.addEventListener('change', update);
		return () => mq.removeEventListener('change', update);
	}, []);

	// Measure each word so we can clip to one line and animate the width.
	useLayoutEffect(() => {
		const measure = () => {
			const els = wordRefs.current;
			// Round up + a small buffer so sub-pixel text width never clips on the right.
			const widths = els.map((el) =>
				el ? Math.ceil(el.getBoundingClientRect().width) + 4 : 0
			);
			setDims({
				width: widths[index] ?? 0,
				// Exact (un-rounded) height: the roll step is multiplied by the index,
				// so any rounding here accumulates into a per-word vertical drift.
				height: els[0]?.getBoundingClientRect().height ?? 0,
				widest: Math.max(0, ...widths),
			});
		};
		measure();

		const ro = new ResizeObserver(measure);
		wordRefs.current.forEach((el) => el && ro.observe(el));
		return () => ro.disconnect();
	}, [index, display.length]);

	// Advance the reel one step at a time (onto the clone at index === words.length).
	useEffect(() => {
		if (!loop) return;
		const id = setInterval(() => setIndex((i) => i + 1), interval);
		return () => clearInterval(id);
	}, [loop, interval]);

	// Once we've rolled onto the trailing clone, snap back to the real first word
	// with the animation disabled — invisible because the two are identical.
	useEffect(() => {
		if (index !== words.length) return;
		const id = setTimeout(
			() => {
				setAnimate(false);
				setIndex(0);
			},
			reduced ? 0 : ROLL_MS + 50
		);
		return () => clearTimeout(id);
	}, [index, words.length, reduced]);

	// Re-enable the animation only after the snapped frame has painted, so the
	// snap itself never animates.
	useEffect(() => {
		if (animate) return;
		const raf = requestAnimationFrame(() =>
			requestAnimationFrame(() => setAnimate(true))
		);
		return () => cancelAnimationFrame(raf);
	}, [animate]);

	const containerWidth = fixedWidth ? dims.widest : dims.width;

	return (
		<span
			className={`slot-machine${reduced ? ' is-reduced' : ''}`}
			style={{
				width: containerWidth ? `${containerWidth}px` : 'max-content',
				height: dims.height ? `${dims.height}px` : '1.1em',
			}}
		>
			{/* Read naturally by assistive tech; the visual reel is decorative. */}
			<span className="sr-only">{words[index % words.length]}</span>

			<span
				className="slot-machine-track"
				aria-hidden="true"
				style={{
					transform: `translateY(-${index * dims.height}px)`,
					transition: animate ? undefined : 'none',
				}}
			>
				{display.map((word, i) => (
					<span
						key={i}
						ref={(el) => {
							wordRefs.current[i] = el;
						}}
						className={`slot-machine-word ${className}`}
					>
						{word}
					</span>
				))}
			</span>
		</span>
	);
}
