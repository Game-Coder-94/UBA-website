function renderNavbar() {
  return `
    <nav class="bg-gradient-to-r from-teal-900 via-gov-primary to-teal-900 text-white shadow-lg sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          <div class="flex items-center space-x-4">
            <div class="flex-shrink-0 bg-white p-1 rounded">
               <img src="/images/logos/UBA_Logo.png" alt="UBA SVPCET Logo" class="h-12 w-auto" onerror="this.src='https://placehold.co/100x100?text=UBA+Logo'">
            </div>
            <div class="hidden md:block">
              <div class="text-sm font-light text-gov-accent tracking-wider">UNNAT BHARAT ABHIYAN</div>
              <div class="text-lg font-bold leading-tight">SVPCET NAGPUR</div>
            </div>
          </div>
          <div class="hidden lg:block">
            <div class="ml-10 flex items-center space-x-8">
              <a href="/index.html" class="shine-effect relative group px-1 py-2 text-sm font-medium inline-flex items-center transition-colors hover:text-white">
                Home
                <span class="absolute left-0 bottom-1 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              <div class="relative group">
                <a href="/static/about-uba.html" class="shine-effect relative px-1 py-2 text-sm font-medium inline-flex items-center transition-colors hover:text-white">
                  About <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                  <span class="absolute left-0 bottom-1 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <div class="absolute left-0 pt-2 w-48 hidden group-hover:block transition-all duration-200 z-50">
                  <div class="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1" role="menu">
                    <a href="/static/about-uba.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About UBA</a>
                    <a href="/static/about-svpcet.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">About SVPCET UBA</a>
                    <a href="/static/team.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Coordinators & Team</a>
                  </div>
                </div>
              </div>

              <a href="/static/villages.html" class="shine-effect relative group px-1 py-2 text-sm font-medium inline-flex items-center transition-colors hover:text-white">
                Villages
                <span class="absolute left-0 bottom-1 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/static/projects.html" class="shine-effect relative group px-1 py-2 text-sm font-medium inline-flex items-center transition-colors hover:text-white">
                Projects
                <span class="absolute left-0 bottom-1 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              <div class="relative group">
                 <a href="/static/participation.html" class="shine-effect relative px-1 py-2 text-sm font-medium inline-flex items-center transition-colors hover:text-white">
                  Participation <svg class="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                  <span class="absolute left-0 bottom-1 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
                <div class="absolute left-0 pt-2 w-48 hidden group-hover:block transition-all duration-200 z-50">
                  <div class="rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1" role="menu">
                    <a href="/static/participation.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Student Corner</a>
                    <a href="/static/events.html" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Events & Visits</a>
                  </div>
                </div>
              </div>

              <a href="/static/gallery.html" class="shine-effect relative group px-1 py-2 text-sm font-medium inline-flex items-center transition-colors hover:text-white">
                Gallery
                <span class="absolute left-0 bottom-1 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/static/downloads.html" class="shine-effect relative group px-1 py-2 text-sm font-medium inline-flex items-center transition-colors hover:text-white">
                Downloads
                <span class="absolute left-0 bottom-1 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/static/news.html" class="shine-effect relative group px-1 py-2 text-sm font-medium inline-flex items-center transition-colors hover:text-white">
                News
                <span class="absolute left-0 bottom-1 w-0 h-0.5 bg-lime-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="/static/contact.html" class="shine-effect bg-gov-accent hover:bg-orange-600 text-white px-6 py-2 rounded shadow-lg transition-all transform hover:-translate-y-0.5 font-bold">Contact</a>
            </div>
          </div>
          <div class="-mr-2 flex lg:hidden">
            <button type="button" class="bg-green-800 inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-green-700 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false" id="mobile-menu-btn">
              <span class="sr-only">Open main menu</span>
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="hidden lg:hidden bg-gradient-to-r from-teal-900 via-gov-primary to-teal-900 border-t border-green-800" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/index.html" class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-green-700">Home</a>
          <a href="/static/about-uba.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-green-700">About UBA</a>
          <a href="/static/about-svpcet.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-green-700">About SVPCET</a>
          <a href="/static/villages.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-green-700">Villages</a>
          <a href="/static/projects.html" class="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-green-700">Projects</a>
          <a href="/static/contact.html" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gov-accent hover:bg-orange-600 mt-4">Contact Us</a>
        </div>
      </div>
    </nav>
  `;
}

function renderFooter() {
  return `
      <footer class="bg-[#144218] text-white pt-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div class="col-span-1 md:col-span-2">
              <h3 class="text-xl font-bold mb-4 text-gov-accent">SVPCET UBA Cell</h3>
              <p class="text-gray-300 mb-4 max-w-sm">
                St. Vincent Pallotti College of Engineering & Technology, Nagpur.<br>
                Empowering rural India through technological intervention and community participation under Unnat Bharat Abhiyan.
              </p>
              <div class="flex space-x-4 mt-6">
                 <a href="#" class="text-gray-400 hover:text-white transition-colors"><span class="sr-only">Facebook</span>FB</a>
                 <a href="#" class="text-gray-400 hover:text-white transition-colors"><span class="sr-only">Twitter</span>TW</a>
                 <a href="#" class="text-gray-400 hover:text-white transition-colors"><span class="sr-only">LinkedIn</span>LI</a>
              </div>
            </div>
            
            <div>
              <h3 class="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
              <ul class="space-y-2 text-gray-400">
                <li><a href="/static/about-uba.html" class="hover:text-white transition-colors">About UBA</a></li>
                <li><a href="/static/villages.html" class="hover:text-white transition-colors">Adopted Villages</a></li>
                <li><a href="/static/projects.html" class="hover:text-white transition-colors">Projects</a></li>
                <li><a href="/static/gallery.html" class="hover:text-white transition-colors">Gallery</a></li>
                <li><a href="/static/contact.html" class="hover:text-white transition-colors">Contact</a></li>
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
        </div>
        
        <div class="w-full bg-[#f4b400] text-black text-center py-2 text-xs font-bold tracking-wider">
          COPYRIGHT © ${new Date().getFullYear()} ALL RIGHTS RESERVED | DESIGNED BY UBA STUDENTS TEAM CE DEPT | SVPCET
        </div>
      </footer>
    `;
}

function setupStaticSite() {
  const navbarContainer = document.getElementById('navbar');
  if (navbarContainer) {
    navbarContainer.innerHTML = renderNavbar();
  }
  const footerContainer = document.getElementById('footer');
  if (footerContainer) {
    footerContainer.innerHTML = renderFooter();
  }

  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
}

document.addEventListener('DOMContentLoaded', setupStaticSite);
