import { SVGProps } from 'react';

// Hand-drawn doodles that represent each officer role, matching the loose
// stroke style of Doodles.tsx (currentColor, ~3px rounded strokes). Used both
// as the small header badge icon and the oversized background watermark on each
// OfficerRoleCard.

type DoodleProps = SVGProps<SVGSVGElement>;

// President — a crown (leadership / driving the chapter)
export const Crown = (props: DoodleProps) => (
	<svg viewBox="0 0 64 48" fill="none" {...props}>
		<path
			d="M6 42 L4 12 L20 25 L32 6 L44 25 L60 12 L58 42 Z"
			stroke="currentColor"
			strokeWidth="3"
			strokeLinejoin="round"
			strokeLinecap="round"
		/>
		<path d="M11 36 L53 36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
		<circle cx="4" cy="12" r="2.5" fill="currentColor" />
		<circle cx="32" cy="6" r="2.5" fill="currentColor" />
		<circle cx="60" cy="12" r="2.5" fill="currentColor" />
	</svg>
);

// Vice President — a compass (steadies, supports and steps in for the chapter).
// Double-ended needle: solid north half, open south half.
export const Compass = (props: DoodleProps) => (
	<svg viewBox="0 0 64 64" fill="none" {...props}>
		<circle cx="32" cy="32" r="27" stroke="currentColor" strokeWidth="3" />
		<path
			d="M32 13 L38 32 L26 32 Z"
			stroke="currentColor"
			strokeWidth="2.5"
			strokeLinejoin="round"
			fill="currentColor"
		/>
		<path
			d="M32 51 L38 32 L26 32 Z"
			stroke="currentColor"
			strokeWidth="2.5"
			strokeLinejoin="round"
		/>
		<circle cx="32" cy="32" r="3" fill="currentColor" />
	</svg>
);

// Secretary — a clipboard (records, attendance, organization)
export const Clipboard = (props: DoodleProps) => (
	<svg viewBox="0 0 56 64" fill="none" {...props}>
		<path
			d="M10 12 a4 4 0 0 1 4 -4 H42 a4 4 0 0 1 4 4 V56 a4 4 0 0 1 -4 4 H14 a4 4 0 0 1 -4 -4 Z"
			stroke="currentColor"
			strokeWidth="3"
			strokeLinejoin="round"
		/>
		<path
			d="M22 4 H34 a3 3 0 0 1 3 3 V13 H19 V7 a3 3 0 0 1 3 -3 Z"
			stroke="currentColor"
			strokeWidth="3"
			strokeLinejoin="round"
		/>
		<path d="M18 28 H38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
		<path d="M18 38 H38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
		<path d="M18 48 H30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
	</svg>
);

// Treasurer — a single coin with a $ (club funds, fundraising, reimbursements)
export const Coins = (props: DoodleProps) => (
	<svg viewBox="0 0 60 60" fill="none" {...props}>
		<circle cx="30" cy="30" r="23" stroke="currentColor" strokeWidth="3" />
		<path d="M30 17 V43" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
		<path
			d="M37 23 C37 19 23 19 23 23.5 C23 28 37 28 37 32.5 C37 37 23 37 23 33"
			stroke="currentColor"
			strokeWidth="2.5"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

// Historian — a camera (photos, reels, Instagram flyers)
export const Camera = (props: DoodleProps) => (
	<svg viewBox="0 0 64 52" fill="none" {...props}>
		<path
			d="M4 18 a4 4 0 0 1 4 -4 H16 L20 7 H40 L44 14 H56 a4 4 0 0 1 4 4 V44 a4 4 0 0 1 -4 4 H8 a4 4 0 0 1 -4 -4 Z"
			stroke="currentColor"
			strokeWidth="3"
			strokeLinejoin="round"
		/>
		<circle cx="32" cy="30" r="11" stroke="currentColor" strokeWidth="3" />
		<circle cx="32" cy="30" r="4.5" stroke="currentColor" strokeWidth="2.5" />
	</svg>
);
