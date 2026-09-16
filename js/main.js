/**
 * ====================================================================
 * MAIN CLIENT ENGINE: BILINGUAL, CONFIG INJECTION & INTERACTIVE UX
 * ====================================================================
 * Fully static, zero backend, zero external framework dependencies.
 * Compatible with GitHub Pages, relative routing, and offline viewing.
 */

// Global Dictionary for English (EN) and Bengali (BN)
const I18N = {
  en: {
    // Navigation
    navHome: "Home",
    navAbout: "About Us",
    navJobs: "Jobs",
    navServices: "Services",
    navDestinations: "Destinations",
    navProcess: "How We Work",
    navWhyUs: "Why Choose Us",
    navStories: "Success Stories",
    navFaq: "FAQ",
    navTransparency: "Fraud Awareness",
    navContact: "Contact",
    navApplyNow: "Apply Now",
    navVerifyLicense: "Verify License",

    // Topbar
    topbarHotline: "Hotline:",
    topbarEmail: "Email:",
    topbarRl: "RL No:",

    // Common Badges & Labels
    badgeOfficial: "Licensed Agency",
    badgeVerified: "Verified Order",
    badgeZeroFraud: "Zero Tolerance for Fraud",
    statusOpen: "Applications Open",
    statusClosingSoon: "Closing Soon",
    statusClosed: "Applications Closed",
    statusUpcoming: "Upcoming Vacancy",

    // CTAs & Buttons
    btnViewJobs: "View Available Jobs",
    btnLearnMore: "Learn More",
    btnContactUs: "Contact Us",
    btnApplyGoogleForm: "Apply via Google Form",
    btnApplyWhatsApp: "Apply via WhatsApp",
    btnApplyEmail: "Apply via Email",
    btnCallNow: "Call Official Line",
    btnViewDetails: "View Details",
    btnResetFilters: "Reset Filters",
    btnSearch: "Search Vacancies",
    btnVerifyOnline: "Verify License Portal",
    btnBackToJobs: "← Back to All Vacancies",

    // Job Search & Filters
    searchPlaceholder: "Search by trade, skill, or keyword...",
    filterCountry: "All Countries",
    filterCategory: "All Sectors & Categories",
    filterStatus: "All Vacancy Statuses",
    jobsFoundCount: "vacancies found",
    noJobsFoundTitle: "No Vacancies Match Your Filter",
    noJobsFoundText: "No active job orders currently match your chosen criteria. Please reset filters or contact our office for upcoming government-approved demands.",

    // Job Card Details
    lblSalary: "Salary:",
    lblVacancy: "Vacancies:",
    lblExperience: "Experience:",
    lblDeadline: "Deadline:",
    lblEmployer: "Employer:",
    lblContract: "Contract Term:",
    lblHours: "Working Hours:",
    lblAccommodation: "Accommodation:",
    lblFood: "Food:",
    lblOvertime: "Overtime:",
    lblMedical: "Medical:",
    lblTransport: "Transport:",

    // Trust & Licensing
    licenseHeading: "Official Government Licensing & Verification",
    licenseSub: "Our agency operates strictly under government authorization and regulatory compliance. We encourage all candidates to verify our license through the official government portal.",
    licenseCheckNotice: "Always verify the recruiting license (RL) before making any career decisions.",

    // How to Apply Section
    applyHeading: "How to Apply for an Overseas Position",
    applySub: "Follow our transparent 5-step application process. All official applications are received only through our verified external channels.",
    step1Title: "1. Choose a Verified Vacancy",
    step1Desc: "Browse our active job listings and verify that your trade experience, age, and passport meet the job specifications.",
    step2Title: "2. Review Legal Requirements",
    step2Desc: "Check trade qualification, medical guidelines (GAMCA), and legal documentation required by the destination country.",
    step3Title: "3. Submit via Official Channel",
    step3Desc: "Apply through our official Google Form, WhatsApp recruitment line, or official email. Never contact unauthorized intermediaries.",
    step4Title: "4. Document Verification & Trade Test",
    step4Desc: "Eligible candidates are invited for technical skill assessment, interview, and credential authentication.",
    step5Title: "5. Pre-Departure & Deployment",
    step5Desc: "Government clearance (BMET smart card), mandatory briefing, visa stamping, and scheduled departure.",

    // Candidate Safety / Anti-Fraud
    fraudHeading: "Candidate Safety & Anti-Fraud Notice",
    fraudSub: "Protecting migrant workers from fraudulent agents, unauthorized middlemen, and fake job offers is our highest priority.",
    fraudRule1: "Never pay cash or transfer money to personal bank accounts or bKash/Nagad numbers.",
    fraudRule2: "All fees and statutory government costs are processed with official money receipts.",
    fraudRule3: "We do not offer guaranteed visas or work permits without legal employer selection.",
    fraudRule4: "Always communicate strictly through the phone numbers and office address listed on this website.",

    // Footer
    footerAboutTitle: "About The Agency",
    footerLinksTitle: "Quick Navigation",
    footerJobsTitle: "Employment Sectors",
    footerSupportTitle: "Candidate Support",
    footerDisclaimer: "Job availability, salary, benefits, and recruitment timelines are subject to employer demand orders and sovereign labor regulations. No visa or job guarantee is promised without proper legal evaluation.",
    footerRights: "All Rights Reserved. Licensed Overseas Recruiting Agency."
  },

  bn: {
    // Navigation
    navHome: "হোম",
    navAbout: "আমাদের সম্পর্কে",
    navJobs: "চাকরির খবর",
    navServices: "সেবাসমূহ",
    navDestinations: "গন্তব্য দেশ",
    navProcess: "কাজের প্রক্রিয়া",
    navWhyUs: "আমাদের বৈশিষ্ট্য",
    navStories: "সাফল্যের গল্প",
    navFaq: "সাধারণ জিজ্ঞাসা",
    navTransparency: "প্রতারণা সচেতনতা",
    navContact: "যোগাযোগ",
    navApplyNow: "আবেদন করুন",
    navVerifyLicense: "লাইসেন্স যাচাই",

    // Topbar
    topbarHotline: "হটলাইন:",
    topbarEmail: "ইমেইল:",
    topbarRl: "আরএল নং:",

    // Common Badges & Labels
    badgeOfficial: "অনুমোদিত রিক্রুটিং এজেন্সি",
    badgeVerified: "যাচাইকৃত ডিমান্ড",
    badgeZeroFraud: "প্রতারণায় শূন্য সহনশীলতা",
    statusOpen: "আবেদন চলছে",
    statusClosingSoon: "শীঘ্রই শেষ হবে",
    statusClosed: "আবেদন বন্ধ",
    statusUpcoming: "আসন্ন নিয়োগ",

    // CTAs & Buttons
    btnViewJobs: "বর্তমান চাকরির খবর দেখুন",
    btnLearnMore: "বিস্তারিত জানুন",
    btnContactUs: "যোগাযোগ করুন",
    btnApplyGoogleForm: "গুগল ফর্মে আবেদন করুন",
    btnApplyWhatsApp: "হোয়াটসঅ্যাপে আবেদন করুন",
    btnApplyEmail: "ইমেইলে আবেদন করুন",
    btnCallNow: "অফিসে কল করুন",
    btnViewDetails: "বিস্তারিত দেখুন",
    btnResetFilters: "ফিল্টার রিসেট",
    btnSearch: "সার্চ করুন",
    btnVerifyOnline: "সরকারি পোর্টালে যাচাই",
    btnBackToJobs: "← সকল চাকরির তালিকায় ফিরুন",

    // Job Search & Filters
    searchPlaceholder: "কাজের নাম, পদবী বা দেশ লিখে খুঁজুন...",
    filterCountry: "সকল দেশ",
    filterCategory: "সকল ক্যাটাগরি ও ট্রেড",
    filterStatus: "সকল নিয়োগ স্ট্যাটাস",
    jobsFoundCount: "টি পদ পাওয়া গেছে",
    noJobsFoundTitle: "কোনো চাকরি পাওয়া যায়নি",
    noJobsFoundText: "আপনার নির্বাচিত মানদণ্ডের সাথে মিল রেখে কোনো সক্রিয় নিয়োগ পাওয়া যায়নি। ফিল্টার রিসেট করুন অথবা আমাদের অফিসে যোগাযোগ করুন।",

    // Job Card Details
    lblSalary: "বেতন:",
    lblVacancy: "পদ সংখ্যা:",
    lblExperience: "অভিজ্ঞতা:",
    lblDeadline: "আবেদনের শেষ তারিখ:",
    lblEmployer: "নিয়োগকারী প্রতিষ্ঠান:",
    lblContract: "চুক্তির মেয়াদ:",
    lblHours: "কাজের সময়:",
    lblAccommodation: "বাসস্থান:",
    lblFood: "খাবার:",
    lblOvertime: "ওভারটাইম:",
    lblMedical: "চিকিৎসা:",
    lblTransport: "যাতায়াত:",

    // Trust & Licensing
    licenseHeading: "সরকারি অনুমোদন ও লাইসেন্স যাচাইকরণ",
    licenseSub: "আমাদের এজেন্সি সরকারি বিধিমালা ও প্রবাসী কল্যাণ মন্ত্রণালয়ের নীতিমালা অনুযায়ী বৈধভাবে পরিচালিত। যেকোনো প্রার্থী সরাসরি সরকারি পোর্টালে আমাদের লাইসেন্স যাচাই করতে পারেন।",
    licenseCheckNotice: "বিদেশে যাওয়ার আগে অবশ্যই এজেন্সির বৈধ আরএল (রিক্রুটিং লাইসেন্স) নম্বর যাচাই করে নিশ্চিত হোন।",

    // How to Apply Section
    applyHeading: "বিদেশে কর্মসংস্থানের সঠিক আবেদন প্রক্রিয়া",
    applySub: "আমাদের স্বচ্ছ ও নিরাপদ ৫-ধাপের আবেদন প্রক্রিয়া অনুসরণ করুন। সকল আবেদন শুধুমাত্র আমাদের আনুষ্ঠানিক চ্যানেলের মাধ্যমেই গ্রহণ করা হয়।",
    step1Title: "১. সঠিক ও উপযোগী পদ নির্বাচন",
    step1Desc: "বর্তমান নিয়োগ বিজ্ঞপ্তিগুলো থেকে আপনার ট্রেড অভিজ্ঞতা ও যোগ্যতার সাথে মিল রেখে পদ নির্বাচন করুন।",
    step2Title: "২. প্রয়োজনীয় যোগ্যতা ও শর্তাবলি পড়ুন",
    step2Desc: "পাসপোর্টের মেয়াদ, ট্রেড টেস্ট এবং অনুমোদিত মেডিকেল টেস্টের (গামকা) শর্তসমূহ সতর্কতার সাথে যাচাই করুন।",
    step3Title: "৩. অফিশিয়াল চ্যানেলে আবেদন দাখিল",
    step3Desc: "আমাদের গুগল ফর্ম, অনুমোদিত হোয়াটসঅ্যাপ নম্বর বা অফিশিয়াল ইমেইলের মাধ্যমে আবেদন করুন। কোনো মধ্যস্বত্বভোগীর সাথে যোগাযোগ করবেন না।",
    step4Title: "৪. কাগজপত্র যাচাই ও ট্রেড টেস্ট",
    step4Desc: "যোগ্য প্রার্থীদের সাক্ষাৎকার, ব্যবহারিক ট্রেড টেস্ট এবং প্রাসঙ্গিক নথিপত্র যাচাইয়ের জন্য ডাকা হবে।",
    step5Title: "৫. বিএমইটি ছাড়পত্র ও গমন",
    step5Desc: "সরকারি নিয়ম অনুযায়ী ব্রিফিং, স্মার্ট কার্ড ও ভিসা নিশ্চিতের পর নির্ধারিত তারিখে বিদেশ গমন।",

    // Candidate Safety / Anti-Fraud
    fraudHeading: "প্রতারণা সচেতনতা ও প্রার্থীর নিরাপত্তা সংক্রান্ত বার্তা",
    fraudSub: "বিদেশ গমনেচ্ছু কর্মীদের অননুমোদিত দালাল, ভুয়া নিয়োগপত্র ও আর্থিক প্রতারণা থেকে রক্ষা করাই আমাদের সর্বোচ্চ অগ্রাধিকার।",
    fraudRule1: "কোনো ব্যক্তির ব্যক্তিগত ব্যাংক অ্যাকাউন্ট বা ব্যক্তিগত বিকাশ/নগদ নম্বরে টাকা লেনদেন করবেন না।",
    fraudRule2: "অফিশিয়াল ফি ও সরকারি খরচের ক্ষেত্রে সবসময় এজেন্সির বৈধ মানি রিসিপ্ট সংগ্রহ করুন।",
    fraudRule3: "নিয়োগকারী কর্তৃপক্ষের যাচাই ও অনুমোদন ছাড়া আমরা কোনো শতভাগ ভুয়া ভিসা গ্যারান্টি দিই না।",
    fraudRule4: "শুধুমাত্র এই ওয়েবসাইটে উল্লেখিত অফিশিয়াল ফোন, ইমেইল এবং ঠিকানায় যোগাযোগ করুন।",

    // Footer
    footerAboutTitle: "আমাদের সম্পর্কে",
    footerLinksTitle: "প্রয়োজনীয় লিংক",
    footerJobsTitle: "কাজের ক্ষেত্রসমূহ",
    footerSupportTitle: "প্রার্থী সহায়তা",
    footerDisclaimer: "চাকরির প্রাপ্যতা, বেতন এবং শর্তাবলি নিয়োগকারী দেশের শ্রম আইন এবং কোম্পানির চাহিদাপত্রের ওপর নির্ভরশীল। কোনো প্রকার অযৌক্তিক নিশ্চয়তা প্রদান করা হয় না।",
    footerRights: "সর্বস্বত্ব সংরক্ষিত। অনুমোদিত আন্তর্জাতিক রিক্রুটিং এজেন্সি।"
  }
};

