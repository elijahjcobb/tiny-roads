import { KeyboardControls } from "@react-three/drei";
import { Box } from "./views/box";
import { Ground } from "./views/ground";
import { Road } from "./views/road";
import { Sky } from '@react-three/drei'
import { Canvas } from "@react-three/fiber";
import { Player } from "./views/player";
import { Physics } from "@react-three/rapier"
import { Suspense } from "react";
import { Color } from "three";

const KEY_MAP = [
	{ name: "forward", keys: ["w", "W", 'ArrowUp'] },
	{ name: "backward", keys: ["s", "S", 'ArrowDown'] },
	{ name: "left", keys: ["a", "A", 'ArrowLeft'] },
	{ name: "right", keys: ["d", "D", 'ArrowRight'] },
	{ name: "up", keys: ["Space"] },
	{ name: "down", keys: ["Shift"] },
]

export function Game() {
	return <Suspense fallback='loading'>
		<KeyboardControls
			map={KEY_MAP}>
			<Canvas shadows>
				<Sky sunPosition={[1000, 40, -1000]} />
				<ambientLight intensity={0.3} />
				<perspectiveCamera makeDefault />
				<pointLight castShadow intensity={0.8} position={[10, 10, 10]} />
				<gridHelper args={[200, 200, new Color(0x004400), new Color(0x004400)]} position={[0.5, -0.49, 0.5]} />
				<Physics gravity={[0, 0, 0]}>
					<Ground />
					<Player />
					<Box position={[2, 1]} />
					<Box position={[3, 2]} />
					<Box position={[4, 3]} />
					<Box position={[5, 4]} />
					<Box position={[6, 5]} />
					<Box position={[7, 6]} />
					<Box position={[8, 7]} />
					<Box position={[-2, -1]} />
					<Box position={[3, -2]} />
					<Box position={[4, -3]} />
					<Box position={[-5, -4]} />
					<Box position={[6, -5]} />
					<Box position={[-7, -6]} />
					<Box position={[8, -7]} />
					<Road position={[0, 0]} />
					<Road position={[1, 0]} />
					<Road position={[2, 0]} />
					<Road position={[3, 0]} />
					<Road position={[4, 0]} />
					<Road position={[5, 0]} />
					<Road position={[6, 0]} />
					<Road position={[7, 0]} />
					<Road position={[8, 0]} />
					<Road position={[9, 0]} />
					<Road position={[10, 0]} />
					<Road position={[11, 0]} />
				</Physics>
			</Canvas>
		</KeyboardControls>
	</Suspense >
}