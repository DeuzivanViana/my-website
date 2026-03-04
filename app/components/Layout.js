export const Layout = ({ children, className }) => {
  return <div className={ className }>
    <main>
      { children }
    </main>
  </div>
} 