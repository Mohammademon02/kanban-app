function Container({ children, className = "" }) {
  return (
    <div className={`xl:max-w-[1280px] 2xl:max-w-[1480px] mx-auto px-4 md:px-5 ${className}`}>
      {children}
    </div>
  )
}

export default Container
