function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-all duration-300";

  const variants = {
    primary: "bg-[#F5C518] text-black hover:brightness-95",

    secondary:
      "border-2 border-white text-white hover:bg-white hover:text-black",

    dark: "bg-[#1A1A1A] text-white hover:bg-black",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}

export default Button;