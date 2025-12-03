'use client'

import { useState } from 'react'
import DraggableBox from './DraggableBox'

export default function DraggableBoxes() {
  const [resetTrigger, setResetTrigger] = useState(0)
  const [activeBoxId, setActiveBoxId] = useState<string | null>(null) // 当前活动的盒子ID

  const resetAllBoxes = () => {
    // 触发所有盒子重置
    setResetTrigger(prev => prev + 1)
    setActiveBoxId(null)
  }

  const handleBoxActivate = (boxId: string) => {
    // 当某个盒子激活时，设置它为活动盒子
    // 如果 boxId 为空字符串，清除活动状态
    setActiveBoxId(boxId || null)
  }

  return (
    <div className="hidden lg:block relative h-full w-full overflow-visible">
      {/* 三个可拖动的盒子 */}
      <DraggableBox
        boxId="box1"
        initialX={0}
        initialY={100}
        width={15.4375}
        height={15.4375}
        bgColor="bg-[#BDBDBD]"
        className=""
        resetTrigger={resetTrigger}
        activeBoxId={activeBoxId}
        onResetAll={resetAllBoxes}
        onActivate={handleBoxActivate}
      />
      <DraggableBox
        boxId="box2"
        initialX={0}
        initialY={400}
        width={9.25}
        height={9.25}
        bgColor="bg-primary-main"
        className=""
        resetTrigger={resetTrigger}
        activeBoxId={activeBoxId}
        onResetAll={resetAllBoxes}
        onActivate={handleBoxActivate}
      />
      <DraggableBox
        boxId="box3"
        initialX={-300}
        initialY={550}
        width={5.9375}
        height={5.9375}
        bgColor="bg-[#666666]"
        className=""
        resetTrigger={resetTrigger}
        activeBoxId={activeBoxId}
        onResetAll={resetAllBoxes}
        onActivate={handleBoxActivate}
      />
    </div>
  )
}

