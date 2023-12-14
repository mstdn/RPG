import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { RigidBody, CuboidCollider } from "@react-three/rapier";

export function XLogo(props) 
{
  const { nodes, materials } = useGLTF("./assets/models/world/x_logo_twitter.glb")
  const ref = useRef()

  return (
    <>
        <RigidBody
            // colliders="hull"
            colliders={ false }
            gravityScale={ 0.8 }
            friction={ 0.8 }
            restitution={ 0.5 }
            ref={ ref }
            canSleep={ false }
            {...props}
    >
                <group position={ [ 0, 1, 0 ] }  dispose={null}>
                    <group rotation={[-Math.PI / 2, 0, 0]} scale={1}>
                        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube001_Material001_0.geometry}
                            material={materials["Material.001"]}
                            scale={[1, 1, 1.2]}
                        />
                        </group>
                    </group>
                </group>
                <CuboidCollider 
                    args={ [ 2, 8, 8 ] }
                    position={ [ 0, 1, 0 ] } 
                />
        </RigidBody>
    </>
  )
}

useGLTF.preload("./assets/models/world/x_logo_twitter.glb");


