import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '마블러스',
  description: '엔터테인먼트의 새로운 지평을 여는 크리에이터 팀',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}