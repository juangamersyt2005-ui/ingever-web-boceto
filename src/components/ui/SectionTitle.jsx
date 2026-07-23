function SectionTitle({ subtitle, title, align = "center", className = "" }) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignment} ${className}`}>
      {subtitle && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#C99E00] sm:text-sm">
          {subtitle}
        </p>
      )}

      <h2 className="text-3xl font-bold leading-[1.12] text-[#1A1A1A] sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;
