import React, { Suspense, useMemo, useCallback, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, extend, useFrame, useLoader, useThree } from '@react-three/fiber';
import CircleImg from '../assets/white-circle.png';
import { BufferAttribute } from 'three';

/*import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
extend({OrbitControls})

function CameraControls (){
    const {
        camera,
        gl: {domElement}
    } = useThree();

    const controlsRef = useRef();
    useFrame(() => controlsRef.current.update())

    return (
        <orbitControls
            ref={controlsRef}
            args={[camera, domElement]}
            autoRotate
            autoRotateSpeed={0.1}
        />
        
    );
}*/

function Points(){
    const imgTex=useLoader(THREE.TextureLoader, CircleImg);
    const bufferRef = useRef();

    let t = 0;
    let f = 0.002;
    let a = 3;
    const graph = useCallback(
        (x, z) => {
            return Math.sin(f*(x **2 + z **2 + t))*a;
        },[t, f, a])

    //[x1, y1, z1, x2, y2, z2, ...]
    const count = 100; //100 points
    const sep = 3; //each points separated by 3px
    let positions = useMemo(() => {
        let positions = []

        for(let x1 = 0; x1 < count; x1++){
            for(let z1 = 0; z1 < count; z1++){
                let x = sep * (x1 - count/2);
                let z = sep * (z1 - count/2);
                let y = 0;
                positions.push(x,y,z);
            }
        }
        return new Float32Array(positions);
    }, [count, sep, graph])

    useFrame(() => {
        t += 15
        const position = bufferRef.current.array;

        let i = 0;
        for(let x1 = 0; x1 < count; x1++){
            for(let z1 = 0; z1 < count; z1++){
                let x = sep * (x1 - count/2);
                let z = sep * (z1 - count/2);
                positions[i + 1] = graph(x,z);
                i += 3;
            }
        }    
        
        bufferRef.current.needsUpdate = true;
    })

    return (
        <points>
            <bufferGeometry attach="geometry">
                <bufferAttribute
                    ref={bufferRef}
                    attachObject={['attributes','position']}
                    array={positions}
                    count={positions.length / 3}     //[x1, y1, z1, x2, y2, z2, ...]
                    itemSize={3}
                    />
            </bufferGeometry>
            <pointsMaterial 
                attach="material"
                map={imgTex}    
                color={0xFF10F0}
                size={0.5}
                sizeAttenuation
                transparent={false}
                alphaTest={0.5}
                opacity={1.0}
            >

            </pointsMaterial>
            
        </points>
    );
}

function AnimationCanvas(){
    return (
        <Canvas colorManagement={false} camera={{position: [100, 10, 0], fov: 75 }}>
            <Suspense fallback={null}>
                <Points/>
            </Suspense>
            
        </Canvas>
    );
}

function Background() {
    return (
        <div className="anim">
            <Suspense fallback={<div>Loading...</div>}>
                <AnimationCanvas/>
            </Suspense>
        </div>
    );
}

export default Background;