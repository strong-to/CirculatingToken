'use client'

export default function Logo() {
  return (
    <div className="relative flex-shrink-0" style={{ width: '5.284375rem', height: '3.79875rem' }}> {/* 84.55px, 60.78px */}
      {/* Logo 组合 - 根据设计图创建 */}
      {/* 灰色方块 - 15.17 x 15.3, #A8A9A9, X:0 Y:0 */}
      <div 
        className="absolute bg-[#A8A9A9]"
        style={{
          width: '0.948125rem', // 15.17px
          height: '0.95625rem', // 15.3px
          left: '0',
          top: '0',
        }}
      />
      
      {/* 黑色方块 - 46.36 x 46.78, #000000, X:24 Y:0 */}
      <div 
        className="absolute bg-[#000000]"
        style={{
          width: '2.8975rem', // 46.36px
          height: '2.92375rem', // 46.78px
          left: '1.5rem', // 24px
          top: '0',
        }}
      />
      
      {/* 深灰色方块（带描边）- 36.34 x 36.67, #595757, stroke: 0.24, #000000, X:48 Y:0 */}
      <div 
        className="absolute border border-[#000000]"
        style={{
          width: '2.27125rem', // 36.34px
          height: '2.291875rem', // 36.67px
          left: '3rem', // 48px
          top: '0',
          borderWidth: '0.015rem' // 0.24px
        }}
      />
      
      {/* 深灰色方块 - 25.55 x 25.78, #595757, X:24 Y:35 */}
      <div 
        className="absolute bg-[#595757]"
        style={{
          width: '1.596875rem', // 25.55px
          height: '1.61125rem', // 25.78px
          left: '1.5rem', // 24px
          top: '2.1875rem', // 35px
        }}
      />
    </div>
  )
}

