import type { ComponentType, CSSProperties, SVGProps } from 'react';
import type { OfficerRole, Responsibilities } from '@/content/copy';
import { Camera, Clipboard, Coins, Compass, Crown } from '@/components/RoleDoodles';

// Renders one officer role's expectations + responsibilities. Responsibilities
// come in two shapes (see content/content.json): a flat string[] for most
// roles, or a grouped Record<string, string[]> with sub-headings for Secretary
// and Historian. This component handles both.
//
// Each role is given its own identity so the page doesn't read as five
// identical cards: a distinct colour (a fresh palette, intentionally separate
// from the site's crab/ocean brand accents) and a role-representative doodle
// (crown, compass, clipboard, coins, camera) bled large into the card
// background. THEMES is keyed by position and cycles if roles are added.

const isGrouped = (r: Responsibilities): r is Record<string, string[]> =>
	!Array.isArray(r);

type Theme = {
	icon: ComponentType<SVGProps<SVGSVGElement>>;
	accent: string; // badge / bullets / background doodle
	ink: string; // darker shade used for text (headings, labels)
};

const THEMES: Theme[] = [
	{ icon: Crown, accent: '#6D5DF6', ink: '#4F46E5' }, // President — violet
	{ icon: Compass, accent: '#2BA9E0', ink: '#0E7FB0' }, // Vice President — cyan
	{ icon: Clipboard, accent: '#F2A93B', ink: '#B9760F' }, // Secretary — amber
	{ icon: Coins, accent: '#22B07A', ink: '#128A5E' }, // Treasurer — emerald
	{ icon: Camera, accent: '#E0588F', ink: '#C03A72' }, // Historian — rose
];

const Bullet = ({ accent }: { accent: string }) => (
	<span
		aria-hidden="true"
		className="mt-2 mr-3 h-1.5 w-1.5 shrink-0 rounded-full"
		style={{ backgroundColor: accent }}
	/>
);

const PointList = ({ items, accent }: { items: string[]; accent: string }) => (
	<ul className="list-none p-0 m-0 space-y-2.5">
		{items.map((item) => (
			<li key={item} className="flex items-start text-gray text-sm md:text-base leading-relaxed">
				<Bullet accent={accent} />
				<span>{item}</span>
			</li>
		))}
	</ul>
);

const SectionLabel = ({ children, color }: { children: string; color: string }) => (
	<p
		className="text-[0.7rem] md:text-xs tracking-[0.25em] uppercase font-semibold mb-4"
		style={{ color }}
	>
		{children}
	</p>
);

const Expectations = ({ items, theme }: { items: string[]; theme: Theme }) => (
	<div>
		<SectionLabel color={theme.ink}>Expectations</SectionLabel>
		<PointList items={items} accent={theme.accent} />
	</div>
);

const ResponsibilitiesBlock = ({
	responsibilities,
	theme,
}: {
	responsibilities: Responsibilities;
	theme: Theme;
}) => (
	<div>
		<SectionLabel color={theme.ink}>Responsibilities</SectionLabel>
		{isGrouped(responsibilities) ? (
			<div className="space-y-6">
				{Object.entries(responsibilities).map(([group, items]) => (
					<div key={group}>
						<h4 className="text-base md:text-lg mb-3" style={{ color: theme.ink }}>
							{group}
						</h4>
						<PointList items={items} accent={theme.accent} />
					</div>
				))}
			</div>
		) : (
			<PointList items={responsibilities} accent={theme.accent} />
		)}
	</div>
);

export const OfficerRoleCard = ({
	role,
	index = 0,
	featured = false,
}: {
	role: OfficerRole;
	index?: number;
	featured?: boolean;
}) => {
	const { responsibilities } = role;
	const theme = THEMES[index % THEMES.length];
	const Icon = theme.icon;

	const cardStyle: CSSProperties = {
		backgroundColor: `${theme.accent}12`, // ~7% tint
		borderColor: `${theme.accent}3D`, // ~24% border
	};

	return (
		<article
			className="group relative h-full overflow-hidden rounded-[1.75rem] border p-8 md:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-26px_rgba(0,0,0,0.3)]"
			style={cardStyle}
		>
			{/* Oversized role doodle bled into the corner — the card's signature */}
			<Icon
				aria-hidden="true"
				className="pointer-events-none absolute -bottom-8 -right-7 h-52 w-52 md:h-64 md:w-64 transition-transform duration-500 ease-out group-hover:-rotate-6 group-hover:scale-105"
				style={{ color: theme.accent, opacity: 0.1 }}
			/>

			<div className="relative">
				<div className="flex items-center gap-4 mb-7">
					<span
						className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-110"
						style={{ backgroundColor: theme.accent }}
					>
						<Icon className="h-6 w-6 text-white" />
					</span>
					<h3 className="leading-tight" style={{ color: theme.ink }}>
						{role.role}
					</h3>
				</div>

				{featured ? (
					<div className="grid gap-8 md:grid-cols-2 md:gap-12">
						<Expectations items={role.expectations} theme={theme} />
						<ResponsibilitiesBlock responsibilities={responsibilities} theme={theme} />
					</div>
				) : (
					<>
						<Expectations items={role.expectations} theme={theme} />
						<div className="mt-8">
							<ResponsibilitiesBlock responsibilities={responsibilities} theme={theme} />
						</div>
					</>
				)}
			</div>
		</article>
	);
};
