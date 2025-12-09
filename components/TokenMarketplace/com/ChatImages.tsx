'use client'

import Image from 'next/image'
import { px } from '@/utils/pxToRem'

export default function ChatImages() {
  return (
    <div className='flex items-center justify-between w-full'>
      {/* Chat 视图的图片区域 - 待实现 */}
      <div className="flex-1" style={{ height: px(270) }}>
        <div style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#f5f5f5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize: px(16),
          color: '#999'
        }}>
          Chat Images
        </div>
      </div>
    </div>
  )
}

