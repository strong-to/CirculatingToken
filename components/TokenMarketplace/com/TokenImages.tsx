'use client'

import Image from 'next/image'
import { px } from '@/utils/pxToRem'
import { images } from './TokenImages/resources'

export default function TokenImages() {
  return (
    <div className='flex items-center justify-between w-full'>
      <div className="flex-1" style={{ height: px(270) }}>
        <Image
          src={images.mask1}
          alt="Mask 1"
          width={400}
          height={270}
          className="w-full h-full object-contain"
          priority
        />
      </div>
      <div className="flex-1" style={{ height: px(270) }}>
        <Image
          src={images.mask2}
          alt="Mask 2"
          width={400}
          height={270}
          className="w-full h-full object-contain"
          priority
        />
      </div>
      <div className="flex-1" style={{ height: px(270) }}>
        <Image
          src={images.mask3}
          alt="Mask 3"
          width={400}
          height={270}
          className="w-full h-full object-contain"
          priority
        />
      </div>
    </div>
  )
}

