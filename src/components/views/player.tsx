import * as THREE from "three"
import { useRef } from "react"
import { useThree, useFrame } from "@react-three/fiber"
import { useKeyboardControls } from "@react-three/drei"
import { RigidBody, CapsuleCollider } from "@react-three/rapier"

const SPEED = 10
const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()
const upDownVector = new THREE.Vector3()

export function Player() {

	const ref = useRef<THREE.Mesh>()
	const { camera } = useThree();

	const [, keyboardState] = useKeyboardControls()

	useFrame(() => {

		const {
			forward,
			backward,
			left,
			right,
			up,
			down
		} = keyboardState();

		// Look at
		camera.lookAt(camera.position.x, 0, camera.position.z - 4)

		// update placement
		camera.position.set(...ref.current.translation());

		// movement
		frontVector.set(0, 0, Number(backward) - Number(forward))
		sideVector.set(Number(left) - Number(right), 0, 0)
		upDownVector.set(0, Number(up) - Number(down), 0).normalize().multiplyScalar(SPEED);
		direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED);
		ref.current.setLinvel({ x: direction.x, y: upDownVector.y, z: direction.z })
	})

	return (
		<RigidBody ref={ref} colliders={false} mass={1} type="dynamic" position={[0, 3, 10]} enabledRotations={[false, false, false]}>
			<CapsuleCollider args={[0.75, 0.5]} />
		</RigidBody>
	)
}
