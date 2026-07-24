import { FaFilePdf } from "react-icons/fa";
import Button from "../ui/Button";

function ProductCard({ product }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-[4/3] overflow-hidden bg-[#F6F7F8] p-5 sm:p-7">
        <img
          src={product.image}
          alt={product.imageAlt}
          loading="lazy"
          className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#C99E00]">
          {product.category}
        </p>

        <h3 className="mt-3 text-xl font-bold text-[#1A1A1A] sm:text-2xl">
          {product.name}
        </h3>

        <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
          {product.description}
        </p>

        <Button
          href={product.pdf}
          target="_blank"
          rel="noopener noreferrer"
          variant="outline"
          size="sm"
          className="mt-6 w-full sm:w-auto"
          aria-label={`Abrir ficha técnica de ${product.name}`}
        >
          <FaFilePdf aria-hidden="true" />
          Ver ficha técnica
        </Button>
      </div>
    </article>
  );
}

export default ProductCard;
