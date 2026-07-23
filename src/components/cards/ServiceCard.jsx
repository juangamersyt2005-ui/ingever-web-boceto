function ServiceCard({ title, description, icon: Icon }) {
  return (
    <article className="h-full rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C518] hover:shadow-xl sm:p-8">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-[#F5C518]/15 sm:mb-6 sm:h-16 sm:w-16">
        <Icon className="text-2xl text-[#C99E00] sm:text-3xl" />
      </div>

      <h3 className="text-xl font-bold text-[#1A1A1A] sm:text-2xl">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7">
        {description}
      </p>
    </article>
  );
}

export default ServiceCard;