// Application State
const AppState = {
  currentLang: localStorage.getItem('agency_site_lang') || 'bn',
  jobsFilter: {
    keyword: '',
    country: '',
    category: '',
    status: ''
  }
};

// Initialize Application once DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  injectSiteConfig();
  initMobileNav();
  initFaqAccordions();
  initFloatingWhatsApp();
  initJobSearchIfPresent();
  initJobDetailsIfPresent();
  initLicenseVerifyAction();
  highlightActiveNav();
});

/**
 * Initialize Language and set up language toggle buttons
 */
function initLanguage() {
  setLanguage(AppState.currentLang);

  // Setup click listeners for language switch buttons
  document.querySelectorAll('[data-action="set-lang"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      if (lang && (lang === 'en' || lang === 'bn')) {
        setLanguage(lang);
      }
    });
  });
}

/**
 * Set the current website language and re-render translated nodes
 */
function setLanguage(lang) {
  AppState.currentLang = lang;
  localStorage.setItem('agency_site_lang', lang);
  document.documentElement.lang = lang;

  if (lang === 'bn') {
    document.body.classList.add('lang-bn');
  } else {
    document.body.classList.remove('lang-bn');
  }

  // Update active state on language buttons
  document.querySelectorAll('[data-action="set-lang"]').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === lang) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });

  // Re-translate all elements with data-i18n
  const dict = I18N[lang] || I18N.en;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Re-translate placeholder attributes
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  // Re-inject site configuration (names, addresses, titles in appropriate language)
  injectSiteConfig();

  // Re-render jobs list if currently visible
  if (typeof renderJobsList === 'function' && document.getElementById('jobsContainer')) {
    renderJobsList();
  }

  // Re-render job details if on details page
  if (typeof renderJobDetailsView === 'function' && document.getElementById('jobDetailsContainer')) {
    renderJobDetailsView();
  }
}

