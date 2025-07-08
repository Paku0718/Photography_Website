import React from "react";
import { Camera, Mail, Phone, MapPin, Clock, Instagram, Facebook, Twitter, Star } from "lucide-react";

function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Ready to capture your perfect moments? Explore our services or reach out via the contact information below.
          </p>
        </div>
      </section>

      {/* Contact Information & Social */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Contact Information
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl backdrop-blur-sm border border-purple-500/20">
                  <div className="bg-purple-500/20 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">hello@photobooking.com</p>
                    <p className="text-gray-300">info@photobooking.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl backdrop-blur-sm border border-purple-500/20">
                  <div className="bg-purple-500/20 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-300">+1 (555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl backdrop-blur-sm border border-purple-500/20">
                  <div className="bg-purple-500/20 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Studio Address</h3>
                    <p className="text-gray-300">123 Photography Ave</p>
                    <p className="text-gray-300">Creative City, CC 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl backdrop-blur-sm border border-purple-500/20">
                  <div className="bg-purple-500/20 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                    <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-300">Sunday: By appointment only</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-purple-500/20 p-3 rounded-full hover:bg-purple-500/30 transition-colors group">
                  <Instagram className="h-6 w-6 text-purple-400 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="bg-purple-500/20 p-3 rounded-full hover:bg-purple-500/30 transition-colors group">
                  <Facebook className="h-6 w-6 text-purple-400 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="bg-purple-500/20 p-3 rounded-full hover:bg-purple-500/30 transition-colors group">
                  <Twitter className="h-6 w-6 text-purple-400 group-hover:scale-110 transition-transform" />
                </a>
              </div>
              <p className="text-gray-300 mt-4 text-sm">
                Follow us for the latest updates, behind-the-scenes content, and photography tips!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah & Mike",
                service: "Wedding Photography",
                rating: 5,
                review: "Absolutely stunning work! They captured every precious moment of our wedding day perfectly."
              },
              {
                name: "Jennifer L.",
                service: "Portrait Session",
                rating: 5,
                review: "Professional, creative, and so easy to work with. The photos exceeded all my expectations!"
              },
              {
                name: "Tech Corp",
                service: "Corporate Event",
                rating: 5,
                review: "Outstanding coverage of our annual conference. Highly professional and delivered on time."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.review}"</p>
                <div>
                  <p className="font-semibold text-purple-400">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
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

export default Contact;
