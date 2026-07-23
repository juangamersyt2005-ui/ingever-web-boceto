function FeatureCard({ icon: Icon, title, description }) {
  return (
    <article className="h-full rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#F5C518] hover:shadow-xl sm:p-8">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5C518]/15 sm:mb-6">
        <Icon className="text-3xl text-[#C99E00] sm:text-4xl" />
      </div>

      <h3 className="text-xl font-bold text-[#1A1A1A] sm:text-2xl">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7">
        {description}
      </p>
    </article>
  );
}

export default FeatureCard;
