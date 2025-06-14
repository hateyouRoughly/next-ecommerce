'use client';
import React, { useState, useEffect } from 'react';
import { Palette, Mail, Clock, Sparkles, ArrowRight } from 'lucide-react';
// import { ThemeSwitcher } from './ThemeSwitcher';

function App() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer (set to 30 days from now)
  useEffect(() => {
    const targetDate = new Date('2025-12-31T00:00:00Z'); // Change this to your desired launch date

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <div className="pb-12 min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-100/20 to-transparent rounded-full transform rotate-12"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-green-100/20 to-transparent rounded-full transform -rotate-12"></div>
        
        {/* Floating Paint Drops */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-green-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-40 w-5 h-5 bg-purple-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-orange-400 rounded-full opacity-60 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Logo */}
        <div className="mt-12 flex items-center justify-center space-x-3 mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-green-500 p-4 rounded-2xl shadow-lg">
            <Palette className="h-10 w-10 text-white" />
          </div>
          <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          PaintPro {/* <ThemeSwitcher /> */}
          </span>
        </div>

        {/* Main Content */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-2 text-sm font-medium text-blue-600 bg-blue-100 px-4 py-2 rounded-full w-fit mx-auto mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Something Amazing is Coming</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            We&apos;re Working on
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Something</span>
            <br />
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Special</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our premium paint ecommerce platform is under development. Get ready to transform your spaces 
            with our extensive collection of high-quality paints and innovative mobile apps.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-12 border border-white/20">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Clock className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Launching In</h2>
          </div>
          
          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-4 rounded-2xl">
              <div className="text-3xl font-bold">{timeLeft.days}</div>
              <div className="text-sm opacity-80">Days</div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-4 rounded-2xl">
              <div className="text-3xl font-bold">{timeLeft.hours}</div>
              <div className="text-sm opacity-80">Hours</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-4 rounded-2xl">
              <div className="text-3xl font-bold">{timeLeft.minutes}</div>
              <div className="text-sm opacity-80">Minutes</div>
            </div>
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 text-white p-4 rounded-2xl">
              <div className="text-3xl font-bold">{timeLeft.seconds}</div>
              <div className="text-sm opacity-80">Seconds</div>
            </div>
          </div>
        </div>

        {/* Email Signup */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl mb-12 border border-white/20">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Be the First to Know</h3>
          <p className="text-gray-600 mb-6">
            Get notified when we launch and receive exclusive early access to our premium paint collection.
          </p>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
              >
                <span>Notify Me</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </form>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-2 text-green-600">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <span className="font-semibold">Thank you for subscribing!</span>
              </div>
              <p className="text-green-600 text-sm mt-2">We&apos;ll notify you as soon as we launch.</p>
            </div>
          )}
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Palette className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Premium Paints</h4>
            <p className="text-gray-600 text-sm">High-quality paints for walls, houses, and specialty surfaces</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Mobile Apps</h4>
            <p className="text-gray-600 text-sm">Dedicated apps for customers, resellers, and delivery partners</p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Expert Service</h4>
            <p className="text-gray-600 text-sm">Professional consultation and premium customer support</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-gray-500 text-sm">
          <p>© 2024 PaintPro. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;