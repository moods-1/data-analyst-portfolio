import React, { useRef, useEffect, useState, useCallback } from 'react';
import { CameraControls } from '@react-three/drei';

import { CarlAvatar } from './CarlAvatar';
import HeroText from './HeroText';
import Charts from './Charts';
import { degToRad } from 'three/src/math/MathUtils.js';
import Floor from './Floor';

export default function HeroExperience() {
	const controls = useRef();
	const meshFitCameraHome = useRef();
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

	const fitCamera = useCallback(async () => {
		if (!isMobile) controls.current.fitToBox(meshFitCameraHome.current, true);
		setIsMobile(window.innerWidth < 600);
	}, [isMobile]);

	const intro = useCallback(async () => {
		controls.current.dolly(-10); // Move the camera back 22
		controls.current.smoothTime = 0.5; // Animation duration
		fitCamera();
	}, [fitCamera]);

	useEffect(() => {
		window.addEventListener('resize', fitCamera, false);
		return () => window.removeEventListener('resize', fitCamera, false);
	}, [fitCamera]);

	useEffect(() => {
		intro();
	}, [intro]);

	return (
		<>
			<CameraControls
				ref={controls}
				minDistance={6}
				maxDistance={25}
				maxPolarAngle={Math.PI / 2}
				minPolarAngle={Math.PI / 3.5}
				minAzimuthAngle={degToRad(-45)}
				maxAzimuthAngle={degToRad(60)}
			/>
			<mesh ref={meshFitCameraHome} position-z={1.5} visible={false}>
				<boxGeometry args={[isMobile ? 12 : 7, 2, 2]} />
				<meshBasicMaterial color='orange' transparent opacity={0.5} />
			</mesh>
			<HeroText isMobile={isMobile} />
			<group position={[isMobile ? -3 : -0.8, isMobile ? -1 : 0, 0]}>
				<CarlAvatar />
				<Charts />
			</group>
			<Floor isMobile={isMobile} />
		</>
	);
}
