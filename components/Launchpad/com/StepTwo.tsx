'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { px } from '@/utils/pxToRem'
import { useTexts } from './StepTwo/useTexts'
import { StepTitleBar, StepNextButton } from './StepCommon'

// 自定义下拉框组件
interface CustomSelectProps {
  placeholder: string
  options: string[]
  value?: string
  onChange?: (value: string) => void
}

function CustomSelect({ placeholder, options, value, onChange }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(value || '')
  const selectRef = useRef<HTMLDivElement>(null)
  const maskId = useRef(`path-1-inside-1_${placeholder}_${Math.random().toString(36).substring(7)}`).current

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleSelect = (option: string) => {
    setSelectedValue(option)
    setIsOpen(false)
    onChange?.(option)
  }

  return (
    <div className="relative" ref={selectRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center justify-between"
        style={{
          width: px(288),
          height: px(44),
          paddingLeft: px(13),
          paddingRight: px(13),
          border: `0.5px solid #000000`,
          borderRadius: px(4),
          fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
          fontSize: px(14),
          backgroundColor: '#FFFFFF',
        }}
      >
        <span style={{ color: selectedValue ? '#000000' : '#888888' }}>
          {selectedValue || placeholder}
        </span>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        >
          <mask id={maskId} fill="white">
            <path d="M16.1998 5.39844L8.99983 12.5984L1.7998 5.39844"/>
          </mask>
          <path d="M8.99983 12.5984L8.29273 13.3055L8.99983 14.0127L9.70694 13.3055L8.99983 12.5984ZM16.1998 5.39844L15.4927 4.69133L8.29272 11.8913L8.99983 12.5984L9.70694 13.3055L16.9069 6.10554L16.1998 5.39844ZM8.99983 12.5984L9.70694 11.8913L2.50691 4.69133L1.7998 5.39844L1.0927 6.10555L8.29273 13.3055L8.99983 12.5984Z" fill="black" mask={`url(#${maskId})`}/>
        </svg>
      </div>
      
      {isOpen && (
        <div
          className="absolute z-50 dropdown-menu"
          style={{
            width: px(288),
            marginTop: px(4),
            backgroundColor: '#FFFFFF',
            border: `0.5px solid #E4E7ED`,
            borderRadius: px(4),
            boxShadow: '0 2px 12px 0 rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
          }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className="cursor-pointer transition-colors"
              style={{
                padding: `${px(10)} ${px(13)}`,
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontSize: px(14),
                color: '#000000',
                backgroundColor: selectedValue === option ? '#F5F7FA' : 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#000000'
                e.currentTarget.style.color = '#FFFFFF'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = selectedValue === option ? '#F5F7FA' : 'transparent'
                e.currentTarget.style.color = '#000000'
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// 小加号图标
function PlusIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.8125 12.1875H23.5625V13.8125H13.8125V23.5625H12.1875V13.8125H2.4375V12.1875H12.1875V2.4375H13.8125V12.1875Z" fill="black" />
      <path d="M13.8125 12.1875H23.5625V13.8125H13.8125V23.5625H12.1875V13.8125H2.4375V12.1875H12.1875V2.4375H13.8125V12.1875Z" fill="black" fillOpacity="0.2" />
      <path d="M13.8125 12.1875H23.5625V13.8125H13.8125V23.5625H12.1875V13.8125H2.4375V12.1875H12.1875V2.4375H13.8125V12.1875Z" fill="black" fillOpacity="0.2" />
      <path d="M13.8125 12.1875H23.5625V13.8125H13.8125V23.5625H12.1875V13.8125H2.4375V12.1875H12.1875V2.4375H13.8125V12.1875Z" fill="black" fillOpacity="0.2" />
      <path d="M13.8125 12.1875H23.5625V13.8125H13.8125V23.5625H12.1875V13.8125H2.4375V12.1875H12.1875V2.4375H13.8125V12.1875Z" fill="black" fillOpacity="0.2" />
    </svg>
  )
}

// 删除图标（右上角小 X）
function CloseIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle opacity="0.5" cx="13" cy="13" r="13" fill="black" />
      <path
        d="M17.7007 7.50684C17.9217 7.32084 18.2524 7.332 18.4604 7.54004C18.6797 7.75962 18.6797 8.11537 18.4604 8.33496L13.5142 13.2812L18.4604 18.2275C18.6797 18.4471 18.6797 18.8029 18.4604 19.0225C18.2524 19.2305 17.9217 19.2417 17.7007 19.0557L17.6646 19.0225L12.7183 14.0762L7.77295 19.0225L7.73682 19.0557C7.51581 19.2419 7.18516 19.2306 6.97705 19.0225C6.75758 18.8028 6.75758 18.4472 6.97705 18.2275L11.9233 13.2812L6.97705 8.33496C6.75758 8.11533 6.75758 7.75967 6.97705 7.54004C7.18516 7.33193 7.51581 7.32064 7.73682 7.50684L7.77295 7.54004L12.7183 12.4854L17.6646 7.54004L17.7007 7.50684Z"
        fill="white"
      />
    </svg>
  )
}

interface StepTwoProps {
  onEnter?: () => void
  previewMode?: boolean
}

export default function StepTwo({ onEnter, previewMode }: StepTwoProps = {} as StepTwoProps) {
  const texts = useTexts()
 
  const [inputValues, setInputValues] = useState<string[]>(['', '', '', ''])
  // 上面“Project Name and Token Name”区域的刷新计数
  const [nameRefreshCount, setNameRefreshCount] = useState(0)
  // 下面“Logo and Promotional Materials”区域的刷新计数
  const [logoRefreshCount, setLogoRefreshCount] = useState(0)
  const [uploadImages, setUploadImages] = useState<(string | null)[]>(Array(7).fill(null))
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([])
  const [hoverBoxIndex, setHoverBoxIndex] = useState<number | null>(null)

  // 上半部分：刷新 4 个输入框，最多 5 次
  const handleRefreshInputs = () => {
    if (nameRefreshCount >= 5) return

    const localPresets: string[][] = [
      ['Hyperliquid Main Project', 'HYP', 'Hyper Token', 'HYP'],
      ['Sample Project Alpha', 'ALP', 'Alpha Token', 'ALP'],
      ['Demo Project Beta', 'BET', 'Beta Token', 'BET'],
      ['Governance Project', 'GOV', 'Governance Token', 'GOV'],
      ['Liquidity Project', 'LIQ', 'Liquidity Token', 'LIQ'],
    ]

    const preset = localPresets[nameRefreshCount % localPresets.length]
    setInputValues(preset)
    setNameRefreshCount((count) => count + 1)
  }

  // 下半部分：刷新 7 个 Logo/宣传素材盒子
  const handleRefreshLogos = () => {
    if (logoRefreshCount >= 5) return
    // 从 LogoPromotionalMaterials 目录中随机取 7 张图片填充 7 个盒子
    const presetImagePaths = [
      '/launchpad/LogoPromotionalMaterials/img/logo.png',
      '/launchpad/LogoPromotionalMaterials/img/Mask1.png',
      '/launchpad/LogoPromotionalMaterials/img/Mask2.png',
      '/launchpad/LogoPromotionalMaterials/img/Mask3.png',
      '/launchpad/LogoPromotionalMaterials/img/Mask4.png',
      '/launchpad/LogoPromotionalMaterials/img/Mask5.png',
      '/launchpad/LogoPromotionalMaterials/img/Mask6.png',
      '/launchpad/LogoPromotionalMaterials/img/Mask7.png',
      '/launchpad/LogoPromotionalMaterials/img/Mask8.png',
      '/launchpad/LogoPromotionalMaterials/img/Mask9.png',
      '/launchpad/LogoPromotionalMaterials/img/Mask10.png',
    ]

    const shuffled = [...presetImagePaths].sort(() => Math.random() - 0.5)
    const selected = shuffled.slice(0, 7)
    setUploadImages(selected)
    setLogoRefreshCount((count) => count + 1)
  }

  // 处理上传图片
  const handleBoxClick = (index: number) => {
    fileInputRefs.current[index]?.click()
  }

  const handleFileChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return
    if (!file.type.startsWith('image/')) return

    const reader = new FileReader()
    reader.onload = () => {
      const result = reader.result as string
      setUploadImages((prev) => {
        const next = [...prev]
        next[index] = result
        return next
      })
    }
    reader.readAsDataURL(file)
  }

  const handleRemoveImage = (index: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setUploadImages((prev) => {
      const next = [...prev]
      next[index] = null
      return next
    })
  }

  // 12张模板图片
  const templateImages = Array.from({ length: 12 }, (_, i) => `Mask${i + 1}.png`)

  return (
    <>
      {!previewMode && (
        <StepTitleBar
          title={<span suppressHydrationWarning>{texts.title}</span>}
          barColor="rgba(225, 5, 13, 0.75)"
          width={805}
          marginTop={5}
          marginBottom={82}
        />
      )}
      <div style={{marginBottom: px(20)}}  className='flex  items-start justify-between'>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(20),
                color: '#8C8C8C',
              }}
            >
              <span style={{ color: '#000000', marginRight: px(8) }} suppressHydrationWarning>
              {texts.projectNameSection.label}
                </span>
                <span suppressHydrationWarning dangerouslySetInnerHTML={{ __html: texts.projectNameSection.description }} />
            </div>

              <div
                style={{
                  width: px(100),
                  height: px(40),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(14),
                  color: '#ffffff',
                  backgroundColor: '#000000',
                  borderRadius: px(4),
                  padding: px(8),
                  cursor: nameRefreshCount >= 5 ? 'default' : 'pointer',
                  opacity: nameRefreshCount >= 5 ? 0.4 : 1,
                }}
                onClick={handleRefreshInputs}
              >
              <span suppressHydrationWarning>{texts.projectNameSection.refreshButton}</span>
              
              </div>
          </div>



          {/* 四个并排输入框 */}
          <div
            className="w-full"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: px(12),
              marginBottom: px(82),
            }}
          >
            {[
              texts.projectNameSection.inputPlaceholders.fullProjectName,
              texts.projectNameSection.inputPlaceholders.shortProjectName,
              texts.projectNameSection.inputPlaceholders.fullTokenName,
              texts.projectNameSection.inputPlaceholders.shortTokenName,
            ].map((placeholder, index) => (
              <input
                key={index}
                type="text"
                placeholder={placeholder}
                value={inputValues[index] || ''}
                onChange={(e) => {
                  const next = [...inputValues]
                  next[index] = e.target.value
                  setInputValues(next)
                }}
                style={{
                  width: '100%',
                  height: px(44),
                  paddingLeft: px(15),
                  paddingRight: px(15),
                  border: `0.5px solid #000000`,
                  borderRadius: px(4),
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontStyle: 'normal', // 对应设计稿里的 Book
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: inputValues[index] ? '#000000' : '#8C8C8C',
                }}
              />
            ))}
          </div>



          <div style={{marginBottom: px(20)}}  className='flex  items-start justify-between'>
            <div
              style={{
                fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                fontWeight: 300,
                fontSize: px(20),
                color: '#8C8C8C',
              }}
            >
              <span style={{ color: '#000000', marginRight: px(8) }} suppressHydrationWarning>
              {texts.logoSection.label}
                </span>

                <span suppressHydrationWarning dangerouslySetInnerHTML={{ __html: texts.logoSection.description }} />
            </div>

              <div
                style={{
                  width: px(100),
                  height: px(40),
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                  fontWeight: 300,
                  fontSize: px(14),
                  color: '#ffffff',
                  backgroundColor: '#000000',
                  borderRadius: px(4),
                  padding: px(8),
                  cursor: logoRefreshCount >= 5 ? 'default' : 'pointer',
                  opacity: logoRefreshCount >= 5 ? 0.4 : 1,
                }}
                onClick={handleRefreshLogos}
              >
              <span suppressHydrationWarning>{texts.logoSection.refreshButton}</span>
              
              </div>
          </div>


          {/* 7 个小盒子：3 个 1:1，2 个 1:2，2 个 2:1
              宽度由 grid 比例控制，高度由 aspect-ratio 自动计算 */}
          <div
            className="w-full"
            style={{
              display: 'grid',
              marginBottom: px(120),
              gridTemplateColumns: '1fr 1fr 1fr 0.5fr 0.5fr 2fr 2fr', // 宽度比例：1:1:1:0.5:0.5:2:2
              gap: px(14),
            }}
          >
            {[
              { ratio: '1 / 1', label: texts.logoSection.uploadLabels.logo },
              { ratio: '1 / 1', label: texts.logoSection.uploadLabels.image },
              { ratio: '1 / 1', label: texts.logoSection.uploadLabels.image },
              { ratio: '1 / 2', label: texts.logoSection.uploadLabels.image },
              { ratio: '1 / 2', label: texts.logoSection.uploadLabels.image },
              { ratio: '2 / 1', label: texts.logoSection.uploadLabels.image },
              { ratio: '2 / 1', label: texts.logoSection.uploadLabels.image },
            ].map((box, index) => (
              <div
                key={`upload-box-${index}`}
                style={{
                  width: '100%',
                  aspectRatio: box.ratio,
                  border: '0.5px solid #000000',
                  borderRadius: px(4),
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: px(8),
                  cursor: 'pointer',
                  overflow: 'hidden',
                  position: 'relative',
                }}
                onClick={() => handleBoxClick(index)}
                onMouseEnter={() => setHoverBoxIndex(index)}
                onMouseLeave={() => setHoverBoxIndex((prev) => (prev === index ? null : prev))}
              >
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: 'none' }}
                  ref={(el) => {
                    fileInputRefs.current[index] = el
                  }}
                  onChange={(e) => handleFileChange(index, e)}
                />

                {uploadImages[index] ? (
                  <>
                    <img
                      src={uploadImages[index] as string}
                      alt={box.label}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    {hoverBoxIndex === index && (
                      <button
                        type="button"
                        onClick={(e) => handleRemoveImage(index, e)}
                        style={{
                          position: 'absolute',
                          top: px(6),
                          right: px(2),
                          border: 'none',
                          background: 'transparent',
                          padding: 0,
                          cursor: 'pointer',
                        }}
                      >
                        <CloseIcon />
                      </button>
                    )}
                  </>
                ) : (
                  <>
                    <PlusIcon />
                    <span
                      style={{
                        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                        fontWeight: 300,
                        fontStyle: 'normal', // Book
                        fontSize: px(16),
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#8C8C8C',
                      }}
                    >
                      {box.label}
                    </span>
                  </>
                )}
              </div>
            ))}
          </div>
      {/* 底部 Next 按钮 */}
      {!previewMode && (
        <StepNextButton onClick={onEnter} label={texts.nextButton} marginTop={0} />
      )}
      </>
  )
}

