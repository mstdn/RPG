import * as THREE from "three"
import { useTexture } from "@react-three/drei"

export function Ground(props) 
{
  // const water = useTexture('./assets/images/water.png')
  // water.wrapS = water.wrapT = THREE.RepeatWrapping
  const sand = useTexture('./assets/images/sand.jpg')
  sand.wrapS = sand.wrapT = THREE.RepeatWrapping

  return (
    <>
      <group>
        {/* <mesh receiveShadow position={ [ 0, - 20, 0 ] } rotation-x={ - Math.PI / 2 }>
          <planeGeometry args={ [ 2000, 2000 ] } />
          <meshStandardMaterial map={ water } map-repeat={ [ 128, 128 ] } transparent opacity={ 0.8 } color="#add9ff" />
        </mesh> */}
        <mesh receiveShadow position={ [ 0, - 31, 0 ] } rotation-x={ - Math.PI / 2 }>
          <planeGeometry args={ [ 2000, 2000 ] } />
          <meshStandardMaterial map={ sand } map-repeat={ [ 8, 8 ] } color="white" />
        </mesh>
      </group>
    </>
  )
}

// useTexture.preload('./assets/images/water.png')
useTexture.preload('./assets/images/sand.jpg')