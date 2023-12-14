import { Bloom, EffectComposer, Vignette } from "@react-three/postprocessing";

export default function Effects()
{
    return(
        <>
            <EffectComposer
                disableNormalPass
            >
                <Bloom
                    intensity={ 0.3 }
                    mipmapBlur={ true }
                    luminanceThreshold={ 0.1 }
                />
                <Vignette
                    darkness={ 0.2 }
                />
            </EffectComposer>
        </>
    )
}