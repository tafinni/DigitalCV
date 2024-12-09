import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { Loader } from '@react-three/drei'
import { Suspense } from 'react'
import { Analytics } from '@vercel/analytics/react'

const root = ReactDOM.createRoot(document.querySelector('#root'))

function App(){
    return (
    <>
        <Suspense fallback={null}>
            <Canvas
                className="r3f"
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 2000,
                    position: [ 0, 0.2, 5 ],
                }}
            >
                <Experience/>
            </Canvas>
        </Suspense>
        <Loader />
        <Analytics />
    </>
    )
}

root.render(<App />);
