import React from 'react';
import { Download, Smartphone, Heart, Star, ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="download" className="py-20 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Star className="w-6 h-6 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
              Ready to find love?
            </span>
            <Star className="w-6 h-6 text-yellow-500 fill-current" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Your Perfect Match is
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent block">
              Just One Swipe Away! 💕
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Join millions of Indians who've found love on LoveConnect. Download now and start 
            your journey to finding that special someone. It's free to join!
          </p>

          {/* App store buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="group bg-black text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Download className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-75">Download on the</div>
                <div className="text-lg font-bold">App Store</div>
              </div>
            </button>
            
            <button className="group bg-black text-white px-8 py-4 rounded-2xl font-semibold flex items-center space-x-3 hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Smartphone className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs opacity-75">Get it on</div>
                <div className="text-lg font-bold">Google Play</div>
              </div>
            </button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-pink-500 mb-1">4.8★</div>
              <div className="text-sm text-gray-600">App Rating</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-purple-500 mb-1">10M+</div>
              <div className="text-sm text-gray-600">Downloads</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-blue-500 mb-1">1M+</div>
              <div className="text-sm text-gray-600">Daily Matches</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="text-2xl font-bold text-green-500 mb-1">50K+</div>
              <div className="text-sm text-gray-600">Success Stories</div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still thinking? Here's what you get for FREE:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-pink-500 fill-current flex-shrink-0" />
                  <span className="text-gray-700">Unlimited profile views</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-pink-500 fill-current flex-shrink-0" />
                  <span className="text-gray-700">5 Super Likes daily</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-pink-500 fill-current flex-shrink-0" />
                  <span className="text-gray-700">Basic messaging</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5 text-pink-500 fill-current flex-shrink-0" />
                  <span className="text-gray-700">Profile verification</span>
                </div>
              </div>
              
              <button className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 mx-auto">
                <span>Start Your Love Story Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-sm text-gray-500 mt-4">
                No credit card required • Join 10M+ happy users • 100% safe & secure
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;