function Container({ children }) {
  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      {children}
    </div>
  );
}

export default Container;