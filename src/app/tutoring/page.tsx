import Link from 'next/link';

const services = [
	{
		title: 'English Language Learning',
		description:
			'Specialized tutoring for immigrant students learning English, focusing on conversation, writing, and comprehension skills.',
	},
	{
		title: 'Academic Support',
		description:
			"Comprehensive academic assistance in various subjects, tailored to each student's curriculum and learning style.",
	},
	{
		title: 'Cultural Exchange',
		description:
			'Bridge cultural gaps while learning, helping students understand both language and cultural contexts.',
	},
	{
		title: 'Test Preparation',
		description:
			'Targeted preparation for standardized tests, including SAT, ACT, and English proficiency exams.',
	},
];

export default function TutoringPage() {
	return (
		<div className="max-w-[1200px] mx-auto p-16">
			<h1 className="text-deep-ocean mb-8 text-center">Our Tutoring Services</h1>
			<p className="text-gray text-center max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
				Empower Initiative was created to assist immigrant students who struggle with English as a second language. However, we’ve expanded to tutoring all academic subjects at varying levels, from learning how to read to competition math. Volunteers in the past have even expanded to teaching chess and practicing conversation skills!
			</p>

			<div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 mb-16">
				{services.map((service) => (
					<div key={service.title} className="bg-white rounded-lg p-8 shadow-md">
						<h3 className="text-deep-ocean mb-2">{service.title}</h3>
						<p className="text-gray">{service.description}</p>
					</div>
				))}
			</div>

			<div className="text-center mt-16">
				<Link
					href="/join-us"
					className="inline-block bg-deep-ocean text-white px-8 py-4 rounded font-semibold text-lg transition-colors duration-200 hover:bg-crab"
				>
					Start Your Learning Journey
				</Link>
			</div>
		</div>
	);
}
