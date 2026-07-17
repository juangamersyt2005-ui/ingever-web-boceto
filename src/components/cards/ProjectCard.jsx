function ProjectCard({ image, title, location }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <p className="text-sm uppercase tracking-widest text-[#F5C518] font-semibold">
          {location}
        </p>

        <h3 className="mt-2 text-2xl font-bold text-[#1A1A1A]">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default ProjectCard;