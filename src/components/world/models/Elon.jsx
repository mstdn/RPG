import React, { useRef } from "react"
import { useGLTF, useAnimations } from "@react-three/drei"
import { RigidBody, CuboidCollider } from "@react-three/rapier"
import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"
import useSound from "use-sound"

export function Elon(props) 
{
    const { char, pos } = props
    const group = useRef()
    const elon = useRef()
    const { nodes, materials, animations } = useGLTF("./assets/models/world/elon.glb")
    const [ playElonSound ] = useSound('./assets/audio/musk.wav', { volume: 1, interrupt: true })
    const { actions } = useAnimations(animations, group)
    let play = true

    useFrame(() =>
    {
        actions["mixamo.com"].play()

        if(char.current)
        {
            const elonPosition = elon.current.translation()
            const elonVector = new Vector3(elonPosition.x, elonPosition.y, elonPosition.z)
            const playerPosition = char.current.translation()
            const position = new Vector3(playerPosition.x, playerPosition.y, playerPosition.z)
            const distance = elonVector.distanceTo(position)

            const elonLocation = new Vector3(pos[0], pos[1], pos[2])
            
            // console.log(elonLocation)            
            
            if( distance < 5 && play )
            {
                playElonSound()
                play = false
            } 
            else if( distance > 5 && !play )
            {
                play = true
            }

            // if(elonPosition !== elonLocation)
            // {
            //     // console.log("flying!")
            //     // console.log(elonPosition.y)
            //     // console.log(elonLocation)
                
            // }
        }

        
    })

  return (
        <RigidBody
            ref={ elon }
            colliders={ false }
            // colliders="hull"
            // gravityScale={ 2 }
            // friction={ 2 }
            canSleep={ false }
            // type="fixed" 
            {...props}
            
        >
            <group scale={ 0.03 } position={ [ 0, - 2.6, 0 ]} ref={group}  dispose={null}>
                    <group name="Object_2">
                    <group name="RootNode">
                        <group name="Object_4">
                        <primitive object={nodes._rootJoint} />
                        <skinnedMesh
                            castShadow
                            name="Object_7"
                            geometry={nodes.Object_7.geometry}
                            material={materials.bow_tie}
                            skeleton={nodes.Object_7.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            name="Object_9"
                            geometry={nodes.Object_9.geometry}
                            material={materials.Blazer}
                            skeleton={nodes.Object_9.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            name="Object_11"
                            geometry={nodes.Object_11.geometry}
                            material={materials.Henley_Longsleeve}
                            skeleton={nodes.Object_11.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            name="Object_13"
                            geometry={nodes.Object_13.geometry}
                            material={materials.Jeans}
                            skeleton={nodes.Object_13.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            name="Object_15"
                            geometry={nodes.Object_15.geometry}
                            material={materials.Boots}
                            skeleton={nodes.Object_15.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            name="Object_17"
                            geometry={nodes.Object_17.geometry}
                            material={materials.Std_Skin_Head}
                            skeleton={nodes.Object_17.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            name="Object_19"
                            geometry={nodes.Object_19.geometry}
                            material={materials.embed_hair_male}
                            skeleton={nodes.Object_19.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            name="Object_21"
                            geometry={nodes.Object_21.geometry}
                            material={materials.eyes}
                            skeleton={nodes.Object_21.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            name="Object_23"
                            geometry={nodes.Object_23.geometry}
                            material={materials["embed_hair_male.1"]}
                            skeleton={nodes.Object_23.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            name="Object_25"
                            geometry={nodes.Object_25.geometry}
                            material={materials.Std_Skin_Head}
                            skeleton={nodes.Object_25.skeleton}
                        />
                        <skinnedMesh
                            castShadow
                            name="Object_26"
                            geometry={nodes.Object_26.geometry}
                            material={materials.Fingernail}
                            skeleton={nodes.Object_26.skeleton}
                        />
                        <group
                            name="Object_6"
                            position={[0, -0.733, 150.391]}
                            rotation={[-0.48, -0.002, -3.131]}
                        />
                        <group name="Object_8" rotation={[Math.PI / 2, 0, 0]} />
                        <group name="Object_10" rotation={[Math.PI / 2, 0, 0]} />
                        <group name="Object_12" rotation={[Math.PI / 2, 0, 0]} />
                        <group name="Object_14" rotation={[Math.PI / 2, 0, 0]} />
                        <group
                            name="Object_16"
                            position={[0, -2.901, 158.421]}
                            rotation={[Math.PI / 2, 0, 0]}
                        />
                        <group
                            name="Object_18"
                            position={[0, -2.592, 169.55]}
                            rotation={[1.679, 0, 0]}
                        />
                        <group
                            name="Object_20"
                            position={[-0.1, -2.423, 166.644]}
                            rotation={[Math.PI / 2, 0, 0]}
                        />
                        <group
                            name="Object_22"
                            position={[0, -2.901, 162.373]}
                            rotation={[Math.PI / 2, 0, 0]}
                        />
                        <group
                            name="Object_24"
                            position={[0, 0, 0.542]}
                            rotation={[Math.PI / 2, 0, 0]}
                        />
                        <group
                            name="bow_tie"
                            position={[0, -0.733, 150.391]}
                            rotation={[-0.48, -0.002, -3.131]}
                        />
                        <group name="Blazer" rotation={[Math.PI / 2, 0, 0]} />
                        <group
                            name="Henley_Longsleeve"
                            rotation={[Math.PI / 2, 0, 0]}
                        />
                        <group name="Jeans" rotation={[Math.PI / 2, 0, 0]} />
                        <group name="Boots" rotation={[Math.PI / 2, 0, 0]} />
                        <group
                            name="CC_Base_Body"
                            position={[0, -2.901, 158.421]}
                            rotation={[Math.PI / 2, 0, 0]}
                        >
                            <group name="CC_Base_Body1" />
                            <group
                            name="Hair_a"
                            position={[0, 11.13, -0.309]}
                            rotation={[0.108, 0, 0]}
                            />
                            <group
                            name="CC_Base_Eye"
                            position={[-0.1, 8.224, -0.478]}
                            />
                            <group name="Hair" position={[0, 3.953, 0]} />
                        </group>
                        <group
                            name="hands"
                            position={[0, 0, 0.542]}
                            rotation={[Math.PI / 2, 0, 0]}
                        />
                        </group>
                    </group>
                    </group>
            </group>
            <CuboidCollider 
                args={ [ 1, 2.6, 1 ] }
                position={ [ 0, 0, 0 ] } 
            />
        </RigidBody>    
  );
}

useGLTF.preload("./assets/models/world/elon.glb");