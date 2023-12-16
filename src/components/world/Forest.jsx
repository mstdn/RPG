import { useGLTF } from "@react-three/drei"
import { CuboidCollider, RigidBody } from "@react-three/rapier"
import { useRef } from "react"

const Trees = () =>
{
    const treePositions = [
        [ 493, 2, 250 ],
        [ 505, 2, 240 ],
        [ 505, 2, 251 ],
        [ 499, 2, 264 ],
        [ 493, 2, 259 ],
        [ 485, 2, 241 ],
        [ 489, 2, 237 ],
        [ 498, 2, 226 ],
        [ 506, 2, 224 ],
        [ 518, 2, 233 ], // 10
        [ 504, 2, 272 ],
        [ 505, 2, 265 ],
        [ 510, 2, 269 ],
        [ 478, 2, 243 ],
        [ 477, 2, 232 ],
        [ 481, 2, 230 ],
        [ 511, 2, 216 ],
        [ 513, 2, 211 ],
        [ 522, 2, 203 ],
        [ 526, 2, 215 ], // 20
        [ 550, 2, 238 ],
        [ 558, 2, 251 ],
        [ 532, 2, 271 ],
        [ 522, 2, 261 ],
        [ 477, 2, 232 ],
        [ 481, 2, 230 ],
        [ 511, 2, 216 ],
        [ 513, 2, 211 ],
        [ 522, 2, 203 ],
        [ 526, 2, 215 ], // 30
        
    ]

    const trunk = useRef([])
    const { nodes, materials } = useGLTF("./assets/models/world/trees/dead-tree.glb")
    const tree = [...Array(30)].map((value, index) =>
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