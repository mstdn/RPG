import { Text } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useState } from "react"
import { Vector3 } from "three"
import useSound from "use-sound"

const GameText = (props) => 
{
    const { 
        text, 
        color, 
        size, 
        width, 
        position, 
        rotationY, 
        char, 
        sound, 
        pos, 
        repeat, 
        dis,
        lineHeight,
        letterSpacing,
        textAlign,
        hasAudio,
        font,
    } = props
    const [ playSound ] = useSound(sound, { volume: 1, interrupt: true })
    let play = true

    useFrame(() =>
    {
        if(char.current)
        {
            const position = new Vector3(pos[0], pos[1], pos[2])
            const charPosition = char.current.translation()
            const distance = position.distanceTo(new Vector3(charPosition.x, charPosition.y, charPosition.z))
            
            if(hasAudio && distance < dis && play)
            {
                playSound()
                play = false
            } 
            else if(hasAudio && distance > dis && !play && repeat)
            {
                play = true
            }
        }
    })

    return(
        <>
            <Text
                font={ font }
                fontSize={ size }
                maxWidth={ width }
                lineHeight={ lineHeight }
                letterSpacing={ letterSpacing }
                textAlign={ textAlign }
                color={ color }
                rotation-y={ rotationY }
                position={ position }
            >
                { text }
            </Text>
        </>
    )
}

export default function Texts(props)
{
    const { char } = props
    return(
        <>
            <GameText 
                text="You have landed"
                font="./assets/fonts/rpg.ttf"
                position={ [ 0, 6.8, 14.9 ] }
                pos={ [ 0, 0, 14.9 ] }
                rotationY={ - Math.PI * 1 }
                color={ "#ffd7b8" }
                size={ 0.8 }
                width={ 8 }
                lineHeight={ 2 }
                letterSpacing={ 0.05 }
                textAlign="center"
                hasAudio={ true }
                sound={ './assets/audio/welcome.wav' }
                repeat={ false }
                dis={ 10 }
                char={ char }
            />
        </>
    )
}