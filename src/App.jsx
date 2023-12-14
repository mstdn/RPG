import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience.jsx'
import { Suspense, useEffect, useState } from 'react'
import { Physics } from '@react-three/rapier'
import { KeyboardControls, PointerLockControls, Preload, PerformanceMonitor } from '@react-three/drei'
import { isMobile, isDesktop } from 'react-device-detect'
import Interface from './components/Interface.jsx'
import { LoadingScreen } from './components/LoadingScreen.jsx'
import MobileInterface from './components/MobileInterface.jsx'
import Joystick from './components/Joystick.jsx'
import { Perf } from 'r3f-perf'


export default function App()
{
    const [ downgradedPerformance, setDowngradedPerformance ] = useState(false)
    const [ started, setStarted ] = useState(false)

    const [ paused, setPaused ] = useState(false)
    useEffect(() => 
    {
        document.addEventListener("visibilitychange", () => 
        {      
            setPaused(true)
        })
        return() =>
        {
            document.removeEventListener("visibilitychange", () => {} )
        }
    }, [])

    const keyboardMap = 
    [
        { name: "forward", keys: ["ArrowUp", "KeyW"] },
        { name: "backward", keys: ["ArrowDown", "KeyS"] },
        { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
        { name: "rightward", keys: ["ArrowRight", "KeyD"] },
        { name: "jump", keys: ["Space"] },
        { name: "run", keys: ["Shift"] },
        // { name: "up", keys: ["KeyQ"] },
        // { name: "down", keys: ["KeyE"] },
        // Optional animation key map
        { name: "action4", keys: ["1"] },
        { name: "action2", keys: ["2"] },
        { name: "action3", keys: ["3"] },
        // { name: "action4", keys: ["4"] },
    ]

    return( 
    <>
        { !started && (
            <LoadingScreen 
                started={ started } 
                setStarted={ setStarted }
            />
        ) }
        { isMobile && started && (
            <Joystick />
        ) }
        <KeyboardControls map={ keyboardMap }>
            <Canvas
                shadows={ !downgradedPerformance }
                camera={ { far: 900, near: 0.1, } }
                dpr={ [ 1, 1.5 ] }
                onClick={() => setPaused(false)}
                // style={{ background: '#000000' }}
            >
                    <fog attach="fog" args={["#ffffff", 10, 900]} />
                    <Physics
                        timeStep="vary"
                        paused={ paused }
                        // debug
                        gravity={ [ 0, - 9.81, 0 ] }
                        >
                        <PerformanceMonitor
                            onDecline={(fps) => 
                            {
                                setDowngradedPerformance(true)
                            }}
                        />
                        <Suspense>
                            { started && (
                                <>
                                    <Experience
                                        downgradedPerformance={ downgradedPerformance } 
                                    />
                                    <Preload all />
                                </>
                            )}
                        </Suspense>
                    </Physics>
                { isDesktop && started && (
                    <>
                        <PointerLockControls />
                        {/* <Perf position="top-left" /> */}
                    </>
                )}
            </Canvas>
            { isDesktop && started && (
                <Interface />
            ) }
            { isMobile && started && (
                <MobileInterface />
            )}
        </KeyboardControls>
    </> )
}