import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Logo = () => (
  <svg className="w-7 h-6" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="26" height="22" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <path d="M4 23L14 4L24 23" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinejoin="round" />
    <path d="M9 16H19" stroke="currentColor" strokeWidth="2.5" />
  </svg>
);

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-light">
      {/* NAVBAR */}
      <nav className="bg-gray-light border-b border-gray-medium px-8 h-52px flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="text-gray-dark">
            <Logo />
          </div>
          <div>
            <div className="font-serif font-bold text-sm text-gray-dark">
              ATOS<span className="font-light"> Recruit LLP</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-xs font-medium text-gray-dark hover:text-amber transition">Home</Link>
          <Link to="/courses" className="text-xs font-medium text-gray-text hover:text-gray-dark transition">Courses</Link>
          <Link to="/about" className="text-xs font-medium text-gray-text hover:text-gray-dark transition">About</Link>
          <Link to="/contact" className="text-xs font-medium text-gray-text hover:text-gray-dark transition">Contact</Link>
        </div>
        
        <div className="flex gap-3 items-center">
          <span className="text-xs font-medium text-gray-dark">Explore Courses</span>
          <button className="bg-amber hover:bg-amber-dark text-white text-xs font-semibold px-4 py-1.5 transition">
            Register Now →
          </button>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="flex-1">
        {children}
      </main>

      {/* FOOTER */}
      <footer className="bg-navy border-t border-white/8 px-8 pt-8 pb-5">
        <div className="grid grid-cols-4 gap-6 mb-6">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="text-white">
                <Logo />
              </div>
              <span className="font-serif font-bold text-sm text-white">ATOS Recruit LLP</span>
            </div>
            <div className="text-xs text-amber font-semibold mb-2.5">Serve the society, Save the society.</div>
            <div className="text-xs text-gray-border leading-relaxed">
              Empowering students with industry-relevant training and direct pathways to top careers. VTU listed & NSDC recognized.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Quick Links</div>
            <div className="space-y-1.5">
              <Link to="/" className="text-xs text-gray-border hover:text-white transition block">Home</Link>
              <Link to="/courses" className="text-xs text-gray-border hover:text-white transition block">Courses</Link>
              <Link to="/about" className="text-xs text-gray-border hover:text-white transition block">About</Link>
              <Link to="/contact" className="text-xs text-gray-border hover:text-white transition block">Contact</Link>
              <Link to="/" className="text-xs text-gray-border hover:text-white transition block">Register</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Contact</div>
            <div className="space-y-1.5">
              <a href="mailto:contactus@atosrecruitllp.in" className="text-xs text-gray-border hover:text-white transition block">contactus@atosrecruitllp.in</a>
              <a href="tel:+918050961616" className="text-xs text-gray-border hover:text-white transition block">+91 8050961616</a>
              <div className="text-xs text-gray-border">Bengaluru, Karnataka</div>
            </div>
          </div>

          {/* Policies */}
          <div>
            <div className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Policies</div>
            <div className="space-y-1.5">
              <Link to="/" className="text-xs text-gray-border hover:text-white transition block">Privacy Policy</Link>
              <Link to="/" className="text-xs text-gray-border hover:text-white transition block">Refund Policy</Link>
              <Link to="/" className="text-xs text-gray-border hover:text-white transition block">Terms of Use</Link>
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="border-t border-white/8 pt-4 flex justify-between items-center">
          <span className="text-xs text-gray-border">© 2025 ATOS Recruit LLP. All rights reserved.</span>
          <div className="flex gap-4">
            <span className="text-xs text-gray-border">Privacy</span>
            <span className="text-xs text-gray-border">Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
