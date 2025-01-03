import React, { useRef, useEffect } from 'react';
import { useAnimations, useFBX, useGLTF } from '@react-three/drei';
import { degToRad } from 'three/src/math/MathUtils.js';

export function CarlAvatar(props) {
	const group = useRef();
	const { nodes, materials } = useGLTF('models/carlAvatar.glb');
	const { animations: pointingAnimation } = useFBX('animations/pointing.fbx');
  pointingAnimation[0].name = 'Pointing';
  const animationTracks = pointingAnimation[0]?.tracks?.slice(1);
  pointingAnimation[0].tracks = animationTracks;
  
  const { actions } = useAnimations(pointingAnimation, group);
  
	useEffect(() => {
		actions['Pointing'].reset().play();
	}, [actions]);

	return (
		<group rotation-x={degToRad(270)} position={[2, -1, 0]} >
			<group {...props} dispose={null} ref={group}>
				<primitive object={nodes.Hips} />
				<skinnedMesh
					name='EyeLeft'
					geometry={nodes.EyeLeft.geometry}
					material={materials.Wolf3D_Eye}
					skeleton={nodes.EyeLeft.skeleton}
					morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
					morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
				/>
				<skinnedMesh
					name='EyeRight'
					geometry={nodes.EyeRight.geometry}
					material={materials.Wolf3D_Eye}
					skeleton={nodes.EyeRight.skeleton}
					morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
					morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
				/>
				<skinnedMesh
					name='Wolf3D_Head'
					geometry={nodes.Wolf3D_Head.geometry}
					material={materials.Wolf3D_Skin}
					skeleton={nodes.Wolf3D_Head.skeleton}
					morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
					morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
				/>
				<skinnedMesh
					name='Wolf3D_Teeth'
					geometry={nodes.Wolf3D_Teeth.geometry}
					material={materials.Wolf3D_Teeth}
					skeleton={nodes.Wolf3D_Teeth.skeleton}
					morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
					morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
				/>
				<skinnedMesh
					geometry={nodes.Wolf3D_Glasses.geometry}
					material={materials.Wolf3D_Glasses}
					skeleton={nodes.Wolf3D_Glasses.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.Wolf3D_Body.geometry}
					material={materials.Wolf3D_Body}
					skeleton={nodes.Wolf3D_Body.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
					material={materials.Wolf3D_Outfit_Bottom}
					skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
					material={materials.Wolf3D_Outfit_Footwear}
					skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
				/>
				<skinnedMesh
					geometry={nodes.Wolf3D_Outfit_Top.geometry}
					material={materials.Wolf3D_Outfit_Top}
					skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
				/>
			</group>
		</group>
	);
}

useGLTF.preload('models/carlAvatar.glb');