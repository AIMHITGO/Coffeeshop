import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Heart, Users, Coffee, Award, Target, Sparkles } from 'lucide-react';
import { coffeeStory } from '../data/mock';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50/30 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-amber-600">Coffee Story</span>
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {coffeeStory.intro}
          </p>
        </div>

        {/* Coffee Story Section */}
        <section className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative">
            <img
              src="https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/coffeee-1920w.png"
              alt="Jessy's Premium Coffee"
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl opacity-20 -z-10"></div>
          </div>

          <div className="space-y-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold">
                {coffeeStory.subtitle}
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900">
              Jessy's Premium Coffee - <span className="text-amber-600">The New Revolution</span>
            </h2>
            
            {coffeeStory.sections.map((section, idx) => (
              <div key={idx} className="space-y-3">
                <h3 className="text-2xl font-bold text-gray-800">{section.title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Values Section */}
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
                title: 'Family First',
                description: 'We\'re a family-run business that treats every guest like family. Your happiness is our mission.'
              },
              {
                icon: Coffee,
                title: 'Quality & Craftsmanship',
                description: 'From sourcing beans to brewing each cup, we take pride in delivering specialty coffee excellence.'
              },
              {
                icon: Sparkles,
                title: 'Sustainable Practices',
                description: 'We work with farmers who follow responsible practices, preserving biodiversity and healthy soil.'
              },
              {
                icon: Users,
                title: 'Community Hub',
                description: 'More than a café - we\'re a gathering place where coffee lovers become friends and family.'
              },
              {
                icon: Award,
                title: 'Third-Wave Coffee',
                description: "We honor coffee as an artisanal product, celebrating unique single-origin flavors and terroir."
              },
              {
                icon: Target,
                title: 'Direct Trade',
                description: 'We partner directly with farmers, ensuring fair prices and transparent sourcing.'
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

        {/* Coffee Origins Section */}
        <section className="mb-24 bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-amber-600">Coffee Origins</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer 12+ single-origin coffees from the world's finest coffee-growing regions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Colombia Supremo', notes: 'Milk chocolate, grapes, cream' },
              { name: 'Ethiopia Yirgacheffe', notes: 'Floral, tea-like, citrus' },
              { name: 'Guatemala Antigua', notes: 'Clementine, white chocolate, stone fruit' },
              { name: 'Brazil Premium', notes: 'Dark chocolate, peanut butter, roasty' },
              { name: 'Sumatra Mandheling', notes: 'Chocolate malt, spicy, robust' },
              { name: 'Kenya AA Premium', notes: 'Wine-like body, bright acidity' },
              { name: 'Nicaragua', notes: 'Raisin, honey, grapefruit' },
              { name: 'Costa Rica Tarrazu', notes: 'Cocoa, cinnamon, almond' },
              { name: 'Mexico Chiapas Jade', notes: 'Cocoa, brown sugar, cashew' }
            ].map((origin, idx) => (
              <Card key={idx} className="border-0 bg-white shadow-md hover:shadow-xl transition-all">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{origin.name}</h3>
                  <p className="text-gray-600 text-sm italic">{origin.notes}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              All available as whole bean or ground • 12 oz bags • $23.95 - $24.95
            </p>
            <a
              href="/menu"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              Browse Our Coffee Menu
            </a>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative rounded-3xl overflow-hidden mb-24">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
          
          <div className="relative px-8 py-20">
            <div className="grid md:grid-cols-4 gap-12 text-center">
              {[
                { label: 'Coffee Origins', value: '12+', icon: Coffee },
                { label: 'Family Owned', value: 'Local', icon: Heart },
                { label: 'Cups Served', value: '50K+', icon: Sparkles },
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
                Experience the Revolution
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Visit us today and taste the difference that quality, passion, and family values make
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/menu"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  View Coffee Menu
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
