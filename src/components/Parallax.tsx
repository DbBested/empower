'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

type Props = {
	speed?: number;
	children: ReactNode;
	className?: string;
};

export const Parallax = ({ speed = 0.3, children, className = '' }: Props) => {
	const ref = useRef<HTMLDivElement>(null);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		// Honor reduced-motion: skip the scroll-linked transform so the element
		// rests at its natural position (offset stays 0).
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			setOffset(0);
			return;
		}

		let ticking = false;
		const update = () => {
			if (!ref.current) return;
			const rect = ref.current.getBoundingClientRect();
			const viewportCenter = window.innerHeight / 2;
			const elementCenter = rect.top + rect.height / 2;
			setOffset((viewportCenter - elementCenter) * speed);
			ticking = false;
		};
		const handleScroll = () => {
			if (!ticking) {
				window.requestAnimationFrame(update);
				ticking = true;
			}
		};
		update();
		window.addEventListener('scroll', handleScroll, { passive: true });
		window.addEventListener('resize', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', handleScroll);
		};
	}, [speed]);

	return (
		<div
			ref={ref}
			className={className}
			style={{ transform: `translate3d(0, ${offset}px, 0)`, willChange: 'transform' }}
		>
			{children}
		</div>
	);
};
