import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Calendar, User, Tag, Search, ArrowRight, ChevronDown, ChevronUp, BookOpen, Coffee, Beaker, Heart, Lightbulb, Flame } from 'lucide-react';
import { blogPosts } from '../data/mock';

// ============================
// COFFEE 101 DATA (from PDF)
// ============================
const coffee101Sections = [
  {
    id: 'fruit-story',
    icon: Coffee,
    title: 'The Coffee Plant Is a Fruit',
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-600',
    facts: [
      'The "coffee bean" is actually a seed inside a fruit called a coffee cherry.',
      'Each coffee fruit typically holds two seeds that are later roasted and ground.',
      'Coffee grows best near the equator in the "coffee belt," between the Tropics of Cancer and Capricorn.',
      'There are 124 wild coffee species, but humans mainly rely on just two: Arabica and Robusta.',
      'Arabica originated from a natural hybridization event in Ethiopian forests, estimated hundreds of thousands of years ago.',
      'About 60% of wild coffee species are assessed as threatened, and wild Arabica itself is listed as Endangered.'
    ]
  },
  {
    id: 'arabica-vs-robusta',
    icon: Beaker,
    title: 'Arabica vs Robusta',
    color: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-600',
    facts: [
      'Arabica is often described as "milder/smoother" with higher perceived quality in many markets.',
      'Robusta has roughly 2x the caffeine of Arabica in green coffee extracts.',
      'Robusta is generally more resistant to pests and disease — the name "Robust" is partly literal.',
      'These are market patterns, not universal sensory laws. Quality varies widely within both species.',
      'People often confuse "strong taste" with "more caffeine" — they\'re different things.'
    ]
  },
  {
    id: 'processing',
    icon: Flame,
    title: 'From Cherry to Green Bean',
    color: 'bg-orange-50 border-orange-200',
    iconColor: 'text-orange-600',
    facts: [
      'Processing is where coffee becomes stable enough to ship and interesting enough to obsess over.',
      'Natural (dry): The whole fruit is dried with the seed inside, then hulled off.',
      'Full-washed (wet): Fruit skin is removed, mucilage is fermented and washed off, then dried.',
      'Semi-washed: Mucilage is removed mechanically, reducing fermentation time and water use.',
      '"Washed" does NOT mean "no fermentation" — fermentation tanks are used so enzymes and microbes break down mucilage.',
      'Processing leaves a detectable chemical fingerprint that influences flavor during roasting.'
    ]
  },
  {
    id: 'roasting',
    icon: Flame,
    title: 'Roasting & Flavor Chemistry',
    color: 'bg-red-50 border-red-200',
    iconColor: 'text-red-600',
    facts: [
      'More than 1,000 volatile compounds have been identified in roasted coffee, but only about 5% strongly drive the aroma we perceive.',
      'Green beans lose about a fifth of their weight and gain 50-80% in volume during roasting.',
      'Bitterness is NOT mostly caffeine — roast-generated chlorogenic acid lactones and phenylindanes are the major drivers.',
      'Darker roasts taste more "roasty/bitter," which people interpret as "strong" — but that\'s flavor, not caffeine.',
      'If you measure by volume (a scoop), lighter roasts can pack more mass because they\'re denser.'
    ]
  },
  {
    id: 'brewing',
    icon: Coffee,
    title: 'Brewing Science',
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-600',
    facts: [
      'The SCA "Golden Cup" standard: ~55g coffee per 1000g water, water temp 90-96C.',
      'Brewing water is a chemical solvent — its mineral balance changes what gets extracted. Target TDS: ~150 mg/L.',
      'Freshly roasted coffee retains CO2 — the "bloom" in pour-over reduces gas interference for better extraction.',
      'Grinding from coarse to fine can cause 26-59% CO2 loss.',
      'Under-extracted tastes sharp/sour, over-extracted tastes harsh/bitter — these are different problems.',
      'Paper filters remove most coffee oils (diterpenes), which can affect LDL cholesterol.'
    ]
  },
  {
    id: 'caffeine-health',
    icon: Heart,
    title: 'Caffeine & Health',
    color: 'bg-pink-50 border-pink-200',
    iconColor: 'text-pink-600',
    facts: [
      'For most adults, 400 mg/day is an amount "not generally associated with negative effects."',
      'Caffeine half-life: commonly ~5 hours, but ranges from 1.5 to 9.5 hours depending on the person.',
      'Brewed coffee (8 oz): 95-165 mg caffeine. Espresso (1 oz): 47-64 mg. Decaf (8 oz): 2-5 mg.',
      '"Decaf" does NOT mean caffeine-free — it typically contains 2-15 mg per 8 oz.',
      'Coffee does NOT dehydrate you — studies show no meaningful hydration difference vs. water at moderate intake.',
      'In 2016, IARC concluded coffee is NOT classifiable as carcinogenic. Very hot beverages (above 65C) are the concern.'
    ]
  },
  {
    id: 'myths',
    icon: Lightbulb,
    title: 'Myths vs Reality',
    color: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-600',
    facts: [
      'MYTH: "Dark roast has more caffeine." TRUTH: Caffeine doesn\'t change dramatically across roast levels.',
      'MYTH: "Espresso always gives you more caffeine." TRUTH: Per ounce yes, but a full mug of drip has more total caffeine.',
      'MYTH: "Cold brew is low-acid, period." TRUTH: pH can be similar to hot brew; "acidity" depends on what you mean.',
      'FUN FACT: Caffeine is part of the plant\'s defense — it inhibits insect feeding.',
      'FUN FACT: Mid-17th-century coffeehouses helped build "public science" and scholarly debate in England.',
      'FUN FACT: The World Coffee Research Sensory Lexicon provides 110 defined flavor attributes with reference standards.'
    ]
  }
];