/**
 * Inject Central Configuration into DOM elements
 */
function injectSiteConfig() {
  if (typeof SITE_CONFIG === 'undefined') return;

  // Simple text replacement
  document.querySelectorAll('[data-config]').forEach(el => {
    const field = el.getAttribute('data-config');
    let val = SITE_CONFIG[field];

    // Language variant if in Bengali
    if (AppState.currentLang === 'bn' && SITE_CONFIG[field + 'Bn']) {
      val = SITE_CONFIG[field + 'Bn'];
    }

    if (val !== undefined) {
      if (val === "REPLACE_ME" || val === "") {
        el.textContent = "REPLACE_ME";
        el.classList.add('config-placeholder');
      } else {
        el.textContent = val;
        el.classList.remove('config-placeholder');
      }
    }
  });

  // Attribute bindings (href, src, title)
  document.querySelectorAll('[data-config-link]').forEach(el => {
    const type = el.getAttribute('data-config-link');
    switch (type) {
      case 'phone':
        if (SITE_CONFIG.phoneRaw && SITE_CONFIG.phoneRaw !== 'REPLACE_ME') {
          el.setAttribute('href', `tel:${SITE_CONFIG.phoneRaw.replace(/\s+/g, '')}`);
        } else {
          el.setAttribute('href', 'contact.html');
          el.title = "Official phone number to be configured in js/config.js";
        }
        break;

      case 'whatsapp':
        if (SITE_CONFIG.whatsapp && SITE_CONFIG.whatsapp !== 'REPLACE_ME') {
          const defaultMsg = encodeURIComponent("Hello, I am inquiring about overseas recruitment opportunities.");
          el.setAttribute('href', `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}?text=${defaultMsg}`);
          el.setAttribute('target', '_blank');
          el.setAttribute('rel', 'noopener noreferrer');
        } else {
          el.setAttribute('href', 'contact.html');
          el.title = "WhatsApp number to be configured in js/config.js";
        }
        break;

      case 'email':
        if (SITE_CONFIG.email && SITE_CONFIG.email !== 'REPLACE_ME') {
          el.setAttribute('href', `mailto:${SITE_CONFIG.email}?subject=Overseas%20Recruitment%20Inquiry`);
        } else {
          el.setAttribute('href', 'contact.html');
          el.title = "Email to be configured in js/config.js";
        }
        break;

      case 'googleForm':
        if (SITE_CONFIG.googleFormUrl && SITE_CONFIG.googleFormUrl !== 'REPLACE_ME') {
          el.setAttribute('href', SITE_CONFIG.googleFormUrl);
          el.setAttribute('target', '_blank');
          el.setAttribute('rel', 'noopener noreferrer');
        } else {
          el.addEventListener('click', (e) => {
            e.preventDefault();
            showNoticeModal(
              AppState.currentLang === 'bn' ? "গুগল ফর্ম লিংক প্রয়োজন" : "Google Form Link Pending",
              AppState.currentLang === 'bn'
                ? "বিজ্ঞপ্তি: এজেন্সির অফিশিয়াল গুগল ফর্ম লিংকটি 'js/config.js' ফাইলে যোগ করুন। প্রার্থীরা এর মাধ্যমে অনলাইনে আবেদন করতে পারবেন।"
                : "Notice: Please add your agency's official Google Application Form link to 'js/config.js'. Candidates will then be directed to submit their applications."
            );
          });
        }
        break;

      case 'licenseVerify':
        el.addEventListener('click', (e) => {
          e.preventDefault();
          handleLicenseVerification();
        });
        break;

      case 'facebook':
        if (SITE_CONFIG.facebookUrl && SITE_CONFIG.facebookUrl !== 'REPLACE_ME') {
          el.setAttribute('href', SITE_CONFIG.facebookUrl);
          el.setAttribute('target', '_blank');
        } else {
          el.style.display = 'none';
        }
        break;

      case 'youtube':
        if (SITE_CONFIG.youtubeUrl && SITE_CONFIG.youtubeUrl !== 'REPLACE_ME') {
          el.setAttribute('href', SITE_CONFIG.youtubeUrl);
          el.setAttribute('target', '_blank');
        } else {
          el.style.display = 'none';
        }
        break;

      case 'linkedin':
        if (SITE_CONFIG.linkedinUrl && SITE_CONFIG.linkedinUrl !== 'REPLACE_ME') {
          el.setAttribute('href', SITE_CONFIG.linkedinUrl);
          el.setAttribute('target', '_blank');
        } else {
          el.style.display = 'none';
        }
        break;

      case 'googleMaps':
        if (SITE_CONFIG.googleMapsUrl && SITE_CONFIG.googleMapsUrl !== 'REPLACE_ME') {
          el.setAttribute('href', SITE_CONFIG.googleMapsUrl);
          el.setAttribute('target', '_blank');
        } else {
          el.setAttribute('href', 'contact.html');
        }
        break;
    }
  });
}

