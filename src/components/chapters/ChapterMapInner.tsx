'use client';

import { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { Chapter } from '@/content/types';

// Brand marker: a crab-colored pin drawn as a divIcon so we avoid Leaflet's
// default image assets (which 404 under bundlers) and stay on-palette. Leaflet
// positions the icon via iconAnchor, so the dot itself must NOT add its own
// translate — doing so double-offsets it and makes it slide during zoom.
const markerHtml = (active: boolean) => `
	<span style="
		display:block;width:22px;height:22px;border-radius:9999px;
		background:${active ? '#204ECF' : '#F26749'};
		border:3px solid #ffffff;
		box-shadow:0 2px 6px rgba(0,0,0,0.35);
		box-sizing:border-box;
	"></span>`;

const makeIcon = (active: boolean) =>
	L.divIcon({
		html: markerHtml(active),
		className: 'chapter-marker',
		iconSize: [22, 22],
		iconAnchor: [11, 11],
	});

const prefersReducedMotion = () =>
	typeof window !== 'undefined' &&
	window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Recenters the map when the selected chapter changes. */
const Recenter = ({ chapter }: { chapter: Chapter | null }) => {
	const map = useMap();
	useEffect(() => {
		if (!chapter) return;
		const animate = !prefersReducedMotion();
		map.setView([chapter.coordinates.lat, chapter.coordinates.lng], map.getZoom(), {
			animate,
		});
	}, [chapter, map]);
	return null;
};

/**
 * Leaflet measures the container once on init. If the wrapper's size settles
 * after that (fonts, layout, the dynamic-import placeholder swap), the map's
 * internal pixel origin is stale and zooming jumps/snaps. Recompute the size
 * after mount and on container resize so zoom math stays correct.
 */
const SizeGuard = () => {
	const map = useMap();
	useEffect(() => {
		const container = map.getContainer();
		const fix = () => map.invalidateSize({ animate: false });
		const raf = requestAnimationFrame(fix);
		const ro = new ResizeObserver(fix);
		ro.observe(container);
		return () => {
			cancelAnimationFrame(raf);
			ro.disconnect();
		};
	}, [map]);
	return null;
};

type Props = {
	chapters: Chapter[];
	selectedSlug: string | null;
	onSelect: (slug: string) => void;
};

export default function ChapterMapInner({ chapters, selectedSlug, onSelect }: Props) {
	const reduced = prefersReducedMotion();

	// Center on the selected chapter, else the first, else a sensible US-NE default.
	const center = useMemo<[number, number]>(() => {
		const first = chapters[0];
		return first ? [first.coordinates.lat, first.coordinates.lng] : [42.36, -71.3];
	}, [chapters]);

	const selected = chapters.find((c) => c.slug === selectedSlug) ?? null;

	return (
		<MapContainer
			center={center}
			zoom={11}
			scrollWheelZoom={true}
			zoomAnimation={!reduced}
			markerZoomAnimation={!reduced}
			fadeAnimation={!reduced}
			className="h-full w-full"
			// The map is a visual companion to the required accessible list; hide it
			// from the a11y tree so keyboard/SR users use the list (the source of truth).
			aria-hidden="true"
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{chapters.map((chapter) => (
				<Marker
					key={chapter.slug}
					position={[chapter.coordinates.lat, chapter.coordinates.lng]}
					icon={makeIcon(chapter.slug === selectedSlug)}
					eventHandlers={{ click: () => onSelect(chapter.slug) }}
				/>
			))}
			<SizeGuard />
			<Recenter chapter={selected} />
		</MapContainer>
	);
}
