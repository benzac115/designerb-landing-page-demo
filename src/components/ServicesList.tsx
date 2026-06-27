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
    <div className="flex flex-col pt-8">
      {services.map((service, index) => (
        <div 
          key={index}
          className={`py-3 md:py-4 border-b border-white/10 flex items-center justify-between group cursor-default transition-colors duration-500 hover:bg-white/[0.02] ${
            service.active ? "text-white" : "text-white/40"
          }`}
        >
          <h3 className={`text-lg md:text-xl lg:text-2xl font-sans tracking-tight transition-transform duration-500 group-hover:translate-x-4 ${service.active ? 'font-bold' : 'font-normal'}`}>
            {service.name}
          </h3>
          <span className="text-white/20 text-lg font-light">
            &#183;
          </span>
        </div>
      ))}
    </div>
  );
}
