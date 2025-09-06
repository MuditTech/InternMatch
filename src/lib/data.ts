import type { Internship } from '@/lib/types';

export const internships: Internship[] = [
  {
    id: '1',
    title: 'Software Engineer Intern',
    company: 'InnovateTech',
    location: 'San Francisco, CA',
    description: 'Work on cutting-edge projects and contribute to the development of our flagship product.',
    responsibilities: [
      'Write clean, maintainable code in Python and JavaScript.',
      'Collaborate with senior engineers on feature development.',
      'Participate in code reviews and team meetings.',
    ],
    requirements: [
      'Pursuing a degree in Computer Science or related field.',
      'Experience with web development frameworks (e.g., React, Django).',
      'Strong problem-solving skills.',
    ],
    applicants: 12,
  },
  {
    id: '2',
    title: 'Data Science Intern',
    company: 'DataDriven Co.',
    location: 'New York, NY',
    description: 'Analyze large datasets to extract meaningful insights and help drive business decisions.',
    responsibilities: [
      'Develop and train machine learning models.',
      'Create data visualizations and dashboards.',
      'Present findings to stakeholders.',
    ],
    requirements: [
      'Familiarity with Python (pandas, scikit-learn).',
      'Knowledge of SQL and database concepts.',
      'Strong statistical analysis skills.',
    ],
    applicants: 8,
  },
  {
    id: '3',
    title: 'UX/UI Design Intern',
    company: 'Creative Solutions',
    location: 'Remote',
    description: 'Design intuitive and engaging user experiences for our mobile and web applications.',
    responsibilities: [
      'Create wireframes, mockups, and prototypes.',
      'Conduct user research and usability testing.',
      'Collaborate with product managers and developers.',
    ],
    requirements: [
      'Portfolio of design projects.',
      'Proficiency in Figma, Sketch, or Adobe XD.',
      'Understanding of user-centered design principles.',
    ],
    applicants: 25,
  },
  {
    id: '4',
    title: 'Backend Engineer Intern (Node.js)',
    company: 'CloudCore',
    location: 'Remote',
    description: 'Join our backend team to build and maintain the services that power our cloud platform.',
    responsibilities: [
      'Develop and deploy RESTful APIs using Node.js and Express.',
      'Work with MongoDB and other NoSQL databases.',
      'Write unit and integration tests to ensure code quality.',
    ],
    requirements: [
      'Experience with Node.js and asynchronous programming.',
      'Understanding of microservices architecture.',
      'Familiarity with containerization (Docker).',
    ],
    applicants: 18,
  },
  {
    id: '5',
    title: 'React Developer Intern',
    company: 'Frontend Masters',
    location: 'Austin, TX',
    description: 'Help build beautiful and performant user interfaces for our client-facing applications using React.',
    responsibilities: [
      'Develop new user-facing features using React.js.',
      'Build reusable components and front-end libraries for future use.',
      'Translate designs and wireframes into high-quality code.',
    ],
    requirements: [
      'Strong proficiency in JavaScript and React.',
      'Experience with popular React.js workflows (such as Redux or Context API).',
      'Familiarity with modern front-end build pipelines and tools.',
    ],
    applicants: 22,
  },
];

export const candidateProfile = {
  name: 'Alex Doe',
  headline: 'Aspiring Software Engineer',
  summary: 'A third-year Computer Science student at Stanford University with a passion for building scalable web applications and exploring new technologies. Proficient in JavaScript, Python, and Java, with hands-on experience in developing full-stack applications using React and Node.js. Eager to apply my skills and learn from experienced professionals in a dynamic and challenging internship role.',
  skills: 'JavaScript, React, Node.js, Python, Django, SQL, MongoDB, Git, Docker',
  experience: 'Developed a full-stack e-commerce web application as a personal project. Contributed to open-source projects on GitHub, focusing on bug fixes and feature enhancements.',
  preferences: 'Seeking a software engineering internship at a fast-paced tech company, preferably in the San Francisco Bay Area. Interested in roles that involve back-end development, cloud computing, and working with large-scale systems. Open to both established companies and startups.',
};

export const messages = [
    {
      id: '1',
      company: 'InnovateTech',
      contactName: 'Jane Smith',
      avatar: 'https://picsum.photos/id/1/100/100',
      messages: [
        { from: 'them', text: 'Hi Alex, thanks for your interest in the Software Engineer Intern role. We were impressed with your profile!', time: '10:00 AM' },
        { from: 'me', text: 'Hi Jane, thank you for reaching out! I\'m very excited about the opportunity.', time: '10:02 AM' },
        { from: 'them', text: 'Great! Would you be available for a brief chat sometime next week?', time: '10:03 AM' },
      ],
      unread: 1,
    },
    {
      id: '2',
      company: 'Creative Solutions',
      contactName: 'John Appleseed',
      avatar: 'https://picsum.photos/id/2/100/100',
      messages: [
        { from: 'them', text: 'Hello! Your portfolio is fantastic.', time: 'Yesterday' },
      ],
      unread: 0,
    },
    {
      id: '3',
      company: 'DataDriven Co.',
      contactName: 'Emily White',
      avatar: 'https://picsum.photos/id/3/100/100',
      messages: [
         { from: 'me', text: 'Hi Emily, I\'ve just applied for the Data Science position. Looking forward to hearing from you.', time: 'Tuesday' },
      ],
      unread: 0,
    },
];
