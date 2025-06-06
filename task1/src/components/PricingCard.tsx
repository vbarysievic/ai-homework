interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

export default function PricingCard({ plan, price, features, isFeatured = false }: PricingCardProps) {
  return (
    <div
      className={`
      relative rounded-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 
      focus-within:ring-4 focus-within:ring-blue-500 focus-within:ring-opacity-50
      ${isFeatured ? "bg-slate-600 text-white shadow-xl scale-105" : "bg-white text-gray-900 shadow-lg"}
      p-8 flex flex-col h-full min-h-[480px]
    `}
    >
      {/* Plan Name */}
      <h3
        className={`
        text-2xl font-semibold text-center mb-6
        ${isFeatured ? "text-white" : "text-gray-700"}
      `}
      >
        {plan}
      </h3>

      {/* Price */}
      <div className="text-center mb-8">
        <span
          className={`
          text-6xl font-bold
          ${isFeatured ? "text-white" : "text-gray-900"}
        `}
        >
          {price}
        </span>
      </div>

      {/* Features */}
      <div className="flex-grow mb-8">
        <ul className="space-y-0">
          {features.map((feature, index) => (
            <li
              key={index}
              className={`
                text-center py-4 border-b last:border-b-0 text-lg
                ${isFeatured ? "text-gray-200 border-slate-500" : "text-gray-600 border-gray-200"}
              `}
            >
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Subscribe Button */}
      <button
        className={`
        w-full py-4 px-8 rounded-lg font-bold text-base uppercase tracking-wider
        transition-all duration-200 focus:ring-4 focus:ring-opacity-50 focus:outline-none
        ${
          isFeatured
            ? "bg-white text-slate-600 hover:bg-gray-100 focus:ring-white"
            : "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-800"
        }
      `}
      >
        Subscribe
      </button>
    </div>
  );
}
