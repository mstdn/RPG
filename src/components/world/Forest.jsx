import { useGLTF } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import { useRef } from "react"
import { treePositions } from "./positions/TreePositions"

const Trees = () =>
{
    const treePositionsCount = treePositions.length
    const trunk = useRef([])
    const { nodes, materials } = useGLTF("./assets/models/world/trees/dead-tree.glb")
    const tree = [...Array(treePositionsCount)].map((value, index) =>
    <RigidBody
        type="fixed"
        colliders={ false }
        ref={ (element) => trunk.current[index] = element }
        key={ index }
        position={ treePositions[index] }
        // position={ [ 
        //     (Math.random() - 0.5) * 230 + 600,
        //     // (Math.random() - 0.5) * 10,
        //     2,
        //     (Math.random() - 0.5) * 230 + 150
        // ] }
        scale={ 2 + Math.random() * 0.5 }
        rotation-y={ Math.PI * Math.random() }
    >
        <mesh
            postion={ [ 0, 0, 0 ] }
            castShadow
            receiveShadow
            geometry={nodes.Tree_Green_03_Circle.geometry}
            material={materials.Tree_Green_03}
            // rotation={ [
            //     Math.random() * Math.PI,
            //     Math.random() * Math.PI,
            //     0
            // ] }
        />
        <CuboidCollider 
            args={ [ 0.5, 6, 0.5 ] } 
            postion={ [ 0, - 2, 0 ] }    
        />
    </RigidBody>
    )

    return(
        <>
            { tree }
        </>
    )
}

export default function Forest()
{

    return(
        <>
            <Trees position={ [ 0, 0, 0 ] } />
        </>
    )
}