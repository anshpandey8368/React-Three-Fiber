import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Cyl = () => {
    
    const texture = useTexture("/finalImage.jpg");
    const cyl = useRef(null);
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta;
    });
    
    return (
        <group rotation={[0, 1.4, 0.5]}>
            <mesh ref={cyl}>
                <cylinderGeometry args={[2, 2, 2, 60, 60, true]} />
                <meshStandardMaterial 
                    map={texture} 
                    transparent={true} 
                    side={THREE.DoubleSide}
                />
            </mesh>
        </group>
    )
}

export default Cyl;
