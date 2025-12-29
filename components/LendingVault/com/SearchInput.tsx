'use client'

import { px } from '@/utils/pxToRem'

interface SearchInputProps {
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
}

export default function SearchInput({ 
  placeholder = 'Search',
  value,
  onChange
}: SearchInputProps) {
  return (
    <div className="relative flex items-center flex-1">
      <div
        className="flex items-center"
        style={{
          width: '100%',
          height: px(44),
          paddingLeft: px(12),
          paddingRight: px(12),
          border: `1px solid #000000`,
          borderRadius: px(4),
          backgroundColor: '#FFFFFF',
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: px(8), flexShrink: 0 }}
        >
          <path d="M12.6818 6.99964C12.6818 4.06248 10.3008 1.68146 7.36366 1.68146C4.42653 1.6815 2.04548 4.06253 2.04548 6.99964C2.04548 9.93676 4.42653 12.3178 7.36366 12.3178V13.136C3.97467 13.136 1.22729 10.3886 1.22729 6.99964C1.22729 3.61065 3.97467 0.86332 7.36366 0.863281C10.7527 0.863281 13.5 3.61062 13.5 6.99964C13.5 10.3887 10.7527 13.136 7.36366 13.136V12.3178C10.3008 12.3178 12.6818 9.93681 12.6818 6.99964Z" fill="black"/>
          <path d="M17.0268 15.6354L16.5186 16.277L11.25 12.2744L11.7582 11.6328L17.0268 15.6354Z" fill="black"/>
        </svg>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
            fontSize: px(14),
            color: '#000000',
            backgroundColor: 'transparent',
          }}
          className="placeholder:text-gray-400"
        />
      </div>
    </div>
  )
}

