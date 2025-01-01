import React from 'react';
import { Text3D } from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils.js';

export default function HeroText({ isMobile }) {
	return (
		<>
			<group
				rotation-y={isMobile ? 0 : degToRad(30)}
				position={[isMobile ? -1.25 : -3, isMobile ? 2.5 : 0.8, 1]}
				scale={isMobile ? 0.9 : 1}
			>
				<Text3D
					font={'fonts/Inter_Medium_Regular.json'}
					scale={0.4}
					lineHeight={0.7}
					height={0.3}
					outlineColor={'red'}
					outlineWidth={0.4}
					textAlign='left'
					anchorY={'bottom'}
					curveSegments={128}
					brevelSegments={30}
					bevelEnabled
					bevelSize={0.05}
					bevelThickness={0.02}
					letterSpacing={0.2}
				>
					{`CARL\nMOODIE`}
					<meshStandardMaterial color={0x915eff} />
				</Text3D>
				<Text3D
					font={'fonts/Inter_Medium_Regular.json'}
					scale={0.1}
					lineHeight={0.8}
					height={0.1}					
					textAlign='left'
					anchorY={'bottom'}
					letterSpacing={0.2}
					position={[.02, -0.85, .1]} 
				>
					{`I am a data analyst with a passion\nfor transforming data into\ncompelling visual experiences.`}
					<meshStandardMaterial color={0xffffff} emissive={0xffffff}
						emissiveIntensity={7} />
				</Text3D>
			</group>
		</>
	);
}
