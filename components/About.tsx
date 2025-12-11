"use client";

import { useState, useEffect } from "react";

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
  const services = [
    {
      icon: "🌾",
      title: "General Farming",
      description:
        "To carry on the business of general farming in all its branches, including crop cultivation, livestock breeding and rearing, fishery, poultry, and the processing, preservation, packaging, distribution and sale of farm produce.",
    },
    {
      icon: "🔧",
      title: "Agricultural Services",
      description:
        "To engage in agricultural services such as farm management, consultancy, supplies of seeds, fertilizers, chemicals, machinery, equipment and other inputs required for farming operations.",
    },
    {
      icon: "🏭",
      title: "Facility Management",
      description:
        "To acquire, lease, develop and manage farmlands, ranches, greenhouses and related agricultural facilities.",
    },
  ];

  return (
    <section
      id="about"
      className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-agri-cream to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-agri-green mb-4">
              About Us
            </h2>
            <div className="w-24 h-1 bg-agri-light-green mx-auto rounded"></div>
          </div>

          <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex justify-center items-start">
            {services.map((service, index) => {
              const baseZIndex = services.length - index;
              const translateX = index * 50;
              const translateY = index * 25;
              const leftPositions = ["5%", "25%", "45%"];
              const topPositions = ["0", "10%", "20%"];

              return (
                <div
                  key={index}
                  className="relative md:absolute w-full max-w-full md:w-[42%] lg:w-[38%] mb-4 sm:mb-6 md:mb-0 group card-overlap"
                  style={{
                    left: !isMobile ? leftPositions[index] : "auto",
                    top: !isMobile ? topPositions[index] : "auto",
                    zIndex: baseZIndex,
                    transform: !isMobile
                      ? `translate(${index > 0 ? translateX : 0}px, ${
                          index > 0 ? translateY : 0
                        }px)`
                      : "none",
                    transition: "z-index 0.3s ease",
                  }}
                >
                  <div
                    className="glass-dark rounded-xl p-4 md:p-6 lg:p-7 border-2 border-agri-light-green/30 hover:border-agri-light-green/60 transition-all duration-500 ease-out h-full flex flex-col backdrop-blur-md bg-white/10 card-content"
                    style={{
                      transformOrigin: "center center",
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        const card = e.currentTarget.closest(
                          ".card-overlap"
                        ) as HTMLElement;
                        if (card) {
                          card.style.zIndex = "50";
                          e.currentTarget.style.transform = `translate(${
                            index > 0 ? translateX : 0
                          }px, ${
                            index > 0 ? translateY - 15 : -15
                          }px) scale(1.25)`;
                          e.currentTarget.style.boxShadow =
                            "0 20px 40px rgba(0, 0, 0, 0.3)";
                        }
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        const card = e.currentTarget.closest(
                          ".card-overlap"
                        ) as HTMLElement;
                        if (card) {
                          card.style.zIndex = baseZIndex.toString();
                          e.currentTarget.style.transform = `translate(${
                            index > 0 ? translateX : 0
                          }px, ${index > 0 ? translateY : 0}px) scale(1)`;
                          e.currentTarget.style.boxShadow = "";
                        }
                      }
                    }}
                  >
                    <div className="mb-4">
                      <div className="text-4xl md:text-5xl lg:text-6xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-agri-green mb-3">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-agri-brown text-xs md:text-sm leading-relaxed mt-auto">
                      {service.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
