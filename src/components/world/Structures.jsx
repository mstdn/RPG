import React, { forwardRef, useRef } from "react"
import { useGLTF } from "@react-three/drei"
import { RigidBody, CuboidCollider } from "@react-three/rapier"


// const Crate = forwardRef((props, ref) =>
// {
//     const { nodes, materials } = useGLTF("./assets/models/world/crate.glb")
//     return (
//         <RigidBody 
//             // colliders="hull"
//             colliders={ false }
//             // gravityScale={ 1 }
//             // friction={ 1 }
//             restitution={ 0.5 }
//             ref={ ref }
//             canSleep={ false }
//             {...props}
//         >   
//             <group  dispose={null}>
//                 <group scale={ 150 }>
//                     <mesh
//                         castShadow
//                         receiveShadow
//                         geometry={nodes.Crate_1.geometry}
//                         material={materials.Wood}
//                     />
//                     <mesh
//                         castShadow
//                         receiveShadow
//                         geometry={nodes.Crate_2.geometry}
//                         material={materials.Wood_Light}
//                     />

//                 </group>
//                 <CuboidCollider 
//                     args={ [ 1.5, 1.5, 1.5 ] }
//                     position={ [ 0, 0, 1.5 ] } 
//                 />
//             </group>
//         </RigidBody>
//         )
// })



// const Barrel = forwardRef((props, ref) =>
// {
//     const { nodes, materials } = useGLTF("./assets/models/world/barrel.glb")
//     return (
//         <RigidBody 
//             colliders="hull"
//             // colliders={ false }
//             gravityScale={ 1.5 }
//             // friction={ 1 }
//             restitution={ 0.5 }
//             ref={ ref }
//             canSleep={ false }
//         >   
//             <group {...props} dispose={null}>
//                 <group rotation={[-Math.PI / 2, 0, 0]} scale={ 100 }>
//                     <mesh
//                         castShadow
//                         receiveShadow
//                         geometry={nodes.ExplodingBarrel_1.geometry}
//                         material={materials.Grey}
//                     />
//                     <mesh
//                         castShadow
//                         receiveShadow
//                         geometry={nodes.ExplodingBarrel_2.geometry}
//                         material={materials.Red}
//                     />
//                     <mesh
//                         castShadow
//                         receiveShadow
//                         geometry={nodes.ExplodingBarrel_3.geometry}
//                         material={materials.White}
//                     />
//                 </group>
//             </group>
//         </RigidBody>
//         )
// })



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

const Axe = forwardRef((props, ref) =>
{
    const { nodes, materials } = useGLTF("./assets/models/world/items/axe.glb")
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
                <group scale={ 3 } >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["LogWAxe_Cylinder012-Mesh"].geometry}
                        material={materials.Wood}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["LogWAxe_Cylinder012-Mesh_1"].geometry}
                        material={materials.Wood_l_shade}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["LogWAxe_Cylinder012-Mesh_2"].geometry}
                        material={materials.Handle_Axe}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes["LogWAxe_Cylinder012-Mesh_3"].geometry}
                        material={materials.M}
                    />
                </group>
                <CuboidCollider 
                    args={ [ 1, 1, 1 ] }
                    position={ [ 0, 0, 0 ] } 
                />
            </group>
        </RigidBody>
        )
})

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
    // Rover
    const rover = useRef()

    const pirateChestOpen = useRef()
    const pirateChestOpen1 = useRef()

    const axe = useRef()
    
    return(
        <>    
            <Rover ref={ rover } position={ [ - 540, 3.1, - 200 ] } scale={ 1.2 } />

            <group>
                <Sign position={ [ 0, 1.8, 15 ] } rotation-y={ Math.PI * 1 } />
                <Sign position={ [ - 100, 1.8, - 106 ] } rotation-y={ Math.PI * 0.1 } />
                <Sign position={ [ 88, 1.8, 102 ] } rotation-y={ Math.PI * 0.95 } />
            </group>
            <group>
                <PirateChestOpen ref={ pirateChestOpen } position={ [ - 70, 7.9, 90 ] } rotation-y={ - Math.PI * 1.4 } />
                <PirateChestOpen ref={ pirateChestOpen1 } position={ [ 104, 7.9, 37 ] } rotation-y={ Math.PI * 1.5 } />
            </group>

            {/* Forest */}
            <group>
                <Axe ref={ axe } position={ [ 590, 11, 134 ] } />
            </group>
        </>
    )
}


useGLTF.preload("./assets/models/world/rover.glb")
useGLTF.preload("./assets/models/world/wooden-sign.glb")
useGLTF.preload("./assets/models/world/pirate/chest-gold.glb")
