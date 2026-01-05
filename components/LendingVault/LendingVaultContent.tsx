'use client'

import { px } from '@/utils/pxToRem'
import Banner from './com/Banner'
import SecondScreen from './com/SecondScreen'
import UserComments from './com/UserComments'
import ProjectConstruction from './com/ProjectConstruction'
import ProjectGovernance from './com/ProjectGovernance'
import ProjectsYouMayBeInterestedIn from './com/ProjectsYouMayBeInterestedIn'
import { useState, useMemo, useRef, useEffect } from 'react'
import Footer from '../Footer/Footer'
import { useSearchParams } from 'next/navigation'
import { projectsMap } from '@/app/data'
import type { ProjectData } from '@/app/data'
import Toast from '@/components/common/Toast'

export default function LendingVaultContent() {
  const searchParams = useSearchParams()
  const system_id = searchParams.get('system_id')

  // 根据 system_id 获取对应的项目数据
  const projectData: ProjectData | undefined = useMemo(() => {
    if (!system_id) return undefined
    return projectsMap[system_id]
  }, [system_id])

 
  
  const pageData = projectData?.profile?.projectDetailsPage
  // 从项目数据中获取 tabList，如果没有则使用默认值
  // 提供一个默认的 tabList，当 pageData?.tabList 不存在时使用
  const defaultTabList = [
    { id: 'tab-1', name: 'Project Introduction' }
  ];
  const tabList = pageData?.tabList ?? defaultTabList;
  
  const [activeTab, setActiveTab] = useState(tabList[0]?.name || 'Project Introduction');
  const [showFavoriteToast, setShowFavoriteToast] = useState(false)

  // Tab 栏滚动效果相关状态和引用
  const tabRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const tabInitialTopRef = useRef<number>(0)
  const [tabStyle, setTabStyle] = useState<{
    position: 'relative' | 'fixed'
    top?: string
    left?: string
    width?: string
    opacity: number
  }>({
    position: 'relative',
    opacity: 1,
  })

  // Header 高度和 tab 栏与 header 的间距
  const headerHeight = 50 // px
  const tabGap = 1 // px，tab 栏与 header 的间距

  useEffect(() => {
    const handleScroll = () => {
      if (!tabRef.current || !containerRef.current) return

      const scrollTop = containerRef.current.scrollTop
      const containerRect = containerRef.current.getBoundingClientRect()
      const tabRect = tabRef.current.getBoundingClientRect()

      // 获取 tab 栏的初始位置（相对于容器的 scrollTop）
      if (tabInitialTopRef.current === 0) {
        tabInitialTopRef.current = tabRect.top - containerRect.top + scrollTop
      }

      const tabInitialTop = tabInitialTopRef.current
      const fixedTop = headerHeight + tabGap
      const tabHeight = tabRef.current.offsetHeight

      // 直接获取 tab 栏顶部相对于视口的位置（无论 tab 是 relative 还是 fixed）
      const tabTopRelativeToViewport = tabRect.top

      // 只有当 tab 栏顶部距离视口顶部等于或小于 fixedTop（即距离 header 底部 1px）时才固定
      // 使用 <= 而不是 ==，因为滚动是连续的，当达到这个位置时就应该固定
      const shouldBeFixed = tabTopRelativeToViewport <= fixedTop

      // 计算 tab 栏是否应该固定
      if (shouldBeFixed && tabStyle.position === 'relative') {
        // Tab 栏应该固定在 header 下方
        const tabRect = tabRef.current.getBoundingClientRect()
        const left = tabRect.left - containerRect.left
        const width = tabRect.width

        // tab 栏始终保持显示，不消失
        setTabStyle({
          position: 'fixed',
          top: `${fixedTop}px`,
          left: `${left}px`,
          width: `${width}px`,
          opacity: 1,
        })
      } else if (tabStyle.position === 'fixed') {
        // 如果已经是 fixed 状态，更新位置和宽度
        const left = tabRect.left - containerRect.left
        const width = tabRect.width

        // 检查是否应该回到初始位置（当滚动回到初始位置时）
        if (scrollTop <= tabInitialTop - fixedTop) {
          setTabStyle({
            position: 'relative',
            opacity: 1,
          })
          // 重置初始位置，以便下次计算
          tabInitialTopRef.current = 0
        } else {
          // 更新位置和宽度，opacity 始终保持为 1
          setTabStyle((prev) => ({
            ...prev,
            opacity: 1,
            left: `${left}px`,
            width: `${width}px`,
          }))
        }
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
      // 初始计算
      handleScroll()

      // 窗口大小改变时重新计算
      window.addEventListener('resize', handleScroll)

      return () => {
        container.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleScroll)
      }
    }
  }, [tabStyle.position, headerHeight, tabGap])

  return (
    <div ref={containerRef} className="flex-1 min-h-0 overflow-y-scroll scrollbar-hide">
      {/* 项目数据调试显示区域 - 可以后续移除或隐藏 */}
     

      {/* 第一屏 */}
      <div className="flex flex-col" style={{ minHeight: 'calc(100vh - 89px)' }}>
        {/* Banner 组件 */}
        <div className="flex-shrink-0" style={{ overflow: 'hidden' }}>
          <Banner projectData={projectData} />
        </div>

        {/* 占位 div，防止 tab 栏固定时内容跳动 */}
        {tabStyle.position === 'fixed' && (
          <div style={{ height: px(44), marginTop: px(40) }} />
        )}
        
        <div 
          ref={tabRef}
          className="w-full flex flex-shrink-0" 
          style={{ 
            paddingLeft: px(302),
            paddingRight: px(302),
            height: px(44),
            gap: px(16),
            marginTop: tabStyle.position === 'relative' ? px(200) : 0,
            position: tabStyle.position,
            top: tabStyle.top,
            left: tabStyle.left,
            width: tabStyle.width,
            opacity: tabStyle.opacity,
            zIndex: tabStyle.position === 'fixed' ? 1000 : 'auto',
            backgroundColor: tabStyle.position === 'fixed' ? '#ffffff' : 'transparent',
            transition: 'opacity 0.2s ease-in-out',
          }}
        >
          {tabList.map((tab: { id: string; name: string }) => {
            const isActive = activeTab === tab.name
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.name)}
                className="flex items-center justify-center transition-colors"
                style={{
                  flex: 1,
                  height: '100%',
                  borderRadius: px(4),
                  backgroundColor: isActive ? '#000000' : 'transparent',
                  color: isActive ? '#ffffff' : '#000000',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'normal',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  border: isActive ? '1px solid #000000' : `1px solid #000000`,
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = '#000000'
                    e.currentTarget.style.color = '#ffffff'
                    e.currentTarget.style.borderColor = '#000000'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = '#000000'
                    e.currentTarget.style.borderColor = '#000000'
                  }
                }}
              >
                {tab.name}
              </button>
            )
          })}
        </div>

        
      </div>

      {/* 第二屏 */}
      {/* <SecondScreen /> */}


     

        <div className="w-full flex flex-col" style={{ minHeight:'calc(100vh - 89px)' }}>
       
        
      {/* 根据 activeTab 显示不同的组件 */}
      {activeTab === 'Project Introduction' && <SecondScreen projectIntroduction={pageData?.projectIntroduction} />}
      {activeTab === 'User Comments' && <UserComments userComments={pageData?.userComments} />}
      {activeTab === 'Project Construction' && <ProjectConstruction projectData={pageData?.projectConstruction} />}

      {activeTab === 'Project Governance' && <ProjectGovernance projectData={pageData?.projectGovernance} system_id={system_id || undefined} />}
      
      {activeTab === 'Token Trading' && <ProjectGovernance />}
      {activeTab === 'Token Lending' && <ProjectGovernance />}

      {/* Projects You May Be Interested In */}
     
   

      {/* 按钮：只在 Project Introduction 或 User Comments 标签页时显示 */}
      {(activeTab === 'Project Introduction' || activeTab === 'User Comments') && 
        pageData?.projectIntroduction?.buttonList && 
        pageData.projectIntroduction.buttonList.length > 0 && (
        <div ref={buttonsRef} className='flex items-center justify-center' style={{ gap: px(16), marginTop: px(70) }}>
          {pageData.projectIntroduction.buttonList.map((button) => (
            <button
              key={button.id}
              className="flex items-center justify-center transition-colors cursor-pointer"
              onClick={() => {
                // 如果是 "Favorite Project" 按钮，显示 Toast 而不是跳转
                if (button.name === 'Favorite Project') {
                  setShowFavoriteToast(true)
                } else if (button.url) {
                  window.open(button.url, '_blank', 'noopener,noreferrer')
                }
              }}
              style={{
                width: px(226),
                height: px(44),
                backgroundColor: '#ffffff',
                border: '1px solid #000000',
                borderRadius: px(4),
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: px(16),
                lineHeight: '100%',
                letterSpacing: '0%',
                textAlign: 'center',
                color: '#000000',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#000000'
                e.currentTarget.style.color = '#ffffff'
                e.currentTarget.style.borderColor = '#000000'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff'
                e.currentTarget.style.color = '#000000'
                e.currentTarget.style.borderColor = '#000000'
              }}
            >
              {button.name}
            </button>
          ))}
          {showFavoriteToast && (
            <Toast
              message="Collection successful"
              duration={3000}
              onClose={() => setShowFavoriteToast(false)}
            />
          )}
        </div>
      )}
   </div>

      <ProjectsYouMayBeInterestedIn />
      <div style={{marginTop: px(89)}}> <Footer /></div>
  
    </div>
  )
}

