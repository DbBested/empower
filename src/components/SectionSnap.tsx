'use client';

import { useEffect } from 'react';
import { useLenis } from 'lenis/react';
import Snap from 'lenis/snap';

type Props = {
	/** id of the element that should snap to the centre of the viewport. */
	targetId: string;
};

/**
 * Wheel/touch scroll snapping for the top of a page: snaps between the very top
 * (the hero) and a single target element centred in the viewport. Uses Lenis's
 * `proximity` snap so it only engages near those two points — the rest of the
 * page scrolls freely. Disabled when the user prefers reduced motion.
 */
export function SectionSnap({ targetId }: Props) {
	const lenis = useLenis();

	useEffect(() => {
		if (!lenis) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		const el = document.getElementById(targetId);
		if (!el) return;

		const snap = new Snap(lenis, {
			type: 'proximity',
			distanceThreshold: '30%',
			duration: 1.0,
		});
		const removeTop = snap.add(0);
		const removeTarget = snap.addElement(el, { align: ['center'], ignoreTransform: true });

		return () => {
			removeTop();
			removeTarget();
			snap.destroy();
		};
	}, [lenis, targetId]);

	return null;
}
