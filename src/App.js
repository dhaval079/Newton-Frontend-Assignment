import React, { useState, useEffect } from 'react';
import { 
  Check, Gift, TrendingUp, BookOpen, 
  ChevronRight, Bell, Rocket, BarChart2,
  Clock, PieChart, ArrowRight, Target
} from 'lucide-react';
import './index.css'

const App = () => {
  const [showCheckmark, setShowCheckmark] = useState(false);
  const [activeTab, setActiveTab] = useState('markets');
  const [marketData] = useState([
    { name: 'NIFTY 50', value: '+1.2%', isUp: true },
    { name: 'SENSEX', value: '+0.8%', isUp: true },
    { name: 'BANK NIFTY', value: '-0.3%', isUp: false }
  ]);

  const learningModules = [
    { id: 1, title: 'Derivatives Basics', duration: '5 mins' },
    { id: 2, title: 'Options Trading', duration: '8 mins' },
    { id: 3, title: 'Technical Analysis', duration: '6 mins' }
  ];

  useEffect(() => {
    setTimeout(() => setShowCheckmark(true), 500);
  }, []);

  return (
    <div className="h-full bg-gradient-to-b from-purple-50 to-white max-w-md mx-auto relative">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-purple-600">▲</div>
          <span className="ml-1 font-semibold">
            <span className="text-gray-800">Angel</span>
            <span className="text-purple-600">One</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors">
            <Bell className="h-5 w-5" />
          </button>
          <div className="bg-purple-100 rounded-xl px-3 py-1">
            <div className="flex items-center">
              <span className="text-purple-600 text-xl font-bold">2</span>
              <div className="ml-1 text-purple-600 text-xs leading-tight">
                <span className="font-medium">Crore+</span><br/>
                <span>Indians</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Message */}
      <div className="relative px-6 py-8 text-center">
        <div className={`mb-6 transform transition-all duration-700 ${
          showCheckmark ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
        }`}>
          <div className="inline-flex items-center justify-center">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                <Check className="h-10 w-10 text-white" strokeWidth={2.5} />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-purple-200 animate-pulse"></div>
            </div>
          </div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Request Received
        </h2>
        <p className="text-gray-500 mb-4">
          Activation Number: EM7337024
        </p>
      </div>

      {/* Timeline Card */}
      <div className="px-6 mb-6">
        <div className="bg-white rounded-2xl shadow-lg shadow-purple-100 p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
              <Clock className="h-4 w-4 text-purple-600" />
            </div>
            <div>
              <h3 className="font-medium text-gray-800">Activation Timeline</h3>
              <p className="text-sm text-gray-500">Processing your request</p>
            </div>
          </div>
          <div className="relative pl-4 border-l-2 border-purple-100">
            <div className="mb-4">
              <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-purple-600"></div>
              <p className="text-sm font-medium text-gray-800">Request Received</p>
              <p className="text-xs text-gray-500">Just now</p>
            </div>
            <div className="mb-4">
              <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-gray-200"></div>
              <p className="text-sm font-medium text-gray-800">Processing</p>
              <p className="text-xs text-gray-500">Within 24 hours</p>
            </div>
            <div>
              <div className="absolute -left-[9px] w-4 h-4 rounded-full bg-gray-200"></div>
              <p className="text-sm font-medium text-gray-800">Activation Complete</p>
              <p className="text-xs text-gray-500">Within 2 working days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Market Overview */}
      <div className="px-6 mb-6">
        <div className="bg-white rounded-2xl shadow-lg shadow-purple-100 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-800">Market Overview</h3>
            <span className="text-xs text-gray-500">Live</span>
          </div>
          <div className="space-y-4">
            {marketData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart2 className="h-4 w-4 text-gray-400" />
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                </div>
                <span className={`text-sm font-medium ${
                  item.isUp ? 'text-green-500' : 'text-red-500'
                }`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Modules */}
      <div className="px-6 mb-6">
        <div className="bg-white rounded-2xl shadow-lg shadow-purple-100 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium text-gray-800">Quick Learn</h3>
            <button className="text-purple-600 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {learningModules.map((module) => (
              <div key={module.id} className="flex items-center justify-between p-3 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <BookOpen className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{module.title}</p>
                    <p className="text-xs text-gray-500">{module.duration}</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-purple-600" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 pb-8">
        <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 rounded-xl font-medium mb-3 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
          <Rocket className="h-5 w-5" />
          <span>Start Trading Journey</span>
        </button>
        <button className="w-full bg-purple-50 text-purple-600 py-4 rounded-xl font-medium hover:bg-purple-100 transition-colors">
          Close
        </button>
      </div>
    </div>
  );
};

export default App;
