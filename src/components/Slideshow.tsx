import { useEffect, useRef, useState } from 'react'

type Props = {
	images: string[]
	interval?: number // ms
}

export default function Slideshow({ images, interval = 4000 }: Props) {
	const slides = images && images.length > 0 ? images : [];
	const [index, setIndex] = useState(0)
	const timerRef = useRef<number | null>(null)

	useEffect(() => {
		start()
		return () => stop()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [index])

	useEffect(() => {
		setIndex(0)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [slides.length])

	function start() {
		stop()
		if (!slides || slides.length <= 1) return
		timerRef.current = window.setTimeout(() => {
			setIndex((i) => (i + 1) % slides.length)
		}, interval)
	}

	function stop() {
		if (timerRef.current) {
			clearTimeout(timerRef.current)
			timerRef.current = null
		}
	}

	return (
		<div
			className="flex-1 flex justify-center items-center max-w-[600px] relative"
			onMouseEnter={() => stop()}
			onMouseLeave={() => start()}
			aria-roledescription="carousel"
		>
			{/* stacked slides for fade transition - fixed box and clip overflow so images are contained */}
			<div className="w-full max-w-[600px] h-[320px] md:h-[420px] relative overflow-hidden rounded-lg bg-gray-100">
						{slides.map((src, i) => (
							<div
								key={i}
								className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
									i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
								}`}
							>
								<div className="w-full h-full flex items-center justify-center">
									<img
										src={src}
										alt={`slide-${i}`}
										loading="lazy"
										className="min-w-full min-h-full object-cover"
									/>
								</div>
							</div>
						))}

				<div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 items-center justify-center w-auto px-2 z-20">
					{slides.map((_, i) => (
						<button
							key={i}
							aria-label={`Show slide ${i + 1}`}
							className={`w-3.5 h-3.5 rounded-full p-0 shadow-sm focus:outline-none ring-2 ring-transparent focus:ring-blue-300 ${i === index ? 'bg-blue-600' : 'bg-white/80 border border-gray-300'
								}`}
							onClick={() => setIndex(i)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
