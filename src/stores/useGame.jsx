import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
// import { totalCoinAmount } from '../components/world/Coins'
import { coinPositions } from '../components/world/positions/CoinPositions'

const totalCoins = () =>
{
    return coinPositions.length
}


export default create(subscribeWithSelector((set) => 
{
    return {
        coins: 0,
        increaseCoins: () => set((state) => ({ coins: state.coins + 1 })),
        removeAllCoins: () => set({ coins: 0 }),
        // totalCoins: totalCoinAmount(),
        totalCoins: totalCoins(),
        
    }
}))
