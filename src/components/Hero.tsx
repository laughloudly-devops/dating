import React from 'react';
import { ArrowRight, Heart, Users, Sparkles, X } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100"></div>
      
      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <Heart
            key={i}
            className={`absolute text-pink-200 animate-bounce ${
              i % 2 === 0 ? 'animation-delay-1000' : 'animation-delay-2000'
            }`}
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i * 10)}%`,
              animationDuration: `${3 + (i * 0.5)}s`,
              animationDelay: `${i * 0.5}s`
            }}
            size={16 + (i * 4)}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-2 mb-6">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <span className="text-sm font-semibold text-purple-600 uppercase tracking-wider">
                India's #1 Dating App
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Find Your
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent block">
                Perfect Match
              </span>
              Today! 💕
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Connect with amazing people near you. Verified profiles, instant messaging, and genuine connections await. 
              Your love story starts here!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                <span>Start Matching Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-pink-500 text-pink-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-500 hover:text-white transition-all duration-300 transform hover:scale-105">
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start space-x-8 mt-12">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">10M+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">1M+</div>
                <div className="text-sm text-gray-600">Matches Daily</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Success Stories</div>
              </div>
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-[640px] bg-gray-900 rounded-[3rem] shadow-2xl">
              {/* Phone frame */}
              <div className="absolute inset-2 bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status bar */}
                <div className="bg-gray-50 h-8 flex items-center justify-between px-6 text-xs font-medium text-gray-600">
                  <span>9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                  </div>
                </div>
                
                {/* App content */}
                <div className="relative h-full bg-gradient-to-b from-pink-50 to-purple-50 p-4">
                  {/* Profile card */}
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                    <div className="h-80 bg-gradient-to-b from-pink-200 to-purple-200 relative">
                      <img 
                        src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">Priya, 24</h3>
                        <p className="text-sm opacity-90">Mumbai • 2 km away</p>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-600 text-sm">
                        Love traveling, photography, and trying new cuisines! Looking for genuine connections.
                      </p>
                    </div>
                  </div>
                  
                  {/* Action buttons */}
                  <div className="flex justify-center space-x-6 mt-6">
                    <button className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                      <X className="w-6 h-6 text-gray-400" />
                    </button>
                    <button className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform">
                      <Heart className="w-8 h-8 text-white fill-current" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center animate-pulse">
              <Heart className="w-6 h-6 text-white fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;