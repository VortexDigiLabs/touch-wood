import { motion, useInView, AnimatePresence } from "motion/react";
import { ArrowRight, Check, Instagram, Facebook, Twitter, Youtube, ChevronRight, X } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { WordsPullUp, WordsPullUpMultiStyle, TextScrollReveal } from "./components/animations";

export default function App() {
  return (
    <div className="bg-black text-primary selection:bg-primary selection:text-black">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <FeaturesSection />
      <FooterSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="h-screen w-full p-4 md:p-6 overflow-hidden">
      <div className="relative h-full w-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/Aqua Vantage Pools (2).mp4"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />

        {/* Navbar */}
        <div className="absolute top-0 left-0 right-0 flex justify-center z-20">
          <nav className="bg-black/40 backdrop-blur-md rounded-b-2xl md:rounded-b-3xl px-6 py-3 md:px-10 flex gap-4 md:gap-8 items-center border-x border-b border-white/10">
            {["Our story", "Collective", "Workshops", "Programs", "Inquiries"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11px] sm:text-xs md:text-sm font-medium transition-all duration-300 hover:text-white"
                style={{ color: "rgba(255, 255, 255, 0.9)" }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="relative h-full w-full flex flex-col justify-end p-8 md:p-16 z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-7xl lg:text-8xl font-medium text-white mb-6 leading-[0.9]">
                Handcrafted <br />
                Excellence.
              </h1>
              <p className="text-sm md:text-lg text-white/80 max-w-xl mb-8 leading-relaxed">
                Experience the intersection of traditional craftsmanship and modern design. 
                Touch Wood creates bespoke wooden pieces that tell a story.
              </p>
              <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-white/90 transition-all flex items-center gap-2">
                Explore Collection
                <ArrowRight size={20} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 md:px-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-6 block">Our Legacy</span>
          <h2 className="text-3xl md:text-5xl font-medium text-white mb-8 leading-tight">
            Preserving the art of <br /> fine carpentry.
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
            Since 2004, Touch Wood has been dedicated to the pursuit of perfection in woodworking. 
            Every grain, every joint, and every finish is a testament to our commitment to quality.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-3xl font-medium text-white mb-2">20+</h4>
              <p className="text-gray-500 text-sm uppercase tracking-wider">Years Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-medium text-white mb-2">1.2k</h4>
              <p className="text-gray-500 text-sm uppercase tracking-wider">Projects Done</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700"
        >
          <img 
            src="/3feba8ccf359617a285b11c6dc6b4d52.jpg" 
            alt="Craftsmanship" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const products = [
    { title: "Custom Tables", category: "Dining", image: "/148d0a8f946ad54fcd104d505f29bef5.jpg" },
    { title: "Modern Seating", category: "Lounge", image: "/f42da9f15037d766055a199fa273cd89.jpg" },
    { title: "Artisan Shelving", category: "Storage", image: "/3feba8ccf359617a285b11c6dc6b4d52.jpg" }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 px-2">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 block">Collections</span>
            <h2 className="text-3xl md:text-5xl font-medium text-white">Signature Pieces.</h2>
          </div>
          <button className="text-sm font-medium text-white border-b border-white/20 pb-1 hover:border-white transition-all">
            View All Products
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden bg-zinc-900 mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">{product.category}</p>
              <h3 className="text-xl font-medium text-white flex justify-between items-center">
                {product.title}
                <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 bg-zinc-950 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard 
          icon={<Check size={24} />}
          title="Ethical Sourcing"
          desc="We only use timber from sustainable, certified forests."
        />
        <FeatureCard 
          icon={<Check size={24} />}
          title="Lifetime Warranty"
          desc="Our pieces are built to last generations, guaranteed."
        />
        <FeatureCard 
          icon={<Check size={24} />}
          title="Custom Design"
          desc="Work with our designers to create your perfect piece."
        />
        <FeatureCard 
          icon={<Check size={24} />}
          title="Global Shipping"
          desc="Handcrafted in our workshop, delivered worldwide."
        />
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 border border-white/5 hover:border-white/10 transition-colors rounded-2xl">
      <div className="text-white mb-6 opacity-60">{icon}</div>
      <h3 className="text-lg font-medium text-white mb-3">{title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function FooterSection() {
  return (
    <footer className="bg-black pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-24">
          <div className="lg:col-span-5">
            <h2 className="text-2xl font-medium text-white mb-6 uppercase tracking-wider">TOUCH WOOD</h2>
            <p className="text-gray-500 max-w-sm mb-8">
              Handcrafted excellence since 2004. Creating timeless wooden pieces that celebrate the beauty of nature.
            </p>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase text-white mb-6">Navigation</h3>
            <div className="flex flex-col gap-4">
              {["Our story", "Collective", "Workshops", "Programs", "Inquiries"].map(link => (
                <a key={link} href="#" className="text-gray-400 text-xs md:text-sm hover:text-white transition-colors">{link}</a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase text-white mb-6">Categories</h3>
            <div className="flex flex-col gap-4">
              {["Furniture", "Flooring", "Joinery", "Our Process"].map(link => (
                <a key={link} href="#" className="text-gray-400 text-xs md:text-sm hover:text-white transition-colors">{link}</a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase text-white mb-6">Stay Connected</h3>
            <div className="flex items-center w-full bg-transparent border border-white/10 px-4 py-3 mb-6">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-none w-full text-xs md:text-sm text-white"
              />
              <button className="text-gray-500 hover:text-white transition-colors ml-2">
                <ChevronRight size={18} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex items-center gap-6 mt-1">
              <a href="#" className="text-white hover:text-white/60 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="text-white hover:text-white/60 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="text-white hover:text-white/60 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="text-white hover:text-white/60 transition-colors"><Youtube size={18} /></a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-medium tracking-wide text-gray-500 uppercase">
            © {new Date().getFullYear()} TOUCH WOOD. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
