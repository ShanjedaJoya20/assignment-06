const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for getting started with basic digital tools.",
    features: ["Access to 3 tools", "Basic templates", "Community support", "1 user"],
    featured: false,
  },
  {
    name: "Professional",
    price: "$29",
    period: "/month",
    description: "For professionals who need advanced tools and features.",
    features: ["Access to all tools", "Premium templates", "Priority support", "Up to 5 users", "Analytics dashboard"],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For large teams with enterprise-grade requirements.",
    features: ["Everything in Pro", "Custom integrations", "Dedicated support", "Unlimited users", "API access", "SLA guarantee"],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-base-200/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Simple Pricing</h2>
          <p className="text-base lg:text-lg text-base-content/60 max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, no surprises.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`card bg-base-100 border-2 ${
                plan.featured ? "border-primary shadow-xl scale-105 md:scale-105" : "border-base-200 shadow-md"
              } rounded-2xl p-8 relative`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="badge badge-primary badge-lg px-4 py-2 text-xs font-semibold">Most Popular</span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-base-content/60 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-0">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-base-content/50 text-sm">{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`btn w-full ${plan.featured ? "btn-primary" : "btn-outline"}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
