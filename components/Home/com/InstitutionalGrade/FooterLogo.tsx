'use client'

import Image from 'next/image'

export default function FooterLogo() {
  return (
    <div className="w-full flex items-center bg-background-primary border-t border-gray-100">
      <Image
        src="/images/DEEPBLUE/foot.png"
        alt="Partners"
        width={800}
        height={243}
        className="w-full h-auto"
        priority
      />
    </div>
  )
}

