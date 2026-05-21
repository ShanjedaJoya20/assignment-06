import rocketImg from '../../assets/rocket.png';
import userImg from '../../assets/user.png';
import packageImg from '../../assets/package.png';
import PlayImg from '../../assets/Play.png';

const stats = [
  { icon: rocketImg, value: "10K+", label: "Active Users" },
  { icon: packageImg, value: "500+", label: "Digital Products" },
  { icon: userImg, value: "98%", label: "Satisfaction Rate" },
  { icon: PlayImg, value: "24/7", label: "Support Available" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-base-200/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card bg-base-100 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                  <img src={stat.icon} alt={stat.label} className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-base-content mb-1">{stat.value}</h3>
              <p className="text-sm lg:text-base text-base-content/60 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
