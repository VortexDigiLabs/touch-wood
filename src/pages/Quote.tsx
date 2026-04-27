import { Phone, MapPin } from "lucide-react";

export function Quote() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-max">
        <h1 className="text-3xl md:text-4xl font-bold tracking-widest uppercase text-[#e5dfd3] mb-4">
          Contact & Quotes
        </h1>
        <p className="text-[#b8a99a] text-base leading-relaxed mb-12 max-w-2xl font-light">
          Tell me about your project. From a simple repair to a complete house fit-out, I'll provide an honest, detailed quote.
        </p>

        <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 items-start">
          
          {/* FORM */}
          <form className="glass-card p-6 md:p-10" onSubmit={e => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-x-6 gap-y-8">
              
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest font-semibold text-[#b8a99a]">Full Name</label>
                <input id="name" type="text" required placeholder="Your name" className="form-input" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className="text-xs uppercase tracking-widest font-semibold text-[#b8a99a]">Phone / WhatsApp</label>
                <input id="phone" type="tel" required placeholder="Your number" className="form-input" />
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="service" className="text-xs uppercase tracking-widest font-semibold text-[#b8a99a]">Type of Work</label>
                <select id="service" required className="form-input appearance-none">
                  <option value="">Select a category...</option>
                  <option>Kitchen Cabinets / Kitchen Renovation</option>
                  <option>Built-In Cupboards / Wardrobes</option>
                  <option>Custom Shelving / Bookcases</option>
                  <option>Outdoor Structure (Pergola, Deck, etc.)</option>
                  <option>Bespoke Furniture</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>

              <div className="flex flex-col gap-2 md:col-span-2">
                <label htmlFor="details" className="text-xs uppercase tracking-widest font-semibold text-[#b8a99a]">Project Details</label>
                <textarea id="details" required rows={5} 
                          placeholder={"Describe your vision, approximate dimensions, and any specific materials you have in mind..."} 
                          className="form-input resize-y min-h-[120px]" />
              </div>

            </div>

            <div className="mt-8 pt-8 border-t border-[#3e3126] flex flex-col sm:flex-row items-center gap-4">
              <button type="submit" className="btn btn-primary w-full sm:w-auto">
                Send Request
              </button>
            </div>
          </form>

          {/* SIDEBAR */}
          <aside className="flex flex-col gap-8">
            <div className="soft-layer p-8">
              <h3 className="text-xl font-bold uppercase tracking-widest text-[#e5dfd3] mb-4">Direct Contact</h3>
              <p className="text-[#b8a99a] text-sm font-light leading-relaxed mb-6">
                Prefer to discuss your project over the phone? Give me a call or visit the workshop.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#866242]/20 flex items-center justify-center text-[#ab8558] shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-[#e5dfd3] uppercase tracking-wider">Ian Matthews</span>
                    <a href="tel:+27844260087" className="text-[#b8a99a] text-sm hover:text-white transition-colors">+27 84 426 0087</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#866242]/20 flex items-center justify-center text-[#ab8558] shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-[#e5dfd3] uppercase tracking-wider">Workshop</span>
                    <span className="block text-[#b8a99a] text-sm">420 Long Road, Newlands<br/>Randburg, 2196</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="soft-layer p-8">
              <h3 className="text-xl font-bold uppercase tracking-widest text-[#e5dfd3] mb-4">What to Expect</h3>
              <ul className="space-y-4 text-sm text-[#b8a99a] font-light">
                <li className="flex gap-3">
                  <span className="text-[#ab8558] font-bold">1.</span>
                  <span>I'll review your request within 24-48 hours.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ab8558] font-bold">2.</span>
                  <span>We'll schedule a brief call or a free site visit if needed.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#ab8558] font-bold">3.</span>
                  <span>You'll receive a detailed, transparent quote.</span>
                </li>
              </ul>
            </div>
          </aside>

        </div>
      </div>
      <style>{`
        .form-input {
          @apply w-full px-4 py-3 bg-[#1b1512] border border-[#3e3126] text-[#e5dfd3] text-sm font-light placeholder:text-[#b8a99a]/50 focus:outline-none focus:border-[#ab8558] transition-colors;
        }
      `}</style>
    </div>
  );
}
