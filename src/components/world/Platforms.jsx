import React, { useRef } from "react"
import { useGLTF, useTexture } from "@react-three/drei"
import * as THREE from "three"
import { CuboidCollider, RigidBody } from "@react-three/rapier"


/**
 *  World platform
 */
// const Sand = (props) => 
// {
//     const ground = useTexture('./assets/textures/sand.jpg')
//     ground.wrapS = ground.wrapT = THREE.RepeatWrapping
//     return (
//         <RigidBody 
//             type="fixed" 
//             colliders={ false }
//             {...props}
//         >
//             <mesh receiveShadow position={ [ 0, - 3, 0 ] } rotation-x={ - Math.PI / 2 }>
//                 <boxGeometry args={ [ 100, 100, 10 ] } />
//                 <meshStandardMaterial map={ ground } map-repeat={ [ 16, 16  ] } color="green" />
//             </mesh>
//             <CuboidCollider 
//                 args={ [ 50, 2, 50 ] }
//                 position={ [ 0, 0, 0 ] } 
//             />
//         </RigidBody>
//     )
// }

/**
 *  Start block
 */
// const BeachIsland = (props) => 
// {
//     const { texture, map, color, boxSize, colBox } = props
//     const ground = useTexture( texture )
//     ground.wrapS = ground.wrapT = THREE.RepeatWrapping
//     return (
//         <RigidBody 
//             type="fixed" 
//             colliders={ false }
//             {...props}
//         >
//             <mesh receiveShadow position={ [ 0, 0, 0 ] }>
//                 <boxGeometry args={ boxSize } />
//                 <meshStandardMaterial map={ ground } map-repeat={ map } color={ color } />
//             </mesh>
//             <CuboidCollider 
//                 args={ colBox }
//                 position={ [ 0, 0, 0 ] } 
//             />
//         </RigidBody>
//     )
// }

/**
 *  Start block
 */
// const Block = (props) => 
// {
//     const { texture, map, color, boxSize, colBox } = props
//     const ground = useTexture( texture )
//     ground.wrapS = ground.wrapT = THREE.RepeatWrapping
//     return (
//         <RigidBody 
//             type="fixed" 
//             colliders={ false }
//             {...props}
//         >
//             <mesh receiveShadow position={ [ 0, 0, 0 ] }>
//                 <boxGeometry args={ boxSize } />
//                 <meshStandardMaterial map={ ground } map-repeat={ map } color={ color } />
//             </mesh>
//             <CuboidCollider 
//                 args={ colBox }
//                 position={ [ 0, 0, 0 ] } 
//             />
//         </RigidBody>
//     )
// }


/**
 *  Dark stone
 */
const Forest = (props) => 
{
    const [ colorMap, displacementMap, normalMap, roughnessMap, aoMap ] = useTexture(
        [
            './assets/textures/dirt/basecolor.jpg',
            './assets/textures/dirt/height.png',
            './assets/textures/dirt/normal.jpg',
            './assets/textures/dirt/roughness.jpg',
            './assets/textures/dirt/occlusion.jpg',
        ]
    )

    const repeatMap = [ 32, 32 ]

    colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping
    colorMap.repeat.set( repeatMap[0], repeatMap[1] )
    normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping
    normalMap.repeat.set( repeatMap[0], repeatMap[1] )
    roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping
    roughnessMap.repeat.set( repeatMap[0], repeatMap[1] )
    aoMap.wrapS = aoMap.wrapT = THREE.RepeatWrapping
    aoMap.repeat.set( repeatMap[0], repeatMap[1] )
    displacementMap.wrapS = displacementMap.wrapT = THREE.RepeatWrapping
    displacementMap.repeat.set( repeatMap[0], repeatMap[1] )
      
    return (
        <RigidBody 
            type="fixed" 
            colliders={ false }
            {...props}
        >
            <mesh receiveShadow position={ [ 0, 0, 0 ] } rotation-x={ - Math.PI / 2 }>
                <boxGeometry args={ [ 250, 250, 4 ] } />
                <meshStandardMaterial
                    displacementScale={ 0.2 }
                    map={ colorMap }
                    displacementMap={ displacementMap }
                    normalMap={ normalMap }
                    roughnessMap={ roughnessMap }
                    aoMap={ aoMap }            
                    // map-repeat={ [ 1024, 1024  ] } 
                    color="white" 
                />
            </mesh>
            <CuboidCollider 
                args={ [ 125, 2, 125 ] }
                position={ [ 0, 0, 0 ] } 
            />
        </RigidBody>
    )
}

