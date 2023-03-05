import React from 'react'
import NavButton from './NavButton';
import { Bars3BottomLeftIcon, Bars3BottomRightIcon, BeakerIcon } from '@heroicons/react/24/solid'

function Header() {
  return (
    <header className='grid grid-cols-2'>
        <div className='flex items-center space-x-2'>
            <img className='rounded-full h-20 w-20' src='https://i.imgur.com/fVqpw2f.png' alt='logo'/>
        
            <div>
                <h1 className='text-lg text-white font-bold'>Hydra Lottery</h1>
                <p className='text-xs text-emerald-500 truncate'>User...</p>
            </div>
        </div>

        <div>
          <div className='bg-[#0A1F1C] p-4 space-x-2'>
            <NavButton isActive title='Buy Tickets'/>
            <NavButton title='Logout'/>
            {/* buton */}
            {/* buton */}
          </div>
        </div>

        <div>
          <Bars3BottomRightIcon className='h-8 w-8 text-white cursor-pointer'/>
        </div>


    </header>

    
  );
}

export default Header
