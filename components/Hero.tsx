"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/assets/abubakar-balogun-2YqtSxjCS9Y-unsplash.jpg",
  "/assets/barbare-kacharava-m3XgYAbaeUg-unsplash.jpg",
  "/assets/crystalweed-cannabis-8Y7EwyI8LrE-unsplash.jpg",
  "/assets/daniel-schacher-OfX3F8r35s4-unsplash.jpg",
  "/assets/jakob-gausvik-tvedt-4yYKg9tbAJ8-unsplash.jpg",
  "/assets/michael-fortsch-8xfkyZxi1Us-unsplash.jpg",
  "/assets/neil-macc-MAiiZyijBlU-unsplash.jpg",
  "/assets/wei-eoj6t-cMtNs-unsplash.jpg",
  "/assets/zoe-richardson-SAawFPonSj4-unsplash.jpg",
];

const carouselTexts = [
  {
    title: "General Farming",
    description:
      "Crop cultivation, livestock breeding, fishery, poultry, and processing of farm produce",
  },
  {
    title: "Agricultural Services",
    description:
      "Farm management, consultancy, and supply of seeds, fertilizers, machinery, and equipment",
  },
  {
    title: "Facility Management",
    description:
      "Development and management of farmlands, ranches, and greenhouses",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textKey, setTextKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % images.length;
        // Update text based on image index (cycle through 3 texts)
        setTextKey(newIndex % carouselTexts.length);
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Update text when currentIndex changes manually
  useEffect(() => {
    setTextKey(currentIndex % carouselTexts.length);
  }, [currentIndex]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image}
              alt={`Farm image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 z-0" />

      {/* Bouncing Banner - Bottom Right */}
      <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 lg:bottom-8 lg:right-8 z-20 animate-bounce-slow max-w-[calc(100%-2rem)] md:max-w-none">
        <div className="glass-dark rounded-xl p-3 md:p-4 lg:p-6 border-2 border-white/20 shadow-lg">
          <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-1 md:mb-2">
            Renovar Farms
          </h1>
          <p className="text-xs md:text-sm lg:text-base xl:text-lg text-white/90">
            Cultivating Excellence in Agriculture
          </p>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4 sm:px-6 lg:px-8">
          {/* Animated Carousel Text */}
          <div className="mb-4 md:mb-6 lg:mb-8 min-h-[100px] md:min-h-[120px] lg:min-h-[140px] flex items-center justify-center px-2">
            <div key={textKey} className="animate-fade-in-up max-w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 md:mb-3">
                {carouselTexts[textKey].title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 px-2">
                {carouselTexts[textKey].description}
              </p>
            </div>
          </div>

          <div className="flex justify-center px-4">
            <a
              href="#contact"
              className="bg-agri-green rounded-lg px-6 sm:px-8 md:px-12 lg:px-16 py-2.5 md:py-3 text-white font-semibold hover:bg-agri-light-green transition-all text-sm md:text-base"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
