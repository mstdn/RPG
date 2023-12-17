import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"




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

const Cabin = (props) => 
{
    const { nodes, materials } = useGLTF("./assets/models/world/buildings/cabin.glb")
    return (
        <RigidBody 
            type="fixed" 
            colliders={ false }
            {...props}
        >
            <group 
                position={ [ 0, - 5, 3.6 ] }
                scale={ 60 } 
                dispose={null}
            >
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cabin_shed.geometry}
                    material={materials.Diffuse_color}
                    scale={100}
                />
            </group>
            <CuboidCollider 
                args={ [ 11, 15, 7.2 ] } 
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
                <PirateBuilding2 position={ [ 88, 5, - 60 ] } rotation-y={ Math.PI * 1.5 } />

                <PirateBuilding3 position={ [ - 90, 5, 58 ] } rotation-y={ Math.PI * 1.5 } />

            </group>
            {/* Grass island */}
            <group>
                <Cabin position={ [ 605, 5, 154 ] } rotation-y={ Math.PI * 1.3 } />
            </group>
            {/* Grass island */}
            {/* <group>
                <LargeBuilding1 position={ [ 530, 10.5, 140 ] } rotation-y={ Math.PI * 1.5 } />
                <LargeBuilding2 position={ [ 580, 12, 140 ] } rotation-y={ Math.PI * 0.5 } />
                <LargeBuilding3 position={ [ 550, 12, 100 ] } rotation-y={ Math.PI * 1 } />
            </group> */}
        </>
    )
}

useGLTF.preload("./assets/models/world/buildings/house-1.glb")
useGLTF.preload("./assets/models/world/buildings/house-2.glb")
useGLTF.preload("./assets/models/world/buildings/house-3.glb")
useGLTF.preload("./assets/models/world/buildings/cabin.glb")