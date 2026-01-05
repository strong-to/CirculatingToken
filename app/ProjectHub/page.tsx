'use client'

import { Suspense, useMemo } from 'react'
import { useAtomValue } from 'jotai'
import Header from '@/components/Header/Header'
import TokenMarketplaceContent from '@/components/TokenMarketplace/TokenMarketplaceContent'
import ImagePreloader from '@/components/ImagePreloader'
import { projectsMap, type ProjectData } from '@/app/data'
import { shouldShowProject31Atom } from '@/store/atoms'

function ProjectHubContent() {
  const shouldShowProject31 = useAtomValue(shouldShowProject31Atom)

  // 根据 shouldShowProject31 的值决定显示哪些项目
  const customProjects = useMemo(() => {
    console.log('shouldShowProject31:', shouldShowProject31)
    if (!shouldShowProject31) {
      // false: 显示31个项目，DBTF00000031放在第一位
      const project31 = projectsMap['DBTF00000031']
      
      if (!project31) {
        console.log('project31 not found')
        return undefined
      }
      
      // 生成31个项目的列表：第一个是 DBTF00000031，其他是 DBTF0000001 到 DBTF00000030
      const projects: ProjectData[] = [project31]
      
      for (let i = 1; i <= 30; i++) {
        const id = `DBTF${String(i).padStart(7, '0')}`
        const project = projectsMap[id]
        if (project) {
          projects.push(project)
        }
      }
      
      console.log('customProjects length:', projects.length)
      return projects
    }
    
    // true: 不显示31，只显示30个项目（由 TokenMarketplaceContent 的筛选逻辑处理）
    console.log('shouldShowProject31 is true, returning undefined')
    return undefined
  }, [shouldShowProject31])

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* 图片预加载组件 - 在页面加载时预加载 TokenMarketplace 图片 */}
      <ImagePreloader />
      
      {/* Title 盒子 - 固定高度 89px */}
      <div> {/* 89px */}
        <Header />
      </div>
      
      {/* 中间内容盒子 - 占满剩余空间 */}
      <TokenMarketplaceContent customProjects={customProjects} />
    </div>
  )
}

export default function TokenMarketplace() {
  return (
    <Suspense fallback={
      <div className="h-screen flex flex-col overflow-hidden">
        <div>
          <Header />
        </div>
        <div className="flex-1 min-h-0 flex items-center justify-center">
          <div>Loading...</div>
        </div>
      </div>
    }>
      <ProjectHubContent />
    </Suspense>
  )
}
