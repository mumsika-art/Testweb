/**
 * ====================================================================
 * OFFICIAL VACANCY DATA REPOSITORY (JOBS_DATA)
 * ====================================================================
 * Add or update overseas demand orders here.
 * Status options: 'open' | 'closing_soon' | 'closed' | 'upcoming'
 *
 * NOTE: As per strict ethical recruitment standards, never fabricate
 * vacancies or salary guarantees. Replace sample fields with verified
 * government-approved demand letters (Demand Letter / No-Objection
 * Certificate / BMET Approval Reference).
 */

const JOBS_DATA = [
  {
    id: 1,
    country: "Saudi Arabia",
    countryBn: "সৌদি আরব",
    countryCode: "SA",
    flag: "images/countries/saudi-arabia.svg",
    title: "Structural Welder (MIG/TIG)",
    titleBn: "স্ট্রাকচারাল ওয়েল্ডার (এমআইজি/টিআইজি)",
    category: "Technical & Construction",
    categoryBn: "কারিগরি ও নির্মাণ",
    employer: "Saudi Industrial Contracting Co.",
    employerBn: "সৌদি ইন্ডাস্ট্রিয়াল কন্ট্রাক্টিং কোম্পানি",
    salary: "1,800 - 2,400 SAR/Month",
    salaryBn: "১,৮০০ - ২,৪০০ সৌদি রিয়াল / মাস",
    vacancies: "25 Positions",
    vacanciesBn: "২৫ জন",
    experience: "2-4 Years Verified Trade Experience",
    experienceBn: "২-৪ বছরের ট্রেড কাজের অভিজ্ঞতা",
    deadline: "May 15, 2026",
    deadlineBn: "১৫ মে, ২০২৬",
    contractPeriod: "2 Years (Renewable)",
    contractPeriodBn: "২ বছর (নবায়নযোগ্য)",
    workingHours: "8 Hours/Day, 6 Days/Week",
    workingHoursBn: "দৈনিক ৮ ঘণ্টা, সপ্তাহে ৬ দিন",
    accommodation: "Provided by Employer",
    accommodationBn: "কোম্পানি কর্তৃক বাসস্থান প্রদান",
    food: "Provided / Allowance",
    foodBn: "খাবার বা খাবার ভাতা প্রদান",
    overtime: "As per local labor law",
    overtimeBn: "স্থানীয় শ্রম আইন অনুযায়ী ওভারটাইম",
    medicalInsurance: "Provided as per labor regulations",
    medicalInsuranceBn: "শ্রম আইন অনুযায়ী স্বাস্থ্যবীমা",
    transportation: "Provided to and from worksite",
    transportationBn: "কর্মস্থলে যাতায়াত ফ্রি",
    description: "Seeking skilled structural welders with valid trade certifications for industrial construction projects. Must pass practical trade assessment.",
    descriptionBn: "শিল্প নির্মাণ প্রকল্পের জন্য দক্ষ ও সার্টিফাইড ওয়েল্ডার প্রয়োজন। ব্যবহারিক ট্রেড টেস্টে উত্তীর্ণ হতে হবে।",
    requirements: [
      "Valid passport with at least 12 months validity",
      "Trade qualification / Vocational Training Certificate in Welding",
      "Ability to read technical fabrication drawings",
      "Age requirement: 21 to 40 years",
      "Government-approved medical fitness certificate (GAMCA)"
    ],
    requirementsBn: [
      "কমপক্ষে ১২ মাস মেয়াদের বৈধ পাসপোর্ট",
      "ওয়েল্ডিং ট্রেড বা ভোকেশনাল ট্রেনিং সার্টিফিকেট",
      "টেকনিক্যাল ড্রয়িং বোঝার মৌলিক দক্ষতা",
      "বয়সসীমা: ২১ থেকে ৪০ বছর",
      "অনুমোদিত মেডিকেল টেস্টে (গামকা) স্বাস্থ্যগত সুস্থতা"
    ],
    benefits: [
      "Free shared accommodation and utilities",
      "Health and occupational safety insurance coverage",
      "Air ticket upon completion of contractual term",
      "Standard end-of-service gratuity as per labor statutes"
    ],
    benefitsBn: [
      "কোম্পানির তত্ত্বাবধানে বাসস্থান ও ইউটিলিটি",
      "স্বাস্থ্য ও কর্মক্ষেত্র নিরাপত্তা বীমা সুবিধা",
      "চুক্তির মেয়াদ শেষে রিটার্ন বিমান টিকিট",
      "শ্রম আইন অনুযায়ী সার্ভিস গ্র্যাচুইটি সুবিধা"
    ],
    status: "open"
  },
  {
    id: 2,
    country: "United Arab Emirates",
    countryBn: "সংযুক্ত আরব আমিরাত (ইউএই)",
    countryCode: "AE",
    flag: "images/countries/uae.svg",
    title: "Heavy Equipment Operator (Excavator / Bulldozer)",
    titleBn: "ভারী সরঞ্জাম অপারেটর (এক্সেভেটর / বুলডোজার)",
    category: "Machinery & Heavy Equipment",
    categoryBn: "মেশিনারি ও ভারী যন্ত্রপাতি",
    employer: "Arabian Gulf Heavy Logistics LLC",
    employerBn: "অ্যারাবিয়ান গালফ হেভি লজিস্টিকস এলএলসি",
    salary: "2,200 - 2,800 AED/Month",
    salaryBn: "২,২০০ - ২,৮০০ ইউএই দিরহাম / মাস",
    vacancies: "15 Positions",
    vacanciesBn: "১৫ জন",
    experience: "3+ Years with GCC or Home Country Heavy License",
    experienceBn: "জিসিসি বা দেশীয় হেভি ড্রাইভিং লাইসেন্সসহ ৩+ বছরের অভিজ্ঞতা",
    deadline: "April 28, 2026",
    deadlineBn: "২৮ এপ্রিল, ২০২৬",
    contractPeriod: "2 Years (Renewable)",
    contractPeriodBn: "২ বছর (নবায়নযোগ্য)",
    workingHours: "8 Hours/Day",
    workingHoursBn: "দৈনিক ৮ ঘণ্টা",
    accommodation: "Provided by Employer",
    accommodationBn: "কোম্পানি কর্তৃক ফ্রি বাসস্থান",
    food: "Provided or Food Allowance",
    foodBn: "খাবার বা খাবার ভাতা",
    overtime: "Available as per project demands",
    overtimeBn: "কাজের চাহিদা অনুযায়ী ওভারটাইম",
    medicalInsurance: "Comprehensive employer health card",
    medicalInsuranceBn: "কোম্পানি কর্তৃক পূর্ণাঙ্গ স্বাস্থ্যবীমা",
    transportation: "Provided by Employer",
    transportationBn: "কোম্পানি কর্তৃক পরিবহন সুবিধা",
    description: "Operation of heavy earthmoving machinery on infrastructure developments. Strict compliance with site health and safety standards required.",
    descriptionBn: "বৃহৎ অবকাঠামো উন্নয়ন প্রকল্পে হেভি এক্সেভেটর ও বুলডোজার পরিচালনার জন্য দক্ষ চালক প্রয়োজন। সাইট নিরাপত্তা বজায় রাখা বাধ্যতামূলক।",
    requirements: [
      "Valid heavy vehicle / equipment operator driving license",
      "Basic English or Arabic conversational capability",
      "Clean driving and safety record",
      "Pre-deployment medical clearance"
    ],
    requirementsBn: [
      "বৈধ হেভি ড্রাইভিং / অপারেটর লাইসেন্স",
      "মৌলিক ইংরেজি বা আরবি কথা বলার দক্ষতা",
      "দুর্ঘটনামুক্ত নিরাপদ কাজের রেকর্ড",
      "অনুমোদিত মেডিকেল ক্লিয়ারেন্স"
    ],
    benefits: [
      "Accommodation provided at company residential camp",
      "Company transport to work site",
      "Paid annual vacation upon completion of 2 years",
      "Overtime compensation"
    ],
    benefitsBn: [
      "কোম্পানির আবাসিক ক্যাম্পে পরিষ্কার বাসস্থান",
      "সাইটে যাতায়াতের জন্য যানবাহন",
      "চুক্তি শেষে বেতনসহ ছুটি ও রিটার্ন টিকিট",
      "আইন অনুযায়ী ওভারটাইম ভাতা"
    ],
    status: "closing_soon"
  },
  {
    id: 3,
    country: "Qatar",
    countryBn: "কাতার",
    countryCode: "QA",
    flag: "images/countries/qatar.svg",
    title: "Commercial Electrician & Cable Jointer",
    titleBn: "কমার্শিয়াল ইলেকট্রিশিয়ান ও কেবল জয়েন্টার",
    category: "Electrical & Facilities",
    categoryBn: "বৈদ্যুতিক ও ফ্যাসিলিটি",
    employer: "Doha Engineering & Electromechanical WLL",
    employerBn: "দোহা ইঞ্জিনিয়ারিং অ্যান্ড ইলেক্ট্রোমেকানিক্যাল ডব্লিউএলএল",
    salary: "1,700 - 2,300 QAR/Month",
    salaryBn: "১,৭০০ - ২,৩০০ কাতারি রিয়াল / মাস",
    vacancies: "20 Positions",
    vacanciesBn: "২০ জন",
    experience: "Minimum 2 Years in Commercial / Residential Wiring",
    experienceBn: "কমার্শিয়াল ওয়্যারিং কাজে ন্যূনতম ২ বছরের অভিজ্ঞতা",
    deadline: "May 20, 2026",
    deadlineBn: "২০ মে, ২০২৬",
    contractPeriod: "2 Years",
    contractPeriodBn: "২ বছর",
    workingHours: "8 Hours/Day, 6 Days/Week",
    workingHoursBn: "দৈনিক ৮ ঘণ্টা, সপ্তাহে ৬ দিন",
    accommodation: "Provided by Company",
    accommodationBn: "কোম্পানির বাসস্থান",
    food: "Provided or Allowance",
    foodBn: "খাবার বা খাবার ভাতা",
    overtime: "Available as per Qatar Labor Law",
    overtimeBn: "কাতার শ্রম আইন অনুযায়ী প্রযোজ্য",
    medicalInsurance: "Hamad Health Card / Insurance",
    medicalInsuranceBn: "হামাদ হেলথ কার্ড / মেডিকেল ইনস্যুরেন্স",
    transportation: "Provided by Company",
    transportationBn: "কোম্পানি কর্তৃক পরিবহন",
    description: "Laying conduits, pulling cables, termination of distribution boards, and testing electrical systems in commercial complexes.",
    descriptionBn: "কমার্শিয়াল ভবনে ক্যাবল লেইং, ডিবি বোর্ড টার্মিনেশন এবং ইলেকট্রিক্যাল টেস্টিং কাজের জন্য দক্ষ টেকনিশিয়ান।",
    requirements: [
      "Trade certificate in Electrical Engineering / Craftsmanship",
      "Knowledge of electrical circuit diagrams and single-line schematics",
      "Valid passport with minimum 1-year validity",
      "Physical fitness for construction site environment"
    ],
    requirementsBn: [
      "ইলেকট্রিক্যাল ট্রেড কোর্স বা ডিপ্লোমা সনদ",
      "সার্কিট ডায়াগ্রাম দেখে কাজ করার সক্ষমতা",
      "কমপক্ষে ১ বছর মেয়াদের বৈধ পাসপোর্ট",
      "সাইটে কাজের জন্য শারীরিক সক্ষমতা"
    ],
    benefits: [
      "Company accommodation and subsidized catering",
      "Government health care access",
      "Work uniforms and safety personal protective equipment (PPE)",
      "Return airfare on contract completion"
    ],
    benefitsBn: [
      "কোম্পানি বাসস্থান ও খাদ্য সুবিধা",
      "সরকারি স্বাস্থ্য কার্ড সুবিধা",
      "কাজের পোশাক ও সেফটি ইকুইপমেন্ট (পিপিই)",
      "চুক্তি শেষে দেশে আসা-যাওয়ার টিকিট"
    ],
    status: "open"
  },
  {
    id: 4,
    country: "Malaysia",
    countryBn: "মালয়েশিয়া",
    countryCode: "MY",
    flag: "images/countries/malaysia.svg",
    title: "Electronics Factory Assembly Technician",
    titleBn: "ইলেকট্রনিক্স ফ্যাক্টরি অ্যাসেম্বলি টেকনিশিয়ান",
    category: "Manufacturing & Assembly",
    categoryBn: "উৎপাদন ও অ্যাসেম্বলি",
    employer: "Precision Technology Manufacturing Sdn Bhd",
    employerBn: "প্রিসিশন টেকনোলজি ম্যানুফ্যাকচারিং এসডিএন বিএইচডি",
    salary: "1,700 - 2,100 MYR/Month",
    salaryBn: "১,৭০০ - ২,১০০ মালয়েশিয়ান রিঙ্গিত / মাস",
    vacancies: "40 Positions",
    vacanciesBn: "৪০ জন",
    experience: "Fresh or 1 Year Factory Experience",
    experienceBn: "নতুন অথবা ১ বছরের কারখানা অভিজ্ঞতা",
    deadline: "June 10, 2026",
    deadlineBn: "১০ জুন, ২০২৬",
    contractPeriod: "3 Years",
    contractPeriodBn: "৩ বছর",
    workingHours: "8 Hours/Day (Shift System)",
    workingHoursBn: "দৈনিক ৮ ঘণ্টা (শিফট অনুযায়ী)",
    accommodation: "Centralized Labor Quarters (CLQ) Certified",
    accommodationBn: "সিএলকিউ মানসম্মত সরকারি অনুমোদিত হোস্টেল",
    food: "Subsidized Canteen / Self Cooking Allowed",
    foodBn: "সুলভ মূল্যের ক্যান্টিন ও রান্নার সুবিধা",
    overtime: "Guaranteed minimum under Malaysian labor regulation",
    overtimeBn: "মালয়েশিয়া শ্রম আইন অনুযায়ী ওভারটাইম",
    medicalInsurance: "SOCSO / Foreign Workers Medical Scheme (SPIKPA)",
    medicalInsuranceBn: "বিদেশি শ্রমিকদের জন্য প্রযোজ্য ইনস্যুরেন্স",
    transportation: "Provided between CLQ and Plant",
    transportationBn: "কোয়ার্টার থেকে কারখানায় যাতায়াত সুবিধা",
    description: "Component assembly, cleanroom inspection, and packaging in modern semiconductor and consumer electronics manufacturing plants.",
    descriptionBn: "আধুনিক সেমিকন্ডাক্টর ও ইলেকট্রনিক্স ম্যানুফ্যাকচারিং প্ল্যান্টে অ্যাসেম্বলি, মান যাচাই এবং প্যাকেজিং কাজ।",
    requirements: [
      "Minimum Secondary School Certificate (SSC) or equivalent",
      "Age: 18 to 35 years",
      "Good vision and manual dexterity (no color blindness)",
      "Passing FOMEMA medical screening"
    ],
    requirementsBn: [
      "কমপক্ষে এসএসসি বা সমমানের শিক্ষাগত যোগ্যতা",
      "বয়স: ১৮ থেকে ৩৫ বছর",
      "ভালো দৃষ্টিশক্তি ও সূক্ষ্ম কাজের দক্ষতা",
      "ফোমেমা অনুমোদিত স্বাস্থ্য পরীক্ষায় উত্তীর্ণ"
    ],
    benefits: [
      "Air-conditioned workplace environment",
      "SOCSO injury and welfare coverage",
      "Official annual leave and public holiday bonuses",
      "Air ticket provided per bilateral agreement"
    ],
    benefitsBn: [
      "শীতাতপ নিয়ন্ত্রিত আধুনিক কাজের পরিবেশ",
      "শ্রমিক কল্যাণ ও দুর্ঘটনা বীমা কভারেজ",
      "বার্ষিক ছুটি ও সরকারি ছুটির বোনাস সুবিধা",
      "চুক্তি শেষে বিমান টিকিট"
    ],
    status: "open"
  },
  {
    id: 5,
    country: "Oman",
    countryBn: "ওমান",
    countryCode: "OM",
    flag: "images/countries/oman.svg",
    title: "Hospitality & Restaurant Service Staff",
    titleBn: "হসপিটালিটি ও রেস্তোরাঁ সার্ভিস স্টাফ",
    category: "Hospitality & Catering",
    categoryBn: "হসপিটালিটি ও ক্যাটারিং",
    employer: "Muscat Grand Hospitality Services SAOC",
    employerBn: "মাসকাট গ্র্যান্ড হসপিটালিটি সার্ভিসেস",
    salary: "150 - 200 OMR/Month + Tips",
    salaryBn: "১৫০ - ২০০ ওমানি রিয়াল / মাস + সার্ভিস টিপস",
    vacancies: "18 Positions",
    vacanciesBn: "১৮ জন",
    experience: "1-2 Years in Hotel or Restaurant Service",
    experienceBn: "হোটেল বা রেস্তোরাঁয় ১-২ বছরের কাজের অভিজ্ঞতা",
    deadline: "June 25, 2026",
    deadlineBn: "২৫ জুন, ২০২৬",
    contractPeriod: "2 Years",
    contractPeriodBn: "২ বছর",
    workingHours: "9 Hours/Day (Including break)",
    workingHoursBn: "দৈনিক ৯ ঘণ্টা (বিরতি সহ)",
    accommodation: "Provided by Employer",
    accommodationBn: "কোম্পানি কর্তৃক ফ্রি বাসস্থান",
    food: "Duty Meals Provided",
    foodBn: "ডিউটি চলাকালীন খাবার ফ্রি",
    overtime: "As per local guidelines",
    overtimeBn: "স্থানীয় নিয়ম অনুযায়ী ওভারটাইম",
    medicalInsurance: "Provided",
    medicalInsuranceBn: "চিকিৎসা সেবা প্রদান",
    transportation: "Provided",
    transportationBn: "যাতায়াত ব্যবস্থা প্রদান",
    description: "Customer service, table attendance, order handling, and maintaining food hygiene standards in commercial hospitality venues.",
    descriptionBn: "আন্তর্জাতিক মানের হোটেল ও রেস্টুরেন্টে কাস্টমার সার্ভিস, অর্ডার গ্রহণ ও খাদ্য স্বাস্থ্যবিধি বজায় রেখে সেবা প্রদান।",
    requirements: [
      "Presentable personality with good conversational English",
      "High school diploma or hospitality vocational certificate",
      "Clean police clearance and medical certification",
      "Age: 20 to 32 years"
    ],
    requirementsBn: [
      "মার্জিত ব্যক্তিত্ব ও ইংরেজিতে মৌলিক কথা বলার দক্ষতা",
      "এইচএসসি বা সমমান / হসপিটালিটি ট্রেড ট্রেনিং",
      "ক্লিন পুলিশ ভেরিফিকেশন ও স্বাস্থ্য ছাড়পত্র",
      "বয়সসীমা: ২০ থেকে ৩২ বছর"
    ],
    benefits: [
      "Staff accommodation with all utilities paid",
      "Duty meal during shift",
      "Tips and service charge distribution where applicable",
      "Health insurance"
    ],
    benefitsBn: [
      "বিদ্যুৎ ও পানি সহ ফ্রি থাকার ব্যবস্থা",
      "কাজের সময় ফ্রি খাবার সুবিধা",
      "টিপস ও সার্ভিস চার্জ সুবিধা",
      "কোম্পানি স্বাস্থ্যবীমা"
    ],
    status: "upcoming"
  },
  {
    id: 6,
    country: "Kuwait",
    countryBn: "কুয়েত",
    countryCode: "KW",
    flag: "images/countries/kuwait.svg",
    title: "Facility Maintenance Plumber & Pipe Fitter",
    titleBn: "ফ্যাসিলিটি মেইনটেন্যান্স প্লাম্বার ও পাইপ ফিটার",
    category: "Maintenance & Facilities",
    categoryBn: "রক্ষণাবেক্ষণ ও ফ্যাসিলিটি",
    employer: "Kuwait National Facilities Management",
    employerBn: "কুয়েত ন্যাশনাল ফ্যাসিলিটি ম্যানেজমেন্ট",
    salary: "140 - 180 KWD/Month",
    salaryBn: "১৪০ - ১৮০ কুয়েতি দিনার / মাস",
    vacancies: "12 Positions",
    vacanciesBn: "১২ জন",
    experience: "2+ Years in Commercial Plumbing",
    experienceBn: "কমার্শিয়াল প্লাম্বিং কাজে ২+ বছরের অভিজ্ঞতা",
    deadline: "Completed",
    deadlineBn: "নিয়োগ সম্পন্ন",
    contractPeriod: "2 Years",
    contractPeriodBn: "২ বছর",
    workingHours: "8 Hours/Day",
    workingHoursBn: "দৈনিক ৮ ঘণ্টা",
    accommodation: "Provided",
    accommodationBn: "ফ্রি বাসস্থান প্রদান",
    food: "Provided / Allowance",
    foodBn: "খাবার বা খাবার ভাতা প্রদান",
    overtime: "Applicable as per work demands",
    overtimeBn: "কাজের চাহিদা অনুযায়ী প্রযোজ্য",
    medicalInsurance: "Ministry of Health standard coverage",
    medicalInsuranceBn: "সরকারি স্বাস্থ্যসেবা কভারেজ",
    transportation: "Provided by Company",
    transportationBn: "কোম্পানি পরিবহন",
    description: "Installation, maintenance, and emergency repair of commercial sanitary, water circulation, and fire protection pipe systems.",
    descriptionBn: "বাণিজ্যিক ভবন ও কমপ্লেক্সে পাইপলাইন ফিটিং, স্যানিটারি সিস্টেম মেরামত ও নিয়মিত রক্ষণাবেক্ষণ কাজ।",
    requirements: [
      "Experience with PVC, PPR, and GI pipe installations",
      "Technical trade certificate or equivalent practical experience",
      "Valid passport and medical clearance"
    ],
    requirementsBn: [
      "পিভিসি, পিপিআর ও জিআই পাইপ ফিটিংয়ে অভিজ্ঞতা",
      "প্লাম্বিং ট্রেড কোর্স বা সমমানের কাজের প্রমাণপত্র",
      "বৈধ পাসপোর্ট ও মেডিকেল সার্টিফিকেট"
    ],
    benefits: [
      "Company living quarters provided",
      "Official health insurance card",
      "Contractual leave and round-trip flight"
    ],
    benefitsBn: [
      "কোম্পানির বাসস্থান সুবিধা",
      "স্বাস্থ্য কার্ড ও চিকিৎসা সেবা",
      "চুক্তি সমাপ্তিতে ছুটি ও রিটার্ন টিকিট"
    ],
    status: "closed"
  }
];

// Helper functions for jobs
function getJobById(id) {
  const numId = parseInt(id, 10);
  return JOBS_DATA.find(job => job.id === numId) || null;
}

function getDistinctCountries() {
  const map = new Map();
  JOBS_DATA.forEach(j => {
    if (!map.has(j.country)) {
      map.set(j.country, { name: j.country, nameBn: j.countryBn });
    }
  });
  return Array.from(map.values());
}

function getDistinctCategories() {
  const map = new Map();
  JOBS_DATA.forEach(j => {
    if (!map.has(j.category)) {
      map.set(j.category, { name: j.category, nameBn: j.categoryBn });
    }
  });
  return Array.from(map.values());
}
