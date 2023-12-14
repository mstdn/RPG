import React, { forwardRef, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { RigidBody, CuboidCollider } from '@react-three/rapier';


const Rock1 = forwardRef((props, ref) =>
{
  const { nodes, materials } = useGLTF("./assets/models/world/rocks/rock-1.glb")
  return(
    <>
      <RigidBody
          ref={ ref }
          colliders={ false }
          gravityScale={ 1.5 }
          restitution={ 0.5 }
          canSleep={ false }
          {...props}
      >
          <group position={ [ 0, - 1.5, 0 ] }  dispose={null}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rock_2.geometry}
              material={materials.Atlas}
              scale={ 200 }
            />
        </group>
        <CuboidCollider 
            args={ [ 2, 2, 2 ] }
            position={ [ 0, 0, 0 ] } 
        />
      </RigidBody>
    </>
  )
})

const Rock2 = forwardRef((props, ref) =>
{
  const { nodes, materials } = useGLTF("./assets/models/world/rocks/rock-2.glb")
  return(
    <>
      <RigidBody
          ref={ ref }
          // colliders="hull"
          colliders={ false }
          gravityScale={ 1 }
          // restitution={ 0.2 }
          canSleep={ false }
          {...props}
      >
          <group position={ [ 0, - 2.8, 0 ] }  dispose={null}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rock_Large_1.geometry}
              material={materials.Atlas}
              scale={200}
            />
        </group>
        <CuboidCollider 
            args={ [ 7, 2.8, 6 ] }
            position={ [ 0, 0, 0 ] } 
        />
      </RigidBody>
    </>
  )
})

export default function Rocks()
{
  const Rock = useRef()
  const BigRock = useRef()

  return(
    <>
        <Rock1 ref={ Rock } position={ [ 15, 8, - 62 ] } scale={ 1 } />
        <Rock2 ref={ BigRock } position={ [ - 16, 7.9, - 92 ] } scale={ 1 } />
    </>
  )
}


useGLTF.preload("./assets/models/world/rocks/rock-1.glb")
useGLTF.preload("./assets/models/world/rocks/rock-2.glb")