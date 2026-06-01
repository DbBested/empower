import type { Chapter } from '@/content/types';

/**
 * A chapter's four signup paths, split For Families / For Volunteers (per spec),
 * as two clean panels of consistent action rows (icon · label · description ·
 * arrow). The parent group chat is the one non-link variant, so it renders its
 * QR / code / instructions inline beneath its row. An empty URL renders as a
 * quiet "coming soon" row rather than a broken link.
 */

type IconProps = React.SVGProps<SVGSVGElement>;

const StudentIcon = (props: IconProps) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
		<path d="M22 10 12 5 2 10l10 5 10-5Z" />
		<path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5" />
	</svg>
);

const ChatIcon = (props: IconProps) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
		<path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 9.6 9.6 0 0 1-4-.9L3 20l1.4-4.5a8.4 8.4 0 0 1-.9-4A8.38 8.38 0 0 1 12 3a8.38 8.38 0 0 1 9 8.5Z" />
	</svg>
);

const TutorIcon = (props: IconProps) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
		<path d="M12 2 3 6l9 4 9-4-9-4Z" />
		<path d="M12 10v6" />
		<path d="M7 8v4.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V8" />
	</svg>
);

const ClassroomIcon = (props: IconProps) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" {...props}>
		<rect x="3" y="4" width="18" height="16" rx="2" />
		<path d="M3 9h18" />
		<path d="M8 14h5" />
	</svg>
);

const ArrowIcon = (props: IconProps) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
		<path d="M5 12h14" />
		<path d="m13 6 6 6-6 6" />
	</svg>
);

type Accent = 'crab' | 'vista-blue';

const accentClasses: Record<Accent, { icon: string; ring: string; chip: string }> = {
	crab: {
		icon: 'bg-sand-dollar/70 text-crab',
		ring: 'hover:ring-crab/40',
		chip: 'text-crab',
	},
	'vista-blue': {
		icon: 'bg-vista-blue/20 text-deep-ocean',
		ring: 'hover:ring-vista-blue/50',
		chip: 'text-vista-blue',
	},
};

/** One actionable signup row, or a muted "coming soon" row when href is empty. */
const ActionRow = ({
	href,
	icon,
	title,
	description,
	accent,
}: {
	href: string;
	icon: React.ReactNode;
	title: string;
	description: string;
	accent: Accent;
}) => {
	const a = accentClasses[accent];

	if (!href) {
		return (
			<div className="flex items-center gap-4 rounded-2xl ring-1 ring-gray-200/70 bg-gray-50/60 p-4">
				<span className="shrink-0 w-11 h-11 rounded-xl bg-gray-100 text-gray/50 flex items-center justify-center">
					{icon}
				</span>
				<div className="min-w-0">
					<p className="font-poppins font-semibold text-gray/60">{title}</p>
					<p className="text-gray/50 text-sm italic">Coming soon</p>
				</div>
			</div>
		);
	}

	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`group flex items-center gap-4 rounded-2xl ring-1 ring-gray-200 bg-white p-4 transition-all duration-300 ${a.ring} hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-18px_rgba(32,78,207,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-crab focus-visible:ring-offset-2`}
		>
			<span className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${a.icon}`}>
				{icon}
			</span>
			<div className="min-w-0 flex-1">
				<p className="font-poppins font-semibold text-deep-ocean">{title}</p>
				<p className="text-gray text-sm leading-snug">{description}</p>
			</div>
			<ArrowIcon className="shrink-0 w-5 h-5 text-gray/40 group-hover:text-crab group-hover:translate-x-0.5 transition-all" />
		</a>
	);
};

const Panel = ({
	label,
	accent,
	children,
}: {
	label: string;
	accent: Accent;
	children: React.ReactNode;
}) => (
	<div>
		<p className={`text-[0.7rem] md:text-xs tracking-[0.25em] uppercase font-semibold mb-4 ${accentClasses[accent].chip}`}>
			{label}
		</p>
		<div className="space-y-3">{children}</div>
	</div>
);

export const ChapterLinks = ({ chapter }: { chapter: Chapter }) => {
	const { links } = chapter;
	const pgc = links.parentGroupChat;

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
			{/* For Families */}
			<Panel label="For Families" accent="crab">
				<ActionRow
					href={links.tuteeSignup}
					icon={<StudentIcon className="w-5 h-5" />}
					title="Sign up your student"
					description="Enroll a student for free tutoring"
					accent="crab"
				/>

				{/* Parent group chat: not always a link — render its variant inline. */}
				<div className="rounded-2xl ring-1 ring-gray-200 bg-white p-4">
					<div className="flex items-center gap-4">
						<span className="shrink-0 w-11 h-11 rounded-xl bg-sand-dollar/70 text-crab flex items-center justify-center">
							<ChatIcon className="w-5 h-5" />
						</span>
						<div className="min-w-0">
							<p className="font-poppins font-semibold text-deep-ocean">Parent group chat</p>
							<p className="text-gray text-sm leading-snug">Stay in the loop with the chapter</p>
						</div>
					</div>

					{pgc.method === 'link' && (
						<a
							href={pgc.url}
							target="_blank"
							rel="noopener noreferrer"
							className="mt-4 inline-flex items-center gap-2 text-deep-ocean font-semibold text-sm border-b-2 border-deep-ocean/40 hover:border-crab hover:text-crab pb-0.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-crab focus-visible:ring-offset-2 rounded-sm"
						>
							Open invite
							<ArrowIcon className="w-4 h-4" />
						</a>
					)}

					{pgc.method === 'qr' && (
						<figure className="m-0 mt-4 flex items-center gap-4">
							<div className="shrink-0 w-28 h-28 rounded-xl overflow-hidden bg-white ring-1 ring-gray-200 p-1.5">
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img src={pgc.imageUrl} alt={pgc.caption ?? 'Parent group chat QR code'} className="w-full h-full object-contain" />
							</div>
							{pgc.caption && (
								<figcaption className="text-gray text-sm leading-relaxed">{pgc.caption}</figcaption>
							)}
						</figure>
					)}

					{pgc.method === 'code' && (
						<div className="mt-4">
							<span className="inline-block rounded-md bg-sand-dollar px-3 py-1 font-poppins font-bold text-deep-ocean tracking-wider">
								{pgc.code}
							</span>
							{pgc.instructions && (
								<p className="mt-2 text-gray text-sm leading-relaxed">{pgc.instructions}</p>
							)}
						</div>
					)}

					{pgc.method === 'other' && (
						<p className="mt-4 text-gray text-sm leading-relaxed">{pgc.instructions}</p>
					)}
				</div>
			</Panel>

			{/* For Volunteers */}
			<Panel label="For Volunteers" accent="vista-blue">
				<ActionRow
					href={links.tutorSignup}
					icon={<TutorIcon className="w-5 h-5" />}
					title="Become a tutor"
					description="Volunteer to tutor with this chapter"
					accent="vista-blue"
				/>
				<ActionRow
					href={links.tutorGoogleClassroom}
					icon={<ClassroomIcon className="w-5 h-5" />}
					title="Join the Google Classroom"
					description="Where tutors coordinate and share resources"
					accent="vista-blue"
				/>
			</Panel>
		</div>
	);
};
