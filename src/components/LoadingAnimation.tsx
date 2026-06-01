'use client';

import { CSSProperties, useEffect, useState } from 'react';

type LoadingAnimationProps = {
	className?: string;
	style?: CSSProperties;
};

// Multi-line "writing on a small notepad" loader. Every line is written
// left→right; between lines the pencil lifts and glides back to the start of
// the next line (no ink laid on the way). The pencil rides one continuous
// master path (rows + pen-up returns) at constant speed, and each row's ink is
// revealed during exactly the window the pencil traverses that row — so the
// graphite tip always sits on the leading edge of the ink. Timing is derived
// from real measured path lengths so motion and drawing stay locked.

const X0 = 26;
const X1 = 124;
const ROWS = [42, 74, 106, 138, 170];
const AMP = 9;
const STEP = 14;
const BUMPS = 7;
const DRAW = 0.82; // fraction of the loop spent writing; the rest holds + fades

const retCtl = (yFrom: number, yTo: number) =>
	`C ${X1 + 18} ${yFrom - 20} ${X0 - 18} ${yTo - 20} ${X0} ${yTo}`;

// Relative cursive wave for one line (left→right, returns to the same y).
const rowRel = (() => {
	let s = '';
	for (let i = 0; i < BUMPS; i++) {
		const up = i % 2 === 0 ? -AMP : AMP;
		s += ` c 4 ${up} 10 ${up} ${STEP} 0`;
	}
	return s;
})();

const rowPath = (y: number) => `M${X0} ${y}${rowRel}`;
const returnPath = (yFrom: number, yTo: number) => `M${X1} ${yFrom} ${retCtl(yFrom, yTo)}`;

const ROW_PATHS = ROWS.map(rowPath);

const MASTER_PATH = (() => {
	let d = `M${X0} ${ROWS[0]}`;
	ROWS.forEach((y, k) => {
		d += rowRel;
		if (k < ROWS.length - 1) d += ` ${retCtl(y, ROWS[k + 1])}`;
	});
	return d;
})();

const PATH_END = { x: X1, y: ROWS[ROWS.length - 1] };
const DUR = '5s';

type Timing = { motionKT: string; motionKP: string; rows: { d: string; kt: string }[] };

const Pencil = () => (
	// Tip-down with the graphite apex at the local origin (0,0); animateMotion
	// moves this origin along the path, so the tip writes where the ink appears.
	<g transform="rotate(26)">
		<rect x="-4" y="-50" width="8" height="6" rx="2" fill="var(--color-crab)" />
		<rect x="-4" y="-44" width="8" height="3.5" fill="#cdd1d6" />
		<rect x="-4" y="-40.5" width="8" height="26" fill="url(#pencilBody)" />
		<polygon points="-4,-14.5 4,-14.5 2.6,-6 -2.6,-6" fill="url(#pencilWood)" />
		<polygon points="-2.6,-6 2.6,-6 0,0" fill="#3f3f46" />
	</g>
);

export const LoadingAnimation = ({ className, style }: LoadingAnimationProps) => {
	const classes = ['transition-loader', className].filter(Boolean).join(' ');
	const [reduced, setReduced] = useState(false);
	const [timing, setTiming] = useState<Timing | null>(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			setReduced(true);
			return;
		}
		// Measure real arc lengths so each row's draw window matches the pencil's
		// constant-speed traversal exactly.
		const ns = 'http://www.w3.org/2000/svg';
		const svg = document.createElementNS(ns, 'svg');
		svg.setAttribute('style', 'position:absolute;width:0;height:0;opacity:0;pointer-events:none');
		document.body.appendChild(svg);
		const measure = (d: string) => {
			const p = document.createElementNS(ns, 'path');
			p.setAttribute('d', d);
			svg.appendChild(p);
			return p.getTotalLength();
		};
		const rowLen = measure(ROW_PATHS[0]);
		const retLen = measure(returnPath(ROWS[0], ROWS[1]));
		document.body.removeChild(svg);

		const segs: number[] = [];
		ROWS.forEach((_, k) => {
			segs.push(rowLen);
			if (k < ROWS.length - 1) segs.push(retLen);
		});
		const total = segs.reduce((a, b) => a + b, 0);
		const P = [0];
		let c = 0;
		for (const s of segs) {
			c += s;
			P.push(c / total);
		}
		const f = (v: number) => v.toFixed(4);
		const motionKP = [...P, 1].map(f).join(';');
		const motionKT = [...P.map((v) => v * DRAW), 1].map(f).join(';');
		const rows = ROW_PATHS.map((d, k) => ({
			d,
			kt: `0;${f(P[2 * k] * DRAW)};${f(P[2 * k + 1] * DRAW)};1`,
		}));
		setTiming({ motionKP, motionKT, rows });
	}, []);

	const animate = !reduced && timing !== null;

	return (
		<div className={classes} style={style} role="status" aria-label="Loading">
			<div className="write-scene" aria-hidden="true">
				<div className="write-paper" />
				<svg className="write-svg" viewBox="0 0 150 210">
					<defs>
						<linearGradient id="pencilBody" x1="0" y1="0" x2="1" y2="0">
							<stop offset="0%" stopColor="#a8660f" />
							<stop offset="20%" stopColor="#e7942f" />
							<stop offset="48%" stopColor="#ffd486" />
							<stop offset="64%" stopColor="#f0a83e" />
							<stop offset="100%" stopColor="#9a5e0d" />
						</linearGradient>
						<linearGradient id="pencilWood" x1="0" y1="0" x2="1" y2="0">
							<stop offset="0%" stopColor="#c98f4f" />
							<stop offset="50%" stopColor="#f3d6a6" />
							<stop offset="100%" stopColor="#b87a3c" />
						</linearGradient>
					</defs>

					{/* Invisible path the pencil rides (rows + pen-up returns). */}
					<path id="motionPath" d={MASTER_PATH} fill="none" stroke="none" />

					<g className="write-group">
						{ROW_PATHS.map((d, k) => (
							<path
								key={k}
								className="write-ink"
								pathLength="1"
								d={d}
								strokeDasharray="1"
								strokeDashoffset={animate ? 1 : 0}
							>
								{animate && (
									<animate
										attributeName="stroke-dashoffset"
										dur={DUR}
										repeatCount="indefinite"
										calcMode="linear"
										keyTimes={timing!.rows[k].kt}
										values="1;1;0;0"
									/>
								)}
							</path>
						))}

						{animate ? (
							<g className="write-pencil">
								<Pencil />
								<animateMotion
									dur={DUR}
									repeatCount="indefinite"
									rotate="0"
									calcMode="linear"
									keyTimes={timing!.motionKT}
									keyPoints={timing!.motionKP}
								>
									<mpath href="#motionPath" />
								</animateMotion>
							</g>
						) : (
							<g className="write-pencil" transform={`translate(${PATH_END.x} ${PATH_END.y})`}>
								<Pencil />
							</g>
						)}

						{animate && (
							<animate
								attributeName="opacity"
								dur={DUR}
								repeatCount="indefinite"
								keyTimes="0;0.86;0.97;1"
								values="1;1;0;0"
							/>
						)}
					</g>
				</svg>
			</div>

			<div className="linear-loader" aria-hidden="true">
				<span className="linear-loader-bar" />
			</div>
		</div>
	);
};
