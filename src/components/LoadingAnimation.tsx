import { CSSProperties } from 'react';

type LoadingAnimationProps = {
	className?: string;
	style?: CSSProperties;
};

export const LoadingAnimation = ({ className, style }: LoadingAnimationProps) => {
	const classes = ['transition-loader', className].filter(Boolean).join(' ');

	return (
		<div className={classes} style={style} aria-hidden="true">
			<div className="pencil-wrap">
				<div className="paper-sheet" aria-hidden="true">
					<svg className="paper-scribble" viewBox="0 0 240 120" aria-hidden="true">
						<path
							className="paper-scribble-path"
							d="M18 70 C 30 60, 44 78, 62 68 S 86 62, 104 72"
						/>
						<path
							className="paper-scribble-path is-alt"
							d="M118 72 C 130 62, 148 82, 166 70 S 194 66, 214 74"
						/>
						<path
							className="paper-scribble-path is-alt-two"
							d="M40 88 C 56 80, 72 96, 90 88"
						/>
					</svg>
					<div className="pencil-writing" aria-hidden="true">
						<svg className="pencil-icon" viewBox="0 0 120 24" role="img" aria-label="Loading">
							<rect x="10" y="6" width="74" height="12" rx="3" fill="var(--color-butterscotch)" />
							<rect x="2" y="6" width="8" height="12" rx="2" fill="var(--color-crab)" />
							<rect x="0" y="6" width="3" height="12" fill="#2b2b2b" />
							<polygon points="84,6 118,12 84,18" fill="#f3c67a" />
						</svg>
					</div>
				</div>
			</div>
			<div className="linear-loader" aria-hidden="true">
				<span className="linear-loader-bar" />
			</div>
		</div>
	);
};
