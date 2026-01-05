'use client'

import { px } from '@/utils/pxToRem'

interface ImagePreviewModalProps {
  imageSrc: string | null
  onClose: () => void
}

export default function ImagePreviewModal({ imageSrc, onClose }: ImagePreviewModalProps) {
  if (!imageSrc) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt="Preview"
          style={{
            maxWidth: '100%',
            maxHeight: '90vh',
            objectFit: 'contain',
          }}
        />
        {/* 关闭按钮 */}
        <button
          type="button"
          onClick={onClose}
          style={{
            position: 'absolute',
            top: px(20),
            right: px(20),
            width: px(40),
            height: px(40),
            border: 'none',
            background: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

