"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/yourusername",
      icon: "🐙"
    },
    {
      name: "LinkedIn", 
      href: "https://linkedin.com/in/yourprofile",
      icon: "💼"
    },
    {
      name: "Email",
      href: "mailto:your.email@example.com",
      icon: "📧"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand/Logo Section */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Your Name</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Full-Stack Software Developer passionate about creating innovative solutions
                and building exceptional digital experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <a href="#hero" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Home
                </a>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </a>
                <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Projects
                </a>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </nav>
            </div>

            {/* Social Links & Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Connect</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                    title={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                Open to new opportunities and collaborations
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Your Name. All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 text-gray-400 hover:text-white transition-colors"
              title="Back to top"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;