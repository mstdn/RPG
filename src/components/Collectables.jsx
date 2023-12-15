import { useGLTF } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef, useState } from "react"
import useGame from '../stores/useGame.jsx'
import { Vector3 } from "three"
import useSound from "use-sound"

const DIST = 1.5
const SCALE = 1.5

const Coin = (props) => 
{
    const [ playCoinSound ] = useSound('./assets/audio/rpg/coin.wav')
    const { coin, char, dis } = props
    const increaseCoins = useGame(state => state.increaseCoins)
    const { nodes, materials } = useGLTF("./assets/models/coin.glb")

    useFrame((state, delta) =>
    {
        // Item rotate
        coin.current.rotation.y += delta * 0.5
        // coin.current.rotation.x -= Math.cos(delta * 0.5) * 0.01

        if(char.current)
        {
            const coinPosition = coin.current.position
            const playerPosition = char.current.translation()
            const position = new Vector3(playerPosition.x, playerPosition.y, playerPosition.z)
            const distance = coinPosition.distanceTo(position)

            if( !coin.current.col && distance < dis )
            {
                coin.current.col = true
                increaseCoins()
                playCoinSound()
                coin.current.visible = false
            }
        }
    })

    return(
        <>
            <group ref={coin} {...props} dispose={null}>
                <group scale={ 100 } rotation={[-Math.PI / 2, 0, 0]} >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Coin_1.geometry}
                        material={materials.Yellow}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Coin_2.geometry}
                        material={materials.DarkYellow}
                    />
                </group>
            </group>
        </>
    )
}

export function totalCoinAmount()
{
    return totalCoinAmount = 12
}

export default function Collectables(props)
{
    const { char } = props
    const coin1  = useRef()
    const coin2  = useRef()
    const coin3  = useRef()
    const coin4  = useRef()
    const coin5  = useRef()
    const coin6  = useRef()
    const coin7  = useRef()
    const coin8  = useRef()
    const coin9  = useRef()
    const coin10  = useRef()
    const coin11  = useRef()
    const coin12  = useRef()
    const coin13  = useRef()
    const coin14  = useRef()
    const coin15  = useRef()
    const coin16  = useRef()
    const coin17  = useRef()
    const coin18  = useRef()
    const coin19  = useRef()
    const coin20  = useRef()
    const coin21  = useRef()
    const coin22  = useRef()
    const coin23  = useRef()
    const coin24  = useRef()
    const coin25  = useRef()
    const coin26  = useRef()
    const coin27  = useRef()
    const coin28  = useRef()
    const coin29  = useRef()
    const coin30  = useRef()

    return(
    <>
        <group>
            {/* Beach island */}
            <group>
                <Coin 
                    coin={ coin1 }
                    position={ [ 0.1, 3.5, 5 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
                <Coin 
                    coin={ coin2 } 
                    position={ [ - 88, 3.5, 6.5 ] } 
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
                <Coin 
                    coin={ coin3 } 
                    position={ [ - 102, 3.5, - 95 ] } 
                    dis={ DIST }
                    char={ char }
                    col={ false }
                    scale={ SCALE }
                />
                <Coin 
                    coin={ coin4 } 
                    position={ [ - 13, 3.5, 111 ] }
                    dis={ DIST }
                    char={ char }
                    scale={ SCALE }
                    col={ false }
                />
                <Coin 
                    coin={ coin5 } 
                    position={ [ 96, 3.5, 94 ] }
                    dis={ DIST }
                    char={ char }
                    col={ false }
                    scale={ SCALE }
                />
                <Coin 
                    coin={ coin6 } 
                    position={ [ 45, 3, - 112 ] }
                    dis={ DIST }
                    char={ char }
                    col={ false }
                    scale={ SCALE }
                />
                <Coin 
                    coin={ coin7 } 
                    position={ [ - 63, 3.5, 88 ] }
                    dis={ DIST }
                    char={ char }
                    col={ false }
                    scale={ SCALE }
                />
                <Coin 
                    coin={ coin8 } 
                    position={ [ 45, 3.5, 56 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
                <Coin 
                    coin={ coin9 } 
                    position={ [ 100, 3.5, - 25 ] }
                    dis={ DIST }
                    char={ char }
                    col={ false }
                    scale={ SCALE }
                />
                <Coin 
                    coin={ coin10 } 
                    position={ [ 104, 3.5, 37 ] }
                    dis={ DIST }
                    char={ char }
                    col={ false }
                    scale={ SCALE }
                />
            </group>

            {/* Grass island */}
            <group>
                <Coin 
                    coin={ coin11 } 
                    position={ [ 568, 3.5, 101 ] }
                    dis={ DIST }
                    char={ char }
                    col={ false }
                    scale={ SCALE }
                />
                <Coin 
                    coin={ coin12 }
                    position={ [ 690, 3.5, 55 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
            </group>

            {/* Right side Start */}
            {/* <group>
                
                <Coin 
                    coin={ coin13 }
                    position={ [ - 93, 17, 33 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
                <Coin 
                    coin={ coin14 }
                    position={ [ - 98, 20, 33 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
                <Coin 
                    coin={ coin15 }
                    position={ [ - 103, 23, 33 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
                <Coin 
                    coin={ coin16 }
                    position={ [ - 108, 26, 33 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
                <Coin 
                    coin={ coin17 }
                    position={ [ - 108, 29, 27 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
                <Coin 
                    coin={ coin18 }
                    position={ [ - 108, 32, 22 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
                <Coin 
                    coin={ coin19 }
                    position={ [ - 108, 35, 17 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
                <Coin 
                    coin={ coin20 }
                    position={ [ - 108, 38, 12 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
                <Coin 
                    coin={ coin21 }
                    position={ [ - 108, 41, 7 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
                <Coin 
                    coin={ coin22 }
                    position={ [ - 103, 41, 7 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
                <Coin 
                    coin={ coin23 }
                    position={ [ - 98, 41, 7 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
                <Coin 
                    coin={ coin24 }
                    position={ [ - 93, 41, 7 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
                <Coin 
                    coin={ coin25 }
                    position={ [ - 88, 41, 7 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
                <Coin 
                    coin={ coin26 }
                    position={ [ - 88, 41, 12 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
                <Coin 
                    coin={ coin27 }
                    position={ [ - 88, 41, 17 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
                <Coin 
                    coin={ coin28 }
                    position={ [ - 88, 41, 22 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
                <Coin 
                    coin={ coin29 }
                    position={ [ - 93, 41, 22 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
                <Coin 
                    coin={ coin30 }
                    position={ [ - 98, 41, 22 ] }
                    dis={ DIST }
                    scale={ SCALE }
                    char={ char }
                    col={ false }
                />
            </group> */}
        </group>
    </>
    )
}



useGLTF.preload("./assets/models/fly.glb")