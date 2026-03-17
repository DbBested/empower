import { useCallback, useEffect, useRef, useState } from 'react'

type Quote = {
	text: string,
	name: string,
	date: string | undefined
}

const slides: Quote[] = [
	{
		text: "I'm thrilled to recommend the Empower Initiative! My child has made improvement under their guidance. Tutors create a warm, welcoming atmosphere, making my child feel comfortable and eager to learn. Their positive reinforcement and praise motivate my child to participate and improve.",
		name: 'Anonymous Parent',
		date: ''
	},
	{
		text: "My child met a great tutor here. Although he is already in grade 12 and facing the most critical time of applying for college, he still took the time to help my child improve his French. I am very grateful and touched.",
		name: 'Anonymous Parent',
		date: ''
	},
	{
		text: "My child loves to do math now, and she becomes more independent!",
		name: 'Anonymous Parent',
		date: ''
	}
]

const interval = 6000

const QuotesSlide = () => {
	const [index, setIndex] = useState(0)
	const timerRef = useRef<number | null>(null)

	const stop = useCallback(() => {
		if (timerRef.current !== null) {
			clearTimeout(timerRef.current)
			timerRef.current = null
		}
	}, [])

	const next = useCallback(() => {
		setIndex((i) => (i + 1) % slides.length)
	}, [])

	const prev = useCallback(() => {
		setIndex((i) => (i - 1 + slides.length) % slides.length)
	}, [])

	const start = useCallback(() => {
		stop()
		if (slides.length <= 1) return
		timerRef.current = window.setTimeout(next, interval)
	}, [next, stop])

	useEffect(() => {
		start()
		return () => stop()
	}, [index, start, stop])

	useEffect(() => {
		setIndex(0)
	}, [slides.length])

	return (
		<div
			className="w-full max-w-5xl mx-auto px-4"
			onMouseEnter={() => stop()}
			onMouseLeave={() => start()}
			onFocus={() => stop()}
			onBlur={() => start()}
			aria-roledescription="carousel"
			aria-label="Quote testimonials"
		>
			<div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 shadow-xl h-[430px] md:h-[460px]">
				{slides.map((src, i) => (
					<div
						key={i}
						className={`absolute inset-0 transition-all duration-700 ease-out ${i === index ? 'opacity-100 translate-y-0 z-10' : 'opacity-0 translate-y-2 z-0'
							}`}
						aria-hidden={i !== index}
					>
						<div className="h-full w-full px-12 md:px-20 lg:px-24 py-8 md:py-10 flex flex-col">
							<div className="flex-1 flex items-center">
								<blockquote className="relative w-full max-w-3xl mx-auto text-lg md:text-2xl leading-relaxed font-medium text-slate-800 px-8 md:px-10">
									<span className="absolute left-0 -top-6 text-5xl md:text-6xl leading-none text-slate-300 font-serif select-none" aria-hidden="true">
										“
									</span>
									{src.text}
									<span className="absolute right-0 -bottom-8 text-5xl md:text-6xl leading-none text-slate-300 font-serif select-none" aria-hidden="true">
										”
									</span>
								</blockquote>
							</div>
							<div className="mt-3 border-t border-slate-200 pt-4">
								<p className="text-sm md:text-base font-semibold tracking-wide text-slate-900 uppercase">{src.name}</p>
								{src.date && (
									<p className="text-xs md:text-sm text-slate-500 mt-1">{src.date}</p>
								)}
							</div>
						</div>
					</div>
				))}

				{slides.length > 1 && (
					<>
						<button
							type="button"
							onClick={prev}
							aria-label="Previous quote"
							className="absolute left-5 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/85 hover:bg-white text-slate-700 border border-slate-200 shadow-sm transition flex items-center justify-center cursor-pointer"
						>
							<svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 20 20" fill="none">
								<path d="M12.5 4.5L7 10l5.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
						<button
							type="button"
							onClick={next}
							aria-label="Next quote"
							className="absolute right-5 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/85 hover:bg-white text-slate-700 border border-slate-200 shadow-sm transition flex items-center justify-center cursor-pointer"
						>
							<svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 20 20" fill="none">
								<path d="M7.5 4.5L13 10l-5.5 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							</svg>
						</button>
					</>
				)}

				<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 items-center justify-center w-auto px-2 z-20">
					{slides.map((_, i) => (
						<button
							key={i}
							type="button"
							aria-label={`Show slide ${i + 1}`}
							className={`h-2.5 rounded-full p-0 transition-all duration-300 focus:outline-none ring-2 ring-transparent focus:ring-blue-300 ${i === index ? 'w-8 bg-slate-800' : 'w-2.5 bg-white/90 border border-slate-300 hover:bg-slate-200'
								}`}
							onClick={() => setIndex(i)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
export default QuotesSlide;