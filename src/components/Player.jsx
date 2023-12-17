import { forwardRef, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import Ecctrl, { EcctrlAnimation, useJoystickControls } from 'ecctrl'
import { useAnimations, useGLTF, useKeyboardControls } from '@react-three/drei'
import * as THREE from 'three'
import { useRapier } from '@react-three/rapier'
import useSound from 'use-sound'

const LIMIT = 200

const Character = forwardRef((props, character) =>
{
    const { nodes, materials, animations } = useGLTF("./assets/models/wizard.glb")
    const { actions } = useAnimations(animations, character)

    return (
        // <group scale={ 0.02 } ref={character} {...props} dispose={null}>
        //     <primitive object={nodes.mixamorigHips} />
        //     <skinnedMesh
        //         castShadow
        //         receiveShadow
        //         name="LP_Eyes_ring"
        //         geometry={nodes.LP_Eyes_ring.geometry}
        //         material={materials.Demon_MAT}
        //         skeleton={nodes.LP_Eyes_ring.skeleton}
        //     />
        //     <skinnedMesh
        //         castShadow
        //         receiveShadow
        //         name="LP_shoulder2"
        //         geometry={nodes.LP_shoulder2.geometry}
        //         material={materials.Demon_MAT}
        //         skeleton={nodes.LP_shoulder2.skeleton}
        //     />
        //     <skinnedMesh
        //         castShadow
        //         receiveShadow
        //         name="LP_shoulder1"
        //         geometry={nodes.LP_shoulder1.geometry}
        //         material={materials.Demon_MAT}
        //         skeleton={nodes.LP_shoulder1.skeleton}
        //     />
        //     <skinnedMesh
        //         castShadow
        //         receiveShadow
        //         name="LP_lower_armor_horns"
        //         geometry={nodes.LP_lower_armor_horns.geometry}
        //         material={materials.Demon_MAT}
        //         skeleton={nodes.LP_lower_armor_horns.skeleton}
        //     />
        //     <skinnedMesh
        //         castShadow
        //         receiveShadow
        //         name="LP_shoulder_rings"
        //         geometry={nodes.LP_shoulder_rings.geometry}
        //         material={materials.Demon_MAT}
        //         skeleton={nodes.LP_shoulder_rings.skeleton}
        //     />
        //     <skinnedMesh
        //         castShadow
        //         receiveShadow
        //         name="LP_Lower_shoes"
        //         geometry={nodes.LP_Lower_shoes.geometry}
        //         material={materials.Demon_MAT}
        //         skeleton={nodes.LP_Lower_shoes.skeleton}
        //     />
        //     <skinnedMesh
        //         castShadow
        //         receiveShadow
        //         name="LP_Upper_body"
        //         geometry={nodes.LP_Upper_body.geometry}
        //         material={materials.Demon_MAT}
        //         skeleton={nodes.LP_Upper_body.skeleton}
        //     />
        //     <skinnedMesh
        //         castShadow
        //         receiveShadow
        //         name="LP_upper_cloth"
        //         geometry={nodes.LP_upper_cloth.geometry}
        //         material={materials.Demon_MAT}
        //         skeleton={nodes.LP_upper_cloth.skeleton}
        //     />
        // </group>
        <group scale={ 1 } ref={character} {...props} dispose={null}>
            <skinnedMesh
                castShadow
                receiveShadow
                name="mesh_char_19"
                geometry={nodes.mesh_char_19.geometry}
                material={materials._019_Wizzir}
                skeleton={nodes.mesh_char_19.skeleton}
            />
            <primitive object={nodes.mixamorigHips} />
        </group>
    )
})

const Player = forwardRef((props, ref) =>
{
    const getJoystickValues = useJoystickControls(state => state.getJoystickValues)
    
    const [ subscribeKeys, getKeys ] = useKeyboardControls()
    const { rapier, world } = useRapier()
    const character = useRef()
    const [ playAttackSound ] = useSound('./assets/audio/rpg/swoosh.wav', { volume: 0.9, interrupt: true })
    const [ playImpactSound ] = useSound('./assets/audio/rpg/impact.wav', { volume: 0.6, interrupt: true })

    const origin = useRef()
    const target = useRef()

    // First attack
    const Attack1 = () =>
    {
        // Get origin position
        const originBlock = new THREE.Vector3(0, 0, 0)
        origin.current.getWorldPosition(originBlock)

        // Player location
        const playerPosition = ref.current.translation()
        const playerVector = new THREE.Vector3(playerPosition.x, playerPosition.y, playerPosition.z)

        // Get target position
        const targetBlock = new THREE.Vector3(0, 0, 0)
        target.current.getWorldPosition(targetBlock)

        // Create rapier ray
        const ray = new rapier.Ray(originBlock, targetBlock)
        let maxToi = 50.0
        let solid = true
        
        // Cast rapier ray
        const hit = world.castRay(ray, maxToi, solid)

        playAttackSound()
        
        if(hit)
        {
            setTimeout(() => {
                playImpactSound()
                hit.collider.parent().applyImpulse( 
                    { 
                        x: - (originBlock.x - targetBlock.x) * 100, 
                        y: - (originBlock.y - targetBlock.y) * 100, 
                        z: - (originBlock.z - targetBlock.z) * 100 
                    } )
                    hit.collider.parent().applyTorqueImpulse( { x: 50, y: 50, z: 50 } )
            }, 500)
            // hit.collider.parent().applyImpulseAtPoint(10, hit.point, true)
            // console.log(hit.collider.parent().bodyType())
            // console.log(hit.collider.parent())
        }

    }

    // Second attack, smash up
    const Attack2 = () =>
    {
        // Attack vars
        let canAttack = true
        let hasHit = false
        let attackTimer = 0

        // Get origin position
        const originBlock = new THREE.Vector3(0, 0, 0)
        origin.current.getWorldPosition(originBlock)

        // Get target position
        const targetBlock = new THREE.Vector3(0, 0, 0)
        target.current.getWorldPosition(targetBlock)

        // Create rapier ray
        const ray = new rapier.Ray(originBlock, targetBlock)
        let maxToi = 50.0
        let solid = true
        
        // Cast rapier ray
        const hit = world.castRay(ray, maxToi, solid)

        if(canAttack)
        {
            playAttackSound()
            // Set attack temp to false
            canAttack = false

            if(hit && !hasHit)
            {
                hasHit = true 
                setTimeout(() =>
                {
                    playImpactSound()
                    hit.collider.parent().applyImpulse( 
                        { 
                            x: - (originBlock.x - targetBlock.x) * 100,
                            y: 125, 
                            z: - (originBlock.z - targetBlock.z) * 100,
                        } )
                        hit.collider.parent().applyTorqueImpulse( { x: 0, y: 25, z: 0 } )
                        canAttack = true
                        hasHit = false
                    }, 500)
            }
            else 
            {
                // Timeout after attack
                setTimeout(() =>
                {
                    canAttack = true
                }, 500)
            } 
        }
    }

    // useEffect(() =>
    // {
    //     const unsubscribeShoot =  subscribeKeys(
    //         (state) => state.action1,
    //         (value) => 
    //         {
    //             if(value)
    //             {
    //                 Shoot()
    //             }
    //         }
    //     )

    //     return () => 
    //     {
    //         unsubscribeShoot()
    //     }
    // }, [])

    useFrame(() =>
    {
        // console.log(getJoystickValues().button1Pressed)
        // console.log(getJoystickValues().button2Pressed)
        // console.log(getJoystickValues().button3Pressed)
        // console.log(getJoystickValues().button4Pressed)

        if(ref.current)
        {
            const charPosition = ref.current.translation()
            console.log(charPosition)

            const { action4, action2, action3 } = getKeys()

            if(action4 || getJoystickValues().button2Pressed)
            {
                Attack1()
            }

            if( action2 || action3)
            {
                Attack2()
            }
            // Apply forces
            // const impulse = { x: 0, y: 0, z: 0 }
            // const torque = { x: 0, y: 0, z: 0 }
    
            // const impulseStrength = 1 * delta
            // const torqueStrength = 0.01 * delta

            // if(up)
            // {
            //     impulse.y += impulseStrength
            //     // torque.y += torqueStrength
            // }
            // if(down)
            // {
            //     impulse.y -= impulseStrength
            //     // torque.y -= torqueStrength
            // }
            // // Apply impulses and torque impulses to player
            // ref.current.applyImpulse(impulse)
            // ref.current.applyTorqueImpulse(torque)

            // Reset player
            // if(charPosition.x < - LIMIT || charPosition.x > LIMIT || charPosition.y < - LIMIT || charPosition.y > LIMIT || charPosition.z < - LIMIT || charPosition.z > LIMIT )
            // {
            //     // console.log(charPosition.y)
            //     ref.current.setTranslation( { x: 0, y: 10, z: 0 } )
            //     ref.current.setLinvel( { x: 0, y: 0, z: 0 } )
            //     ref.current.setAngvel( { x: 0, y: 0, z: 0 } )
            // }
            if(charPosition.y < - 0.5 )
            {
                // console.log(charPosition.y)
                ref.current.setTranslation( { x: 0, y: 15, z: 0 } )
                ref.current.setLinvel( { x: 0, y: 0, z: 0 } )
                ref.current.setAngvel( { x: 0, y: 0, z: 0 } )
            }
        }
    })
    
    const characterURL = "./assets/models/wizard.glb"
    const animationSet = 
    {
        idle: "Idle",
        walk: "Walk",
        run: "Run",
        jump: "Jump",
        jumpIdle: "Falling",
        jumpLand: "Landing",
        fall: "Falling",
        // action1: "3",
        action2: "2",
        action3: "3",
        action4: "1",
    }

    return( 
        <>
            <Ecctrl
                debug={ false }  
                ref={ ref }
                capsuleRadius={ 0.3 }
                capsuleHalfHeight={ 0.5 }
                camInitDis={ - 10 }
                camMaxDis={ - 30 }
                camMinDis={ - 0.1 }
                animated={ true }
                position={ [ 0, 20, 0 ] }
                maxVelLimit={ 4 }
                sprintMult={ 3 }
                jumpVel={ 6 }
                autoBalanceDampingOnY={ 0.01 }
                slopeMaxAngle={ 2 }
                // gravityScale={ 0 }
                friction={ 1 }
                // camCollision={ false }
                // turnSpeed={ 10 }
                // jumpForceToGroundMult={ 20 }
                // characterInitDir={ 160 }
                // camInitDir={ Math.PI * 1 }
            >
                <EcctrlAnimation
                    characterURL={ characterURL }
                    animationSet={ animationSet }
                >
                    <group>
                        <Character
                            ref={ character }
                            position={ [ 0,  - 0.95, 0 ] }
                        />
                        <group position={ [ 0, 0.5, 4 ] } ref={ target }>
                            {/* <mesh>
                                <boxGeometry args={ [ 1, 1, 1 ] } />
                            </mesh> */}
                        </group>
                        <group position={ [ 0, 0.5, 2 ] } ref={ origin }>
                            {/* <mesh>
                                <boxGeometry args={ [ 1, 1, 1 ] } />
                            </mesh> */}
                        </group>
                    </group>
                </EcctrlAnimation>
            </Ecctrl>
        </>
    )
})

export default Player

useGLTF.preload("./assets/models/wizard.glb")