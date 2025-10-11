import { useEffect, useRef, useState } from 'react'

type Props = {
  images?: string[]
  interval?: number // ms
}

export default function Slideshow({ images, interval = 4000 }: Props) {
  const defaultImages = [
    '/hero-image.jpg',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1534790566855-4cb788d389ec?auto=format&fit=crop&w=1200&q=80',
  ]
  const slides = images && images.length > 0 ? images : defaultImages
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
      {/* stacked slides for fade transition - explicit height and overflow hidden so dots sit over image */}
      <div className="w-full h-[320px] md:h-[420px] relative overflow-hidden rounded-lg">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 items-center justify-center w-auto px-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Show slide ${i + 1}`}
              className={`w-3.5 h-3.5 rounded-full p-0 shadow-sm focus:outline-none ring-2 ring-transparent focus:ring-blue-300 ${
                i === index ? 'bg-blue-600' : 'bg-white/80 border border-gray-300'
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
