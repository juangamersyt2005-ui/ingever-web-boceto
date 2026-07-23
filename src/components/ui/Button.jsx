import { Link } from "react-router-dom";

const variants = {
  primary:
    "border border-[#F5C518] bg-[#F5C518] text-[#1A1A1A] shadow-lg shadow-[#F5C518]/20 hover:-translate-y-0.5 hover:bg-[#e4b400] hover:shadow-xl",
  outline:
    "border border-[#1A1A1A]/20 bg-white text-[#1A1A1A] hover:-translate-y-0.5 hover:border-[#F5C518] hover:bg-[#F5C518]",
  dark:
    "border border-[#1A1A1A] bg-[#1A1A1A] text-white hover:-translate-y-0.5 hover:bg-black",
  light:
    "border border-white/50 bg-transparent text-white hover:-translate-y-0.5 hover:bg-white hover:text-[#1A1A1A]",
};

const sizes = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-11 px-5 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base",
  lg: "min-h-12 px-6 py-3 text-base sm:px-7 sm:py-3.5 sm:text-lg",
};

function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  type = "button",
  className = "",
  disabled = false,
  loading = false,
  loadingLabel = "Cargando...",
  ...props
}) {
  const isDisabled = disabled || loading;
  const content = loading ? loadingLabel : children;
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F5C518]/35 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant] ?? variants.primary,
    sizes[size] ?? sizes.md,
    className,
  ].join(" ");

  if (to) {
    return (
      <Link to={to} className={classes} aria-busy={loading || undefined} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} aria-busy={loading || undefined} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...props}
    >
      {content}
    </button>
  );
}

export default Button;
