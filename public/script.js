// Import static data
import { kelasData, productCardData, testimoniData, faqData, socialLinks, projects } from '/data.js';

function renderFAQ() {
  const container = document.getElementById('faq-list');
  if (!container) return;
  container.innerHTML = faqData.map((faq, idx) => `
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md border dark:border-gray-700">
      <button class="w-full p-4 text-left flex justify-between items-center faq-toggle" data-target="faq${idx}">
        <span class="font-medium">${faq.question}</span>
        <svg class="w-5 h-5 transform transition-transform faq-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div id="faq${idx}" class="faq-content hidden p-4 pt-0">
        <p class="text-gray-600 dark:text-gray-400">${faq.answer}</p>
      </div>
    </div>
  `).join('');
  // Re-attach accordion logic after rendering
  attachFAQAccordion();
}

function attachFAQAccordion() {
  const faqToggles = document.querySelectorAll('.faq-toggle');
  faqToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const targetId = toggle.getAttribute('data-target');
      const content = document.getElementById(targetId);
      const icon = toggle.querySelector('.faq-icon');
      const isExpanded = content.classList.contains('hidden');
      toggle.setAttribute('aria-expanded', !isExpanded);
      content.setAttribute('aria-hidden', isExpanded);
      // Close all other FAQ items
      faqToggles.forEach(otherToggle => {
        if (otherToggle !== toggle) {
          const otherTargetId = otherToggle.getAttribute('data-target');
          const otherContent = document.getElementById(otherTargetId);
          const otherIcon = otherToggle.querySelector('.faq-icon');
          otherContent.classList.add('hidden');
          otherContent.setAttribute('aria-hidden', 'true');
          otherToggle.setAttribute('aria-expanded', 'false');
          otherIcon.style.transform = 'rotate(0deg)';
        }
      });
      // Toggle current FAQ item
      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        content.setAttribute('aria-hidden', 'false');
        icon.style.transform = 'rotate(180deg)';
      } else {
        content.classList.add('hidden');
        content.setAttribute('aria-hidden', 'true');
        icon.style.transform = 'rotate(0deg)';
      }
    });
  });
}

function renderProductCards() {
  const container = document.getElementById('product-card-list');
  if (!container) return;
  container.innerHTML = productCardData.map(card => `
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border dark:border-gray-700">
      <img src="${card.img}" alt="${card.alt}" loading="lazy" class="w-full h-40 object-cover rounded-t-lg" />
      <div class="p-4">
        <span class="inline-block ${tagClass(card.tag.color)} text-xs px-2 py-1 rounded-full mb-2">${card.tag.name}</span>
        <h3 class="font-bold mb-2">${card.title}</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm">${card.desc}</p>
      </div>
    </div>
  `).join('');
}


function renderTestimoni() {
  const container = document.getElementById('testimoni-list');
  if (!container) return;
  container.innerHTML = testimoniData.map(testi => `
    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border dark:border-gray-700">
      <div class="flex items-center mb-4">
        <img src="${testi.img}" alt="${testi.alt}" loading="lazy" class="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 class="font-bold">${testi.name}</h4>
          <p class="text-gray-600 dark:text-gray-400 text-sm">${testi.role}</p>
        </div>
      </div>
      <p class="text-gray-700 dark:text-gray-300 italic">"${testi.text}"</p>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderKelas();
  renderProductCards();
  renderTestimoni();
  renderFAQ();
});
// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage
  ? localStorage.getItem('theme') || 'light'
  : 'light';
if (currentTheme === 'dark') {
  html.classList.add('dark');
}

darkModeToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  const theme = html.classList.contains('dark') ? 'dark' : 'light';
  if (localStorage) {
    localStorage.setItem('theme', theme);
  }
});


// Helper untuk warna tag Tailwind
function tagClass(color) {
  const map = {
    blue: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
    green: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
    purple:
      'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
    red: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200',
    pink: 'bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200',
    yellow:
      'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
    orange:
      'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
    indigo:
      'bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200',
    teal: 'bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200',
    cyan: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200',
  };
  return (
    map[color] ||
    'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200'
  );
}

// const discount = (original, discount) => {
//     const originalPrice = parseFloat(original.replace(/[^0-9.-]+/g, ""));
// }

const discountPercentage = (original, final) => {
  const originalNum = parseInt(original.replace(/[^0-9]+/g, ''), 10);
  const finalNum = parseInt(final.replace(/[^0-9]+/g, ''), 10);
  if (!originalNum || !finalNum) return 0;
  const percentage = ((originalNum - finalNum) / originalNum) * 100;
  return Math.round(percentage * 10) / 10; // satu angka di belakang koma
};

function renderKelas() {
  const container = document.getElementById('kelas-list');
  container.innerHTML = '';
  kelasData.forEach((kelas, idx) => {
    const tagsHtml = kelas.tags
      .map(
        (tag) =>
          `<span class="inline-block ${tagClass(
            tag.color
          )} text-xs px-2 py-1 rounded-full mb-2 mr-1">${tag.name}</span>`
      )
      .join('');
    let priceHtml = '';
    let buttonHtml = '';
    if (kelas.price && kelas.button) {
      priceHtml = `
        <div class="flex flex-col">
          <div class="flex items-center gap-1 ">
            <span class="text-gray-400 dark:text-gray-500 line-through text-xs font-medium">
              ${kelas.price.original}
            </span>
            <span class="bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 text-xs font-bold px-[3px] rounded-md">
              ${discountPercentage(kelas.price.original, kelas.price.final)}%
            </span>
          </div>
          <h5 class="font-bold text-lg text-gray-900 dark:text-white">
            ${kelas.price.final}
          </h5>
        </div>
      `;
      buttonHtml = `
        <a href="${kelas.link}" target="_blank" rel="noopener noreferrer" aria-label="Checkout ${kelas.title}"
          class="group relative bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white font-semibold text-sm py-1 px-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out">
          <div class="flex"> 
            <svg class="text-white z-10 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="#FFFFFF"
                d="M351.9 329.506H206.81l-3.072-12.56H368.16l26.63-116.019-217.23-26.04-9.952-58.09h-50.4v21.946h31.894l35.233 191.246a32.927 32.927 0 1 0 36.363 21.462h100.244a32.825 32.825 0 1 0 30.957-21.945zM181.427 197.45l186.51 22.358-17.258 75.195H198.917z"
                data-name="Shopping Cart" />
            </svg>
            <span class="relative z-10">Checkout</span>
          </div>
          <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-300"></div>
        </a>
      `;
    }
    container.innerHTML += `
      <div class="flex-none w-64 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border dark:border-gray-700 snap-start">
        <img  src="${kelas.img}" alt="${
      kelas.title
    }" class="w-full h-60 object-cover rounded-t-lg" />
        <div class="p-4">
          ${tagsHtml}
          <h3 class="font-bold mb-2">${kelas.title}</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">${kelas.desc}</p>
        </div>
        ${
          kelas.price && kelas.button
            ? `
        <div class="px-2">
          <hr class="border-gray-200 dark:border-gray-700" />
        </div>
        <div class="flex justify-between items-end p-4">
          ${priceHtml}
          ${buttonHtml}
        </div>
        `
            : ''
        }
      </div>
    `;
  });
}

