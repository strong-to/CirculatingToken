'use client'

import { useState } from 'react'
import Image from 'next/image'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    'Project Hub',
    'Launchpad',
    'Token Marketplace',
    'Lending Vault',
    'Conference Room',
  ]

  return (
    <header className="w-full h-full bg-background-primary flex flex-col border-b border-[#251814]">
      <div className="container-responsive flex-1">
        <div className="h-title flex items-center">
          {/* Logo */}
          <Logo />

          {/* Navigation - 桌面端显示，左右间距 56px，中间均分 */}
          <nav className="hidden md:flex items-center justify-between flex-1 whitespace-nowrap" style={{ marginLeft: '56px', marginRight: '146px' }}>
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-f20 text-text-primary hover:text-text-secondary transition-colors whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* 右侧图标组 - 间距 56px */}
          <div className="flex items-center gap-[56px]">
            {/* 搜索图标 */}
            <button
              className="flex items-center justify-center hover:opacity-70 transition-opacity"
              aria-label="Search"
            >
              <Image
                src="/images/title/search.png"
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
              <Image
                src="/images/title/language.png"
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
              <Image
                src="/images/title/Group.png"
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
              <Image
                src="/images/title/user.png"
                alt="User"
                width={24}
                height={24}
                priority
              />
            </button>
          </div>
        </div>
      </div>

      {/* 分隔线 - 颜色 #251814 */}
      <div className="w-full h-px bg-[#251814] flex-shrink-0" />

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="md:hidden bg-background-primary border-t border-gray-200">
          <nav className="container-responsive py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-title text-text-primary hover:text-text-secondary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

