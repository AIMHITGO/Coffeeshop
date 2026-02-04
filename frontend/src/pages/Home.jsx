import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, Coffee, Heart, Star, Award, Clock, MapPin, Users } from 'lucide-react';
import { menuCategories, testimonials, blogPosts } from '../data/mock';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-1367390655-1920w.jpg"
            alt="Happy Place Coffee & Eats - Family owned coffee shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-amber-900/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-200 text-sm font-medium">
                <Coffee className="w-4 h-4 mr-2" />
                Family-Owned Since Day One
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              Your <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Happy Place</span>
              <br />
              <span className="text-4xl md:text-5xl lg:text-6xl">For Great Food & Coffee</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              A unique Latin-American fusion café where family recipes meet craft coffee. 
              Every dish made with love, every guest treated like family.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-12 py-8 text-xl font-semibold shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 rounded-xl"
                onClick={() => navigate('/menu')}
              >
                Order Now
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-4xl mx-auto">
              {[
                { icon: Heart, label: 'Family Owned', value: 'Local' },
                { icon: Coffee, label: 'Cups Served', value: '50K+' },
                { icon: Star, label: 'Happy Guests', value: '10K+' },
                { icon: Award, label: 'Years Serving', value: '5+' }
              ].map((stat, idx) => (
                <div key={idx} className="text-center space-y-2">
                  <stat.icon className="w-8 h-8 mx-auto text-amber-400" />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/70 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="py-24 bg-gradient-to-b from-white to-amber-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Our Menu</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Crafted with <span className="text-amber-600">Passion</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our unique blend of American comfort and Latin-American authentic flavors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuCategories.slice(0, 4).map((category) => (
              <Card
                key={category.id}
                className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-white hover:-translate-y-2"
                onClick={() => navigate(`/menu#${category.id}`)}
              >
                <div className="relative h-56 overflow-hidden rounded-t-lg">
                  <img
                    src={category.items[0].image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">{category.description}</p>
                  <Button
                    variant="ghost"
                    className="w-full text-amber-600 hover:text-amber-700 hover:bg-amber-50 group-hover:bg-amber-600 group-hover:text-white transition-all truncate"
                  >
                    <span className="truncate">Explore</span>
                    <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 shadow-lg hover:shadow-xl transition-all"
              onClick={() => navigate('/menu')}
            >
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Family-Owned & Proud</span>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
                  More Than Just <span className="text-amber-600">Coffee</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We're a family-run business where every recipe tells a story and every guest becomes part of our family. 
                  Our Latin-American heritage and love for great coffee drive everything we do.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Heart,
                    title: 'Family Recipes, Made with Love',
                    description: 'Every dish is prepared using authentic family recipes passed down through generations. Real food, real flavor.'
                  },
                  {
                    icon: Coffee,
                    title: 'Barista-Crafted Excellence',
                    description: 'Our coffee is brewed fresh all day long. Each cup crafted with care, precision, and passion.'
                  },
                  {
                    icon: Users,
                    title: 'You\'re Family Here',
                    description: 'We treat every guest like family. Come once as a customer, leave as a friend, return as family.'
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-7 h-7 text-amber-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/GettyImages-903742886-1920w.jpg"
                  alt="Happy Place Coffee - Barista crafting your perfect cup"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full blur-3xl opacity-20 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-gradient-to-br from-amber-300 to-yellow-400 rounded-full blur-3xl opacity-20 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">
              What Our <span className="text-amber-600">Community</span> Says
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">From Our Blog</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
                Coffee <span className="text-amber-600">Culture</span> & Stories
              </h2>
            </div>
            <Button
              variant="ghost"
              className="text-amber-600 hover:text-amber-700 hidden md:flex"
              onClick={() => navigate('/blog')}
            >
              View All Posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card
                key={post.id}
                className="group cursor-pointer hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden"
                onClick={() => navigate('/blog')}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <ArrowRight className="h-5 w-5 text-amber-600 group-hover:translate-x-2 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Find Your Happy Place?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join our community and discover why thousands of locals call us their favorite coffee spot.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
              onClick={() => navigate('/menu')}
            >
              <Coffee className="mr-2 h-5 w-5" />
              Order Online Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-700 px-8 py-6 text-lg backdrop-blur-sm bg-white/10 transition-all hover:scale-105"
              onClick={() => navigate('/locations')}
            >
              <MapPin className="mr-2 h-5 w-5" />
              Visit Our Location
            </Button>
          </div>

          {/* Quick Info */}
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-white">
            <div className="space-y-2">
              <Clock className="w-8 h-8 mx-auto mb-3" />
              <p className="font-semibold">Open Daily</p>
              <p className="text-white/80 text-sm">Mon-Sat: 8AM-8PM<br />Sun: 8AM-5PM</p>
            </div>
            <div className="space-y-2">
              <MapPin className="w-8 h-8 mx-auto mb-3" />
              <p className="font-semibold">Find Us</p>
              <p className="text-white/80 text-sm">13840 Smoketown Road<br />Woodbridge, VA</p>
            </div>
            <div className="space-y-2">
              <Coffee className="w-8 h-8 mx-auto mb-3" />
              <p className="font-semibold">Call Us</p>
              <p className="text-white/80 text-sm">(571) 552-4070</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