/**
 * Handle License Verification Button Action
 */
function handleLicenseVerification() {
  const isBn = AppState.currentLang === 'bn';
  const url = SITE_CONFIG.licenseVerificationUrl;

  if (url && url !== 'REPLACE_ME' && url.startsWith('http')) {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    showNoticeModal(
      isBn ? "সরকারি লাইসেন্স যাচাইকরণ নির্দেশিকা" : "Recruiting License Verification Guide",
      isBn
        ? `<strong>আরএল নম্বর: ${SITE_CONFIG.rlNumber}</strong><br><br>
           আমাদের রিক্রুটিং এজেন্সির বৈধতা সরকারি পোর্টালে যাচাই করতে পারবেন:<br>
           ১. জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো (BMET)-এর অফিশিয়াল ওয়েবসাইটে যান।<br>
           ২. 'Recruiting Agency List' বা লাইসেন্স ভেরিফিকেশন সেকশনে প্রবেশ করুন।<br>
           ৩. আমাদের লাইসেন্স নম্বর <code>${SITE_CONFIG.rlNumber}</code> লিখে অনুসন্ধান করুন।<br><br>
           <em>বিঃদ্রঃ এজেন্সি মালিক <code>js/config.js</code> ফাইলে সরাসরি সরকারি যাচাইকরণ লিংক যোগ করতে পারবেন।</em>`
        : `<strong>Recruiting License (RL): ${SITE_CONFIG.rlNumber}</strong><br><br>
           To verify the legitimacy and active status of our agency through the official government database:<br>
           1. Visit the Bureau of Manpower, Employment and Training (BMET) or relevant ministry portal.<br>
           2. Navigate to the "Authorized Recruiting Agencies List".<br>
           3. Search using our official RL Number: <code>${SITE_CONFIG.rlNumber}</code>.<br><br>
           <em>Note: The agency administrator can set the direct verification link inside <code>js/config.js</code>.</em>`
    );
  }
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuBtn');
  const drawer = document.getElementById('mobileNavDrawer');
  const backdrop = document.getElementById('mobileNavBackdrop');
  const closeBtn = document.getElementById('mobileMenuCloseBtn');

  if (!toggleBtn || !drawer) return;

  function openMenu() {
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('visible');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('visible');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    if (drawer.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMenu);
  }

  if (backdrop) {
    backdrop.addEventListener('click', closeMenu);
  }

  // Close drawer on link click
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeMenu();
    }
  });
}

/**
 * FAQ Accordion handling
 */
function initFaqAccordions() {
  const accordions = document.querySelectorAll('.faq-item');
  accordions.forEach(item => {
    const trigger = item.querySelector('.faq-question');
    const content = item.querySelector('.faq-answer');

    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Close all other accordions in the same group
      accordions.forEach(other => {
        if (other !== item) {
          const otherTrigger = other.querySelector('.faq-question');
          const otherContent = other.querySelector('.faq-answer');
          if (otherTrigger && otherContent) {
            otherTrigger.setAttribute('aria-expanded', 'false');
            otherContent.style.maxHeight = null;
            other.classList.remove('active');
          }
        }
      });

      if (isExpanded) {
        trigger.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
        item.classList.remove('active');
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        content.style.maxHeight = content.scrollHeight + 'px';
        item.classList.add('active');
      }
    });
  });
}

