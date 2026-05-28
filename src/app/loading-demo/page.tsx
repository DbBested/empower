import { LoadingAnimation } from '@/components/LoadingAnimation';

export default function LoadingDemoPage() {
	return (
		<div className="min-h-screen w-full bg-crab flex items-center justify-center">
			<LoadingAnimation style={{ position: 'static', transform: 'none' }} />
		</div>
	);
}
