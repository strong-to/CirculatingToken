'use client'

import { px } from '@/utils/pxToRem'

interface ProposalContentTextareaProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function ProposalContentTextarea({
  value,
  onChange,
  placeholder = 'Draft or upload your proposal content here.'
}: ProposalContentTextareaProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        width: '100%',
        minHeight: px(170),
        padding: px(16),
        paddingBottom: px(50),
        border: '1px solid #e0e0e0',
        borderRadius: px(4),
        fontFamily: 'PingFang SC',
        fontWeight: 400,
        fontStyle: 'normal',
        fontSize: px(20),
        lineHeight: '140%',
        letterSpacing: '0%',
        color: '#000000',
        resize: 'vertical'
      }}
    />
  )
}

