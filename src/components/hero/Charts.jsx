import { useVideoTexture } from '@react-three/drei';
import React from 'react';
import { degToRad } from 'three/src/math/MathUtils.js';
import * as THREE from 'three';

export default function Charts() {
    const texture = useVideoTexture('video/pieCharts.mp4');
	return (
		<group>
			<mesh rotation-y={degToRad(-30)} position={[3, 0.5, 0]} >
				<planeGeometry args={[2, 1.6]} />
				<meshStandardMaterial map={texture} side={THREE.DoubleSide} />
			</mesh>
		</group>
	);
}
