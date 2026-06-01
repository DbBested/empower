'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

type Props = {
	children: ReactNode;
	delay?: number;
	className?: string;
	from?: 'up' | 'down' | 'left' | 'right' | 'fade';
};

const fromMap: Record<NonNullable<Props['from']>, string> = {
	up: 'translate-y-8',
	down: '-translate-y-8',
	left: 'translate-x-8',
	right: '-translate-x-8',
	fade: '',
};

export const Reveal = ({ children, delay = 0, className = '', from = 'up' }: Props) => {
	const ref = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(false);
	// When reduced motion is requested, render fully visible with no transition
	// at all (not just an instant reveal — the transition classes are dropped).
	const [reduced, setReduced] = useState(false);

	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			setReduced(true);
			setVisible(true);
			return;
		}

		const node = ref.current;
		if (!node) return;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
		);
		observer.observe(node);
		return () => observer.disconnect();
	}, []);

	if (reduced) {
		return (
			<div ref={ref} className={className}>
				{children}
			</div>
		);
	}

	return (
		<div
			ref={ref}
			className={`transition-all duration-1000 ease-out will-change-transform ${
				visible ? 'opacity-100 translate-x-0 translate-y-0' : `opacity-0 ${fromMap[from]}`
			} ${className}`}
			style={{ transitionDelay: `${delay}ms` }}
		>
			{children}
		</div>
	);
};
