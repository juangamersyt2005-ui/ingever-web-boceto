function ClientLogoCard({ logo, name }) {
  return (
    <div className="flex items-center justify-center rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <img
        src={logo}
        alt={name}
        className="max-h-16 w-auto object-contain grayscale transition duration-300 hover:grayscale-0"
      />
    </div>
  );
}

export default ClientLogoCard;