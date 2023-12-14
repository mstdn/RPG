import { useGLTF } from "@react-three/drei"

/**
 * Mountain 
 */
// const Mountain = (props) => 
// {
//     const { nodes, materials } = useGLTF("./assets/models/world/house.glb")
//     return (
//             <group {...props} dispose={null}>
// 
//             </group>
//     )
// }


/**
 * Mountain Group 1
 */
const MountainGroup = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/mountains/mountain-group.glb")
    return (
            <group {...props} dispose={null}>  
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mountain_Group_2_1.geometry}
                    material={materials.Stone}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mountain_Group_2_2.geometry}
                    material={materials.Snow}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mountain_Group_2_3.geometry}
                    material={materials.Dirt}
                    />
                </group>
            </group>
    )
}

/**
 * Mountain 1 
 */
const Mountain1 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/mountains/mountain-1.glb")
    return (
            <group {...props} dispose={null}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.MountainLarge_Single_1.geometry}
                    material={materials.Stone}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.MountainLarge_Single_2.geometry}
                    material={materials.Snow}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.MountainLarge_Single_3.geometry}
                    material={materials.Dirt}
                    />
                </group>
            </group>
    )
}

/**
 * Mountain 2
 */
const Mountain2 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/mountains/mountain-2.glb")
    return (
            <group {...props} dispose={null}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mountain_Single_1.geometry}
                    material={materials.Stone}
                    />
                    <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Mountain_Single_2.geometry}
                    material={materials.Dirt}
                    />
                </group>
            </group>
    )
}

/**
 * Mountain 
 */
const MountainGroup2 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/mountains/mountain-3.glb")
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mountain_Group_1_1.geometry}
                material={materials.Stone}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mountain_Group_1_2.geometry}
                material={materials.Snow}
                />
                <mesh
                castShadow
                receiveShadow
                geometry={nodes.Mountain_Group_1_3.geometry}
                material={materials.Dirt}
                />
            </group>
        </group>
    )
}

export default function Environment()
{
    return(
        <>
            <MountainGroup position={ [ - 114, - 40, 589 ] } scale={ 50 } rotation-y={ Math.PI * 0.1 } />
            <MountainGroup position={ [ 500, - 30, 500 ] } scale={ 50 } rotation-y={ Math.PI * 1 } />
            <MountainGroup position={ [ - 70, - 30, - 570 ] } scale={ 40 } rotation-y={ Math.PI * 1.05 } />
            
            <MountainGroup2 position={ [ 565, - 30, - 165 ] } scale={ 40 } rotation-y={ Math.PI * 1.5 } />
            
            <Mountain1 position={ [ 118, - 30, 443 ] } scale={ 40 } rotation-y={ Math.PI * 1.5 } />
            <Mountain1 position={ [ 84, - 30, 413 ] } scale={ 34 } rotation-y={ Math.PI * 1 } />
            
            <Mountain2 position={ [ - 458, - 30, 109 ] } scale={ 65 } rotation-y={ Math.PI * 1.8 } />
            <Mountain2 position={ [ - 469, - 30, - 450 ] } scale={ 78 } rotation-y={ Math.PI * 0.8 } />
        </>
    )
}

useGLTF.preload("./assets/models/world/mountains/mountain-group.glb")
useGLTF.preload("./assets/models/world/mountains/mountain-1.glb")
useGLTF.preload("./assets/models/world/mountains/mountain-2.glb")
useGLTF.preload("./assets/models/world/mountains/mountain-3.glb")