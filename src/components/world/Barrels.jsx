import { useGLTF } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import { useRef } from "react"

const barrelPositions = [
    [ 56, 7.9, - 76 ],
    [ 77, 7.9, - 49 ],
    [ 0, 7.9, 50 ],
    [ 13, 7.9, 8.6 ],
    [ - 3, 7.9, 48 ],
    [ - 87, 7.9, - 7.4 ]
]

const Barrel = () =>
{
    const PositionsCount = barrelPositions.length
    const barrelRef = useRef([])
    const { nodes, materials } = useGLTF("./assets/models/world/pirate/barrel.glb")
    const barrel = [...Array(PositionsCount)].map((value, index) =>
    <RigidBody
        // colliders="hull"
        // colliders={ false }
        ref={ (element) => barrelRef.current[index] = element }
        key={ index }
        position={ barrelPositions[index] }
        scale={ 1 + Math.random() * 0.5 }
        rotation-y={ Math.PI * Math.random() }
    >
        <group scale={ 400 } position={ [ 0, - 1.3, 0 ] }>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Prop_Barrel.geometry}
                material={materials.Atlas}
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
            { barrel }
        </>
    )
}

export default function Barrels()
{

    return(
        <>
            <Barrel position={ [ 0, 0, 0 ] } />
        </>
    )
}

useGLTF.preload("./assets/models/world/pirate/barrel.glb")