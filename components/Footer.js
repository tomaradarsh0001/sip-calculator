import { Mail, Phone, MapPin, Twitter, Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    product: [
      { name: 'Stocks', href: '#' },
      { name: 'Future & Options', href: '#' },
      { name: 'Forex', href: '#' },
      { name: 'Crypto', href: '#' },
    ],
    company: [
      { name: 'SIP & Lumpsum', href: '#' },
      { name: 'Mutual Funds', href: '#' },
      { name: 'Binary Trading', href: '#' },
      { name: 'Recommandations', href: '#' },
    ],
    resources: [
      { name: 'Testimonials', href: '#' },
      { name: 'About Us', href: '#' },
      { name: 'Contact Us', href: '#' },
      { name: 'Subscribe', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Instagram', href: '#', icon: Instagram },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <h3 className="ml-3 text-xl font-bold">PBK Holdings</h3>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-4 text-sm leading-relaxed">
              Welcome to PBK Holdings– where smart investing meets simplicity and smiles! start your financial journey or planning for big dreams.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300 dark:text-gray-400 text-sm">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@pbkholdings.com</span>
              </div>
              <div className="flex items-center text-gray-300 dark:text-gray-400 text-sm">
                <Phone className="h-4 w-4 mr-2" />
                <span>+31 (959) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300 dark:text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mr-2" />
                <span>New Delhi, INDIA</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Stock & F&O</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Advisory</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Help & Support</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-gray-800 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 dark:text-gray-400 text-sm">
            <p>&copy; 2025 Logo. All rights reserved PBK Holdings.</p>
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-200 transition-colors duration-200"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}