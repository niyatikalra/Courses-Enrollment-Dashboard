const courseData = [
  {
    id: 1,
    name: "Web Development Fundamentals",
    instructor: "Jane Doe",
    description: "Introduction to basic web development concepts and tools.",
    enrollmentStatus: "Open",
    thumbnail: "web_dev_fundamentals.jpg",
    duration: "6 weeks",
    schedule: "Mondays and Wednesdays, 7:00 PM - 9:00 PM",
    location: "Online",
    progress: "40",
    prerequisites: ["Basic HTML and CSS knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to HTML",
        content: "HTML tags, structure, and basic elements.",
      },
      {
        week: 2,
        topic: "Introduction to CSS",
        content: "CSS styling, selectors, and layout.",
      },
      // Additional weeks and topics...
    ],
    students: [
      { id: 101, name: "Alice Johnson", email: "alice@example.com" },
      { id: 102, name: "Bob Smith", email: "bob@example.com" },
      // Additional enrolled students...
    ],
  },
  {
    id: 2,
    name: "JavaScript for Beginners",
    instructor: "John Smith",
    description: "A beginner-friendly guide to JavaScript programming.",
    enrollmentStatus: "Open",
    thumbnail: "javascript_for_beginners.jpg",
    duration: "8 weeks",
    schedule: "Tuesdays and Thursdays, 6:30 PM - 8:30 PM",
    location: "In-Person",
    progress: "10",
    prerequisites: ["Basic programming concepts"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to JavaScript",
        content: "JavaScript basics, variables, and data types.",
      },
      {
        week: 2,
        topic: "Control Flow",
        content: "Conditional statements and loops in JavaScript.",
      },
      // Additional weeks and topics...
    ],
    students: [
      { id: 103, name: "Charlie Brown", email: "charlie@example.com" },
      { id: 104, name: "Daisy Johnson", email: "daisy@example.com" },
      // Additional enrolled students...
    ],
  },
  {
    id: 3,
    name: "Frontend Frameworks Mastery",
    instructor: "Emily White",
    description:
      "Exploring popular frontend frameworks and building dynamic web applications.",
    enrollmentStatus: "Closed",
    thumbnail: "frontend_frameworks_mastery.jpg",
    duration: "10 weeks",
    schedule: "Wednesdays, 5:00 PM - 7:00 PM",
    location: "In-Person",
    progress: "60",
    prerequisites: ["Intermediate JavaScript knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to React",
        content: "React components and state management.",
      },
      {
        week: 2,
        topic: "Vue.js Basics",
        content: "Getting started with Vue.js and its core concepts.",
      },
      // Additional weeks and topics...
    ],
    students: [
      { id: 105, name: "Elijah Turner", email: "elijah@example.com" },
      { id: 106, name: "Fiona Williams", email: "fiona@example.com" },
      // Additional enrolled students...
    ],
  },
  {
    id: 4,
    name: "Python for Data Science",
    instructor: "David Brown",
    description:
      "Using Python to analyze data, create visualizations, and make data-driven decisions.",
    enrollmentStatus: "Open",
    thumbnail: "python_data_science.jpg",
    duration: "8 weeks",
    schedule: "Mondays and Fridays, 6:00 PM - 8:00 PM",
    location: "Online",
    progress: "75",
    prerequisites: ["Basic Python knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Science",
        content: "Overview of data science and its applications.",
      },
      {
        week: 2,
        topic: "Data Analysis with Pandas",
        content: "Working with data using the Pandas library.",
      },
      // Additional weeks and topics...
    ],
    students: [
      { id: 107, name: "Grace Miller", email: "grace@example.com" },
      { id: 108, name: "Henry Anderson", email: "henry@example.com" },
      // Additional enrolled students...
    ],
  },
  {
    id: 5,
    name: "Backend Development with Node.js",
    instructor: "Michael Davis",
    description:
      "Building scalable and efficient backend systems using Node.js.",
    enrollmentStatus: "Open",
    thumbnail: "backend_nodejs.jpg",
    duration: "12 weeks",
    schedule: "Tuesdays and Thursdays, 7:00 PM - 9:00 PM",
    location: "Online",
    progress: "42",
    prerequisites: [
      "Intermediate JavaScript knowledge",
      "Understanding of server-side concepts",
    ],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Node.js",
        content:
          "Setting up a Node.js environment and creating a basic server.",
      },
      {
        week: 2,
        topic: "Express.js Basics",
        content: "Building web applications with the Express.js framework.",
      },
      // Additional weeks and topics...
    ],
    students: [
      { id: 109, name: "Ivy Martinez", email: "ivy@example.com" },
      { id: 110, name: "Jack Turner", email: "jack@example.com" },
      // Additional enrolled students...
    ],
  },
  {
    id: 6,
    name: "Mobile App Development with Flutter",
    instructor: "Olivia Wilson",
    description:
      "Creating cross-platform mobile apps with the Flutter framework.",
    enrollmentStatus: "Open",
    thumbnail: "mobile_flutter.jpg",
    duration: "10 weeks",
    schedule: "Wednesdays and Fridays, 6:30 PM - 8:30 PM",
    location: "In-Person",
    progress: "15",
    prerequisites: ["Dart programming language basics"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Flutter",
        content: "Getting started with Flutter and Dart.",
      },
      {
        week: 2,
        topic: "Building UI with Flutter",
        content: "Designing user interfaces using Flutter widgets.",
      },
      // Additional weeks and topics...
    ],
    students: [
      { id: 111, name: "Katherine Brown", email: "katherine@example.com" },
      { id: 112, name: "Liam Turner", email: "liam@example.com" },
      // Additional enrolled students...
    ],
  },
  {
    id: 7,
    name: "Full Stack Web Development Bootcamp",
    instructor: "Daniel White",
    description:
      "Comprehensive training in frontend and backend web development.",
    enrollmentStatus: "Open",
    thumbnail: "full_stack_bootcamp.jpg",
    duration: "14 weeks",
    schedule: "Mondays, Wednesdays, and Fridays, 6:00 PM - 9:00 PM",
    location: "Online",
    progress: "10",
    prerequisites: ["Basic HTML, CSS, and JavaScript knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "HTML, CSS, and JavaScript Review",
        content: "Recap of essential web development technologies.",
      },
      {
        week: 2,
        topic: "Building a Full Stack App",
        content:
          "Creating a complete web application with frontend and backend.",
      },
      // Additional weeks and topics...
    ],
    students: [
      { id: 113, name: "Mia Davis", email: "mia@example.com" },
      { id: 114, name: "Nathan Johnson", email: "nathan@example.com" },
      // Additional enrolled students...
    ],
  },
  {
    id: 8,
    name: "Machine Learning Fundamentals",
    instructor: "Sophia Turner",
    description:
      "Understanding the basics of machine learning algorithms and applications.",
    enrollmentStatus: "Closed",
    thumbnail: "machine_learning_fundamentals.jpg",
    duration: "8 weeks",
    schedule: "Thursdays, 5:30 PM - 7:30 PM",
    location: "In-Person",
    progress: "45",
    prerequisites: ["Basic knowledge of Python"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Machine Learning",
        content: "Overview of machine learning concepts and types.",
      },
      {
        week: 2,
        topic: "Supervised Learning",
        content:
          "Understanding and implementing supervised learning algorithms.",
      },
      // Additional weeks and topics...
    ],
    students: [
      { id: 115, name: "Oliver Wilson", email: "oliver@example.com" },
      { id: 116, name: "Penelope Anderson", email: "penelope@example.com" },
      // Additional enrolled students...
    ],
  },
  {
    id: 9,
    name: "Cybersecurity Essentials",
    instructor: "Gabriel Martinez",
    description:
      "Fundamental concepts and practices in cybersecurity for beginners.",
    enrollmentStatus: "Open",
    thumbnail: "cybersecurity_essentials.jpg",
    duration: "10 weeks",
    schedule: "Tuesdays and Thursdays, 6:00 PM - 8:00 PM",
    location: "Online",
    progress: "12",
    prerequisites: ["Basic computer knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Cybersecurity",
        content: "Overview of cybersecurity and common threats.",
      },
      {
        week: 2,
        topic: "Network Security Basics",
        content: "Securing computer networks and data.",
      },
      // Additional weeks and topics...
    ],
    students: [
      { id: 117, name: "Quinn Turner", email: "quinn@example.com" },
      { id: 118, name: "Rachel Smith", email: "rachel@example.com" },
      // Additional enrolled students...
    ],
  },
  {
    id: 10,
    name: "Data Visualization with D3.js",
    instructor: "Isaac Wilson",
    description:
      "Creating interactive and dynamic data visualizations using D3.js.",
    enrollmentStatus: "Closed",
    thumbnail: "data_visualization_d3.jpg",
    duration: "8 weeks",
    schedule: "Mondays and Wednesdays, 6:30 PM - 8:30 PM",
    location: "In-Person",
    progress: "10",
    prerequisites: ["Basic HTML, CSS, and JavaScript knowledge"],
    syllabus: [
      {
        week: 1,
        topic: "Introduction to Data Visualization",
        content: "Understanding the importance of data visualization.",
      },
      {
        week: 2,
        topic: "Getting Started with D3.js",
        content: "Basics of D3.js and creating simple visualizations.",
      },
      // Additional weeks and topics...
    ],
    students: [
      { id: 119, name: "Samantha Brown", email: "samantha@example.com" },
      { id: 120, name: "Thomas Johnson", email: "thomas@example.com" },
      // Additional enrolled students...
    ],
  },
  {
    id: 11,
    name: "React Masterclass",
    instructor: "Sarah Thompson",
    description:
      "Deep dive into React.js for building modern web applications.",
    enrollmentStatus: "Closed",
    thumbnail: "react_masterclass.jpg",
    duration: "10 weeks",
    schedule: "Fridays, 5:00 PM - 7:00 PM",
    location: "In-Person",
    progress: "18",
    prerequisites: [
      "Advanced JavaScript",
      "Experience with front-end frameworks",
    ],
    syllabus: [
      {
        week: 1,
        topic: "React Components",
        content: "Understanding React components and props.",
      },
      {
        week: 2,
        topic: "State and Lifecycle",
        content: "Managing state and lifecycle methods in React.",
      },
      // Additional weeks and topics...
    ],
    students: [
      { id: 105, name: "Elijah White", email: "elijah@example.com" },
      { id: 106, name: "Fiona Brown", email: "fiona@example.com" },
      // Additional enrolled students...
    ],
  },
];


export default courseData;
