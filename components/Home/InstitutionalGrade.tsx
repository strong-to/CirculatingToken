'use client'

import DeepBlueCovenant from '@/components/Home/com/InstitutionalGrade/DeepBlueCovenant'
import MainTitle from '@/components/Home/com/InstitutionalGrade/MainTitle'
import Statistics from '@/components/Home/com/InstitutionalGrade/Statistics'
import DownloadButtons from '@/components/Home/com/InstitutionalGrade/DownloadButtons'
import DraggableBoxes from '@/components/Home/com/InstitutionalGrade/DraggableBoxes'
import FooterLogo from '@/components/Home/com/InstitutionalGrade/FooterLogo'

export default function InstitutionalGrade() {
  return (
    <section className="flex flex-col bg-background-primary min-h-[calc(100vh-4.5rem)]">
      <div className="container-responsive w-full flex flex-1 flex-col">
        <div className="flex-1 flex items-start ">
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
        <div className="mt-auto">
          <FooterLogo />
        </div>
      </div>
    </section>
  )
}