/**
 * Floating WhatsApp Button Configuration
 */
function initFloatingWhatsApp() {
  const floatingBtn = document.getElementById('floatingWhatsAppBtn');
  if (!floatingBtn || typeof SITE_CONFIG === 'undefined') return;

  if (SITE_CONFIG.whatsapp && SITE_CONFIG.whatsapp !== 'REPLACE_ME') {
    const msg = encodeURIComponent("Hello, I am contacting you regarding overseas recruitment opportunities.");
    floatingBtn.href = `https://wa.me/${SITE_CONFIG.whatsapp.replace(/\D/g, '')}?text=${msg}`;
    floatingBtn.target = "_blank";
    floatingBtn.rel = "noopener noreferrer";
  } else {
    floatingBtn.href = "contact.html";
    floatingBtn.title = "Contact office directly";
  }
}

/**
 * Highlight Current Page Link in Header
 */
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    }
  });
}

/**
 * Job Search & Filter System (jobs.html and homepage widget)
 */
function initJobSearchIfPresent() {
  const container = document.getElementById('jobsContainer');
  if (!container || typeof JOBS_DATA === 'undefined') return;

  const keywordInput = document.getElementById('jobSearchKeyword');
  const countrySelect = document.getElementById('jobFilterCountry');
  const categorySelect = document.getElementById('jobFilterCategory');
  const statusSelect = document.getElementById('jobFilterStatus');
  const resetBtn = document.getElementById('jobFilterReset');

  // Populate dropdowns dynamically from distinct values
  if (countrySelect && countrySelect.options.length <= 1) {
    const countries = getDistinctCountries();
    countries.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.name;
      opt.textContent = AppState.currentLang === 'bn' ? c.nameBn : c.name;
      countrySelect.appendChild(opt);
    });
  }

  if (categorySelect && categorySelect.options.length <= 1) {
    const categories = getDistinctCategories();
    categories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat.name;
      opt.textContent = AppState.currentLang === 'bn' ? cat.nameBn : cat.name;
      categorySelect.appendChild(opt);
    });
  }

  function handleFilterChange() {
    AppState.jobsFilter.keyword = keywordInput ? keywordInput.value.trim().toLowerCase() : '';
    AppState.jobsFilter.country = countrySelect ? countrySelect.value : '';
    AppState.jobsFilter.category = categorySelect ? categorySelect.value : '';
    AppState.jobsFilter.status = statusSelect ? statusSelect.value : '';
    renderJobsList();
  }

  if (keywordInput) {
    keywordInput.addEventListener('input', debounce(handleFilterChange, 250));
  }
  if (countrySelect) countrySelect.addEventListener('change', handleFilterChange);
  if (categorySelect) categorySelect.addEventListener('change', handleFilterChange);
  if (statusSelect) statusSelect.addEventListener('change', handleFilterChange);

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (keywordInput) keywordInput.value = '';
      if (countrySelect) countrySelect.value = '';
      if (categorySelect) categorySelect.value = '';
      if (statusSelect) statusSelect.value = '';
      AppState.jobsFilter = { keyword: '', country: '', category: '', status: '' };
      renderJobsList();
    });
  }

  // Initial render
  renderJobsList();
}

/**
 * Render Job Cards into #jobsContainer
 */
