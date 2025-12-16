'use client'

import { px } from '@/utils/pxToRem'

export interface Column {
  key: string
  label: string
  width?: number | string // 数字表示 px，'flex' 表示 flex: 1
}

export interface DataTableProps {
  columns: Column[]
  data: Record<string, any>[]
  rowHeight?: number
  rowGap?: number
  cellPadding?: number
}

export default function DataTable({
  columns,
  data,
  rowHeight = 70,
  rowGap = 20,
  cellPadding = 16,
}: DataTableProps) {
  return (
    <div className="w-full">
      {/* 表头 */}
      <div
        className="flex"
        style={{
          marginBottom: px(rowGap),
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
          backgroundColor: '#ffffff',
          borderRadius: px(4),
        }}
      >
        {columns.map((column, index) => (
          <div
            key={column.key}
            style={{
              width: column.width === 'flex' ? undefined : typeof column.width === 'number' ? px(column.width) : column.width,
              flex: column.width === 'flex' ? 1 : undefined,
              height: px(rowHeight),
              padding: px(cellPadding),
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontFamily: 'PingFang SC',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: px(16),
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#000000',
              }}
            >
              {column.label}
            </span>
          </div>
        ))}
      </div>

      {/* 表格数据行 */}
      {data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex"
          style={{
            marginBottom: rowIndex < data.length - 1 ? px(rowGap) : 0,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08)',
            backgroundColor: '#ffffff',
            borderRadius: px(4),
          }}
        >
          {columns.map((column) => (
            <div
              key={column.key}
              style={{
                width: column.width === 'flex' ? undefined : typeof column.width === 'number' ? px(column.width) : column.width,
                flex: column.width === 'flex' ? 1 : undefined,
                height: px(rowHeight),
                padding: px(cellPadding),
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: 'PingFang SC',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: px(16),
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  color: '#000000',
                }}
              >
                {row[column.key] ?? ''}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

