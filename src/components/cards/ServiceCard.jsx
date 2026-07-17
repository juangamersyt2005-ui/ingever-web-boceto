function ServiceCard({ title, description }) {
  return (
    <div className="rounded-xl border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="w-14 h-14 rounded-lg bg-[#F5C518]/20 flex items-center justify-center mb-6">
        <div className="w-7 h-7 rounded bg-[#F5C518]"></div>
      </div>

      <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-7">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard;