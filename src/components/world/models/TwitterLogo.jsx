import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { RigidBody, CuboidCollider } from "@react-three/rapier";

export function Twitter(props) 
{
  const { nodes, materials } = useGLTF("./assets/models/world/logo_twitter.glb")
  const ref = useRef()

  return (
    <>
        <RigidBody
            // colliders="hull"
            colliders={ false }
            gravityScale={ 1 }
            // friction={ 1 }
            restitution={ 0.5 }
            ref={ ref }
            canSleep={ false }
            {...props}
    >
            <group  dispose={null}>
                <group position={ [ 0, - 12.5, 0 ] }  rotation={[Math.PI / 2, 0, 0]}>
                    <group rotation={[-Math.PI, 0, 0]}>
                    <group rotation={[0, 0, -0.698]}>
                        <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Line043_15_-_Default_0"].geometry}
                        material={materials["15_-_Default"]}
                        position={[-35.954, 35.421, 0]}
                        />
                    </group>
                    </group>
                </group>
            </group>
            <CuboidCollider 
                args={ [ 4.5, 4, 2 ] }
                position={ [ 0, 1, 0 ] } 
            />
        </RigidBody>
    </>
  )
}

useGLTF.preload("./assets/models/world/logo_twitter.glb");