function renderJobsList() {
  const container = document.getElementById('jobsContainer');
  if (!container || typeof JOBS_DATA === 'undefined') return;

  const countBadge = document.getElementById('jobsCountBadge');
  const isBn = AppState.currentLang === 'bn';
  const dict = I18N[AppState.currentLang] || I18N.en;

  // Filter jobs based on AppState
  const { keyword, country, category, status } = AppState.jobsFilter;

  const filtered = JOBS_DATA.filter(job => {
    // Keyword match
    if (keyword) {
      const titleMatch = (isBn ? job.titleBn : job.title).toLowerCase().includes(keyword);
      const countryMatch = (isBn ? job.countryBn : job.country).toLowerCase().includes(keyword);
      const catMatch = (isBn ? job.categoryBn : job.category).toLowerCase().includes(keyword);
      const descMatch = (isBn ? job.descriptionBn : job.description).toLowerCase().includes(keyword);
      if (!titleMatch && !countryMatch && !catMatch && !descMatch) return false;
    }

    // Country match
    if (country && job.country !== country) return false;

    // Category match
    if (category && job.category !== category) return false;

    // Status match
    if (status && job.status !== status) return false;

    return true;
  });

  // Limit on homepage if data-limit attribute is present
  const limitAttr = container.getAttribute('data-limit');
  const displayJobs = limitAttr ? filtered.slice(0, parseInt(limitAttr, 10)) : filtered;

  if (countBadge) {
    countBadge.textContent = `${filtered.length} ${dict.jobsFoundCount}`;
  }

  if (displayJobs.length === 0) {
    container.innerHTML = `
      <div class="empty-jobs-card">
        <div class="empty-icon" aria-hidden="true">🔍</div>
        <h3>${dict.noJobsFoundTitle}</h3>
        <p>${dict.noJobsFoundText}</p>
        <button type="button" class="btn btn-secondary" onclick="document.getElementById('jobFilterReset')?.click()">
          ${dict.btnResetFilters}
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = displayJobs.map(job => {
    const title = isBn ? job.titleBn : job.title;
    const countryName = isBn ? job.countryBn : job.country;
    const catName = isBn ? job.categoryBn : job.category;
    const salary = isBn ? job.salaryBn : job.salary;
    const vacancies = isBn ? job.vacanciesBn : job.vacancies;
    const experience = isBn ? job.experienceBn : job.experience;
    const deadline = isBn ? job.deadlineBn : job.deadline;

    // Status badge class and text
    let statusClass = 'badge-status-open';
    let statusLabel = dict.statusOpen;
    let isApplyDisabled = false;

    if (job.status === 'closing_soon') {
      statusClass = 'badge-status-closing';
      statusLabel = dict.statusClosingSoon;
    } else if (job.status === 'closed') {
      statusClass = 'badge-status-closed';
      statusLabel = dict.statusClosed;
      isApplyDisabled = true;
    } else if (job.status === 'upcoming') {
      statusClass = 'badge-status-upcoming';
      statusLabel = dict.statusUpcoming;
    }

    return `
      <article class="job-card" id="job-card-${job.id}">
        <div class="job-card-header">
          <div class="job-country-tag">
            <img src="${job.flag}" alt="${countryName} flag" class="country-flag-icon" width="24" height="18" loading="lazy">
            <span class="country-name">${countryName}</span>
          </div>
          <span class="badge ${statusClass}">${statusLabel}</span>
        </div>

        <div class="job-card-body">
          <span class="job-category-tag">${catName}</span>
          <h3 class="job-title"><a href="job-details.html?id=${job.id}">${title}</a></h3>

          <ul class="job-meta-list">
            <li>
              <span class="meta-label">💰 ${dict.lblSalary}</span>
              <strong class="meta-value text-accent">${salary}</strong>
            </li>
            <li>
              <span class="meta-label">👥 ${dict.lblVacancy}</span>
              <span class="meta-value">${vacancies}</span>
            </li>
            <li>
              <span class="meta-label">🧰 ${dict.lblExperience}</span>
              <span class="meta-value">${experience}</span>
            </li>
            <li>
              <span class="meta-label">📅 ${dict.lblDeadline}</span>
              <span class="meta-value">${deadline}</span>
            </li>
          </ul>
        </div>

        <div class="job-card-footer">
          <a href="job-details.html?id=${job.id}" class="btn btn-outline btn-sm">
            ${dict.btnViewDetails}
          </a>
          ${isApplyDisabled 
            ? `<button class="btn btn-secondary btn-sm disabled" disabled title="${dict.statusClosed}">${dict.statusClosed}</button>`
            : `<button class="btn btn-primary btn-sm" onclick="triggerJobQuickApply(${job.id})">${dict.navApplyNow}</button>`
          }
        </div>
      </article>
    `;
  }).join('');
}

/**
 * Quick Apply Modal / Action for a Job Card
 */
function triggerJobQuickApply(jobId) {
  const job = getJobById(jobId);
  if (!job) return;

  const isBn = AppState.currentLang === 'bn';
  const title = isBn ? job.titleBn : job.title;
  const country = isBn ? job.countryBn : job.country;
  const dict = I18N[AppState.currentLang] || I18N.en;

  const waNumber = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.whatsapp && SITE_CONFIG.whatsapp !== 'REPLACE_ME')
    ? SITE_CONFIG.whatsapp.replace(/\D/g, '')
    : '';

  const waText = encodeURIComponent(`Hello, I am interested in applying for the [${job.title}] position in ${job.country}.`);
  const waUrl = waNumber ? `https://wa.me/${waNumber}?text=${waText}` : 'contact.html';

  const emailTarget = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.email && SITE_CONFIG.email !== 'REPLACE_ME')
    ? SITE_CONFIG.email
    : '';
  const emailSubject = encodeURIComponent(`Job Application: ${job.title} (${job.country})`);
  const emailBody = encodeURIComponent(`Dear Recruitment Team,\n\nI wish to apply for the position of ${job.title} in ${job.country}.\n\nFull Name:\nPhone:\nPassport Validity:\nExperience:\n\nThank you.`);
  const emailUrl = emailTarget ? `mailto:${emailTarget}?subject=${emailSubject}&body=${emailBody}` : 'contact.html';

  const formUrl = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.googleFormUrl && SITE_CONFIG.googleFormUrl !== 'REPLACE_ME')
    ? SITE_CONFIG.googleFormUrl
    : '';

  showNoticeModal(
    isBn ? `আবেদন চ্যানেল: ${title}` : `Apply for: ${title}`,
    `
      <p style="margin-bottom:1rem;"><strong>${isBn ? 'গন্তব্য দেশ' : 'Destination Country'}:</strong> ${country}</p>
      <p style="font-size:0.9rem; color:#64748b; margin-bottom:1.5rem;">
        ${isBn 
          ? 'আমাদের আবেদন প্রক্রিয়া সম্পূর্ণ নিরাপদ ও বহিরাগত। নিচের যেকোনো অফিশিয়াল চ্যানেলের মাধ্যমে সরাসরি আবেদন দাখিল করতে পারেন:' 
          : 'Our application procedure is transparent and managed via verified external services. Please select your preferred submission method:'}
      </p>

      <div style="display:flex; flex-direction:column; gap:0.75rem;">
        ${formUrl ? `
          <a href="${formUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="justify-content:center;">
            📝 ${dict.btnApplyGoogleForm}
          </a>
        ` : `
          <button class="btn btn-primary" onclick="alert('Please configure googleFormUrl in js/config.js')" style="justify-content:center;">
            📝 ${dict.btnApplyGoogleForm} (REPLACE_ME)
          </button>
        `}

        <a href="${waUrl}" ${waNumber ? 'target="_blank" rel="noopener noreferrer"' : ''} class="btn btn-whatsapp" style="justify-content:center;">
          💬 ${dict.btnApplyWhatsApp}
        </a>

        <a href="${emailUrl}" class="btn btn-secondary" style="justify-content:center;">
          ✉️ ${dict.btnApplyEmail}
        </a>

        <a href="job-details.html?id=${job.id}" class="btn btn-outline" style="justify-content:center;">
          📄 ${dict.btnViewDetails}
        </a>
      </div>
    `
  );
}

/**
 * Job Details Page View Initialization (job-details.html?id=X)
 */
function initJobDetailsIfPresent() {
  const container = document.getElementById('jobDetailsContainer');
  if (!container || typeof JOBS_DATA === 'undefined') return;

  renderJobDetailsView();
}

