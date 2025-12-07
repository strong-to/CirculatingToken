'use client'

import { useMemo } from 'react'
import AnimatedBox from './AnimatedBox'

export default function DraggableBoxes() {
  // 生成随机顺序的延迟数组（0, 3, 6的随机排列）
  const delays = useMemo(() => {
    const baseDelays = [0, 3, 6]
    // Fisher-Yates 洗牌算法
    const shuffled = [...baseDelays]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }, []) // 只在组件挂载时生成一次，保持稳定

  return (
    <div className="hidden lg:block relative h-full w-full overflow-visible">
      {/* 三个依次动画的盒子，每次只有一个在动，顺序随机 */}
      {/* 位置使用 px 单位，可以直接调整像素值 */}
      <AnimatedBox
        boxId="box1"
        initialRight={140} // px，距离父盒子最右边140px
        initialY={70} // px
        initialWidth={15.4375}
        initialHeight={15.4375}
        bgColor="bg-[#BDBDBD]"
        animationDelay={delays[0]}
      />
      <AnimatedBox
        boxId="box2"
        initialRight={0} // px，和父盒子的最右边靠在一起
        initialY={500} // px
        initialWidth={9.25}
        initialHeight={9.25}
        bgColor="bg-primary-main"
        animationDelay={delays[1]}
      />
      <AnimatedBox
        boxId="box3"
        initialX={-300} // px
        initialY={400} // px
        initialWidth={5.9375}
        initialHeight={5.9375}
        bgColor="bg-[#666666]"
        animationDelay={delays[2]}
      />
    </div>
  )
}

