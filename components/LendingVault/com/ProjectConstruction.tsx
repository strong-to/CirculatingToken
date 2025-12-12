'use client'

import { useState } from 'react'
import { px } from "@/utils/pxToRem"
import Image from 'next/image'

export default function ProjectConstruction() {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const totalPages = 7


  return (
    <>
  
      {/* 顶部区域 */}
      <div className="w-full" style={{ marginTop: px(131), gap: px(30) }}>
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
            src="/LendingVault/ProjectConstruction/logo.png"
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
               style={{
                 width: px(80),
                 height: px(80),
                 borderRadius: '50%',
                 flexShrink: 0,
                 overflow: 'hidden',
               }}
             >
               <Image
                 src={`/LendingVault/ProjectConstruction/item/img${i + 1}.png`}
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
       <div className="w-full" style={{ marginTop: px(50), paddingLeft: px(80), paddingRight: px(80) }}>
         {/* 表格 */}
         <div className="w-full" style={{ borderTop: '1px solid #e0e0e0', borderBottom: '1px solid #e0e0e0', overflow: 'hidden' }}>
           {/* 表头 */}
           <div className="flex" style={{ borderBottom: '1px solid #e0e0e0' }}>
             <div style={{ width: px(200), height: px(70), padding: px(16), borderRight: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
               <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                 multi-modal data annotation
               </span>
             </div>
             <div style={{ flex: 1, height: px(70), padding: px(16), borderRight: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
               <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                 job content
               </span>
             </div>
             <div style={{ width: px(120), height: px(70), padding: px(16), borderRight: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
               <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                 filter/sort
               </span>
             </div>
             <div style={{ width: px(180), height: px(70), padding: px(16), borderRight: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
               <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                 contribution consideration/Tokens
               </span>
             </div>
             <div style={{ width: px(120), height: px(70), padding: px(16), borderRight: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
               <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                 workload unit
               </span>
             </div>
             <div style={{ width: px(120), height: px(70), padding: px(16), borderRight: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
               <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                 total demand
               </span>
             </div>
             <div style={{ width: px(150), height: px(70), padding: px(16), borderRight: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
               <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                 number of participants
               </span>
             </div>
             <div style={{ width: px(140), height: px(70), padding: px(16), borderRight: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
               <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                 difficulty coefficient
               </span>
             </div>
             <div style={{ width: px(120), height: px(70), padding: px(16), borderRight: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
               <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                 time limit
               </span>
             </div>
             <div style={{ width: px(120), height: px(70), padding: px(16), borderRight: 'none', display: 'flex', alignItems: 'center' }}>
               <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                 status
               </span>
             </div>
           </div>

           {/* 表格数据行 */}
           {Array.from({ length: 6 }).map((_, index) => (
             <div key={index} className="flex" style={{ borderBottom: index < 5 ? '1px solid #e0e0e0' : 'none' }}>
               <div style={{ width: px(200), height: px(70), padding: px(16), borderRight: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
                 <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                   multi-modal data annotation
                 </span>
               </div>
               <div style={{ flex: 1, height: px(70), padding: px(16), borderRight: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
                 <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                   job content
                 </span>
               </div>
               <div style={{ width: px(120), height: px(70), padding: px(16), borderRight: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
                 <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                   filter/sort
                 </span>
               </div>
               <div style={{ width: px(180), height: px(70), padding: px(16), borderRight: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
                 <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                   80
                 </span>
               </div>
               <div style={{ width: px(120), height: px(70), padding: px(16), borderRight: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
                 <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                   item
                 </span>
               </div>
               <div style={{ width: px(120), height: px(70), padding: px(16), borderRight: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
                 <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                   200000
                 </span>
               </div>
               <div style={{ width: px(150), height: px(70), padding: px(16), borderRight: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
                 <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                   110
                 </span>
               </div>
               <div style={{ width: px(140), height: px(70), padding: px(16), borderRight: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
                 <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                   4.1/5.0
                 </span>
               </div>
               <div style={{ width: px(120), height: px(70), padding: px(16), borderRight: '1px solid #e0e0e0', display: 'flex', alignItems: 'center' }}>
                 <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                   Nov 30 2026
                 </span>
               </div>
               <div style={{ width: px(120), height: px(70), padding: px(16), borderRight: 'none', display: 'flex', alignItems: 'center' }}>
                 <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
                   under construction
                 </span>
               </div>
             </div>
           ))}
         </div>

         {/* 翻页控件 */}
         <div className="flex items-center justify-end" style={{ marginTop: px(20), marginBottom: px(50) }}>
           <div className="flex items-center" style={{ gap: px(16), marginRight: px(30) }}>
             <span style={{ fontFamily: 'PingFang SC', fontWeight: 400, fontStyle: 'normal', fontSize: px(16), lineHeight: '100%', letterSpacing: '0%', color: '#000000' }}>
               共1条
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
               <option value={10}>10条/页</option>
               <option value={20}>20条/页</option>
               <option value={50}>50条/页</option>
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
                 前往
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
                 页
               </span>
             </div>
           </div>
         </div>
       </div>
    </div>
    </>
  )
}
