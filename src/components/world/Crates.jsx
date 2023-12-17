import { useGLTF } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import { useRef } from "react"

const objectPositions = [
    [ 597, 6, 144 ],
    [ 565, 8, 120 ],
    [ 634, 12.5, 121 ],
    [ 670, 14, 160 ],

]

const Object = () =>
{
    const positionsCount = objectPositions.length
    const objectRef = useRef([])
    const { nodes, materials } = useGLTF("./assets/models/world/crate.glb")
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
                geometry={nodes.Crate_1.geometry}
                material={materials.Wood}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Crate_2.geometry}
                material={materials.Wood_Light}
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

export default function Crates()
{

    return(
        <>
            <Object position={ [ 0, 0, 0 ] } />
        </>
    )
}

useGLTF.preload("./assets/models/world/crate.glb")