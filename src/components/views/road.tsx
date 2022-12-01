import { useRef } from "react";
import type { V2 } from "./types";
import { Mesh } from "three";

export function Road({
	position = [0, 0]
}: {
	position?: V2
}) {
	const size = 0.025;
	const offset = -0.5 + (size / 2);
	const mesh = useRef<Mesh>(null!)
	return (
		<mesh
			position={[position[0], offset, position[1]]}
			ref={mesh}>
			<boxGeometry args={[1, size, 1]} />
			<meshStandardMaterial color={'#444'} />
		</mesh >
	)
}
