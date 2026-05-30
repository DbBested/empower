'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, CSSProperties, useRef } from 'react';
import { coverDelayMs } from '@/components/transitionTimings';
import { LoadingAnimation } from '@/components/LoadingAnimation';

type Origin = { x: number; y: number };

export const PageTransition = () => {
	const pathname = usePathname();
	const router = useRouter();
	const [prev, setPrev] = useState(pathname);
	const [count, setCount] = useState(0);
	const [origin, setOrigin] = useState<Origin>({ x: 50, y: 50 });
	const [holeActive, setHoleActive] = useState(false);
	const [showLoader, setShowLoader] = useState(false);
	const skipNextPath = useRef(false);
	const transitionActive = useRef(false);
	const loaderTimer = useRef<number | null>(null);

	const scheduleLoader = () => {
		if (loaderTimer.current) window.clearTimeout(loaderTimer.current);
		setShowLoader(false);
		loaderTimer.current = window.setTimeout(() => setShowLoader(true), 3000);
	};

	const clearLoader = () => {
		if (loaderTimer.current) {
			window.clearTimeout(loaderTimer.current);
			loaderTimer.current = null;
		}
		setShowLoader(false);
	};

	useEffect(() => {
		const originHandler = (e: Event) => {
			const ce = e as CustomEvent<Origin>;
			if (ce.detail) setOrigin(ce.detail);
		};
		const pointerHandler = (e: Event) => {
			const pe = e as PointerEvent;
			if (typeof pe.clientX !== 'number' || typeof pe.clientY !== 'number') return;
			setOrigin({
				x: (pe.clientX / window.innerWidth) * 100,
				y: (pe.clientY / window.innerHeight) * 100,
			});
		};
		const startHandler = (e: Event) => {
			const ce = e as CustomEvent<Origin>;
			if (ce.detail) setOrigin(ce.detail);
			skipNextPath.current = true;
			transitionActive.current = true;
			setHoleActive(false);
			scheduleLoader();
			setCount((c) => c + 1);
		};
		const contentReadyHandler = () => {
			if (!transitionActive.current) return;
			setHoleActive(true);
			clearLoader();
			transitionActive.current = false;
		};
		window.addEventListener('page-transition-origin', originHandler as EventListener);
		window.addEventListener('page-transition-start', startHandler as EventListener);
		window.addEventListener('page-transition-content-ready', contentReadyHandler as EventListener);
		window.addEventListener('pointerdown', pointerHandler as EventListener, { passive: true });
		return () => {
			window.removeEventListener('page-transition-origin', originHandler as EventListener);
			window.removeEventListener('page-transition-start', startHandler as EventListener);
			window.removeEventListener('page-transition-content-ready', contentReadyHandler as EventListener);
			window.removeEventListener('pointerdown', pointerHandler as EventListener);
		};
	}, []);

	useEffect(() => {
		const handlePopState = () => {
			skipNextPath.current = true;
			transitionActive.current = false;
			setHoleActive(false);
			clearLoader();
			setCount(0);
		};
		window.addEventListener('popstate', handlePopState);
		return () => window.removeEventListener('popstate', handlePopState);
	}, []);

	useEffect(() => {
		const handleLinkClick = (event: MouseEvent) => {
			if (event.defaultPrevented) return;
			if (event.button !== 0) return;
			if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
			const target = event.target as HTMLElement | null;
			const anchor = target?.closest('a');
			if (!anchor) return;
			if (anchor.dataset.transitionManual === 'true') return;
			if (anchor.target && anchor.target !== '_self') return;
			const href = anchor.getAttribute('href');
			if (!href || href.startsWith('mailto:') || href.startsWith('tel:')) return;

			const url = new URL(anchor.href, window.location.href);
			if (url.origin !== window.location.origin) return;
			if (url.pathname === window.location.pathname && url.search === window.location.search && url.hash) return;

			event.preventDefault();
			const clickX = event.detail === 0 && event.clientX === 0 ? window.innerWidth / 2 : event.clientX;
			const clickY = event.detail === 0 && event.clientY === 0 ? window.innerHeight / 2 : event.clientY;
			window.dispatchEvent(
				new CustomEvent('page-transition-start', {
					detail: {
						x: (clickX / window.innerWidth) * 100,
						y: (clickY / window.innerHeight) * 100,
					},
				})
			);
			window.setTimeout(() => router.push(`${url.pathname}${url.search}${url.hash}`), coverDelayMs);
		};

		window.addEventListener('click', handleLinkClick, { capture: true });
		return () => window.removeEventListener('click', handleLinkClick, { capture: true });
	}, [router]);

	useEffect(() => {
		if (prev === pathname) return;
		setPrev(pathname);
		if (skipNextPath.current) {
			skipNextPath.current = false;
			return;
		}
		transitionActive.current = true;
		setHoleActive(false);
		scheduleLoader();
		setCount((c) => c + 1);
	}, [pathname, prev]);

	useEffect(() => {
		return () => clearLoader();
	}, []);

	if (count === 0) return null;

	const style = {
		['--ripple-x' as string]: `${origin.x}%`,
		['--ripple-y' as string]: `${origin.y}%`,
	} as CSSProperties;

	return (
		<div
			key={count}
			aria-hidden="true"
			style={style}
			className="pointer-events-none fixed inset-0 z-2000"
		>
			<svg
				className="reveal-svg absolute"
				style={{ left: 'var(--ripple-x)', top: 'var(--ripple-y)', transform: 'translate(-50%, -50%)' }}
				viewBox="0 0 100 100"
				width="800vw"
				height="800vh"
			>
				<defs>
					<mask id="sequence-mask" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
						<circle cx="50" cy="50" r="50" fill="white" />
						<circle cx="50" cy="50" r="0" fill="black" className={`mask-hole${holeActive ? ' is-active' : ''}`} />
					</mask>
				</defs>

				<g mask="url(#sequence-mask)">
					<circle cx="50" cy="50" r="0" className="circle-blue fill-deep-ocean" />
				</g>
			</svg>

			{showLoader ? <LoadingAnimation /> : null}
		</div>
	);
};
