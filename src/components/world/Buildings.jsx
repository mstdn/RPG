import React, { useRef } from "react"
import { useGLTF, useTexture } from "@react-three/drei"
import * as THREE from "three"
import { CuboidCollider, RigidBody } from "@react-three/rapier"


const LargeBuilding1 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/city/large-building-1.glb")
    return (
        <RigidBody 
            type="fixed" 
            colliders={ false }
            {...props}
        >
            <group 
                position={ [ 0, - 8.5, 0 ] }
                scale={ 15 } 
                dispose={null}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingD_1.geometry}
                    material={materials.border}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingD_1_1.geometry}
                    material={materials.window}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingD_1_2.geometry}
                    material={materials._defaultMat}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingD_1_3.geometry}
                    material={materials.door}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingD_1_4.geometry}
                    material={materials.roof}
                />
            </group>
            <CuboidCollider 
                args={ [ 9.5, 8.5, 9.5 ] } 
                position={ [ 0, 0, 0 ] }
            />
        </RigidBody>
    )
}


const LargeBuilding2 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/city/large-building-2.glb")
    return (
        <RigidBody 
            type="fixed" 
            colliders={ false }
            {...props}
        >
            <group 
                position={ [ 0, - 10, 0 ] }
                scale={ 15 } 
                dispose={null}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingE_1.geometry}
                    material={materials._defaultMat}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingE_1_1.geometry}
                    material={materials.border}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingE_1_2.geometry}
                    material={materials.window}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingE_1_3.geometry}
                    material={materials.door}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingE_1_4.geometry}
                    material={materials.roof}
                />
            </group>
            <CuboidCollider 
                args={ [ 9.5, 10,9.5 ] } 
                position={ [ 0, 0, 0 ] }
            />
        </RigidBody>
    )
}


const LargeBuilding3 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/city/large-building-3.glb")
    return (
        <RigidBody 
            type="fixed" 
            colliders={ false }
            {...props}
        >
            <group 
                position={ [ 0, - 10, 0 ] }
                scale={ 15 } 
                dispose={null}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingG_1.geometry}
                    material={materials.door}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingG_1_1.geometry}
                    material={materials.window}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingG_1_2.geometry}
                    material={materials._defaultMat}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.large_buildingG_1_3.geometry}
                    material={materials.border}
                />
            </group>
            <CuboidCollider 
                args={ [ 13, 10, 12 ] } 
                position={ [ - 1, 0, 0 ] }
            />
        </RigidBody>
    )
}


const PirateBuilding1 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/buildings/house-1.glb")
    return (
        <RigidBody 
            type="fixed" 
            colliders={ false }
            {...props}
        >
            <group 
                position={ [ 0, - 5, 0 ] }
                scale={ 400 } 
                dispose={null}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Environment_House2_1.geometry}
                    material={materials.Atlas}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Environment_House2_2.geometry}
                    material={materials.Window}
                />
            </group>
            <CuboidCollider 
                args={ [ 6, 20, 6 ] } 
                position={ [ 0, 0, - 1 ] }
            />
        </RigidBody>
    )
}


const PirateBuilding2 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/buildings/house-2.glb")
    return (
        <RigidBody 
            type="fixed" 
            colliders={ false }
            {...props}
        >
            <group 
                position={ [ 0, - 5, 0 ] }
                scale={ 400 } 
                dispose={null}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Environment_House3_1.geometry}
                    material={materials.Atlas}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Environment_House3_2.geometry}
                    material={materials.Window}
                />
            </group>
            <CuboidCollider 
                args={ [ 12, 20, 6.5 ] } 
                position={ [ 0, 0, 0 ] }
            />
        </RigidBody>
    )
}

const PirateBuilding3 = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/buildings/house-3.glb")
    return (
        <RigidBody 
            type="fixed" 
            colliders={ false }
            {...props}
        >
            <group 
                position={ [ 0, - 5, 0 ] }
                scale={ 400 } 
                dispose={null}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Environment_House1_1.geometry}
                    material={materials.Atlas}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Environment_House1_2.geometry}
                    material={materials.Window}
                />
            </group>
            <CuboidCollider 
                args={ [ 18, 20, 6.5 ] } 
                position={ [ 0, 0, 0 ] }
            />
        </RigidBody>
    )
}


export default function Buildings()
{
    return(
        <>  
            {/* Beach island */}
            <group>
                <PirateBuilding1 position={ [ - 25, 5, 109 ] } rotation-y={ Math.PI * 1 } />
                <PirateBuilding2 position={ [ 5, 5, 100 ] } rotation-y={ Math.PI * 1.2 } />
                <PirateBuilding3 position={ [ 45, 5, - 95 ] } rotation-y={ Math.PI * 0 } />
            </group>
            {/* Grass island */}
            <group>
                <LargeBuilding1 position={ [ 530, 10.5, 140 ] } rotation-y={ Math.PI * 1.5 } />
                <LargeBuilding2 position={ [ 580, 12, 140 ] } rotation-y={ Math.PI * 0.5 } />
                <LargeBuilding3 position={ [ 550, 12, 100 ] } rotation-y={ Math.PI * 1 } />
            </group>
        </>
    )
}

useGLTF.preload("./assets/models/city/large-building-1.glb")
useGLTF.preload("./assets/models/city/large-building-2.glb")
useGLTF.preload("./assets/models/city/large-building-3.glb")
useGLTF.preload("./assets/models/world/buildings/house-1.glb")
useGLTF.preload("./assets/models/world/buildings/house-2.glb")