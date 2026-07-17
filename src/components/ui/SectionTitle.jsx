function SectionTitle({ subtitle, title, align = "center" }) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {subtitle && (
        <p className="text-[#F5C518] font-semibold uppercase tracking-widest mb-2">
          {subtitle}
        </p>
      )}

      <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A1A] leading-tight">
        {title}
      </h2>
    </div>
  );
}

export default SectionTitle;