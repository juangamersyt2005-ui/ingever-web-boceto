function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="group rounded-2xl bg-white border border-gray-200 p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#F5C518] cursor-pointer">

      <div className="mx-auto mb-6 flex h-18 w-18 items-center justify-center rounded-full bg-[#F5C518]/15 transition-all duration-500 group-hover:bg-[#F5C518]">

        <Icon className="text-4xl text-[#F5C518] transition-all duration-500 group-hover:text-white group-hover:scale-110" />

      </div>

      <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
        {title}
      </h3>

      <p className="leading-7 text-gray-600">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;