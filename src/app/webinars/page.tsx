const webinars = [
	{
		title: 'Strategic Course Selection for College Success',
		date: 'TBD',
		description:
			"Learn how to choose high school courses that align with your college goals and strengthen your application. We'll discuss AP, IB, and honors courses, and how they impact college admissions.",
	},
	{
		title: 'Mastering Academic Olympiads',
		date: 'TBD',
		description:
			'Discover strategies for excelling in academic competitions like Math, Science, and Computing Olympiads. Learn from experienced competitors about preparation techniques and competition tips.',
	},
	{
		title: 'College Application Workshop',
		date: 'TBD',
		description:
			'Comprehensive guide to college applications, including personal statement writing, activity lists, and how to showcase your achievements effectively.',
	},
	{
		title: 'Navigating College Essays',
		date: 'TBD',
		description:
			'Expert tips on crafting compelling college essays that stand out. Learn about common pitfalls to avoid and strategies for telling your unique story.',
	},
];

export default function WebinarsPage() {
	return (
		<div className="max-w-[1200px] mx-auto p-16">
			<h1 className="text-deep-ocean mb-8 text-center">Upcoming Webinars</h1>
			<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
				{webinars.map((webinar) => (
					<div
						key={webinar.title}
						className="bg-white rounded-lg p-8 shadow-md"
					>
						<h3 className="text-deep-ocean mb-2">{webinar.title}</h3>
						<p className="text-crab font-semibold mb-2">{webinar.date}</p>
						<p className="text-gray">{webinar.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}
