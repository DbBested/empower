'use client';

import Link from 'next/link';
import { useId, useState } from 'react';
import type { NavGroup } from './navConfig';

const focusRing =
	'focus:outline-none focus-visible:ring-2 focus-visible:ring-crab focus-visible:ring-offset-2 rounded-sm';

type Props = {
	groups: NavGroup[];
	pathname: string;
	onNavClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

/**
 * Mobile (sub-900px) rendering of the nav groups: each group is a disclosure
 * button that expands its children as an accordion inside the hamburger panel.
 * Same routes and active states as the desktop dropdowns; Escape/focus handling
 * is governed by the parent panel (this is a vertical list, always in the tab
 * order while the panel is open).
 */
const AccordionGroup = ({
	group,
	pathname,
	onNavClick,
}: {
	group: NavGroup;
	pathname: string;
	onNavClick: Props['onNavClick'];
}) => {
	const hasActiveChild = group.items.some((i) => i.href === pathname);
	const [open, setOpen] = useState(hasActiveChild);
	const panelId = useId();

	return (
		<div className="w-full">
			<button
				type="button"
				aria-expanded={open}
				aria-controls={panelId}
				onClick={() => setOpen((o) => !o)}
				className={`flex w-full items-center justify-between gap-2 py-2 font-medium font-sans hover:text-crab ${
					hasActiveChild ? 'text-crab' : 'text-black'
				} ${focusRing}`}
			>
				{group.label}
				<svg
					viewBox="0 0 12 8"
					aria-hidden="true"
					className={`w-3 h-2 transition-transform duration-200 motion-reduce:transition-none ${
						open ? 'rotate-180' : ''
					}`}
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M1 1.5 L6 6.5 L11 1.5" />
				</svg>
			</button>
			{open && (
				<div id={panelId} className="flex flex-col pl-4 pb-2">
					{group.items.map((item) => {
						const active = item.href === pathname;
						return (
							<Link
								key={item.href}
								href={item.href}
								aria-current={active ? 'page' : undefined}
								data-transition-manual="true"
								onClick={onNavClick}
								className={`py-2 font-sans text-sm hover:text-crab ${
									active ? 'text-crab font-semibold' : 'text-black'
								} ${focusRing}`}
							>
								{item.label}
							</Link>
						);
					})}
				</div>
			)}
		</div>
	);
};

export const MobileNavAccordion = ({ groups, pathname, onNavClick }: Props) => (
	<div className="flex flex-col w-full divide-y divide-gray-100">
		{groups.map((group) => (
			<AccordionGroup
				key={group.label}
				group={group}
				pathname={pathname}
				onNavClick={onNavClick}
			/>
		))}
	</div>
);
