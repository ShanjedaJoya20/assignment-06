import bannerImg from '../../assets/banner.png';

export default function Banner() {
  return (
    <section className="hero min-h-[600px] bg-gradient-to-br from-primary/5 via-base-200 to-secondary/5 mt-16">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-16 max-w-7xl mx-auto px-4 py-12 lg:py-20">
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={bannerImg}
            alt="DigiTools Banner"
            className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl object-cover"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
            Your Digital Toolkit for{' '}
            <span className="text-primary">Success</span>
          </h1>
          <p className="text-base lg:text-lg text-base-content/70 max-w-lg mx-auto lg:mx-0">
            Discover powerful digital tools designed to boost your productivity,
            streamline your workflow, and help you achieve more in less time.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <button className="btn btn-primary btn-lg px-8">Get Started</button>
            <button className="btn btn-outline btn-lg px-8">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
