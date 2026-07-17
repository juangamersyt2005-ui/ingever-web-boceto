function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
    primary:
      "bg-[#F5C518] text-black hover:bg-[#e4b400]",

    secondary:
      "border border-[#F5C518] text-[#F5C518] hover:bg-[#F5C518] hover:text-black",

    dark:
      "bg-[#1A1A1A] text-white hover:bg-black",
  };

  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-7
        py-3
        font-semibold
        transition-all
        duration-300
        hover:-translate-y-1
        hover:scale-105
        active:scale-95
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;