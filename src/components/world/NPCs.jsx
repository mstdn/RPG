import { useAnimations, useGLTF } from "@react-three/drei"
import { useFrame, useGraph } from "@react-three/fiber"
import { RigidBody } from "@react-three/rapier"
import { useEffect, useMemo, useRef, useState } from "react"
import { Vector3 } from "three"
// import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js'
import { SkeletonUtils } from "three-stdlib";
import useSound from "use-sound"

const ElonMusk = (props) => 
{
    const group = useRef()
    const { char, anim, elon, sound, hasAudio, repeat, played, dis } = props
    const [ playSnowmanSound ] = useSound(sound, { volume: 1, interrupt: true })
    
    // const { animations } = useGLTF("./assets/models/world/elon.glb")
    // const { actions } = useAnimations(animations, group)
    // const model = useGLTF("./assets/models/world/elon.glb")
    // const scene = useMemo(() =>
    // {
    //     return SkeletonUtils.clone(model.scene)
    // }, [])

    const { scene, materials, animations } = useGLTF(
        "./assets/models/world/elon.glb"
      )
    // Skinned meshes cannot be re-used in threejs without cloning them
    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
    // useGraph creates two flat object collections for nodes and materials
    const { nodes } = useGraph(clone);
    const { actions } = useAnimations(animations, group);

    // scene.traverse((child) => {
    //     if (child.isMesh) {
    //       child.castShadow = true;
    //       child.receiveShadow = true;
    //     }
    //   })
    
    //   useFrame(() =>
    //   {
    //       if(char.current)
    //       {
    //           const position = elon.current.translation()
    //           const pos = new Vector3(position.x, position.y, position.z)
    //           const charPosition = char.current.translation()
    //           const distance = pos.distanceTo(new Vector3(charPosition.x, charPosition.y, charPosition.z))
              
    //           if(distance < dis && hasAudio && !played)
    //           {
    //             playSnowmanSound()
    //             elon.current.played = true
    //           } 
    //           else if(distance > dis && hasAudio && repeat && played)
    //           {
    //             elon.current.played = false
    //           }
    //       }
    //   })
    
    // useEffect(() =>
    // {
    //     actions["mixamo"].play()
    // })

    return(
        <>
        <RigidBody
            ref={ elon }
            colliders={ false }
            // colliders="hull"
            gravityScale={ 0.5 }
            friction={ 0.5 }
            canSleep={ false }
            // type="fixed" 
            
        >
            <group scale={ 0.04 } position={ [ 0, 0, - 3 ]} ref={group}  dispose={null}>
                    <group rotation={[Math.PI / 2, 0, 0]} name="Object_2">
                    <group name="RootNode">
                        <group name="Object_4">
                        <primitive object={nodes._rootJoint} />
                        <skinnedMesh
                            name="Object_7"
                            geometry={nodes.Object_7.geometry}
                            material={materials.bow_tie}
                            skeleton={nodes.Object_7.skeleton}
                        />
                        <skinnedMesh
                            name="Object_9"
                            geometry={nodes.Object_9.geometry}
                            material={materials.Blazer}
                            skeleton={nodes.Object_9.skeleton}
                        />
                        <skinnedMesh
                            name="Object_11"
                            geometry={nodes.Object_11.geometry}
                            material={materials.Henley_Longsleeve}
                            skeleton={nodes.Object_11.skeleton}
                        />
                        <skinnedMesh
                            name="Object_13"
                            geometry={nodes.Object_13.geometry}
                            material={materials.Jeans}
                            skeleton={nodes.Object_13.skeleton}
                        />
                        <skinnedMesh
                            name="Object_15"
                            geometry={nodes.Object_15.geometry}
                            material={materials.Boots}
                            skeleton={nodes.Object_15.skeleton}
                        />
                        <skinnedMesh
                            name="Object_17"
                            geometry={nodes.Object_17.geometry}
                            material={materials.Std_Skin_Head}
                            skeleton={nodes.Object_17.skeleton}
                        />
                        <skinnedMesh
                            name="Object_19"
                            geometry={nodes.Object_19.geometry}
                            material={materials.embed_hair_male}
                            skeleton={nodes.Object_19.skeleton}
                        />
                        <skinnedMesh
                            name="Object_21"
                            geometry={nodes.Object_21.geometry}
                            material={materials.eyes}
                            skeleton={nodes.Object_21.skeleton}
                        />
                        <skinnedMesh
                            name="Object_23"
                            geometry={nodes.Object_23.geometry}
                            material={materials["embed_hair_male.1"]}
                            skeleton={nodes.Object_23.skeleton}
                        />
                        <skinnedMesh
                            name="Object_25"
                            geometry={nodes.Object_25.geometry}
                            material={materials.Std_Skin_Head}
                            skeleton={nodes.Object_25.skeleton}
                        />
                        <skinnedMesh
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
        </RigidBody>
        </>
    )
}

export default function NPCs(props)
{
    const { char } = props
    const Elon1 = useRef()
    const Elon2 = useRef()

    return(
        <>
            <ElonMusk 
                position={ [ 25, 10, - 10 ] } 
                anim={ "mixamo" } 
                scale={ 1 }
                rotation-y={ Math.PI * 1 }
                elon={ Elon1 }
                char={ char }
                sound={ './assets/audio/snow1.wav' }
                hasAudio={ true }
                dis={ 6 }
                repeat={ false }
                played={ false }
            />
            <ElonMusk 
                position={ [ 3.7, - 3, 6.9 ] } 
                anim={ "mixamo" } 
                scale={ 1 }
                rotation-y={ Math.PI * 1 }
                elon={ Elon2 }
                char={ char }
                sound={ './assets/audio/snow1.wav' }
                hasAudio={ true }
                dis={ 6 }
                repeat={ false }
                played={ false }
            />
            
        </>
    )
}

useGLTF.preload("./assets/models/world/elon.glb")