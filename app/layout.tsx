export const metadata = {
  title: 'Team 2658 - E-motion',
  description: 'About FRC Team 2658',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}