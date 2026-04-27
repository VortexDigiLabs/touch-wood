import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=2000&auto=format&fit=crop" 
            alt="Carpenter working" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1512] via-transparent to-transparent opacity-90" />
        </div>

        <div className="container-max relative z-10 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-[54px] font-bold tracking-widest uppercase text-white leading-[1.1] mb-6 shadow-sm">
              My Wooden World:<br/>Unique Handmade Pieces
            </h1>
            <p className="text-[#e5dfd3] text-lg leading-relaxed mb-10 font-light border-l border-[#ab8558] pl-4">
              In my workshop, I use only high-quality wood, from sustainable sources, to create unique pieces that last over time and are also environmentally friendly. Each of my works represents a challenge where requested time and commitment are brought to term.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/quote" className="btn btn-primary">
                Discover My Story
              </Link>
              <Link to="/services" className="btn btn-secondary">
                Enter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: STATEMENT */}
      <section className="py-24 relative bg-[#2a1e16]">
        {/* Subtle wood texture overlay if desired */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{backgroundImage: "url('https://www.transparenttextures.com/patterns/wood-pattern.png')"}} />
        
        <div className="container-max relative z-10 text-center max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-widest text-white mb-8 border-b border-[#3e3126] pb-8 inline-block px-8">
            Original Pieces to Satisfy My Clients' Needs
          </h2>
          <div className="space-y-6 text-[#b8a99a] text-sm md:text-base leading-relaxed font-light">
            <p>
              My passion for wood started when I was a child, when I discovered the joy of creating objects with my hands. Since then, I have dedicated my life to learning the art of carpentry and refining my technique. Wood is an incredibly versatile material and every piece I create represents a unique story.
            </p>
            <p>
              From solid wood to thin laminates, from walnut to oak, my workshop is a world of infinite possibilities. My passion has taken me to many parts of the world and allowed me to meet interesting people. I am grateful for all the opportunities I have had and continue to experiment and challenge myself to create works that satisfy my clients' needs and bring my passion for wood into their lives.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: WORKSHOP SHOWCASE */}
      <section className="relative py-24 min-h-[800px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1505691723518-36a5ac3b2a2b?q=80&w=2000&auto=format&fit=crop" 
            alt="Interior of a rustic workshop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container-max relative z-10 w-full">
          <div className="bg-[#261d18]/95 p-10 md:p-14 max-w-xl border border-[#3e3126] shadow-2xl backdrop-blur-sm">
            <h2 className="text-xl md:text-2xl font-bold tracking-widest text-[#e5dfd3] mb-8 leading-snug">
              "Believe, Create, Realize:<br/>The Key to Lasting Success"
            </h2>
            
            <div className="space-y-6 text-[#b8a99a] text-[13px] md:text-sm leading-relaxed mb-10 font-light">
              <p>
                My workshop is the heart of my carpentry business. It is a welcoming and luminous space. Here I have at my disposal all the necessary equipment and tools to cut, shape, carve and model wood precisely and accurately.
              </p>
              <p>
                It is also a space for inspiration, innovation, where it pleases me to expose my work and where my clients can see firsthand the creative process that stands at the base of every piece.
              </p>
              <p>
                At Touch Wood Carpentry you can breathe the smell of resin and hear the sound of the tools working the wood, an environment that makes me feel alive and full of energy. An inclusive and welcoming environment, where everyone is welcome.
              </p>
            </div>

            <Link to="/services" className="btn btn-secondary bg-[#866242] border border-[#ab8558]/30">
              Browse Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: GALLERY OVERVIEW */}
      <section className="py-24 bg-[#1b1512]">
        <div className="container-max mb-12">
          <h2 className="text-xl md:text-2xl font-semibold tracking-widest text-[#e5dfd3] mb-2 uppercase">
            My Art Tells Your Story
          </h2>
          <p className="text-[#b8a99a] text-sm font-light">
            From my workshop to your home: artisanal creations to render your environment unique.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 px-4 lg:px-0 max-w-[1400px] mx-auto">
          <GalleryItem src="https://images.unsplash.com/photo-1610555356070-dca01e406385?auto=format&fit=crop&q=80&w=600" />
          <GalleryItem src="https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=600" />
          <GalleryItem src="https://images.unsplash.com/photo-1538688423619-a8eeacfaee2e?auto=format&fit=crop&q=80&w=600" />
          <GalleryItem src="https://images.unsplash.com/photo-1611099661413-255d64c01f60?auto=format&fit=crop&q=80&w=600" />
        </div>
      </section>
    </>
  );
}

function GalleryItem({ src }: { src: string }) {
  return (
    <div className="aspect-square overflow-hidden relative group border border-[#3e3126]/50">
      <img src={src} alt="Woodwork gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" loading="lazy" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
    </div>
  );
}
