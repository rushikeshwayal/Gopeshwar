export default function Footer() {
  return (
    <footer className="bg-[#578e7e] text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Branding Column */}
          <div className="md:col-span-2 lg:col-span-1 mb-8 md:mb-0">
            <h1 className="font-cinzel text-3xl mb-4">Gopeshwar</h1>
            <p className="font-serif italic text-gray-200">
              "Nurturing Health with the Purity of Milk"
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="font-cinzel text-lg mb-4">Company</h3>
            <nav className="flex flex-col space-y-2">
              <a href="/about" className="hover:text-gray-300 transition-colors">
                About Us
              </a>
              <a href="/products" className="hover:text-gray-300 transition-colors">
                Our Products
              </a>
              <a href="/sustainability" className="hover:text-gray-300 transition-colors">
                Sustainability
              </a>
              <a href="/careers" className="hover:text-gray-300 transition-colors">
                Careers
              </a>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="space-y-2">
            <h3 className="font-cinzel text-lg mb-4">Legal</h3>
            <nav className="flex flex-col space-y-2">
              <a href="/policy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
              <a href="/faq" className="hover:text-gray-300 transition-colors">
                FAQ
              </a>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-cinzel text-lg mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c.284-.178 8.029-5.58 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                </svg>
                <p className="text-gray-200">
                  Gopeshwar Dairy Pvt. Ltd.,<br />
                  123 Milk Lane,<br />
                  Dairy City, India
                </p>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
                </svg>
                <a href="tel:+919876543210" className="hover:text-gray-300 transition-colors">
                  +91-9876543210
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a href="mailto:info@gopeshwar.com" className="hover:text-gray-300 transition-colors">
                  info@gopeshwar.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social and Copyright Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988h-2.54v-2.89h2.54V9.845c0-2.508 1.492-3.89 3.777-3.89 1.093 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.344 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.318.975.975 1.256 2.242 1.318 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.343 2.633-1.318 3.608-.975.975-2.242 1.256-3.608 1.318-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.343-3.608-1.318-.975-.975-1.256-2.242-1.318-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.343-2.633 1.318-3.608.975-.975 2.242-1.256 3.608-1.318 1.266-.058 1.646-.07 4.85-.07M12 0C8.741 0 8.332.012 7.052.07 5.765.128 4.652.46 3.803 1.309c-.85.849-1.181 1.962-1.239 3.249C2.012 6.332 2 6.741 2 10s.012 3.668.07 4.948c.058 1.287.39 2.4 1.239 3.249.849.849 1.962 1.181 3.249 1.239 1.28.058 1.689.07 4.948.07s3.668-.012 4.948-.07c1.287-.058 2.4-.39 3.249-1.239.849-.849 1.181-1.962 1.239-3.249.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.058-1.287-.39-2.4-1.239-3.249-.849-.849-1.962-1.181-3.249-1.239C15.668.012 15.259 0 12 0z" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.954 4.569c-.885.385-1.83.647-2.825.764 1.014-.604 1.794-1.56 2.163-2.724-.949.562-2.005.971-3.127 1.194-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.207-4.92 4.917 0 .39.045.765.127 1.125-4.09-.205-7.719-2.163-10.148-5.144-.424.722-.667 1.56-.667 2.475 0 1.71.87 3.214 2.188 4.098-.807-.026-1.566-.247-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.316 0-.626-.031-.927-.088.627 1.956 2.444 3.379 4.6 3.421-1.684 1.319-3.809 2.106-6.102 2.106-.395 0-.785-.024-1.17-.067 2.179 1.392 4.768 2.208 7.557 2.208 9.054 0 14.004-7.504 14.004-14.003 0-.213-.005-.425-.015-.636.961-.694 1.796-1.56 2.457-2.548l-.047-.02z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-300 text-center md:text-right">
              © {new Date().getFullYear()} Gopeshwar Dairy Pvt. Ltd.<br />
              All rights reserved. | Made with ♥ in India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}