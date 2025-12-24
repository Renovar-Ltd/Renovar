"use client";

import { useState } from "react";
import Copyable from "./Copyable";

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
      className="pt-8 md:pt-10 lg:pt-12 pb-24 md:pb-48 lg:pb-56 bg-gradient-to-b from-white to-agri-cream"
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

            {/* Options Header */}
            {/* <div className="text-center mb-4 md:mb-6">
              <p className="text-agri-brown text-sm md:text-base font-medium">
                Choose how you'd like to reach us:
              </p>
            </div> */}

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
              {/* Contact Form */}
              <div className="glass rounded-lg p-4 md:p-6 border border-agri-light-green/30">
                <h3 className="text-agri-green font-semibold text-lg mb-3 text-center">
                  Fill Out the Form
                </h3>
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

              {/* OR Divider for Mobile */}
              <div className="lg:hidden flex items-center justify-center my-2">
                <div className="flex items-center w-full">
                  <div className="flex-1 border-t border-agri-light-green/50"></div>
                  <span className="px-4 text-agri-green font-semibold text-sm">
                    OR
                  </span>
                  <div className="flex-1 border-t border-agri-light-green/50"></div>
                </div>
              </div>

              {/* Contact Details - Email Option */}
              <div className="flex flex-col justify-center">
                <div className="glass rounded-lg p-4 md:p-6 border border-agri-light-green/30 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-agri-green/30 hover:border-agri-light-green">
                  {/* <h3 className="text-agri-green font-semibold text-lg mb-3 text-center">
                    Send Us an Email
                  </h3> */}
                  <div className="text-center space-y-4">
                    <p className="text-agri-brown text-sm md:text-base">
                      Prefer to write directly? Send us an email at:
                    </p>
                    <div className="flex flex-col items-center space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="text-3xl">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-agri-green"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                        <Copyable text="admin@renovarfarms.com">
                          <a
                            href="mailto:admin@renovarfarms.com"
                            className="text-agri-green text-base md:text-lg font-semibold hover:text-agri-light-green transition-colors underline"
                          >
                            admin@renovarfarms.com
                          </a>
                        </Copyable>
                      </div>
                      {/* <a
                        href="mailto:admin@renovarfarms.com"
                        className="inline-block bg-agri-green text-white py-2 px-6 rounded-lg font-semibold hover:bg-agri-light-green transition-all transform hover:scale-105 text-sm"
                      >
                        Open Email Client
                      </a> */}
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
