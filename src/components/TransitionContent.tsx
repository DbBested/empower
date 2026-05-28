'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

type TransitionContentProps = {
	children: ReactNode;
};

export const TransitionContent = ({ children }: TransitionContentProps) => {
	const pathname = usePathname();
	const [rendered, setRendered] = useState(children);
	const [pendingReveal, setPendingReveal] = useState(false);
	const prevPath = useRef(pathname);
	const pendingPath = useRef<string | null>(null);

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
			return;
		}
		setRendered(children);
		prevPath.current = pathname;
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
