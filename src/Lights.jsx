import { Sky, Environment, Clouds, Cloud, ContactShadows, Stars } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export default function Lights(props)
{
    const { char, downgradedPerformance } = props
    const light = useRef()
    const sky = useRef()

    useFrame(() =>
    {
        if(char.current)
        {
            // Make lights follow the player
            const charPosition = char.current.translation()

            light.current.position.z = charPosition.z + 4 - 4
            light.current.target.position.z = charPosition.z - 4
            
            light.current.position.x = charPosition.x + 4 - 4
            light.current.target.position.x = charPosition.x - 4
            
            light.current.position.y = charPosition.y + 30
            light.current.target.position.y = charPosition.y
            
            light.current.target.updateMatrixWorld()

            // pointRef.current.position.z = charPosition.z + 2
            // pointRef.current.position.x = charPosition.x + 2
            // pointRef.current.position.y = charPosition.y + 2

            // pointRef.current.updateMatrixWorld()
            
            // console.log(pointRef.current.position)
            
            sky.current.position.z = charPosition.z + 1 - 4
            sky.current.position.x = charPosition.x + 1 - 4
            // sky.current.position.y = charPosition.y + 1 - 4
            sky.current.updateMatrixWorld()
        }
    })

    return <>
        {/* { !downgradedPerformance && (
        <>
            <Clouds position={ [ 0, 20, 0 ] } material={ THREE.MeshBasicMaterial }>
                <Cloud 
                    segments={ 150 } 
                    bounds={ [ 1000, 1000, 1000 ] } 
                    volume={ 1000 } 
                    color="lightblue"
                />
                <Cloud 
                    seed={ 20 } 
                    scale={ 2 } 
                    volume={ 10 } 
                    color="white" 
                    // fade={ 10 } 
                />
            </Clouds>
            <ContactShadows />
        </>
        )} */}
        <Environment
            // preset='night' 
            // files="./assets/images/map.hdr"
            files="./assets/images/sunset.hdr"
        />
        <ambientLight 
            intensity={ 0.1 } 
        />
        <directionalLight
            ref={ light }
            castShadow={ !downgradedPerformance }
            // color={ 'brown' }
            position={ [ 1, 8, 1 ] }
            intensity={ 1 }
            shadow-camera-near={ 0.1 }
            shadow-camera-far={ 75 }
            shadow-camera-top={ 75 }
            shadow-camera-right={ 75 }
            shadow-camera-bottom={ - 75 }
            shadow-camera-left={ - 75 }
            shadow-bias={ - 0.001 }
            shadow-mapSize-width={ 2048 }
            shadow-mapSize-height={ 2048 }
            // shadow-mapSize={ [ 1024, 1024 ] }
        />
        <Sky
            ref={ sky }
            // color={ 'brown' }
            sunPosition={ [ 1, 4, 1 ] }
        />
        {/* <Stars 
            ref={ sky }
            radius={ 400 }
            depth={ 100 }
            count={ 2000 }
            speed={ 0.5 }
            // factor={ 2 }
            fade={ !downgradedPerformance }
            
        /> */}
    </>
}