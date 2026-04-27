import { Link } from "react-router-dom";
import { Check } from "lucide-react";

export function Services() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-max">
        <h1 className="text-3xl md:text-4xl font-bold tracking-widest uppercase text-[#e5dfd3] mb-4">
          Services & Catalog
        </h1>
        <p className="text-[#b8a99a] text-base leading-relaxed mb-12 max-w-2xl font-light">
          Explore our range of custom carpentry services. Each project receives personal attention — from first sketch to final polish, crafted to fit your space perfectly.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <DetailedService 
            title="Custom Furniture"
            desc="Bespoke furniture designed and built to your exact specifications. Dining tables, chairs, coffee tables, and completely unique statement pieces."
            bullets={[
              "Material Selection: Choose from a variety of premium hardwoods.",
              "Design Consultation: 3D sketches before we begin.",
              "Finish: Hand-rubbed oil or durable modern lacquers."
            ]}
          />
          <DetailedService 
            title="Built-In Storage"
            desc="Maximize your space with elegant, seamless built-in shelving, wardrobes, and entertainment centers."
            bullets={[
              "Measurement: Precise laser measuring of your space.",
              "Integration: Matches your home's existing trim and style.",
              "Functionality: Soft-close hinges and smart storage solutions."
            ]}
          />
          <DetailedService 
            title="Kitchen Cabinetry"
            desc="Complete kitchen overhauls or cabinet refacing. Experience the joy of a perfectly laid out, crafted culinary space."
            bullets={[
              "Layout: Ergonomic and functional design.",
              "Materials: Moisture-resistant cores with solid wood doors.",
              "Installation: Clean, precise, and timely fitting."
            ]}
          />
          <DetailedService 
            title="Outdoor Structures"
            desc="Durable, weather-resistant structures including pergolas, decking, and custom outdoor seating areas."
            bullets={[
              "Wood Choice: Specifically selected timber for outdoor endurance.",
              "Treatment: Weather-proofing and UV protection applied.",
              "Design: Complements your landscaping and exterior architecture."
            ]}
          />
        </div>

        <div className="text-center py-12 border-t border-[#3e3126]">
          <h2 className="text-2xl font-semibold tracking-widest text-[#e5dfd3] mb-6">Ready to discuss your project?</h2>
          <Link to="/quote" className="btn btn-primary">
            Request a Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
}

function DetailedService({ title, desc, bullets }: { title: string, desc: string, bullets: string[] }) {
  return (
    <div className="glass-card p-8 group relative overflow-hidden">
       <h3 className="text-xl font-bold tracking-wider text-[#e5dfd3] mb-3">{title}</h3>
       <p className="text-[#b8a99a] text-sm leading-relaxed mb-6 font-light">{desc}</p>
       
       <b className="block text-xs uppercase tracking-widest text-[#866242] mb-4">What's Included</b>
       <ul className="space-y-3">
         {bullets.map((b, i) => {
           const [bold, ...rest] = b.split(':');
           return (
             <li key={i} className="flex gap-3 items-start text-sm font-light text-[#e5dfd3]">
                <span className="shrink-0 text-[#866242] mt-0.5"><Check size={16} /></span>
                <span>
                  {rest.length > 0 ? <><b className="font-semibold text-white">{bold}:</b> {rest.join(':')}</> : b}
                </span>
             </li>
           )
         })}
       </ul>
    </div>
  );
}
