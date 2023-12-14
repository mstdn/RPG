import { useKeyboardControls } from '@react-three/drei'
import { EcctrlJoystick, useJoystickControls } from 'ecctrl'
import { useEffect, useMemo } from 'react'
import { 
    BoxGeometry, 
    CylinderGeometry, 
    Euler, MeshBasicMaterial, 
    SphereGeometry, 
    Vector3 
} from 'three'

export default function Joystick()
{
    const action1 = useJoystickControls((state) => state.action1)

    // Joystick controller materials
    const cylinderGeometry = useMemo(() => new CylinderGeometry(2.3, 2.1, 0.3, 32, 1), [])
    const sphereGeometry = useMemo(() => new SphereGeometry(1.4, 32, 8), [])
    const boxGeometry = useMemo(() => new BoxGeometry(1, 1, 1), [])
    const activeMaterial = useMemo(() => new MeshBasicMaterial({ color: '#ffffff', wireframe: false }), [])
    const passiveMaterial = useMemo(() => new MeshBasicMaterial({ color: '#ffffff', transparent: true, opacity: 0.8 }), [])

    return(
        <>
            <EcctrlJoystick 
                joystickBaseProps={{
                    geometry: cylinderGeometry,
                    material: passiveMaterial
                }}
                joystickStickProps={{
                    material: passiveMaterial
                }}
                joystickHandleProps={{
                    geometry: sphereGeometry,
                    rotation: new Euler(Math.PI * 0.5, 0, 0),
                    material: activeMaterial
                }}
                buttonLargeBaseProps={{
                    scale: new Vector3( 2.4, 2.4, 2.4 ),
                    geometry: boxGeometry,
                    material: passiveMaterial
                }}
                buttonNumber={ 2 }
                // buttonTop5Props={{
                //     scale: new Vector3( 2.4, 2.4, 2.4 ),
                //     geometry: boxGeometry,
                //     material: passiveMaterial,
                    
                // }}
                // buttonGroup1Position={{ x: 0, y: 0, z: 0 }}
                // buttonGroup2Position={{ x: 0, y: 0, z: 0 }}
                // buttonGroup3Position={{ x: 0, y: 0, z: 0 }}
                // buttonGroup4Position={{ x: 0, y: 0, z: 0 }}
                
            />
        </>
    )
}