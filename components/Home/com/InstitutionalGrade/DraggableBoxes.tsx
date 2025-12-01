'use client'

import DraggableBox from './DraggableBox'

export default function DraggableBoxes() {
  return (
    <div className="hidden lg:block relative h-full w-full overflow-visible">
      {/* 三个可拖动的盒子 */}
      <DraggableBox
        initialX={0}
        initialY={100}
        width={15.4375}
        height={15.4375}
        bgColor="bg-[#BDBDBD]"
        className=""
      />
      <DraggableBox
        initialX={0}
        initialY={400}
        width={9.25}
        height={9.25}
        bgColor="bg-primary-main"
        className=""
      />
      <DraggableBox
        initialX={-300}
        initialY={550}
        width={5.9375}
        height={5.9375}
        bgColor="bg-[#666666]"
        className=""
      />
    </div>
  )
}

