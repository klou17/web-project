import type { LucideProps } from 'lucide-react'
import * as LucideIcons from 'lucide-react'

export const Icon = ({ name, ...props }: { name: keyof typeof LucideIcons } & LucideProps) => {
  const LucideIcon = LucideIcons[name] as React.FC<LucideProps>

  if (!LucideIcon) return <div />

  return <LucideIcon {...props} />
}