function renderJobDetailsView() {
  const container = document.getElementById('jobDetailsContainer');
  if (!container || typeof JOBS_DATA === 'undefined') return;

  const urlParams = new URLSearchParams(window.location.search);
  const jobId = urlParams.get('id');
  const isBn = AppState.currentLang === 'bn';
  const dict = I18N[AppState.currentLang] || I18N.en;

  if (!jobId) {
    renderJobNotFound(container, dict);
    return;
  }

  const job = getJobById(jobId);
  if (!job) {
    renderJobNotFound(container, dict);
    return;
  }

  // Update page title
  const title = isBn ? job.titleBn : job.title;
  const country = isBn ? job.countryBn : job.country;
  document.title = `${title} (${country}) | Overseas Recruitment`;

  const waNumber = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.whatsapp && SITE_CONFIG.whatsapp !== 'REPLACE_ME')
    ? SITE_CONFIG.whatsapp.replace(/\D/g, '')
    : '';
  const waText = encodeURIComponent(`Hello, I am interested in applying for the [${job.title}] position in ${job.country}.`);
  const waUrl = waNumber ? `https://wa.me/${waNumber}?text=${waText}` : 'contact.html';

  const emailTarget = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.email && SITE_CONFIG.email !== 'REPLACE_ME')
    ? SITE_CONFIG.email
    : '';
  const emailSubject = encodeURIComponent(`Application for ${job.title} (${job.country})`);
  const emailBody = encodeURIComponent(`Dear Recruitment Team,\n\nI am writing to formally submit my candidacy for the position of ${job.title} in ${job.country}.\n\nCandidate Name:\nContact Phone:\nPassport Number:\nPassport Expiry Date:\nYears of Relevant Experience:\n\nPlease find my information provided through your verified channel.\n\nRespectfully,`);
  const emailUrl = emailTarget ? `mailto:${emailTarget}?subject=${emailSubject}&body=${emailBody}` : 'contact.html';

  const phoneLink = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.phoneRaw && SITE_CONFIG.phoneRaw !== 'REPLACE_ME')
    ? `tel:${SITE_CONFIG.phoneRaw.replace(/\s+/g, '')}`
    : 'contact.html';

  const formUrl = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.googleFormUrl && SITE_CONFIG.googleFormUrl !== 'REPLACE_ME')
    ? SITE_CONFIG.googleFormUrl
    : '';

  let statusClass = 'badge-status-open';
  let statusLabel = dict.statusOpen;
  let isClosed = job.status === 'closed';

  if (job.status === 'closing_soon') {
    statusClass = 'badge-status-closing';
    statusLabel = dict.statusClosingSoon;
  } else if (job.status === 'closed') {
    statusClass = 'badge-status-closed';
    statusLabel = dict.statusClosed;
  } else if (job.status === 'upcoming') {
    statusClass = 'badge-status-upcoming';
    statusLabel = dict.statusUpcoming;
  }

  const reqList = (isBn ? job.requirementsBn : job.requirements) || [];
  const benefitsList = (isBn ? job.benefitsBn : job.benefits) || [];

  container.innerHTML = `
    <!-- Breadcrumbs -->
    <nav class="breadcrumb-bar" aria-label="Breadcrumb">
      <a href="index.html">${dict.navHome}</a> &gt;
      <a href="jobs.html">${dict.navJobs}</a> &gt;
      <span aria-current="page">${title}</span>
    </nav>

    <div class="job-details-layout">
      <!-- Main Content Column -->
      <div class="job-details-main">
        <header class="job-details-header">
          <div class="job-country-badge">
            <img src="${job.flag}" alt="${country} flag" width="28" height="20" class="country-flag-icon">
            <span>${country}</span>
          </div>
          <span class="badge ${statusClass}">${statusLabel}</span>
          <h1 class="job-details-title">${title}</h1>
          <p class="job-details-category"><strong>${isBn ? 'ক্যাটাগরি' : 'Sector'}:</strong> ${isBn ? job.categoryBn : job.category}</p>
        </header>

        <!-- Overview Grid -->
        <section class="details-section">
          <h2 class="section-title-sm">${isBn ? 'চাকরির সংক্ষিপ্ত বিবরণ' : 'Job Overview & Terms'}</h2>
          <div class="overview-grid">
            <div class="overview-cell">
              <span class="cell-label">💰 ${dict.lblSalary}</span>
              <span class="cell-value text-accent font-bold">${isBn ? job.salaryBn : job.salary}</span>
            </div>
            <div class="overview-cell">
              <span class="cell-label">👥 ${dict.lblVacancy}</span>
              <span class="cell-value">${isBn ? job.vacanciesBn : job.vacancies}</span>
            </div>
            <div class="overview-cell">
              <span class="cell-label">🧰 ${dict.lblExperience}</span>
              <span class="cell-value">${isBn ? job.experienceBn : job.experience}</span>
            </div>
            <div class="overview-cell">
              <span class="cell-label">📅 ${dict.lblDeadline}</span>
              <span class="cell-value">${isBn ? job.deadlineBn : job.deadline}</span>
            </div>
            <div class="overview-cell">
              <span class="cell-label">📋 ${dict.lblContract}</span>
              <span class="cell-value">${isBn ? job.contractPeriodBn : job.contractPeriod}</span>
            </div>
            <div class="overview-cell">
              <span class="cell-label">⏰ ${dict.lblHours}</span>
              <span class="cell-value">${isBn ? job.workingHoursBn : job.workingHours}</span>
            </div>
            <div class="overview-cell">
              <span class="cell-label">🏠 ${dict.lblAccommodation}</span>
              <span class="cell-value">${isBn ? job.accommodationBn : job.accommodation}</span>
            </div>
            <div class="overview-cell">
              <span class="cell-label">🍲 ${dict.lblFood}</span>
              <span class="cell-value">${isBn ? job.foodBn : job.food}</span>
            </div>
            <div class="overview-cell">
              <span class="cell-label">⏱️ ${dict.lblOvertime}</span>
              <span class="cell-value">${isBn ? job.overtimeBn : job.overtime}</span>
            </div>
            <div class="overview-cell">
              <span class="cell-label">🏥 ${dict.lblMedical}</span>
              <span class="cell-value">${isBn ? job.medicalInsuranceBn : job.medicalInsurance}</span>
            </div>
          </div>
        </section>

        <!-- Role Description -->
        <section class="details-section">
          <h2 class="section-title-sm">${isBn ? 'কাজের বিবরণ' : 'Description'}</h2>
          <p class="section-paragraph">${isBn ? job.descriptionBn : job.description}</p>
        </section>

        <!-- Requirements -->
        <section class="details-section">
          <h2 class="section-title-sm">${isBn ? 'আবেদনের যোগ্যতা ও শর্তাবলি' : 'Candidate Requirements'}</h2>
          <ul class="checklist">
            ${reqList.map(req => `<li><span class="check-icon">✓</span> <span>${req}</span></li>`).join('')}
          </ul>
        </section>

        <!-- Benefits -->
        <section class="details-section">
          <h2 class="section-title-sm">${isBn ? 'কোম্পানি প্রদত্ত সুযোগ-সুবিধা' : 'Provided Benefits'}</h2>
          <ul class="checklist">
            ${benefitsList.map(ben => `<li><span class="check-icon">★</span> <span>${ben}</span></li>`).join('')}
          </ul>
        </section>

        <!-- Safe Migration Notice -->
        <div class="notice-box-warning">
          <h4>🛡️ ${isBn ? 'নিরাপদ অভিবাসন সতর্কতা' : 'Ethical Recruitment Advisory'}</h4>
          <p>${isBn 
            ? 'সকল আবেদন ও লেনদেন শুধুমাত্র এজেন্সির অফিসিয়াল যোগাযোগের মাধ্যমে সম্পন্ন করুন। কোনো ব্যক্তিগত অ্যাকাউন্টে অর্থ পাঠাবেন না।' 
            : 'All communications, interviews, and documentation are administered solely through our official verified office channels. Never make unauthorized payments to third-party individuals.'}</p>
        </div>
      </div>

      <!-- Application Sidebar -->
      <aside class="job-details-sidebar">
        <div class="sidebar-apply-card">
          <h3 class="sidebar-card-title">${dict.navApplyNow}</h3>
          <p class="sidebar-card-sub">
            ${isBn 
              ? 'নিচের যেকোনো অফিশিয়াল বহিঃস্থ মাধ্যমে আবেদন দাখিল করুন:' 
              : 'Submit your profile directly through our official external channels:'}
          </p>

          ${isClosed ? `
            <div class="closed-notice-card">
              <strong>${dict.statusClosed}</strong>
              <p>${isBn ? 'এই পদের জন্য আবেদন গ্রহণ সম্পন্ন হয়েছে।' : 'Applications for this demand order are currently closed.'}</p>
            </div>
          ` : `
            <div class="apply-actions-stack">
              ${formUrl ? `
                <a href="${formUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block">
                  📝 ${dict.btnApplyGoogleForm}
                </a>
              ` : `
                <button class="btn btn-primary btn-block" onclick="alert('Please set googleFormUrl in js/config.js')">
                  📝 ${dict.btnApplyGoogleForm}
                </button>
              `}

              <a href="${waUrl}" ${waNumber ? 'target="_blank" rel="noopener noreferrer"' : ''} class="btn btn-whatsapp btn-block">
                💬 ${dict.btnApplyWhatsApp}
              </a>

              <a href="${emailUrl}" class="btn btn-secondary btn-block">
                ✉️ ${dict.btnApplyEmail}
              </a>

              <a href="${phoneLink}" class="btn btn-outline btn-block">
                📞 ${dict.btnCallNow}
              </a>
            </div>
          `}

          <hr class="sidebar-divider">

          <div class="sidebar-meta-block">
            <h4 class="sidebar-meta-title">${isBn ? 'অফিসিয়াল যোগাযোগ' : 'Official Hotline'}</h4>
            <p><strong>${SITE_CONFIG.phone}</strong></p>
            <p class="text-muted text-sm">${isBn ? SITE_CONFIG.officeHoursBn : SITE_CONFIG.officeHours}</p>
          </div>

          <a href="jobs.html" class="back-link">${dict.btnBackToJobs}</a>
        </div>
      </aside>
    </div>
  `;
}