// ...existing code...

// FAQ Accordion
const faqToggles = document.querySelectorAll('.faq-toggle');

faqToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const targetId = toggle.getAttribute('data-target');
    const content = document.getElementById(targetId);
    const icon = toggle.querySelector('.faq-icon');
    const isExpanded = content.classList.contains('hidden');
    toggle.setAttribute('aria-expanded', !isExpanded);
    content.setAttribute('aria-hidden', isExpanded);

    // Close all other FAQ items
    faqToggles.forEach((otherToggle) => {
      if (otherToggle !== toggle) {
        const otherTargetId = otherToggle.getAttribute('data-target');
        const otherContent = document.getElementById(otherTargetId);
        const otherIcon = otherToggle.querySelector('.faq-icon');

        otherContent.classList.add('hidden');
        otherContent.setAttribute('aria-hidden', 'true');
        otherToggle.setAttribute('aria-expanded', 'false');
        otherIcon.style.transform = 'rotate(0deg)';
      }
    });

    // Toggle current FAQ item
    if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      content.setAttribute('aria-hidden', 'false');
      icon.style.transform = 'rotate(180deg)';
    } else {
      content.classList.add('hidden');
      content.setAttribute('aria-hidden', 'true');
      icon.style.transform = 'rotate(0deg)';
    }
  });
});

// Mobile Navigation
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active class from all nav items
    navItems.forEach((navItem) => {
      navItem.classList.remove('active', 'text-blue-600', 'dark:text-blue-400');
      navItem.classList.add('text-gray-600', 'dark:text-gray-400');
      navItem.removeAttribute('aria-current');
    });

    // Add active class to clicked item
    item.classList.add('active', 'text-blue-600', 'dark:text-blue-400');
    item.classList.remove('text-gray-600', 'dark:text-gray-400');
    item.setAttribute('aria-current', 'page');
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return; // Skip if href is just '#'
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach((section) => {
  observer.observe(section);
});


// Render Social Media Links
const socialLinksContainer = document.getElementById('social-links');
if (socialLinksContainer) {
  socialLinksContainer.innerHTML = socialLinks
    .map(
      (link) => `
        <a href="${link.href}" target="_blank" rel="noopener" aria-label="${link.label}" class="group relative p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border dark:border-gray-700">
            ${link.svg}
            <span class="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded-md bg-gray-900 text-white text-xs opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300 z-20 shadow-lg">${link.label}</span>
        </a>
    `
    )
    .join('');
}


// Render project List
const bestSellerList = document.getElementById('project-list');
if (bestSellerList) {
  bestSellerList.innerHTML = projects
    .map(
      (item) => `
        <a href="${item.href}" role="link" aria-label="${item.title}" class="group relative block bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden">
            <!-- Gradient overlay effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <!-- Content -->
            <div class="relative flex items-center justify-between">
                <div class="flex items-center">
                    <!-- Enhanced image container -->
                    <div class="relative mr-4">
                        <div class="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                        <img 
                            src="${item.imgSrc}" 
                            alt="${item.imgAlt}" 
                            class="relative w-10 h-10 rounded-xl object-cover shadow-md group-hover:shadow-lg transition-shadow duration-300" 
                            loading="lazy"
                            width="40" 
                            height="40">
                    </div>
                    
                    <!-- Title with enhanced typography -->
                    <div class="flex-1">
                        <span class="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-sm md:text-base leading-tight">${item.title}</span>
                        <p class="text-gray-600 dark:text-gray-400 mt-1 text-xs md:text-sm">${item.description}</p>
                        <!-- Enhanced underline effect -->
                        <div class="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-500 mt-1"></div>
                    </div>
                </div>
                
                <!-- Enhanced arrow icon -->
                <div class="flex-shrink-0 ml-3">
                    <div class="relative">
                        <div class="absolute inset-0 bg-blue-100 dark:bg-blue-900 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-110"></div>
                        <svg class="relative w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                </div>
            </div>
            
            <!-- Subtle shine effect -->
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </a>
    `
    )
    .join('');
}
