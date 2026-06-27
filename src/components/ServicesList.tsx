"use client";

export default function ServicesList() {
  const services = [
    { name: "BRANDING", active: true },
    { name: "GRAPHIC DESIGN", active: false },
    { name: "CREATIVE DIRECTION", active: true },
    { name: "INFOGRAPHIC", active: false },
    { name: "DATA VISUALIZATION", active: true },
    { name: "CANVA CREATOR THAILAND", active: false },
    { name: "CREATIVE AND DESIGN WORKSHOP", active: true },
    { name: "UNIVERSITY LECTURER", active: false },
  ];

  return (
    <section className="py-16 md:py-24 bg-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`py-5 md:py-8 border-b border-white/10 flex items-center justify-between group cursor-default transition-colors duration-500 hover:bg-white/[0.02] ${
                service.active ? "text-white" : "text-white/40"
              }`}
            >
              <h3 className={`text-3xl md:text-5xl lg:text-6xl font-sans tracking-tight transition-transform duration-500 group-hover:translate-x-4 ${service.active ? 'font-bold' : 'font-normal'}`}>
                {service.name}
              </h3>
              <span className="text-white/20 text-2xl font-light">
                &#183;
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
