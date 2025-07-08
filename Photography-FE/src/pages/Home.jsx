import React, { useState, useEffect } from "react";
import { Star, Award, Users, ChevronDown, Play, Heart, Instagram, Facebook, Twitter, Camera } from "lucide-react";

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  ];

  const portfolioImages = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1505973021421-5a0831eb2d20?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={img}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-purple-900/30"></div>
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="animate-pulse">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
              Capture Life's
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Perfect Moments
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Premium photography services that transform your special moments into timeless masterpieces
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="flex items-center space-x-2">
                <span>Book Your Session</span>
                <Camera className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </div>
            </button>
            <button className="flex items-center space-x-2 px-8 py-4 border-2 border-white/30 rounded-full hover:border-purple-400 hover:bg-purple-400/10 transition-all">
              <Play className="h-5 w-5" />
              <span>Watch Our Work</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-purple-400' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all transform hover:scale-105">
                <Camera className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-3xl font-bold mb-2">5000+</h3>
                <p className="text-gray-300">Photos Captured</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all transform hover:scale-105">
                <Users className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-bold mb-2">500+</h3>
                <p className="text-gray-300">Happy Clients</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all transform hover:scale-105">
                <Award className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:rotate-12 transition-transform" />
                <h3 className="text-3xl font-bold mb-2">50+</h3>
                <p className="text-gray-300">Awards Won</p>
              </div>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all transform hover:scale-105">
                <Star className="h-12 w-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-3xl font-bold mb-2">4.9/5</h3>
                <p className="text-gray-300">Client Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the magic we create through our lens
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioImages.map((img, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl aspect-square">
                <img
                  src={img}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">Wedding Photography</h3>
                        <p className="text-sm text-gray-300">Romantic Moments</p>
                      </div>
                      <Heart className="h-6 w-6 text-pink-400" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional photography services tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Wedding Photography",
                description: "Capture your special day with stunning, romantic photographs that tell your love story.",
                price: "Starting at ₹2,500",
                features: ["8+ Hours Coverage", "500+ Edited Photos", "Online Gallery", "Engagement Session"]
              },
              {
                title: "Portrait Sessions",
                description: "Professional headshots and personal portraits that showcase your unique personality.",
                price: "Starting at ₹350",
                features: ["1-2 Hour Session", "50+ Edited Photos", "Multiple Outfits", "Professional Lighting"]
              },
              {
                title: "Event Photography",
                description: "Document your corporate events, parties, and celebrations with professional coverage.",
                price: "Starting at ₹800",
                features: ["4+ Hours Coverage", "200+ Edited Photos", "Same Day Preview", "Event Highlights"]
              }
            ].map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <p className="text-3xl font-bold text-purple-400 mb-6">{service.price}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-6">Ready to Capture Magic?</h2>
          <p className="text-xl mb-8 text-purple-100">
            Let's create something beautiful together. Book your session today and let us turn your moments into memories.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 hover:shadow-2xl">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Camera className="h-8 w-8 text-purple-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  PhotoBooking
                </span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Professional photography services that capture life's most precious moments with artistic excellence and emotional depth.
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer" />
                <Facebook className="h-6 w-6 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Wedding Photography</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Portrait Sessions</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Event Photography</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Commercial Work</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-400">Contact</h3>
              <div className="space-y-2 text-gray-300">
                <p>hello@photobooking.com</p>
                <p>+1 (555) 123-4567</p>
                <p>123 Photography Ave<br />Creative City, CC 12345</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 PhotoBooking. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;