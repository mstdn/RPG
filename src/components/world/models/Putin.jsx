import React, { useRef } from "react"
import { useAnimations, useFBX, useGLTF } from "@react-three/drei"
import { RigidBody, CuboidCollider } from "@react-three/rapier"
import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"
import useSound from "use-sound"

export function Putin(props) 
{
    const { char, pos } = props
    const group = useRef()
    const NPC = useRef()
    // const [ playNPCSound ] = useSound('./assets/audio/twerk.wav', { volume: 1, interrupt: true })
    const { nodes, materials, animations } = useGLTF("./assets/models/world/npcs/putin.glb")
    const { actions } = useAnimations(animations, group)
    let play = true

    // gltf.scene.traverse((child) => {
    //     if (child.isMesh) {
    //       child.castShadow = true;
    //       child.receiveShadow = true;
    //     }
    //   })

    useFrame(() =>
    {
        actions["Animation"].play()

        // if(char.current)
        // {
        //     const NPCPosition = NPC.current.translation()
        //     const NPCVector = new Vector3(NPCPosition.x, NPCPosition.y, NPCPosition.z)
        //     const playerPosition = char.current.translation()
        //     const position = new Vector3(playerPosition.x, playerPosition.y, playerPosition.z)
        //     const distance = NPCVector.distanceTo(position)               
            
        //     if( distance < 5 && play )
        //     {
        //         playNPCSound()
        //         play = false
        //     } 
        //     else if( distance > 5 && !play )
        //     {
        //         play = true
        //     }
        // }

        
    })

  return (
        <RigidBody
            ref={ NPC }
            canSleep={ false }
            colliders={ false }
            {...props}
            // colliders="hull"
            // gravityScale={ 2 }
            // friction={ 2 }
            // type="fixed" 
        >
            <group scale={ 3 } position={ [ 0, - 2.9, 0 ]} ref={group} dispose={null}>
                <group name="Sketchfab_Scene">
                    <group
                    name="Sketchfab_model"
                    position={[-0.006, 0.023, 0.127]}
                    rotation={[-1.708, 0.003, -0.025]}
                    >
                    <group
                        name="46657bcdb12f49f69cc2e7fd5e59430efbx"
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={0.01}
                    >
                        <group name="Object_2">
                        <group name="RootNode">
                            <group
                            name="Putin01_Skeleton"
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={100}
                            >
                            <group
                                name="Hips"
                                position={[-0.15, 0.031, 1.064]}
                                rotation={[0.061, 0.071, 0.131]}
                            >
                                <group
                                name="Spine"
                                position={[0, 0, 0.098]}
                                rotation={[-0.138, -0.012, -0.001]}
                                >
                                <group
                                    name="Spine1"
                                    position={[0, 0, 0.13]}
                                    rotation={[-0.064, 0, 0]}
                                >
                                    <group
                                    name="Spine2"
                                    position={[0, 0, 0.122]}
                                    rotation={[0.095, 0.008, -0.079]}
                                    >
                                    <group
                                        name="Neck"
                                        position={[0, 0, 0.156]}
                                        rotation={[0.383, -0.066, -0.022]}
                                    >
                                        <group
                                        name="Head"
                                        position={[0, 0, 0.123]}
                                        rotation={[-0.045, 0.02, -0.004]}
                                        >
                                        <group
                                            name="HeadTop_End"
                                            position={[0, -0.037, 0.226]}
                                            rotation={[-0.007, 0, 0]}
                                        />
                                        <group
                                            name="LeftEye"
                                            position={[0.031, -0.081, 0.087]}
                                            rotation={[-0.007, 0, 0]}
                                        />
                                        <group
                                            name="RightEye"
                                            position={[-0.031, -0.081, 0.087]}
                                            rotation={[-0.007, 0, 0]}
                                        />
                                        </group>
                                    </group>
                                    <group
                                        name="LeftShoulder"
                                        position={[0.047, 0.006, 0.141]}
                                        rotation={[-2.929, 1.53, -1.794]}
                                    >
                                        <group
                                        name="LeftArm"
                                        position={[0, 0, 0.119]}
                                        rotation={[1.19, 0.129, 0.895]}
                                        >
                                        <group
                                            name="LeftForeArm"
                                            position={[0, 0, 0.285]}
                                            rotation={[-1.485, -1.373, -1.241]}
                                        >
                                            <group
                                            name="LeftHand"
                                            position={[0, 0, 0.252]}
                                            rotation={[0.096, 0.023, -0.111]}
                                            >
                                            <group
                                                name="LeftHandThumb1"
                                                position={[-0.032, -0.005, 0.026]}
                                                rotation={[1.001, -0.826, 0.97]}
                                            >
                                                <group
                                                name="LeftHandThumb2"
                                                position={[0, 0, 0.041]}
                                                rotation={[0.153, 0.494, -0.193]}
                                                >
                                                <group
                                                    name="LeftHandThumb3"
                                                    position={[0, 0, 0.03]}
                                                    rotation={[0.317, 0.128, -0.138]}
                                                >
                                                    <group
                                                    name="LeftHandThumb4"
                                                    position={[0, 0, 0.035]}
                                                    rotation={[0.025, 0.015, 0.105]}
                                                    />
                                                </group>
                                                </group>
                                            </group>
                                            <group
                                                name="LeftHandIndex1"
                                                position={[-0.035, 0.007, 0.097]}
                                                rotation={[0.658, -0.142, 0.059]}
                                            >
                                                <group
                                                name="LeftHandIndex2"
                                                position={[0, 0, 0.045]}
                                                rotation={[0.806, 0.011, 0.068]}
                                                >
                                                <group
                                                    name="LeftHandIndex3"
                                                    position={[0, 0, 0.028]}
                                                    rotation={[0.582, 0.07, -0.129]}
                                                >
                                                    <group
                                                    name="LeftHandIndex4"
                                                    position={[0, 0, 0.034]}
                                                    rotation={[0.089, 0.019, 0.113]}
                                                    />
                                                </group>
                                                </group>
                                            </group>
                                            <group
                                                name="LeftHandMiddle1"
                                                position={[-0.009, 0.003, 0.1]}
                                                rotation={[0.62, -0.06, -0.01]}
                                            >
                                                <group
                                                name="LeftHandMiddle2"
                                                position={[0, 0, 0.046]}
                                                rotation={[0.961, -0.004, 0.078]}
                                                >
                                                <group
                                                    name="LeftHandMiddle3"
                                                    position={[0, 0, 0.035]}
                                                    rotation={[0.88, 0.126, -0.057]}
                                                >
                                                    <group
                                                    name="LeftHandMiddle4"
                                                    position={[0, 0, 0.035]}
                                                    rotation={[0.048, 0.004, 0.045]}
                                                    />
                                                </group>
                                                </group>
                                            </group>
                                            <group
                                                name="LeftHandRing1"
                                                position={[0.015, -0.002, 0.096]}
                                                rotation={[0.749, 0.003, -0.134]}
                                            >
                                                <group
                                                name="LeftHandRing2"
                                                position={[0, 0, 0.042]}
                                                rotation={[1.177, -0.101, 0.024]}
                                                >
                                                <group
                                                    name="LeftHandRing3"
                                                    position={[0, 0, 0.036]}
                                                    rotation={[0.61, -0.019, -0.036]}
                                                >
                                                    <group
                                                    name="LeftHandRing4"
                                                    position={[0, 0, 0.03]}
                                                    rotation={[0.013, -0.044, -0.014]}
                                                    />
                                                </group>
                                                </group>
                                            </group>
                                            <group
                                                name="LeftHandPinky1"
                                                position={[0.039, -0.011, 0.09]}
                                                rotation={[0.912, 0.138, -0.235]}
                                            >
                                                <group
                                                name="LeftHandPinky2"
                                                position={[0, 0, 0.028]}
                                                rotation={[1.11, -0.106, -0.312]}
                                                >
                                                <group
                                                    name="LeftHandPinky3"
                                                    position={[0, 0, 0.022]}
                                                    rotation={[0.798, 0.173, -0.158]}
                                                >
                                                    <group
                                                    name="LeftHandPinky4"
                                                    position={[0, 0, 0.026]}
                                                    rotation={[0.272, 0.053, 0.204]}
                                                    />
                                                </group>
                                                </group>
                                            </group>
                                            </group>
                                        </group>
                                        </group>
                                    </group>
                                    <group
                                        name="RightShoulder"
                                        position={[-0.047, 0.006, 0.141]}
                                        rotation={[-2.929, -1.53, 1.794]}
                                    >
                                        <group
                                        name="RightArm"
                                        position={[0, 0, 0.119]}
                                        rotation={[1.228, -0.128, 0.283]}
                                        >
                                        <group
                                            name="RightForeArm"
                                            position={[0, 0, 0.285]}
                                            rotation={[-0.924, 1.325, 0.693]}
                                        >
                                            <group
                                            name="RightHand"
                                            position={[0, 0, 0.252]}
                                            rotation={[0.097, -0.023, 0.109]}
                                            >
                                            <group
                                                name="RightHandThumb1"
                                                position={[0.032, -0.005, 0.026]}
                                                rotation={[1.001, 0.826, -0.97]}
                                            >
                                                <group
                                                name="RightHandThumb2"
                                                position={[0, 0, 0.041]}
                                                rotation={[0.153, -0.494, 0.193]}
                                                >
                                                <group
                                                    name="RightHandThumb3"
                                                    position={[0, 0, 0.03]}
                                                    rotation={[0.281, -0.094, 0.093]}
                                                >
                                                    <group
                                                    name="RightHandThumb4"
                                                    position={[0, 0, 0.035]}
                                                    rotation={[0.025, -0.015, -0.105]}
                                                    />
                                                </group>
                                                </group>
                                            </group>
                                            <group
                                                name="RightHandIndex1"
                                                position={[0.035, 0.007, 0.097]}
                                                rotation={[0.608, 0.146, -0.044]}
                                            >
                                                <group
                                                name="RightHandIndex2"
                                                position={[0, 0, 0.045]}
                                                rotation={[0.742, -0.003, -0.062]}
                                                >
                                                <group
                                                    name="RightHandIndex3"
                                                    position={[0, 0, 0.028]}
                                                    rotation={[0.54, -0.066, 0.131]}
                                                >
                                                    <group
                                                    name="RightHandIndex4"
                                                    position={[0, 0, 0.034]}
                                                    rotation={[0.089, -0.019, -0.113]}
                                                    />
                                                </group>
                                                </group>
                                            </group>
                                            <group
                                                name="RightHandMiddle1"
                                                position={[0.009, 0.003, 0.1]}
                                                rotation={[0.563, 0.06, 0.023]}
                                            >
                                                <group
                                                name="RightHandMiddle2"
                                                position={[0, 0, 0.046]}
                                                rotation={[0.888, 0.015, -0.073]}
                                                >
                                                <group
                                                    name="RightHandMiddle3"
                                                    position={[0, 0, 0.035]}
                                                    rotation={[0.831, -0.121, 0.057]}
                                                >
                                                    <group
                                                    name="RightHandMiddle4"
                                                    position={[0, 0, 0.035]}
                                                    rotation={[0.048, -0.004, -0.045]}
                                                    />
                                                </group>
                                                </group>
                                            </group>
                                            <group
                                                name="RightHandRing1"
                                                position={[-0.015, -0.002, 0.096]}
                                                rotation={[0.685, -0.014, 0.135]}
                                            >
                                                <group
                                                name="RightHandRing2"
                                                position={[0, 0, 0.042]}
                                                rotation={[1.093, 0.102, -0.02]}
                                                >
                                                <group
                                                    name="RightHandRing3"
                                                    position={[0, 0, 0.036]}
                                                    rotation={[0.555, 0.017, 0.034]}
                                                >
                                                    <group
                                                    name="RightHandRing4"
                                                    position={[0, 0, 0.03]}
                                                    rotation={[0.013, 0.044, 0.014]}
                                                    />
                                                </group>
                                                </group>
                                            </group>
                                            <group
                                                name="RightHandPinky1"
                                                position={[-0.039, -0.011, 0.09]}
                                                rotation={[0.842, -0.156, 0.235]}
                                            >
                                                <group
                                                name="RightHandPinky2"
                                                position={[0, 0, 0.028]}
                                                rotation={[1.017, 0.116, 0.319]}
                                                >
                                                <group
                                                    name="RightHandPinky3"
                                                    position={[0, 0, 0.022]}
                                                    rotation={[0.738, -0.156, 0.139]}
                                                >
                                                    <group
                                                    name="RightHandPinky4"
                                                    position={[0, 0, 0.026]}
                                                    rotation={[0.272, -0.053, -0.204]}
                                                    />
                                                </group>
                                                </group>
                                            </group>
                                            </group>
                                        </group>
                                        </group>
                                    </group>
                                    </group>
                                </group>
                                </group>
                                <group
                                name="LeftUpLeg"
                                position={[0.095, 0.003, 0.005]}
                                rotation={[2.878, 0.224, -3.017]}
                                >
                                <group
                                    name="LeftLeg"
                                    position={[0, 0, 0.458]}
                                    rotation={[-0.413, 0.028, 0.005]}
                                >
                                    <group
                                    name="LeftFoot"
                                    position={[0, 0, 0.444]}
                                    rotation={[1.216, 0.145, 0.009]}
                                    >
                                    <group
                                        name="LeftToeBase"
                                        position={[0, 0, 0.149]}
                                        rotation={[0.542, -0.059, -0.074]}
                                    >
                                        <group
                                        name="LeftToe_End"
                                        position={[0, 0, 0.099]}
                                        rotation={[0.035, -0.016, 1.547]}
                                        />
                                    </group>
                                    </group>
                                </group>
                                </group>
                                <group
                                name="RightUpLeg"
                                position={[-0.095, 0.003, 0.005]}
                                rotation={[3.06, -0.137, 3.063]}
                                >
                                <group
                                    name="RightLeg"
                                    position={[0, 0, 0.458]}
                                    rotation={[-0.122, -0.009, 0]}
                                >
                                    <group
                                    name="RightFoot"
                                    position={[0, 0, 0.444]}
                                    rotation={[1.1, -0.094, 0.074]}
                                    >
                                    <group
                                        name="RightToeBase"
                                        position={[0, 0, 0.149]}
                                        rotation={[0.542, 0.059, 0.074]}
                                    >
                                        <group
                                        name="RightToe_End"
                                        position={[0, 0, 0.099]}
                                        rotation={[0.035, 0.016, -1.547]}
                                        />
                                    </group>
                                    </group>
                                </group>
                                </group>
                            </group>
                            </group>
                            <group
                            name="Putin01_Skeleton001"
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={100}
                            >
                            <group
                                name="Hips001"
                                position={[0, -0.01, 1.019]}
                                rotation={[0.032, 0, 0]}
                            >
                                <group
                                name="Spine001"
                                position={[0, 0, 0.098]}
                                rotation={[-0.137, 0, 0]}
                                >
                                <group
                                    name="Spine1001"
                                    position={[0, 0, 0.13]}
                                    rotation={[-0.064, 0, 0]}
                                >
                                    <group
                                    name="Spine2001"
                                    position={[0, 0, 0.122]}
                                    rotation={[0.094, 0, 0]}
                                    >
                                    <group
                                        name="Neck001"
                                        position={[0, 0, 0.156]}
                                        rotation={[0.409, 0, 0]}
                                    >
                                        <group
                                        name="Head001"
                                        position={[0, 0, 0.123]}
                                        rotation={[-0.327, 0, 0]}
                                        >
                                        <group
                                            name="HeadTop_End001"
                                            position={[0, -0.037, 0.226]}
                                            rotation={[-0.007, 0, 0]}
                                        />
                                        <group
                                            name="LeftEye001"
                                            position={[0.031, -0.081, 0.087]}
                                            rotation={[-0.007, 0, 0]}
                                        />
                                        <group
                                            name="RightEye001"
                                            position={[-0.031, -0.081, 0.087]}
                                            rotation={[-0.007, 0, 0]}
                                        />
                                        </group>
                                    </group>
                                    <group
                                        name="LeftShoulder001"
                                        position={[0.047, 0.006, 0.141]}
                                        rotation={[-2.929, 1.53, -1.794]}
                                    >
                                        <group
                                        name="LeftArm001"
                                        position={[0, 0, 0.119]}
                                        rotation={[0.995, 0.144, 0.018]}
                                        >
                                        <group
                                            name="LeftForeArm001"
                                            position={[0, 0, 0.285]}
                                            rotation={[-0.096, -0.446, 0.026]}
                                        >
                                            <group
                                            name="LeftHand001"
                                            position={[0, 0, 0.252]}
                                            rotation={[0.091, 0.041, 0.076]}
                                            >
                                            <group
                                                name="LeftHandThumb1001"
                                                position={[-0.032, -0.005, 0.026]}
                                                rotation={[0.454, -0.841, 0.183]}
                                            >
                                                <group
                                                name="LeftHandThumb2001"
                                                position={[0, 0, 0.041]}
                                                rotation={[0.153, 0.494, -0.193]}
                                                >
                                                <group
                                                    name="LeftHandThumb3001"
                                                    position={[0, 0, 0.03]}
                                                    rotation={[0.024, 0.169, -0.052]}
                                                >
                                                    <group
                                                    name="LeftHandThumb4001"
                                                    position={[0, 0, 0.035]}
                                                    rotation={[0.025, 0.015, 0.105]}
                                                    />
                                                </group>
                                                </group>
                                            </group>
                                            <group
                                                name="LeftHandIndex1001"
                                                position={[-0.035, 0.007, 0.097]}
                                                rotation={[0.176, -0.151, -0.09]}
                                            >
                                                <group
                                                name="LeftHandIndex2001"
                                                position={[0, 0, 0.045]}
                                                rotation={[0.19, -0.052, -0.007]}
                                                >
                                                <group
                                                    name="LeftHandIndex3001"
                                                    position={[0, 0, 0.028]}
                                                    rotation={[0.172, 0.029, -0.155]}
                                                >
                                                    <group
                                                    name="LeftHandIndex4001"
                                                    position={[0, 0, 0.034]}
                                                    rotation={[0.089, 0.019, 0.113]}
                                                    />
                                                </group>
                                                </group>
                                            </group>
                                            <group
                                                name="LeftHandMiddle1001"
                                                position={[-0.009, 0.003, 0.1]}
                                                rotation={[0.075, -0.036, -0.134]}
                                            >
                                                <group
                                                name="LeftHandMiddle2001"
                                                position={[0, 0, 0.046]}
                                                rotation={[0.256, -0.088, -0.008]}
                                                >
                                                <group
                                                    name="LeftHandMiddle3001"
                                                    position={[0, 0, 0.035]}
                                                    rotation={[0.409, 0.076, -0.062]}
                                                >
                                                    <group
                                                    name="LeftHandMiddle4001"
                                                    position={[0, 0, 0.035]}
                                                    rotation={[0.048, 0.004, 0.045]}
                                                    />
                                                </group>
                                                </group>
                                            </group>
                                            <group
                                                name="LeftHandRing1001"
                                                position={[0.015, -0.002, 0.096]}
                                                rotation={[0.135, 0.109, -0.118]}
                                            >
                                                <group
                                                name="LeftHandRing2001"
                                                position={[0, 0, 0.042]}
                                                rotation={[0.374, -0.096, -0.015]}
                                                >
                                                <group
                                                    name="LeftHandRing3001"
                                                    position={[0, 0, 0.036]}
                                                    rotation={[0.078, -0.004, -0.011]}
                                                >
                                                    <group
                                                    name="LeftHandRing4001"
                                                    position={[0, 0, 0.03]}
                                                    rotation={[0.013, -0.044, -0.014]}
                                                    />
                                                </group>
                                                </group>
                                            </group>
                                            <group
                                                name="LeftHandPinky1001"
                                                position={[0.039, -0.011, 0.09]}
                                                rotation={[0.228, 0.295, -0.179]}
                                            >
                                                <group
                                                name="LeftHandPinky2001"
                                                position={[0, 0, 0.028]}
                                                rotation={[0.215, -0.167, -0.411]}
                                                >
                                                <group
                                                    name="LeftHandPinky3001"
                                                    position={[0, 0, 0.022]}
                                                    rotation={[0.246, -0.027, -0.021]}
                                                >
                                                    <group
                                                    name="LeftHandPinky4001"
                                                    position={[0, 0, 0.026]}
                                                    rotation={[0.272, 0.053, 0.204]}
                                                    />
                                                </group>
                                                </group>
                                            </group>
                                            </group>
                                        </group>
                                        </group>
                                    </group>
                                    <group
                                        name="RightShoulder001"
                                        position={[-0.047, 0.006, 0.141]}
                                        rotation={[-2.929, -1.53, 1.794]}
                                    >
                                        <group
                                        name="RightArm001"
                                        position={[0, 0, 0.119]}
                                        rotation={[0.995, -0.144, -0.018]}
                                        >
                                        <group
                                            name="RightForeArm001"
                                            position={[0, 0, 0.285]}
                                            rotation={[-0.096, 0.446, -0.026]}
                                        >
                                            <group
                                            name="RightHand001"
                                            position={[0, 0, 0.252]}
                                            rotation={[0.091, -0.041, -0.076]}
                                            >
                                            <group
                                                name="RightHandThumb1001"
                                                position={[0.032, -0.005, 0.026]}
                                                rotation={[0.454, 0.841, -0.183]}
                                            >
                                                <group
                                                name="RightHandThumb2001"
                                                position={[0, 0, 0.041]}
                                                rotation={[0.153, -0.494, 0.193]}
                                                >
                                                <group
                                                    name="RightHandThumb3001"
                                                    position={[0, 0, 0.03]}
                                                    rotation={[0.024, -0.169, 0.052]}
                                                >
                                                    <group
                                                    name="RightHandThumb4001"
                                                    position={[0, 0, 0.035]}
                                                    rotation={[0.025, -0.015, -0.105]}
                                                    />
                                                </group>
                                                </group>
                                            </group>
                                            <group
                                                name="RightHandIndex1001"
                                                position={[0.035, 0.007, 0.097]}
                                                rotation={[0.176, 0.151, 0.09]}
                                            >
                                                <group
                                                name="RightHandIndex2001"
                                                position={[0, 0, 0.045]}
                                                rotation={[0.19, 0.052, 0.007]}
                                                >
                                                <group
                                                    name="RightHandIndex3001"
                                                    position={[0, 0, 0.028]}
                                                    rotation={[0.172, -0.029, 0.155]}
                                                >
                                                    <group
                                                    name="RightHandIndex4001"
                                                    position={[0, 0, 0.034]}
                                                    rotation={[0.089, -0.019, -0.113]}
                                                    />
                                                </group>
                                                </group>
                                            </group>
                                            <group
                                                name="RightHandMiddle1001"
                                                position={[0.009, 0.003, 0.1]}
                                                rotation={[0.075, 0.036, 0.134]}
                                            >
                                                <group
                                                name="RightHandMiddle2001"
                                                position={[0, 0, 0.046]}
                                                rotation={[0.256, 0.088, 0.008]}
                                                >
                                                <group
                                                    name="RightHandMiddle3001"
                                                    position={[0, 0, 0.035]}
                                                    rotation={[0.409, -0.076, 0.062]}
                                                >
                                                    <group
                                                    name="RightHandMiddle4001"
                                                    position={[0, 0, 0.035]}
                                                    rotation={[0.048, -0.004, -0.045]}
                                                    />
                                                </group>
                                                </group>
                                            </group>
                                            <group
                                                name="RightHandRing1001"
                                                position={[-0.015, -0.002, 0.096]}
                                                rotation={[0.135, -0.109, 0.118]}
                                            >
                                                <group
                                                name="RightHandRing2001"
                                                position={[0, 0, 0.042]}
                                                rotation={[0.374, 0.096, 0.015]}
                                                >
                                                <group
                                                    name="RightHandRing3001"
                                                    position={[0, 0, 0.036]}
                                                    rotation={[0.078, 0.004, 0.011]}
                                                >
                                                    <group
                                                    name="RightHandRing4001"
                                                    position={[0, 0, 0.03]}
                                                    rotation={[0.013, 0.044, 0.014]}
                                                    />
                                                </group>
                                                </group>
                                            </group>
                                            <group
                                                name="RightHandPinky1001"
                                                position={[-0.039, -0.011, 0.09]}
                                                rotation={[0.228, -0.295, 0.179]}
                                            >
                                                <group
                                                name="RightHandPinky2001"
                                                position={[0, 0, 0.028]}
                                                rotation={[0.215, 0.167, 0.411]}
                                                >
                                                <group
                                                    name="RightHandPinky3001"
                                                    position={[0, 0, 0.022]}
                                                    rotation={[0.246, 0.027, 0.021]}
                                                >
                                                    <group
                                                    name="RightHandPinky4001"
                                                    position={[0, 0, 0.026]}
                                                    rotation={[0.272, -0.053, -0.204]}
                                                    />
                                                </group>
                                                </group>
                                            </group>
                                            </group>
                                        </group>
                                        </group>
                                    </group>
                                    </group>
                                </group>
                                </group>
                                <group
                                name="LeftUpLeg001"
                                position={[0.095, 0.003, 0.005]}
                                rotation={[-3.122, 0.06, 3.121]}
                                >
                                <group
                                    name="LeftLeg001"
                                    position={[0, 0, 0.458]}
                                    rotation={[0, 0, -0.001]}
                                >
                                    <group
                                    name="LeftFoot001"
                                    position={[0, 0, 0.444]}
                                    rotation={[1.019, 0.033, 0.042]}
                                    >
                                    <group
                                        name="LeftToeBase001"
                                        position={[0, 0, 0.149]}
                                        rotation={[0.542, -0.059, -0.074]}
                                    >
                                        <group
                                        name="LeftToe_End001"
                                        position={[0, 0, 0.099]}
                                        rotation={[0.035, -0.016, 1.547]}
                                        />
                                    </group>
                                    </group>
                                </group>
                                </group>
                                <group
                                name="RightUpLeg001"
                                position={[-0.095, 0.003, 0.005]}
                                rotation={[-3.122, -0.06, -3.121]}
                                >
                                <group
                                    name="RightLeg001"
                                    position={[0, 0, 0.458]}
                                    rotation={[0, 0, 0.001]}
                                >
                                    <group
                                    name="RightFoot001"
                                    position={[0, 0, 0.444]}
                                    rotation={[1.02, -0.033, -0.042]}
                                    >
                                    <group
                                        name="RightToeBase001"
                                        position={[0, 0, 0.149]}
                                        rotation={[0.542, 0.059, 0.074]}
                                    >
                                        <group
                                        name="RightToe_End001"
                                        position={[0, 0, 0.099]}
                                        rotation={[0.035, 0.016, -1.547]}
                                        />
                                    </group>
                                    </group>
                                </group>
                                </group>
                            </group>
                            </group>
                            <group
                            name="Putin01"
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={100}
                            >
                            <group name="Putin01_Skeleton002">
                                <group name="Object_142">
                                <primitive object={nodes._rootJoint} />
                                <skinnedMesh
                                    castShadow

                                    name="Object_212"
                                    geometry={nodes.Object_212.geometry}
                                    material={materials.Wolf3D_Avatar}
                                    skeleton={nodes.Object_212.skeleton}
                                />
                                <group
                                    name="Object_211"
                                    rotation={[-Math.PI / 2, 0, 0]}
                                    scale={100}
                                />
                                </group>
                            </group>
                            </group>
                            <group
                            name="Wolf3D_Avatar"
                            rotation={[-Math.PI / 2, 0, 0]}
                            scale={100}
                            />
                        </group>
                        </group>
                    </group>
                    </group>
                </group>
            </group>
            <CuboidCollider 
                args={ [ 1, 2.7, 1 ] }
                position={ [ 0, 0, 0 ] } 
            />
        </RigidBody>    
  );
}

useFBX.preload("./assets/models/world/npcs/putin.glb")