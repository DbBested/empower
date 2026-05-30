'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';

type TransitionContentProps = {
	children: ReactNode;
};

export const TransitionContent = ({ children }: TransitionContentProps) => {
	const pathname = usePathname();
	const lenis = useLenis();
	const [rendered, setRendered] = useState(children);
	const [pendingReveal, setPendingReveal] = useState(false);
	const prevPath = useRef(pathname);
	const pendingPath = useRef<string | null>(null);

	// Jump to the top of the new page when navigating (unless the URL targets an
	// anchor). Lenis owns the scroll position, so resetting the window alone isn't
	// enough — its animated position has to be reset too.
	const resetScrollTop = () => {
		if (typeof window === 'undefined' || window.location.hash) return;
		if (lenis) {
			lenis.scrollTo(0, { immediate: true });
		} else {
			window.scrollTo(0, 0);
		}
	};

	useEffect(() => {
		if (prevPath.current !== pathname) {
			pendingPath.current = pathname;
		}
	}, [pathname]);

	useEffect(() => {
		if (pendingPath.current) {
			setRendered(children);
			prevPath.current = pendingPath.current;
			pendingPath.current = null;
			setPendingReveal(true);
			resetScrollTop();
			return;
		}
		setRendered(children);
		prevPath.current = pathname;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [children, pathname]);

	useEffect(() => {
		if (!pendingReveal) return;
		const raf = window.requestAnimationFrame(() => {
			window.dispatchEvent(new CustomEvent('page-transition-content-ready'));
			setPendingReveal(false);
		});
		return () => window.cancelAnimationFrame(raf);
	}, [pendingReveal]);

	return <>{rendered}</>;
};
