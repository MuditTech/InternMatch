import type { Internship } from '@/lib/types';

export const internships: Internship[] = [
  {
    id: '1',
    title: 'Software Development Intern',
    company: 'Tata Consultancy Services',
    location: 'Mumbai, MH',
    description: 'Join a dynamic team at TCS to work on enterprise-level software solutions and gain invaluable industry experience.',
    responsibilities: [
      'Assist in the development and maintenance of software applications.',
      'Collaborate with a team of experienced developers.',
      'Participate in the entire software development lifecycle.',
    ],
    requirements: [
      'Pursuing a B.Tech or M.Tech in Computer Science or a related field.',
      'Strong understanding of object-oriented programming.',
      'Excellent problem-solving and communication skills.',
    ],
    applicants: 15,
  },
  {
    id: '2',
    title: 'Data Science Intern',
    company: 'Infosys',
    location: 'Bengaluru, KA',
    description: 'Work with our data science team to analyze complex datasets and build predictive models that drive business value.',
    responsibilities: [
      'Clean, process, and analyze large datasets.',
      'Develop and implement machine learning algorithms.',
      'Create visualizations to communicate findings.',
    ],
    requirements: [
      'Familiarity with Python (pandas, scikit-learn, TensorFlow/PyTorch).',
      'Solid knowledge of statistics and machine learning concepts.',
      'Experience with SQL and data manipulation.',
    ],
    applicants: 11,
  },
  {
    id: '3',
    title: 'Cybersecurity Intern',
    company: 'Wipro',
    location: 'Pune, MH',
    description: 'Help protect our systems and data from cyber threats by working with our dedicated cybersecurity team.',
    responsibilities: [
      'Monitor security alerts and investigate potential incidents.',
      'Assist in vulnerability assessments and penetration testing.',
      'Help develop and implement security policies.',
    ],
    requirements: [
      'Understanding of networking and security principles.',
      'Familiarity with security tools and technologies.',
      'A passion for cybersecurity and a desire to learn.',
    ],
    applicants: 22,
  },
  {
    id: '4',
    title: 'Frontend Developer Intern',
    company: 'Paytm',
    location: 'Bengaluru, KA',
    description: 'Join India\'s leading digital payments platform to build beautiful and intuitive user interfaces for millions of users.',
    responsibilities: [
      'Develop new user-facing features using React.js.',
      'Optimize components for maximum performance across devices.',
      'Collaborate with product designers and backend engineers.',
    ],
    requirements: [
      'Strong proficiency in JavaScript, HTML, and CSS.',
      'Experience with React and its ecosystem.',
      'A keen eye for design and user experience.',
    ],
    applicants: 30,
  },
  {
    id: '5',
    title: 'Backend Developer Intern',
    company: 'Zomato',
    location: 'Gurugram, HR',
    description: 'Work on the backend services that power one of the world\'s largest food delivery platforms.',
    responsibilities: [
      'Design, build, and maintain efficient, reusable, and reliable backend code.',
      'Work with microservices architecture and various databases.',
      'Ensure the performance and scalability of the application.',
    ],
    requirements: [
      'Experience with a backend language like Go, Java, or Python.',
      'Understanding of RESTful APIs and database design.',
      'Knowledge of distributed systems is a plus.',
    ],
    applicants: 18,
  },
    {
    id: '6',
    title: 'Cloud Engineer Intern',
    company: 'HCL Technologies',
    location: 'Noida, UP',
    description: 'Gain hands-on experience with cloud platforms like AWS, Azure, or GCP and help manage our cloud infrastructure.',
    responsibilities: [
      'Assist in deploying and managing cloud resources.',
      'Work with infrastructure as code (IaC) tools like Terraform.',
      'Monitor system performance and troubleshoot issues.',
    ],
    requirements: [
      'Basic understanding of cloud computing concepts.',
      'Familiarity with Linux/Unix environments.',
      'Scripting skills in Python or Bash are a plus.',
    ],
    applicants: 12,
  },
  {
    id: '7',
    title: 'Data Analyst Intern',
    company: 'Swiggy',
    location: 'Bengaluru, KA',
    description: 'Analyze user behavior and business metrics to provide actionable insights for India\'s largest online food ordering platform.',
    responsibilities: [
      'Query databases to extract data for analysis.',
      'Create dashboards and reports using tools like Tableau or Power BI.',
      'Present insights to product and marketing teams.',
    ],
    requirements: [
      'Strong SQL skills are a must.',
      'Experience with data visualization tools.',
      'Excellent analytical and quantitative skills.',
    ],
    applicants: 25,
  },
];

export const candidateProfile = {
  name: 'Aarav Sharma',
  headline: 'Aspiring Software Engineer',
  summary: 'A final-year Computer Science student at IIT Bombay with a passion for building scalable web applications and exploring new technologies. Proficient in JavaScript, Python, and Go, with hands-on experience in developing full-stack applications. Eager to apply my skills and learn from experienced professionals in a dynamic and challenging internship role in India.',
  skills: 'JavaScript, React, Node.js, Python, Go, SQL, MongoDB, Git, Docker, Kubernetes',
  experience: 'Developed a scalable food delivery app as a personal project using the MERN stack. Contributed to open-source projects on GitHub, focusing on backend performance optimizations.',
  preferences: 'Seeking a software engineering internship at a leading tech company in India, preferably in Mumbai or Bengaluru. Interested in roles that involve back-end development, distributed systems, and cloud-native technologies.',
};

export const messages = [
    {
      id: '1',
      company: 'Tata Consultancy Services',
      contactName: 'Priya Mehta',
      avatar: 'https://picsum.photos/id/1/100/100',
      messages: [
        { from: 'them', text: 'Hi Aarav, thanks for your interest in the Software Development Intern role. We were impressed with your profile!', time: '10:00 AM' },
        { from: 'me', text: 'Hi Priya, thank you for reaching out! I\'m very excited about the opportunity.', time: '10:02 AM' },
        { from: 'them', text: 'Great! Would you be available for a brief chat sometime next week?', time: '10:03 AM' },
      ],
      unread: 1,
    },
    {
      id: '2',
      company: 'Paytm',
      contactName: 'Rohan Joshi',
      avatar: 'https://picsum.photos/id/2/100/100',
      messages: [
        { from: 'them', text: 'Hello! Your portfolio is fantastic.', time: 'Yesterday' },
      ],
      unread: 0,
    },
    {
      id: '3',
      company: 'Infosys',
      contactName: 'Sneha Rao',
      avatar: 'https://picsum.photos/id/3/100/100',
      messages: [
         { from: 'me', text: 'Hi Sneha, I\'ve just applied for the Data Science position. Looking forward to hearing from you.', time: 'Tuesday' },
      ],
      unread: 0,
    },
];
