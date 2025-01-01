import React from 'react';
import { MeshReflectorMaterial } from '@react-three/drei';

export default function Floor({ isMobile }) {
	return (
		<mesh position-y={isMobile ? -2.3 : -1} rotation-x={-Math.PI / 2}>
			<planeGeometry args={[100, 100]} />
			<MeshReflectorMaterial
				blur={[100, 100]}
				resolution={2048}
				mixBlur={10}
				mixStrength={2}
				roughness={1}
				depthScale={1}
				minDepthThreshold={0.4}
				maxDepthThreshold={1.4}
				color='#555'
				metalness={0.5}
				args={[100, 100]}
			/>
		</mesh>
	);
}
