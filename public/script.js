// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
darkModeToggle.setAttribute('aria-label', 'Toggle dark mode');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage ? (localStorage.getItem('theme') || 'light') : 'light';
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


const kelasData = [
  {
    title: "Ebook Membuat Website Wordpress Tanpa Biaya",
    desc: "Panduan lengkap membuat website dengan WordPress tanpa biaya hosting, domain dan ssl 100% gratis no coding",
    img: "./assets/ebook/ebook-free-wordpress-website.webp",
    tags: [
      { name: "wordpress", color: "blue" },
      { name: "hosting", color: "indigo" },
      { name: "newbie", color: "green" }
    ],
    price: {
      original: "Rp 99.000",
      discount: "67%",
      final: "Rp 29.000"
    },
        button: true,
        link: "https://qiblat-digital.myscalev.com/ebook-build-wordpress-for-free"
  },
  {
    title: "Elementor Pro Lifetime GNU License",
    desc: "Dapatkan Elementor Pro Lifetime GNU License seumur hidup untuk unlimited website, 100% aman, plus tutorial lengkap cara install",
    img: "./assets/ebook/elementor-pro.webp",
    tags: [
      { name: "tools", color: "cyan" },
      { name: "wordpress", color: "red" }
      ],
     price: {
      original: "Rp 6.000.000",
      discount: "37%",
      final: "Rp 29.000"
    },
    button: true,
    link: "https://qiblat-digital.myscalev.com/elementor-pro-leftime"
    
  },
  {
    title: "n8n Workflow Template - Asisten keuangan Cerdas AI",
    desc: "Solusi otomasi pencatatan dan pengelolaan keuangan pribadi atau bisnis kecil Anda. Cukup chat atau kirim foto struk",
    img: "./assets/ebook/n8n-template-finance.webp",
    tags: [
      { name: "n8n", color: "purple" },
      { name: "ai", color: "orange" }
      ],
     price: {
      original: "Rp 199.000",
      discount: "47%",
      final: "Rp 29.000"
    },
    button: true,
    link: "https://qiblat-digital.myscalev.com/template-n8n-1"
  },
  {
    title: "Prompt Master Pack ",
    desc: " 2800+ Prompt AI Siap Pakai untuk Semua Profesi, Tool produktivitas modern yang bisa bantu kamu kerja lebih cepat, lebih cerdas, dan lebih strategis.",
    img: "./assets/ebook/bankprompt.webp",
    tags: [
      { name: "prompt", color: "teal" },
      { name: "ai", color: "indigo" }
      ],
     price: {
      original: "Rp 59.000",
      discount: "47%",
      final: "Rp 15.000"
    },
    button: true,
    link: "http://lynk.id/qidigi/dwvdxqqlz4vq"
  },
  {
    title: "Meta Ads 2025: Strategi Pemasaran Media Sosial",
    desc: "Pelajari cara efektif memasarkan produk Anda di Facebook, Instagram, dan threads dengan Meta Ads",
    img: "./assets/ebook/meta-ads-ebook.webp",
    tags: [
      { name: "marketing", color: "red" },
      { name: "meta ads", color: "blue" }
      ],
     price: {
      original: "Rp 599.000",
      discount: "67%",
      final: "Rp 49.000"
    },
    button: true,
    link: "https://example.com/data-analysis-python"
  },
  // {
  //   title: "UI/UX Design Mastery",
  //   desc: "Desain antarmuka yang user-friendly dan menarik",
  //   img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=200&fit=crop",
  //   tags: [
  //     { name: "Design", color: "pink" }
  //     ],
  //    price: {
  //     original: "Rp 199.000",
  //     discount: "37%",
  //     final: "Rp 79.000"
  //   },
  //   button: true,
  //   link: "https://example.com/data-analysis-python"
  // },
  // {
  //   title: "Machine Learning Basics",
  //   desc: "Pengenalan machine learning dan implementasinya",
  //   img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
  //   tags: [
  //     { name: "AI/ML", color: "yellow" }
  //     ],
  //    price: {
  //     original: "Rp 199.000",
  //     discount: "37%",
  //     final: "Rp 29.000"
  //   },
  //   button: true,
  //   link: "https://example.com/data-analysis-python"
  // }
];

// Helper untuk warna tag Tailwind
function tagClass(color) {
  const map = {
    blue: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    green: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
    purple: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200",
    red: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
    pink: "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200",
    yellow: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
    orange: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
    indigo: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200",
    teal: "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200",
    cyan: "bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200"
  };
  return map[color] || "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200";
}