// ============================
// OUR STORY DATA (from original site)
// ============================
const ourStoryContent = {
  hero: {
    title: '100% Arabica Coffee Colombia Supremo',
    subtitle: 'Make the Best Coffee at Home with Jessy\'s Premium Coffee',
    image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/coffeee-1920w.png'
  },
  sections: [
    {
      title: 'The New Revolution',
      content: 'Making the perfect cup of coffee at home can be a tricky task, but with the right tools and techniques, you can achieve a delicious and satisfying coffee every time. When it comes to choosing the best coffee for at-home brewing, there are several factors to consider, including the roast, the origin, and the brewing method.',
      image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/pic3-1920w.jpg'
    },
    {
      title: 'Understanding Roast Levels',
      content: 'The roast level refers to the amount of time that the beans have been roasted, and it directly affects the flavor and body of the coffee. Light roasts tend to be lighter in body with a milder flavor, while dark roasts are bolder in flavor with a heavier body. When choosing a roast, consider your personal preferences and the type of coffee that you enjoy.',
      image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/pic4-1920w.png'
    },
    {
      title: 'Coffee Origins Matter',
      content: 'Coffee beans come from various regions around the world, each with its unique flavor profile. Colombian coffee is known for its balanced flavor with notes of nuts, chocolate, and mild sweetness. Ethiopian coffee is known for bright, fruity flavors and tea-like acidity. Brazilian coffee is known for its nutty, caramel flavor and smooth body.',
      image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/Picture6-1920w.png'
    },
    {
      title: 'Our Colombian Supremo',
      content: 'One of the standout products from Happy Place Coffee & Eats is Jessy\'s Premium Coffee Colombian Supremo, a medium roast made from 100% Colombian coffee beans. This coffee has a balanced flavor with notes of chocolate, nuts, and a mild sweetness — a great option for those looking for a mild but flavorful at-home coffee experience.',
      image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/pic5-ed580a19-1920w.png'
    },
    {
      title: 'House Blend vs Single-Origin',
      content: 'House blends combine beans from different origins to produce a consistent, balanced flavor profile — great for everyday use. Single-origin coffees come from a specific location and are prized for unique flavor profiles that vary by region, climate, and growing conditions. Both have advantages: house blends for consistency and affordability, single-origin for unique experiences and transparent sourcing.',
      image: 'https://lirp.cdn-website.com/ee24b866/dms3rep/multi/opt/pic8-1920w.png'
    }
  ]
};