/**
 *  Beach stone
 */
// const BeachStone = (props) => 
// {
//     const ground = useTexture('./assets/textures/sand.jpg')
//     ground.wrapS = ground.wrapT = THREE.RepeatWrapping

//     const [ colorMap, displacementMap, normalMap, roughnessMap, aoMap ] = useTexture(
//         [
//             './assets/textures/beachstone/basecolor.jpg',
//             './assets/textures/beachstone/height.png',
//             './assets/textures/beachstone/normal.jpg',
//             './assets/textures/beachstone/roughness.jpg',
//             './assets/textures/beachstone/occlusion.jpg',
//         ]
//     )

//     const repeatMap = [ 20, 20 ]

//     colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping
//     colorMap.repeat.set( repeatMap[0], repeatMap[1] )
//     normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping
//     normalMap.repeat.set( repeatMap[0], repeatMap[1] )
//     roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping
//     roughnessMap.repeat.set( repeatMap[0], repeatMap[1] )
//     aoMap.wrapS = aoMap.wrapT = THREE.RepeatWrapping
//     aoMap.repeat.set( repeatMap[0], repeatMap[1] )
//     displacementMap.wrapS = displacementMap.wrapT = THREE.RepeatWrapping
//     displacementMap.repeat.set( repeatMap[0], repeatMap[1] )
      
//     return (
//         <RigidBody 
//             type="fixed" 
//             colliders={ false }
//             {...props}
//         >
//             <mesh receiveShadow position={ [ 0, 0, 0 ] } rotation-x={ - Math.PI / 2 }>
//                 <boxGeometry args={ [ 250, 250, 4 ] } />
//                 <meshStandardMaterial
//                     displacementScale={ 0.2 }
//                     map={ colorMap }
//                     displacementMap={ displacementMap }
//                     normalMap={ normalMap }
//                     roughnessMap={ roughnessMap }
//                     aoMap={ aoMap }            
//                     // map-repeat={ [ 1024, 1024  ] } 
//                     color="white" 
//                 />
//             </mesh>
//             <CuboidCollider 
//                 args={ [ 125, 2, 125 ] }
//                 position={ [ 0, 0, 0 ] } 
//             />
//         </RigidBody>
//     )
// }


/**
 *  Beach stone
 */
const Beach = (props) => 
{
    const [ colorMap, displacementMap, normalMap, roughnessMap, aoMap ] = useTexture(
        [
            './assets/textures/beach/basecolor.jpg',
            './assets/textures/beach/height.png',
            './assets/textures/beach/normal.jpg',
            './assets/textures/beach/roughness.jpg',
            './assets/textures/beach/occlusion.jpg',
        ]
    )

    const repeatMap = [ 20, 20 ]

    colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping
    colorMap.repeat.set( repeatMap[0], repeatMap[1] )
    normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping
    normalMap.repeat.set( repeatMap[0], repeatMap[1] )
    roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping
    roughnessMap.repeat.set( repeatMap[0], repeatMap[1] )
    aoMap.wrapS = aoMap.wrapT = THREE.RepeatWrapping
    aoMap.repeat.set( repeatMap[0], repeatMap[1] )
    displacementMap.wrapS = displacementMap.wrapT = THREE.RepeatWrapping
    displacementMap.repeat.set( repeatMap[0], repeatMap[1] )
      
    return (
        <RigidBody 
            type="fixed" 
            colliders={ false }
            {...props}
        >
            <mesh receiveShadow position={ [ 0, 0, 0 ] } rotation-x={ - Math.PI / 2 }>
                <boxGeometry args={ [ 250, 250, 4 ] } />
                <meshStandardMaterial
                    displacementScale={ 0.2 }
                    map={ colorMap }
                    displacementMap={ displacementMap }
                    normalMap={ normalMap }
                    roughnessMap={ roughnessMap }
                    aoMap={ aoMap }            
                    // map-repeat={ [ 1024, 1024  ] } 
                    color="white" 
                />
            </mesh>
            <CuboidCollider 
                args={ [ 125, 2, 125 ] }
                position={ [ 0, 0, 0 ] } 
            />
        </RigidBody>
    )
}

