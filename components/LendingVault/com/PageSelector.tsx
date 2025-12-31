'use client'

import { px } from "@/utils/pxToRem"
import { useState, useRef, useEffect } from "react"

interface PageSelectorProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function PageSelector({ currentPage, totalPages, onPageChange }: PageSelectorProps) {
  const [isPageDropdownOpen, setIsPageDropdownOpen] = useState(false)
  const pageDropdownRef = useRef<HTMLDivElement>(null)

  // 点击外部关闭下拉框
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pageDropdownRef.current && !pageDropdownRef.current.contains(event.target as Node)) {
        setIsPageDropdownOpen(false)
      }
    }

    if (isPageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isPageDropdownOpen])

  return (
    <div className="flex items-center justify-end" style={{ marginTop: px(20), position: 'relative' }} ref={pageDropdownRef}>
      <div 
        onClick={() => setIsPageDropdownOpen(!isPageDropdownOpen)}
        style={{
          width: px(112), 
          height: px(28), 
          border: '0.5px solid #000000', 
          borderRadius: px(4),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: px(8),
          paddingRight: px(8),
          cursor: 'pointer',
          backgroundColor: '#ffffff'
        }}
      >
        <span style={{
          fontFamily: 'PingFang SC',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: px(14),
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#666666'
        }}>
          <span style={{ color: '#333333' }}>{currentPage}</span>
          <span style={{ color: '#999999' }}>/{totalPages}</span>
        </span>
        <svg 
          width="12" 
          height="12" 
          viewBox="0 0 12 12" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style={{ flexShrink: 0, transform: isPageDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
        >
          <path 
            d="M3 4.5L6 7.5L9 4.5L3 4.5Z" 
            fill="#909399"
          />
        </svg>
      </div>
      
      {isPageDropdownOpen && (
        <div 
          style={{
            position: 'absolute',
            bottom: px(32),
            right: 0,
            width: px(112),
            maxHeight: px(200),
            overflowY: 'auto',
            border: '0.5px solid #000000',
            borderRadius: px(4),
            backgroundColor: '#ffffff',
            zIndex: 1000,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <div
              key={page}
              onClick={() => {
                onPageChange(page)
                setIsPageDropdownOpen(false)
              }}
              style={{
                padding: px(8),
                cursor: 'pointer',
                fontFamily: 'PingFang SC',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: px(14),
                lineHeight: '100%',
                letterSpacing: '0%',
                color: currentPage === page ? '#000000' : '#666666',
                backgroundColor: currentPage === page ? '#f5f5f5' : 'transparent',
                borderBottom: page < totalPages ? '0.5px solid #e0e0e0' : 'none'
              }}
              onMouseEnter={(e) => {
                if (currentPage !== page) {
                  e.currentTarget.style.backgroundColor = '#f9f9f9'
                }
              }}
              onMouseLeave={(e) => {
                if (currentPage !== page) {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }
              }}
            >
              {page}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

