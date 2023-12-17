import { useGLTF } from "@react-three/drei"

/**
 * Palm 1
 */
const Palm1Positions = [
    [ - 9, 2, 13 ],
    [ 82, 2, - 80 ],
    [ 95, 2, 105 ],
    [ 23, 2, 88 ],
    [ - 90, 2, 3 ]
]
const Palm1Rotations = [
    Math.PI * 1.2,
    Math.PI * 1.2,
    Math.PI * 1.2,
    Math.PI * 1,
    Math.PI * 1,
]
const Palm1Scale = [
    4,
    4,
    4,
    4,
    4,
]

const Palm1 = () =>
{
    const total = Palm1Positions.length
    const { nodes, materials } = useGLTF("./assets/models/world/trees/palm-tree-1.glb")
    const Palm1 = [...Array(total)].map((value, index) =>
        <group
            key={ index }
            position={ Palm1Positions[index] }
            scale={ Palm1Scale[index] }
            rotation-y={ Palm1Rotations[index] }
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Environment_PalmTree_1.geometry}
                material={materials.Atlas}
                scale={100}
                />
        </group>
    )
    return(
        <>
            { Palm1 }
        </>
    )
}


/**
 * Palm 2
 */
const Palm2Positions = [
    [ 10, 2, 13 ],
    [ - 35, 2, - 30 ],
    [ - 69, 2, 98 ],
    [ 98, 2, - 30 ],
    [105, 2, 95 ],
    [ - 106, 2, - 108 ]
]
const Palm2Rotations = [
    Math.PI * 1.2,
    Math.PI * 0.1,
    Math.PI * 0.5,
    Math.PI * 0.1,
    Math.PI * 1.5,
    Math.PI * 1,
]
const Palm2Scale = [
    4,
    4,
    4.2,
    4,
    5,
    5,
]

const Palm2 = () =>
{
    const total = Palm2Positions.length
    const { nodes, materials } = useGLTF("./assets/models/world/trees/palm-tree-2.glb")
    const Palm2 = [...Array(total)].map((value, index) =>
        <group
            key={ index }
            position={ Palm2Positions[index] }
            scale={ Palm2Scale[index] }
            rotation-y={ Palm2Rotations[index] }
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Environment_PalmTree_3.geometry}
                material={materials.Atlas}
                scale={100}
                />
        </group>
    )
    return(
        <>
            { Palm2 }
        </>
    )
}

/**
 * Palm 3
 */
const Palm3Positions = [
    [ 12, 2, - 65 ],
    [ - 69, 2, 83 ],
    [ 105, 2, 33 ],
    [ - 115, 2, - 95 ]
]
const Palm3Rotations = [
    Math.PI * 0.5,
    Math.PI * 0.5,
    Math.PI * 1.5,
    Math.PI * 1
]
const Palm3Scale = [
    4.2,
    4.2,
    4.2,
    5,
]

const Palm3 = () =>
{
    const total = Palm3Positions.length
    const { nodes, materials } = useGLTF("./assets/models/world/trees/palm-tree-3.glb")
    const Palm3 = [...Array(total)].map((value, index) =>
        <group
            key={ index }
            position={ Palm3Positions[index] }
            scale={ Palm3Scale[index] }
            rotation-y={ Palm3Rotations[index] }
        >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Environment_PalmTree_2.geometry}
                material={materials.Atlas}
                scale={100}
                />
        </group>
    )
    return(
        <>
            { Palm3 }
        </>
    )
}



export default function Trees()
{   
    return(
        <>
            {/* Beach island */}
            <group>
                <Palm1 />
                <Palm2 />
                <Palm3 />
            </group>
        </>
    )
}

useGLTF.preload("./assets/models/world/trees/palm-tree-1.glb")
useGLTF.preload("./assets/models/world/trees/palm-tree-2.glb")
useGLTF.preload("./assets/models/world/trees/palm-tree-3.glb")