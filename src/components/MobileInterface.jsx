import { useKeyboardControls } from '@react-three/drei'
import useGame from '../stores/useGame.jsx'

export default function MobileInterface()
{
    const coins = useGame((state) => state.coins)
    const totalCoins = useGame((state) => state.totalCoins)

    return <>
        <div className="mobileInterface">
            <div className='flex justify-end pr-2 pt-2'>
                <div className='flex items-center'>
                    <div className='text-[15px] pt-1 text-[#4a3626]'>
                        { coins } / { totalCoins }
                    </div>
                    <div className='pl-2'>
                        <img className='w-6' src={ "./assets/images/coin.png" } alt="coin" />
                    </div>
                </div>
            </div>
        </div>
    </>
}
