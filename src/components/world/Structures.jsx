import React, { forwardRef, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { RigidBody, CuboidCollider } from "@react-three/rapier"


const Crate = forwardRef((props, ref) =>
{
    const { nodes, materials } = useGLTF("./assets/models/world/crate.glb")
    return (
        <RigidBody 
            // colliders="hull"
            colliders={ false }
            // gravityScale={ 1 }
            // friction={ 1 }
            restitution={ 0.5 }
            ref={ ref }
            canSleep={ false }
            {...props}
        >   
            <group  dispose={null}>
                <group scale={ 150 }>
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
                <CuboidCollider 
                    args={ [ 1.5, 1.5, 1.5 ] }
                    position={ [ 0, 0, 1.5 ] } 
                />
            </group>
        </RigidBody>
        )
})

const Barrel = forwardRef((props, ref) =>
{
    const { nodes, materials } = useGLTF("./assets/models/world/barrel.glb")
    return (
        <RigidBody 
            colliders="hull"
            // colliders={ false }
            gravityScale={ 1.5 }
            // friction={ 1 }
            restitution={ 0.5 }
            ref={ ref }
            canSleep={ false }
        >   
            <group {...props} dispose={null}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={ 100 }>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.ExplodingBarrel_1.geometry}
                        material={materials.Grey}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.ExplodingBarrel_2.geometry}
                        material={materials.Red}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.ExplodingBarrel_3.geometry}
                        material={materials.White}
                    />
                </group>
            </group>
        </RigidBody>
        )
})

const PirateBarrel = forwardRef((props, ref) =>
{
    const { nodes, materials } = useGLTF("./assets/models/world/pirate/barrel.glb")
    return (
        <RigidBody 
            // colliders="hull"
            colliders={ false }
            gravityScale={ 1.5 }
            // friction={ 1 }
            // restitution={ 0.5 }
            ref={ ref }
            canSleep={ false }
            {...props}
        >   
            <group dispose={null}>
                <group scale={ 300 }>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Prop_Barrel.geometry}
                        material={materials.Atlas}
                    />
                </group>
            </group>
            <CuboidCollider 
                args={ [ 1, 1, 1 ] } 
                position={ [ 0, 1, 0 ] }
            />
        </RigidBody>
        )
})

const PirateChestOpen = forwardRef((props, ref) =>
{
    const { nodes, materials } = useGLTF("./assets/models/world/pirate/chest-gold.glb")
    return (
        <RigidBody 
            // colliders="hull"
            colliders={ false }
            gravityScale={ 1.5 }
            // friction={ 1 }
            // restitution={ 0.5 }
            ref={ ref }
            canSleep={ false }
            {...props}
        >   
            <group dispose={null}>
                <group scale={ 300 }>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Prop_Chest_Gold.geometry}
                        material={materials.Atlas}
                        scale={1}
                    />
                </group>
            </group>
            <CuboidCollider 
                args={ [ 1.5, 1.8, 1.5 ] } 
                position={ [ 0, 1.8, 0 ] }
            />
        </RigidBody>
        )
})

const PirateSkull = forwardRef((props, ref) =>
{
    const { nodes, materials } = useGLTF("./assets/models/world/pirate/skull.glb")
    return (
        <RigidBody 
            colliders={ false }
            gravityScale={ 1.5 }
            // friction={ 1 }
            // restitution={ 0.5 }
            ref={ ref }
            canSleep={ false }
            {...props}
        >   
            <group dispose={null}>
                <group scale={ 100 }>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Environment_Skulls.geometry}
                        material={materials.Atlas}
                        scale={1}
                    />
                </group>
            </group>
            <CuboidCollider 
                args={ [ 1.5, 1.8, 2 ] } 
                position={ [ 0, 1.8, 0.2 ] }
            />
        </RigidBody>
        )
})


const Rover = forwardRef((props, ref) =>
{
    const { nodes, materials } = useGLTF("./assets/models/world/rover.glb")
    return (
        <RigidBody 
            // colliders="hull"
            colliders={ false }
            gravityScale={ 0.8 }
            friction={ 0.2 }
            restitution={ 0.2 }
            ref={ ref }
            canSleep={ false }
            {...props}
        >   
            <group rotation-z={ - Math.PI * 0.05 } position={ [ 0, - 1, 0 ] } dispose={null}>
                <group scale={ 4 }>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Node-Mesh"].geometry}
                        material={materials.mat17}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Node-Mesh_1"].geometry}
                        material={materials.mat16}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Node-Mesh_2"].geometry}
                        material={materials.mat21}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Node-Mesh_3"].geometry}
                        material={materials.mat22}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Node-Mesh_4"].geometry}
                        material={materials.mat15}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Node-Mesh_5"].geometry}
                        material={materials.mat23}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["Node-Mesh_6"].geometry}
                        material={materials.mat13}
                    />
                </group>
            </group>
            <CuboidCollider
                args={ [ 2.5, 3, 3 ] }
                position={ [ 0, 0, 0 ] } 
            />
        </RigidBody>
        )
})

