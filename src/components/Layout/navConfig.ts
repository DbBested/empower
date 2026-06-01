// Shared nav IA, consumed by both the desktop dropdowns (NavDropdown) and the
// mobile accordion (MobileNavAccordion). Single source of truth so the two stay
// in sync. Donate is a button (handled separately in Navbar), Contact lives in
// the footer.

export type NavChild = { href: string; label: string };
export type NavGroup = { label: string; items: NavChild[] };

export const navGroups: NavGroup[] = [
	{
		label: 'About',
		items: [
			{ href: '/about', label: 'Our Story' },
			{ href: '/our-team', label: 'Our Team' },
		],
	},
	{
		label: 'Chapters',
		items: [
			{ href: '/chapters', label: 'Find Your Chapter' },
			{ href: '/start-a-chapter', label: 'Start a Chapter' },
		],
	},
	{
		label: 'Resources',
		items: [
			{ href: '/resources/tutoring-guidelines', label: 'Tutoring Guidelines' },
			{ href: '/resources/officer-roles', label: 'Officer Roles' },
		],
	},
];

export const donateLink = {
	href: 'https://www.zeffy.com/en-US/donation-form/donate-to-empower-initiative',
	label: 'Donate',
	external: true,
};
