import React, { useRef } from 'react'
import { PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'


const Cube = () => {
    const textRef = useRef()
    useFrame(state => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 0.5))

    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial  >
                <RenderTexture attach='map'>
                    <PerspectiveCamera
                        makeDefault
                        position={[0, 0, 5]}
                    />
                    <color attach='background' args={["#9c2f83"]} />
                    <Text ref={textRef} fontSize={1} color='#555'>
                        hello
                    </Text>
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )
}

export default Cube