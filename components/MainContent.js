'use client';
import { useState, useEffect } from 'react';
import { ArrowRight, Check, Star, Users, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { AttachMoney, ShowChart, Savings, TrendingUp } from '@mui/icons-material';


export default function MainContent() {
  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built for speed with optimized performance and cutting-edge technology.',
    },
    {
      icon: Shield,
      title: 'Secure by Design',
      description: 'Enterprise-grade security with end-to-end encryption and compliance.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools for teams of all sizes.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content: 'This platform has revolutionized how we work. The user experience is exceptional.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager, StartupXYZ',
      content: 'Incredible performance and reliability. Our team productivity has increased by 40%.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Designer, Creative Agency',
      content: 'The design system is beautiful and the components are highly customizable.',
      rating: 5,
    },
  ];
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [interestRate, setInterestRate] = useState(12);
  const [investmentYears, setInvestmentYears] = useState(10);
  const [results, setResults] = useState({
    investedAmount: 0,
    estimatedReturns: 0,
    totalValue: 0
  });

  useEffect(() => {
    calculateResults();
  }, [monthlyInvestment, interestRate, investmentYears]);

  const calculateResults = () => {
    const months = investmentYears * 12;
    const monthlyRate = interestRate / 100 / 12;

    // SIP Future Value formula: FV = P * [((1 + r)^n - 1) / r] * (1 + r)
    const futureValue = monthlyInvestment *
      (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate *
      (1 + monthlyRate);

    const investedAmount = monthlyInvestment * months;
    const estimatedReturns = futureValue - investedAmount;

    setResults({
      investedAmount,
      estimatedReturns,
      totalValue: futureValue
    });
  };

  const handleMonthlyInvestmentChange = (e) => {
    setMonthlyInvestment(parseInt(e.target.value));
  };

  const handleInterestRateChange = (e) => {
    setInterestRate(parseFloat(e.target.value));
  };

  const handleYearsChange = (e) => {
    setInvestmentYears(parseInt(e.target.value));
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const chartData = [
    { name: 'Invested', value: results.investedAmount },
    { name: 'Returns', value: results.estimatedReturns }
  ];

  const COLORS = ['#4f46e5', '#10b981'];

  return (
    <main className="min-h-screen transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Build the{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Future
              </span>{' '}
              Today
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
              Create stunning digital experiences with our cutting-edge platform.
              Designed for developers, trusted by enterprises, loved by users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
              >
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* SIP Caculator */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              SIP Investment Calculator
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Plan your financial future with our systematic investment calculator
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Form */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                <TrendingUp className="mr-2 text-indigo-600 dark:text-indigo-400" />
                Enter Your SIP Details
              </h3>

              {/* Monthly Investment */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="monthlyInvestment" className="text-gray-700 dark:text-gray-300 font-medium">
                    Monthly Investment (₹)
                  </label>
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                    {formatCurrency(monthlyInvestment)}
                  </span>
                </div>
                <input
                  type="range"
                  id="monthlyInvestment"
                  min="500"
                  max="100000"
                  step="500"
                  value={monthlyInvestment}
                  onChange={handleMonthlyInvestmentChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-600"
                />
                <div className="mt-4">
                  <input
                    type="number"
                    min="500"
                    max="100000"
                    step="500"
                    value={monthlyInvestment}
                    onChange={handleMonthlyInvestmentChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              {/* Expected Return Rate */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="interestRate" className="text-gray-700 dark:text-gray-300 font-medium">
                    Expected Return Rate (% p.a.)
                  </label>
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                    {interestRate}%
                  </span>
                </div>
                <input
                  type="range"
                  id="interestRate"
                  min="1"
                  max="30"
                  step="0.1"
                  value={interestRate}
                  onChange={handleInterestRateChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-600"
                />
                <div className="mt-4">
                  <input
                    type="number"
                    min="1"
                    max="30"
                    step="0.1"
                    value={interestRate}
                    onChange={handleInterestRateChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              {/* Investment Period */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="investmentYears" className="text-gray-700 dark:text-gray-300 font-medium">
                    Investment Period (Years)
                  </label>
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                    {investmentYears} Years
                  </span>
                </div>
                <input
                  type="range"
                  id="investmentYears"
                  min="1"
                  max="30"
                  step="1"
                  value={investmentYears}
                  onChange={handleYearsChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-600"
                />
                <div className="mt-4">
                  <input
                    type="number"
                    min="1"
                    max="30"
                    step="1"
                    value={investmentYears}
                    onChange={handleYearsChange}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
                <Savings className="mr-2 text-indigo-600 dark:text-indigo-400" />
                Your Investment Results
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-indigo-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <AttachMoney className="text-indigo-600 dark:text-indigo-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Invested Amount</span>
                  </div>
                  <div className="text-2xl font-bold text-indigo-700 dark:text-indigo-300">
                    {formatCurrency(results.investedAmount)}
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <ShowChart className="text-green-600 dark:text-green-400 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Estimated Returns</span>
                  </div>
                  <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                    {formatCurrency(results.estimatedReturns)}
                  </div>
                </div>

                <div className="md:col-span-2 bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">Total Value</span>
                    <div className="text-3xl font-bold text-gray-800 dark:text-white">
                      {formatCurrency(results.totalValue)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Pie Chart */}
              <div className="h-64">
                <h4 className="text-center text-gray-700 dark:text-gray-300 mb-4 font-medium">
                  Investment Breakdown
                </h4>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
              Discover the features that make us the preferred choice for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:shadow-gray-900/20">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold dark:text-white transition-colors duration-300">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-center transition-colors duration-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>





    </main>
  );
}