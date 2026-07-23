function ClientLogoCard({ logo, name }) {
  return (
    <article className="group flex h-40 w-full items-center justify-center rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C518] hover:shadow-lg sm:h-48 sm:p-8 lg:h-52">
      <img
        src={logo}
        alt={name}
        className="max-h-full w-auto max-w-full object-contain grayscale opacity-75 transition-all duration-300 group-hover:scale-105 group-hover:grayscale-0 group-hover:opacity-100"
      />
    </article>
  );
}

export default ClientLogoCard;
