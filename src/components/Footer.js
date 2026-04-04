
export function renderFooter() {
  return `
      <footer class="bg-gray-900 text-white pt-12 pb-6">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="col-span-1 md:col-span-2">
              <h3 class="text-xl font-bold mb-4 text-gov-accent">SVPCET UBA Cell</h3>
              <p class="text-gray-300 mb-4 max-w-sm">
                St. Vincent Pallotti College of Engineering & Technology, Nagpur.<br>
                Empowering rural India through technological intervention and community participation under Unnat Bharat Abhiyan.
              </p>
              <div class="flex space-x-4 mt-6">
                 <!-- Social Placeholders -->
                 <a href="#" class="text-gray-400 hover:text-white transition-colors"><span class="sr-only">Facebook</span>FB</a>
                 <a href="#" class="text-gray-400 hover:text-white transition-colors"><span class="sr-only">Twitter</span>TW</a>
                 <a href="#" class="text-gray-400 hover:text-white transition-colors"><span class="sr-only">LinkedIn</span>LI</a>
              </div>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
              <ul class="space-y-2 text-gray-400">
                <li><a href="/about-uba.html" class="hover:text-white transition-colors">About UBA</a></li>
                <li><a href="/villages.html" class="hover:text-white transition-colors">Adopted Villages</a></li>
                <li><a href="/projects.html" class="hover:text-white transition-colors">Projects</a></li>
                <li><a href="/gallery.html" class="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="/contact.html" class="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
  
            <div>
              <h3 class="text-lg font-semibold mb-4 text-gray-200">Contact Us</h3>
              <ul class="space-y-3 text-gray-400">
                <li class="flex items-start">
                  <span class="mr-2">📍</span>
                  <span>SVPCET, Gavsi Manapur, Wardha Road, Nagpur - 441108</span>
                </li>
                <li class="flex items-center">
                  <span class="mr-2">📧</span>
                  <a href="mailto:uba@stvincentngp.edu.in" class="hover:text-white">uba@stvincentngp.edu.in</a>
                </li>
                <li class="flex items-center">
                  <span class="mr-2">📞</span>
                  <span>+91 123 456 7890</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div class="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
            <p>&copy; ${new Date().getFullYear()} SVPCET UBA Cell. All rights reserved.</p>
            <p class="mt-2 text-xs">A Government of India Initiative</p>
          </div>
        </div>
      </footer>
    `;
}

export function setupFooter() {
  const footerContainer = document.getElementById('footer');
  if (footerContainer) {
    footerContainer.innerHTML = renderFooter();
  }
}

