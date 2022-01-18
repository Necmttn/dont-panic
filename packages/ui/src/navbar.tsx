import React from 'react';
import Image from 'next/image';
import logo from './logo.png'

export const Navbar: React.FC= ({children}) => {
    return (
    <div className='bg-gray-700 block'>
      <div className='px-20'>
        <div className='p-2'>
          <Image src={logo} width={200} height={40}  />
        </div>
      </div>
        <div>
            {children}
        </div>
    </div>
    )
}