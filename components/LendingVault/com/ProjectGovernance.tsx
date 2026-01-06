'use client'

import { px } from "@/utils/pxToRem"
import Image from 'next/image'
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import EcosystemContent from './EcosystemContent'
import TokenContent from './TokenContent'
import FinanceContent from './FinanceContent'
import ProposalContent from './ProposalContent'

interface TabConfig {
  id: string
  name: string
  component: 'Ecosystem' | 'Token' | 'Finance' | 'Proposal'
  data?: any
}

interface ProjectGovernanceProps {
  projectData?: {
    statistics?: {
      constructionResponseCount?: number
      constructionResponseCountLabel?: string
      numberOfConstructors?: number
      numberOfConstructorsLabel?: string
      numberOfCompletedResponseSubjects?: number
      numberOfCompletedResponseSubjectsLabel?: string
    }
    tabs?: TabConfig[]
  }
  system_id?: string
}

export default function ProjectGovernance({ projectData, system_id }: ProjectGovernanceProps) {
  console.log('ProjectGovernance projectData:', projectData)
  const searchParams = useSearchParams()
  
  const statistics = projectData?.statistics || {}
  const constructionResponseCount = statistics.constructionResponseCount ?? 0
  const numberOfConstructors = statistics.numberOfConstructors ?? 0
  const numberOfCompletedResponseSubjects = statistics.numberOfCompletedResponseSubjects ?? 0

  // 从 JSON 读取 tabs 配置
  const tabs: TabConfig[] = projectData?.tabs || []
  const defaultTab = tabs[0]?.name || 'Ecosystem'
  
  // 从 URL 参数读取 sub_tab 状态
  const subTabFromUrl = searchParams.get('sub_tab')
  const initialSelectedTab = subTabFromUrl || defaultTab
  const [selectedTab, setSelectedTab] = useState<string>(initialSelectedTab)
  
  // 当 URL 参数变化时更新 tab
  useEffect(() => {
    if (subTabFromUrl) {
      setSelectedTab(subTabFromUrl)
    }
  }, [subTabFromUrl])

  // 格式化数字，添加千位分隔符
  const formatNumber = (num: number) => {
    return num.toLocaleString('en-US')
  }

  // 根据选中的 tab 获取对应的 component 类型和数据
  const selectedTabData = tabs.find((tab: TabConfig) => tab.name === selectedTab)
  const selectedComponent = selectedTabData?.component || 'Ecosystem'
  const selectedTabData_data = selectedTabData?.data

  // 渲染对应的组件
  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Ecosystem':
        return <EcosystemContent data={selectedTabData_data} />
      case 'Token':
        return <TokenContent data={selectedTabData_data} />
      case 'Finance':
        return <FinanceContent data={selectedTabData_data} />
      case 'Proposal':
        return <ProposalContent data={selectedTabData_data} system_id={system_id} />
      default:
        return <EcosystemContent data={selectedTabData_data} />
    }
  }

    return (
        <div className="w-full"  style={{marginTop:px(123)}}>
            <div className='flex items-center w-full justify-start' style={{height:px(25),gap:px(20),paddingLeft:px(80),paddingBottom:px(25)}}>
             <div style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: px(24), lineHeight: px(40), letterSpacing: '0%', color: '#083FD8' }}>
               {statistics.constructionResponseCountLabel || 'construction response count：'}{formatNumber(constructionResponseCount)}
             </div>
             <div style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: px(24), lineHeight: px(40), letterSpacing: '0%', color: '#083FD8' }}>
               {statistics.numberOfConstructorsLabel || 'number of constructors：'}{formatNumber(numberOfConstructors)}
             </div>
             <div style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: px(24), lineHeight: px(40), letterSpacing: '0%', color: '#083FD8' }}>
               {statistics.numberOfCompletedResponseSubjectsLabel || 'number of completed response subjects：'}{formatNumber(numberOfCompletedResponseSubjects)}
             </div>
         </div>

        <div className="w-full bg-black relative flex items-center justify-between"  style={{ height:px(140), paddingLeft:px(80), paddingRight:px(80) }}>
          <div className="flex items-center " style={{gap:px(20) }}>
            {tabs.map((tab: TabConfig) => {
              const isSelected = selectedTab === tab.name
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.name)}
                  className="transition-colors cursor-pointer"
                  style={{
                    width: px(230),
                    height: px(60),
                    border: '0.5px solid #ffffff',
                    borderRadius: px(4),
                    backgroundColor: isSelected ? '#ffffff' : 'transparent',
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontStyle: 'normal',
                    fontSize: px(20),
                    letterSpacing: '0%',
                    textAlign: 'center',
                    color: isSelected ? '#000000' : '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#ffffff'
                      e.currentTarget.style.color = '#000000'
                      e.currentTarget.style.borderColor = '#ffffff'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'transparent'
                      e.currentTarget.style.color = '#ffffff'
                      e.currentTarget.style.borderColor = '#ffffff'
                    }
                  }}
                >
                  {tab.name}
                </button>
              )
            })}
          </div>
          
          <div
            style={{
              position:"absolute",
              right:px(83),
              bottom:(41),
              width: px(200),
              height: px(200),
              // backgroundColor: '#f5f5f5',
              borderRadius: px(4),
              flexShrink: 0,
            }}
          >
          </div>
        </div>

      {/* 根据选中的 tab 显示对应的内容 */}
      {renderComponent()}



        </div>
      )
}

