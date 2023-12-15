import { Ground } from "./Ground"
import Structures from "./world/Structures"
import Ocean from "./world/Ocean"
import Environment from "./world/Environment"
import Trees from "./world/Trees"
import Collectables from "./Collectables"
import Teleports from "./world/Teleports"
import Platforms from "./world/Platforms"
import Texts from "./world/Texts"
import Buildings from "./world/Buildings"

// import { Twitter } from "./world/models/TwitterLogo"
// import { XLogo } from "./world/models/XLogo"
import { Elon } from "./world/models/Elon"
import { Trump } from "./world/models/Trump"
import { Putin } from "./world/models/Putin"


export default function World(props)
{
    const { char, downgradedPerformance } = props
    
    return(
    <>
        <group>
            <Platforms />
            <Buildings />
            {/* <Platforms /> */}

            <Texts char={ char } />
            <Structures />
        
            <Trees />


            <Teleports char={ char } />
            <Collectables char={ char } />

            {/* <Twitter position={ [ - 92, 12.5, 27 ] } rotation-y={ Math.PI * 0 } />
            <XLogo position={ [ 46, 13, - 5 ] } rotation-y={ Math.PI * 1 } /> */}
            
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