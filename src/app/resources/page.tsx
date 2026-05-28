const posterFiles = ['Secretary.png', 'Treasurer.png', 'Historian.png'];

const posters = posterFiles.map((fileName, index) => ({
	source: `/resources/posters/${fileName}`,
	label: fileName.replace(/\.png$/i, ''),
	order: String(index + 1).padStart(2, '0'),
}));

export default function ResourcesPage() {
	return (
		<div className="min-h-screen w-full bg-[radial-gradient(circle_at_top,rgba(131,165,242,0.14),transparent_36%),linear-gradient(180deg,rgba(252,222,214,0.5),rgba(255,255,255,1)_18%)] px-4 py-8 md:px-6 lg:px-16 lg:py-16">
			<div className="mx-auto max-w-[980px]">
				<h1 className="mb-3 text-center text-deep-ocean">Resources</h1>
				<p className="mx-auto mb-12 max-w-[720px] text-center leading-6 text-gray">
					These are resources created by the officers of Empower Initiative. If you are curious about how the club operates, check out these posters!
				</p>

				<div className="flex flex-col items-center gap-12 [scroll-snap-type:y_mandatory]">
					{posters.map((poster) => (
						<section
							key={poster.source}
							className="flex min-h-[calc(100vh-220px)] w-full items-center justify-center [scroll-snap-align:center]"
						>
							<div className="w-full max-w-[816px]">
								<div className="aspect-[8.5/11] overflow-hidden rounded-[22px] border border-[rgba(32,78,207,0.12)] bg-white shadow-[0_28px_60px_rgba(32,78,207,0.14)]">
									<img
										src={poster.source}
										alt={`${poster.label} poster`}
										className="block h-full w-full bg-white object-contain"
									/>
								</div>
								<div className="mt-3 text-center text-gray">
									<div className="font-bold text-deep-ocean">Poster {poster.order}</div>
									<div>{poster.label}</div>
								</div>
							</div>
						</section>
					))}
				</div>
			</div>
		</div>
	);
}
