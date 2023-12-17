import { Ground } from "./Ground"
import Structures from "./world/Structures"
import Ocean from "./world/Ocean"
import Environment from "./world/Environment"
import Trees from "./world/Trees"
import Teleports from "./world/Teleports"
import Platforms from "./world/Platforms"
import Texts from "./world/Texts"
import Buildings from "./world/Buildings"
import { Elon } from "./world/models/Elon"
import { Trump } from "./world/models/Trump"
import { Putin } from "./world/models/Putin"
import Forest from "./world/Forest"
import Coins from "./world/Coins"
import Barrels from "./world/Barrels"
import Crates from "./world/Crates"
import Skulls from "./world/Skulls"


export default function World(props)
{
    const { char, downgradedPerformance } = props
    
    return(
    <>
        <group>
            <Platforms />
            <Buildings />

            <Texts char={ char } />
            <Structures />
            <Barrels />
            <Crates />
            <Skulls />

            <Trees />
            <Forest />

            <Teleports char={ char } />
            <Coins char={ char } />

            <Elon 
                rotation-y={ Math.PI * 1 } 
                position={ [ 60, 12, 105 ] } 
                pos={ [  60, 5, 105 ] } 
                char={ char } 
            />
            <Trump 
                rotation-y={ Math.PI * 1 } 
                position={ [ - 33, 12.5, - 101 ] } 
                pos={ [ - 33, 12.5, - 101 ] } 
                char={ char } 
            />
            <Putin 
                rotation-y={ Math.PI * 0.5 } 
                position={ [ - 90, 12.5, - 11 ] } 
                pos={ [  - 90, 12.5, - 11 ] } 
                char={ char } 
            />

            <Ocean />
            <Ground />
            <Environment />
        </group>
    </>
    )
}