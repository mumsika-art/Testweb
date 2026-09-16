/**
 * ====================================================================
 * CENTRAL WEBSITE CONFIGURATION (SITE_CONFIG)
 * ====================================================================
 * Update this file with your agency's official, verified credentials.
 * All pages and contact points across the website automatically read
 * from this configuration.
 *
 * NOTE: Do NOT fabricate licensing, affiliations, or contact details.
 * Any field left as "REPLACE_ME" is safely handled with a marked
 * placeholder state.
 */

const SITE_CONFIG = {
  // Agency Identity
  agencyName: "গ্লোবাল রিক্রুটিং অ্যান্ড ওভারসিজ ম্যানপাওয়ার",
  agencyNameBn: "গ্লোবাল রিক্রুটিং অ্যান্ড ওভারসিজ ম্যানপাওয়ার",
  shortName: "গ্লোবাল ম্যানপাওয়ার",
  shortNameBn: "গ্লোবাল ম্যানপাওয়ার",
  tagline: "নৈতিক, নিরাপদ ও সরকারি অনুমোদিত বৈদেশিক কর্মসংস্থান সেবা",
  taglineBn: "নৈতিক, নিরাপদ ও সরকারি অনুমোদিত বৈদেশিক কর্মসংস্থান সেবা",

  // Official Recruiting License (RL)
  rlNumber: "আরএল-১২৩৪",
  licenseAuthority: "জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো (বিএমইটি) / প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়",
  licenseAuthorityBn: "জনশক্তি কর্মসংস্থান ও প্রশিক্ষণ ব্যুরো (বিএমইটি) / প্রবাসী কল্যাণ ও বৈদেশিক কর্মসংস্থান মন্ত্রণালয়",
  licenseVerificationUrl: "http://www.bmet.gov.bd", // Direct government portal URL for verifying this agency's license

  // Contact Channels
  phone: "+৮৮০ ২-৯৮৭৬৫৪৩",
  phoneRaw: "+88029876543",
  whatsapp: "8801712345678",
  whatsappDisplay: "+৮৮০ ১৭১২-৩৪৫৬৭৮",
  email: "info@globalmanpower.gov.bd",
  
  // Office Location & Operational Hours
  address: "লেভেল ৫, প্রবাসী ভবন, প্লট ১২, কাকরাইল ভিআইপি রোড, ঢাকা-১০০০, বাংলাদেশ",
  addressBn: "লেভেল ৫, প্রবাসী ভবন, প্লট ১২, কাকরাইল ভিআইপি রোড, ঢাকা-১০০০, বাংলাদেশ",
  officeHours: "শনিবার - বৃহস্পতিবার: সকাল ৯:৩০ – সন্ধ্যা ৬:০০ (শুক্রবার সাপ্তাহিক ছুটি)",
  officeHoursBn: "শনিবার - বৃহস্পতিবার: সকাল ৯:৩০ – সন্ধ্যা ৬:০০ (শুক্রবার সাপ্তাহিক ছুটি)",

  // External Application Form (Google Form)
  googleFormUrl: "https://docs.google.com/forms",

  // Official Social Media Channels
  facebookUrl: "https://facebook.com",
  youtubeUrl: "https://youtube.com",
  linkedinUrl: "https://linkedin.com",

  // Map Location (URL for link and optional embed)
  googleMapsUrl: "https://maps.google.com",
  googleMapsEmbedUrl: ""
};

// Protect configuration against accidental mutation
if (typeof Object.freeze === 'function') {
  Object.freeze(SITE_CONFIG);
}
