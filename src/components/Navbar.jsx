import { ShoppingCart } from 'lucide-react';

export default function Navbar({ cartCount }) {
  return (
    <nav className="navbar bg-base-100 shadow-sm px-4 lg:px-8 py-3 fixed top-0 left-0 right-0 z-50">
      <div className="flex-1">
        <a className="text-xl lg:text-2xl font-bold text-primary" href="/">
          <span className="text-primary">Digi</span>
          <span className="text-base-content">Tools</span>
        </a>
      </div>
      <div className="flex-none gap-2">
        <ul className="menu menu-horizontal px-1 hidden md:flex gap-4">
          <li><a href="#products" className="text-sm font-medium text-base-content/70 hover:text-primary transition-colors">Products</a></li>
          <li><a href="#steps" className="text-sm font-medium text-base-content/70 hover:text-primary transition-colors">Steps</a></li>
          <li><a href="#pricing" className="text-sm font-medium text-base-content/70 hover:text-primary transition-colors">Pricing</a></li>
        </ul>
        <div className="indicator">
          <span className="indicator-item badge badge-primary badge-sm">{cartCount}</span>
          <button className="btn btn-ghost btn-circle">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}
