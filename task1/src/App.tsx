import "./App.css";
import PricingCard from "./components/PricingCard";

function App() {
  const pricingPlans = [
    {
      plan: "Standard",
      price: "$100",
      features: ["50,000 Requests", "4 contributors", "Up to 3 GB storage space"],
      isFeatured: false,
    },
    {
      plan: "Pro",
      price: "$200",
      features: ["100,000 Requests", "7 contributors", "Up to 6 GB storage space"],
      isFeatured: true,
    },
    {
      plan: "Expert",
      price: "$500",
      features: ["200,000 Requests", "11 contributors", "Up to 10 GB storage space"],
      isFeatured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-white text-center mb-16">Pricing</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-end">
          {pricingPlans.map((plan, index) => (
            <PricingCard
              key={index}
              plan={plan.plan}
              price={plan.price}
              features={plan.features}
              isFeatured={plan.isFeatured}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
