function ProjectCard({ image, title, location }) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C99E00] sm:text-sm">
          {location}
        </p>

        <h3 className="mt-2 text-xl font-bold text-[#1A1A1A] sm:text-2xl">{title}</h3>
      </div>
    </article>
  );
}

export default ProjectCard;
