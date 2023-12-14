import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Vector3 } from "three"
import useSound from "use-sound"

const Teleport = (props) =>
{
    const { char, target, from } = props
    const { nodes, materials } = useGLTF("./assets/models/world/teleport.glb")
    const [ playTeleportSound ] = useSound('./assets/audio/teleport.wav')

    useFrame(() =>
    {
        if(char.current)
        {
            const position = new Vector3(from[0], from[1], from[2])
            const charPosition = char.current.translation()
            const distance = position.distanceTo(new Vector3(charPosition.x, charPosition.y, charPosition.z))
            
            if(distance < 3)
            {
                char.current.setTranslation( target )
                char.current.setLinvel( { x: 0, y: 0, z: 0 } )
                char.current.setAngvel( { x: 0, y: 0, z: 0 } )
                playTeleportSound()
            }
        }
    })

    return (
        <group {...props} dispose={null}>
          <group rotation={[0, 0, 0]} scale={200}>
                <mesh
                    receiveShadow
                    geometry={nodes.Props_Base_1.geometry}
                    material={materials.DarkGrey}
                />
                <mesh
                    receiveShadow
                    geometry={nodes.Props_Base_2.geometry}
                    material={materials.Main}
                    />
                <mesh
                    receiveShadow
                    geometry={nodes.Props_Base_3.geometry}
                    material={materials.Accent}
                />
          </group>
        </group>
      )
}

export default function Teleports(props)
{
    const { char } = props
    return(
        <>
            <Teleport 
                position={ [ 100, 2, 100 ] } 
                from={ [ 100, 2, 100 ] } 
                target={ { x: 490, y: 10, z: 255 } }
                // rotation-x={ - Math.PI * 0.01 }
                // rotation-z={ Math.PI * 0.03 }
                scale={ 0.8 } 
                char={ char } 
            />
            <Teleport 
                position={ [ - 111, 2, - 101 ] } 
                from={ [ - 111, 2, - 101 ] } 
                target={ { x: - 490, y: 10, z: - 255 } }
                scale={ 0.8 } 
                char={ char } 
            />
            <Teleport 
                position={ [ 699, 2, 47 ] } 
                from={ [ 699, 2, 47 ] } 
                target={ { x: - 490, y: 10, z: - 255 } }
                scale={ 0.8 } 
                char={ char } 
            />
            <Teleport 
                position={ [ - 700, 2, - 45 ] } 
                from={ [ - 700, 2, - 45 ] } 
                target={ { x: 490, y: 10, z: 255 } }
                scale={ 0.8 } 
                char={ char } 
            />
        </>
    )
}

useGLTF.preload("./assets/models/world/teleport.glb")