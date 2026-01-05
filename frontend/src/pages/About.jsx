import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Heart, Users, Coffee, Award, Target, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-amber-600">Happy Place</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A family-owned café where authentic Latin-American flavors meet warm hospitality. 
            Every dish tells a story, every guest becomes family.
          </p>
        </div>

        {/* Story Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <img
              src="https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/1-GettyImages-488301561-1920w.jpg"
              alt="Happy Place Coffee & Eats - Our Story"
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl opacity-20 -z-10"></div>
          </div>

          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                Our Family Story
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Built on <span className="text-amber-600">Family & Flavor</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Happy Place Coffee & Eats is a family-owned dream come to life. We started with a simple vision: 
              to create a welcoming space where authentic Latin-American flavors and craft coffee could bring 
              people together.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every recipe on our menu has a story - from our grandmother's Lomo Saltado to our family's 
              traditional Baleadas. We've brought these cherished recipes to Woodbridge, VA, blending them 
              with New-American culinary creativity.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Being family-owned means we're here every day, greeting you with a smile, remembering your 
              favorite order, and making sure every visit feels like coming home. That's the Happy Place difference.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-amber-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Community First',
                description: 'We believe in building lasting relationships and creating a space where everyone feels at home.'
              },
              {
                icon: Coffee,
                title: 'Quality Craftsmanship',
                description: 'From bean selection to latte art, we take pride in the details that make every visit special.'
              },
              {
                icon: Sparkles,
                title: 'Authentic Flavors',
                description: 'We honor traditional Latin-American recipes while innovating with fresh, local ingredients.'
              },
              {
                icon: Users,
                title: 'Inclusive Space',
                description: 'Happy Place welcomes everyone. Our diverse menu and warm atmosphere reflect our community.'
              },
              {
                icon: Award,
                title: 'Excellence',
                description: "We're committed to exceeding expectations with every cup, every dish, and every interaction."
              },
              {
                icon: Target,
                title: 'Sustainability',
                description: 'We partner with responsible suppliers and strive to minimize our environmental impact.'
              }
            ].map((value, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-10 h-10 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-amber-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind your favorite coffee and meals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Maria Rodriguez',
                role: 'Head Barista',
                image: 'https://images.pexels.com/photos/302887/pexels-photo-302887.jpeg',
                description: 'With 10 years of experience, Maria ensures every cup meets our high standards.'
              },
              {
                name: 'Chef Miguel Santos',
                role: 'Executive Chef',
                image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxmb29kfGVufDB8fHx8MTc2NzYyNjQ2OHww&ixlib=rb-4.1.0&q=85',
                description: 'Miguel brings authentic Latin-American flavors to life with creativity and passion.'
              },
              {
                name: 'Sarah Johnson',
                role: 'Community Manager',
                image: 'https://images.pexels.com/photos/35237767/pexels-photo-35237767.jpeg',
                description: "Sarah orchestrates our events and ensures Happy Place feels like home to everyone."
              }
            ].map((member, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group bg-white overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-amber-300 font-semibold">{member.role}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative rounded-3xl overflow-hidden mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
          
          <div className="relative px-8 py-20">
            <div className="grid md:grid-cols-4 gap-12 text-center">
              {[
                { label: 'Cups Served', value: '50,000+', icon: Coffee },
                { label: 'Happy Customers', value: '10,000+', icon: Heart },
                { label: 'Menu Items', value: '100+', icon: Sparkles },
                { label: 'Years Serving', value: '5+', icon: Award }
              ].map((stat, idx) => (
                <div key={idx} className="space-y-4">
                  <stat.icon className="w-12 h-12 text-white mx-auto" />
                  <p className="text-5xl font-bold text-white">{stat.value}</p>
                  <p className="text-xl text-white/90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="border-0 shadow-2xl bg-white">
            <CardContent className="p-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Become Part of Our Story
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Visit us today and experience the warmth, flavor, and community that make Happy Place special
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/menu"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  View Our Menu
                </a>
                <a
                  href="/locations"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-amber-600 text-amber-700 hover:bg-amber-50 font-semibold rounded-lg transition-all"
                >
                  Visit Us Today
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
