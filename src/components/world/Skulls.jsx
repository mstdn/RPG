import { useGLTF } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import { useRef } from "react"

const objectPositions = [
    [ - 31, 7.9, - 69 ],
    [ 60, 8, 82 ],
    [ - 13, 8, 10 ]
]

const Object = () =>
{
    const positionsCount = objectPositions.length
    const objectRef = useRef([])
    const { nodes, materials } = useGLTF("./assets/models/world/pirate/skull.glb")
    const object = [...Array(positionsCount)].map((value, index) =>
    <RigidBody
        // colliders="hull"
        // colliders={ false }
        ref={ (element) => objectRef.current[index] = element }
        key={ index }
        position={ objectPositions[index] }
        scale={ 1 + Math.random() * 0.5 }
        rotation-y={ Math.PI * Math.random() }
    >
        <group scale={ 100 } position={ [ 0, 0, 0 ] }>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Environment_Skulls.geometry}
                material={materials.Atlas}
                scale={1}
            />
        </group>
        {/* <CuboidCollider 
            args={ [ 1, 1.5, 1 ] } 
            postion={ [ 0, 0, 0 ] }    
        /> */}
    </RigidBody>
    )

    return(
        <>
            { object }
        </>
    )
}

export default function Skulls()
{

    return(
        <>
            <Object position={ [ 0, 0, 0 ] } />
        </>
    )
}

useGLTF.preload("./assets/models/world/pirate/skull.glb")