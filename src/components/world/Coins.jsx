import { useGLTF } from "@react-three/drei"
import useGame from '../../stores/useGame.jsx'
import { useRef } from "react"
import { coinPositions } from "./positions/CoinPositions"
import { useFrame } from "@react-three/fiber"
import useSound from "use-sound"
import { Vector3 } from "three"

const Coin = (props) =>
{
    const { char } = props
    const coinPositionsCount = coinPositions.length
    const increaseCoins = useGame(state => state.increaseCoins)
    const [ playCoinSound ] = useSound('./assets/audio/rpg/coin.wav', { volume: 0.5, interrupt: true })
    const coinRef = useRef([])
    const { nodes, materials } = useGLTF("./assets/models/coin.glb")
    const coin = [...Array(coinPositionsCount)].map((value, index) =>
    <group
        ref={ (element) => coinRef.current[index] = element }
        key={ index }
        position={ coinPositions[index] }
        scale={ 1 }
        col={ false }
    >
        <group rotation={[-Math.PI / 2, 0, 0]} scale={ 100 }>
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
    )

    useFrame((state, delta) =>
    {
        coinRef.current.forEach((ref, index) => 
        {
            ref.rotation.y += delta * 0.5
            if(char.current)
            {
                const coinPosition = ref.position
                const playerPosition = char.current.translation()
                const position = new Vector3(playerPosition.x, playerPosition.y, playerPosition.z)
                const distance = coinPosition.distanceTo(position)
    
                if( !ref.col && distance < 1.3 )
                {
                    ref.col = true
                    increaseCoins()
                    playCoinSound()
                    ref.visible = false
                }
            }
        })
    })

    return(
        <>
            { coin }
        </>
    )
}



export default function Coins(props)
{
    const { char } = props

    return(
        <>
            <Coin char={ char } />
        </>
    )
}

useGLTF.preload("./assets/models/coin.glb")