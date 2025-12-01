'use client'

import DeepBlueCovenant from '@/components/Home/com/InstitutionalGrade/DeepBlueCovenant'
import MainTitle from '@/components/Home/com/InstitutionalGrade/MainTitle'
import Statistics from '@/components/Home/com/InstitutionalGrade/Statistics'
import DownloadButtons from '@/components/Home/com/InstitutionalGrade/DownloadButtons'
import DraggableBoxes from '@/components/Home/com/InstitutionalGrade/DraggableBoxes'
import FooterLogo from '@/components/Home/com/InstitutionalGrade/FooterLogo'

export default function InstitutionalGrade() {
  return (
    <section className="h-full snap-start flex flex-col bg-background-primary overflow-hidden">
      <div className="container-responsive w-full flex-1 flex">
        <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-8 lg:gap-12 w-full">
          {/* 左侧内容 */}
          <div className="flex flex-col">
            <DeepBlueCovenant />
            <MainTitle />
            <Statistics />
            <DownloadButtons />
          </div>
          {/* 右侧占位区域 - 可拖动的盒子 */}
          <DraggableBoxes />
        </div>
      </div>

      {/* 首屏底部品牌 logo（随 InstitutionalGrade 一起滚动） */}
      <FooterLogo />
    </section>
  )
}