// const discount = (original, discount) => {
//     const originalPrice = parseFloat(original.replace(/[^0-9.-]+/g, ""));
// }

const discountPercentage = (original, final) => {
    const originalNum = parseInt(original.replace(/[^0-9]+/g, ""), 10);
    const finalNum = parseInt(final.replace(/[^0-9]+/g, ""), 10);
    if (!originalNum || !finalNum) return 0;
    const percentage = ((originalNum - finalNum) / originalNum) * 100;
    return Math.round(percentage * 10) / 10; // satu angka di belakang koma
}

function renderKelas() {
  const container = document.getElementById('kelas-list');
  container.innerHTML = '';
  kelasData.forEach((kelas, idx) => {
    const tagsHtml = kelas.tags.map(
      tag => `<span class="inline-block ${tagClass(tag.color)} text-xs px-2 py-1 rounded-full mb-2 mr-1">${tag.name}</span>`
    ).join('');
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
        <img  src="${kelas.img}" alt="${kelas.title}" class="w-full h-60 object-cover rounded-t-lg" />
        <div class="p-4">
          ${tagsHtml}
          <h3 class="font-bold mb-2">${kelas.title}</h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm">${kelas.desc}</p>
        </div>
        ${kelas.price && kelas.button ? `
        <div class="px-2">
          <hr class="border-gray-200 dark:border-gray-700" />
        </div>
        <div class="flex justify-between items-end p-4">
          ${priceHtml}
          ${buttonHtml}
        </div>
        ` : ''}
      </div>
    `;
  });
}

document.addEventListener('DOMContentLoaded', renderKelas);


// FAQ Accordion
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

// Mobile Navigation
const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Remove active class from all nav items
        navItems.forEach(navItem => {
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
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#') return; // Skip if href is just '#'
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
observer.observe(section);
});

// Social Media Data
const socialLinks = [
    {
        href: "https://twitter.com/soimkmpbg",
        color: "text-blue-600",
        label: "Twitter",
        svg: `<svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>`
    },
    {
        href: "https://instagram.com/soimkmpbg",
        color: "text-pink-600",
        label: "Instagram",
        svg: `<svg class="w-5 h-5 text-pink-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`
    },
    {
        href: "https://linkedin.com/in/soimkmpbg",
        color: "text-blue-500",
        label: "LinkedIn",
        svg: `<svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`
    },
    // {
    //     href: "https://wa.me/6282135691112",
    //     color: "text-green-600",
    //     label: "WhatsApp",
    //     svg: `<svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085"/></svg>`
    // }
];

// Render Social Media Links
const socialLinksContainer = document.getElementById('social-links');
if (socialLinksContainer) {
    socialLinksContainer.innerHTML = socialLinks.map(link => `
        <a href="${link.href}" target="_blank" rel="noopener" aria-label="${link.label}" class="p-2 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 border dark:border-gray-700">
            ${link.svg}
        </a>
    `).join('');
}

// Best Seller Data
const projects = [
  {
    title: "Download Video dari sosmed dengan mudah",
    href: "https://download.qiblat.my.id/",
    imgSrc: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=100&fit=crop&crop=center", // Download/social media themed
    imgAlt: "Ikon Download Video Sosial Media"
  },
  {
    title: "Qiblat Creator - Powerfull tools for Content creator",
    href: "https://dashboard.qiblat.my.id/",
    imgSrc: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=100&h=100&fit=crop&crop=center", // Creative tools/design themed
    imgAlt: "Ikon Qiblat Creator"
  },
  {
    title: "My Portfolio",
    href: "https://mylink.ct.ws/soim",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center", // Professional person/portfolio themed
    imgAlt: "Ikon Portfolio Soim"
  }
];

// Render Best Seller List
const bestSellerList = document.getElementById('best-seller-list');
if (bestSellerList) {
    bestSellerList.innerHTML = projects.map(item => `
        <a href="${item.href}" role="link" aria-label="${item.title}" class="block bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border dark:border-gray-700">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <img 
                        src="${item.imgSrc}" 
                        alt="${item.imgAlt}" 
                        class="w-8 h-8 mr-3 rounded-lg object-contain" 
                        loading="lazy"
                        width="24" 
                        height="24">
                    <span class="font-medium">${item.title}</span>
                </div>
                <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </div>
        </a>
    `).join('');
}




