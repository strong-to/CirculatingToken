'use client'

import Image from 'next/image'
import { CDN_PREFIX } from '@/utils/cdn'

export default function Partners() {
  const partnersImage = `${CDN_PREFIX}/home/InstitutionalGrade/img/DEEPBLUE/foot.png`

  return (
    <section className="w-full h-full flex items-center bg-background-primary border-t border-gray-100">
      <div className="w-full">
        <Image
          src={partnersImage}
          alt="Partners"
          width={800}
          height={243}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  )
}
