import React from 'react';
import { 
  MapPin, 
  MessageCircle, 
  Shield, 
  Zap, 
  Camera, 
  Heart,
  Clock,
  Globe
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-blue-500" />,
      title: "Location-Based Matching",
      description: "Find people near you with precise location filtering. Set your radius and discover amazing singles in your area.",
      color: "bg-blue-50",
      accentColor: "text-blue-500"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-green-500" />,
      title: "Instant Messaging",
      description: "Chat instantly when you match! Send photos, voice messages, and even video calls. Break the ice with fun stickers.",
      color: "bg-green-50",
      accentColor: "text-green-500"
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-500" />,
      title: "Advanced Verification",
      description: "Multi-layer verification with ID proof, phone number, and photo verification. Date with confidence and safety.",
      color: "bg-purple-50",
      accentColor: "text-purple-500"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Smart Algorithm",
      description: "Our AI learns your preferences and suggests compatible matches based on interests, values, and lifestyle.",
      color: "bg-yellow-50",
      accentColor: "text-yellow-500"
    },
    {
      icon: <Camera className="w-8 h-8 text-pink-500" />,
      title: "Story Features",
      description: "Share your daily moments with Stories. Let your personality shine through photos and videos that disappear in 24h.",
      color: "bg-pink-50",
      accentColor: "text-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8 text-indigo-500" />,
      title: "Multiple Languages",
      description: "Available in Hindi, English, Tamil, Telugu, Bengali, and more. Connect in the language you're most comfortable with.",
      color: "bg-indigo-50",
      accentColor: "text-indigo-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Features That Make
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"> Dating </span>
            Fun! 🚀
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to find, connect, and fall in love. Our app is packed with 
            features designed specifically for the modern Indian dating experience.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`${feature.color} rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature highlight */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Clock className="w-8 h-8" />
                <span className="text-lg font-semibold">Quick Match Feature</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Get Matched in Under 60 Seconds! ⚡
              </h3>
              <p className="text-lg opacity-90 mb-6 leading-relaxed">
                Our revolutionary Quick Match uses your preferences and behavior to find 
                compatible profiles instantly. No more endless swiping - get quality matches fast!
              </p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Try Quick Match
              </button>
            </div>
            <div className="relative">
              {/* Phone mockup with quick match interface */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm opacity-80">Quick Match</span>
                    <Heart className="w-5 h-5 fill-current" />
                  </div>
                  <div className="bg-white/20 rounded-xl p-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-white/30 rounded-full"></div>
                      <div>
                        <div className="w-20 h-3 bg-white/30 rounded mb-1"></div>
                        <div className="w-16 h-2 bg-white/20 rounded"></div>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-white/20 rounded mb-2"></div>
                    <div className="w-3/4 h-2 bg-white/20 rounded"></div>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <div className="w-10 h-10 bg-white/20 rounded-full"></div>
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-pink-500 fill-current" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;