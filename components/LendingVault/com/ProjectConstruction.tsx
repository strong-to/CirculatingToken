'use client'

import { useState, useRef, useEffect } from 'react'
import { px } from "@/utils/pxToRem"
import Image from 'next/image'
import ConstructorImageModal from './ConstructorImageModal'
import ProjectCardList from '@/components/ProjectConstruction/com/ProjectCardList'
import PageSelector from './PageSelector'
import type { ProjectConstructionData } from '@/app/data'
import { log } from 'console'

interface ProjectConstructionProps {
  projectData?: ProjectConstructionData
}

export default function ProjectConstruction({ projectData }: ProjectConstructionProps) {
  const {
    statistics,
    cardData = [],
    logo,
    constructors = [],
    jobs: tableData = [],
    pagination
  } = projectData || {}

  const logoData = typeof logo === 'string' ? { src: logo } : logo

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(pagination?.defaultItemsPerPage || 10)
  const totalPages = pagination?.totalPages || 7
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("All");
  
  const selectedConstructor = selectedImageIndex !== null ? constructors[selectedImageIndex] : null

  // 滚动动画相关状态和引用
  const statisticsContainerRef = useRef<HTMLDivElement>(null)
  const statisticsItemsRef = useRef<(HTMLDivElement | null)[]>([])
  const [totalWidth, setTotalWidth] = useState(0)
  const [containerWidth, setContainerWidth] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const gapValue = 20 // 固定间距值（px），对应原来的 gap:px(20)
  const gap = px(gapValue) // CSS 值

  // 构建统计信息数组
  const statisticsItems = [
    { label: statistics?.totalResponsesLabel, value: statistics?.totalResponses?.toLocaleString() },
    { label: statistics?.totalConstructorsLabel, value: statistics?.totalConstructors?.toLocaleString() },
    { label: statistics?.completedSubjectsLabel, value: statistics?.completedSubjects },
    { label: statistics?.ongoingSubjectsLabel, value: String(statistics?.ongoingSubjects || '').padStart(2, '0') },
  ].filter(item => item.label && item.value !== undefined)

  // 复制多组统计信息以实现无缝循环
  const extendedStatisticsItems = [...statisticsItems, ...statisticsItems, ...statisticsItems]
  const animationDuration = 20 // 动画持续时间（秒）

  // 计算容器宽度和统计信息的总宽度
  useEffect(() => {
    const calculateWidths = () => {
      // 计算容器宽度
      if (statisticsContainerRef.current) {
        const container = statisticsContainerRef.current
        const width = container.offsetWidth
        setContainerWidth(width)
      }

      // 计算统计信息总宽度
      if (statisticsItemsRef.current.length === 0 || statisticsItems.length === 0) return
      
      // 只计算第一组统计信息（前 statisticsItems.length 个）
      let width = 0
      for (let i = 0; i < statisticsItems.length; i++) {
        const element = statisticsItemsRef.current[i]
        if (element) {
          width += element.offsetWidth
          // 除了最后一个，每个统计信息后面都有间距
          if (i < statisticsItems.length - 1) {
            width += gapValue
          }
        }
      }
      setTotalWidth(width)
    }

    // 延迟计算，确保DOM已渲染
    const timer = setTimeout(calculateWidths, 100)
    window.addEventListener('resize', calculateWidths)
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', calculateWidths)
    }
  }, [statisticsItems.length, gapValue])

  // 动态生成 CSS keyframes
  useEffect(() => {
    if (totalWidth === 0) return

    const styleId = 'project-construction-statistics-animation'
    let styleElement = document.getElementById(styleId) as HTMLStyleElement
    
    if (!styleElement) {
      styleElement = document.createElement('style')
      styleElement.id = styleId
      document.head.appendChild(styleElement)
    }
    
    styleElement.textContent = `
      @keyframes scrollLeftStatistics {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-${totalWidth}px);
        }
      }
    `
    
    return () => {
      const element = document.getElementById(styleId)
      if (element) {
        element.remove()
      }
    }
  }, [totalWidth])

  return (
    <>
  
      {/* 顶部区域 */}
      <div className="w-full" style={{ marginTop: px(120), gap: px(30) }}>
         <div 
           ref={statisticsContainerRef}
           className='flex items-center w-full justify-end' 
           style={{
             height: px(25),
             paddingRight: px(70),
             paddingBottom: px(25),
             overflow: 'visible',
             position: 'relative',
           }}
           onMouseEnter={() => setIsPaused(true)}
           onMouseLeave={() => setIsPaused(false)}
         >
           {/* 内容区域，使用 mask 实现左右渐变效果 */}
           {/* 大头像位置：left: px(80), width: px(200)，距离头像左边50px就是 px(80 - 50) = px(30) */}
           <div
             className="overflow-hidden"
             style={{ 
               maskImage: `linear-gradient(to right, transparent 0px, black ${px(30)}, black calc(100% - ${px(70)}), transparent 100%)`,
               WebkitMaskImage: `linear-gradient(to right, transparent 0px, black ${px(30)}, black calc(100% - ${px(70)}), transparent 100%)`,
             }}
           >
             <div
               className="flex items-center"
               style={{
                 animation: totalWidth > 0 ? `scrollLeftStatistics ${animationDuration}s linear infinite` : 'none',
                 animationPlayState: isPaused ? 'paused' : 'running',
                 width: `${containerWidth - 300}px` ,
                 gap: gap,
               }}
             >
               {extendedStatisticsItems.map((item, index) => (
                 <div
                   key={`${item.label}-${index}`}
                   ref={(el) => {
                     // 只保存第一组统计信息的ref用于计算宽度
                     if (index < statisticsItems.length) {
                       statisticsItemsRef.current[index] = el
                     }
                   }}
                   className="flex items-center justify-center flex-shrink-0 whitespace-nowrap"
                   style={{
                     fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                     fontWeight: 300,
                     fontStyle: 'normal',
                     fontSize: px(20),
                     lineHeight: px(40),
                     letterSpacing: '0%',
                     color: '#000000',
                   }}
                 >
                   {item.label}{item.value}
                 </div>
               ))}
             </div>
           </div>
         </div>
      <div className="bg-black w-full relative flex items-center justify-end" style={{height:px(140)}}>
        
        <div
          onClick={() => setIsLogoModalOpen(true)}
          style={{
            position: 'absolute',
            bottom: px(41),
            left: px(80),
            width: px(200),
            height: px(200),
            backgroundColor: '#f5f5f5',
            borderRadius: px(4),
            flexShrink: 0,
            cursor: 'pointer',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)'
          }}
        >
    
          <Image
            src={logoData?.src || ""}
            alt="Project Construction Logo"
            width={200}
            height={200}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: px(4) }}
          />
        </div> 

         <div className="flex items-center" style={{height:px(80),paddingRight:px(80), gap: px(15)}}>
           {constructors.map((constructor, i) => (
             <div
               key={constructor.id}
               onClick={() => setSelectedImageIndex(i)}
               style={{
                 width: px(80),
                 height: px(80),
                 borderRadius: '50%',
                 flexShrink: 0,
                 overflow: 'hidden',
                 cursor: 'pointer',
                 transition: 'transform 0.2s',
               }}
               onMouseEnter={(e) => {
                 e.currentTarget.style.transform = 'scale(1.1)'
               }}
               onMouseLeave={(e) => {
                 e.currentTarget.style.transform = 'scale(1)'
               }}
             >
               <Image
                 src={constructor.avatar}
                 alt={`Constructor ${constructor.id}`}
                 width={80}
                 height={80}
                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
               />
             </div>
           ))}
         </div>
      </div>



       {/* 数据表格 */}
       <div className="w-full" style={{ marginTop: px(20), paddingLeft: px(80), paddingRight: px(80) }}>
         {/* <DataTable columns={columns} data={tableData} /> */}

         <ProjectCardList filterTab={activeTab} cards={cardData} />

         {/* Pagination Controls */}
         <PageSelector 
           currentPage={currentPage}
           totalPages={totalPages}
           onPageChange={setCurrentPage}
         />
       </div>
    </div>

    {isLogoModalOpen && logoData && (
      <ConstructorImageModal
        isOpen={isLogoModalOpen}
        onClose={() => setIsLogoModalOpen(false)}
        imageSrc={logoData.src || ""}
        imageIndex={-1}
        name={logoData.name}
        address={logoData.address}
        totalContributions={logoData.totalContributions}
        tokensEarned={logoData.tokensEarned}
        tagLabel={logoData.tagLabel}
      />
    )}

    {selectedImageIndex !== null && selectedConstructor && (
      <ConstructorImageModal
        isOpen={selectedImageIndex !== null}
        onClose={() => setSelectedImageIndex(null)}
        imageSrc={selectedConstructor.avatar}
        imageIndex={selectedImageIndex}
        name={selectedConstructor.name}
        address={selectedConstructor.address}
        totalContributions={selectedConstructor.totalContributions}
        tokensEarned={selectedConstructor.tokensEarned}
        tagLabel={selectedConstructor.tagLabel}
      />
    )}
    </>
  )
}
