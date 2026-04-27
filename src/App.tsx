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
          className="absolute inset-0 w-full h-full object-cover scale-105"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
        />
        
        {/* Overlays */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none"></div>
        
        {/* Navbar */}
        <div className="absolute top-0 left-0 right-0 flex justify-center z-20">
          <nav className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8 flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
            {["Our story", "Collective", "Workshops", "Programs", "Inquiries"].map((item) => (
              <a 
                key={item} 
                href="#"
                className="text-[10px] sm:text-xs md:text-sm transition-colors duration-300"
                style={{ color: "rgba(225, 224, 204, 0.8)" }}
                onMouseEnter={(e) => e.currentTarget.style.color = "#E1E0CC"}
                onMouseLeave={(e) => e.currentTarget.style.color = "rgba(225, 224, 204, 0.8)"}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 lg:p-16 z-10 w-full flex justify-center pb-20 overflow-hidden">
          <div className="scale-y-[2.2] origin-bottom tracking-tighter mt-12">
            <HoverBounceCharacters 
              text="TOUCH WOOD" 
              className="text-[10vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw] 2xl:text-[6.5vw] font-bodoni font-bold leading-[0.85] text-[#bab5ad]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function HoverBounceCharacters({ text, className }: { text: string; className?: string }) {
  const chars = Array.from(text);
  
  return (
    <div className={`flex justify-center ${className}`}>
      {chars.map((char, i) => (
        char === " " ? (
          <span key={i} className="whitespace-pre"> </span>
        ) : (
          <motion.span
            key={i}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ 
              y: [0, -15, 0], 
              transition: { 
                duration: 0.4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              } 
            }}
            className="inline-block cursor-default"
          >
            {char}
          </motion.span>
        )
      ))}
    </div>
  );
}

function AboutSection() {
  const segments = [
    { text: "I am Ian Matthews," },
    { text: "a master carpenter", className: "font-serif italic" },
    { text: "with over two decades of dedication to the craft." }
  ];

  return (
    <section className="bg-black py-24 md:py-32 px-4 md:px-8">
      <div className="relative max-w-6xl mx-auto bg-[#101010] rounded-[2rem] md:rounded-[3rem] p-8 sm:p-12 md:p-20 text-center flex flex-col items-center overflow-hidden">
        {/* Background Image */}
        <img 
          src="/1777309430865-019dcfe4-d1bd-7cf6-a165-cb30e47cb16e.png" 
          alt="Master Carpenter Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-50" 
        />
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="text-primary text-[10px] sm:text-xs uppercase tracking-widest mb-12 border border-primary/20 px-4 py-1.5 rounded-full">
            Master Carpenter
          </div>
          
          <WordsPullUpMultiStyle 
            segments={segments} 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-4xl mx-auto leading-[1.1] sm:leading-[0.95] mb-16"
          />
          
          <div className="max-w-2xl mx-auto">
            <TextScrollReveal 
              text="I specialize in custom woodwork that transforms spaces through precision joinery, premium materials, and an unwavering attention to detail."
              className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed text-center font-light"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const items = [
    {
      title: "Furniture",
      desc: "No matter what your personal style, we have just the right furniture for your living environment. Element brings extraordinary, natural wood flooring, distinctive furniture and unique, wooden features. Furniture collections that blend classic style with heirloom quality.",
      img: "/f42da9f15037d766055a199fa273cd89.jpg",
      align: "left"
    },
    {
      title: "Features",
      desc: "Wooden walls can add spiritual simplicity to that space behind the bed, the one we see every night right before we go to sleep, warm the living room or separate two different areas in the dining room. Natural wood connect the interiors to the peace-giving outdoors.",
      img: "/148d0a8f946ad54fcd104d505f29bef5.jpg",
      align: "right"
    },
    {
      title: "Flooring",
      desc: "Solid hardwood adds character, warmth and value to any room in your house. We offer exceptional wood floors that will help you enhance the look of your home. You can get wood floors that look shiny and new, or you can buy brand new wood that looks like an antique.",
      img: "/3feba8ccf359617a285b11c6dc6b4d52.jpg",
      align: "left"
    }
  ];

  return (
    <section className="bg-black py-24 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center text-[#E1E0CC] mb-20 font-serif italic">
          Our Products
        </h2>
        
        {/* Desktop Layout */}
        <div className="hidden lg:block relative max-w-5xl mx-auto py-12">
          {/* Central Background box */}
          <div className="absolute top-0 bottom-0 left-[20%] right-[20%] bg-[#101010] rounded-2xl shadow-xl border border-white/5"></div>
          
          <div className="relative z-10 flex flex-col gap-16">
            {items.map((item, i) => (
              <div key={i}>
                <div className="grid grid-cols-12 items-center gap-12 group">
                  {item.align === "left" ? (
                    <>
                      <div className="col-span-5 flex justify-end">
                        <motion.img 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          src={item.img} 
                          alt={item.title}
                          className="w-[320px] aspect-square object-cover rounded shadow-2xl brightness-90 group-hover:brightness-100 transition-all duration-500" 
                        />
                      </div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="col-span-5 col-start-6 pr-8 text-left"
                      >
                        <h3 className="text-2xl font-serif italic text-[#E1E0CC] mb-4">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">{item.desc}</p>
                        <a href="#" className="uppercase tracking-[0.2em] text-[10px] text-primary font-bold hover:text-white transition-colors">Shop Online</a>
                      </motion.div>
                    </>
                  ) : (
                    <>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="col-span-5 col-start-3 pl-8 text-right"
                      >
                        <h3 className="text-2xl font-serif italic text-[#E1E0CC] mb-4">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 ml-auto max-w-md">{item.desc}</p>
                        <a href="#" className="uppercase tracking-[0.2em] text-[10px] text-primary font-bold hover:text-white transition-colors">Shop Online</a>
                      </motion.div>
                      <div className="col-span-5 flex justify-start">
                        <motion.img 
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          src={item.img} 
                          alt={item.title}
                          className="w-[320px] aspect-square object-cover rounded shadow-2xl brightness-90 group-hover:brightness-100 transition-all duration-500" 
                        />
                      </div>
                    </>
                  )}
                </div>
                {i < items.length - 1 && (
                  <div className="mx-auto w-[60%] border-b border-[#212121] my-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile / Tablet Layout */}
        <div className="lg:hidden flex flex-col gap-12">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#101010] p-6 sm:p-8 rounded-2xl flex flex-col gap-6"
            >
              <img src={item.img} alt={item.title} className="w-full aspect-square object-cover rounded-sm -mt-12 shadow-xl" />
              <div>
                <h3 className="text-2xl font-serif italic text-[#E1E0CC] mb-4">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
                <a href="#" className="uppercase tracking-[0.2em] text-[10px] text-primary font-bold hover:text-white transition-colors">Shop Online</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const images = [
    "/1777304135354-019dcf94-2004-7ecf-8594-91d4d13fad86.png",
    "/1777304162476-019dcf94-2004-74b3-b34a-ffa6d8ac58ec.png",
    "/gpt-image-2 (medium)_b_Cinematic_luxury_lif.png",
    "/gpt-image-2 (medium)_b_Please_resize_and_re.png"
  ];

  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <section className="min-h-screen bg-black relative py-20 px-4 md:px-8">
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1">
          {images.map((img, i) => (
            <FeatureCard key={i} delay={0.15 * (i + 1)}>
              <div 
                className="h-full min-h-[300px] lg:h-[480px] w-full relative rounded-2xl overflow-hidden group cursor-pointer border border-[#212121]/50"
                onMouseEnter={() => setHoveredImage(img)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <img 
                  src={img} 
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-700 ease-out" 
                  alt={`Portfolio image ${i + 1}`}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
            </FeatureCard>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {hoveredImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-sm pointer-events-none"
          >
            <motion.img 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              src={hoveredImage} 
              className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] ring-1 ring-white/10" 
              alt="Enlarged portfolio view" 
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function FeatureCard({ children, delay }: { children: React.ReactNode, delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function FooterSection() {
  return (
    <footer className="w-full bg-[#0a0a0a] py-14 md:py-20 px-6 md:px-12 text-[#E1E0CC] border-t border-[#212121]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 lg:mb-20">
          {/* Logo / Tagline */}
          <div className="lg:col-span-3 flex flex-col items-start pr-4">
            <h2 className="text-xl md:text-2xl font-bold tracking-[0.1em] mb-2 uppercase text-white">Prisma*</h2>
            <p className="text-[10px] md:text-xs text-gray-400 font-semibold tracking-wider uppercase">Live Life On Your Terms</p>
          </div>

          {/* Links */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-5">
              <h3 className="text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase text-white">Shop</h3>
              <a href="#" className="text-gray-400 text-xs md:text-sm hover:text-[#E1E0CC] transition-colors">Presets</a>
              <a href="#" className="text-gray-400 text-xs md:text-sm hover:text-[#E1E0CC] transition-colors">Plugins</a>
              <a href="#" className="text-gray-400 text-xs md:text-sm hover:text-[#E1E0CC] transition-colors">Templates</a>
              <a href="#" className="text-gray-400 text-xs md:text-sm hover:text-[#E1E0CC] transition-colors">Bundles</a>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase text-white">Support</h3>
              <a href="#" className="text-gray-400 text-xs md:text-sm hover:text-[#E1E0CC] transition-colors">Help Center</a>
              <a href="#" className="text-gray-400 text-xs md:text-sm hover:text-[#E1E0CC] transition-colors">Documentation</a>
              <a href="#" className="text-gray-400 text-xs md:text-sm hover:text-[#E1E0CC] transition-colors">Warranty</a>
              <a href="#" className="text-gray-400 text-xs md:text-sm hover:text-[#E1E0CC] transition-colors">Contact Us</a>
            </div>
            <div className="flex flex-col gap-5">
              <h3 className="text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase text-white">About</h3>
              <a href="#" className="text-gray-400 text-xs md:text-sm hover:text-[#E1E0CC] transition-colors">Our Story</a>
              <a href="#" className="text-gray-400 text-xs md:text-sm hover:text-[#E1E0CC] transition-colors">Sustainability</a>
              <a href="#" className="text-gray-400 text-xs md:text-sm hover:text-[#E1E0CC] transition-colors">Affiliates</a>
              <a href="#" className="text-gray-400 text-xs md:text-sm hover:text-[#E1E0CC] transition-colors">Careers</a>
            </div>
          </div>

          {/* Stay Connected */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-[10px] md:text-xs font-bold tracking-[0.1em] uppercase text-white mb-5">Stay Connected</h3>
            <div className="flex items-center w-full bg-transparent border border-[#303030] rounded-none px-4 py-3 mb-6 focus-within:border-[#505050] transition-colors group">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-transparent border-none outline-none w-full text-xs md:text-sm text-[#E1E0CC] placeholder:text-gray-500"
              />
              <button className="text-gray-500 group-focus-within:text-[#E1E0CC] hover:text-[#E1E0CC] transition-colors ml-2">
                <ChevronRight size={18} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex items-center gap-6 mt-1">
              <a href="#" className="text-white hover:text-[#E1E0CC]/80 transition-colors"><Instagram size={18} strokeWidth={1.5} /></a>
              <a href="#" className="text-white hover:text-[#E1E0CC]/80 transition-colors"><Facebook size={18} strokeWidth={1.5} /></a>
              {/* Note: the reference image uses tiktok but we are using twitter since lucide has no tiktok */}
              <a href="#" className="text-white hover:text-[#E1E0CC]/80 transition-colors"><Twitter size={18} strokeWidth={1.5} /></a>
              <a href="#" className="text-white hover:text-[#E1E0CC]/80 transition-colors"><Youtube size={18} strokeWidth={1.5} /></a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-[#212121] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] font-medium tracking-wide text-gray-500 uppercase">© {new Date().getFullYear()} PRISMA*. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

