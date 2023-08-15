export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const header = (
    <header>
      <div>
        <h1>David's Blog</h1>
        <p>🤟 Welcome to my blog. 💻</p>
        <br />
      </div>
    </header>    
  )

  const footer = (
    <footer>
      <div>
        <h3>Made by David Mhlabane</h3>
      </div>
    </footer>
  )

  return (
    <html>
      <head />
      <body>
        {header}
        {children}
        {footer}
      </body>
    </html>
  )
}
