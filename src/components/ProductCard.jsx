import { toast } from 'react-toastify';

const tagColors = {
  "popular": "badge-secondary",
  "best-seller": "badge-accent",
  "new": "badge-info",
};

export default function ProductCard({ product, onAddToCart }) {
  const handleBuy = () => {
    onAddToCart(product);
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border border-base-200 overflow-hidden group">
      {product.tag && (
        <div className="absolute top-3 right-3 z-10">
          <span className={`badge ${tagColors[product.tagType] || "badge-ghost"} text-xs font-semibold px-3 py-2`}>
            {product.tag}
          </span>
        </div>
      )}
      <div className="card-body p-6 lg:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{product.icon}</span>
          <h3 className="card-title text-lg lg:text-xl font-bold">{product.name}</h3>
        </div>
        <p className="text-sm text-base-content/70 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-baseline gap-1 mb-4">
          <span className="text-3xl font-extrabold text-primary">${product.price}</span>
          <span className="text-sm text-base-content/50 capitalize">/{product.period}</span>
        </div>
        <ul className="space-y-2 mb-6 flex-1">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-base-content/70">
              <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <button
          onClick={handleBuy}
          className="btn btn-primary w-full group-hover:shadow-lg transition-shadow"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}
