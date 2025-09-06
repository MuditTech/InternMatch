
export type LanguageCode = 'en' | 'hi' | 'te' | 'ta' | 'mr' | 'gu' | 'bn';

export type Translation = {
  // Landing Page
  dashboard: string;
  heroTitle: string;
  heroSubtitle: string;
  forCandidates: string;
  forCompanies: string;
  candidatesDesc: string;
  companiesDesc: string;
  intelligentMatching: string;
  matchingDesc: string;
  eligibilityTitle: string;
  eligibilitySubtitle: string;
  whoCanApply: string;
  eligiblePoints: string[];
  whoIsNotEligible: string;
  ineligiblePoints: string[];
  programDetailsTitle: string;
  programDetailsSubtitle: string;
  structureTitle: string;
  structurePoints: string[];
  stipendTitle: string;
  stipendBenefit: string;
  stipendAmount: string;
  stipendTable: { benefit: string; detail: string }[];
  selectionTitle: string;
  selectionPoints: string[];
  benefitsTitle: string;
  benefitsPoints: string[];
  datesTitle: string;
  datesPoints: string[];
  additionalInfoTitle: string;
  additionalInfoPoints: string[];
  stayUpdatedTitle: string;
  stayUpdatedDesc: string;
  downloadApp: string;
  footerRights: string;

  // Login Page
  login: string;
  signUp: string;
  loginDescription: string;
  email: string;
  password: string;
  imACandidate: string;
  imACompany: string;
  candidateSignUp: string;
  candidateSignUpDescription: string;
  name: string;
  namePlaceholder: string;
  createProfileAndFindInternships: string;
  companySignUp: string;
  companySignUpDescription: string;
  companyName: string;
  companyNamePlaceholder: string;
  companyEmail: string;
  createAccountAndPostJob: string;

  // Sidebar
  myProfile: string;
  internships: string;
  myMatches: string;
  messages: string;
  logout: string;
  myInternshipListing: string;
  studentProfiles: string;
  
  // Dashboard
  welcomeBack: string;
  dashboardSubtitle: string;
  profileCompletion: string;
  profileCompletionSubtitle: string;
  activeApplications: string;
  activeApplicationsSubtitle: string;
  newMessages: string;
  newMessagesSubtitle: string;
  applicationTrends: string;
  applicationTrendsSubtitle: string;
  months: { jan: string; feb: string; mar: string; apr: string; may: string; jun: string; };

  // Profile Page
  createYourProfile: string;
  myProfileSubtitle: string;
  createYourProfileSubtitle: string;
  profileDetails: string;
  profileDetailsSubtitle: string;
  
  // Profile Form
  fullName: string,
  fullNamePlaceholder: string,
  headline: string,
  headlinePlaceholder: string,
  caste: string,
  castePlaceholder: string,
  familyAnnualIncome: string,
  familyAnnualIncomePlaceholder: string,
  professionalSummary: string,
  professionalSummaryPlaceholder: string,
  skills: string,
  skillsPlaceholder: string,
  experienceAndProjects: string,
  experienceAndProjectsPlaceholder: string,
  internshipPreferences: string,
  internshipPreferencesPlaceholder: string,
  saveChanges: string,
  profileUpdated: string;
  profileUpdatedDescription: string;
  
  // Internships Page (Candidate)
  internshipListings: string;
  internshipListingsSubtitle: string;
  viewDetails: string;
  applicants: string;

  // Internships Page (Company)
  candidateProfiles: string;
  candidateProfilesSubtitle: string;
  postNewJob: string;
  qualifications: string;
  viewFullProfile: string;

  // Internship Details Page
  applyNow: string;
  aboutTheInternship: string;
  responsibilities: string;
  requirements: string;

  // Application Success Page
  applicationSuccessful: string;
  applicationSuccessMessage: string;
  applicationSuccessNextSteps: string;
  keepBrowsing: string;
  goToDashboard: string;

  // Matches Page
  candidateMatches: string;
  candidateMatchesSubtitle: string;
  myMatchesSubtitle: string;
  
  // Matches Component (Internship)
  aiPoweredMatchmaking: string;
  aiPoweredMatchmakingSubtitle: string;
  findingMatches: string;
  findMyMatches: string;
  yourTopMatches: string;
  findingYourMatches: string;
  noMatchesFound: string;
  noMatchesFoundSubtitle: string;
  errorOccurred: string;
  failedToFetchMatches: string;
  match: string;

  // Matches Component (Company)
  aiPoweredCandidateMatching: string;
  aiPoweredCandidateMatchingSubtitle: string;
  findingCandidates: string;
  findCandidateMatches: string;
  yourTopCandidates: string;
  noCandidatesFound: string;
  failedToFetchCandidates: string;
  matchedFor: string;

  // Messages Page
  messagesSubtitle: string;
  conversations: string;
  with: string;
  typeAMessage: string;
  selectAConversation: string;

  // New Internship Page
  postNewInternship: string;
  postNewInternshipSubtitle: string;

  // New Internship Form
  describeTheRole: string;
  describeTheRoleSubtitle: string;
  roleDescription: string;
  roleDescriptionPlaceholder: string;
  roleDescriptionValidation: string;
  generating: string;
  generateWithAI: string;
  generationSuccessTitle: string;
  generationSuccessDescription: string;
  generationFailedTitle: string;
  generationFailedDescription: string;
  internshipDetails: string;
  internshipDetailsSubtitle: string;
  internshipTitle: string;
  internshipTitlePlaceholder: string;
  placeOfWork: string;
  placeOfWorkPlaceholder: string;
  fullDescription: string;
  fullDescriptionPlaceholder: string;
  candidatePreferences: string;
  preferredCaste: string;
  selectACaste: string;
  casteOptions: { general: string, obc: string, sc: string, st: string, any: string };
  preferredFamilyIncome: string;
  selectAnIncomeRange: string;
  incomeOptions: { low: string, medium: string, high: string, any: string };
  preferredSkills: string;
  preferredSkillsPlaceholder: string;
  preferredSkillsDescription: string;
  educationQualifications: string;
  educationQualificationsPlaceholder: string;
  educationQualificationsDescription: string;
  postInternship: string;
  internshipPostedTitle: string;
  internshipPostedDescription: string;
};


