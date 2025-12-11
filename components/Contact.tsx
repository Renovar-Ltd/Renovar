"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-8 md:py-10 lg:py-12 bg-gradient-to-b from-white to-agri-cream"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Floating Card Container */}
          <div className="glass-dark rounded-2xl p-4 md:p-6 lg:p-8 border-2 border-agri-light-green/30 hover:border-agri-light-green/60 shadow-2xl hover:shadow-agri-green/20 transition-all duration-300 hover:scale-105 backdrop-blur-md">
            {/* Header */}
            <div className="text-center mb-4 md:mb-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-agri-green mb-2">
                Get in Touch
              </h2>
              <div className="w-20 h-1 bg-agri-light-green mx-auto rounded"></div>
              <p className="text-agri-brown text-xs sm:text-sm md:text-base mt-3 mb-3 sm:mb-4 px-2 sm:px-0">
                We'd love to hear from you. Send us a message and we'll respond
                as soon as possible.
              </p>
              <div className="glass rounded-lg p-2 sm:p-3 mb-3 sm:mb-4 border border-agri-light-green/20 mx-2 sm:mx-0">
                <p className="text-agri-brown text-xs md:text-sm leading-relaxed">
                  <strong className="text-agri-green">
                    Agro-Allied Ventures:
                  </strong>{" "}
                  We undertake food processing, storage, marketing, importation
                  and exportation of agricultural products and raw materials.
                </p>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-agri-green font-medium mb-1 text-sm"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-lg glass border border-white/20 text-agri-green placeholder-agri-brown/50 focus:outline-none focus:ring-2 focus:ring-agri-light-green focus:border-transparent text-sm"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-agri-green font-medium mb-1 text-sm"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-lg glass border border-white/20 text-agri-green placeholder-agri-brown/50 focus:outline-none focus:ring-2 focus:ring-agri-light-green focus:border-transparent text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-agri-green font-medium mb-1 text-sm"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-3 py-2 rounded-lg glass border border-white/20 text-agri-green placeholder-agri-brown/50 focus:outline-none focus:ring-2 focus:ring-agri-light-green focus:border-transparent resize-none text-sm"
                      placeholder="Your Message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-agri-green text-white py-2 px-4 rounded-lg font-semibold hover:bg-agri-light-green transition-all transform hover:scale-105 text-sm"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Details */}
              <div className="flex flex-col justify-center space-y-3">
                {/* <div className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">📍</div>
                    <div>
                      <h3 className="font-semibold text-agri-green mb-1 text-base">
                        Location
                      </h3>
                      <p className="text-agri-brown text-xs md:text-sm">
                        Farm Location Details
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">📧</div>
                    <div>
                      <h3 className="font-semibold text-agri-green mb-1 text-base">
                        Email
                      </h3>
                      <a
                        href="mailto:admin@renovarfarms.com"
                        className="text-agri-brown text-xs md:text-sm hover:text-agri-green transition-colors underline"
                      >
                        admin@renovarfarms.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="text-2xl">📞</div>
                    <div>
                      <h3 className="font-semibold text-agri-green mb-1 text-base">
                        Phone
                      </h3>
                      <a
                        href="tel:+234"
                        className="text-agri-brown text-xs md:text-sm hover:text-agri-green transition-colors underline"
                      >
                        +234
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
