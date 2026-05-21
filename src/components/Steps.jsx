const steps = [
  {
    number: "01",
    title: "Browse Products",
    description: "Explore our wide range of digital tools and find the perfect solution for your needs.",
    icon: "🔍"
  },
  {
    number: "02",
    title: "Make a Choice",
    description: "Compare features, pricing, and reviews to select the best tool for your workflow.",
    icon: "✅"
  },
  {
    number: "03",
    title: "Purchase & Download",
    description: "Complete your purchase securely and get instant access to your digital tools.",
    icon: "🚀"
  },
];

export default function Steps() {
  return (
    <section id="steps" className="py-16 lg:py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-base lg:text-lg text-base-content/60 max-w-2xl mx-auto">
            Get started in three simple steps and transform your digital workflow today.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-2xl flex items-center justify-center text-3xl group-hover:bg-primary/20 transition-colors">
                {step.icon}
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-6xl font-black text-primary/5 select-none">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10">{step.title}</h3>
              <p className="text-sm text-base-content/60 leading-relaxed max-w-xs mx-auto">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-6 text-2xl text-base-content/20">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
