'use client'

import Image from 'next/image'

export default function Partners() {
  return (
    <section className="w-full h-full flex items-center bg-background-primary border-t border-gray-100">
      <div className="w-full">
        <Image
          src="/images/DEEPBLUE/foot.png"
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

