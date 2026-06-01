'use client';

import dynamic from 'next/dynamic';
import type { Chapter } from '@/content/types';

// Leaflet touches `window` at import time, so the map must never render on the
// server. This client-only wrapper defers the real react-leaflet component to
// the browser (ssr:false) and shows a calm placeholder while it loads.
const ChapterMapInner = dynamic(() => import('./ChapterMapInner'), {
	ssr: false,
	loading: () => (
		<div className="h-full w-full bg-sand-dollar/40 flex items-center justify-center">
			<span className="text-gray/70 text-sm">Loading map…</span>
		</div>
	),
});

type Props = {
	chapters: Chapter[];
	selectedSlug: string | null;
	onSelect: (slug: string) => void;
};

export const ChapterMap = (props: Props) => (
	// data-lenis-prevent stops the global Lenis smooth-scroll from capturing wheel
	// events over the map, so the wheel zooms the map instead of scrolling the page.
	<div
		data-lenis-prevent
		className="h-[340px] md:h-full min-h-[340px] w-full rounded-2xl overflow-hidden ring-1 ring-gray-200 isolate"
	>
		<ChapterMapInner {...props} />
	</div>
);
