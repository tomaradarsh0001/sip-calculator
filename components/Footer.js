import { Mail, Phone, MapPin, Twitter, Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    product: [
      { name: 'Features', href: '#' },
      { name: 'Integrations', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'Changelog', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
    ],
    resources: [
      { name: 'Community', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'DPA', href: '#' },
      { name: 'Terms of service', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'GitHub', href: '#', icon: Github },
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
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <h3 className="ml-3 text-xl font-bold">Logo</h3>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-4 text-sm leading-relaxed">
              Building the future of digital experiences with cutting-edge technology and innovative solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300 dark:text-gray-400 text-sm">
                <Mail className="h-4 w-4 mr-2" />
                <span>hello@company.com</span>
              </div>
              <div className="flex items-center text-gray-300 dark:text-gray-400 text-sm">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300 dark:text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mr-2" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
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
            <h4 className="text-lg font-semibold mb-4">Company</h4>
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
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
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
            <p>&copy; 2025 Logo. All rights reserved.</p>
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