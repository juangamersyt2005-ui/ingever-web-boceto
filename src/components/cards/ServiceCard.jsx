function ServiceCard({ title, description, icon: Icon }) {
    return (
        <div className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#F5C518]">
           <div className="w-16 h-16 rounded-xl bg-[#F5C518]/15 flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[#F5C518]">
                <Icon className="text-3xl text-[#F5C518] transition-colors duration-500 group-hover:text-white" />
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