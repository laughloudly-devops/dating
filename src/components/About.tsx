import React from 'react';
import { Shield, Heart, Users, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Where Real
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"> Love </span>
            Begins ✨
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            LoveConnect is India's most trusted dating platform, designed specifically for young Indians 
            seeking meaningful relationships. We believe in authentic connections over casual hookups.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">100% Verified Profiles</h3>
                  <p className="text-gray-600">
                    Every profile is manually verified with government ID and phone number. 
                    No fake accounts, no catfishing - just real people.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Meaningful Connections</h3>
                  <p className="text-gray-600">
                    Our algorithm focuses on compatibility and shared values, not just looks. 
                    Find someone who truly gets you.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-yellow-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Indian at Heart</h3>
                  <p className="text-gray-600">
                    Built by Indians, for Indians. We understand our culture, values, and what 
                    makes relationships work in our context.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Image and stats */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Happy couple" 
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                />
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-6 text-white">
                  <div className="text-2xl font-bold mb-1">4.8★</div>
                  <div className="text-sm opacity-90">App Store Rating</div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-yellow-50 rounded-2xl p-6">
                  <div className="text-2xl font-bold text-yellow-600 mb-1">95%</div>
                  <div className="text-sm text-yellow-700">Success Rate</div>
                </div>
                <img 
                  src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Young couple" 
                  className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                />
              </div>
            </div>

            {/* Floating testimonial */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-xl p-6 max-w-sm">
              <div className="flex items-center space-x-3 mb-3">
                <img 
                  src="https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=100" 
                  alt="User" 
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-semibold text-gray-900">Raj & Meera</div>
                  <div className="text-sm text-gray-500">Married 2 years ago</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 italic">
                "We found each other on LoveConnect and got married within a year. 
                Best decision ever! 💕"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;