import React from "react"
export default function Layout({ children }) {
  return (
    <>
    <header>
        <a href="/">Portfolio</a>&nbsp;&nbsp;&nbsp;
        <a href="/blog">Visit the Blog Page</a>&nbsp;&nbsp;&nbsp;
        <a href="/logo">Look at my Logo</a>
    </header>
    <div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
      {children}
    </div>

    </>
  )
}