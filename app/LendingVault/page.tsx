import { redirect } from 'next/navigation'
import { buildLendingVaultPath } from '@/config/app'

export default function LendingVaultIndexPage() {
  redirect(buildLendingVaultPath())
  return null
}
