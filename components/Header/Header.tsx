'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { px } from '@/utils/pxToRem'
import SearchIcon from './icons/SearchIcon'
import LanguageIcon from './icons/LanguageIcon'
import SunIcon from './icons/SunIcon'
import UserIcon from './icons/UserIcon'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('English')
  const languageDropdownRef = useRef<HTMLDivElement>(null)
  const aboutDropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const languages = [
    'English',
    'Spanish',
    'Arabic',
    'Chinese',
    'French',
    'Russian',
    'German',
    'Japanese',
    'Korean',
    'Hindi'
  ]

  // 点击外部关闭语言下拉框
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false)
      }
    }

    if (isLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isLanguageDropdownOpen])

  // 点击外部关闭 About 下拉框
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
        setIsAboutDropdownOpen(false)
      }
    }

    if (isAboutDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isAboutDropdownOpen])

  const navItems = [
    'Project Hub',
    'Launchpad',
    'Conference Room',
    'Token Marketplace',
    // 'Lending Vault',
    // 'Project Construction',
    'Mortgage  market',
    'About',
  ]

  const aboutSubNavItems = [
    { key: 'deep-blue-covenant', label: 'Deep Blue Covenant' }, // 深蓝盟约
    { key: 'the-creators', label: 'The Creators' }, // The创建者
    { key: 'user-guide', label: 'User Guide' }, // 用户指南
    { key: 'related-information', label: 'Related Information' }, // 关联信息
    { key: 'technical-documents', label: 'Technical Documents' }, // 技术文件
    { key: 'community-events', label: 'Community Events' }, // 社区活动
    { key: 'related-news', label: 'Related News' }, // 相关新闻
  ]


  return (
    <header className="w-full h-full bg-background-primary flex flex-col " >
      <div className="flex-1" style={{ height: px(72) , paddingLeft: px(70) , paddingRight: px(70) }}>
        <div className="h-title flex items-center " style={{ height: px(72) }}>
          {/* Logo */}
          <Link href="/">
            <Image
              src="/header/img/logo.png"
              alt="Logo"
              width={60}
              height={60}
              priority
              style={{
                width: px(60),
                height: px(60),
                cursor: 'pointer',
              }}
            />
          </Link>

          {/* Navigation - 桌面端显示，左右间距 56px，中间均分 */}
          <nav className="hidden md:flex items-center justify-between flex-1 whitespace-nowrap" style={{ marginLeft: '3.5rem', marginRight: '9.125rem' }}> {/* 56px, 146px */}
            {navItems.map((item) => {
              let href = '#'
              if (item === 'Project Hub') {
                href = '/ProjectHub'
              } else if (item === 'Launchpad') {
                href = '/Launchpad'
              } else if (item === 'Token Marketplace') {
                href = '/Favorites'

              } else if (item === 'Lending Vault') {
                href = '/LendingVault'
              } else if (item === 'Conference Room') {
                href = '/ConferenceRoom'
              } else if (item === 'Mortgage  market') {
                href = '/MortgageMarket'
              } else if (item === 'Project Construction') {
                href = '/ProjectConstruction'
              }
              
              // 处理 trailing slash，确保 pathname 匹配
              const normalizedPathname = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
              
              const isActive = (item === 'Project Hub' && (normalizedPathname === '/ProjectHub' || normalizedPathname.startsWith('/ProjectHub'))) || 
                               (item === 'Launchpad' && (normalizedPathname === '/Launchpad' || normalizedPathname.startsWith('/Launchpad'))) ||
                               (item === 'Token Marketplace' && (normalizedPathname === '/Favorites' || normalizedPathname.startsWith('/Favorites'))) ||
                               (item === 'Lending Vault' && (normalizedPathname === '/LendingVault' || normalizedPathname.startsWith('/LendingVault'))) ||
                               (item === 'Conference Room' && (normalizedPathname === '/ConferenceRoom' || normalizedPathname.startsWith('/ConferenceRoom'))) ||
                               (item === 'Mortgage  market' && (normalizedPathname === '/MortgageMarket' || normalizedPathname.startsWith('/MortgageMarket'))) ||
                               (item === 'Project Construction' && (normalizedPathname === '/ProjectConstruction' || normalizedPathname.startsWith('/ProjectConstruction')))

              // About 使用下拉菜单，不直接导航
              if (item === 'About') {
                return (
                  <div
                    key="About"
                    className="relative"
                    ref={aboutDropdownRef}
                  >
                    <button
                      type="button"
                      onClick={() => setIsAboutDropdownOpen((prev) => !prev)}
                      className="hover:opacity-70 transition-colors whitespace-nowrap cursor-pointer"
                      style={{
                        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                        fontWeight: 300,
                        fontStyle: 'normal',
                        fontSize: px(20),
                        lineHeight: '100%',
                        letterSpacing: '0%',
                        color: '#888888',
                        display: 'flex',
                        alignItems: 'center',
                        gap: px(6),
                      }}
                    >
                      About
                      
                    </button>

                    {isAboutDropdownOpen && (
                      <div
                        className="absolute left-0 mt-2 bg-white rounded z-50"
                        style={{
                          minWidth: px(180),
                          padding: px(8),
                          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                        }}
                      >
                        {aboutSubNavItems.map((sub) => (
                          <div
                            key={sub.key}
                            onClick={() => setIsAboutDropdownOpen(false)}
                            className="cursor-pointer hover:bg-gray-100 transition-colors"
                            style={{
                              padding: px(8),
                              fontSize: px(16),
                              fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                              fontWeight: 300,
                              color: '#333333',
                              whiteSpace: 'nowrap',
                            }}
                          >
                            {sub.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }

              if (href === '#') {
                return (
                  <a
                    key={item}
                    href={href}
                    style={{
                      fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                      fontWeight: 300,
                      fontStyle: 'normal',
                      fontSize: px(20),
                      lineHeight: '100%',
                      letterSpacing: '0%',
                      color: '#888888'
                    }}
                    className="hover:opacity-70 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {item}
                  </a>
                )
              }
              
              return (
                <Link
                  key={item}
                  href={href}
                  onClick={(e) => {
                    if (isActive) {
                      e.preventDefault()
                    }
                  }}
                  style={{
                    fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
                    fontWeight: 300,
                    fontStyle: 'normal',
                    fontSize: px(20),
                    lineHeight: '100%',
                    letterSpacing: '0%',
                    color: isActive ? '#000000' : '#888888'
                  }}
                  className={`hover:opacity-70 transition-colors whitespace-nowrap ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  {item}
                </Link>
              )
            })}
          </nav>

          {/* 右侧图标组 - 间距 56px */}
          <div className="flex items-center" style={{ gap: '3.5rem' }}> {/* 56px */}
            {/* 搜索图标 */}
            <button
              className="flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="Search"
            >
              <SearchIcon />
            </button>

            {/* 语言图标 */}
            <div className="relative" ref={languageDropdownRef}>
              <button
                className="flex items-center justify-center hover:opacity-70 transition-opacity"
                aria-label="Language"
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              >
                <LanguageIcon />
              </button>
              
              {/* 语言下拉框 */}
              {isLanguageDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 bg-white rounded z-50"
                  style={{
                    minWidth: px(120),
                    padding: px(8),
                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  {languages.map((language) => (
                    <div
                      key={language}
                      onClick={() => {
                        setSelectedLanguage(language)
                        setIsLanguageDropdownOpen(false)
                      }}
                      className="cursor-pointer hover:bg-gray-100 transition-colors"
                      style={{
                        padding: px(8),
                        fontSize: px(16),
                        fontFamily: 'PingFang SC',
                        color: selectedLanguage === language ? '#000000' : '#666666',
                        fontWeight: selectedLanguage === language ? 500 : 400,
                      }}
                    >
                      {language}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 太阳图标 - 深色/浅色模式切换 */}
            <button
              className="flex items-center justify-center hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Theme Toggle"
            >
              <SunIcon />
            </button>

            {/* 用户图标 */}
            <button
              className="flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="User"
            >
              <UserIcon />
            </button>
          </div>
        </div>
      </div>

      {/* 分隔线 - 颜色 #B5B5B5 */}
      <div className="w-full h-px flex-shrink-0" />

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-background-primary border-t border-gray-200">
          <nav className="container-responsive py-4 flex flex-col gap-4">
            {navItems.map((item) => {
              let href = '#'
              if (item === 'Project Hub') {
                href = '/ProjectHub'
              } else if (item === 'Launchpad') {
                href = '/Launchpad'
              } else if (item === 'Token Marketplace') {
                // href = '/TokenMarketplace'
              } else if (item === 'Lending Vault') {
                href = '/LendingVault'
              } else if (item === 'Conference Room') {
                href = '/ConferenceRoom'
              } else if (item === 'Mortgage  market') {
                href = '/MortgageMarket'
              } else if (item === 'Project Construction') {
                href = '/ProjectConstruction'
              }
              
              const isActive = (item === 'Project Hub' && pathname === '/ProjectHub') || 
                               (item === 'Launchpad' && pathname === '/Launchpad') ||
                               (item === 'Token Marketplace' && pathname === '/TokenMarketplace') ||
                               (item === 'Lending Vault' && pathname === '/LendingVault') ||
                               (item === 'Conference Room' && pathname === '/ConferenceRoom') ||
                               (item === 'Mortgage  market' && pathname === '/MortgageMarket') ||
                               (item === 'Project Construction' && pathname === '/ProjectConstruction')

              if (item === 'About') {
                // 移动端 About 展开子导航
                return (
                  <div key="About" className="flex flex-col gap-2">
                    <div
                      className="text-title cursor-default"
                      style={{ color: '#888888' }}
                    >
                      About
                    </div>
                    <div className="flex flex-col gap-1 pl-4">
                      {aboutSubNavItems.map((sub) => (
                        <button
                          key={sub.key}
                          type="button"
                          className="text-left text-title hover:opacity-70 transition-colors"
                          style={{ color: '#888888', fontSize: px(16) }}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )
              }

              if (href === '#') {
                return (
                  <a
                    key={item}
                    href={href}
                    style={{
                      color: '#888888'
                    }}
                    className="text-title hover:opacity-70 transition-colors cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              }
              
              return (
                <Link
                  key={item}
                  href={href}
                  onClick={(e) => {
                    if (isActive) {
                      e.preventDefault()
                    } else {
                      setIsMenuOpen(false)
                    }
                  }}
                  style={{
                    color: isActive ? '#000000' : '#888888'
                  }}
                  className={`text-title hover:opacity-70 transition-colors ${isActive ? 'cursor-default' : 'cursor-pointer'}`}
                >
                  {item}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}

