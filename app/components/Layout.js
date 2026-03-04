export const Layout = ({ children, className }) => {
  return (
    <div className={className}>
      <main className="flex flex-col items-center justify-center w-full h-full">
        {children}
      </main>
    </div>
  );
}