'use client'

import { useState } from 'react'
import Image from 'next/image'
import { px } from '@/utils/pxToRem'
import FilterDropdown from '@/components/TokenMarketplace/com/FilterDropdown'
import SearchInput from '@/components/TokenMarketplace/com/SearchInput'

export default function TokenMarketplaceContent() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [buttonHovered, setButtonHovered] = useState({
    details: false,
    share: false,
    market: false,
    favorites: false,
    table: false,
    comp: false,
    gpu: false,
    optimize: false
  })
  return (
    <div className="flex-1 min-h-0 overflow-y-scroll scrollbar-hide" style={{ paddingLeft: px(240), paddingRight: px(240) }}>
      {/* 三张图片 */}
      <div className='flex items-center justify-between w-full'>
        <div className="flex-1" style={{ height: px(270) }}>
          <Image
            src="/images/TokenMarketplace/Mask1.png"
            alt="Mask 1"
            width={400}
            height={270}
            className="w-full h-full object-contain"
            priority
          />
        </div>
        <div className="flex-1" style={{ height: px(270) }}>
          <Image
            src="/images/TokenMarketplace/Mask2.png"
            alt="Mask 2"
            width={400}
            height={270}
            className="w-full h-full object-contain"
            priority
          />
        </div>
        <div className="flex-1" style={{ height: px(270) }}>
          <Image
            src="/images/TokenMarketplace/Mask3.png"
            alt="Mask 3"
            width={400}
            height={270}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>
      {/* 筛选框 */}
      <div className='flex items-center' style={{ width: '100%', paddingLeft: px(40), paddingRight: px(40), marginTop: px(15), gap: px(15) }}>
        <FilterDropdown
          placeholder="Interaction / Form"
          description="Which of the following ways would you like to interact with AI?"
          categories={[
            {
              label: 'Textual',
              description: 'All linear content such as plain text, symbols, code, etc. Text-only content, notables/images/audio.',
              subCategories: ['Text', 'Code', 'Natural Language', 'Prompt', 'Markdown', 'Plain Text']
            },
            {
              label: 'Visual',
              description: 'Visual content including images, videos, 3D models, and animations.',
              subCategories: ['Image', 'Chart', 'Graphics', 'Screenshot']
            },
            {
              label: 'Audio',
              description: 'Audio content such as music, speech, and sound effects.',
              subCategories: ['Audio', 'Speech', 'Audio Features']
            },
            {
              label: 'Multimodal',
              description: 'Content that combines multiple media types like video with audio, text with images, or interactive content.',
              subCategories: ['Image+Text', 'Video+Audio', 'MM Output', 'Voice + Text']
            },
            {
              label: 'Structured Data',
              description: 'Structured data formats including JSON, XML, CSV, and database formats.',
              subCategories: ['Table', 'JSON', 'CSV', 'DB Fields', 'Sensor Data', 'Stream Data']
            },
            {
              label: 'Document Formats',
              description: 'Common document formats like PDF, Word, Excel, and PowerPoint files.',
              subCategories: ['PDF', 'DOC/DOCX', 'XLS/XLSX', 'PPTX', 'TXT', 'Markdown File', 'RTF']
            }
          ]}
        />
        
        <FilterDropdown
          placeholder="Domain"
          description="Which domain are you interested in?"
          categories={[
            {
              label: 'Science & Nature',
              description: 'Scientific fields and natural phenomena including biology, meteorology, geography, and environmental studies.',
              subCategories: ['Biology', 'Meteorology', 'Geography', 'Environment', 'Research', 'Ecology', 'Geology']
            },
            {
              label: 'Industry & Energy',
              description: 'Industrial sectors and energy-related fields including manufacturing, transportation, and agriculture.',
              subCategories: ['Energy', 'Industry', 'Manufacturing', 'Transportation', 'Agriculture']
            },
            {
              label: 'Health & Medicine',
              description: 'Healthcare and medical fields including biomedical research and public health.',
              subCategories: ['Healthcare', 'Medicine', 'Biomedical', 'Public Health']
            },
            {
              label: 'Finance & Economics',
              description: 'Financial and economic sectors including fintech, markets, and financial analysis.',
              subCategories: ['Finance', 'Fintech', 'Markets & Trade', 'Financial Analysis']
            },
            {
              label: 'Law, Governance & Public Affairs',
              description: 'Legal, governance, and public affairs including law, policy, and city management.',
              subCategories: ['Law', 'Policy', 'Public Safety', 'Governance / City Management']
            },
            {
              label: 'Communication & Media',
              description: 'Communication and media industries including content creation, news, and advertising.',
              subCategories: ['Communications', 'Media', 'Content Creation', 'News', 'Advertising']
            },
            {
              label: 'Social & Culture',
              description: 'Social and cultural fields including entertainment, sports, art, and community.',
              subCategories: ['Social', 'Entertainment', 'Sports', 'Art', 'Culture', 'Community']
            },
            {
              label: 'Education & Learning',
              description: 'Educational and learning fields including training, coaching, and learning tools.',
              subCategories: ['Education', 'Training', 'Coaching', 'Learning Tools']
            },
            {
              label: 'AI & Computing',
              description: 'Artificial intelligence and computing fields including algorithms, data, models, and generation.',
              subCategories: ['AI / Computing', 'Algorithms', 'Data', 'Model', 'Generation & Inference']
            }
          ]}
        />
        
        <FilterDropdown
          placeholder="Object"
          description="What type of object are you looking for?"
          options={['Text', 'Data', 'Image', 'Video', 'Audio', 'Document', 'Chart', 'Flow', 'Code', 'Emotion']}
        />
        
        <FilterDropdown
          placeholder="Action"
          description="What action would you like to perform?"
          categories={[
            {
              label: 'Generate',
              description: 'Actions related to creating and generating new content.',
              subCategories: ['Generate', 'Rewrite', 'Edit', 'Summarize', 'Translate']
            },
            {
              label: 'Analysis',
              description: 'Actions related to understanding and analyzing content.',
              subCategories: ['Understand', 'Analyze', 'Compare', 'Classify', 'Predict']
            },
            {
              label: 'Organize',
              description: 'Actions related to organizing and structuring content.',
              subCategories: ['Organize', 'Structure', 'Clarify', 'Coordinate', 'Optimize']
            },
            {
              label: 'Search',
              description: 'Actions related to searching and retrieving information.',
              subCategories: ['Search', 'Retrieve', 'Match', 'Monitor']
            },
            {
              label: 'Interact',
              description: 'Actions related to interaction and communication.',
              subCategories: ['Dialogue', 'Explain', 'Teach', 'Coach']
            },
            {
              label: 'Emotion',
              description: 'Actions related to emotional support and encouragement.',
              subCategories: ['Soothe', 'Encourage', 'Accompany']
            },
            {
              label: 'Others',
              description: 'Other actions not covered by the above categories.',
              subCategories: []
            }
          ]}
        />
        
        <SearchInput
          placeholder="Search"
        />
      </div>

       {/* 内容卡片区域 */}
       <div className='flex items-center ' style={{ width: '100%', paddingLeft: px(40), paddingRight: px(40), marginTop: px(15), gap: px(15) }}>
        {/* 
          第一个内容卡片
          状态说明：
          - 初始化：显示背景图，背景色透明
          - hover：隐藏背景图，背景色变为蓝色(#083FD8)
          - 点击后：隐藏背景图，背景色变为红色(#CB2C22)
          - 红色状态下鼠标移出：重置为初始化状态
        */}
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
            setButtonHovered({
              details: false,
              share: false,
              market: false,
              favorites: false,
              table: false,
              comp: false,
              gpu: false,
              optimize: false
            })
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
            backgroundImage: 'url(/images/TokenMarketplace/content/bg.png)',
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
            backgroundColor: isClicked ? '#CB2C22' : (isHovered ? '#083FD8' : 'transparent'),
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
              transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
            <div className='flex  items-center ' style={{height:px(60)}}>
                <div style={{width:px(60) , height:'100%'}}>
                  <Image
                    src="/images/TokenMarketplace/content/icon1.png"
                    alt="Icon 1"
                    width={60}
                    height={60}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className='flex  flex-col items-center  justify-between' style={{marginLeft:px(20),height:'100%',paddingTop:px(1),paddingBottom:px(1)}}>
                 <div className='whitespace-nowrap' style={{
                   fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                   fontWeight: 300,
                   fontStyle: 'normal',
                   fontSize: px(24),
                   lineHeight: '100%',
                   letterSpacing: '0%',
                   color: '#FFFFFF'
                 }}>TENSOR GRID</div>
                 <div className='whitespace-nowrap' style={{
                   fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                   fontWeight: 300,
                   fontStyle: 'normal',
                   fontSize: px(24),
                   lineHeight: '100%',
                   letterSpacing: '0%',
                   color: '#FFFFFF'
                 }}>DBAI0000002</div>
                </div>
 
             </div>

             <div className='flex flex-col items-center justify-between' style={{color:'#FFFFFF',width:'100%',marginLeft:px(28)}}>
                <div className='flex items-center justify-start whitespace-nowrap' style={{
                  width: '100%',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'normal',
                  fontSize: px(18),
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  color: '#FFFFFF'
                }}>
                    THIS IS A GPU COMPUTE AI TOOL

                </div>
                 <div className='flex items-center justify-end' style={{width:'100%',height:px(16), gap: px(6)}}>

                     <div style={{
                       height: '100%',
                       paddingLeft: px(16),
                       paddingRight: px(16),
                       border: '1px solid #FFFFFF',
                       backgroundColor: 'transparent',
                       fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                       fontWeight: 300,
                       fontStyle: 'normal',
                       fontSize: px(10),
                       lineHeight: px(16),
                       letterSpacing: '0%',
                       textAlign: 'center',
                       color: '#FFFFFF',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       borderRadius: px(2)
                     }}>Table</div>
                     <div style={{
                       height: '100%',
                       paddingLeft: px(16),
                       paddingRight: px(16),
                       border: '1px solid #FFFFFF',
                       backgroundColor: 'transparent',
                       fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                       fontWeight: 300,
                       fontStyle: 'normal',
                       fontSize: px(10),
                       lineHeight: px(16),
                       letterSpacing: '0%',
                       textAlign: 'center',
                       color: '#FFFFFF',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       borderRadius: px(2)
                     }}>Comp</div>
                     <div style={{
                       height: '100%',
                       paddingLeft: px(16),
                       paddingRight: px(16),
                       border: '1px solid #FFFFFF',
                       backgroundColor: 'transparent',
                       fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                       fontWeight: 300,
                       fontStyle: 'normal',
                       fontSize: px(10),
                       lineHeight: px(16),
                       letterSpacing: '0%',
                       textAlign: 'center',
                       color: '#FFFFFF',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       borderRadius: px(2)
                     }}>GPU</div>
                     <div style={{
                       height: '100%',
                       paddingLeft: px(16),
                       paddingRight: px(16),
                       border: '1px solid #FFFFFF',
                       backgroundColor: 'transparent',
                       fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                       fontWeight: 300,
                       fontStyle: 'normal',
                       fontSize: px(10),
                       lineHeight: px(16),
                       letterSpacing: '0%',
                       textAlign: 'center',
                       color: '#FFFFFF',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       borderRadius: px(2)
                     }}>Optimize</div>

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
              transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
            <div className='flex  items-center ' style={{height:px(60)}}>
                <div style={{width:px(60) , height:'100%'}}>
                  <Image
                    src="/images/TokenMarketplace/content/icon1.png"
                    alt="Icon 1"
                    width={60}
                    height={60}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className='flex  flex-col items-center  justify-between' style={{marginLeft:px(20),height:'100%',paddingTop:px(1),paddingBottom:px(1)}}>
                 <div className='whitespace-nowrap' style={{
                   fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                   fontWeight: 300,
                   fontStyle: 'normal',
                   fontSize: px(24),
                   lineHeight: '100%',
                   letterSpacing: '0%',
                   color: '#FFFFFF'
                 }}>TENSOR GRID</div>
                 <div className='whitespace-nowrap' style={{
                   fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                   fontWeight: 300,
                   fontStyle: 'normal',
                   fontSize: px(24),
                   lineHeight: '100%',
                   letterSpacing: '0%',
                   color: '#FFFFFF'
                 }}>DBAI0000002</div>
                </div>
 
             </div>

             <div className='flex flex-col items-center justify-between' style={{color:'#FFFFFF',width:'100%',marginLeft:px(28)}}>
                <div className='flex items-center justify-start whitespace-nowrap' style={{
                  width: '100%',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'normal',
                  fontSize: px(18),
                  lineHeight: '20px',
                  letterSpacing: '0%',
                  color: '#FFFFFF'
                }}>
                    THIS IS A GPU COMPUTE AI TOOL

                </div>
                 <div className='flex items-center justify-end' style={{width:'100%',height:px(16), gap: px(6)}}>

                     <div 
                       onMouseEnter={() => setButtonHovered({...buttonHovered, table: true})}
                       onMouseLeave={() => setButtonHovered({...buttonHovered, table: false})}
                       style={{
                         height: '100%',
                         paddingLeft: px(16),
                         paddingRight: px(16),
                         border: '1px solid #FFFFFF',
                         backgroundColor: buttonHovered.table ? '#FFFFFF' : 'transparent',
                         fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                         fontWeight: 300,
                         fontStyle: 'normal',
                         fontSize: px(10),
                         lineHeight: px(16),
                         letterSpacing: '0%',
                         textAlign: 'center',
                         color: buttonHovered.table ? '#000000' : '#FFFFFF',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         borderRadius: px(2),
                         cursor: 'pointer',
                         transition: 'background-color 0.3s ease, color 0.3s ease'
                       }}>Table</div>
                     <div 
                       onMouseEnter={() => setButtonHovered({...buttonHovered, comp: true})}
                       onMouseLeave={() => setButtonHovered({...buttonHovered, comp: false})}
                       style={{
                         height: '100%',
                         paddingLeft: px(16),
                         paddingRight: px(16),
                         border: '1px solid #FFFFFF',
                         backgroundColor: buttonHovered.comp ? '#FFFFFF' : 'transparent',
                         fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                         fontWeight: 300,
                         fontStyle: 'normal',
                         fontSize: px(10),
                         lineHeight: px(16),
                         letterSpacing: '0%',
                         textAlign: 'center',
                         color: buttonHovered.comp ? '#000000' : '#FFFFFF',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         borderRadius: px(2),
                         cursor: 'pointer',
                         transition: 'background-color 0.3s ease, color 0.3s ease'
                       }}>Comp</div>
                     <div 
                       onMouseEnter={() => setButtonHovered({...buttonHovered, gpu: true})}
                       onMouseLeave={() => setButtonHovered({...buttonHovered, gpu: false})}
                       style={{
                         height: '100%',
                         paddingLeft: px(16),
                         paddingRight: px(16),
                         border: '1px solid #FFFFFF',
                         backgroundColor: buttonHovered.gpu ? '#FFFFFF' : 'transparent',
                         fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                         fontWeight: 300,
                         fontStyle: 'normal',
                         fontSize: px(10),
                         lineHeight: px(16),
                         letterSpacing: '0%',
                         textAlign: 'center',
                         color: buttonHovered.gpu ? '#000000' : '#FFFFFF',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         borderRadius: px(2),
                         cursor: 'pointer',
                         transition: 'background-color 0.3s ease, color 0.3s ease'
                       }}>GPU</div>
                     <div 
                       onMouseEnter={() => setButtonHovered({...buttonHovered, optimize: true})}
                       onMouseLeave={() => setButtonHovered({...buttonHovered, optimize: false})}
                       style={{
                         height: '100%',
                         paddingLeft: px(16),
                         paddingRight: px(16),
                         border: '1px solid #FFFFFF',
                         backgroundColor: buttonHovered.optimize ? '#FFFFFF' : 'transparent',
                         fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                         fontWeight: 300,
                         fontStyle: 'normal',
                         fontSize: px(10),
                         lineHeight: px(16),
                         letterSpacing: '0%',
                         textAlign: 'center',
                         color: buttonHovered.optimize ? '#000000' : '#FFFFFF',
                         display: 'flex',
                         alignItems: 'center',
                         justifyContent: 'center',
                         borderRadius: px(2),
                         cursor: 'pointer',
                         transition: 'background-color 0.3s ease, color 0.3s ease'
                       }}>Optimize</div>

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
              transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
            <div className='flex  items-center ' style={{height:px(60)}}>
                <div style={{width:px(60) , height:'100%'}}>
                  <Image
                    src="/images/TokenMarketplace/content/icon2.png"
                    alt="Icon 1"
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
                 }}>FrameFlow</div>
                 <div className='whitespace-nowrap flex  items-start justify-start' style={{
                   fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                   fontWeight: 300,
                   fontStyle: 'normal',
                   fontSize: px(24),
                   lineHeight: '100%',
                   letterSpacing: '0%',
                   color: '#FFFFFF'
                 }}>DBAI0000017</div>
                </div>
 
             </div>

             <div className='flex  items-center justify-between' style={{color:'#FFFFFF',width:'100%',marginLeft:px(28),height:px(60)}}>
               
                {/* 第一个卡片：24h Revenue */}
                <div className='flex flex-col items-start justify-between' style={{ width: px(88),height:'100%' }}>
                    <div className='whitespace-nowrap flex items-center justify-start' style={{
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontWeight: 300,
                      fontStyle: 'normal',
                      fontSize: px(10),
                      lineHeight: px(9),
                      letterSpacing: '0%',
                      color: '#FFFFFF'
                    }}>24h Revenue</div>
                    <div className='whitespace-nowrap flex items-center justify-start'  style={{
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontWeight: 700,
                      fontStyle: 'normal',
                      fontSize: px(13),
                      lineHeight: px(11),
                      letterSpacing: '0%',
                      color: '#FFFFFF'
                    }}>$6550,521</div>
                    <div 
                      className='flex items-center justify-center' 
                      onMouseEnter={() => setButtonHovered({...buttonHovered, details: true})}
                      onMouseLeave={() => setButtonHovered({...buttonHovered, details: false})}
                      style={{
                        width: px(88),
                        height:px(22),
                        border: '1px solid #FFFFFF',
                        borderRadius: px(4),
                        backgroundColor: buttonHovered.details ? '#FFFFFF' : 'transparent',
                        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                        fontWeight: 300,
                        fontStyle: 'normal',
                        fontSize: px(10),
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: buttonHovered.details ? '#000000' : '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease, color 0.3s ease'
                      }}>Details</div>
                </div>

                {/* 第二个卡片：Market Cap */}
                <div className='flex flex-col items-start justify-between' style={{ width: px(88),height:'100%' }}>
                    <div className='whitespace-nowrap flex items-center justify-start' style={{
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontWeight: 300,
                      fontStyle: 'normal',
                      fontSize: px(10),
                      lineHeight: px(9),
                      letterSpacing: '0%',
                      color: '#FFFFFF'
                    }}>Market Cap</div>
                    <div className='whitespace-nowrap flex items-center justify-start'  style={{
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontWeight: 700,
                      fontStyle: 'normal',
                      fontSize: px(13),
                      lineHeight: px(11),
                      letterSpacing: '0%',
                      color: '#FFFFFF'
                    }}>$76,144,900</div>
                    <div 
                      className='flex items-center justify-center' 
                      onMouseEnter={() => setButtonHovered({...buttonHovered, share: true})}
                      onMouseLeave={() => setButtonHovered({...buttonHovered, share: false})}
                      style={{
                        width: px(88),
                        height:px(22),
                        border: '1px solid #FFFFFF',
                        borderRadius: px(4),
                        backgroundColor: buttonHovered.share ? '#FFFFFF' : 'transparent',
                        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                        fontWeight: 300,
                        fontStyle: 'normal',
                        fontSize: px(10),
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: buttonHovered.share ? '#000000' : '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease, color 0.3s ease'
                      }}>Share</div>
                </div>

                {/* 第三个卡片：Total Users */}
                <div className='flex flex-col items-start justify-between' style={{ width: px(88),height:'100%' }}>
                    <div className='whitespace-nowrap flex items-center justify-start' style={{
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontWeight: 300,
                      fontStyle: 'normal',
                      fontSize: px(10),
                      lineHeight: px(9),
                      letterSpacing: '0%',
                      color: '#FFFFFF'
                    }}>Total Users</div>
                    <div className='whitespace-nowrap flex items-center justify-start'  style={{
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontWeight: 700,
                      fontStyle: 'normal',
                      fontSize: px(13),
                      lineHeight: px(11),
                      letterSpacing: '0%',
                      color: '#FFFFFF'
                    }}>2,110,977</div>
                    <div 
                      className='flex items-center justify-center' 
                      onMouseEnter={() => setButtonHovered({...buttonHovered, market: true})}
                      onMouseLeave={() => setButtonHovered({...buttonHovered, market: false})}
                      style={{
                        width: px(88),
                        height:px(22),
                        border: '1px solid #FFFFFF',
                        borderRadius: px(4),
                        backgroundColor: buttonHovered.market ? '#FFFFFF' : 'transparent',
                        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                        fontWeight: 300,
                        fontStyle: 'normal',
                        fontSize: px(10),
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: buttonHovered.market ? '#000000' : '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease, color 0.3s ease'
                      }}>Market</div>
                </div>

                {/* 第四个卡片：User Rating */}
                <div className='flex flex-col items-start justify-between' style={{ width: px(88),height:'100%' }}>
                    <div className='whitespace-nowrap flex items-center justify-start' style={{
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontWeight: 300,
                      fontStyle: 'normal',
                      fontSize: px(10),
                      lineHeight: px(9),
                      letterSpacing: '0%',
                      color: '#FFFFFF'
                    }}>User Rating</div>
                    {/* 5颗星：前3颗填充，后2颗轮廓 */}
                    <div className='flex items-center justify-start' style={{ gap: px(2) }}>
                      {/* 填充的星星 */}
                      <svg width={px(12)} height={px(12)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00012 0.818359L10.8371 6.47186H16.7815L11.9723 9.96591L13.8093 15.6194L9.00012 12.1254L4.19097 15.6194L6.0279 9.96591L1.21875 6.47186H7.16319L9.00012 0.818359Z" fill="white"/>
                      </svg>
                      <svg width={px(12)} height={px(12)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00012 0.818359L10.8371 6.47186H16.7815L11.9723 9.96591L13.8093 15.6194L9.00012 12.1254L4.19097 15.6194L6.0279 9.96591L1.21875 6.47186H7.16319L9.00012 0.818359Z" fill="white"/>
                      </svg>
                      <svg width={px(12)} height={px(12)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.00012 0.818359L10.8371 6.47186H16.7815L11.9723 9.96591L13.8093 15.6194L9.00012 12.1254L4.19097 15.6194L6.0279 9.96591L1.21875 6.47186H7.16319L9.00012 0.818359Z" fill="white"/>
                      </svg>
                      {/* 轮廓的星星 */}
                      <svg width={px(12)} height={px(12)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3613 6.62598L10.4736 6.97168H15.2432L11.6787 9.56152L11.3848 9.77539L11.4971 10.1201L12.8584 14.3096L9.29395 11.7207L9 11.5068L8.70605 11.7207L5.14062 14.3105L6.50391 10.1201L6.61523 9.77539L6.32227 9.56152L2.75781 6.97168H7.52637L7.63867 6.62598L9 2.43555L10.3613 6.62598Z" stroke="white" fill="none"/>
                      </svg>
                      <svg width={px(12)} height={px(12)} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3613 6.62598L10.4736 6.97168H15.2432L11.6787 9.56152L11.3848 9.77539L11.4971 10.1201L12.8584 14.3096L9.29395 11.7207L9 11.5068L8.70605 11.7207L5.14062 14.3105L6.50391 10.1201L6.61523 9.77539L6.32227 9.56152L2.75781 6.97168H7.52637L7.63867 6.62598L9 2.43555L10.3613 6.62598Z" stroke="white" fill="none"/>
                      </svg>
                    </div>
                    {/* Favorites 按钮 */}
                    <div 
                      className='flex items-center justify-center' 
                      onMouseEnter={() => setButtonHovered({...buttonHovered, favorites: true})}
                      onMouseLeave={() => setButtonHovered({...buttonHovered, favorites: false})}
                      style={{
                        width: px(88),
                        height:px(22),
                        border: '1px solid #FFFFFF',
                        borderRadius: px(4),
                        backgroundColor: buttonHovered.favorites ? '#FFFFFF' : 'transparent',
                        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                        fontWeight: 300,
                        fontStyle: 'normal',
                        fontSize: px(10),
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: buttonHovered.favorites ? '#000000' : '#FFFFFF',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease, color 0.3s ease'
                      }}>Favorites</div>


                </div>
               
             </div>
            </div>
            )}

          </div>
        </div>
 
       </div>
    

    </div>
  )
}

