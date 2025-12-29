'use client'

import Image from 'next/image'
import { px } from '@/utils/pxToRem'
import { images } from './TokenImages/resources'

export default function ChatImages() {
  return (
    <div className='flex items-center w-full'>
      <div className="flex-1" style={{ height: px(360), minWidth: 0 }}>
        <Image
          src={images.mask4}
          alt="Mask 1"
          width={400}
          height={360}
          className="w-full h-full object-cover"
          style={{ width: '100%', height: '100%' }}
          priority
        />
      </div>
      <div className="flex-1" style={{ height: px(360), minWidth: 0 }}>
        <Image
          src={images.mask5}
          alt="Mask 2"
          width={400}
          height={360}
          className="w-full h-full object-cover"
          style={{ width: '100%', height: '100%' }}
          priority
        />
      </div>
      <div className="flex-1" style={{ height: px(360), minWidth: 0 }}>
        <Image
          src={images.mask6}
          alt="Mask 3"
          width={400}
          height={360}
          className="w-full h-full object-cover"
          style={{ width: '100%', height: '100%' }}
          priority
        />
      </div>
    </div>
  )
}

