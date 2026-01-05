import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Trophy, Gift, Star, Coffee, Heart, Award } from 'lucide-react';
import { loyaltyTiers } from '../data/mock';
import { toast } from 'sonner';

const Rewards = () => {
  const [email, setEmail] = useState('');
  const [currentPoints, setCurrentPoints] = useState(0);

  const handleSignup = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Welcome to Happy Rewards! Check your email for details.');
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-xl">
              <Trophy className="w-10 h-10" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Happy <span className="text-amber-600">Rewards</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Earn points with every purchase and unlock exclusive benefits at your favorite coffee spot
          </p>
          
          {/* Sign Up Form */}
          <Card className="max-w-md mx-auto border-0 shadow-xl bg-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Today</h3>
              <form onSubmit={handleSignup} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12"
                  required
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white h-12"
                >
                  Sign Up Free
                </Button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                Already a member? <a href="#" className="text-amber-600 hover:underline">Sign in</a>
              </p>
            </CardContent>
          </Card>
        </div>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            How It <span className="text-amber-600">Works</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Coffee,
                title: 'Make Purchases',
                description: 'Earn 1 point for every dollar spent on food and drinks'
              },
              {
                icon: Star,
                title: 'Collect Points',
                description: 'Watch your points grow with each visit to Happy Place'
              },
              {
                icon: Gift,
                title: 'Redeem Rewards',
                description: 'Exchange points for free items, discounts, and special perks'
              }
            ].map((step, idx) => (
              <Card key={idx} className="text-center border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-10 h-10 text-amber-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
            Membership <span className="text-amber-600">Tiers</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The more you visit, the more you earn. Climb through our tiers to unlock better rewards!
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {loyaltyTiers.map((tier, idx) => (
              <Card
                key={tier.id}
                className={`border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                  idx === 2 ? 'border-amber-400 shadow-xl' : 'border-gray-200'
                }`}
              >
                <CardContent className="p-8">
                  {idx === 2 && (
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-bold rounded-full">
                        MOST POPULAR
                      </span>
                    </div>
                  )}
                  
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                    style={{ backgroundColor: `${tier.color}30` }}
                  >
                    <Award className="w-8 h-8" style={{ color: tier.color }} />
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 text-center mb-2">
                    {tier.name}
                  </h3>
                  
                  <p className="text-center text-gray-600 mb-6">
                    {tier.pointsRequired === 0 
                      ? 'Start here' 
                      : `${tier.pointsRequired}+ points`}
                  </p>

                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, benefitIdx) => (
                      <li key={benefitIdx} className="flex items-start">
                        <Star className="w-5 h-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Member <span className="text-amber-600">Benefits</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Gift,
                title: 'Birthday Rewards',
                description: 'Celebrate your special day with a complimentary treat on us!'
              },
              {
                icon: Star,
                title: 'Early Access',
                description: 'Be the first to try new menu items before they launch publicly'
              },
              {
                icon: Coffee,
                title: 'Free Refills',
                description: 'Enjoy unlimited refills on drip coffee when you dine in'
              },
              {
                icon: Heart,
                title: 'Exclusive Events',
                description: 'Get invited to member-only tastings and community events'
              }
            ].map((benefit, idx) => (
              <Card key={idx} className="border-0 shadow-lg hover:shadow-xl transition-all bg-white">
                <CardContent className="p-8 flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-gradient-to-br from-amber-100 to-orange-100 w-16 h-16 rounded-xl flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-amber-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600"></div>
          <div className="relative px-8 py-16 text-center">
            <Trophy className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Start Earning?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of members already enjoying exclusive rewards and benefits
            </p>
            <Button
              size="lg"
              className="bg-white text-amber-700 hover:bg-gray-100 px-8 py-6 text-lg shadow-xl hover:scale-105 transition-transform"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Join Happy Rewards
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Rewards;