/**
 *  Ground base
 */
const Mars = (props) => 
{
    const [ colorMap, displacementMap, normalMap, roughnessMap, aoMap ] = useTexture(
        [
            './assets/textures/mud/basecolor.jpg',
            './assets/textures/mud/height.png',
            './assets/textures/mud/normal.jpg',
            './assets/textures/mud/roughness.jpg',
            './assets/textures/mud/occlusion.jpg',
        ]
    )

    const repeatMap = [ 20, 20 ]

    colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping
    colorMap.repeat.set( repeatMap[0], repeatMap[1] )
    normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping
    normalMap.repeat.set( repeatMap[0], repeatMap[1] )
    roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping
    roughnessMap.repeat.set( repeatMap[0], repeatMap[1] )
    aoMap.wrapS = aoMap.wrapT = THREE.RepeatWrapping
    aoMap.repeat.set( repeatMap[0], repeatMap[1] )
    displacementMap.wrapS = displacementMap.wrapT = THREE.RepeatWrapping
    displacementMap.repeat.set( repeatMap[0], repeatMap[1] )
      
    return (
        <RigidBody 
            type="fixed" 
            colliders={ false }
            {...props}
        >
            <mesh receiveShadow position={ [ 0, 0, 0 ] } rotation-x={ - Math.PI / 2 }>
                <boxGeometry args={ [ 250, 250, 4 ] } />
                <meshStandardMaterial
                    displacementScale={ 0.2 }
                    map={ colorMap }
                    displacementMap={ displacementMap }
                    normalMap={ normalMap }
                    roughnessMap={ roughnessMap }
                    aoMap={ aoMap }            
                    // map-repeat={ [ 1024, 1024  ] } 
                    color="white" 
                />
            </mesh>
            <CuboidCollider 
                args={ [ 125, 2, 125 ] }
                position={ [ 0, 0, 0 ] } 
            />
        </RigidBody>
    )
}




export default function Platforms()
{
    return(
        <>  
            <Beach
                position={ [ 0, 0, 0 ] }
            />
            <Mars
                position={ [ - 600, 0, - 150 ] }
            />
            <Forest
                position={ [ 600, 0, 150 ] }
            />
        </>
    )
}

// Stone ground
useTexture.preload('./assets/textures/dirt/basecolor.jpg')
useTexture.preload('./assets/textures/dirt/height.png')
useTexture.preload('./assets/textures/dirt/roughness.jpg')
useTexture.preload('./assets/textures/dirt/occlusion.jpg')
useTexture.preload('./assets/textures/dirt/normal.jpg')
// Beach ground
useTexture.preload('./assets/textures/beach/basecolor.jpg')
useTexture.preload('./assets/textures/beach/height.png')
useTexture.preload('./assets/textures/beach/roughness.jpg')
useTexture.preload('./assets/textures/beach/occlusion.jpg')
useTexture.preload('./assets/textures/beach/normal.jpg')
// Lava
useTexture.preload('./assets/textures/mud/basecolor.jpg')
useTexture.preload('./assets/textures/mud/height.png')
useTexture.preload('./assets/textures/mud/roughness.jpg')
useTexture.preload('./assets/textures/mud/occlusion.jpg')
useTexture.preload('./assets/textures/mud/normal.jpg')
