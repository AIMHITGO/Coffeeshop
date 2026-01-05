import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';
import { locations } from '../data/mock';

const Locations = () => {
  const location = locations[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Visit <span className="text-amber-600">Us</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stop by and experience the warmth of Happy Place Coffee & Eats
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Location Info */}
          <div className="space-y-8">
            <Card className="border-0 shadow-xl bg-white">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">{location.name}</h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin className="w-7 h-7 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Address</h3>
                      <a
                        href={`https://www.google.com/maps/place/${location.address},+${location.city},+${location.state}+${location.zip}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-amber-600 transition-colors"
                      >
                        {location.address}<br />
                        {location.city}, {location.state} {location.zip}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="w-7 h-7 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                      <a
                        href={`tel:${location.phone.replace(/[^\d]/g, '')}`}
                        className="text-gray-600 hover:text-amber-600 transition-colors text-lg"
                      >
                        {location.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="w-7 h-7 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                      <a
                        href={`mailto:${location.email}`}
                        className="text-gray-600 hover:text-amber-600 transition-colors break-all"
                      >
                        {location.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <Button
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white h-14 text-lg shadow-lg hover:shadow-xl transition-all"
                    onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`, '_blank')}
                  >
                    <Navigation className="mr-2 h-5 w-5" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-amber-600 to-orange-600 text-white">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Hours of Operation</h3>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-lg font-medium">Monday - Saturday</span>
                    <span className="text-lg font-semibold">{location.hours.weekday}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-lg font-medium">Sunday</span>
                    <span className="text-lg font-semibold">{location.hours.weekend}</span>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
                    <div>
                      <p className="text-white/80 text-sm mb-1">Breakfast</p>
                      <p className="text-lg font-semibold">{location.hours.breakfast}</p>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm mb-1">Lunch & Dinner</p>
                      <p className="text-lg font-semibold">{location.hours.lunch}</p>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm mb-1">Weekend Brunch</p>
                      <p className="text-lg font-semibold">{location.hours.brunch}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <div className="space-y-8">
            <Card className="border-0 shadow-xl overflow-hidden bg-white">
              <div className="h-[600px] relative">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.1234567890!2d${location.coordinates.lng}!3d${location.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDM5JzEwLjIiTiA3N8KwMTgnMjEuMCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Happy Place Coffee & Eats Location"
                  className="w-full h-full"
                ></iframe>
              </div>
            </Card>

            {/* Photo Gallery Preview */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 rounded-xl overflow-hidden shadow-lg group">
                <img
                  src="https://images.pexels.com/photos/35237767/pexels-photo-35237767.jpeg"
                  alt="Coffee shop interior"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <p className="absolute bottom-3 left-3 text-white font-semibold">Our Space</p>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden shadow-lg group">
                <img
                  src="https://images.pexels.com/photos/302887/pexels-photo-302887.jpeg"
                  alt="Coffee being made"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <p className="absolute bottom-3 left-3 text-white font-semibold">Crafted Drinks</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            What to <span className="text-amber-600">Expect</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Free WiFi',
                description: 'Stay connected while you enjoy your coffee',
                icon: '📶'
              },
              {
                title: 'Outdoor Seating',
                description: 'Beautiful patio area for pleasant weather',
                icon: '☀️'
              },
              {
                title: 'Family Friendly',
                description: 'Welcoming atmosphere for all ages',
                icon: '👨‍👩‍👧‍👦'
              },
              {
                title: 'Parking Available',
                description: 'Ample parking space for our guests',
                icon: '🚗'
              }
            ].map((feature, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all bg-white text-center">
                <CardContent className="p-8">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <Card className="border-0 bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-2xl overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Visit?</h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                We can't wait to serve you! Stop by today or place an order online for pickup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-6 text-lg shadow-xl hover:scale-105 transition-transform"
                  onClick={() => window.location.href = '/menu'}
                >
                  Order Online
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-amber-700 px-8 py-6 text-lg backdrop-blur-sm bg-white/10 transition-all hover:scale-105"
                  onClick={() => window.location.href = `tel:${location.phone.replace(/[^\d]/g, '')}`}
                >
                  Call Us Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Locations;