function renderJobNotFound(container, dict) {
  const isBn = AppState.currentLang === 'bn';
  container.innerHTML = `
    <div class="empty-jobs-card" style="padding:4rem 1rem;">
      <div class="empty-icon" aria-hidden="true">⚠️</div>
      <h2>${isBn ? 'চাকরিটি পাওয়া যায়নি' : 'Job Vacancy Not Found'}</h2>
      <p>${isBn 
        ? 'অনুরোধকৃত পদের নম্বরটি সঠিক নয় বা এর মেয়াদ শেষ হয়ে থাকতে পারে। অনুগ্রহ করে বর্তমান চাকরির তালিকা দেখুন।' 
        : 'The requested job vacancy ID is invalid or has expired. Please explore our active demand list.'}</p>
      <a href="jobs.html" class="btn btn-primary">${dict.btnViewJobs}</a>
    </div>
  `;
}

/**
 * Accessible Modal for informational notices / quick forms
 */
function showNoticeModal(title, htmlContent) {
  let modal = document.getElementById('appNoticeModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'appNoticeModal';
    modal.className = 'modal-backdrop';
    modal.innerHTML = `
      <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div class="modal-header">
          <h3 id="modalTitle" class="modal-title"></h3>
          <button type="button" class="modal-close" aria-label="Close modal">&times;</button>
        </div>
        <div id="modalBody" class="modal-body"></div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector('.modal-close').addEventListener('click', () => {
      modal.classList.remove('visible');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('visible');
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('visible')) {
        modal.classList.remove('visible');
      }
    });
  }

  document.getElementById('modalTitle').innerHTML = title;
  document.getElementById('modalBody').innerHTML = htmlContent;
  modal.classList.add('visible');
}

/**
 * Utility debounce function
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
