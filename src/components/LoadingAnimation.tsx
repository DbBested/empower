import { CSSProperties } from 'react';

type LoadingAnimationProps = {
	className?: string;
	style?: CSSProperties;
};

export const LoadingAnimation = ({ className, style }: LoadingAnimationProps) => {
	const classes = ['transition-loader', className].filter(Boolean).join(' ');

	return (
		<div className={classes} style={style} role="status" aria-label="Loading">
			<div className="write-scene">
				{/* Faint baseline + the handwriting being written in */}
				<svg className="write-ink" viewBox="0 0 240 96" aria-hidden="true">
					<line className="write-baseline" x1="22" y1="68" x2="214" y2="68" />
					<path
						className="write-ink-path"
						d="M24 66 q7 -20 14 -8 q5 10 11 3 q7 -18 14 -7 q5 11 11 4 q8 -17 15 -6 q5 10 11 3 q8 -17 15 -6 q5 10 11 4 q7 -15 14 -5"
					/>
				</svg>

				{/* Pseudo-3D pencil: cylindrical gradient shading + contact shadow */}
				<svg className="write-pencil" viewBox="0 0 66 84" aria-hidden="true">
					<defs>
						<linearGradient id="pencilBody" x1="0" y1="0" x2="1" y2="0">
							<stop offset="0%" stopColor="#a8660f" />
							<stop offset="18%" stopColor="#e7942f" />
							<stop offset="45%" stopColor="#ffd486" />
							<stop offset="62%" stopColor="#f0a83e" />
							<stop offset="100%" stopColor="#9a5e0d" />
						</linearGradient>
						<linearGradient id="pencilWood" x1="0" y1="0" x2="1" y2="0">
							<stop offset="0%" stopColor="#c98f4f" />
							<stop offset="45%" stopColor="#f3d6a6" />
							<stop offset="100%" stopColor="#b87a3c" />
						</linearGradient>
					</defs>

					<ellipse className="pencil-shadow" cx="22" cy="73" rx="15" ry="3.5" />

					<g transform="rotate(32 16 66)">
						<rect className="pencil-eraser" x="11" y="6" width="10" height="8" rx="3" />
						<rect className="pencil-ferrule" x="11" y="14" width="10" height="4" />
						<rect className="pencil-body" x="11" y="18" width="10" height="30" />
						<polygon className="pencil-wood" points="11,48 21,48 19,57 13,57" />
						<polygon className="pencil-tip" points="13,57 19,57 16,66" />
					</g>
				</svg>
			</div>

			<div className="linear-loader" aria-hidden="true">
				<span className="linear-loader-bar" />
			</div>
		</div>
	);
};
