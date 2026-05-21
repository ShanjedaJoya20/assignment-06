export default function Footer() {
  return (
    <footer className="bg-base-300 text-base-content">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <a className="text-xl font-bold" href="/">
              <span className="text-primary">Digi</span>
              <span className="text-base-content">Tools</span>
            </a>
            <p className="text-sm text-base-content/60 leading-relaxed">
              Your one-stop marketplace for premium digital tools and software solutions.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-base-content/80">Products</h4>
            <ul className="space-y-2 text-sm text-base-content/60">
              <li><a href="#products" className="hover:text-primary transition-colors">Resume Builder</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Code Editor</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Design Tools</a></li>
              <li><a href="#products" className="hover:text-primary transition-colors">Analytics</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-base-content/80">Company</h4>
            <ul className="space-y-2 text-sm text-base-content/60">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-4 text-base-content/80">Support</h4>
            <ul className="space-y-2 text-sm text-base-content/60">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-base-content/10 mt-8 pt-8 text-center text-sm text-base-content/40">
          &copy; {new Date().getFullYear()} DigiTools. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
