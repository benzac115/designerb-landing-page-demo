"use client";

export default function ServicesList() {
  const services = [
    "Branding",
    "Graphic Design",
    "Creative Direction",
    "Infographic",
    "Data Visualization",
    "Canva Creator Thailand",
    "Creative & Design Workshop",
    "University Lecturer",
  ];

  return (
    <div className="pt-10">
      <h3 className="text-xs font-semibold text-white/40 tracking-widest uppercase block mb-4">
        Expertise & Roles
      </h3>
      <div className="flex flex-wrap gap-3">
        {services.map((service, index) => (
          <div 
            key={index}
            className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-accent-blue/40 hover:bg-accent-blue/10 transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(0,85,255,0.2)] group"
          >
            <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
              {service}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
