interface TeamMemberProps {
	name: string;
	role: string;
	description: string;
	email: string;
	imageUrl?: string;
}

export const TeamMember = ({ name, role, description, email, imageUrl }: TeamMemberProps) => {
	return (
		<div className="ring-1 ring-gray-100 text-center p-6 bg-white rounded-xl shadow-md transition-transform ease-in-out duration-200 hover:-translate-y-1">
			<div className="w-[200px] h-[200px] rounded-full mx-auto mb-6 overflow-hidden bg-sand-dollar">
				{imageUrl && <img src={imageUrl} alt={name} className="w-full h-full object-cover" />}
			</div>
			<h3 className="text-deep-ocean mb-2">{name}</h3>
			<h4 className="text-crab mb-4 text-[1.1rem]">{role}</h4>
			<p className="text-gray mb-6">{description}</p>
			{email && (
				<a href={`mailto:${email}`} className="text-deep-ocean underline hover:text-crab">
					{email}
				</a>
			)}
		</div>
	);
};
