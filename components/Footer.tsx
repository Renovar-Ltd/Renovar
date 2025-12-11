export default function Footer() {
  return (
    <footer className="bg-agri-green text-white py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <div className="glass rounded-lg px-4 py-2 border-2 border-white/20 inline-flex items-center gap-2 mb-4">
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 8C8 10 5.9 15.17 3.82 21.34l1.89.66.95-2.3c.48.17 1 .26 1.53.26C17 20 22 13.26 22 11c0-1-2-3-5-3zM2 13c0 5.18 3.95 9 9 9 .34 0 .67-.03 1-.08-1.17-4.15-1.5-7.83-1.5-10.92 0-2.52.5-4.75 1.5-6.68C9.5 4.5 8 6.5 8 9c0 1.78.79 2.9 1.5 3.53C8.5 13.5 5 13 2 13z" />
              </svg>
              <span className="text-xl md:text-2xl font-bold">Renovar</span>
            </div>
            <p className="text-white/80 text-sm md:text-base mb-3">
              Cultivating Excellence in Agriculture
            </p>
            <p className="text-white/70 text-xs md:text-sm leading-relaxed">
              To do all such other things as are incidental or conducive to the attainment of our agricultural objectives.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-white/80 hover:text-white transition-colors text-sm md:text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/80 hover:text-white transition-colors text-sm md:text-base"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/80 hover:text-white transition-colors text-sm md:text-base"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-white/80 text-sm md:text-base">
              <li>General Farming</li>
              <li>Livestock Breeding</li>
              <li>Farm Management</li>
              <li>Agricultural Consultancy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Renovar Farms. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
