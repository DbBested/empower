import { SVGProps } from 'react';

type DoodleProps = SVGProps<SVGSVGElement>;

export const Squiggle = (props: DoodleProps) => (
	<svg viewBox="0 0 200 30" fill="none" {...props}>
		<path
			d="M2 18 C 20 4, 40 32, 60 16 S 100 4, 120 18 S 160 32, 198 14"
			stroke="currentColor"
			strokeWidth="3"
			strokeLinecap="round"
		/>
	</svg>
);

export const Scribble = (props: DoodleProps) => (
	<svg viewBox="0 0 120 120" fill="none" {...props}>
		<path
			d="M10 60 C 20 20, 80 20, 90 60 S 60 110, 30 90 S 100 30, 110 70"
			stroke="currentColor"
			strokeWidth="3"
			strokeLinecap="round"
		/>
	</svg>
);

export const Star = (props: DoodleProps) => (
	<svg viewBox="0 0 40 40" fill="none" {...props}>
		<path
			d="M20 4 L23 16 L36 18 L26 26 L29 38 L20 31 L11 38 L14 26 L4 18 L17 16 Z"
			stroke="currentColor"
			strokeWidth="2.5"
			strokeLinejoin="round"
			fill="none"
		/>
	</svg>
);

export const Sparkle = (props: DoodleProps) => (
	<svg viewBox="0 0 24 24" fill="none" {...props}>
		<path
			d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z"
			fill="currentColor"
		/>
	</svg>
);

export const Arrow = (props: DoodleProps) => (
	<svg viewBox="0 0 100 20" fill="none" {...props}>
		<path
			d="M8 10 L 78 10"
			stroke="currentColor"
			strokeWidth="3"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M76 2 L 96 10 L 76 18 Z"
			fill="currentColor"
			stroke="currentColor"
			strokeWidth="2.5"
			strokeLinejoin="round"
		/>
	</svg>
);

export const Pencil = (props: DoodleProps) => (
	<svg viewBox="0 0 120 30" fill="none" {...props}>
		<path d="M4 15 L 18 5 L 100 5 L 110 15 L 100 25 L 18 25 Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
		<path d="M18 5 L 18 25" stroke="currentColor" strokeWidth="2.5" />
		<path d="M28 5 L 28 25" stroke="currentColor" strokeWidth="2.5" />
		<path d="M100 5 L 100 25" stroke="currentColor" strokeWidth="2.5" />
		<path d="M110 15 L 118 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
	</svg>
);

export const Flower = (props: DoodleProps) => (
	<svg viewBox="0 0 80 80" fill="none" {...props}>
		<path
			d="M40 12 C 33 12, 29 20, 33 28 C 36 35, 44 36, 47 28 C 51 20, 47 12, 40 12 Z"
			stroke="currentColor"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M40 12 C 33 12, 29 20, 33 28 C 36 35, 44 36, 47 28 C 51 20, 47 12, 40 12 Z"
			transform="rotate(72 40 40)"
			stroke="currentColor"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M40 12 C 33 12, 29 20, 33 28 C 36 35, 44 36, 47 28 C 51 20, 47 12, 40 12 Z"
			transform="rotate(144 40 40)"
			stroke="currentColor"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M40 12 C 33 12, 29 20, 33 28 C 36 35, 44 36, 47 28 C 51 20, 47 12, 40 12 Z"
			transform="rotate(216 40 40)"
			stroke="currentColor"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M40 12 C 33 12, 29 20, 33 28 C 36 35, 44 36, 47 28 C 51 20, 47 12, 40 12 Z"
			transform="rotate(288 40 40)"
			stroke="currentColor"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<circle cx="40" cy="40" r="6" stroke="currentColor" strokeWidth="2.5" />
	</svg>
);

export const Plus = (props: DoodleProps) => (
	<svg viewBox="0 0 30 30" fill="none" {...props}>
		<path d="M15 4 L 15 26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
		<path d="M4 15 L 26 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
	</svg>
);

export const Heart = (props: DoodleProps) => (
	<svg viewBox="0 0 32 30" {...props} {...props.fill ? {} : { fill: 'none' }}>
		<path
			d="M16 26 C 4 18, 2 8, 9 5 C 13 3, 16 7, 16 10 C 16 7, 19 3, 23 5 C 30 8, 28 18, 16 26 Z"
			stroke="currentColor"
			strokeWidth="2.5"
			strokeLinejoin="round"
			fill="inherit"
		/>
	</svg>
);

export const Underline = (props: DoodleProps) => (
	<svg viewBox="0 0 240 14" fill="none" {...props}>
		<path
			d="M4 8 C 50 2, 100 12, 150 6 S 220 12, 236 6"
			stroke="currentColor"
			strokeWidth="3"
			strokeLinecap="round"
		/>
	</svg>
);
