function ClientLogoCard({ logo, name }) {
    return (
        <div className="group flex h-72 w-full items-center justify-center rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-[1.02] hover:border-[#F5C518] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
            <img
                src={logo}
                alt={name}
                className="max-h-40 w-auto object-contain grayscale opacity-70 transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 group-hover:opacity-100"
            />

        </div>
    );
}

export default ClientLogoCard;