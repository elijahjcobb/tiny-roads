import { RigidBody } from "@react-three/rapier";
import React, { useRef } from "react"
import { Mesh } from "three";
import type { V2 } from "./types";

export function Box({
	position
}: {
	position: V2;
}) {
	const mesh = useRef<Mesh>(null!)
	return (
		<RigidBody type='fixed' colliders='cuboid'>
			<mesh
				receiveShadow
				ref={mesh}
				position={[position[0], 0, position[1]]}
			>
				<boxGeometry args={[1, 1, 1]} />
				<meshStandardMaterial color={'orange'} />
			</mesh >
		</RigidBody>
	)
}