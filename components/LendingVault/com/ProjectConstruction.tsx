'use client'

import { useState } from 'react'
import { px } from '@/utils/pxToRem'
import Image from 'next/image'
import { CDN_PREFIX } from '@/utils/cdn'
import DataTable, { Column } from './DataTable'
import ConstructorImageModal from './ConstructorImageModal'
import ProjectCardList from '@/components/ProjectConstruction/com/ProjectCardList'

export default function ProjectConstruction() {
  const CDN = CDN_PREFIX
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const totalPages = 7
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState("All");
  // 表格列定义
  const columns: Column[] = [
    { key: 'annotation', label: 'multi-modal data annotation', width: 200 },
    { key: 'content', label: 'job content', width: 'flex' },
    { key: 'filter', label: 'filter/sort', width: 120 },
    { key: 'tokens', label: 'contribution consideration/Tokens', width: 180 },
    { key: 'unit', label: 'workload unit', width: 120 },
    { key: 'demand', label: 'total demand', width: 120 },
    { key: 'participants', label: 'number of participants', width: 150 },
    { key: 'difficulty', label: 'difficulty coefficient', width: 140 },
    { key: 'timeLimit', label: 'time limit', width: 120 },
    { key: 'status', label: 'status', width: 120 },
  ]

  // 表格数据
  const tableData = Array.from({ length: 6 }, () => ({
    annotation: 'multi-modal data annotation',
    content: 'job content',
    filter: 'filter/sort',
    tokens: '80',
    unit: 'item',
    demand: '200000',
    participants: '110',
    difficulty: '4.1/5.0',
    timeLimit: 'Nov 30 2026',
    status: 'under construction',
  }))

  return (
    <>
  
      {/* 顶部区域 */}
      <div className="w-full" style={{ marginTop: px(120), gap: px(30) }}>
         <div className='flex items-center w-full justify-end' style={{height:px(25),gap:px(20),paddingRight:px(70),paddingBottom:px(25)}}>
             <div style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: px(20), lineHeight: px(40), letterSpacing: '0%', color: '#000000' }}>
               construction response count：1,503
             </div>
             <div style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: px(20), lineHeight: px(40), letterSpacing: '0%', color: '#000000' }}>
               number of constructors：667
             </div>
             <div style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: px(20), lineHeight: px(40), letterSpacing: '0%', color: '#000000' }}>
               number of completed response subjects：7
             </div>
             <div style={{ fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif', fontWeight: 300, fontStyle: 'normal', fontSize: px(20), lineHeight: px(40), letterSpacing: '0%', color: '#000000' }}>
               number of ongoing response subjects：05
             </div>
         </div>
      <div className="bg-black w-full relative flex items-center justify-end" style={{height:px(140)}}>
      <div
          style={{
            position: 'absolute',
            bottom: px(41),
            left: px(80),
            width: px(200),
            height: px(200),
            backgroundColor: '#f5f5f5',
            borderRadius: px(4),
            flexShrink: 0,
          }}
        >
    
          <Image
            src={`${CDN}/LendingVault/ProjectConstruction/logo.png`}
            alt="Project Construction Logo"
            width={200}
            height={200}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: px(4) }}
          />
        </div> 

         <div className="flex items-center" style={{height:px(80),paddingRight:px(80), gap: px(15)}}>
           {Array.from({ length: 16 }, (_, i) => (
             <div
               key={i}
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
                 src={`${CDN}/LendingVault/ProjectConstruction/item/img${i + 1}.png`}
                 alt={`Constructor ${i + 1}`}
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

         <ProjectCardList filterTab={activeTab} />

         {/* Pagination Controls */}
         <div className="flex items-center justify-end" style={{ marginTop: px(20), marginBottom: px(50) }}>
           <div className="flex items-center" style={{ gap: px(16), marginRight: px(30) }}>
             <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
               Total {tableData.length} items
             </span>
             <select
               value={itemsPerPage}
               onChange={(e) => setItemsPerPage(Number(e.target.value))}
               style={{
                 fontFamily: 'PingFang SC',
                 fontWeight: 400,
                 fontStyle: 'normal',
                 fontSize: px(16),
                 lineHeight: '100%',
                 letterSpacing: '0%',
                 padding: px(4),
                 border: '1px solid #e0e0e0',
                 borderRadius: px(4),
               }}
             >
               <option value={10}>10 items/page</option>
               <option value={20}>20 items/page</option>
               <option value={50}>50 items/page</option>
             </select>
           </div>

           <div className="flex items-center" style={{ gap: px(8) }}>
             <button
               onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
               disabled={currentPage === 1}
               style={{
                 fontFamily: 'PingFang SC',
                 fontWeight: 400,
                 fontStyle: 'normal',
                 fontSize: px(16),
                 lineHeight: '100%',
                 letterSpacing: '0%',
                 padding: px(8),
                 border: '1px solid #e0e0e0',
                 borderRadius: px(4),
                 backgroundColor: currentPage === 1 ? '#f5f5f5' : '#ffffff',
                 cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                 color: currentPage === 1 ? '#999999' : '#000000',
               }}
             >
               &lt;
             </button>
             {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
               <button
                 key={page}
                 onClick={() => setCurrentPage(page)}
                 style={{
                   fontFamily: 'PingFang SC',
                   fontWeight: 400,
                   fontStyle: 'normal',
                   fontSize: px(16),
                   lineHeight: '100%',
                   letterSpacing: '0%',
                   width: px(30),
                   height: px(30),
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center',
                   border: '1px solid #e0e0e0',
                   borderRadius: px(4),
                   backgroundColor: currentPage === page ? '#000000' : '#F0F2F5',
                   color: currentPage === page ? '#ffffff' : '#000000',
                   cursor: 'pointer',
                 }}
               >
                 {page}
               </button>
             ))}
             <button
               onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
               disabled={currentPage === totalPages}
               style={{
                 fontFamily: 'PingFang SC',
                 fontWeight: 400,
                 fontStyle: 'normal',
                 fontSize: px(16),
                 lineHeight: '100%',
                 letterSpacing: '0%',
                 padding: px(8),
                 border: '1px solid #e0e0e0',
                 borderRadius: px(4),
                 backgroundColor: currentPage === totalPages ? '#f5f5f5' : '#ffffff',
                 cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                 color: currentPage === totalPages ? '#999999' : '#000000',
               }}
             >
               &gt;
             </button>
             <div className="flex items-center" style={{ gap: px(8), marginLeft: px(16) }}>
               <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                 Go to
               </span>
               <input
                 type="number"
                 min={1}
                 max={totalPages}
                 value={currentPage}
                 onChange={(e) => {
                   const page = Number(e.target.value)
                   if (page >= 1 && page <= totalPages) {
                     setCurrentPage(page)
                   }
                 }}
                 style={{
                   fontFamily: 'PingFang SC',
                   fontWeight: 400,
                   fontStyle: 'normal',
                   fontSize: px(16),
                   lineHeight: '100%',
                   letterSpacing: '0%',
                   width: px(50),
                   padding: px(4),
                   border: '1px solid #e0e0e0',
                   borderRadius: px(4),
                   textAlign: 'center',
                 }}
               />
               <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                 page
               </span>
             </div>
           </div>
         </div>
       </div>
    </div>

    {/* 构造函数图片弹窗 */}
    {selectedImageIndex !== null && (
      <ConstructorImageModal
        isOpen={selectedImageIndex !== null}
        onClose={() => setSelectedImageIndex(null)}
        imageSrc={`${CDN}/LendingVault/ProjectConstruction/item/img${selectedImageIndex + 1}.png`}
        imageIndex={selectedImageIndex}
      />
    )}
    </>
  )
}