export const translations: Record<LanguageCode, Translation> = {
  en: {
    // Landing Page
    dashboard: 'Dashboard',
    heroTitle: 'Find Your Perfect Internship with AI',
    heroSubtitle: 'Our AI-powered platform connects talented students with innovative companies for the perfect internship match.',
    forCandidates: 'For Candidates',
    forCompanies: 'For Companies',
    candidatesDesc: 'Create your profile, showcase your skills, and let our AI find the best internship opportunities for you.',
    companiesDesc: 'Post your internship listings and get matched with the most qualified and motivated candidates.',
    intelligentMatching: 'Intelligent Matching',
    matchingDesc: 'Our advanced algorithm analyzes profiles and listings to ensure the highest compatibility.',
    eligibilityTitle: 'Eligibility Criteria',
    eligibilitySubtitle: 'Please ensure you meet the following criteria before applying.',
    whoCanApply: 'Who Can Apply',
    eligiblePoints: [
        "The candidate belongs to Indian nationality.",
        "The candidate’s age should be between 21 to 24 years (as on the last date for submission of the application).",
        "The candidate should not be full-time employed.",
        "The candidate should not be engaged in full-time education.",
        "The candidates enrolled in online/distance learning programmes are eligible to apply.",
        "The candidate should have completed High School, Higher Secondary School, possess a certificate from an ITI, hold a diploma from a Polytechnic Institute, or are graduates with degrees such as BA, B.Sc, B.Com, BCA, BBA, B.Pharma, etc.",
        "The candidate family income should not exceed ₹8,00,000/-.",
    ],
    whoIsNotEligible: 'Who is Not Eligible',
    ineligiblePoints: [
        "Graduates from IITs, IIMs, National Law Universities, IISER, NIDs, and IIITs.",
        "Those having qualifications such as CA, CMA, CS, MBBS, BDS, MBA, any master's or higher degree.",
        "Those undergoing any skill, apprenticeship, internship or student training programme under Central Government or State Government schemes.",
        "Those who have completed apprenticeship training under National Apprenticeship Training Scheme (NATS) or National Apprenticeship Promotion Scheme (NAPS) at any point.",
        "If the annual income of any of the family members of the candidate exceeds ₹8 lakhs.",
        "If any member of the family is a permanent/regular government employee.",
    ],
    programDetailsTitle: 'Program Details',
    programDetailsSubtitle: 'Everything you need to know about the internship program.',
    structureTitle: 'Internship Duration & Structure',
    structurePoints: [
      'Duration: 12 months (including 6 months of hands-on training).',
      'Sectors: Banking, Oil & Gas, Hospitality, Automotive, Manufacturing, FMCG, Travel, Energy, and more.',
      'Participating Companies: Reliance, TCS, HDFC Bank, Maruti Suzuki, ITC, Hindustan Unilever, The Times Group, and 500+ others.',
    ],
    stipendTitle: 'Stipend & Financial Benefits',
    stipendBenefit: 'Benefit',
    stipendAmount: 'Amount/Detail',
    stipendTable: [
        { benefit: 'Monthly Stipend', detail: '₹5,000 (₹4,500 from Government, ₹500 from host company)' },
        { benefit: 'One-time Grant', detail: '₹6,000 upon commencement (via Direct Benefit Transfer to Aadhaar-seeded bank account)' },
        { benefit: 'Insurance Coverage', detail: 'Pradhan Mantri Jeevan Jyoti Bima Yojana and Pradhan Mantri Suraksha Bima Yojana' },
        { benefit: 'Certificate', detail: 'Government-certified internship certificate upon successful completion' },
    ],
    selectionTitle: 'Selection Process',
    selectionPoints: [
        'Screening: Based on academic background, SOP, and preferences.',
        'Interview: Some roles may require a short virtual interview.',
        'Diversity & Inclusion: Shortlisting emphasizes diversity, especially for candidates from rural/aspirational districts and reserved categories.',
    ],
    benefitsTitle: 'Key Benefits',
    benefitsPoints: [
        'Real-world industry exposure',
        'Skill development and mentorship',
        'Networking opportunities',
        'Enhanced resume value and career prospects',
        'Financial support during the internship',
    ],
    datesTitle: 'Important Dates (2025)',
    datesPoints: [
        'Phase 2 Application Deadline: April 22, 2025',
        'Selection Process: Ongoing (check portal for updates)',
        'Internship Commencement: As per company schedule',
    ],
    additionalInfoTitle: 'Additional Information',
    additionalInfoPoints: [
        'No Application Fee: The scheme is free to apply.',
        'Affirmative Action: Special consideration for candidates from rural/aspirational districts and underrepresented communities.',
        'Performance Evaluation: Transparent process with feedback for interns.',
    ],
    stayUpdatedTitle: 'How to Stay Updated',
    stayUpdatedDesc: 'Download the PMIS App for real-time notifications. Regularly check the official portal and registered email/SMS for updates.',
    downloadApp: 'Download App',
    footerRights: 'All rights reserved.',

    // Login Page
    login: 'Login',
    signUp: 'Sign Up',
    loginDescription: 'Enter your credentials to access your account.',
    email: 'Email',
    password: 'Password',
    imACandidate: "I'm a Candidate",
    imACompany: "I'm a Company",
    candidateSignUp: 'Candidate Sign Up',
    candidateSignUpDescription: 'Create an account to find your dream internship.',
    name: 'Name',
    namePlaceholder: 'Name',
    createProfileAndFindInternships: 'Create Profile & Find Internships',
    companySignUp: 'Company Sign Up',
    companySignUpDescription: 'Create an account to hire the best talent.',
    companyName: 'Company Name',
    companyNamePlaceholder: 'Your Company',
    companyEmail: 'Company Email',
    createAccountAndPostJob: 'Create Account & Post Job',

    // Sidebar
    myProfile: 'My Profile',
    internships: 'Internships',
    myMatches: 'My Matches',
    messages: 'Messages',
    logout: 'Logout',
    myInternshipListing: 'My Internship Listing',
    studentProfiles: 'Student Profiles',

    // Dashboard
    welcomeBack: 'Welcome Back!',
    dashboardSubtitle: "Here's a summary of your internship search.",
    profileCompletion: 'Profile Completion',
    profileCompletionSubtitle: 'A complete profile attracts more recruiters.',
    activeApplications: 'Active Applications',
    activeApplicationsSubtitle: '+2 in the last week',
    newMessages: 'New Messages',
    newMessagesSubtitle: 'From InnovateTech and Creative Solutions',
    applicationTrends: 'Application Trends',
    applicationTrendsSubtitle: 'Your application activity over the last 6 months.',
    months: { jan: "Jan", feb: "Feb", mar: "Mar", apr: "Apr", may: "May", jun: "Jun" },

    // Profile Page
    createYourProfile: 'Create Your Profile',
    myProfileSubtitle: "Keep your profile up-to-date to attract the best opportunities.",
    createYourProfileSubtitle: "Fill out your profile to get started. This information will be used to match you with the best internships.",
    profileDetails: 'Profile Details',
    profileDetailsSubtitle: 'This information will be used to match you with internships.',

    // Profile Form
    fullName: 'Full Name',
    fullNamePlaceholder: 'e.g., Alex Doe',
    headline: 'Headline',
    headlinePlaceholder: 'e.g., Aspiring Software Engineer',
    caste: 'Caste',
    castePlaceholder: 'e.g., General, OBC, SC, ST',
    familyAnnualIncome: 'Family Annual Income',
    familyAnnualIncomePlaceholder: 'e.g., 500000',
    professionalSummary: 'Professional Summary',
    professionalSummaryPlaceholder: "Tell us a bit about yourself, your goals, and what you're passionate about.",
    skills: 'Skills',
    skillsPlaceholder: 'e.g., JavaScript, React, Python, Figma...',
    experienceAndProjects: 'Experience & Projects',
    experienceAndProjectsPlaceholder: "Describe your relevant work experience, projects, and accomplishments.",
    internshipPreferences: 'Internship Preferences',
    internshipPreferencesPlaceholder: "What are you looking for in an internship? (e.g., industry, company size, location)",
    saveChanges: 'Save Changes',
    profileUpdated: 'Profile Updated!',
    profileUpdatedDescription: 'Your changes have been saved successfully.',
    
    // Internships Page (Candidate)
    internshipListings: 'Internship Listings',
    internshipListingsSubtitle: 'Browse and apply for your next opportunity.',
    viewDetails: 'View Details',
    applicants: 'applicants',

    // Internships Page (Company)
    candidateProfiles: 'Candidate Profiles',
    candidateProfilesSubtitle: 'Discover top talent for your open roles.',
    postNewJob: 'Post New Job',
    qualifications: 'Qualifications',
    viewFullProfile: 'View Full Profile',

    // Internship Details Page
    applyNow: 'Apply Now',
    aboutTheInternship: 'About the Internship',
    responsibilities: 'Responsibilities',
    requirements: 'Requirements',

    // Application Success Page
    applicationSuccessful: 'Application Successful!',
    applicationSuccessMessage: 'You have successfully applied for the {title} position at {company}.',
    applicationSuccessNextSteps: 'The company will review your profile and get back to you if you are a good fit. You can check the status of your applications in the messages tab.',
    keepBrowsing: 'Keep Browsing',
    goToDashboard: 'Go to Dashboard',

    // Matches Page
    candidateMatches: 'Candidate Matches',
    candidateMatchesSubtitle: "Review candidates that our AI has matched to your job profiles.",
    myMatchesSubtitle: "Discover internships perfectly tailored to your skills and preferences.",
    
    // Matches Component (Internship)
    aiPoweredMatchmaking: 'AI-Powered Matchmaking',
    aiPoweredMatchmakingSubtitle: 'Click the button below to let our AI analyze your profile and find the best internship matches for you.',
    findingMatches: 'Finding Matches',
    findMyMatches: 'Find My Matches',
    yourTopMatches: 'Your Top Matches',
    findingYourMatches: 'Finding your matches',
    noMatchesFound: 'No matches found',
    noMatchesFoundSubtitle: "The AI couldn't find any suitable matches. Try updating your profile.",
    errorOccurred: 'An error occurred',
    failedToFetchMatches: 'Failed to fetch internship matches. Please try again.',
    match: 'Match',

    // Matches Component (Company)
    aiPoweredCandidateMatching: 'AI-Powered Candidate Matching',
    aiPoweredCandidateMatchingSubtitle: 'Click the button to let our AI find the best candidates for your open positions.',
    findingCandidates: 'Finding Candidates',
    findCandidateMatches: 'Find Candidate Matches',
    yourTopCandidates: 'Your Top Candidates',
    noCandidatesFound: "The AI couldn't find any suitable candidates yet.",
    failedToFetchCandidates: 'Failed to fetch candidate matches. Please try again.',
    matchedFor: 'Matched for',

    // Messages Page
    messagesSubtitle: 'Communicate directly with companies about opportunities.',
    conversations: 'Conversations',
    with: 'with',
    typeAMessage: 'Type a message...',
    selectAConversation: 'Select a conversation to start chatting',

    // New Internship Page
    postNewInternship: 'Post a New Internship',
    postNewInternshipSubtitle: 'Fill out the form below to find your next great hire.',

    // New Internship Form
    describeTheRole: 'Describe the Role',
    describeTheRoleSubtitle: 'Start by providing a brief description of the internship role. Our AI will use this to generate a full listing for you.',
    roleDescription: 'Role Description',
    roleDescriptionPlaceholder: 'e.g., A frontend developer intern to work on our new React-based design system...',
    roleDescriptionValidation: 'Please provide a more detailed description (at least 20 characters).',
    generating: 'Generating',
    generateWithAI: 'Generate with AI',
    generationSuccessTitle: 'Internship Draft Generated!',
    generationSuccessDescription: 'The AI has created a draft. You can now review and edit it below.',
    generationFailedTitle: 'Generation Failed',
    generationFailedDescription: 'There was an error generating the internship listing. Please try again.',
    internshipDetails: 'Internship Details',
    internshipDetailsSubtitle: 'Review and edit the generated details below.',
    internshipTitle: 'Internship Title',
    internshipTitlePlaceholder: 'e.g., Software Engineer Intern',
    placeOfWork: 'Place of Work',
    placeOfWorkPlaceholder: 'e.g., San Francisco, CA or Remote',
    fullDescription: 'Full Description',
    fullDescriptionPlaceholder: 'A detailed description of the role, company, etc.',
    candidatePreferences: 'Candidate Preferences (Optional)',
    preferredCaste: 'Preferred Caste',
    selectACaste: 'Select a caste',
    casteOptions: { general: 'General', obc: 'OBC', sc: 'SC', st: 'ST', any: 'Any' },
    preferredFamilyIncome: 'Preferred Family Income',
    selectAnIncomeRange: 'Select an income range',
    incomeOptions: { low: 'Less than ₹2.5 Lakh', medium: '₹2.5 Lakh - ₹8 Lakh', high: 'More than ₹8 Lakh', any: 'Any' },
    preferredSkills: 'Preferred Skills',
    preferredSkillsPlaceholder: 'e.g., React, Python, Data Analysis',
    preferredSkillsDescription: 'Enter a comma-separated list of skills.',
    educationQualifications: 'Education Qualifications',
    educationQualificationsPlaceholder: 'e.g., B.Tech in CS, B.Com',
    educationQualificationsDescription: 'Enter required or preferred educational qualifications.',
    postInternship: 'Post Internship',
    internshipPostedTitle: 'Internship Posted!',
    internshipPostedDescription: 'Your internship has been successfully posted.',
  },
  hi: {
    // Landing Page
    dashboard: 'डैशबोर्ड',
    heroTitle: 'AI के साथ अपनी आदर्श इंटर्नशिप खोजें',
    heroSubtitle: 'हमारा AI-संचालित प्लेटफ़ॉर्म प्रतिभाशाली छात्रों को आदर्श इंटर्नशिप मैच के लिए नवीन कंपनियों से जोड़ता है।',
    forCandidates: 'उम्मीदवारों के लिए',
    forCompanies: 'कंपनियों के लिए',
    candidatesDesc: 'अपनी प्रोफ़ाइल बनाएं, अपने कौशल का प्रदर्शन करें, और हमारे AI को आपके लिए सर्वश्रेष्ठ इंटर्नशिप अवसर खोजने दें।',
    companiesDesc: 'अपनी इंटर्नशिप लिस्टिंग पोस्ट करें और सबसे योग्य और प्रेरित उम्मीदवारों के साथ मिलान करें।',
    intelligentMatching: 'बुद्धिमान मिलान',
    matchingDesc: 'हमारा उन्नत एल्गोरिथ्म उच्चतम संगतता सुनिश्चित करने के लिए प्रोफाइल और लिस्टिंग का विश्लेषण करता है।',
    eligibilityTitle: 'पात्रता मापदंड',
    eligibilitySubtitle: 'कृपया आवेदन करने से पहले सुनिश्चित करें कि आप निम्नलिखित मानदंडों को पूरा करते हैं।',
    whoCanApply: 'कौन आवेदन कर सकता है',
    eligiblePoints: [
        "उम्मीदवार भारतीय राष्ट्रीयता का होना चाहिए।",
        "उम्मीदवार की आयु 21 से 24 वर्ष के बीच होनी चाहिए (आवेदन जमा करने की अंतिम तिथि के अनुसार)।",
        "उम्मीदवार पूर्णकालिक नियोजित नहीं होना चाहिए।",
        "उम्मीदवार पूर्णकालिक शिक्षा में संलग्न नहीं होना चाहिए।",
        "ऑनलाइन/दूरस्थ शिक्षा कार्यक्रमों में नामांकित उम्मीदवार आवेदन करने के पात्र हैं।",
        "उम्मीदवार को हाई स्कूल, हायर सेकेंडरी स्कूल पूरा करना चाहिए, आईटीआई से प्रमाण पत्र होना चाहिए, पॉलिटेक्निक संस्थान से डिप्लोमा होना चाहिए, या बीए, बी.एससी, बी.कॉम, बीसीए, बीबीए, बी.फार्मा जैसी डिग्री के साथ स्नातक होना चाहिए।",
        "उम्मीदवार के परिवार की आय ₹8,00,000/- से अधिक नहीं होनी चाहिए।",
    ],
    whoIsNotEligible: 'कौन पात्र नहीं है',
    ineligiblePoints: [
        "आईआईटी, आईआईएम, राष्ट्रीय विधि विश्वविद्यालयों, आईआईएसईआर, एनआईडी, और आईआईआईटी से स्नातक।",
        "सीए, सीएमए, सीएस, एमबीबीएस, बीडीएस, एमबीए, कोई मास्टर या उच्च डिग्री जैसी योग्यता रखने वाले।",
        "केंद्र सरकार या राज्य सरकार की योजनाओं के तहत किसी भी कौशल, शिक्षुता, इंटर्नशिप या छात्र प्रशिक्षण कार्यक्रम से गुजर रहे लोग।",
        "जिन्होंने किसी भी समय राष्ट्रीय शिक्षुता प्रशिक्षण योजना (NATS) या राष्ट्रीय शिक्षुता प्रोत्साहन योजना (NAPS) के तहत शिक्षुता प्रशिक्षण पूरा कर लिया है।",
        "यदि उम्मीदवार के परिवार के किसी भी सदस्य की वार्षिक आय ₹8 लाख से अधिक है।",
        "यदि परिवार का कोई भी सदस्य स्थायी/नियमित सरकारी कर्मचारी है।",
    ],
    programDetailsTitle: 'कार्यक्रम विवरण',
    programDetailsSubtitle: 'इंटर्नशिप कार्यक्रम के बारे में आपको जो कुछ भी जानने की जरूरत है।',
    structureTitle: 'इंटर्नशिप अवधि और संरचना',
    structurePoints: [
        'अवधि: 12 महीने (6 महीने के व्यावहारिक प्रशिक्षण सहित)।',
        'क्षेत्र: बैंकिंग, तेल और गैस, आतिथ्य, मोटर वाहन, विनिर्माण, एफएमसीजी, यात्रा, ऊर्जा, और बहुत कुछ।',
        'भाग लेने वाली कंपनियां: रिलायंस, टीसीएस, एचडीएफसी बैंक, मारुति सुजुकी, आईटीसी, हिंदुस्तान यूनिलीवर, द टाइम्स ग्रुप, और 500+ अन्य।',
    ],
    stipendTitle: 'वजीफा और वित्तीय लाभ',
    stipendBenefit: 'लाभ',
    stipendAmount: 'राशि/विवरण',
    stipendTable: [
        { benefit: 'मासिक वजीफा', detail: '₹5,000 (₹4,500 सरकार से, ₹500 मेजबान कंपनी से)' },
        { benefit: 'एकमुश्त अनुदान', detail: 'शुरू होने पर ₹6,000 (आधार-वरीय बैंक खाते में प्रत्यक्ष लाभ हस्तांतरण के माध्यम से)' },
        { benefit: 'बीमा कवरेज', detail: 'प्रधानमंत्री जीवन ज्योति बीमा योजना और प्रधानमंत्री सुरक्षा बीमा योजना' },
        { benefit: 'प्रमाण पत्र', detail: 'सफलतापूर्वक पूरा होने पर सरकार-प्रमाणित इंटर्नशिप प्रमाण पत्र' },
    ],
    selectionTitle: 'चयन प्रक्रिया',
    selectionPoints: [
        'स्क्रीनिंग: शैक्षणिक पृष्ठभूमि, एसओपी, और वरीयताओं के आधार पर।',
        'साक्षात्कार: कुछ भूमिकाओं के लिए एक संक्षिप्त आभासी साक्षात्कार की आवश्यकता हो सकती है।',
        'विविधता और समावेशन: शॉर्टलिस्टिंग में विविधता पर जोर दिया जाता है, खासकर ग्रामीण/आकांक्षी जिलों और आरक्षित श्रेणियों के उम्मीदवारों के लिए।',
    ],
    benefitsTitle: 'मुख्य लाभ',
    benefitsPoints: [
        'वास्तविक दुनिया का उद्योग प्रदर्शन',
        'कौशल विकास और सलाह',
        'नेटवर्किंग के अवसर',
        'पुनः आरंभ मूल्य और कैरियर की संभावनाएं बढ़ीं',
        'इंटर्नशिप के दौरान वित्तीय सहायता',
    ],
    datesTitle: 'महत्वपूर्ण तिथियां (2025)',
    datesPoints: [
        'चरण 2 आवेदन की अंतिम तिथि: 22 अप्रैल, 2025',
        'चयन प्रक्रिया: जारी है (अपडेट के लिए पोर्टल देखें)',
        'इंटर्नशिप प्रारंभ: कंपनी के कार्यक्रम के अनुसार',
    ],
    additionalInfoTitle: 'अतिरिक्त जानकारी',
    additionalInfoPoints: [
        'कोई आवेदन शुल्क नहीं: योजना आवेदन करने के लिए स्वतंत्र है।',
        'सकारात्मक कार्रवाई: ग्रामीण/आकांक्षी जिलों और कम प्रतिनिधित्व वाले समुदायों के उम्मीदवारों के लिए विशेष विचार।',
        'प्रदर्शन मूल्यांकन: प्रशिक्षुओं के लिए प्रतिक्रिया के साथ شفاف प्रक्रिया।',
    ],
    stayUpdatedTitle: 'अपडेट कैसे रहें',
    stayUpdatedDesc: 'वास्तविक समय की सूचनाओं के लिए पीएमआईएस ऐप डाउनलोड करें। अपडेट के लिए आधिकारिक पोर्टल और पंजीकृत ईमेल/एसएमएस की नियमित रूप से जांच करें।',
    downloadApp: 'ऐप डाउनलोड करें',
    footerRights: 'सर्वाधिकार सुरक्षित।',

    // Login Page
    login: 'लॉग इन करें',
    signUp: 'साइन अप करें',
    loginDescription: 'अपने खाते तक पहुँचने के लिए अपनी क्रेडेंशियल दर्ज करें।',
    email: 'ईमेल',
    password: 'पासवर्ड',
    imACandidate: "मैं एक उम्मीदवार हूँ",
    imACompany: "मैं एक कंपनी हूँ",
    candidateSignUp: 'उम्मीदवार साइन अप',
    candidateSignUpDescription: 'अपने सपनों की इंटर्नशिप खोजने के लिए एक खाता बनाएँ।',
    name: 'नाम',
    namePlaceholder: 'नाम',
    createProfileAndFindInternships: 'प्रोफ़ाइल बनाएँ और इंटर्नशिप खोजें',
    companySignUp: 'कंपनी साइन अप',
    companySignUpDescription: 'सर्वश्रेष्ठ प्रतिभा को काम पर रखने के लिए एक खाता बनाएँ।',
    companyName: 'कंपनी का नाम',
    companyNamePlaceholder: 'आपकी कंपनी',
    companyEmail: 'कंपनी ईमेल',
    createAccountAndPostJob: 'खाता बनाएँ और नौकरी पोस्ट करें',

    // Sidebar
    myProfile: 'मेरी प्रोफ़ाइल',
    internships: 'इंटर्नशिप',
    myMatches: 'मेरे मैच',
    messages: 'संदेश',
    logout: 'लॉग आउट',
    myInternshipListing: 'मेरी इंटर्नशिप लिस्टिंग',
    studentProfiles: 'छात्र प्रोफाइल',

    // Dashboard
    welcomeBack: 'वापस स्वागत है!',
    dashboardSubtitle: "यहाँ आपकी इंटर्नशिप खोज का सारांश है।",
    profileCompletion: 'प्रोफ़ाइल पूर्णता',
    profileCompletionSubtitle: 'एक पूर्ण प्रोफ़ाइल अधिक नियोक्ताओं को आकर्षित करती है।',
    activeApplications: 'सक्रिय आवेदन',
    activeApplicationsSubtitle: 'पिछले सप्ताह में +2',
    newMessages: 'नए संदेश',
    newMessagesSubtitle: 'इनोवेटटेक और क्रिएटिव सॉल्यूशंस से',
    applicationTrends: 'आवेदन रुझान',
    applicationTrendsSubtitle: 'पिछले 6 महीनों में आपकी आवेदन गतिविधि।',
    months: { jan: "जन", feb: "फर", mar: "मार्च", apr: "अप्रै", may: "मई", jun: "जून" },

    // Profile Page
    createYourProfile: 'अपनी प्रोफ़ाइल बनाएँ',
    myProfileSubtitle: "सर्वश्रेष्ठ अवसरों को आकर्षित करने के लिए अपनी प्रोफ़ाइल को अद्यतित रखें।",
    createYourProfileSubtitle: "शुरू करने के लिए अपनी प्रोफ़ाइल भरें। यह जानकारी आपको सर्वश्रेष्ठ इंटर्नशिप के साथ मिलाने के लिए उपयोग की जाएगी।",
    profileDetails: 'प्रोफ़ाइल विवरण',
    profileDetailsSubtitle: 'यह जानकारी इंटर्नशिप के साथ आपका मिलान करने के लिए उपयोग की जाएगी।',

    // Profile Form
    fullName: 'पूरा नाम',
    fullNamePlaceholder: 'जैसे, एलेक्स डो',
    headline: 'हेडलाइन',
    headlinePlaceholder: 'जैसे, महत्वाकांक्षी सॉफ्टवेयर इंजीनियर',
    caste: 'जाति',
    castePlaceholder: 'जैसे, सामान्य, ओबीसी, एससी, एसटी',
    familyAnnualIncome: 'पारिवारिक वार्षिक आय',
    familyAnnualIncomePlaceholder: 'जैसे, 500000',
    professionalSummary: 'पेशेवर सारांश',
    professionalSummaryPlaceholder: "हमें अपने बारे में, अपने लक्ष्यों के बारे में और आप किस चीज़ के प्रति जुनूनी हैं, थोड़ा बताएं।",
    skills: 'कौशल',
    skillsPlaceholder: 'जैसे, जावास्क्रिप्ट, रिएक्ट, पायथन, फिग्मा...',
    experienceAndProjects: 'अनुभव और परियोजनाएं',
    experienceAndProjectsPlaceholder: "अपने प्रासंगिक कार्य अनुभव, परियोजनाओं और उपलब्धियों का वर्णन करें।",
    internshipPreferences: 'इंटर्नशिप प्राथमिकताएं',
    internshipPreferencesPlaceholder: "आप एक इंटर्नशिप में क्या खोज रहे हैं? (जैसे, उद्योग, कंपनी का आकार, स्थान)",
    saveChanges: 'बदलाव सहेजें',
    profileUpdated: 'प्रोफ़ाइल अपडेट हो गई!',
    profileUpdatedDescription: 'आपके बदलाव सफलतापूर्वक सहेज लिए गए हैं।',

    // Internships Page (Candidate)
    internshipListings: 'इंटर्नशिप लिस्टिंग',
    internshipListingsSubtitle: 'अपने अगले अवसर के लिए ब्राउज़ करें और आवेदन करें।',
    viewDetails: 'विवरण देखें',
    applicants: 'आवेदक',

    // Internships Page (Company)
    candidateProfiles: 'उम्मीदवार प्रोफाइल',
    candidateProfilesSubtitle: 'अपनी खुली भूमिकाओं के लिए शीर्ष प्रतिभा खोजें।',
    postNewJob: 'नई नौकरी पोस्ट करें',
    qualifications: 'योग्यताएं',
    viewFullProfile: 'पूरी प्रोफ़ाइल देखें',

    // Internship Details Page
    applyNow: 'अभी आवेदन करें',
    aboutTheInternship: 'इंटर्नशिप के बारे में',
    responsibilities: 'जिम्मेदारियाँ',
    requirements: 'आवश्यकताएँ',

    // Application Success Page
    applicationSuccessful: 'आवेदन सफल!',
    applicationSuccessMessage: 'आपने {company} में {title} पद के लिए सफलतापूर्वक आवेदन किया है।',
    applicationSuccessNextSteps: 'कंपनी आपकी प्रोफ़ाइल की समीक्षा करेगी और यदि आप उपयुक्त हैं तो आपसे संपर्क करेगी। आप संदेश टैब में अपने आवेदनों की स्थिति देख सकते हैं।',
    keepBrowsing: 'ब्राउज़िंग जारी रखें',
    goToDashboard: 'डैशबोर्ड पर जाएँ',

    // Matches Page
    candidateMatches: 'उम्मीदवार मैच',
    candidateMatchesSubtitle: "उन उम्मीदवारों की समीक्षा करें जिन्हें हमारे AI ने आपके जॉब प्रोफाइल से मिलाया है।",
    myMatchesSubtitle: "अपनी कौशल और वरीयताओं के लिए पूरी तरह से तैयार इंटर्नशिप खोजें।",

    // Matches Component (Internship)
    aiPoweredMatchmaking: 'AI-संचालित मैचमेकिंग',
    aiPoweredMatchmakingSubtitle: 'हमारे AI को आपकी प्रोफ़ाइल का विश्लेषण करने और आपके लिए सर्वश्रेष्ठ इंटर्नशिप मैच खोजने के लिए नीचे दिए गए बटन पर क्लिक करें।',
    findingMatches: 'मैच खोज रहा है',
    findMyMatches: 'मेरे मैच खोजें',
    yourTopMatches: 'आपके शीर्ष मैच',
    findingYourMatches: 'आपके मैच खोज रहा है',
    noMatchesFound: 'कोई मैच नहीं मिला',
    noMatchesFoundSubtitle: "AI को कोई उपयुक्त मैच नहीं मिला। अपनी प्रोफ़ाइल अपडेट करने का प्रयास करें।",
    errorOccurred: 'एक त्रुटि हुई',
    failedToFetchMatches: 'इंटर्नशिप मैच लाने में विफल। कृपया पुन: प्रयास करें।',
    match: 'मैच',

    // Matches Component (Company)
    aiPoweredCandidateMatching: 'AI-संचालित उम्मीदवार मिलान',
    aiPoweredCandidateMatchingSubtitle: 'हमारे AI को आपके खुले पदों के लिए सर्वश्रेष्ठ उम्मीदवार खोजने देने के लिए बटन पर क्लिक करें।',
    findingCandidates: 'उम्मीदवार खोज रहा है',
    findCandidateMatches: 'उम्मीदवार मैच खोजें',
    yourTopCandidates: 'आपके शीर्ष उम्मीदवार',
    noCandidatesFound: "AI को अभी तक कोई उपयुक्त उम्मीदवार नहीं मिला।",
    failedToFetchCandidates: 'उम्मीदवार मैच लाने में विफल। कृपया पुन: प्रयास करें।',
    matchedFor: 'के लिए मिलान किया गया',

    // Messages Page
    messagesSubtitle: 'अवसरों के बारे में कंपनियों से सीधे संवाद करें।',
    conversations: 'बातचीत',
    with: 'के साथ',
    typeAMessage: 'एक संदेश टाइप करें...',
    selectAConversation: 'चैटिंग शुरू करने کے لیے ایک گفتگو منتخب کریں۔',

    // New Internship Page
    postNewInternship: 'एक नई इंटर्नशिप पोस्ट करें',
    postNewInternshipSubtitle: 'अपने अगले महान भाड़े को खोजने के लिए नीचे दिए गए फॉर्म को भरें।',

    // New Internship Form
    describeTheRole: 'भूमिका का वर्णन करें',
    describeTheRoleSubtitle: 'इंटर्नशिप भूमिका का संक्षिप्त विवरण प्रदान करके शुरू करें। हमारा AI इसका उपयोग आपके लिए एक पूर्ण लिस्टिंग बनाने के लिए करेगा।',
    roleDescription: 'भूमिका विवरण',
    roleDescriptionPlaceholder: 'जैसे, हमारे नए रिएक्ट-आधारित डिजाइन सिस्टम पर काम करने के लिए एक फ्रंटएंड डेवलपर इंटर्न...',
    roleDescriptionValidation: 'कृपया एक अधिक विस्तृत विवरण प्रदान करें (कम से कम 20 अक्षर)।',
    generating: 'उत्पन्न हो रहा है',
    generateWithAI: 'AI के साथ उत्पन्न करें',
    generationSuccessTitle: 'इंटर्नशिप ड्राफ्ट उत्पन्न!',
    generationSuccessDescription: 'AI ने एक ड्राफ्ट बनाया है। अब आप नीचे इसकी समीक्षा और संपादन कर सकते हैं।',
    generationFailedTitle: 'उत्पादन विफल',
    generationFailedDescription: 'इंटर्नशिप लिस्टिंग उत्पन्न करने में एक त्रुटि हुई। कृपया पुन: प्रयास करें।',
    internshipDetails: 'इंटर्नशिप विवरण',
    internshipDetailsSubtitle: 'नीचे उत्पन्न विवरणों की समीक्षा और संपादन करें।',
    internshipTitle: 'इंटर्नशिप शीर्षक',
    internshipTitlePlaceholder: 'जैसे, सॉफ्टवेयर इंजीनियर इंटर्न',
    placeOfWork: 'कार्यस्थल',
    placeOfWorkPlaceholder: 'जैसे, सैन फ्रांसिस्को, सीए या रिमोट',
    fullDescription: 'पूर्ण विवरण',
    fullDescriptionPlaceholder: 'भूमिका, कंपनी, आदि का विस्तृत विवरण।',
    candidatePreferences: 'उम्मीदवार प्राथमिकताएं (वैकल्पिक)',
    preferredCaste: 'पसंदीदा जाति',
    selectACaste: 'एक जाति चुनें',
    casteOptions: { general: 'सामान्य', obc: 'ओबीसी', sc: 'एससी', st: 'एसटी', any: 'कोई भी' },
    preferredFamilyIncome: 'पसंदीदा पारिवारिक आय',
    selectAnIncomeRange: 'एक आय सीमा चुनें',
    incomeOptions: { low: '₹2.5 लाख से कम', medium: '₹2.5 लाख - ₹8 लाख', high: '₹8 लाख से अधिक', any: 'कोई भी' },
    preferredSkills: 'पसंदीदा कौशल',
    preferredSkillsPlaceholder: 'जैसे, रिएक्ट, पायथन, डेटा विश्लेषण',
    preferredSkillsDescription: 'कौशलों की अल्पविराम से अलग की गई सूची दर्ज करें।',
    educationQualifications: 'शैक्षणिक योग्यता',
    educationQualificationsPlaceholder: 'जैसे, सीएस में बी.टेक, बी.कॉम',
    educationQualificationsDescription: 'आवश्यक या पसंदीदा शैक्षणिक योग्यता दर्ज करें।',
    postInternship: 'इंटर्नशिप पोस्ट करें',
    internshipPostedTitle: 'इंटर्नशिप पोस्ट की गई!',
    internshipPostedDescription: 'आपकी इंटर्नशिप सफलतापूर्वक पोस्ट कर दी गई है।',
  },
  te: {
    // Landing Page
    dashboard: 'డాష్‌బోర్డ్',
    heroTitle: 'AIతో మీ పర్ఫెక్ట్ ఇంటర్న్‌షిప్‌ను కనుగొనండి',
    heroSubtitle: 'మా AI- ఆధారిత ప్లాట్‌ఫారమ్ ప్రతిభావంతులైన విద్యార్థులను సరైన ఇంటర్న్‌షిప్ మ్యాచ్ కోసం వినూత్న కంపెనీలతో కలుపుతుంది.',
    forCandidates: 'అభ్యర్థుల కోసం',
    forCompanies: 'కంపెనీల కోసం',
    candidatesDesc: 'మీ ప్రొఫైల్‌ను సృష్టించండి, మీ నైపుణ్యాలను ప్రదర్శించండి మరియు మా AI మీకు ఉత్తమ ఇంటర్న్‌షిప్ అవకాశాలను కనుగొననివ్వండి.',
    companiesDesc: 'మీ ఇంటర్న్‌షిప్ జాబితాలను పోస్ట్ చేయండి మరియు மிகவும் தகுதியான மற்றும் ஊக்கமுள்ள வேட்பாளர்களுடன் பொருந்துங்கள்.',
    intelligentMatching: 'इंटेलिजेंट ম্যাচিং',
    matchingDesc: 'మా అధునాతన అల్గోరిథం అత్యధిక అనుకూలతను నిర్ధారించడానికి ప్రొఫైల్‌లు మరియు జాబితాలను విశ్లేషిస్తుంది.',
    eligibilityTitle: 'అర్హత ప్రమాణాలు',
    eligibilitySubtitle: 'దయచేసి దరఖాస్తు చేయడానికి ముందు మీరు ఈ క్రింది ప్రమాణాలకు అనుగుణంగా ఉన్నారని నిర్ధారించుకోండి.',
    whoCanApply: 'ఎవరు దరఖాస్తు చేసుకోవచ్చు',
    eligiblePoints: [
        "అభ్యర్థి భారతీయ జాతీయతకు చెందినవారై ఉండాలి.",
        "అభ్యర్థి వయస్సు 21 నుండి 24 సంవత్సరాల మధ్య ఉండాలి (దరఖాస్తు సమర్పణకు చివరి తేదీ నాటికి).",
        "అభ్యర్థి పూర్తికాల ఉద్యోగిగా ఉండకూడదు.",
        "అభ్యర్థి పూర్తికాల విద్యలో నిమగ్నమై ఉండకూడదు.",
        "ఆన్‌లైన్/దూరవిద్య కార్యక్రమాలలో నమోదు చేసుకున్న అభ్యర్థులు దరఖాస్తు చేసుకోవడానికి అర్హులు.",
        "అభ్యర్థి ఉన్నత పాఠశాల, ਉੱਚ మాధ్యमिक పాఠశాల పూర్తి చేసి ఉండాలి, ఐటిఐ నుండి సర్టిఫికేట్ కలిగి ఉండాలి, పాలిటెక్నిక్ ఇన్‌స్టిట్యూట్ నుండి డిప్లొమా కలిగి ఉండాలి, లేదా BA, B.Sc, B.Com, BCA, BBA, B.Pharma వంటి డిగ్రీలతో గ్రాడ్యుయేట్లు అయి ఉండాలి.",
        "అభ్యర్థి కుటుంబ ఆదాయం ₹8,00,000/- మించకూడదు.",
    ],
    whoIsNotEligible: 'ఎవరు అర్హులు కారు',
    ineligiblePoints: [
        "ఐఐటిలు, ఐఐఎంలు, జాతీయ சட்டப் பல்கலைக்கழகங்கள், ఐఐఎస్ఈఆర్, ఎన్ఐడిలు మరియు ఐఐఐటిల నుండి పట్టభద్రులు.",
        "సిఎ, సిఎంఎ, సిఎస్, ఎంబిబిఎస్, బిడిఎస్, ఎంబିఎ, ఏదైనా మాస్టర్స్ లేదా ఉన్నత డిగ్రీ వంటి అర్హతలు ఉన్నవారు.",
        "కేంద్ర ప్రభుత్వం లేదా రాష్ట్ర ప్రభుత్వ పథకాల కింద ఏదైనా నైపుణ్యం, అప్రెంటిస్‌షిప్, ఇంటర్న్‌షిప్ లేదా విద్యార్థి శిక్షణా कार्यक्रमంలో ఉన్నవారు.",
        "జాతీయ అప్రెంటిస్‌షిప్ శిక్షణా పథకం (NATS) లేదా జాతీయ అప్రెంటిస్‌షిప్ ప్రమోషన్ పథకం (NAPS) కింద ఎప్పుడైనా అప్రెంటిస్‌షిప్ శిక్షణ పూర్తి చేసినవారు.",
        "అభ్యర్థి కుటుంబ సభ్యులలో ఎవరి వార్షిక ఆదాయం ₹8 లక్షలు దాటితే.",
        "కుటుంబ సభ్యులలో ఎవరైనా శాశ్వత/నियमित ప్రభుత్వ ఉద్యోగి అయితే.",
    ],
    programDetailsTitle: 'ಕಾರ್ಯಕ್ರಮದ ವಿವರಗಳು',
    programDetailsSubtitle: 'ఇంటర్న్‌షిప్ ప్రోగ్రామ్ గురించి మీరు తెలుసుకోవలసిన ప్రతిదీ.',
    structureTitle: 'ఇంటర్న్‌షిప్ వ్యవధి & నిర్మాణం',
    structurePoints: [
        'వ్యవధి: 12 నెలలు (6 నెలల ప్రత్యక్ష శిక్షణతో సహా).',
        'రంగాలు: బ్యాంకింగ్, तेल మరియు గ్యాస్, ఆతిథ్యం, ఆటోమోటివ్, తయారీ, ఎఫ్ఎంసిజి, ప్రయాணம், శక్తి మరియు మరిన్ని.',
        'పాల్గొనే కంపెనీలు: రిలయన్స్, టిసిఎస్, హెచ్‌డిఎఫ్‌సి बैंक, మారుతి సుजुకి, ఐటిసి, హిందుస్థాన్ यूनिलीवर, ది టైమ్స్ గ్రూప్, మరియు 500+ ఇతరులు.',
    ],
    stipendTitle: 'స్టైఫండ్ & ఆర్థిక ప్రయోజనాలు',
    stipendBenefit: 'ప్రయోజనం',
    stipendAmount: 'మొత్తం/విவரాలు',
    stipendTable: [
        { benefit: 'నెలవారీ స్టైఫండ్', detail: '₹5,000 (ప్రభుత్వం నుండి ₹4,500, హోస్ట్ కంపెనీ నుండి ₹500)' },
        { benefit: 'ఒక-సారి గ్రాంట్', detail: 'ప్రారంభమైనప్పుడు ₹6,000 (ఆధార్-సీडेड बैंक खातेக்கு प्रत्यक्ष लाभ బదిలీ ద్వారా)' },
        { benefit: 'భీమా కவரેஜ்', detail: 'പ്രധാന మంత్రి జీవన్ జ్యోతి బీమా যোজনা మరియు പ്രധാന మంత్రి సుരക്ഷా బీమా యోజన' },
        { benefit: 'సర్టిఫికేట్', detail: 'విజయవంతంగా పూర్తి ಮಾಡಿದ తర్వాత ప్రభుత్వం-ధృవీకరించబడిన ఇంటర్న్‌షిప్ సర్టిఫికేట్' },
    ],
    selectionTitle: 'ఎంపిక ప్రక్రియ',
    selectionPoints: [
        'స్క్రీనింగ్: విద్యా ಹಿನ್ನೆಲೆ, SOP మరియు ప్రాధాన్యతల ఆధారంగా.',
        'ఇంటర్వ్యూ: కొన్ని పాత్రలకు చిన్న వర్చువల్ ఇంటర్వ్యూ అవసరం కావచ్చు.',
        'వైవిధ్యం & συμπερίληψη: షార్ట్‌లిస్టింగ్ వైవిధ్యానికి ప్రాధాన్యత ఇస్తుంది, ముఖ్యంగా గ్రామీణ/ಆಕಾಂಕ್ಷೆಯ ಜಿಲ್ಲలు మరియు రిజర్వ్ చేయబడిన వర్గాల నుండి అభ్యర్థుల కోసం.',
    ],
    benefitsTitle: 'ముఖ్య ప్రయోజనాలు',
    benefitsPoints: [
        'వాస్తవ-ప్రపంచ పరిశ్రమ బహిర్గతం',
        'నైపుణ्याಭಿವೃದ್ಧi మరియు मार्गदर्शन',
        'నెట్‌వర్కింగ్ అవకాశాలు',
        'మెరుగుపరచబడిన రెజ్యూమ్ విలువ మరియు தொழில் అవకాశాలు',
        'ఇంటర్న్‌ഷിప్ సమయంలో ఆర్థిక సహాయం',
    ],
    datesTitle: 'ముఖ్యమైన తేదీలు (2025)',
    datesPoints: [
        'దశ 2 దరఖాస్తు గడువు: ఏప్రిల్ 22, 2025',
        'ఎంపిక ప్రక్రియ: కొనసాగుతోంది (నవీకరణల కోసం పోర్టల్ తనిఖీ చేయండి)',
        'ఇంటర్న్‌ഷിప్ ప్రారంభం: కంపెనీ షెడ్యూల్ ప్రకారం',
    ],
    additionalInfoTitle: 'అదనపు సమాచారం',
    additionalInfoPoints: [
        'దరఖాస్తు రుసుము లేదు: పథకం దరఖాస్తు చేసుకోవడానికి ఉచితం.',
        'ಧನಾത്മక చర్య: గ్రామీణ/ಆಕಾಂಕ್ಷೆಯ ಜಿಲ್ಲలు మరియు ప్రాతినిధ్యం లేని వర్గాల నుండి అభ్యర్థులకు ప్రత్యేక പരിഗണన.',
        'పనితీరు మూల్యాంకനം: ఇంటర్న్‌ల కోసం అభిప్రాయంతో పారదర్శక ప్రక్రియ.',
    ],
    stayUpdatedTitle: 'నవీకరించబడడం ఎలా',
    stayUpdatedDesc: 'నిజ-समय నోటిఫికేషన్‌ల కోసం PMIS యాప్‌ను డౌన్‌లోడ్ చేయండి. నవీకరణల కోసం అధికారిక పోర్టల్ మరియు பதிவுசெய்யப்பட்ட ఇമെయిల్/SMSను క్రమం తప్పకుండా తనిఖీ చేయండి.',
    downloadApp: 'యాప్‌ను డౌన్‌లోడ్ చేయండి',
    footerRights: 'అన్ని హక్కులు ప్రత్యేకించబడ్డాయి.',

    // Login Page
    login: 'లాగిన్',
    signUp: 'సైన్ అప్',
    loginDescription: 'మీ ఖాతాను యాక్సెస్ చేయడానికి మీ ఆధారాలను నమోదు చేయండి.',
    email: 'ఇమెయిల్',
    password: 'పాస్‌వర్డ్',
    imACandidate: 'నేను అభ్యర్థిని',
    imACompany: 'నేను కంపెనీని',
    candidateSignUp: 'అభ్యర్థి సైన్ అప్',
    candidateSignUpDescription: 'మీ కలల ఇంటర్న్‌షిప్‌ను కనుగొనడానికి ఒక ఖాతాను సృష్టించండి.',
    name: 'పేరు',
    namePlaceholder: 'పేరు',
    createProfileAndFindInternships: 'ప్రొఫైల్ సృష్టించండి & ఇంటర్న్‌షిప్‌లను కనుగొనండి',
    companySignUp: 'కంపెనీ సైన్ అప్',
    companySignUpDescription: 'ఉత్తమ ప్రతిభను నియమించుకోవడానికి ఒక ఖాతాను సృష్టించండి.',
    companyName: 'కంపెనీ పేరు',
    companyNamePlaceholder: 'మీ కంపెనీ',
    companyEmail: 'కంపెనీ ఇమెయిల్',
    createAccountAndPostJob: 'ఖాతాను సృష్టించండి & ఉద్యోగాన్ని పోస్ట్ చేయండి',

    // Sidebar
    myProfile: 'నా ప్రొఫైల్',
    internships: 'ఇంటర్న్‌షిప్‌లు',
    myMatches: 'నా మ్యాచ్‌లు',
    messages: 'సందేశాలు',
    logout: 'లాగ్అవుట్',
    myInternshipListing: 'నా ఇంటర్న్‌షిప్ జాబితా',
    studentProfiles: 'విద్యార్థి ప్రొఫైల్స్',

    // Dashboard
    welcomeBack: ' తిరిగి స్వాగతం!',
    dashboardSubtitle: 'ఇక్కడ మీ ఇంటర్న్‌షిప్ శోధన యొక్క సారాంశం ఉంది.',
    profileCompletion: 'ప్రొఫైల్ పూర్తి',
    profileCompletionSubtitle: 'ఒక పూర్తి ప్రొఫైల్ ఎక్కువ మంది నియామకదారులను ఆకర్షిస్తుంది.',
    activeApplications: 'క్రియాశీల దరఖాస్తులు',
    activeApplicationsSubtitle: 'గత వారంలో +2',
    newMessages: 'కొత్త సందేశాలు',
    newMessagesSubtitle: 'ఇన్నోవేట్‌టెక్ మరియు క్రియేటివ్ సొల్యూషన్స్ నుండి',
    applicationTrends: 'దరఖాస్తు పోకడలు',
    applicationTrendsSubtitle: 'గత 6 నెలల్లో మీ దరఖాస్తు కార్యకలాపాలు.',
    months: { jan: "జన", feb: "ఫిబ్ర", mar: "మార్చి", apr: "ఏప్రి", may: "మే", jun: "జూన్" },

    // Profile Page
    createYourProfile: 'మీ ప్రొఫైల్‌ను సృష్టించండి',
    myProfileSubtitle: 'ఉత్తమ అవకాశాలను ఆకర్షించడానికి మీ ప్రొఫైల్‌ను నవీకరించండి.',
    createYourProfileSubtitle: 'ప్రారంభించడానికి మీ ప్రొఫైల్‌ను పూరించండి. ఈ సమాచారం మీకు ఉత్తమ ఇంటర్న్‌షిప్‌లతో సరిపోల్చడానికి ఉపయోగించబడుతుంది.',
    profileDetails: 'ప్రొఫైల్ వివరాలు',
    profileDetailsSubtitle: 'ఈ సమాచారం మిమ్మల్ని ఇంటర్న్‌షిప్‌లతో సరిపోల్చడానికి ఉపయోగించబడుతుంది.',

    // Profile Form
    fullName: 'పూర్తి పేరు',
    fullNamePlaceholder: 'ఉదా., అలెక్స్ డో',
    headline: 'హెడ్‌లైన్',
    headlinePlaceholder: 'ఉదా., ఆశాజనక సాఫ్ట్‌వేర్ ఇంజనీర్',
    caste: 'కులం',
    castePlaceholder: 'ఉదా., జనరల్, ఓబిసి, ఎస్‌సి, ఎస్‌టి',
    familyAnnualIncome: 'కుటుంబ వార్షిక ఆదాయం',
    familyAnnualIncomePlaceholder: 'ఉదా., 500000',
    professionalSummary: 'వృత్తిపరమైన సారాంశం',
    professionalSummaryPlaceholder: 'మీ గురించి, మీ లక్ష్యాల గురించి మరియు మీకు అభిరుచి ఉన్న వాటి గురించి కొంచెం చెప్పండి.',
    skills: 'నైపుణ్యాలు',
    skillsPlaceholder: 'ఉదా., జావాస్క్రిప్ట్, రియాక్ట్, పైథాన్, ఫిగ్మా...',
    experienceAndProjects: 'అనుభవం & ప్రాజెక్ట్‌లు',
    experienceAndProjectsPlaceholder: 'మీ సంబంధిత పని అనుభవం, ప్రాజెక్ట్‌లు మరియు విజయాలను వివరించండి.',
    internshipPreferences: 'ఇంటర్న్‌షిప్ ప్రాధాన్యతలు',
    internshipPreferencesPlaceholder: 'మీరు ఇంటర్న్‌షిప్‌లో ఏమి చూస్తున్నారు? (ఉదా., పరిశ్రమ, కంపెనీ పరిమాణం, ప్రదేశం)',
    saveChanges: 'మార్పులను సేవ్ చేయండి',
    profileUpdated: 'ప్రొఫైల్ నవీకరించబడింది!',
    profileUpdatedDescription: 'మీ మార్పులు విజయవంతంగా సేవ్ చేయబడ్డాయి.',
    
    // Internships Page (Candidate)
    internshipListings: 'ఇంటర్న్‌షిప్ జాబితాలు',
    internshipListingsSubtitle: 'మీ తదుపరి అవకాశం కోసం బ్రౌజ్ చేయండి మరియు దరఖాస్తు చేసుకోండి.',
    viewDetails: 'వివరాలను చూడండి',
    applicants: 'దరఖాస్తుదారులు',

    // Internships Page (Company)
    candidateProfiles: 'అభ్యర్థి ప్రొఫైల్స్',
    candidateProfilesSubtitle: 'మీ ክፍት పాత్రల కోసం అగ్ర ప్రతిభను కనుగొనండి.',
    postNewJob: 'కొత్త ఉద్యోగాన్ని పోస్ట్ చేయండి',
    qualifications: 'అర్హతలు',
    viewFullProfile: 'పూర్తి ప్రొఫైల్‌ను వీక్షించండి',

    // Internship Details Page
    applyNow: 'ఇప్పుడే దరఖాస్తు చేసుకోండి',
    aboutTheInternship: 'ఇంటర్న్‌షిప్ గురించి',
    responsibilities: 'బాధ్యతలు',
    requirements: 'అవసరాలు',

    // Application Success Page
    applicationSuccessful: 'దరఖాస్తు విజయవంతమైంది!',
    applicationSuccessMessage: 'మీరు {company}లో {title} స్థానం కోసం విజయవంతంగా దరఖాస్తు చేసుకున్నారు.',
    applicationSuccessNextSteps: 'కంపెనీ మీ ప్రొఫైల్‌ను సమీక్షిస్తుంది మరియు మీరు సరిగ్గా సరిపోలితే మిమ్మల్ని తిరిగి సంప్రదిస్తుంది. మీరు మీ దరఖాస్తుల స్థితిని సందేశాల ట్యాబ్‌లో తనిఖీ చేయవచ్చు.',
    keepBrowsing: 'బ్రౌజింగ్ కొనసాగించండి',
    goToDashboard: 'డాష్‌బోర్డ్‌కు వెళ్లండి',

    // Matches Page
    candidateMatches: 'అభ్యర్థి మ్యాచ్‌లు',
    candidateMatchesSubtitle: 'మా AI మీ ఉద్యోగ ప్రొఫైల్‌లతో సరిపోల్చిన అభ్యర్థులను సమీక్షించండి.',
    myMatchesSubtitle: 'మీ నైపుణ్యాలు మరియు ప్రాధాన్యతలకు સંપૂર્ણంగా సరిపోయే ఇంటర్న్‌షిప్‌లను కనుగొనండి.',
    
    // Matches Component (Internship)
    aiPoweredMatchmaking: 'AI- ఆధారిత మ్యాచ్‌మేకింగ్',
    aiPoweredMatchmakingSubtitle: 'మా AI మీ ప్రొఫైల్‌ను విశ్లేషించడానికి మరియు మీ కోసం ఉత్తమ ఇంటర్న్‌షిప్ మ్యాచ్‌లను కనుగొనడానికి క్రింది బటన్‌ను క్లిక్ చేయండి.',
    findingMatches: 'మ్యాచ్‌లను కనుగొనడం',
    findMyMatches: 'నా మ్యాచ్‌లను కనుగొనండి',
    yourTopMatches: 'మీ అగ్ర మ్యాచ్‌లు',
    findingYourMatches: 'మీ మ్యాచ్‌లను కనుగొనడం',
    noMatchesFound: 'మ్యాచ్‌లు కనుగొనబడలేదు',
    noMatchesFoundSubtitle: 'AIకి సరిపోయే మ్యాచ్‌లు ఏవీ కనుగొనబడలేదు. మీ ప్రొఫైల్‌ను నవీకరించడానికి ప్రయత్నించండి.',
    errorOccurred: 'ఒక పొరపాటు జరిగింది',
    failedToFetchMatches: 'ఇంటర్న్‌షిప్ మ్యాచ్‌లను పొందడంలో విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.',
    match: 'మ్యాచ్',

    // Matches Component (Company)
    aiPoweredCandidateMatching: 'AI- ఆధారిత అభ్యర్థి మ్యాచింగ్',
    aiPoweredCandidateMatchingSubtitle: 'మా AI మీ ክፍት స్థానాలకు ఉత్తమ అభ్యర్థులను కనుగొనడానికి బటన్‌ను క్లిక్ చేయండి.',
    findingCandidates: 'అభ్యర్థులను కనుగొనడం',
    findCandidateMatches: 'అభ్యర్థి మ్యాచ్‌లను కనుగొనండి',
    yourTopCandidates: 'మీ అగ్ర అభ్యర్థులు',
    noCandidatesFound: 'AI ఇంకా సరిపోయే అభ్యర్థులను కనుగొనలేకపోయింది.',
    failedToFetchCandidates: 'అభ్యర్థి మ్యాచ్‌లను పొందడంలో విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.',
    matchedFor: 'కోసం సరిపోలింది',

    // Messages Page
    messagesSubtitle: 'అవకాశాల గురించి కంపెనీలతో నేరుగా సంభాషించండి.',
    conversations: 'సంభాషణలు',
    with: 'తో',
    typeAMessage: 'ఒక సందేశాన్ని టైప్ చేయండి...',
    selectAConversation: 'చాటింగ్ ప్రారంభించడానికి ఒక సంభాషణను ఎంచుకోండి',

    // New Internship Page
    postNewInternship: 'ఒక కొత్త ఇంటర్న్‌షిప్‌ను పోస్ట్ చేయండి',
    postNewInternshipSubtitle: 'మీ తదుపరి గొప్ప నియామకాన్ని కనుగొనడానికి క్రింది ఫారమ్‌ను పూరించండి.',

    // New Internship Form
    describeTheRole: 'పాత్రను వివరించండి',
    describeTheRoleSubtitle: 'ఇంటర్న్‌షిప్ పాత్ర యొక్క చిన్న వివరణను అందించడం ద్వారా ప్రారంభించండి. మా AI దీన్ని మీ కోసం ఒక పూర్తి జాబితాను రూపొందించడానికి ఉపయోగిస్తుంది.',
    roleDescription: 'పాత్ర వివరణ',
    roleDescriptionPlaceholder: 'ఉదా., మా కొత్త రియాక్ట్-ఆధారిత డిజైన్ సిస్టమ్‌పై పనిచేయడానికి ఒక ఫ్రంటెండ్ డెవలపర్ ఇంటర్న్...',
    roleDescriptionValidation: 'దయచేసి మరింత వివరణాత్మక వివరణను అందించండి (కనీసం 20 అక్షరాలు).',
    generating: 'రూపొందిస్తోంది',
    generateWithAI: 'AI తో రూపొందించండి',
    generationSuccessTitle: 'ఇంటర్న్‌షిప్ డ్రాఫ్ట్ రూపొందించబడింది!',
    generationSuccessDescription: 'AI ఒక డ్రాఫ్ట్‌ను సృష్టించింది. మీరు ఇప్పుడు దాన్ని క్రింద సమీక్షించవచ్చు మరియు సవరించవచ్చు.',
    generationFailedTitle: 'రూపొందించడంలో విఫలమైంది',
    generationFailedDescription: 'ఇంటర్న్‌షిప్ జాబితాను రూపొందించడంలో ఒక లోపం ఉంది. దయచేసి మళ్లీ ప్రయత్నించండి.',
    internshipDetails: 'ఇంటర్న్‌షిప్ వివరాలు',
    internshipDetailsSubtitle: 'క్రింద రూపొందించిన వివరాలను సమీక్షించండి మరియు సవరించండి.',
    internshipTitle: 'ఇంటర్న్‌షిప్ శీర్షిక',
    internshipTitlePlaceholder: 'ఉదా., సాఫ్ట్‌వేర్ ఇంజనీర్ ఇంటర్న్',
    placeOfWork: 'పని ప్రదేశం',
    placeOfWorkPlaceholder: 'ఉదా., శాన్ ఫ్రాన్సిస్కో, CA లేదా రిమోట్',
    fullDescription: 'పూర్తి వివరణ',
    fullDescriptionPlaceholder: 'పాత్ర, కంపెనీ, మొదలైన వాటి యొక్క వివరణాత్మక వివరణ.',
    candidatePreferences: 'అభ్యర్థి ప్రాధాన్యతలు (ఐచ్ఛికం)',
    preferredCaste: 'ప్రాధాన్య కులం',
    selectACaste: 'ఒక కులాన్ని ఎంచుకోండి',
    casteOptions: { general: 'జనరల్', obc: 'ఓబిసి', sc: 'ఎస్‌సి', st: 'ఎస్‌టి', any: 'ఏదైనా' },
    preferredFamilyIncome: 'ప్రాధాన్య కుటుంబ ఆదాయం',
    selectAnIncomeRange: 'ఒక ఆదాయ పరిధిని ఎంచుకోండి',
    incomeOptions: { low: '₹2.5 లక్షల కంటే తక్కువ', medium: '₹2.5 లక్షలు - ₹8 లక్షలు', high: '₹8 లక్షల కంటే ఎక్కువ', any: 'ఏదైనా' },
    preferredSkills: 'ప్రాధాన్య నైపుణ్యాలు',
    preferredSkillsPlaceholder: 'ఉదా., రియాక్ట్, పైథాన్, డేటా విశ్లేషణ',
    preferredSkillsDescription: 'కామాతో వేరు చేయబడిన నైపుణ్యాల జాబితాను నమోదు చేయండి.',
    educationQualifications: 'విద్యా అర్హతలు',
    educationQualificationsPlaceholder: 'ఉదా., సిఎస్‌లో బి.టెక్, బి.కామ్',
    educationQualificationsDescription: 'అవసరమైన లేదా ప్రాధాన్య విద్యా అర్హతలను నమోదు చేయండి.',
    postInternship: 'ఇంటర్న్‌షిప్‌ను పోస్ట్ చేయండి',
    internshipPostedTitle: 'ఇంటర్న్‌షిప్ పోస్ట్ చేయబడింది!',
    internshipPostedDescription: 'మీ ఇంటర్న్‌షిప్ విజయవంతంగా పోస్ట్ చేయబడింది.',
  },
  ta: {
    // Landing Page
    dashboard: 'డాష్‌போர்டு',
    heroTitle: 'AI உடன் உங்கள் சரியான இன்டர்ன்ஷிப்பைக் கண்டறியுங்கள்',
    heroSubtitle: 'எங்கள் AI- శక్తితో పనిచేసే தளம் திறமையான மாணவர்களை சரியான இன்டர்ன்ஷிப் பொருத்தத்திற்காக புதுமையான நிறுவனங்களுடன் இணைக்கிறது.',
    forCandidates: 'வேட்பாளர்களுக்காக',
    forCompanies: 'நிறுவனங்களுக்காக',
    candidatesDesc: 'உங்கள் சுயவிவரத்தை உருவாக்கவும், உங்கள் திறமைகளை வெளிப்படுத்தவும், எங்கள் AI உங்களுக்கு சிறந்த இன்டர்ன்ஷிப் வாய்ப்புகளைக் கண்டுபிடிக்கட்டும்.',
    companiesDesc: 'உங்கள் இன்டர்ன்ஷிப் பட்டியல்களை இடுகையிடவும் மற்றும் மிகவும் தகுதியான மற்றும் ஊக்கமுள்ள வேட்பாளர்களுடன் பொருந்துங்கள்.',
    intelligentMatching: 'புத்திசாலித்தனமான பொருத்தம்',
    matchingDesc: 'எங்கள் மேம்பட்ட வழிமுறை சுயவிவரங்கள் மற்றும் பட்டியல்களை பகுப்பாய்வு செய்து மிக உயர்ந்த பொருந்தக்கூடிய தன்மையை உறுதி செய்கிறது.',
    eligibilityTitle: 'தகுதி வரம்பு',
    eligibilitySubtitle: 'விண்ணப்பிக்கும் முன் பின்வரும் தகுதி வரம்புகளை பூர்த்தி செய்வதை உறுதிப்படுத்தவும்.',
    whoCanApply: 'யார் விண்ணப்பிக்கலாம்',
    eligiblePoints: [
        "விண்ணப்பதாரர் இந்திய குடியுரிமை பெற்றவராக இருக்க வேண்டும்.",
        "விண்ணப்பதாரரின் வயது 21 முதல் 24 வயதுக்குள் இருக்க வேண்டும் (விண்ணப்பம் சமர்ப்பிப்பதற்கான கடைசி தேதிப்படி).",
        "விண்ணப்பதாரர் முழுநேர வேலையில் இருக்கக்கூடாது.",
        "விண்ணப்பதாரர் முழுநேர கல்வியில் ஈடுபட்டிருக்கக்கூடாது.",
        "ஆன்லைன்/தொலைதூரக் கல்வித் திட்டங்களில் சேர்ந்த மாணவர்கள் விண்ணப்பிக்க தகுதியுடையவர்கள்.",
        "விண்ணப்பதாரர் உயர்நிலைப் பள்ளி, மேல்நிலைப் பள்ளி முடித்திருக்க வேண்டும், ஐடிஐ சான்றிதழ் பெற்றிருக்க வேண்டும், பாலிτεκνிக் நிறுவனத்தில் டிப்ளோமா பெற்றிருக்க வேண்டும், அல்லது பி.ஏ, பி.எஸ்சி, பி.காம், பிசிஏ, பிபிஏ, பி.பார்மா போன்ற பட்டப்படிப்பு முடித்திருக்க வேண்டும்.",
        "விண்ணப்பதாரரின் குடும்ப வருமானம் ₹8,00,000/-க்கு மிகாமல் இருக்க வேண்டும்.",
    ],
    whoIsNotEligible: 'யார் தகுதியற்றவர்',
    ineligiblePoints: [
        "ஐஐடிகள், ஐஐஎம்கள், தேசிய சட்டப் பல்கலைக்கழகங்கள், ஐஐஎஸ்ఈஆர், என்ஐடிகள் மற்றும் ఐఐఐటిகளிலிருந்து பட்டதாரிகள்.",
        "சிஏ, சிஎம்ஏ, சிஎஸ், ఎంబీబీఎస్, బీడీఎస్, ఎంబీఏ, οποιαδήποτε முதுகலை அல்லது உயர் பட்டம் போன்ற தகுதிகளைக் கொண்டவர்கள்.",
        "மத்திய அரசு அல்லது மாநில அரசு திட்டங்களின் கீழ் οποιαδήποτε திறன், பயிற்சி, இன்டர்ன்ஷிப் அல்லது மாணவர் பயிற்சித் திட்டத்தில் உள்ளவர்கள்.",
        "தேசிய பயிற்சித் திட்டத்தின் (NATS) அல்லது தேசிய பயிற்சி ஊக்குவிப்புத் திட்டத்தின் (NAPS) கீழ் பயிற்சி முடித்தவர்கள்.",
        "விண்ணப்பதாரரின் குடும்ப உறுப்பினர்களில் எவரேனும் ஆண்டு வருமானம் ₹8 லட்சத்திற்கு மேல் இருந்தால்.",
        "குடும்ப உறுப்பினர்களில் எవరாவது സ്ഥിരം/வழக்கமான அரசாங்க ஊழியராக இருந்தால்.",
    ],
    programDetailsTitle: 'திட்ட விவரங்கள்',
    programDetailsSubtitle: 'இன்டர்ன்ஷிப் திட்டம் பற்றி நீங்கள் தெரிந்து கொள்ள வேண்டிய அனைத்தும்.',
    structureTitle: 'இன்டர்ன்ஷிப் காலம் & கட்டமைப்பு',
    structurePoints: [
        'காலம்: 12 மாதங்கள் (6 மாதங்கள் நேரடி பயிற்சி உட்பட).',
        'துறைகள்: బ్యాంకిங், எண்ணெய் மற்றும் எரிவாயு, விருந்தோம்பல், ஆட்டோமோட்டிவ், உற்பத்தி, FMCG, பயணம், ऊर्जा, மற்றும் பல.',
        'பங்கேற்கும் நிறுவனங்கள்: ரிலையன்ஸ், TCS, HDFC வங்கி, மாருதி சுजुकी, ஐடிசி, ஹிந்துஸ்தான் यूनिलीवर, தி டைம்ஸ் గ్రూప్, మరియు 500+ பிற.',
    ],
    stipendTitle: 'உதவித்தொகை & நிதி நன்மைகள்',
    stipendBenefit: 'நன்மை',
    stipendAmount: 'தொகை/விவரம்',
    stipendTable: [
        { benefit: 'மாதாந்திர உதவித்தொகை', detail: '₹5,000 (அரசாங்கத்திடமிருந்து ₹4,500, புரவலர் நிறுவனத்திடமிருந்து ₹500)' },
        { benefit: 'ஒரு முறை மானியம்', detail: 'ஆரம்பத்தில் ₹6,000 (ஆதார் இணைக்கப்பட்ட வங்கி கணக்கிற்கு நேரடி लाभ బదిలీ மூலம்)' },
        { benefit: 'காப்பீட்டுத் திட்டம்', detail: 'பிரதான் మంత్రి జీవన్ జ్యోతి బీమా యోజన மற்றும் பிரதான் మంత్రి సురక్షా బీమా యోజన' },
        { benefit: 'சான்றிதழ்', detail: 'வெற்றிகரமாக முடித்தவுடன் அரசாங்கத்தால் சான்றளிக்கப்பட்ட இன்டர்ன்ஷிப் சான்றிதழ்' },
    ],
    selectionTitle: 'தேர்வு செயல்முறை',
    selectionPoints: [
        'திரையிடல்: கல்விப் பின்னணி, SOP மற்றும் விருப்பங்களின் அடிப்படையில்.',
        'நேர்காணல்: சில பணிகளுக்கு ஒரு μικρή ভার্চুয়াল நேர்காணல் தேவைப்படலாம்.',
        'பன்முகத்தன்மை & உள்ளடக்கம்: கிராமப்புற/விருப்ப மாவட்டங்கள் மற்றும் ஒதுக்கப்பட்ட వర్గాల నుండి விண்ணப்பதாரர்களுக்கு பன்முகத்தன்மைக்கு முக்கியத்துவம் அளிக்கப்படுகிறது.',
    ],
    benefitsTitle: 'முக்கிய நன்மைகள்',
    benefitsPoints: [
        'நிஜ-உலக தொழில் வெளிப்பாடு',
        'திறன் மேம்பாடு மற்றும் வழிகாட்டுதல்',
        'வலையமைப்பு வாய்ப்புகள்',
        'மேம்படுத்தப்பட்ட ரெஸ்யூம் மதிப்பு மற்றும் தொழில் வாய்ப்புகள்',
        'இன்டர்ன்షిப் போது நிதி உதவி',
    ],
    datesTitle: 'முக்கிய தேதிகள் (2025)',
    datesPoints: [
        'கட்டம் 2 விண்ணப்ப காலக்கெடு: ஏப்ரல் 22, 2025',
        'தேர்வு செயல்முறை: நடந்துகொண்டிருக்கிறது (புதுப்பிப்புகளுக்கு போர்ட்டலைச் சரிபார்க்கவும்)',
        'இன்டர்ன்షిப் தொடக்கம்: நிறுவனத்தின் அட்டவணைப்படி',
    ],
    additionalInfoTitle: 'கூடுதல் தகவல்',
    additionalInfoPoints: [
        'விண்ணப்பக் கட்டணம் இல்லை: இந்தத் திட்டத்திற்கு விண்ணப்பிக்க இலவசம்.',
        'உറപ്പായ നടപടി: கிராமப்புற/விருப்ப மாவட்டங்கள் மற்றும் பிரதிநிதித்துவம் இல்லாத சமூகங்களைச் சேர்ந்த விண்ணப்பதாரர்களுக்கு சிறப்பு கவனம்.',
        'செயல்திறன் மதிப்பீடு: ಇಂಟರ್ನ್‌களுக்கான பின்னூட்டத்துடன் வெளிப்படையான செயல்முறை.',
    ],
    stayUpdatedTitle: 'புதுப்பித்த நிலையில் இருப்பது எப்படி',
    stayUpdatedDesc: 'நிகழ்நேர அறிவிப்புகளுக்கு PMIS பயன்பாட்டைப் பதிவிறக்கவும். புதுப்பிப்புகளுக்கு அதிகாரப்பூர்வ போர்ட்டல் மற்றும் பதிவுசெய்யப்பட்ட மின்னஞ்சல்/SMS ಅನ್ನು ನಿಯಮಿತವಾಗಿச் சரிபார்க்கவும்.',
    downloadApp: 'பயன்பாட்டைப் பதிவிறக்கவும்',
    footerRights: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',

    // Login Page
    login: 'உள்நுழை',
    signUp: 'பதிவுபெறுக',
    loginDescription: 'உங்கள் கணக்கை அணுக உங்கள் நற்சான்றிதழ்களை உள்ளிடவும்.',
    email: 'மின்னஞ்சல்',
    password: 'கடவுச்சொல்',
    imACandidate: 'நான் ஒரு வேட்பாளர்',
    imACompany: 'நான் ஒரு நிறுவனம்',
    candidateSignUp: 'வேட்பாளர் பதிவு',
    candidateSignUpDescription: 'உங்கள் கனவு இன்டர்ன்ஷிப்பைக் கண்டுபிடிக்க ஒரு கணக்கை உருவாக்கவும்.',
    name: 'பெயர்',
    namePlaceholder: 'பெயர்',
    createProfileAndFindInternships: 'சுயவிவரத்தை உருவாக்கி இன்டர்ன்ஷிப்களைக் கண்டறியவும்',
    companySignUp: 'நிறுவன பதிவு',
    companySignUpDescription: 'சிறந்த திறமையாளர்களை வேலைக்கு அமர்த்த ஒரு கணக்கை உருவாக்கவும்.',
    companyName: 'நிறுவனத்தின் பெயர்',
    companyNamePlaceholder: 'உங்கள் நிறுவனம்',
    companyEmail: 'நிறுவன மின்னஞ்சல்',
    createAccountAndPostJob: 'கணக்கை உருவாக்கி வேலையை இடுகையிடவும்',

    // Sidebar
    myProfile: 'எனது சுயவிவரம்',
    internships: 'இன்டர்ன்ஷிப்கள்',
    myMatches: 'எனது பொருத்தங்கள்',
    messages: 'செய்திகள்',
    logout: 'வெளியேறு',
    myInternshipListing: 'எனது இன்டர்ன்ஷிப் பட்டியல்',
    studentProfiles: 'மாணவர் சுயவிவரங்கள்',

    // Dashboard
    welcomeBack: 'மீண்டும் வரவேற்கிறோம்!',
    dashboardSubtitle: 'உங்கள் இன்டர்ன்ஷிப் தேடலின் சுருக்கம் இங்கே.',
    profileCompletion: 'சுயவிவரம் நிறைவு',
    profileCompletionSubtitle: 'ஒரு முழுமையான சுயவிவரம் அதிக ஆட்சேர்ப்பாளர்களை ஈர்க்கிறது.',
    activeApplications: 'செயலில் உள்ள விண்ணப்பங்கள்',
    activeApplicationsSubtitle: 'கடந்த வாரத்தில் +2',
    newMessages: 'புதிய செய்திகள்',
    newMessagesSubtitle: 'InnovateTech மற்றும் Creative Solutions இலிருந்து',
    applicationTrends: 'விண்ணப்பப் போக்குகள்',
    applicationTrendsSubtitle: 'கடந்த 6 மாதங்களில் உங்கள் விண்ணப்பச் செயல்பாடு.',
    months: { jan: "ஜன", feb: "பிப்", mar: "மார்ச்", apr: "ஏப்", may: "மே", jun: "ஜூன்" },

    // Profile Page
    createYourProfile: 'உங்கள் சுயவிவரத்தை உருவாக்கவும்',
    myProfileSubtitle: 'சிறந்த வாய்ப்புகளை ஈர்க்க உங்கள் சுயவிவரத்தை புதுப்பித்த நிலையில் வைத்திருங்கள்.',
    createYourProfileSubtitle: 'தொடங்குவதற்கு உங்கள் சுயவிவரத்தை நிரப்பவும். இந்தத் தகவல் உங்களை சிறந்த இன்டர்ன்ஷிப்களுடன் பொருத்தப் பயன்படும்.',
    profileDetails: 'சுயவிவர விவரங்கள்',
    profileDetailsSubtitle: 'இந்தத் தகவல் உங்களை இன்டர்ன்ஷிப்களுடன் பொருத்தப் பயன்படும்.',

    // Profile Form
    fullName: 'முழுப்பெயர்',
    fullNamePlaceholder: 'எ.கா., அலெக்ஸ் டோ',
    headline: 'தலைப்பு',
    headlinePlaceholder: 'எ.கா., ஆர்வமுள்ள மென்பொருள் பொறியாளர்',
    caste: 'சாதி',
    castePlaceholder: 'எ.கா., பொது, ஓபிசி, எஸ்சி, எஸ்டி',
    familyAnnualIncome: 'குடும்ப ஆண்டு வருமானம்',
    familyAnnualIncomePlaceholder: 'எ.கா., 500000',
    professionalSummary: 'தொழில்முறை சுருக்கம்',
    professionalSummaryPlaceholder: 'உங்களைப் பற்றியும், உங்கள் இலக்குகள் பற்றியும், நீங்கள் எதில் ஆர்வமாக இருக்கிறீர்கள் என்பதைப் பற்றியும் కొంచెం చెప్పండి.',
    skills: 'திறன்கள்',
    skillsPlaceholder: 'எ.கா., ஜாவாஸ்கிரிப்ட், ரியாக்ட், பைதான், பிக்மா...',
    experienceAndProjects: 'அனுபவம் மற்றும் திட்டங்கள்',
    experienceAndProjectsPlaceholder: 'உங்கள் தொடர்புடைய பணி அனுபவம், திட்டங்கள் மற்றும் சாதனைகளை விவரிக்கவும்.',
    internshipPreferences: 'இன்டர்ன்ஷிப் விருப்பத்தேர்வுகள்',
    internshipPreferencesPlaceholder: 'நீங்கள் ஒரு இன்டர்ன்ஷிப்பில் என்ன தேடுகிறீர்கள்? (எ.கா., தொழில், நிறுவன அளவு, இடம்)',
    saveChanges: 'மாற்றங்களைச் சேமி',
    profileUpdated: 'சுயவிவரம் புதுப்பிக்கப்பட்டது!',
    profileUpdatedDescription: 'உங்கள் மாற்றங்கள் வெற்றிகரமாக சேமிக்கப்பட்டுள்ளன.',
    
    // Internships Page (Candidate)
    internshipListings: 'இன்டர்ன்ஷிப் பட்டியல்கள்',
    internshipListingsSubtitle: 'உங்கள் அடுத்த வாய்ப்பிற்கு உலாவவும் மற்றும் விண்ணப்பிக்கவும்.',
    viewDetails: 'விவரங்களைக் காண்க',
    applicants: 'விண்ணப்பதாரர்கள்',

    // Internships Page (Company)
    candidateProfiles: 'வேட்பாளர் சுயவிவரங்கள்',
    candidateProfilesSubtitle: 'உங்கள் திறந்த பதவிகளுக்கு சிறந்த திறமையாளர்களைக் கண்டறியுங்கள்.',
    postNewJob: 'புதிய வேலையை இடுகையிடவும்',
    qualifications: 'தகுதிகள்',
    viewFullProfile: 'முழு சுயவிவரத்தைக் காண்க',

    // Internship Details Page
    applyNow: 'இப்போதே விண்ணப்பிக்கவும்',
    aboutTheInternship: 'இன்டர்ன்ஷிப் பற்றி',
    responsibilities: 'பொறுப்புகள்',
    requirements: 'தேவைகள்',

    // Application Success Page
    applicationSuccessful: 'விண்ணப்பம் வெற்றி பெற்றது!',
    applicationSuccessMessage: 'நீங்கள் {company} இல் {title} பதவிக்கு வெற்றிகரமாக விண்ணப்பித்துள்ளீர்கள்.',
    applicationSuccessNextSteps: 'நிறுவனம் உங்கள் சுயவிவரத்தை மதிப்பாய்வு செய்து, நீங்கள் பொருத்தமானவராக இருந்தால் உங்களைத் தொடர்பு கொள்ளும். உங்கள் விண்ணப்பங்களின் நிலையை செய்திகள் தாவலில் சரிபார்க்கலாம்.',
    keepBrowsing: 'தொடர்ந்து உலாவுக',
    goToDashboard: 'டாஷ்போர்டுக்குச் செல்லவும்',

    // Matches Page
    candidateMatches: 'வேட்பாளர் பொருத்தங்கள்',
    candidateMatchesSubtitle: 'எங்கள் AI உங்கள் பணி சுயவிவரங்களுடன் பொருந்தியுள்ள வேட்பாளர்களை மதிப்பாய்வு செய்யவும்.',
    myMatchesSubtitle: 'உங்கள் திறன்கள் மற்றும் விருப்பங்களுக்கு ஏற்றவாறு வடிவமைக்கப்பட்ட இன்டர்ன்ஷிப்களைக் கண்டறியவும்.',
    
    // Matches Component (Internship)
    aiPoweredMatchmaking: 'AI-இயங்கும் பொருத்தம்',
    aiPoweredMatchmakingSubtitle: 'எங்கள் AI உங்கள் சுயவிவரத்தை பகுப்பாய்வு செய்து உங்களுக்கான சிறந்த இன்டர்ன்ஷிப் பொருத்தங்களைக் கண்டுபிடிக்க கீழே உள்ள பொத்தானைக் கிளிக் செய்யவும்.',
    findingMatches: 'பொருத்தங்களைக் கண்டறிதல்',
    findMyMatches: 'எனது பொருத்தங்களைக் கண்டறியவும்',
    yourTopMatches: 'உங்கள் சிறந்த பொருத்தங்கள்',
    findingYourMatches: 'உங்கள் பொருத்தங்களைக் கண்டறிதல்',
    noMatchesFound: 'பொருத்தங்கள் எதுவும் கிடைக்கவில்லை',
    noMatchesFoundSubtitle: 'AI க்கு பொருத்தமான பொருத்தங்கள் எதுவும் கிடைக்கவில்லை. உங்கள் சுயவிவரத்தைப் புதுப்பிக்க முயற்சிக்கவும்.',
    errorOccurred: 'ஒரு பிழை ஏற்பட்டது',
    failedToFetchMatches: 'இன்டர்ன்ஷிப் பொருத்தங்களைப் பெறுவதில் தோல்வி. దయచేసి మళ్లీ ప్రయత్నించండి.',
    match: 'பொருத்தம்',

    // Matches Component (Company)
    aiPoweredCandidateMatching: 'AI-இயங்கும் வேட்பாளர் பொருத்தம்',
    aiPoweredCandidateMatchingSubtitle: 'எங்கள் AI உங்கள் திறந்த பதவிகளுக்கு சிறந்த வேட்பாளர்களைக் கண்டுபிடிக்க பொத்தானைக் கிளிக் செய்யவும்.',
    findingCandidates: 'வேட்பாளர்களைக் கண்டறிதல்',
    findCandidateMatches: 'வேட்பாளர் பொருத்தங்களைக் கண்டறியவும்',
    yourTopCandidates: 'உங்கள் சிறந்த வேட்பாளர்கள்',
    noCandidatesFound: 'AI க்கு இன்னும் பொருத்தமான வேட்பாளர்கள் கிடைக்கவில்லை.',
    failedToFetchCandidates: 'வேட்பாளர் பொருத்தங்களைப் பெறுவதில் தோல்வி. ದయచేసి మళ్లీ ప్రయత్నించండి.',
    matchedFor: 'பொருத்தப்பட்டது',

    // Messages Page
    messagesSubtitle: 'வாய்ப்புகள் குறித்து நிறுவனங்களுடன் நேரடியாகத் தொடர்பு கொள்ளுங்கள்.',
    conversations: 'உரையாடல்கள்',
    with: 'உடன்',
    typeAMessage: 'ஒரு செய்தியைத் தட்டச்சு செய்க...',
    selectAConversation: 'அரட்டையைத் தொடங்க ஒரு உரையாடலைத் தேர்ந்தெடுக்கவும்',

    // New Internship Page
    postNewInternship: 'ஒரு புதிய இன்டர்ன்ஷிப்பை இடுகையிடவும்',
    postNewInternshipSubtitle: 'உங்கள் அடுத்த சிறந்த பணியாளரைக் கண்டுபிடிக்க கீழே உள்ள படிவத்தை நிரப்பவும்.',

    // New Internship Form
    describeTheRole: 'பங்கை விவரிக்கவும்',
    describeTheRoleSubtitle: 'இன்டர்ன்ஷிப் பங்கின் ஒரு చిన్న వివరణத்தை வழங்குவதன் மூலம் தொடங்கவும். எங்கள் AI உங்களுக்காக ஒரு పూర్తి பட்டியலை உருவாக்க இதைப் பயன்படுத்தும்.',
    roleDescription: 'பங்கு விவரம்',
    roleDescriptionPlaceholder: 'எ.கா., எங்கள் புதிய ரியாக்ட்-அடிப்படையிலான வடிவமைப்பு அமைப்பில் పనిచేయడానికి ஒரு முன்முனை டெவலப்பர் இன்டர்ன்...',
    roleDescriptionValidation: 'దయచేసి మరింత వివరణాత్మక వివరణத்தை வழங்கவும் (குறைந்தது 20 எழுத்துக்கள்).',
    generating: 'உருவாக்குகிறது',
    generateWithAI: 'AI உடன் உருவாக்கவும்',
    generationSuccessTitle: 'இன்டர்ன்ஷிப் வரைவு உருவாக்கப்பட்டது!',
    generationSuccessDescription: 'AI ஒரு வரைவை உருவாக்கியுள்ளது. நீங்கள் இப்போது அதைக் கீழே மதிப்பாய்வு செய்து திருத்தலாம்.',
    generationFailedTitle: 'உருவாக்கம் தோல்வியடைந்தது',
    generationFailedDescription: 'இன்டர்ன்ஷிப் பட்டியலை உருவாக்குவதில் ஒரு பிழை ஏற்பட்டது. ದಯచేసి మళ్లీ ప్రయత్నించండి.',
    internshipDetails: 'இன்டர்ன்ஷிப் விவரங்கள்',
    internshipDetailsSubtitle: 'கீழே உருவாக்கப்பட்ட விவரங்களை மதிப்பாய்வு செய்து திருத்தவும்.',
    internshipTitle: 'இன்டர்ன்ஷிப் தலைப்பு',
    internshipTitlePlaceholder: 'எ.கா., மென்பொருள் பொறியாளர் இன்டர்ன்',
    placeOfWork: 'பணியிடம்',
    placeOfWorkPlaceholder: 'எ.கா., சான் பிரான்சிஸ்கோ, CA அல்லது தொலைநிலை',
    fullDescription: 'முழு விவரம்',
    fullDescriptionPlaceholder: 'பங்கு, நிறுவனம் போன்றவற்றின் ஒரு వివరణాత్మక விவரம்.',
    candidatePreferences: 'வேட்பாளர் விருப்பத்தேர்வுகள் (விருப்பத்தேர்வு)',
    preferredCaste: 'விரும்பிய சாதி',
    selectACaste: 'ஒரு சாதியைத் தேர்ந்தெடுக்கவும்',
    casteOptions: { general: 'பொது', obc: 'ஓபிசி', sc: 'எஸ்சி', st: 'எஸ்டி', any: 'ஏதேனும்' },
    preferredFamilyIncome: 'விரும்பிய குடும்ப வருமானம்',
    selectAnIncomeRange: 'ஒரு வருமான வரம்பைத் தேர்ந்தெடுக்கவும்',
    incomeOptions: { low: '₹2.5 லட்சத்திற்கும் குறைவு', medium: '₹2.5 லட்சம் - ₹8 லட்சம்', high: '₹8 லட்சத்திற்கும் அதிகம்', any: 'ஏதேனும்' },
    preferredSkills: 'விரும்பிய திறன்கள்',
    preferredSkillsPlaceholder: 'எ.கா., ரியாக்ட், பைதான், தரவு பகுப்பாய்வு',
    preferredSkillsDescription: 'காற்புள்ளியால் பிரிக்கப்பட்ட திறன்களின் பட்டியலை உள்ளிடவும்.',
    educationQualifications: 'கல்வித் தகுதிகள்',
    educationQualificationsPlaceholder: 'எ.கா., சிஎஸ்ஸில் பி.டெக், பி.காம்',
    educationQualificationsDescription: 'தேவையான அல்லது விரும்பிய கல்வித் தகுதிகளை உள்ளிடவும்.',
    postInternship: 'இன்டர்ன்ஷிப்பை இடுகையிடவும்',
    internshipPostedTitle: 'இன்டர்ன்ஷிப் இடுகையிடப்பட்டது!',
    internshipPostedDescription: 'உங்கள் இன்டர்ன்ஷிப் வெற்றிகரமாக இடுகையிடப்பட்டுள்ளது.',
  },
  mr: {
    // Landing Page
    dashboard: 'डॅशबोर्ड',
    heroTitle: 'AI सह तुमची परिपूर्ण इंटर्नशिप शोधा',
    heroSubtitle: 'आमचे AI- समर्थित प्लॅटफॉर्म प्रतिभावान विद्यार्थ्यांना परिपूर्ण इंटर्नशिप जुळणीसाठी नाविन्यपूर्ण कंपन्यांशी जोडते.',
    forCandidates: 'उमेदवारांसाठी',
    forCompanies: 'कंपन्यांसाठी',
    candidatesDesc: 'तुमचे प्रोफाइल तयार करा, तुमची कौशल्ये दाखवा आणि आमच्या AI ला तुमच्यासाठी सर्वोत्तम इंटर्नशिप संधी शोधू द्या.',
    companiesDesc: 'तुमच्या इंटर्नशिप सूची पोस्ट करा आणि सर्वात पात्र आणि प्रेरित उमेदवारांशी जुळवून घ्या.',
    intelligentMatching: 'বুদ্ধিमान जुळणी',
    matchingDesc: 'आमचे प्रगत अल्गोरिदम सर्वोच्च सुसंगतता सुनिश्चित करण्यासाठी प्रोफाइल आणि सूचीचे विश्लेषण करते.',
    eligibilityTitle: 'पात्रता निकष',
    eligibilitySubtitle: 'अर्ज करण्यापूर्वी कृपया खात्री करा की तुम्ही खालील निकष पूर्ण करता.',
    whoCanApply: 'कोण अर्ज करू शकतो',
    eligiblePoints: [
        "उमेदवार भारतीय राष्ट्रीयत्वाचा असावा.",
        "उमेदवाराचे वय 21 ते 24 वर्षांच्या दरम्यान असावे (अर्ज सादर करण्याच्या अंतिम तारखेनुसार).",
        "उमेदवार पूर्ण-वेळ नोकरीत नसावा.",
        "उमेदवार पूर्ण-वेळ शिक्षणात गुंतलेला नसावा.",
        "ऑनलाइन/दूरस्थ शिक्षण कार्यक्रमांमध्ये नोंदणी केलेले उमेदवार अर्ज करण्यास पात्र आहेत.",
        "उमेदवाराने हायस्कूल, उच्च माध्यमिक शाळा पूर्ण केलेली असावी, आयटीआयमधून प्रमाणपत्र धारण केलेले असावे, पॉलिटेक्निक संस्थेतून डिप्लोमा धारण केलेला असावा, किंवा बीए, बी.एससी, बी.कॉम, बीसीए, बीबीए, बी.फार्मा यांसारख्या पदवीधर असावा.",
        "उमेदवाराच्या कुटुंबाचे उत्पन्न ₹8,00,000/- पेक्षा जास्त नसावे.",
    ],
    whoIsNotEligible: 'कोण पात्र नाही',
    ineligiblePoints: [
        "आयआयटी, आयआयएम, राष्ट्रीय আইন বিশ্ববিদ্যালয়, आयआयएसईआर, एनआयडी आणि आयआयआयटीमधून पदवीधर.",
        "सीए, सीएमए, सीएस, एमबीबीएस, बीडीएस, एमबीए, कोणतीही मास्टर किंवा उच्च पदवी यांसारखी पात्रता असलेले.",
        "केंद्र सरकार किंवा राज्य सरकारच्या योजनांतर्गत कोणतेही कौशल्य, शिकाऊ उमेदवारी, इंटर्नशिप किंवा विद्यार्थी प्रशिक्षण कार्यक्रमात असलेले.",
        "ज्यांनी कोणत्याही वेळी राष्ट्रीय शिकाऊ उमेदवारी प्रशिक्षण योजना (NATS) किंवा राष्ट्रीय शिकाऊ उमेदवारी प्रोत्साहन योजना (NAPS) अंतर्गत शिकाऊ उमेदवारी प्रशिक्षण पूर्ण केले आहे.",
        "जर उमेदवाराच्या कुटुंबातील कोणत्याही सदस्याचे वार्षिक उत्पन्न ₹8 लाखांपेक्षा जास्त असेल.",
        "जर कुटुंबातील कोणताही सदस्य स्थायी/नियमित सरकारी कर्मचारी असेल.",
    ],
    programDetailsTitle: 'कार्यक्रम तपशील',
    programDetailsSubtitle: 'इंटर्नशिप कार्यक्रमाबद्दल तुम्हाला माहित असणे आवश्यक असलेले सर्व काही.',
    structureTitle: 'इंटर्नशिप कालावधी आणि रचना',
    structurePoints: [
        'कालावधी: 12 महिने (6 महिन्यांच्या प्रत्यक्ष प्रशिक्षणासह).',
        'क्षेत्रे: बँकिंग, तेल आणि वायू, हॉस्पिटॅलिटी, ऑटोमोटिव्ह, मॅन्युफॅक्चरिंग, एफएमसीजी, प्रवास, ऊर्जा आणि बरेच काही.',
        'सहभागी कंपन्या: रिलायन्स, टीसीएस, एचडीएफसी बँक, मारुती सुझुकी, आयटीसी, हिंदुस्थान युनिलिव्हर, द टाइम्स ग्रुप आणि 500+ इतर.',
    ],
    stipendTitle: 'स्टायपेंड आणि आर्थिक लाभ',
    stipendBenefit: 'लाभ',
    stipendAmount: 'रक्कम/तपशील',
    stipendTable: [
        { benefit: 'मासिक स्टायपेंड', detail: '₹5,000 (सरकारकडून ₹4,500, यजमान कंपनीकडून ₹500)' },
        { benefit: 'एक-वेळचे अनुदान', detail: 'सुरुवातीला ₹6,000 (आधार-लिंक्ड बँक खात्यात थेट लाभ हस्तांतरणाद्वारे)' },
        { benefit: 'विमा संरक्षण', detail: 'प्रधानमंत्री जीवन ज्योती विमा योजना आणि प्रधानमंत्री सुरक्षा विमा योजना' },
        { benefit: 'प्रमाणपत्र', detail: 'यशस्वीरीत्या पूर्ण झाल्यावर सरकार-प्रमाणित इंटर्नशिप प्रमाणपत्र' },
    ],
    selectionTitle: 'निवड प्रक्रिया',
    selectionPoints: [
        'स्क्रीनिंग: शैक्षणिक पार्श्वभूमी, एसओपी आणि प्राधान्यांवर आधारित.',
        'मुलाखत: काही भूमिकांसाठी लहान आभासी मुलाखतीची आवश्यकता असू शकते.',
        'विविधता आणि समावेशन: शॉर्टलिस्टिंगमध्ये विविधतेवर भर दिला जातो, विशेषतः ग्रामीण/महत्वाकांक्षी जिल्हे आणि राखीव प्रवर्गातील उमेदवारांसाठी.',
    ],
    benefitsTitle: 'मुख्य फायदे',
    benefitsPoints: [
        'वास्तविक-जागतिक उद्योग प्रदर्शन',
        'कौशल्य विकास आणि मार्गदर्शन',
        'नेटवर्किंग संधी',
        'सुधारित रेझ्युमे मूल्य आणि करिअरच्या संधी',
        'इंटर्नशिप दरम्यान आर्थिक सहाय्य',
    ],
    datesTitle: 'महत्वाच्या तारखा (2025)',
    datesPoints: [
        'टप्पा 2 अर्ज अंतिम मुदत: 22 एप्रिल, 2025',
        'निवड प्रक्रिया: चालू आहे (अपडेटसाठी पोर्टल तपासा)',
        'इंटर्नशिप प्रारंभ: कंपनीच्या वेळापत्रकानुसार',
    ],
    additionalInfoTitle: 'अतिरिक्त माहिती',
    additionalInfoPoints: [
        'अर्ज शुल्क नाही: योजना अर्ज करण्यासाठी विनामूल्य आहे.',
        'सकारात्मक कृती: ग्रामीण/महत्वाकांक्षी जिल्हे आणि प्रतिनिधित्व नसलेल्या समुदायातील उमेदवारांसाठी विशेष विचार.',
        'कार्यप्रदर्शन मूल्यांकन: इंटर्नसाठी अभिप्रायासह पारदर्शक प्रक्रिया.',
    ],
    stayUpdatedTitle: 'अपडेट कसे राहावे',
    stayUpdatedDesc: 'रिअल-टाइम सूचनांसाठी पीएमआयएस अॅप डाउनलोड करा. अपडेटसाठी अधिकृत पोर्टल आणि नोंदणीकृत ईमेल/एसएमएस नियमितपणे तपासा.',
    downloadApp: 'अॅप डाउनलोड करा',
    footerRights: 'सर्व हक्क राखीव.',

    // Login Page
    login: 'लॉग इन',
    signUp: 'साइन अप',
    loginDescription: 'तुमच्या खात्यात प्रवेश करण्यासाठी तुमची ओळखपत्रे प्रविष्ट करा.',
    email: 'ईमेल',
    password: 'पासवर्ड',
    imACandidate: "मी एक उमेदवार आहे",
    imACompany: "मी एक कंपनी आहे",
    candidateSignUp: 'उमेदवार साइन अप',
    candidateSignUpDescription: 'तुमची स्वप्नातील इंटर्नशिप शोधण्यासाठी खाते तयार करा.',
    name: 'नाव',
    namePlaceholder: 'नाव',
    createProfileAndFindInternships: 'प्रोफाइल तयार करा आणि इंटर्नशिप शोधा',
    companySignUp: 'कंपनी साइन अप',
    companySignUpDescription: 'सर्वोत्तम प्रतिभा कामावर घेण्यासाठी खाते तयार करा.',
    companyName: 'कंपनीचे नाव',
    companyNamePlaceholder: 'तुमची कंपनी',
    companyEmail: 'कंपनी ईमेल',
    createAccountAndPostJob: 'खाते तयार करा आणि नोकरी पोस्ट करा',

    // Sidebar
    myProfile: 'माझे प्रोफाइल',
    internships: 'इंटर्नशिप',
    myMatches: 'माझे सामने',
    messages: 'संदेश',
    logout: 'लॉगआउट',
    myInternshipListing: 'माझी इंटर्नशिप सूची',
    studentProfiles: 'विद्यार्थी प्रोफाइल',

    // Dashboard
    welcomeBack: 'पुन्हा स्वागत आहे!',
    dashboardSubtitle: "तुमच्या इंटर्नशिप शोधाचा सारांश येथे आहे.",
    profileCompletion: 'प्रोफाइल पूर्णता',
    profileCompletionSubtitle: 'पूर्ण प्रोफाइल अधिक भरती करणाऱ्यांना आकर्षित करते.',
    activeApplications: 'सक्रिय अर्ज',
    activeApplicationsSubtitle: 'गेल्या आठवड्यात +2',
    newMessages: 'नवीन संदेश',
    newMessagesSubtitle: 'इनोव्हेटटेक आणि क्रिएटिव्ह सोल्यूशन्सकडून',
    applicationTrends: 'अर्ज ट्रेंड',
    applicationTrendsSubtitle: 'गेल्या 6 महिन्यांतील तुमची अर्ज क्रियाकलाप.',
    months: { jan: "जाने", feb: "फेब्रु", mar: "मार्च", apr: "एप्रि", may: "मे", jun: "जून" },

    // Profile Page
    createYourProfile: 'तुमचे प्रोफाइल तयार करा',
    myProfileSubtitle: "सर्वोत्तम संधी आकर्षित करण्यासाठी तुमचे प्रोफाइल अद्ययावत ठेवा.",
    createYourProfileSubtitle: "सुरू करण्यासाठी तुमचे प्रोफाइल भरा. ही माहिती तुम्हाला सर्वोत्तम इंटर्नशिपशी जुळवण्यासाठी वापरली जाईल.",
    profileDetails: 'प्रोफाइल तपशील',
    profileDetailsSubtitle: 'ही माहिती तुम्हाला इंटर्नशिपशी जुळवण्यासाठी वापरली जाईल.',

    // Profile Form
    fullName: 'पूर्ण नाव',
    fullNamePlaceholder: 'उदा. ॲलेक्स डो',
    headline: 'हेडलाइन',
    headlinePlaceholder: 'उदा. महत्वाकांक्षी सॉफ्टवेअर अभियंता',
    caste: 'जात',
    castePlaceholder: 'उदा. सामान्य, ओबीसी, एससी, एसटी',
    familyAnnualIncome: 'कौटुंबिक वार्षिक उत्पन्न',
    familyAnnualIncomePlaceholder: 'उदा. 500000',
    professionalSummary: 'व्यावसायिक सारांश',
    professionalSummaryPlaceholder: "तुमच्याबद्दल, तुमच्या ध्येयांबद्दल आणि तुम्हाला कशाची आवड आहे याबद्दल थोडे सांगा.",
    skills: 'कौशल्ये',
    skillsPlaceholder: 'उदा. जावास्क्रिप्ट, रिएक्ट, पायथन, फिग्मा...',
    experienceAndProjects: 'अनुभव आणि प्रकल्प',
    experienceAndProjectsPlaceholder: "तुमचा संबंधित कामाचा अनुभव, प्रकल्प आणि यश यांचे वर्णन करा.",
    internshipPreferences: 'इंटर्नशिप प्राधान्ये',
    internshipPreferencesPlaceholder: "तुम्ही इंटर्नशिपमध्ये काय शोधत आहात? (उदा. उद्योग, कंपनीचा आकार, स्थान)",
    saveChanges: 'बदल जतन करा',
    profileUpdated: 'प्रोफाइल अद्यतनित!',
    profileUpdatedDescription: 'तुमचे बदल यशस्वीरित्या जतन केले गेले आहेत.',

    // Internships Page (Candidate)
    internshipListings: 'इंटर्नशिप सूची',
    internshipListingsSubtitle: 'तुमच्या पुढील संधीसाठी ब्राउझ करा आणि अर्ज करा.',
    viewDetails: 'तपशील पहा',
    applicants: 'अर्जदार',

    // Internships Page (Company)
    candidateProfiles: 'उमेदवार प्रोफाइल',
    candidateProfilesSubtitle: 'तुमच्या खुल्या भूमिकांसाठी शीर्ष प्रतिभा शोधा.',
    postNewJob: 'नवीन नोकरी पोस्ट करा',
    qualifications: 'पात्रता',
    viewFullProfile: 'पूर्ण प्रोफाइल पहा',

    // Internship Details Page
    applyNow: 'आता अर्ज करा',
    aboutTheInternship: 'इंटर्नशिपबद्दल',
    responsibilities: 'जबाबदाऱ्या',
    requirements: 'आवश्यकता',

    // Application Success Page
    applicationSuccessful: 'अर्ज यशस्वी!',
    applicationSuccessMessage: 'तुम्ही {company} येथे {title} पदासाठी यशस्वीरित्या अर्ज केला आहे.',
    applicationSuccessNextSteps: 'कंपनी तुमच्या प्रोफाइलचे पुनरावलोकन करेल आणि तुम्ही योग्य असल्यास तुमच्याशी संपर्क साधेल. तुम्ही तुमच्या अर्जाची स्थिती संदेश टॅबमध्ये तपासू शकता.',
    keepBrowsing: 'ब्राउझिंग सुरू ठेवा',
    goToDashboard: 'डॅशबोर्डवर जा',

    // Matches Page
    candidateMatches: 'उमेदवार सामने',
    candidateMatchesSubtitle: "आमच्या AI ने तुमच्या नोकरी प्रोफाइलशी जुळवलेल्या उमेदवारांचे पुनरावलोकन करा.",
    myMatchesSubtitle: "तुमच्या कौशल्यांना आणि प्राधान्यांना पूर्णपणे अनुकूल इंटर्नशिप शोधा.",

    // Matches Component (Internship)
    aiPoweredMatchmaking: 'AI- समर्थित मॅचमेकिंग',
    aiPoweredMatchmakingSubtitle: 'आमच्या AI ला तुमचे प्रोफाइल विश्लेषण करू देण्यासाठी आणि तुमच्यासाठी सर्वोत्तम इंटर्नशिप सामने शोधण्यासाठी खालील बटणावर क्लिक करा.',
    findingMatches: 'सामने शोधत आहे',
    findMyMatches: 'माझे सामने शोधा',
    yourTopMatches: 'तुमचे शीर्ष सामने',
    findingYourMatches: 'तुमचे सामने शोधत आहे',
    noMatchesFound: 'कोणतेही सामने आढळले नाहीत',
    noMatchesFoundSubtitle: 'AI ला कोणतेही योग्य सामने सापडले नाहीत. तुमचे प्रोफाइल अद्यतनित करण्याचा प्रयत्न करा.',
    errorOccurred: 'एक त्रुटी आली',
    failedToFetchMatches: 'इंटर्नशिप सामने आणण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा.',
    match: 'सामना',

    // Matches Component (Company)
    aiPoweredCandidateMatching: 'AI- समर्थित उमेदवार जुळणी',
    aiPoweredCandidateMatchingSubtitle: 'आमच्या AI ला तुमच्या खुल्या पदांसाठी सर्वोत्तम उमेदवार शोधू देण्यासाठी बटणावर क्लिक करा.',
    findingCandidates: 'उमेदवार शोधत आहे',
    findCandidateMatches: 'उमेदवार सामने शोधा',
    yourTopCandidates: 'तुमचे शीर्ष उमेदवार',
    noCandidatesFound: "AI ला अद्याप कोणतेही योग्य उमेदवार सापडले नाहीत.",
    failedToFetchCandidates: 'उमेदवार सामने आणण्यात अयशस्वी. कृपया पुन्हा प्रयत्न करा.',
    matchedFor: 'साठी जुळले',

    // Messages Page
    messagesSubtitle: 'संधींबद्दल कंपन्यांशी थेट संवाद साधा.',
    conversations: 'संभाषणे',
    with: 'सोबत',
    typeAMessage: 'एक संदेश टाइप करा...',
    selectAConversation: 'चॅटिंग सुरू करण्यासाठी संभाषण निवडा',

    // New Internship Page
    postNewInternship: 'एक नवीन इंटर्नशिप पोस्ट करा',
    postNewInternshipSubtitle: 'तुमचा पुढील महान कर्मचारी शोधण्यासाठी खालील फॉर्म भरा.',

    // New Internship Form
    describeTheRole: 'भूमिकेचे वर्णन करा',
    describeTheRoleSubtitle: 'इंटर्नशिप भूमिकेचे थोडक्यात वर्णन देऊन प्रारंभ करा. आमचे AI तुमच्यासाठी संपूर्ण सूची तयार करण्यासाठी याचा वापर करेल.',
    roleDescription: 'भूमिका वर्णन',
    roleDescriptionPlaceholder: 'उदा. आमच्या नवीन रिएक्ट-आधारित डिझाइन सिस्टमवर काम करण्यासाठी एक फ्रंटएंड डेव्हलपर इंटर्न...',
    roleDescriptionValidation: 'कृपया अधिक तपशीलवार वर्णन द्या (किमान 20 वर्ण).',
    generating: 'तयार होत आहे',
    generateWithAI: 'AI सह तयार करा',
    generationSuccessTitle: 'इंटर्नशिप मसुदा तयार!',
    generationSuccessDescription: 'AI ने एक मसुदा तयार केला आहे. तुम्ही आता खाली त्याचे पुनरावलोकन आणि संपादन करू शकता.',
    generationFailedTitle: 'निर्मिती अयशस्वी',
    generationFailedDescription: 'इंटर्नशिप सूची तयार करताना त्रुटी आली. कृपया पुन्हा प्रयत्न करा.',
    internshipDetails: 'इंटर्नशिप तपशील',
    internshipDetailsSubtitle: 'खाली तयार केलेले तपशील पुनरावलोकन आणि संपादित करा.',
    internshipTitle: 'इंटर्नशिप शीर्षक',
    internshipTitlePlaceholder: 'उदा. सॉफ्टवेअर अभियंता इंटर्न',
    placeOfWork: 'कामाचे ठिकाण',
    placeOfWorkPlaceholder: 'उदा. सॅन फ्रान्सिस्को, सीए किंवा रिमोट',
    fullDescription: 'पूर्ण वर्णन',
    fullDescriptionPlaceholder: 'भूमिका, कंपनी इत्यादींचे तपशीलवार वर्णन.',
    candidatePreferences: 'उमेदवार प्राधान्ये (पर्यायी)',
    preferredCaste: 'पसंतीची जात',
    selectACaste: 'एक जात निवडा',
    casteOptions: { general: 'सामान्य', obc: 'ओबीसी', sc: 'एससी', st: 'एसटी', any: 'कोणतीही' },
    preferredFamilyIncome: 'पसंतीचे कौटुंबिक उत्पन्न',
    selectAnIncomeRange: 'उत्पन्न श्रेणी निवडा',
    incomeOptions: { low: '₹2.5 लाखांपेक्षा कमी', medium: '₹2.5 लाख - ₹8 लाख', high: '₹8 लाखांपेक्षा जास्त', any: 'कोणतेही' },
    preferredSkills: 'पसंतीची कौशल्ये',
    preferredSkillsPlaceholder: 'उदा. रिएक्ट, पायथन, डेटा विश्लेषण',
    preferredSkillsDescription: 'कौशल्यांची स्वल्पविरामाने विभक्त केलेली सूची प्रविष्ट करा.',
    educationQualifications: 'शैक्षणिक पात्रता',
    educationQualificationsPlaceholder: 'उदा. बी.टेक इन सीएस, बी.कॉम',
    educationQualificationsDescription: 'आवश्यक किंवा पसंतीची शैक्षणिक पात्रता प्रविष्ट करा.',
    postInternship: 'इंटर्नशिप पोस्ट करा',
    internshipPostedTitle: 'इंटर्नशिप पोस्ट केली!',
    internshipPostedDescription: 'तुमची इंटर्नशिप यशस्वीरित्या पोस्ट केली गेली आहे.',
  },
  gu: {
    // Landing Page
    dashboard: 'ડેશબોર્ડ',
    heroTitle: 'AI સાથે તમારી પરફેક્ટ ઇન્ટર્નશિપ શોધો',
    heroSubtitle: 'અમારું AI- સંચાલિત પ્લેટફોર્મ પ્રતિભાશાળી વિદ્યાર્થીઓને પરફેક્ટ ઇન્ટર્નશિપ મેચ માટે નવીન કંપનીઓ સાથે જોડે છે.',
    forCandidates: 'ઉમેદવારો માટે',
    forCompanies: 'કંપનીઓ માટે',
    candidatesDesc: 'તમારી પ્રોફાઇલ બનાવો, તમારી કુશળતા પ્રદર્શિત કરો, અને અમારા AI ને તમારા માટે શ્રેષ્ઠ ઇન્ટર્નશિપ તકો શોધવા દો.',
    companiesDesc: 'તમારી ઇન્ટર્નશિપ લિસ્ટિંગ પોસ્ટ કરો અને સૌથી લાયક અને પ્રેરિત ઉમેદવારો સાથે મેચ મેળવો.',
    intelligentMatching: 'બુદ્ધિશાળી મેચિંગ',
    matchingDesc: 'અમારું અદ્યતન અલ્ગોરિધમ ઉચ્ચતમ સુસંગતતા સુનિશ્ચિત કરવા માટે પ્રોફાઇલ્સ અને લિસ્ટિંગ્સનું વિશ્લેષણ કરે છે.',
    eligibilityTitle: 'પાત્રતા માપદંડ',
    eligibilitySubtitle: 'કૃપા કરીને અરજી કરતા પહેલા ખાતરી કરો કે તમે નીચેના માપદંડોને પૂર્ણ કરો છો.',
    whoCanApply: 'કોણ અરજી કરી શકે છે',
    eligiblePoints: [
        "ઉમેદવાર ભારતીય રાષ્ટ્રીયતાનો હોવો જોઈએ.",
        "ઉમેદવારની ઉંમર 21 થી 24 વર્ષની વચ્ચે હોવી જોઈએ (અરજી સબમિટ કરવાની છેલ્લી તારીખે).",
        "ઉમેદવાર પૂર્ણ-સમય નોકરીમાં ન હોવો જોઈએ.",
        "ઉમેદવાર પૂર્ણ-સમય શિક્ષણમાં રોકાયેલ ન હોવો જોઈએ.",
        "ઓનલાઈન/દૂરસ્થ શિક્ષણ કાર્યક્રમોમાં નોંધાયેલા ઉમેદવારો અરજી કરવા પાત્ર છે.",
        "ઉમેદવારે હાઇ સ્કૂલ, ઉચ્ચતર માધ્યમિક શાળા પૂર્ણ કરેલી હોવી જોઈએ, ITI તરફથી પ્રમાણપત્ર ધરાવતો હોવો જોઈએ, પોલિટેકનિક સંસ્થામાંથી ડિપ્લોમા ધરાવતો હોવો જોઈએ, અથવા BA, B.Sc, B.Com, BCA, BBA, B.Pharma જેવી ડિગ્રી સાથે સ્નાતક હોવો જોઈએ.",
        "ઉમેદવારના પરિવારની આવક ₹8,00,000/- થી વધુ ન હોવી જોઈએ.",
    ],
    whoIsNotEligible: 'કોણ પાત્ર નથી',
    ineligiblePoints: [
        "IITs, IIMs, નેશનલ લો યુનિવર્સિટીઓ, IISER, NIDs, અને IIITs માંથી સ્નાતકો.",
        "CA, CMA, CS, MBBS, BDS, MBA, કોઈપણ માસ્ટર્સ અથવા ઉચ્ચ ડિગ્રી જેવી લાયકાત ધરાવતા.",
        "કેન્દ્ર સરકાર અથવા રાજ્ય સરકારની યોજનાઓ હેઠળ કોઈપણ કૌશલ્ય, એપ્રેન્ટિસશિપ, ઇન્ટર્નશિપ અથવા વિદ્યાર્થી તાલીમ કાર્યક્રમ હેઠળના લોકો.",
        "જેમણે કોઈપણ સમયે નેશનલ એપ્રેન્ટિસશિપ ટ્રેનિંગ સ્કીમ (NATS) અથવા નેશનલ એપ્રેન્ટિસશિપ પ્રમોશન સ્કીમ (NAPS) હેઠળ એપ્રેન્ટિસશિપ તાલીમ પૂર્ણ કરી છે.",
        "જો ઉમેદવારના પરિવારના કોઈપણ સભ્યની વાર્ષિક આવક ₹8 લાખથી વધુ હોય.",
        "જો પરિવારનો કોઈપણ સભ્ય કાયમી/નિયમિત સરકારી કર્મચારી હોય.",
    ],
    programDetailsTitle: 'કાર્યક્રમની વિગતો',
    programDetailsSubtitle: 'ઇન્ટર્નશિપ કાર્યક્રમ વિશે તમારે જે બધું જાણવાની જરૂર છે.',
    structureTitle: 'ઇન્ટર્નશિપનો સમયગાળો અને માળખું',
    structurePoints: [
        'સમયગાળો: 12 મહિના (6 મહિનાની હેન્ડ્સ-ઓન તાલીમ સહિત).',
        'ક્ષેત્રો: બેંકિંગ, તેલ અને ગેસ, હોસ્પિટાલિટી, ઓટોમોટિવ, મેન્યુફેક્ચરિંગ, એફએમસીજી, પ્રવાસ, ઊર્જા અને વધુ.',
        'ભાગ લેતી કંપનીઓ: રિલાયન્સ, ટીસીએસ, એચડીએફસી બેંક, મારુતિ સુઝુકી, આઈટીસી, હિન્દુસ્તાન યુનિલિવર, ધ ટાઇમ્સ ગ્રુપ અને 500+ અન્ય.',
    ],
    stipendTitle: 'સ્ટાઇપેન્ડ અને નાણાકીય લાભો',
    stipendBenefit: 'લાભ',
    stipendAmount: 'રકમ/વિગત',
    stipendTable: [
        { benefit: 'માસિક સ્ટાઇપેન્ડ', detail: '₹5,000 (સરકાર તરફથી ₹4,500, યજમાન કંપની તરફથી ₹500)' },
        { benefit: 'એક-વખતનું અનુદાન', detail: 'શરૂઆતમાં ₹6,000 (આધાર-સીડેડ બેંક ખાતામાં ડાયરેક્ટ બેનિફિટ ટ્રાન્સફર દ્વારા)' },
        { benefit: 'વીમા કવરેજ', detail: 'પ્રધાનમંત્રી જીવન જ્યોતિ વીમા યોજના અને પ્રધાનમંત્રી સુરક્ષા વીમા યોજના' },
        { benefit: 'પ્રમાણપત્ર', detail: 'સફળતાપૂર્વક પૂર્ણ થયા પછી સરકાર-પ્રમાણિત ઇન્ટર્નશિપ પ્રમાણપત્ર' },
    ],
    selectionTitle: 'પસંદગી પ્રક્રિયા',
    selectionPoints: [
        'સ્ક્રીનીંગ: શૈક્ષણિક પૃષ્ઠભૂમિ, એસઓપી અને પસંદગીઓના આધારે.',
        'ઇન્ટરવ્યુ: કેટલીક ભૂમિકાઓ માટે ટૂંકા વર્ચ્યુઅલ ઇન્ટરવ્યુની જરૂર પડી શકે છે.',
        'વિવિધતા અને સમાવેશ: શોર્ટલિસ્ટિંગ વિવિધતા પર ભાર મૂકે છે, ખાસ કરીને ગ્રામીણ/આકાંક્ષી જિલ્લાઓ અને અનામત કેટેગરીના ઉમેદવારો માટે.',
    ],
    benefitsTitle: 'મુખ્ય લાભો',
    benefitsPoints: [
        'વાસ્તવિક-વિશ્વ ઉદ્યોગનો સંપર્ક',
        'કૌશલ્ય વિકાસ અને માર્ગદર્શન',
        'નેટવર્કિંગ તકો',
        'સુધારેલ રેઝ્યૂમે મૂલ્ય અને કારકિર્દીની સંભાવનાઓ',
        'ઇન્ટર્નશિપ દરમિયાન નાણાકીય સહાય',
    ],
    datesTitle: 'મહત્વપૂર્ણ તારીખો (2025)',
    datesPoints: [
        'તબક્કો 2 અરજીની છેલ્લી તારીખ: 22 એપ્રિલ, 2025',
        'પસંદગી પ્રક્રિયા: ચાલુ છે (અપડેટ્સ માટે પોર્ટલ તપાસો)',
        'ઇન્ટર્નશિપની શરૂઆત: કંપનીના શેડ્યૂલ મુજબ',
    ],
    additionalInfoTitle: 'વધારાની માહિતી',
    additionalInfoPoints: [
        'કોઈ અરજી ફી નથી: યોજના અરજી કરવા માટે મફત છે.',
        'હકારાત્મક પગલાં: ગ્રામીણ/આકાંક્ષી જિલ્લાઓ અને ઓછું પ્રતિનિધિત્વ ધરાવતા સમુદાયોના ઉમેદવારો માટે ખાસ વિચારણા.',
        'પ્રદર્શન મૂલ્યાંકન: ઇન્ટર્ન માટે પ્રતિસાદ સાથે પારદર્શક પ્રક્રિયા.',
    ],
    stayUpdatedTitle: 'અપડેટ કેવી રીતે રહેવું',
    stayUpdatedDesc: 'રીઅલ-ટાઇમ સૂચનાઓ માટે પીએમઆઈએસ એપ ડાઉનલોડ કરો. અપડેટ્સ માટે અધિકૃત પોર્ટલ અને નોંધાયેલ ઇમેઇલ/એસએમએસ નિયમિતપણે તપાસો.',
    downloadApp: 'એપ ડાઉનલોડ કરો',
    footerRights: 'સર્વાધિકાર સુરક્ષિત.',

    // Login Page
    login: 'લૉગિન',
    signUp: 'સાઇન અપ',
    loginDescription: 'તમારા એકાઉન્ટને ઍક્સેસ કરવા માટે તમારી ઓળખપત્રો દાખલ કરો.',
    email: 'ઇમેઇલ',
    password: 'પાસવર્ડ',
    imACandidate: 'હું ઉમેદવાર છું',
    imACompany: 'હું કંપની છું',
    candidateSignUp: 'ઉમેદવાર સાઇન અપ',
    candidateSignUpDescription: 'તમારી સ્વપ્નની ઇન્ટર્નશિપ શોધવા માટે એક એકાઉન્ટ બનાવો.',
    name: 'નામ',
    namePlaceholder: 'નામ',
    createProfileAndFindInternships: 'પ્રોફાઇલ બનાવો અને ઇન્ટર્નશિપ શોધો',
    companySignUp: 'કંપની સાઇન અપ',
    companySignUpDescription: 'શ્રેષ્ઠ પ્રતિભાઓને નોકરી પર રાખવા માટે એક એકાઉન્ટ બનાવો.',
    companyName: 'કંપનીનું નામ',
    companyNamePlaceholder: 'તમારી કંપની',
    companyEmail: 'કંપની ઇમેઇલ',
    createAccountAndPostJob: 'એકાઉન્ટ બનાવો અને જોબ પોસ્ટ કરો',

    // Sidebar
    myProfile: 'મારી પ્રોફાઇલ',
    internships: 'ઇન્ટર્નશિપ',
    myMatches: 'મારા મેચ',
    messages: 'સંદેશાઓ',
    logout: 'લૉગઆઉટ',
    myInternshipListing: 'મારી ઇન્ટર્નશિપ લિસ્ટિંગ',
    studentProfiles: 'વિદ્યાર્થી પ્રોફાઇલ્સ',

    // Dashboard
    welcomeBack: 'ફરી સ્વાગત છે!',
    dashboardSubtitle: 'અહીં તમારી ઇન્ટર્નશિપ શોધનો સારાંશ છે.',
    profileCompletion: 'પ્રોફાઇલ પૂર્ણતા',
    profileCompletionSubtitle: 'એક સંપૂર્ણ પ્રોફાઇલ વધુ ભરતી કરનારાઓને આકર્ષે છે.',
    activeApplications: 'સક્રિય અરજીઓ',
    activeApplicationsSubtitle: 'છેલ્લા અઠવાડિયામાં +2',
    newMessages: 'નવા સંદેશા',
    newMessagesSubtitle: 'ઇનોવેટટેક અને ક્રિએટિવ સોલ્યુશન્સ તરફથી',
    applicationTrends: 'અરજીના વલણો',
    applicationTrendsSubtitle: 'છેલ્લા 6 મહિનામાં તમારી અરજીની પ્રવૃત્તિ.',
    months: { jan: "જાન્યુ", feb: "ફેબ્રુ", mar: "માર્ચ", apr: "એપ્રિ", may: "મે", jun: "જૂન" },

    // Profile Page
    createYourProfile: 'તમારી પ્રોફાઇલ બનાવો',
    myProfileSubtitle: 'શ્રેષ્ઠ તકો આકર્ષવા માટે તમારી પ્રોફાઇલને અપ-ટુ-ડેટ રાખો.',
    createYourProfileSubtitle: 'શરૂ કરવા માટે તમારી પ્રોફાઇલ ભરો. આ માહિતીનો ઉપયોગ તમને શ્રેષ્ઠ ઇન્ટર્નશિપ સાથે મેચ કરવા માટે કરવામાં આવશે.',
    profileDetails: 'પ્રોફાઇલ વિગતો',
    profileDetailsSubtitle: 'આ માહિતીનો ઉપયોગ તમને ઇન્ટર્નશિપ સાથે મેચ કરવા માટે કરવામાં આવશે.',

    // Profile Form
    fullName: 'પૂરું નામ',
    fullNamePlaceholder: 'દા.ત. એલેક્સ ડો',
    headline: 'હેડલાઇન',
    headlinePlaceholder: 'દા.ત. મહત્વાકાંક્ષી સોફ્ટવેર એન્જિનિયર',
    caste: 'જ્ઞાતિ',
    castePlaceholder: 'દા.ત. જનરલ, ઓબીસી, એસસી, એસટી',
    familyAnnualIncome: 'પારિવારિક વાર્ષિક આવક',
    familyAnnualIncomePlaceholder: 'દા.ત. 500000',
    professionalSummary: 'વ્યાવસાયિક સારાંશ',
    professionalSummaryPlaceholder: 'તમારા વિશે, તમારા લક્ષ્યો વિશે, અને તમને શેમાં રસ છે તે વિશે થોડું જણાવો.',
    skills: 'કુશળતા',
    skillsPlaceholder: 'દા.ત. જાવાસ્ક્રિપ્ટ, રિએક્ટ, પાયથોન, ફિગ્મા...',
    experienceAndProjects: 'અનુભવ અને પ્રોજેક્ટ્સ',
    experienceAndProjectsPlaceholder: 'તમારા સંબંધિત કાર્ય અનુભવ, પ્રોજેક્ટ્સ અને સિદ્ધિઓનું વર્ણન કરો.',
    internshipPreferences: 'ઇન્ટર્નશિપ પસંદગીઓ',
    internshipPreferencesPlaceholder: 'તમે ઇન્ટર્નશિપમાં શું શોધી રહ્યા છો? (દા.ત. ઉદ્યોગ, કંપનીનું કદ, સ્થાન)',
    saveChanges: 'ફેરફારો સાચવો',
    profileUpdated: 'પ્રોફાઇલ અપડેટ થઈ!',
    profileUpdatedDescription: 'તમારા ફેરફારો સફળતાપૂર્વક સાચવવામાં આવ્યા છે.',

    // Internships Page (Candidate)
    internshipListings: 'ઇન્ટર્નશિપ લિસ્ટિંગ્સ',
    internshipListingsSubtitle: 'તમારી આગામી તક માટે બ્રાઉઝ કરો અને અરજી કરો.',
    viewDetails: 'વિગતો જુઓ',
    applicants: 'અરજદારો',

    // Internships Page (Company)
    candidateProfiles: 'ઉમેદવાર પ્રોફાઇલ્સ',
    candidateProfilesSubtitle: 'તમારી ખુલ્લી ભૂમિકાઓ માટે ટોચની પ્રતિભા શોધો.',
    postNewJob: 'નવી જોબ પોસ્ટ કરો',
    qualifications: 'લાયકાત',
    viewFullProfile: 'સંપૂર્ણ પ્રોફાઇલ જુઓ',

    // Internship Details Page
    applyNow: 'હમણાં અરજી કરો',
    aboutTheInternship: 'ઇન્ટર્નશિપ વિશે',
    responsibilities: 'જવાબદારીઓ',
    requirements: 'જરૂરિયાતો',

    // Application Success Page
    applicationSuccessful: 'અરજી સફળ!',
    applicationSuccessMessage: 'તમે {company} પર {title} પદ માટે સફળતાપૂર્વક અરજી કરી છે.',
    applicationSuccessNextSteps: 'કંપની તમારી પ્રોફાઇલની સમીક્ષા કરશે અને જો તમે યોગ્ય હશો તો તમારો સંપર્ક કરશે. તમે સંદેશા ટેબમાં તમારી અરજીઓની સ્થિતિ ચકાસી શકો છો.',
    keepBrowsing: 'બ્રાઉઝિંગ ચાલુ રાખો',
    goToDashboard: 'ડેશબોર્ડ પર જાઓ',

    // Matches Page
    candidateMatches: 'ઉમેદવાર મેચ',
    candidateMatchesSubtitle: 'અમારા AI એ તમારા જોબ પ્રોફાઇલ્સ સાથે મેચ કરેલા ઉમેદવારોની સમીક્ષા કરો.',
    myMatchesSubtitle: 'તમારી કુશળતા અને પસંદગીઓ માટે સંપૂર્ણ રીતે તૈયાર કરેલી ઇન્ટર્નશિપ શોધો.',

    // Matches Component (Internship)
    aiPoweredMatchmaking: 'AI-સંચાલિત મેચમેકિંગ',
    aiPoweredMatchmakingSubtitle: 'અમારા AI ને તમારી પ્રોફાઇલનું વિશ્લેષણ કરવા અને તમારા માટે શ્રેષ્ઠ ઇન્ટર્નશિપ મેચ શોધવા માટે નીચે આપેલા બટનને ક્લિક કરો.',
    findingMatches: 'મેચ શોધી રહ્યું છે',
    findMyMatches: 'મારા મેચ શોધો',
    yourTopMatches: 'તમારા ટોચના મેચ',
    findingYourMatches: 'તમારા મેચ શોધી રહ્યું છે',
    noMatchesFound: 'કોઈ મેચ મળ્યા નથી',
    noMatchesFoundSubtitle: 'AI ને કોઈ યોગ્ય મેચ મળી શક્યા નહીં. તમારી પ્રોફાઇલ અપડેટ કરવાનો પ્રયાસ કરો.',
    errorOccurred: 'એક ભૂલ આવી',
    failedToFetchMatches: 'ઇન્ટર્નશિપ મેચ મેળવવામાં નિષ્ફળ. કૃપા કરીને ફરી પ્રયાસ કરો.',
    match: 'મેચ',

    // Matches Component (Company)
    aiPoweredCandidateMatching: 'AI-સંચાલિત ઉમેદવાર મેચિંગ',
    aiPoweredCandidateMatchingSubtitle: 'અમારા AI ને તમારી ખુલ્લી જગ્યાઓ માટે શ્રેષ્ઠ ઉમેદવારો શોધવા દેવા માટે બટનને ક્લિક કરો.',
    findingCandidates: 'ઉમેદવારો શોધી રહ્યું છે',
    findCandidateMatches: 'ઉમેદવાર મેચ શોધો',
    yourTopCandidates: 'તમારા ટોચના ઉમેદવારો',
    noCandidatesFound: 'AI ને હજુ સુધી કોઈ યોગ્ય ઉમેદવાર મળી શક્યા નથી.',
    failedToFetchCandidates: 'ઉમેદવાર મેચ મેળવવામાં નિષ્ફળ. કૃપા કરીને ફરી પ્રયાસ કરો.',
    matchedFor: 'માટે મેચ થયું',

    // Messages Page
    messagesSubtitle: 'તકો વિશે કંપનીઓ સાથે સીધો સંપર્ક કરો.',
    conversations: 'વાર્તાલાપ',
    with: 'સાથે',
    typeAMessage: 'એક સંદેશ ટાઇપ કરો...',
    selectAConversation: 'ચેટિંગ શરૂ કરવા માટે એક વાર્તાલાપ પસંદ કરો',

    // New Internship Page
    postNewInternship: 'નવી ઇન્ટર્નશિપ પોસ્ટ કરો',
    postNewInternshipSubtitle: 'તમારા આગામી મહાન ભરતીને શોધવા માટે નીચેનું ફોર્મ ભરો.',

    // New Internship Form
    describeTheRole: 'ભૂમિકાનું વર્ણન કરો',
    describeTheRoleSubtitle: 'ઇન્ટર્નશિપ ભૂમિકાનું સંક્ષિપ્ત વર્ણન આપીને પ્રારંભ કરો. અમારું AI તમારા માટે સંપૂર્ણ સૂચિ જનરેટ કરવા માટે આનો ઉપયોગ કરશે.',
    roleDescription: 'ભૂમિકા વર્ણન',
    roleDescriptionPlaceholder: 'દા.ત. અમારા નવા રિએક્ટ-આધારિત ડિઝાઇન સિસ્ટમ પર કામ કરવા માટે એક ફ્રન્ટએન્ડ ડેવલપર ઇન્ટર્ન...',
    roleDescriptionValidation: 'કૃપા કરીને વધુ વિગતવાર વર્ણન પ્રદાન કરો (ઓછામાં ઓછા 20 અક્ષરો).',
    generating: 'જનરેટ કરી રહ્યું છે',
    generateWithAI: 'AI સાથે જનરેટ કરો',
    generationSuccessTitle: 'ઇન્ટર્નશિપ ડ્રાફ્ટ જનરેટ થયો!',
    generationSuccessDescription: 'AI એ એક ડ્રાફ્ટ બનાવ્યો છે. તમે હવે નીચે તેની સમીક્ષા અને સંપાદન કરી શકો છો.',
    generationFailedTitle: 'જનરેશન નિષ્ફળ',
    generationFailedDescription: 'ઇન્ટર્નશિપ સૂચિ જનરેટ કરવામાં ભૂલ આવી. કૃપા કરીને ફરી પ્રયાસ કરો.',
    internshipDetails: 'ઇન્ટર્નશિપ વિગતો',
    internshipDetailsSubtitle: 'નીચે જનરેટ થયેલ વિગતોની સમીક્ષા અને સંપાદન કરો.',
    internshipTitle: 'ઇન્ટર્નશિપ શીર્ષક',
    internshipTitlePlaceholder: 'દા.ત. સોફ્ટવેર એન્જિનિયર ઇન્ટર્ન',
    placeOfWork: 'કાર્યસ્થળ',
    placeOfWorkPlaceholder: 'દા.ત. સાન ફ્રાન્સિસ્કો, સીએ અથવા રિમોટ',
    fullDescription: 'સંપૂર્ણ વર્ણન',
    fullDescriptionPlaceholder: 'ભૂમિકા, કંપની, વગેરેનું વિગતવાર વર્ણન.',
    candidatePreferences: 'ઉમેદવાર પસંદગીઓ (વૈકલ્પિક)',
    preferredCaste: 'પસંદગીની જ્ઞાતિ',
    selectACaste: 'એક જ્ઞાતિ પસંદ કરો',
    casteOptions: { general: 'જનરલ', obc: 'ઓબીસી', sc: 'એસસી', st: 'એસટી', any: 'કોઈપણ' },
    preferredFamilyIncome: 'પસંદગીની પારિવારિક આવક',
    selectAnIncomeRange: 'આવક શ્રેણી પસંદ કરો',
    incomeOptions: { low: '₹2.5 લાખથી ઓછી', medium: '₹2.5 લાખ - ₹8 લાખ', high: '₹8 લાખથી વધુ', any: 'કોઈપણ' },
    preferredSkills: 'પસંદગીની કુશળતા',
    preferredSkillsPlaceholder: 'દા.ત. રિએક્ટ, પાયથોન, ડેટા એનાલિસિસ',
    preferredSkillsDescription: 'અલ્પવિરામથી અલગ કરેલી કુશળતાની સૂચિ દાખલ કરો.',
    educationQualifications: 'શૈક્ષણિક લાયકાત',
    educationQualificationsPlaceholder: 'દા.ત. બી.ટેક ઇન સીએસ, બી.કોમ',
    educationQualificationsDescription: 'જરૂરી અથવા પસંદગીની શૈક્ષણિક લાયકાત દાખલ કરો.',
    postInternship: 'ઇન્ટર્નશિપ પોસ્ટ કરો',
    internshipPostedTitle: 'ઇન્ટર્નશિપ પોસ્ટ થઈ!',
    internshipPostedDescription: 'તમારી ઇન્ટર્નશિપ સફળતાપૂર્વક પોસ્ટ થઈ ગઈ છે.',
  },
  bn: {
    // Landing Page
    dashboard: 'ড্যাশবোর্ড',
    heroTitle: 'AI দিয়ে আপনার পারফেক্ট ইন্টার্নশিপ খুঁজুন',
    heroSubtitle: 'আমাদের AI-চালিত প্ল্যাটফর্ম প্রতিভাবান ছাত্রদের পারফেক্ট ইন্টার্নশিপ ম্যাচের জন্য উদ্ভাবনী কোম্পানির সাথে সংযুক্ত করে।',
    forCandidates: 'প্রার্থীদের জন্য',
    forCompanies: 'কোম্পানির জন্য',
    candidatesDesc: 'আপনার প্রোফাইল তৈরি করুন, আপনার দক্ষতা প্রদর্শন করুন, এবং আমাদের AI কে আপনার জন্য সেরা ইন্টার্নশিপ সুযোগ খুঁজে পেতে দিন।',
    companiesDesc: 'আপনার ইন্টার্নশিপ তালিকা পোস্ট করুন এবং সবচেয়ে যোগ্য এবং অনুপ্রাণিত প্রার্থীদের সাথে ম্যাচ করুন।',
    intelligentMatching: 'বুদ্ধিমান ম্যাচিং',
    matchingDesc: 'আমাদের উন্নত অ্যালগরিদম সর্বোচ্চ সামঞ্জস্যতা নিশ্চিত করতে প্রোফাইল এবং তালিকা বিশ্লেষণ করে।',
    eligibilityTitle: 'যোগ্যতার মানদণ্ড',
    eligibilitySubtitle: 'আবেদন করার আগে দয়া করে নিশ্চিত করুন যে আপনি নিম্নলিখিত মানদণ্ড পূরণ করেছেন।',
    whoCanApply: 'কারা আবেদন করতে পারে',
    eligiblePoints: [
        "প্রার্থী ভারতীয় জাতীয়তার হতে হবে।",
        "প্রার্থীর বয়স ২১ থেকে ২৪ বছরের মধ্যে হতে হবে (আবেদন জমা দেওয়ার শেষ তারিখ অনুযায়ী)।",
        "প্রার্থী পূর্ণ-সময়ের চাকরিতে নিযুক্ত থাকা উচিত নয়।",
        "প্রার্থী পূর্ণ-সময়ের শিক্ষায় নিযুক্ত থাকা উচিত নয়।",
        "অনলাইন/দূরশিক্ষা প্রোগ্রামে নথিভুক্ত প্রার্থীরা আবেদন করার যোগ্য।",
        "প্রার্থীকে হাই স্কুল, উচ্চ মাধ্যমিক স্কুল সম্পন্ন করতে হবে, আইটিআই থেকে একটি সার্টিফিকেট থাকতে হবে, একটি পলিটেকনিক ইনস্টিটিউট থেকে একটি ডিপ্লোমা থাকতে হবে, অথবা বিএ, বি.এসসি, বি.কম, বিসিএ, বিবিএ, বি.ফার্মা, ইত্যাদি ডিগ্রিসহ স্নাতক হতে হবে।",
        "প্রার্থীর পারিবারিক আয় ₹৮,০০,০০০/- এর বেশি হওয়া উচিত নয়।",
    ],
    whoIsNotEligible: 'কারা যোগ্য নয়',
    ineligiblePoints: [
        "আইআইটি, আইআইএম, জাতীয় আইন বিশ্ববিদ্যালয়, আইআইএসইআর, এনআইডি, এবং আইআইআইটি থেকে স্নাতক।",
        "সিএ, সিএমএ, সিএস, এমবিবিএস, বিডিএস, এমবিএ, যেকোনো মাস্টার্স বা উচ্চতর ডিগ্রির মতো যোগ্যতা থাকা ব্যক্তিরা।",
        "কেন্দ্রীয় সরকার বা রাজ্য সরকারের প্রকল্পের অধীনে যেকোনো দক্ষতা, শিক্ষানবিশ, ইন্টার্নশিপ বা ছাত্র প্রশিক্ষণ প্রোগ্রামে অংশগ্রহণকারী ব্যক্তিরা।",
        "যারা যেকোনো সময়ে জাতীয় শিক্ষানবিশ প্রশিক্ষণ প্রকল্প (NATS) বা জাতীয় শিক্ষানবিশ প্রচার প্রকল্প (NAPS) এর অধীনে শিক্ষানবিশ প্রশিক্ষণ সম্পন্ন করেছেন।",
        "যদি প্রার্থীর পরিবারের কোনো সদস্যের বার্ষিক আয় ₹৮ লক্ষের বেশি হয়।",
        "যদি পরিবারের কোনো সদস্য স্থায়ী/নিয়মিত সরকারি কর্মচারী হন।",
    ],
    programDetailsTitle: 'প্রোগ্রামের বিবরণ',
    programDetailsSubtitle: 'ইন্টার্নশিপ প্রোগ্রাম সম্পর্কে আপনার যা কিছু জানা দরকার।',
    structureTitle: 'ইন্টার্নশিপের সময়কাল ও কাঠামো',
    structurePoints: [
      'সময়কাল: ১২ মাস (৬ মাসের হাতে-কলমে প্রশিক্ষণ সহ)।',
      'সেক্টর: ব্যাংকিং, তেল ও গ্যাস, আতিথেয়তা, অটোমোটিভ, উৎপাদন, এফএমসিজি, ভ্রমণ, শক্তি, এবং আরও অনেক কিছু।',
      'অংশগ্রহণকারী কোম্পানি: রিলায়েন্স, টিসিএস, এইচডিএফসি ব্যাংক, মারুতি সুজুকি, আইটিসি, হিন্দুস্তান ইউনিলিভার, দ্য টাইমস গ্রুপ, এবং ৫০০+ অন্যান্য।',
    ],
    stipendTitle: 'স্টিপেন্ড ও আর্থিক সুবিধা',
    stipendBenefit: 'সুবিধা',
    stipendAmount: 'পরিমাণ/বিবরণ',
    stipendTable: [
        { benefit: 'মাসিক স্টিপেন্ড', detail: '₹৫,০০০ (সরকার থেকে ₹৪,৫০০, হোস্ট কোম্পানি থেকে ₹৫০০)' },
        { benefit: 'এককালীন অনুদান', detail: 'শুরুতে ₹৬,০০০ (আধার-সিডেড ব্যাংক অ্যাকাউন্টে সরাসরি সুবিধা স্থানান্তরের মাধ্যমে)' },
        { benefit: 'বীমা কভারেজ', detail: 'প্রধানমন্ত্রী জীবন জ্যোতি বীমা যোজনা এবং প্রধানমন্ত্রী সুরক্ষা বীমা যোজনা' },
        { benefit: 'সার্টিফিকেট', detail: 'সফলভাবে সম্পন্ন করার পর সরকার-প্রত্যয়িত ইন্টার্নশিপ সার্টিফিকেট' },
    ],
    selectionTitle: 'নির্বাচন প্রক্রিয়া',
    selectionPoints: [
        'স্ক্রিনিং: একাডেমিক পটভূমি, এসওপি, এবং পছন্দের উপর ভিত্তি করে।',
        'সাক্ষাৎকার: কিছু ভূমিকার জন্য একটি সংক্ষিপ্ত ভার্চুয়াল সাক্ষাৎকারের প্রয়োজন হতে পারে।',
        'বৈচিত্র্য ও অন্তর্ভুক্তি: শর্টলিস্টিং বৈচিত্র্যের উপর জোর দেয়, বিশেষ করে গ্রামীণ/উচ্চাকাঙ্ক্ষী জেলা এবং সংরক্ষিত শ্রেণীর প্রার্থীদের জন্য।',
    ],
    benefitsTitle: 'মূল সুবিধা',
    benefitsPoints: [
        'বাস্তব-বিশ্বের শিল্প এক্সপোজার',
        'দক্ষতা উন্নয়ন এবং মেন্টরশিপ',
        'নেটওয়ার্কিং সুযোগ',
        'বর্ধিত জীবনবৃত্তান্তের মূল্য এবং ক্যারিয়ারের সম্ভাবনা',
        'ইন্টার্নশিপের সময় আর্থিক সহায়তা',
    ],
    datesTitle: 'গুরুত্বপূর্ণ তারিখ (২০২৫)',
    datesPoints: [
        '২য় পর্বের আবেদনের শেষ তারিখ: ২২ এপ্রিল, ২০২৫',
        'নির্বাচন প্রক্রিয়া: চলমান (আপডেটের জন্য পোর্টাল দেখুন)',
        'ইন্টার্নশিপ শুরু: কোম্পানির সময়সূচী অনুযায়ী',
    ],
    additionalInfoTitle: 'অতিরিক্ত তথ্য',
    additionalInfoPoints: [
        'কোনো আবেদন ফি নেই: স্কিমটি বিনামূল্যে আবেদন করার জন্য।',
        'ইতিবাচক পদক্ষেপ: গ্রামীণ/উচ্চাকাঙ্ক্ষী জেলা এবং স্বল্প প্রতিনিধিত্ব করা সম্প্রদায়ের প্রার্থীদের জন্য বিশেষ বিবেচনা।',
        'কর্মক্ষমতা মূল্যায়ন: ইন্টার্নদের জন্য প্রতিক্রিয়াসহ স্বচ্ছ প্রক্রিয়া।',
    ],
    stayUpdatedTitle: 'কিভাবে আপডেট থাকবেন',
    stayUpdatedDesc: 'রিয়েল-টাইম বিজ্ঞপ্তির জন্য পিএমআইএস অ্যাপ ডাউনলোড করুন। আপডেটের জন্য নিয়মিত অফিসিয়াল পোর্টাল এবং নিবন্ধিত ইমেল/এসএমএস দেখুন।',
    downloadApp: 'অ্যাপ ডাউনলোড করুন',
    footerRights: 'সর্বস্বত্ব সংরক্ষিত।',

    // Login Page
    login: 'লগইন',
    signUp: 'সাইন আপ',
    loginDescription: 'আপনার অ্যাকাউন্টে প্রবেশ করতে আপনার শংসাপত্র লিখুন।',
    email: 'ইমেল',
    password: 'পাসওয়ার্ড',
    imACandidate: 'আমি একজন প্রার্থী',
    imACompany: 'আমি একটি কোম্পানি',
    candidateSignUp: 'প্রার্থী সাইন আপ',
    candidateSignUpDescription: 'আপনার স্বপ্নের ইন্টার্নশিপ খুঁজে পেতে একটি অ্যাকাউন্ট তৈরি করুন।',
    name: 'নাম',
    namePlaceholder: 'নাম',
    createProfileAndFindInternships: 'প্রোফাইল তৈরি করুন এবং ইন্টার্নশিপ খুঁজুন',
    companySignUp: 'কোম্পানি সাইন আপ',
    companySignUpDescription: 'সেরা প্রতিভা নিয়োগ করতে একটি অ্যাকাউন্ট তৈরি করুন।',
    companyName: 'কোম্পানির নাম',
    companyNamePlaceholder: 'আপনার কোম্পানি',
    companyEmail: 'কোম্পানির ইমেল',
    createAccountAndPostJob: 'অ্যাকাউন্ট তৈরি করুন এবং চাকরি পোস্ট করুন',

    // Sidebar
    myProfile: 'আমার প্রোফাইল',
    internships: 'ইন্টার্নশিপ',
    myMatches: 'আমার ম্যাচ',
    messages: 'বার্তা',
    logout: 'লগআউট',
    myInternshipListing: 'আমার ইন্টার্নশিপ তালিকা',
    studentProfiles: 'ছাত্র প্রোফাইল',

    // Dashboard
    welcomeBack: 'আবার স্বাগতম!',
    dashboardSubtitle: 'আপনার ইন্টার্নশিপ অনুসন্ধানের একটি সারাংশ এখানে।',
    profileCompletion: 'প্রোফাইল সমাপ্তি',
    profileCompletionSubtitle: 'একটি সম্পূর্ণ প্রোফাইল আরও নিয়োগকারীদের আকর্ষণ করে।',
    activeApplications: 'সক্রিয় অ্যাপ্লিকেশন',
    activeApplicationsSubtitle: 'গত সপ্তাহে +2',
    newMessages: 'নতুন বার্তা',
    newMessagesSubtitle: 'ইনোভेटেক এবং ক্রিয়েটিভ সলিউশন থেকে',
    applicationTrends: 'অ্যাপ্লিকেশন ট্রেন্ড',
    applicationTrendsSubtitle: 'গত ৬ মাসে আপনার অ্যাপ্লিকেশন কার্যকলাপ।',
    months: { jan: "জানু", feb: "ফেব্রু", mar: "মার্চ", apr: "এপ্রিল", may: "মে", jun: "জুন" },

    // Profile Page
    createYourProfile: 'আপনার প্রোফাইল তৈরি করুন',
    myProfileSubtitle: 'সেরা সুযোগ আকর্ষণ করতে আপনার প্রোফাইল আপ-টু-ডেট রাখুন।',
    createYourProfileSubtitle: 'শুরু করতে আপনার প্রোফাইল পূরণ করুন। এই তথ্য আপনাকে সেরা ইন্টার্নশিপের সাথে মেলাতে ব্যবহৃত হবে।',
    profileDetails: 'প্রোফাইলের বিবরণ',
    profileDetailsSubtitle: 'এই তথ্য আপনাকে ইন্টার্নশিপের সাথে মেলাতে ব্যবহৃত হবে।',

    // Profile Form
    fullName: 'পুরো নাম',
    fullNamePlaceholder: 'যেমন, অ্যালেক্স ডো',
    headline: 'শিরোনাম',
    headlinePlaceholder: 'যেমন, উচ্চাকাঙ্ক্ষী সফটওয়্যার ইঞ্জিনিয়ার',
    caste: 'বর্ণ',
    castePlaceholder: 'যেমন, সাধারণ, ওবিসি, এসসি, এসটি',
    familyAnnualIncome: 'পারিবারিক বার্ষিক আয়',
    familyAnnualIncomePlaceholder: 'যেমন, ৫০০০০০',
    professionalSummary: 'পেশাগত সারাংশ',
    professionalSummaryPlaceholder: 'আপনার সম্পর্কে, আপনার লক্ষ্য সম্পর্কে এবং আপনি কিসে আগ্রহী সে সম্পর্কে আমাদের কিছু বলুন।',
    skills: 'দক্ষতা',
    skillsPlaceholder: 'যেমন, জাভাস্ক্রিপ্ট, রিঅ্যাক্ট, পাইথন, ফিগমা...',
    experienceAndProjects: 'অভিজ্ঞতা ও প্রকল্প',
    experienceAndProjectsPlaceholder: 'আপনার প্রাসঙ্গিক কাজের অভিজ্ঞতা, প্রকল্প এবং কৃতিত্ব বর্ণনা করুন।',
    internshipPreferences: 'ইন্টার্নশিপ পছন্দ',
    internshipPreferencesPlaceholder: 'আপনি একটি ইন্টার্নশিপে কি খুঁজছেন? (যেমন, শিল্প, কোম্পানির আকার, অবস্থান)',
    saveChanges: 'পরিবর্তন সংরক্ষণ করুন',
    profileUpdated: 'প্রোফাইল আপডেট হয়েছে!',
    profileUpdatedDescription: 'আপনার পরিবর্তন সফলভাবে সংরক্ষণ করা হয়েছে।',
    
    // Internships Page (Candidate)
    internshipListings: 'ইন্টার্নশিপ তালিকা',
    internshipListingsSubtitle: 'আপনার পরবর্তী সুযোগের জন্য ব্রাউজ করুন এবং আবেদন করুন।',
    viewDetails: 'বিবরণ দেখুন',
    applicants: 'আবেদনকারী',

    // Internships Page (Company)
    candidateProfiles: 'প্রার্থী প্রোফাইল',
    candidateProfilesSubtitle: 'আপনার খোলা ভূমিকার জন্য শীর্ষ প্রতিভা আবিষ্কার করুন।',
    postNewJob: 'নতুন চাকরি পোস্ট করুন',
    qualifications: 'যোগ্যতা',
    viewFullProfile: 'সম্পূর্ণ প্রোফাইল দেখুন',

    // Internship Details Page
    applyNow: 'এখনই আবেদন করুন',
    aboutTheInternship: 'ইন্টার্নশিপ সম্পর্কে',
    responsibilities: 'দায়িত্ব',
    requirements: 'প্রয়োজনীয়তা',

    // Application Success Page
    applicationSuccessful: 'আবেদন সফল!',
    applicationSuccessMessage: 'আপনি {company}-এ {title} পদের জন্য সফলভাবে আবেদন করেছেন।',
    applicationSuccessNextSteps: 'কোম্পানি আপনার প্রোফাইল পর্যালোচনা করবে এবং আপনি যদি উপযুক্ত হন তবে আপনার সাথে যোগাযোগ করবে। আপনি বার্তা ট্যাবে আপনার আবেদনের অবস্থা পরীক্ষা করতে পারেন।',
    keepBrowsing: 'ব্রাউজিং চালিয়ে যান',
    goToDashboard: 'ড্যাশবোর্ডে যান',

    // Matches Page
    candidateMatches: 'প্রার্থী ম্যাচ',
    candidateMatchesSubtitle: 'আমাদের AI আপনার কাজের প্রোফাইলের সাথে মিলে যাওয়া প্রার্থীদের পর্যালোচনা করুন।',
    myMatchesSubtitle: 'আপনার দক্ষতা এবং পছন্দের সাথে পুরোপুরি মানানসই ইন্টার্নশিপ আবিষ্কার করুন।',
    
    // Matches Component (Internship)
    aiPoweredMatchmaking: 'AI-চালিত ম্যাচমেকিং',
    aiPoweredMatchmakingSubtitle: 'আমাদের AI কে আপনার প্রোফাইল বিশ্লেষণ করতে এবং আপনার জন্য সেরা ইন্টার্নশিপ ম্যাচ খুঁজে পেতে নীচের বোতামে ক্লিক করুন।',
    findingMatches: 'ম্যাচ খোঁজা হচ্ছে',
    findMyMatches: 'আমার ম্যাচ খুঁজুন',
    yourTopMatches: 'আপনার শীর্ষ ম্যাচ',
    findingYourMatches: 'আপনার ম্যাচ খোঁজা হচ্ছে',
    noMatchesFound: 'কোনো ম্যাচ পাওয়া যায়নি',
    noMatchesFoundSubtitle: 'AI কোনো উপযুক্ত ম্যাচ খুঁজে পায়নি। আপনার প্রোফাইল আপডেট করার চেষ্টা করুন।',
    errorOccurred: 'একটি ত্রুটি ঘটেছে',
    failedToFetchMatches: 'ইন্টার্নশিপ ম্যাচ আনতে ব্যর্থ। দয়া করে আবার চেষ্টা করুন।',
    match: 'ম্যাচ',

    // Matches Component (Company)
    aiPoweredCandidateMatching: 'AI-চালিত প্রার্থী ম্যাচিং',
    aiPoweredCandidateMatchingSubtitle: 'আমাদের AI কে আপনার খোলা পদগুলির জন্য সেরা প্রার্থী খুঁজে পেতে বোতামে ক্লিক করুন।',
    findingCandidates: 'প্রার্থী খোঁজা হচ্ছে',
    findCandidateMatches: 'প্রার্থী ম্যাচ খুঁজুন',
    yourTopCandidates: 'আপনার শীর্ষ প্রার্থী',
    noCandidatesFound: 'AI এখনও কোনো উপযুক্ত প্রার্থী খুঁজে পায়নি।',
    failedToFetchCandidates: 'প্রার্থী ম্যাচ আনতে ব্যর্থ। দয়া করে আবার চেষ্টা করুন।',
    matchedFor: 'এর জন্য মিলেছে',

    // Messages Page
    messagesSubtitle: 'সুযোগ সম্পর্কে কোম্পানির সাথে সরাসরি যোগাযোগ করুন।',
    conversations: 'কথোপকথন',
    with: 'সঙ্গে',
    typeAMessage: 'একটি বার্তা টাইপ করুন...',
    selectAConversation: 'চ্যাটিং শুরু করতে একটি কথোপকথন নির্বাচন করুন',

    // New Internship Page
    postNewInternship: 'একটি নতুন ইন্টার্নশিপ পোস্ট করুন',
    postNewInternshipSubtitle: 'আপনার পরবর্তী মহান নিয়োগ খুঁজে পেতে নীচের ফর্মটি পূরণ করুন।',

    // New Internship Form
    describeTheRole: 'ভূমিকা বর্ণনা করুন',
    describeTheRoleSubtitle: 'ইন্টার্নশিপ ভূমিকার একটি সংক্ষিপ্ত বিবরণ দিয়ে শুরু করুন। আমাদের AI আপনার জন্য একটি সম্পূর্ণ তালিকা তৈরি করতে এটি ব্যবহার করবে।',
    roleDescription: 'ভূমিকা বিবরণ',
    roleDescriptionPlaceholder: 'যেমন, আমাদের নতুন রিঅ্যাক্ট-ভিত্তিক ডিজাইন সিস্টেমে কাজ করার জন্য একজন ফ্রন্টএন্ড ডেভেলপার ইন্টার্ন...',
    roleDescriptionValidation: 'দয়া করে আরও বিস্তারিত বিবরণ দিন (কমপক্ষে ২০টি অক্ষর)।',
    generating: 'তৈরি হচ্ছে',
    generateWithAI: 'AI দিয়ে তৈরি করুন',
    generationSuccessTitle: 'ইন্টার্নশিপ খসড়া তৈরি!',
    generationSuccessDescription: 'AI একটি খসড়া তৈরি করেছে। আপনি এখন নীচে এটি পর্যালোচনা এবং সম্পাদনা করতে পারেন।',
    generationFailedTitle: 'তৈরি করতে ব্যর্থ',
    generationFailedDescription: 'ইন্টার্নশিপ তালিকা তৈরি করার সময় একটি ত্রুটি ঘটেছে। দয়া করে আবার চেষ্টা করুন।',
    internshipDetails: 'ইন্টার্নশিপের বিবরণ',
    internshipDetailsSubtitle: 'নীচে তৈরি করা বিবরণ পর্যালোচনা এবং সম্পাদনা করুন।',
    internshipTitle: 'ইন্টার্নশিপ শিরোনাম',
    internshipTitlePlaceholder: 'যেমন, সফটওয়্যার ইঞ্জিনিয়ার ইন্টার্ন',
    placeOfWork: 'কাজের জায়গা',
    placeOfWorkPlaceholder: 'যেমন, সান ফ্রান্সিসকো, সিএ বা রিমোট',
    fullDescription: 'সম্পূর্ণ বিবরণ',
    fullDescriptionPlaceholder: 'ভূমিকা, কোম্পানি, ইত্যাদির একটি বিস্তারিত বিবরণ।',
    candidatePreferences: 'প্রার্থীর পছন্দ (ঐচ্ছিক)',
    preferredCaste: 'পছন্দের বর্ণ',
    selectACaste: 'একটি বর্ণ নির্বাচন করুন',
    casteOptions: { general: 'সাধারণ', obc: 'ওবিসি', sc: 'এসসি', st: 'এসটি', any: 'যেকোনো' },
    preferredFamilyIncome: 'পছন্দের পারিবারিক আয়',
    selectAnIncomeRange: 'একটি আয় পরিসীমা নির্বাচন করুন',
    incomeOptions: { low: '₹২.৫ লক্ষের কম', medium: '₹২.৫ লক্ষ - ₹৮ লক্ষ', high: '₹৮ লক্ষের বেশি', any: 'যেকোনো' },
    preferredSkills: 'পছন্দের দক্ষতা',
    preferredSkillsPlaceholder: 'যেমন, রিঅ্যাক্ট, পাইথন, ডেটা বিশ্লেষণ',
    preferredSkillsDescription: 'কমা দ্বারা পৃথক করা দক্ষতার একটি তালিকা লিখুন।',
    educationQualifications: 'শিক্ষাগত যোগ্যতা',
    educationQualificationsPlaceholder: 'যেমন, সিএস-এ বি.টেক, বি.কম',
    educationQualificationsDescription: 'প্রয়োজনীয় বা পছন্দের শিক্ষাগত যোগ্যতা লিখুন।',
    postInternship: 'ইন্টার্নশিপ পোস্ট করুন',
    internshipPostedTitle: 'ইন্টার্নশিপ পোস্ট করা হয়েছে!',
    internshipPostedDescription: 'আপনার ইন্টার্নশিপ সফলভাবে পোস্ট করা হয়েছে।',
  },
};
