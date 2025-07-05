import Confetti from 'react-confetti';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const WealthHeroSection = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (sectionRef.current) {
        setDimensions({
          width: sectionRef.current.offsetWidth,
          height: sectionRef.current.offsetHeight,
        });
      }
    };

    // Initial measurement
    handleResize();

    // Add resize listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 transition-colors duration-300 overflow-hidden"
    >
      {/* Full-width confetti that stays within section bounds */}
      {dimensions.width > 0 && (
        <Confetti
          width={dimensions.width}
          height={dimensions.height}
          recycle={true}
          numberOfPieces={50}
          gravity={0.03}
          initialVelocityY={0.5}
          tweenDuration={20000}
          colors={['#93c5fd', '#c4b5fd', '#f9a8d4', '#a5b4fc', '#c7d2fe']}
          confettiSource={{
            x: 0,  // Start from left edge
            y: -20,
            w: dimensions.width,  // Span entire width
            h: 0
          }}
          drawShape={(ctx) => {
            ctx.beginPath();
            ctx.arc(0, 0, 3.5, 0, 2 * Math.PI);
            ctx.fill();
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Grow Your{' '}
            <span 
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-shift bg-300%"
            >
              Wealth
            </span>{' '}
            With SIP
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            SIP is a disciplined way to invest a fixed amount regularly in mutual funds.
            Investors can start with amounts as low as ₹500
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg transition-all duration-500 hover:shadow-lg group"
            >
              Get Started with SIP
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-500 ease-out group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-3 text-lg dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-800 transition-all duration-300"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .animate-gradient-shift {
          background-size: 300% 300%;
          animation: gradientShift 15s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default WealthHeroSection;