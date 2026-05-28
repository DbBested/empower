import { Arrow } from './Doodles';

interface TeamMemberProps {
	name: string;
	role: string;
	description: string;
	email: string;
	imageUrl?: string;
}

export const TeamMember = ({ name, role, description, email, imageUrl }: TeamMemberProps) => {
	return (
		<article className="group relative h-full bg-white rounded-2xl ring-1 ring-gray-200 p-8 md:p-10 transition-all duration-300 hover:ring-crab/40 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(32,78,207,0.35)]">
			<div className="flex flex-col items-center text-center">
				<div className="relative">
					<div className="absolute -inset-2 rounded-full bg-sand-dollar/60 -z-10" aria-hidden="true" />
					<div className="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden bg-sand-dollar ring-4 ring-white shadow-sm">
						{imageUrl && <img src={imageUrl} alt={name} className="w-full h-full object-cover" />}
					</div>
				</div>
				<h3 className="mt-6 text-deep-ocean">{name}</h3>
				<p className="mt-2 text-crab text-[0.7rem] md:text-xs tracking-[0.25em] uppercase font-semibold">
					{role}
				</p>
			</div>

			<p className="mt-6 text-gray text-sm md:text-base leading-relaxed">{description}</p>

			{email && (
				<a
					href={`mailto:${email}`}
					className="mt-6 inline-flex items-center gap-2 text-deep-ocean font-semibold border-b-2 border-deep-ocean/40 hover:border-crab hover:text-crab pb-0.5 transition-colors text-sm"
				>
					Get in touch
					<Arrow className="w-6 h-4 -mb-0.5 group-hover:translate-x-1 transition-transform" />
				</a>
			)}
		</article>
	);
};
