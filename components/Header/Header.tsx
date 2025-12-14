'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import ImageWithSkeleton from '@/components/common/ImageWithSkeleton'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { px } from '@/utils/pxToRem'
import { images } from './resources'
import { preloadPageImages } from '@/utils/imagePreloader'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    'Project Hub',
    'Launchpad',
    'Token Marketplace',
    'Lending Vault',
    'Conference Room',
    'Mortgage  market'
  ]

  // 预加载指定页面的图片（hover 时触发）
  const handleNavHover = useCallback((href: string) => {
    if (href && href !== '#' && href !== pathname) {
      // 使用低优先级预加载，避免影响当前页面性能
      preloadPageImages(href, 'normal')
    }
  }, [pathname])

  return (
    <header className="w-full h-full bg-background-primary flex flex-col border-b border-[#B5B5B5]" >
      <div className="flex-1" style={{ height: px(72) , paddingLeft: px(70) , paddingRight: px(70) }}>
        <div className="h-title flex items-center " style={{ height: px(72) }}>
          {/* Logo */}
          <Image
            src="/header/img/logo.png"
            alt="Logo"
            width={60}
            height={60}
            priority
            style={{
              width: px(60),
              height: px(60),
            }}
          />

          {/* Navigation - 桌面端显示，左右间距 56px，中间均分 */}
          <nav className="hidden md:flex items-center justify-between flex-1 whitespace-nowrap" style={{ marginLeft: '3.5rem', marginRight: '9.125rem' }}> {/* 56px, 146px */}
            {navItems.map((item) => {
              let href = '#'
              if (item === 'Project Hub') {
                href = '/'
              } else if (item === 'Launchpad') {
                href = '/Launchpad'
              } else if (item === 'Token Marketplace') {
                href = '/TokenMarketplace'
              } else if (item === 'Lending Vault') {
                href = '/LendingVault'
              } else if (item === 'Conference Room') {
                href = '/ConferenceRoom'
              } else if (item === 'Mortgage  market') {
                href = '/MortgageMarket'
              }
              
              const isActive = (item === 'Project Hub' && pathname === '/') || 
                               (item === 'Launchpad' && pathname === '/Launchpad') ||
                               (item === 'Token Marketplace' && pathname === '/TokenMarketplace') ||
                               (item === 'Lending Vault' && pathname === '/LendingVault') ||
                               (item === 'Conference Room' && pathname === '/ConferenceRoom') ||
                               (item === 'Mortgage  market' && pathname === '/MortgageMarket')
              
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
                  onMouseEnter={() => handleNavHover(href)}
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
              <ImageWithSkeleton
                src={images.search}
                alt="Search"
                width={24}
                height={24}
                priority
              />
            </button>

            {/* 语言图标 */}
            <button
              className="flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="Language"
            >
              <ImageWithSkeleton
                src={images.language}
                alt="Language"
                width={24}
                height={24}
                priority
              />
            </button>

            {/* Group 图标 - 菜单 */}
            <button
              className="flex items-center justify-center hover:opacity-70 transition-opacity"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <ImageWithSkeleton
                src={images.menu}
                alt="Menu"
                width={24}
                height={24}
                priority
              />
            </button>

            {/* 用户图标 */}
            <button
              className="flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="User"
            >
              <ImageWithSkeleton
                src={images.user}
                alt="User"
                width={24}
                height={24}
                priority
              />
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
                href = '/'
              } else if (item === 'Launchpad') {
                href = '/Launchpad'
              } else if (item === 'Token Marketplace') {
                href = '/TokenMarketplace'
              } else if (item === 'Lending Vault') {
                href = '/LendingVault'
              } else if (item === 'Conference Room') {
                href = '/ConferenceRoom'
              } else if (item === 'Mortgage  market') {
                href = '/MortgageMarket'
              }
              
              const isActive = (item === 'Project Hub' && pathname === '/') || 
                               (item === 'Launchpad' && pathname === '/Launchpad') ||
                               (item === 'Token Marketplace' && pathname === '/TokenMarketplace') ||
                               (item === 'Lending Vault' && pathname === '/LendingVault') ||
                               (item === 'Conference Room' && pathname === '/ConferenceRoom') ||
                               (item === 'Mortgage  market' && pathname === '/MortgageMarket')
              
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
                  onMouseEnter={() => handleNavHover(href)}
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

