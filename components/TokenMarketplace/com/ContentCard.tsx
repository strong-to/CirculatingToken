'use client'

import { useState } from 'react'
import Image from 'next/image'
import { px } from '@/utils/pxToRem'
import { ContentCardProps } from './types'

export default function ContentCard({
  backgroundImage,
  hoverColor = '#083FD8',
  clickColor = '#CB2C22',
  initial,
  hover,
  clicked
}: ContentCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  // 动态创建按钮hover状态对象
  const [buttonHovered, setButtonHovered] = useState<Record<string, boolean>>(() => {
    const state: Record<string, boolean> = {}
    // 初始化状态和hover状态的按钮
    initial.buttons.forEach((_, index) => {
      state[`initial_${index}`] = false
    })
    hover.buttons.forEach((_, index) => {
      state[`hover_${index}`] = false
    })
    // 点击状态的按钮
    clicked.dataCards.forEach((_, index) => {
      state[`clicked_${index}`] = false
    })
    return state
  })

  return (
    <div 
      className="flex justify-between relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        // 如果已点击，鼠标移出时重置为初始化状态
        if (isClicked) {
          setIsClicked(false)
        }
        // 重置所有按钮的hover状态
        const resetState: Record<string, boolean> = {}
        Object.keys(buttonHovered).forEach(key => {
          resetState[key] = false
        })
        setButtonHovered(resetState)
      }}
      onClick={(e) => {
        e.stopPropagation()
        setIsClicked(true)
      }}
      style={{ 
        width: 'calc(50% - 7.5px)',
        height: px(100), 
        borderRadius: px(4),
        paddingLeft: px(20),
        paddingRight: px(15),
        paddingTop: px(20),
        paddingBottom: px(20),
        position: 'relative',
        overflow: 'hidden'
      }}>
      {/* 背景图层 - 初始化状态显示，hover和点击后隐藏 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: (!isHovered && !isClicked) ? 1 : 0,
        transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'opacity',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      {/* 覆盖层 - hover时显示蓝色(#083FD8)，点击后显示红色(#CB2C22)，初始化时透明 */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: isClicked ? clickColor : (isHovered ? hoverColor : 'transparent'),
        transition: 'background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        willChange: 'background-color',
        pointerEvents: 'none',
        zIndex: 1
      }} />
      <div style={{ 
        position: 'relative', 
        zIndex: 2, 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'space-between',
        transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}>

        {/* 初始化状态内容 - 显示背景图时的内容 */}
        {!isHovered && !isClicked && (
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          opacity: (!isHovered && !isClicked) ? 1 : 0,
          transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          minWidth: 0
        }}>
        <div className='flex  items-center ' style={{height:px(60)}}>
            <div style={{width:px(60) , height:'100%'}}>
              <Image
                src={initial.icon}
                alt="Icon"
                width={60}
                height={60}
                className="w-full h-full object-contain"
              />
            </div>
            <div className='flex  flex-col items-start  justify-between' style={{marginLeft:px(20),height:'100%',paddingTop:px(1),paddingBottom:px(1)}}>
             <div className='whitespace-nowrap flex  items-start  justify-between' style={{
               fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
               fontWeight: 300,
               fontStyle: 'normal',
               fontSize: px(22),
               lineHeight: '100%',
               letterSpacing: '0%',
               color: '#FFFFFF'
             }}>{initial.title}</div>
             <div className='whitespace-nowrap flex  items-start  justify-between' style={{
               fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
               fontWeight: 300,
               fontStyle: 'normal',
               fontSize: px(22),
               lineHeight: '100%',
               letterSpacing: '0%',
               color: '#FFFFFF'
             }}>{initial.subtitle}</div>
            </div>

         </div>

         <div className='flex flex-col items-start justify-between' style={{color:'#FFFFFF',flex: 1, marginLeft:px(28), minWidth: 0}}>

       <div className='flex flex-col items-start'  style={{height:'100%'}}>
            {initial.descriptions.map((desc, index) => (
              <div key={index} className='flex items-start justify-start whitespace-nowrap' style={{
                width: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: px(18),
                lineHeight: '20px',
                letterSpacing: '0%',
                color: '#FFFFFF'
              }}>
                  {desc}
              </div>
            ))}
       </div>
           
             <div className='flex items-center justify-end' style={{width:'100%',height:px(16), gap: px(6)}}>
                 {initial.buttons.map((buttonText, index) => (
                   <div key={index} style={{
                     height:px(16),
                     paddingTop:px(1),
                     paddingLeft: px(12),
                     paddingRight: px(12),
                     border: '0.5px solid #FFFFFF',
                     backgroundColor: 'transparent',
                     fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                     fontWeight: 300,
                     fontStyle: 'normal',
                     fontSize: px(10),
                     letterSpacing: '0%',
                     textAlign: 'center',
                     color: '#FFFFFF',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     borderRadius: px(2)
                   }}>{buttonText}</div>
                 ))}
             </div>
         </div>
        </div>
        )}
        {/* hover状态内容 - 鼠标移入时显示蓝色背景时的内容 */}
        {isHovered && !isClicked && (
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          opacity: (isHovered && !isClicked) ? 1 : 0,
          transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          minWidth: 0
        }}>
        <div className='flex  items-center ' style={{height:px(60)}}>
            <div style={{width:px(60) , height:'100%'}}>
              <Image
                src={hover.icon}
                alt="Icon"
                width={60}
                height={60}
                className="w-full h-full object-contain"
              />
            </div>
            <div className='flex  flex-col items-start  justify-between' style={{marginLeft:px(20),height:'100%',paddingTop:px(1),paddingBottom:px(1)}}>
             <div className='whitespace-nowrap items-start ' style={{
               fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
               fontWeight: 300,
               fontStyle: 'normal',
               fontSize: px(22),
               lineHeight: '100%',
               letterSpacing: '0%',
               color: '#FFFFFF'
             }}>{hover.title}</div>
             <div className='whitespace-nowrap flex  items-start ' style={{
               fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
               fontWeight: 300,
               fontStyle: 'normal',
               fontSize: px(22),
               lineHeight: '100%',
               letterSpacing: '0%',
               color: '#FFFFFF'
             }}>{hover.subtitle}</div>
            </div>

         </div>

         <div className='flex flex-col items-start justify-between' style={{color:'#FFFFFF',flex: 1, marginLeft:px(28), minWidth: 0}}>
         <div className='flex flex-col items-start'  style={{height:'100%'}}>
            {hover.descriptions.map((desc, index) => (
              <div key={index} className='flex items-start justify-start whitespace-nowrap' style={{
                width: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontStyle: 'normal',
                fontSize: px(18),
                lineHeight: '20px',
                letterSpacing: '0%',
                color: '#FFFFFF'
              }}>
                  {desc}
              </div>
            ))}
       </div>
             <div className='flex items-center justify-end' style={{width:'100%',height:px(16), gap: px(6)}}>
                 {hover.buttons.map((buttonText, index) => {
                   const buttonKey = `hover_${index}`
                   return (
                     <div 
                       key={index}
                       onMouseEnter={() => setButtonHovered({...buttonHovered, [buttonKey]: true})}
                       onMouseLeave={() => setButtonHovered({...buttonHovered, [buttonKey]: false})}
                       style={{
                         height:px(16),
                         paddingTop:px(1),
                         paddingLeft: px(12),
                         paddingRight: px(12),
                         border: '0.5px solid #FFFFFF',
                         backgroundColor: buttonHovered[buttonKey] ? '#FFFFFF' : 'transparent',
                         fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                         fontWeight: 300,
                         fontStyle: 'normal',
                         fontSize: px(10),
                         letterSpacing: '0%',
                         textAlign: 'center',
                         color: buttonHovered[buttonKey] ? '#000000' : '#FFFFFF',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         borderRadius: px(2),
                         cursor: 'pointer',
                         transition: 'background-color 0.3s ease, color 0.3s ease'
                       }}>{buttonText}</div>
                   )
                 })}
             </div>
         </div>
        </div>
        )}

        {/* 点击后状态内容 - 点击后显示红色背景时的内容 */}
        {isClicked && (
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          opacity: isClicked ? 1 : 0,
          transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          minWidth: 0
        }}>
        <div className='flex  items-center ' style={{height:px(60)}}>
            <div style={{width:px(60) , height:'100%'}}>
              <Image
                src={clicked.icon}
                alt="Icon"
                width={60}
                height={60}
                className="w-full h-full object-contain"
              />
            </div>
            <div className='flex  flex-col items-start justify-between' style={{marginLeft:px(20),height:'100%',paddingTop:px(1),paddingBottom:px(1)}}>
             <div className='whitespace-nowrap flex  items-start justify-start' style={{
               fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
               fontWeight: 300,
               fontStyle: 'normal',
               fontSize: px(24),
               lineHeight: '100%',
               letterSpacing: '0%',
               color: '#FFFFFF'
             }}>{clicked.title}</div>
             <div className='whitespace-nowrap flex  items-start justify-start' style={{
               fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
               fontWeight: 300,
               fontStyle: 'normal',
               fontSize: px(24),
               lineHeight: '100%',
               letterSpacing: '0%',
               color: '#FFFFFF'
             }}>{clicked.subtitle}</div>
            </div>

         </div>

         <div className='flex  items-center justify-between' style={{color:'#FFFFFF',flex: 1, marginLeft:px(28), minWidth: 0, height:px(60)}}>
           {clicked.dataCards.map((card, index) => {
             const buttonKey = `clicked_${index}`
             return (
               <div key={index} className='flex flex-col items-start justify-between' style={{ width: px(88),height:'100%' }}>
                 <div className='whitespace-nowrap flex items-center justify-start' style={{
                   fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                   fontWeight: 300,
                   fontStyle: 'normal',
                   fontSize: px(10),
                   lineHeight: px(9),
                   letterSpacing: '0%',
                   color: '#FFFFFF'
                 }}>{card.label}</div>
                 {card.rating !== undefined ? (
                   // 显示评分星星
                   <div className='flex items-center justify-start' style={{ gap: px(2) }}>
                     {Array.from({ length: 5 }).map((_, starIndex) => {
                       const isFilled = starIndex < (card.rating || 0)
                       return isFilled ? (
                         <svg key={starIndex} width={px(12)} height={px(12)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M9.00012 0.818359L10.8371 6.47186H16.7815L11.9723 9.96591L13.8093 15.6194L9.00012 12.1254L4.19097 15.6194L6.0279 9.96591L1.21875 6.47186H7.16319L9.00012 0.818359Z" fill="white"/>
                         </svg>
                       ) : (
                         <svg key={starIndex} width={px(12)} height={px(12)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M10.3613 6.62598L10.4736 6.97168H15.2432L11.6787 9.56152L11.3848 9.77539L11.4971 10.1201L12.8584 14.3096L9.29395 11.7207L9 11.5068L8.70605 11.7207L5.14062 14.3105L6.50391 10.1201L6.61523 9.77539L6.32227 9.56152L2.75781 6.97168H7.52637L7.63867 6.62598L9 2.43555L10.3613 6.62598Z" stroke="white" fill="none"/>
                         </svg>
                       )
                     })}
                   </div>
                 ) : (
                   // 显示数值
                   <div className='whitespace-nowrap flex items-center justify-start'  style={{
                     fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                     fontWeight: 700,
                     fontStyle: 'normal',
                     fontSize: px(13),
                     lineHeight: px(11),
                     letterSpacing: '0%',
                     color: '#FFFFFF'
                   }}>{card.value}</div>
                 )}
                 <div 
                   className='flex items-center justify-center' 
                   onMouseEnter={() => setButtonHovered({...buttonHovered, [buttonKey]: true})}
                   onMouseLeave={() => setButtonHovered({...buttonHovered, [buttonKey]: false})}
                   style={{
                     width: px(88),
                     height:px(22),
                     border: '1px solid #FFFFFF',
                     borderRadius: px(4),
                     backgroundColor: buttonHovered[buttonKey] ? '#FFFFFF' : 'transparent',
                     fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                     fontWeight: 300,
                     fontStyle: 'normal',
                     fontSize: px(10),
                     lineHeight: '100%',
                     letterSpacing: '0%',
                     color: buttonHovered[buttonKey] ? '#000000' : '#FFFFFF',
                     cursor: 'pointer',
                     transition: 'background-color 0.3s ease, color 0.3s ease'
                   }}>{card.buttonText}</div>
               </div>
             )
           })}
         </div>
        </div>
        )}

      </div>
    </div>
  )
}

