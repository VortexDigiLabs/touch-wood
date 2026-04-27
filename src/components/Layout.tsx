import { Link, Outlet } from "react-router-dom";
import { Facebook, Instagram, Twitter, Phone, MapPin } from "lucide-react";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header className="absolute top-0 w-full z-50 pt-4 pb-4 bg-gradient-to-b from-black/60 to-transparent">
      <div className="container-max flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 border border-[#ab8558]/30 bg-[#2c221a]/80 shadow-md flex items-center justify-center text-[#ab8558]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0-18l-4 4m4-4l4 4M5 21h14" />
            </svg>
          </div>
          <div>
            <b className="block text-sm tracking-widest uppercase font-semibold text-white/90">Touch Wood</b>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-[11px] font-semibold tracking-widest uppercase opacity-80 hover:opacity-100 hover:text-[#e5dfd3] transition-colors">Home</Link>
          <Link to="/services" className="text-[11px] font-semibold tracking-widest uppercase opacity-80 hover:opacity-100 hover:text-[#e5dfd3] transition-colors">Services</Link>
          <Link to="/quote" className="text-[11px] font-semibold tracking-widest uppercase opacity-80 hover:opacity-100 hover:text-[#e5dfd3] transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="w-6 h-6 rounded-full bg-[#866242]/80 flex items-center justify-center hover:bg-[#866242] transition-colors"><Facebook size={12} className="text-white fill-current" /></a>
          <a href="#" className="w-6 h-6 rounded-full bg-[#866242]/80 flex items-center justify-center hover:bg-[#866242] transition-colors"><Instagram size={12} className="text-white" /></a>
          <a href="#" className="w-6 h-6 rounded-full bg-[#866242]/80 flex items-center justify-center hover:bg-[#866242] transition-colors"><Twitter size={12} className="text-white fill-current" /></a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="pt-16 pb-12 bg-[#140f0c] border-t border-[#3e3126] mt-auto">
      <div className="container-max grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:items-start text-sm text-[#b8a99a]">
        <div>
          <b className="font-sans text-lg text-[#e5dfd3] uppercase tracking-widest mb-4 block">Touch Wood</b>
          <p className="leading-relaxed">
            Premium custom carpentry by Ian Matthews.<br/>
            Randburg, South Africa.
          </p>
        </div>
        <div>
          <b className="font-sans text-sm text-[#e5dfd3] uppercase tracking-widest mb-4 block">Links</b>
          <div className="flex flex-col gap-2">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/quote" className="hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <b className="font-sans text-sm text-[#e5dfd3] uppercase tracking-widest mb-4 block">Contact</b>
          <div className="flex flex-col gap-2">
            <span className="flex items-center gap-2"><Phone size={14} /> +27 84 426 0087</span>
            <span>ian@touchwood.co.za</span>
            <span className="flex items-center gap-2 mt-2"><MapPin size={14} /> 420 Long Road, Newlands</span>
          </div>
        </div>
        <div>
           <b className="font-sans text-sm text-[#e5dfd3] uppercase tracking-widest mb-4 block">Social</b>
           <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
