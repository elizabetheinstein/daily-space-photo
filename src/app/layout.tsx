import './globals.css'

export const metadata = {
  title: 'Daily Space Photo',
  description: 'A website displaying the Astronomy Photo of the Day',
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
