import { RigidBody } from "@react-three/rapier";

export function Ground() {
	return (
		<RigidBody colliders='cuboid' type="fixed">
			<mesh position={[0, -1, 0]} >
				<boxGeometry args={[1000, 1, 1000]} />
				<meshStandardMaterial color={'green'} />
			</mesh>
		</RigidBody>
	)
}