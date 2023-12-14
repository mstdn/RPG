import React, { useRef } from "react"
import { useAnimations, useFBX } from "@react-three/drei"
import { RigidBody, CuboidCollider } from "@react-three/rapier"
import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"
import useSound from "use-sound"

export function Trump(props) 
{
    const { char, pos } = props
    const group = useRef()
    const trump = useRef()
    const [ playTrumpSound ] = useSound('./assets/audio/twerk.wav', { volume: 1, interrupt: true })
    const gltf = useFBX("./assets/models/world/npcs/trump.fbx")
    const { animations } = useFBX("./assets/models/world/npcs/trump.fbx")
    const { actions } = useAnimations(animations, group)

    let play = true

    gltf.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      })

    useFrame(() =>
    {
        actions["mixamo.com"].play()

        if(char.current)
        {
            const trumpPosition = trump.current.translation()
            const trumpVector = new Vector3(trumpPosition.x, trumpPosition.y, trumpPosition.z)
            const playerPosition = char.current.translation()
            const position = new Vector3(playerPosition.x, playerPosition.y, playerPosition.z)
            const distance = trumpVector.distanceTo(position)               
            
            if( distance < 5 && play )
            {
                playTrumpSound()
                play = false
            } 
            else if( distance > 5 && !play )
            {
                play = true
            }
        }

        
    })

  return (
        <RigidBody
            ref={ trump }
            colliders={ false }
            // colliders="hull"
            // gravityScale={ 2 }
            // friction={ 2 }
            canSleep={ false }
            // type="fixed" 
            {...props}
            
        >
            <group scale={ 0.03 } position={ [ 0, - 2.5, 0 ]} ref={group} dispose={null}>
                <primitive object={ gltf } /> 
            </group>
            <CuboidCollider 
                args={ [ 1, 2.6, 1 ] }
                position={ [ 0, 0, 0 ] } 
            />
        </RigidBody>    
  );
}

useFBX.preload("./assets/models/world/npcs/trump.fbx")