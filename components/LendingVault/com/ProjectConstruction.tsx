'use client'

import { useState } from 'react'
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

  return (
    <>
  
      {/* 顶部区域 */}
      <div className="w-full" style={{ marginTop: px(120), gap: px(30) }}>
         <div className='flex items-center w-full justify-end' style={{height:px(25),gap:px(20),paddingRight:px(70),paddingBottom:px(25)}}>
             <div style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: px(20), lineHeight: px(40), letterSpacing: '0%', color: '#000000' }}>
               {statistics?.totalResponsesLabel}{statistics?.totalResponses?.toLocaleString()}
             </div>
             <div style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: px(20), lineHeight: px(40), letterSpacing: '0%', color: '#000000' }}>
               {statistics?.totalConstructorsLabel}{statistics?.totalConstructors?.toLocaleString()}
             </div>
             <div style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: px(20), lineHeight: px(40), letterSpacing: '0%', color: '#000000' }}>
               {statistics?.completedSubjectsLabel}{statistics?.completedSubjects}
             </div>
             <div style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: px(20), lineHeight: px(40), letterSpacing: '0%', color: '#000000' }}>
               {statistics?.ongoingSubjectsLabel}{String(statistics?.ongoingSubjects || '').padStart(2, '0')}
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
