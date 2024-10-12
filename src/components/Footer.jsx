export default function Footer(){
    return(
      <footer className="bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                Empowering rural communities through innovative telemedicine solutions and corporate partnerships.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <address className="text-gray-700 not-italic">
                <p className="mb-2">123 Healthcare Avenue</p>
                <p className="mb-2">New Delhi, India 110001</p>
                <p className="mb-2">
                  <span className="font-bold">Phone:</span> +91 11 1234 5678
                </p>
                <p>
                  <span className="font-bold">Email:</span> info@csrhealthcare.org
                </p>
              </address>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-900  hover:text-gray-500 transition duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                {/* Add more social media icons as needed */}
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-black text-center text-gray-800">
            <p>&copy; 2024 CSR Healthcare Initiative. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}