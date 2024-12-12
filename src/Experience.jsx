import { Html, PresentationControls, Environment, Float} from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { TextureLoader } from 'three'
import Embed from './Embed'

export default function Experience() {
    const shadowsTableTexture = useLoader(TextureLoader, './shadowsTable.png');
    const shadowsBookTexture = useLoader(TextureLoader, './shadowsBook.png');
    const shadowsPianoButtonsTexture = useLoader(TextureLoader, './shadowsPianoButtons.png');
    const shadowsPianoKeysTexture = useLoader(TextureLoader, './shadowsPianoKeys.png');
    const shadowsPianoBlackKeysTexture = useLoader(TextureLoader, './shadowsPianoBlackKeys.png');

    const wholeScene = useLoader(GLTFLoader, './wholescene.glb');

    return <>
        <Environment preset="warehouse"/>
        <color args={['#22133b']} attach="background" />

        <Float
            speed={1}
            rotationIntensity={0.2}
            floatIntensity={-0.05}
        >
            <PresentationControls
                global 
                polar={[-0.1, 0.1]} // Y axis dragging limits
                azimuth={[-0.1, 0.1]} // X axis dragging limits
                config={{ mass: 2, tension: 400 }} // Elastic drag effect
                snap={{ mass: 4, tension: 400 }} // Returns objects' original position
            >

                <primitive
                    object={wholeScene.scene}
                    position={ [ 0, 0, -2 ] }
                    rotation={ [ 85 * (Math.PI / 180), 0, 0 ]}
                >   
                    <Html
                        className="htmlScreenVertical"
                        scale={0.1}
                        transform
                        rotation={ [ -90 * (Math.PI / 180), 0, 0 ]}
                        position={ [ 0, 0.10, 0.004 ] }
                        zIndexRange={[1, 0]}
                    >
                        <Embed />
                    </Html>
                </primitive>

                {/* Table shadow */}
                <mesh position={[-0.05, -0.1, -2.1]} rotation={[-5 * (Math.PI / 180), 0, 0]}>
                    <planeGeometry args={[21, 21]} />
                    <meshBasicMaterial map={shadowsTableTexture} transparent={true} opacity={0.7}/>
                </mesh>

                {/* Book shadow */}
                <mesh position={[0.02, -0.03, -1.83]} rotation={[-5 * (Math.PI / 180), 0, 0]}>
                    <planeGeometry args={[21, 21]} />
                    <meshBasicMaterial map={shadowsBookTexture} transparent={true} opacity={0.7}/>
                </mesh>

                {/* Piano buttons shadow */}
                <mesh position={[0.1, -0.05, -1.44]} rotation={[-5 * (Math.PI / 180), 0, 0]}>
                    <planeGeometry args={[21, 21]} />
                    <meshBasicMaterial map={shadowsPianoButtonsTexture} transparent={true} opacity={0.7}/>
                </mesh>

                {/* Piano white keys shadow */}
                <mesh position={[-0.08, -0.05, -1.75]} rotation={[-5 * (Math.PI / 180), 0, 0]}>
                    <planeGeometry args={[21, 21]} />
                    <meshBasicMaterial map={shadowsPianoKeysTexture} transparent={true} opacity={0.7}/>
                </mesh>

                {/* Piano black keys shadow */}
                <mesh position={[-0.03, -0.07, -1.52]} rotation={[-5 * (Math.PI / 180), 0, 0]}>
                    <planeGeometry args={[21, 21]} />
                    <meshBasicMaterial map={shadowsPianoBlackKeysTexture} transparent={true} opacity={0.5}/>
                </mesh>
            </PresentationControls>
        </Float>
    </>
}