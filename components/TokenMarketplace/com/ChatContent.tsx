'use client'

import { px } from '@/utils/pxToRem'

export default function ChatContent() {
  return (
    <div style={{ padding: px(40) }}>
      {/* Chat 视图的内容区域 - 待实现 */}
      <div style={{
        width: '100%',
        minHeight: px(400),
        backgroundColor: '#f5f5f5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"ITC Avant Garde Gothic Pro", sans-serif',
        fontSize: px(16),
        color: '#999',
        borderRadius: px(4)
      }}>
        Chat Content
      </div>
    </div>
  )
}

