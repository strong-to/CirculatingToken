export function formatNumberWithThousands(value: string): string {
  if (!value) return ''
  // 去掉已有的逗号
  const numeric = value.replace(/,/g, '')
  if (numeric.trim() === '' || isNaN(Number(numeric))) {
    return value
  }
  const num = Number(numeric)
  return num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}


