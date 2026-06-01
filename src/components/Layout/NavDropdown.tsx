'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import type { NavChild } from './navConfig';

// Visible keyboard-focus indicator (mouse clicks stay clean via focus-visible).
// Mirrors the const in Navbar.tsx so triggers/items match the rest of the nav.
const focusRing =
	'focus:outline-none focus-visible:ring-2 focus-visible:ring-crab focus-visible:ring-offset-2 rounded-sm';

type Props = {
	label: string;
	items: NavChild[];
	pathname: string;
	light: boolean;
	onNavClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

/**
 * A single nav dropdown (disclosure/menu-button pattern). The trigger is a
 * <button> that toggles the menu; it never navigates — children are real routes.
 * Mouse users also get hover-to-open (with a short close delay to avoid flicker);
 * the menu remains fully click- and keyboard-operable, which is the source of
 * truth for a11y. Keyboard: Enter/Space/ArrowDown open and move focus to the
 * first item; ArrowUp/ArrowDown move between items; Home/End jump; Escape closes
 * and restores focus to the trigger; Tab or an outside click closes. Items are
 * out of the tab order while closed. Transitions respect prefers-reduced-motion.
 */
export const NavDropdown = ({ label, items, pathname, light, onNavClick }: Props) => {
	const [open, setOpen] = useState(false);
	// "Pinned" = opened by an explicit click; stays open (ignores hover-leave)
	// until an outside click, Escape, or item selection. Hover alone only peeks.
	const [pinned, setPinned] = useState(false);
	const menuId = useId();
	const containerRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLButtonElement>(null);
	const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
	// Small delay before hover-close so a diagonal mouse path to the menu doesn't
	// flicker it shut. Cleared on unmount.
	const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

	const hasActiveChild = items.some((i) => i.href === pathname);

	const close = (restoreFocus = false) => {
		setOpen(false);
		setPinned(false);
		if (restoreFocus) triggerRef.current?.focus();
	};

	const cancelClose = () => {
		if (closeTimer.current) {
			clearTimeout(closeTimer.current);
			closeTimer.current = null;
		}
	};

	// Hover intent (mouse only — pointer:fine). Keyboard/touch use click + the
	// handlers below; this is purely an enhancement for mouse users.
	const onPointerEnter = (e: React.PointerEvent) => {
		if (e.pointerType !== 'mouse') return;
		cancelClose();
		setOpen(true);
	};

	const onPointerLeave = (e: React.PointerEvent) => {
		if (e.pointerType !== 'mouse') return;
		cancelClose();
		// A pinned (clicked-open) menu ignores hover-leave; it stays until an
		// outside click, Escape, or item selection.
		if (pinned) return;
		closeTimer.current = setTimeout(() => setOpen(false), 120);
	};

	useEffect(() => cancelClose, []);

	// Outside-click closes.
	useEffect(() => {
		if (!open) return;
		const onPointerDown = (e: PointerEvent) => {
			if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
				setOpen(false);
				setPinned(false);
			}
		};
		document.addEventListener('pointerdown', onPointerDown);
		return () => document.removeEventListener('pointerdown', onPointerDown);
	}, [open]);

	// Move focus to the first item when opened via keyboard intent.
	const openAndFocusFirst = () => {
		setOpen(true);
		requestAnimationFrame(() => itemRefs.current[0]?.focus());
	};

	const focusItem = (index: number) => {
		const count = items.length;
		const next = (index + count) % count;
		itemRefs.current[next]?.focus();
	};

	const onTriggerKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
		switch (e.key) {
			case 'ArrowDown':
			case 'Enter':
			case ' ':
				e.preventDefault();
				openAndFocusFirst();
				break;
			case 'Escape':
				if (open) {
					e.preventDefault();
					close();
				}
				break;
		}
	};

	const onItemKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>, index: number) => {
		switch (e.key) {
			case 'ArrowDown':
				e.preventDefault();
				focusItem(index + 1);
				break;
			case 'ArrowUp':
				e.preventDefault();
				focusItem(index - 1);
				break;
			case 'Escape':
				e.preventDefault();
				close(true);
				break;
			case 'Tab':
				// Let focus leave naturally, but collapse the menu.
				setOpen(false);
				setPinned(false);
				break;
			case 'Home':
				e.preventDefault();
				focusItem(0);
				break;
			case 'End':
				e.preventDefault();
				focusItem(items.length - 1);
				break;
		}
	};

	const triggerColor = light ? 'text-slate-300' : 'text-black';

	return (
		<div
			ref={containerRef}
			className="relative"
			onPointerEnter={onPointerEnter}
			onPointerLeave={onPointerLeave}
		>
			<button
				ref={triggerRef}
				type="button"
				aria-haspopup="menu"
				aria-expanded={open}
				aria-controls={menuId}
				onClick={() => {
					// Click pins the menu open (and unpins/closes if already pinned).
					// Because hover may have already opened it, we drive off `pinned`,
					// not `open`, so a click never closes a hover-opened menu.
					if (pinned) {
						setPinned(false);
						setOpen(false);
					} else {
						setPinned(true);
						setOpen(true);
					}
				}}
				onKeyDown={onTriggerKeyDown}
				className={`inline-flex items-center gap-1.5 font-medium font-sans cursor-pointer transition-colors duration-200 hover:text-crab ${
					hasActiveChild ? 'text-crab' : triggerColor
				} ${focusRing}`}
			>
				<span className="relative">
					{label}
					{/* Non-color active hint: an underline marker when a child is current. */}
					{hasActiveChild && (
						<span
							aria-hidden="true"
							className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-crab"
						/>
					)}
				</span>
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

			<div
				id={menuId}
				role="menu"
				aria-label={label}
				className={`absolute right-0 top-full mt-3 min-w-[14rem] rounded-2xl bg-white ring-1 ring-gray-200 shadow-[0_18px_40px_-20px_rgba(32,78,207,0.45)] p-2 origin-top-right transition-all duration-200 motion-reduce:transition-none ${
					open
						? 'opacity-100 scale-100 pointer-events-auto'
						: 'opacity-0 scale-95 pointer-events-none'
				}`}
			>
				{items.map((item, i) => {
					const active = item.href === pathname;
					return (
						<Link
							key={item.href}
							href={item.href}
							ref={(el) => {
								itemRefs.current[i] = el;
							}}
							role="menuitem"
							tabIndex={open ? 0 : -1}
							aria-current={active ? 'page' : undefined}
							data-transition-manual="true"
							onClick={(e) => {
								setOpen(false);
								setPinned(false);
									onNavClick(e);
								}}
							onKeyDown={(e) => onItemKeyDown(e, i)}
							className={`block rounded-xl px-4 py-2.5 font-sans text-sm transition-colors duration-150 hover:bg-sand-dollar/50 ${
								active ? 'text-crab font-semibold' : 'text-black'
							} ${focusRing}`}
						>
							{item.label}
						</Link>
					);
				})}
			</div>
		</div>
	);
};
