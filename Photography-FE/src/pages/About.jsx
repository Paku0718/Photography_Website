import React, { useState, useEffect } from "react";
import { Camera, Heart, Award, Users, Star, ArrowRight, Play, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import parasImg from "../assets/paras.jpeg";
import shivamImg from "../assets/shivam.jpg";
import poojaImg from "../assets/pooja.jpg";
import ManojSirImg from "../assets/ManojSir.png";
import KiranMamImg from "../assets/KiranMaam.png";
import AdityaSirImg from "../assets/AdityaSir.png";


function About() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [counters, setCounters] = useState({
    experience: 0,
    clients: 0,
    photos: 0,
    awards: 0
  });

  const testimonials = [
    {
      name: "Kiran Waghmare",
      type: "Wedding Photography",
      image: KiranMamImg,
      text: "PhotoBooking captured our wedding day perfectly. Every moment, every emotion was beautifully preserved. We couldn't be happier with the results!",
      rating: 5
    },
    {
      name: "Aditya Kansana",
      type: "Corporate Headshots",
      image: AdityaSirImg,
      text: "Professional, creative, and incredibly talented. The team delivered exceptional headshots that elevated our company's brand image.",
      rating: 5
    },
    {
      name: "Manoj More",
      type: "Family Portrait",
      image: ManojSirImg,
      text: "Amazing experience! They made our family feel comfortable and natural. The photos are absolutely stunning and we treasure them forever.",
      rating: 5
    }
  ];

  const teamMembers = [
    {
      name: "Paras Kuranjekar",
      role: "FrontEnd",
      image: parasImg,
      bio: "With over 12 years of experience, Paras brings artistic vision and technical expertise to every shoot.",
      specialty: "Wedding & Portrait Photography"
    },
    {
      name: "Shivam Birla",
      role: "BackEnd",
      image: shivamImg,
      bio: "Shivam's creative eye and attention to detail ensure every photo tells a compelling story.",
      specialty: "Editorial & Fashion Photography"
    },
    {
      name: "Pooja Kore",
      role: "DataBase",
      image: poojaImg,
      bio: "Pooja specializes in capturing candid moments and genuine emotions at events and celebrations.",
      specialty: "Event & Documentary Photography"
    }
  ];

  // Animated counters
  useEffect(() => {
    const targets = { experience: 12, clients: 500, photos: 5000, awards: 50 };
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const intervals = Object.keys(targets).map(key => {
      const target = targets[key];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals[Object.keys(targets).indexOf(key)]);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepTime);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542038784456-1ea8e5b5f2d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Photography studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-purple-900/40"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate photographers dedicated to capturing life's most precious moments with artistry, emotion, and timeless elegance
            </p>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Founded on Passion
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  PhotoBooking was born from a simple belief: every moment has a story worth telling. Founded in 2012 by Alex Rodriguez, we've grown from a single photographer with a dream into a team of passionate artists dedicated to preserving life's most beautiful moments.
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Our journey began with wedding photography, capturing the pure joy and love between couples. Over the years, we've expanded our expertise to include portraits, events, and commercial work, but our core mission remains unchanged: to create timeless images that evoke emotion and preserve memories for generations.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{counters.experience}+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/20">
                  <div className="text-3xl font-bold text-purple-400 mb-2">{counters.clients}+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img
                  src="https://plus.unsplash.com/premium_photo-1669850858880-d88baa3d24d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Photography equipment"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-6 backdrop-blur-sm">
                <Camera className="h-12 w-12 text-white mb-2" />
                <div className="text-sm font-medium">Professional Equipment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Passion & Artistry",
                description: "We approach every project with genuine passion and artistic vision, ensuring each photo is a work of art."
              },
              {
                icon: Users,
                title: "Client-Centered",
                description: "Your vision and comfort are our priority. We work closely with you to bring your dreams to life."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We never settle for good enough. Every detail matters in creating images that exceed expectations."
              }
            ].map((value, index) => (
              <div key={index} className="group text-center">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Talented artists who bring your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="relative mb-6">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 mb-4 leading-relaxed">{member.bio}</p>
                  <div className="flex items-center space-x-2 text-sm">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span className="text-gray-400">{member.specialty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl p-12 backdrop-blur-sm border border-purple-500/20">
              <div className="flex items-center justify-center mb-8">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-purple-400"
                />
              </div>
              
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 italic">
                "{testimonials[activeTestimonial].text}"
              </blockquote>
              
              <div>
                <div className="text-xl font-bold text-white mb-1">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-purple-400">
                  {testimonials[activeTestimonial].type}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial ? 'bg-purple-400' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">{counters.photos}+</div>
              <div className="text-purple-100">Photos Captured</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">{counters.clients}+</div>
              <div className="text-purple-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">{counters.awards}+</div>
              <div className="text-purple-100">Awards Won</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">4.9</div>
              <div className="text-purple-100">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Work Together?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Let's create something beautiful together. We'd love to hear about your vision and bring it to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <div className="flex items-center justify-center space-x-2">
                <span>Get In Touch</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            <button className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-purple-400 rounded-full hover:bg-purple-400/10 transition-all">
              <Play className="h-5 w-5" />
              <span>View Our Work</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;