// const Islands = (props) =>
// {
//     const { nodes, materials } = useGLTF("./assets/models/world/terrain.glb")
//     return (
//         <RigidBody
//             type="fixed"
//             colliders="hull"
//         >
//             <group scale={ 0.03 } {...props} dispose={null}>
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Terrain_Material_0.geometry}
//                 material={materials.Material}
//                 position={[0, 0, 1035.547]}
//                 scale={1.819}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Terrain001_Material_0.geometry}
//                 material={materials.Material}
//                 position={[0, 0, 1780.865]}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Terrain002_Material_0.geometry}
//                 material={materials.Material}
//                 position={[0, 0, 209.097]}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Terrain003_Material_0.geometry}
//                 material={materials.Material}
//                 position={[0, 0, -3882.207]}
//                 scale={[4.152, 4.152, 7.654]}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Terrain004_Material_0.geometry}
//                 material={materials.Material}
//                 position={[0, 0, -1508.219]}
//                 scale={[4.152, 4.152, 7.654]}
//             />
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Terrain005_Material_0.geometry}
//                 material={materials.Material}
//                 position={[0, 0, 2863.021]}
//                 scale={[2.618, 1, 6.583]}
//             />
//             </group>
//         </RigidBody>
//     )
// }

const Sign = (props) =>
{
    const { nodes, materials } = useGLTF("./assets/models/world/wooden-sign.glb")
    return (
      <group scale={ 3 } {...props} dispose={null}>
        <group scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sign12_1.geometry}
            material={materials["Light Wood"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sign12_2.geometry}
            material={materials["Dark Wood"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sign12_3.geometry}
            material={materials.Herbs}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sign12_4.geometry}
            material={materials.Rocks}
          />
        </group>
      </group>
    )
}

export default function Structures()
{
    // Crates
    const crate = useRef()
    const crate1 = useRef()
    const crate2 = useRef()
    const crate3 = useRef()
    
    // Normal barrels
    const barrel = useRef()
    const barrel1 = useRef()
    
    // Rover
    const rover = useRef()

    // Pirate barrels
    const pirateBarrel = useRef()

    const pirateChestOpen = useRef()
    
    const pirateSkull = useRef()
    
    return(
        <>
            <Crate ref={ crate } position={ [ - 20, 6, 22 ] } rotation-y={ Math.PI * 0.3 } scale={ 1 } />
            <Crate ref={ crate1 } position={ [ - 45, 8, 17 ] } scale={ 1.4 } rotation-y={ Math.PI * 0.2 } />
            <Crate ref={ crate2 } position={ [ 48, 12.5, 55 ] } scale={ 1.2 } rotation-y={ Math.PI * 0.7 } />
            <Crate ref={ crate3 } position={ [ - 10, 14, 15 ] } scale={ 1 } />
            
            <Barrel ref={ barrel } position={ [ 510, 11, 213 ] } scale={ 1.5 } />
            <Barrel ref={ barrel1 } position={ [ 607, 7.9, 198 ] } scale={ 1.2 } />
            
            <Rover ref={ rover } position={ [ - 540, 3.1, - 200 ] } scale={ 1.2 } />

            <group>
                <Sign position={ [ 0, 1.8, 15 ] } rotation-y={ Math.PI * 1 } />
            </group>
            <group>
                <PirateBarrel ref={ pirateBarrel } position={ [ 56, 7.9, - 76 ] } rotation-y={ Math.PI * 1 } />
                <PirateChestOpen ref={ pirateChestOpen } position={ [ - 70, 7.9, 90 ] } rotation-y={ - Math.PI * 1.4 } />
                <PirateSkull ref={ pirateSkull } position={ [ - 31, 7.9, - 69 ] } rotation-y={ Math.PI * 0.3 } />
            </group>
        </>
    )
}

useGLTF.preload("./assets/models/world/crate.glb")
useGLTF.preload("./assets/models/world/barrel.glb")
useGLTF.preload("./assets/models/world/rover.glb")
useGLTF.preload("./assets/models/world/wooden-sign.glb")

useGLTF.preload("./assets/models/world/pirate/barrel.glb")
useGLTF.preload("./assets/models/world/pirate/chest-gold.glb")
useGLTF.preload("./assets/models/world/pirate/skull.glb")