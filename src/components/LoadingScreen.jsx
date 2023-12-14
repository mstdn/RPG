import { useProgress } from '@react-three/drei'
import { useEffect, useState } from 'react'
import useSound from 'use-sound';

export const LoadingScreen = (props) => 
{
  const { started, setStarted } = props
  const { progress, total, loaded, item } = useProgress()
  const [showStartButton, setShowStartButton] = useState(false)
  const [ showLoading, setShowLoading ] = useState(true)
  // const [ playStartSound ] = useSound('./assets/audio/hello.wav', { volume: 0.3, interrupt: true })
  const [ playBackgroundMusic ] = useSound('./assets/audio/beach.mp3', { volume: 0.2, loop: true })

  useEffect(() => 
  {
    if (progress === 100) 
    {
      setShowStartButton(true)
    }
  }, [progress])

  const handleStartClick = () => {
    setStarted(true)
  }

  return (<>
        
      {showLoading && (
      <div
          className={`
              fixed top-0 left-0 w-full h-full z-50 transition-opacity 
              duration-1000
              flex items-center justify-center bg-[#e09807] 
              ${started ? "opacity-0" : "opacity-100"}
          `}
      >
      {showStartButton && progress === 100 && (
          <button 
            className="text-3xl md:text-5xl font-bold text-[#f5f5f5] transition-all duration-500"
            onClick={() => {
              handleStartClick()
              setShowStartButton(false)
              setShowLoading(false)
              // playStartSound()
              playBackgroundMusic()
            }}
            style={{
              border: "6px solid #f5f5f5",
              borderRadius: "25px",
              padding: "20px"
            }}
          >
            PLAY
          </button>
        )}
      { progress !== 100 && (

        <div className="text-3xl md:text-5xl font-bold text-[#f5f5f5] relative">
          <div
            className="absolute left-0 top-0  overflow-hidden truncate text-clip transition-all duration-500"
            style={{
              width: `${progress}%`,
            }}
          >
            {progress.toFixed(0)}%
          </div>
          <div className="opacity-40">
            {progress.toFixed(0)}%
          </div>
        </div> )}

      </div> )}
  </>);
};