// ============================
// COFFEE 101 SECTION COMPONENT
// ============================
const Coffee101Section = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSections = coffee101Sections.filter(section => {
    if (!searchTerm) return true;
    const term = searchTerm.toLowerCase();
    return (
      section.title.toLowerCase().includes(term) ||
      section.facts.some(f => f.toLowerCase().includes(term))
    );
  });

  return (
    <div className="space-y-6" data-testid="coffee-101-content">
      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search coffee knowledge..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 border-2 focus:border-amber-400"
          data-testid="coffee-101-search"
        />
      </div>

      {/* Topic Cards */}
      <div className="grid gap-4">
        {filteredSections.map((section) => {
          const isOpen = activeSection === section.id;
          const IconComp = section.icon;
          return (
            <div
              key={section.id}
              className={`border-2 rounded-xl overflow-hidden transition-all ${section.color}`}
              data-testid={`coffee-101-topic-${section.id}`}
            >
              <button
                onClick={() => setActiveSection(isOpen ? null : section.id)}
                className="w-full flex items-center justify-between p-4 hover:bg-white/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center shadow-sm`}>
                    <IconComp className={`w-5 h-5 ${section.iconColor}`} />
                  </div>
                  <span className="font-semibold text-gray-800 text-left">{section.title}</span>
                  <span className="text-xs text-gray-500 hidden sm:inline">({section.facts.length} facts)</span>
                </div>
                {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
              </button>
              {isOpen && (
                <div className="px-4 pb-4 space-y-3">
                  {section.facts.map((fact, idx) => (
                    <div key={idx} className="flex gap-3 bg-white rounded-lg p-3 shadow-sm">
                      <span className="text-amber-500 font-bold text-sm mt-0.5 flex-shrink-0">{idx + 1}.</span>
                      <p className="text-gray-700 text-sm leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {filteredSections.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No topics found matching &ldquo;{searchTerm}&rdquo;
        </div>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {[
          { label: 'Coffee Species', value: '124', icon: Coffee },
          { label: 'Aroma Compounds', value: '1,000+', icon: Beaker },
          { label: 'Safe Daily mg', value: '400', icon: Heart },
          { label: 'Flavor Attributes', value: '110', icon: BookOpen }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
            <stat.icon className="w-6 h-6 text-amber-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ============================
// OUR STORY SECTION COMPONENT
// ============================
const OurStorySection = () => {
  return (
    <div className="space-y-12" data-testid="our-story-content">
      {/* Hero */}
      <div className="relative rounded-2xl overflow-hidden">
        <img
          src={ourStoryContent.hero.image}
          alt={ourStoryContent.hero.title}
          className="w-full h-64 md:h-80 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-6 md:p-10 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{ourStoryContent.hero.title}</h2>
            <p className="text-white/90 text-base md:text-lg">{ourStoryContent.hero.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Story Sections */}
      {ourStoryContent.sections.map((section, idx) => (
        <div
          key={idx}
          className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
        >
          <div className={idx % 2 === 1 ? 'md:[direction:ltr]' : ''}>
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-64 md:h-72 object-cover rounded-2xl shadow-lg"
            />
          </div>
          <div className={idx % 2 === 1 ? 'md:[direction:ltr]' : ''}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h3>
            <p className="text-gray-700 leading-relaxed">{section.content}</p>
          </div>
        </div>
      ))}

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 md:p-12 text-center text-white">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">Jessy's Premium Coffee</h3>
        <p className="text-white/90 text-lg mb-2">No More Boring Coffee! No More Bitter Coffee!</p>
        <p className="text-white/80 text-base">The New Revolution for Coffee Lovers</p>
      </div>
    </div>
  );
};

// ============================
// MAIN BLOG COMPONENT
// ============================
const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Determine if showing a special section
  const showCoffee101 = selectedCategory === 'Coffee 101';
  const showOurStory = selectedCategory === 'Our Story';

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50/30 to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Coffee Culture & <span className="text-amber-600">Stories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Dive into the world of coffee, community, and culinary craftsmanship
          </p>

          {/* Search - only show for All and Coffee Culture tabs */}
          {!showCoffee101 && !showOurStory && (
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg border-2 focus:border-amber-500"
                />
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3" data-testid="blog-category-filters">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={
                  selectedCategory === category
                    ? 'bg-amber-600 hover:bg-amber-700 text-white'
                    : 'hover:bg-amber-50 hover:text-amber-700'
                }
                onClick={() => setSelectedCategory(category)}
                data-testid={`blog-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>

        {/* Coffee 101 Interactive Section */}
        {showCoffee101 && <Coffee101Section />}

        {/* Our Story Section */}
        {showOurStory && <OurStorySection />}

        {/* Standard Blog View (All + Coffee Culture) */}
        {!showCoffee101 && !showOurStory && (
          <>
            {/* Featured Post */}
            {filteredPosts.length > 0 && filteredPosts[0].featured && (
              <Card className="mb-12 overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 group cursor-pointer">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-96 md:h-auto overflow-hidden">
                    <img
                      src={filteredPosts[0].image}
                      alt={filteredPosts[0].title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-amber-600 text-white text-sm font-semibold rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {filteredPosts[0].date}
                      </div>
                      <div className="flex items-center">
                        <Tag className="w-4 h-4 mr-2" />
                        {filteredPosts[0].category}
                      </div>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4 group-hover:text-amber-600 transition-colors">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold">
                          {filteredPosts[0].author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{filteredPosts[0].author}</p>
                          <p className="text-sm text-gray-500">Author</p>
                        </div>
                      </div>
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            )}

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.slice(1).map((post) => (
                <Card
                  key={post.id}
                  className="group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden bg-white"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-3 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {post.date}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <ArrowRight className="h-5 w-5 text-amber-600 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-gray-500">No articles found matching your search.</p>
              </div>
            )}
          </>
        )}

        {/* Newsletter Signup */}
        <section className="mt-20">
          <Card className="border-0 bg-gradient-to-r from-amber-600 to-orange-600 text-white overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Stay in the Loop</h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest coffee tips, recipes, and community stories
              </p>
              <div className="max-w-md mx-auto flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-14 bg-white text-gray-900 border-0"
                />
                <Button
                  size="lg"
                  className="bg-white text-amber-700 hover:bg-gray-100 px-8 whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Blog;
