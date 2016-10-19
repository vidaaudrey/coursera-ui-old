/* eslint-disable max-len,spaced-comment */

/**
 * Mocking the APi data
 */

module.exports = {
  domains: {
    ['Computer Science']: [
      'Software Development',
      'Mobile and Web Development',
      'Algorithms',
      'Computer Security and Networks',
      'Design and Product',
    ],
    ['Arts & Humanities']: [
      'History',
      'Music and Art',
      'Philosophy',
    ],
    ['Data Science']: [
      'Data Analysis',
      'Machine Learning',
      'Probability and Statistics',
    ],
    ['Social Science']: [
      'Economics',
      'Education',
      'Governance and Society',
      'Law',
      'Psychology',
    ],
    ['Life Science']: [
      'Animals and Veterinary Science',
      'Bioinformatics',
      'Biology',
      'Medicine & Healthcare',
      'Nutrition',
      'Clinical Science',
    ],
    ['Business']: [
      'Leadership and Management',
      'Finance',
      'Marketing',
      'Entrepreneurship',
      'Business Essentials',
      'Business Strategy',
    ],
    ['Personal Development']: [],
    ['Math & Logic']: [],
    ['Physical Science & Engineering']: [
      'Electrical Engineering',
      'Mechanical Engineering',
      'Chemistry',
      'Environmental Science and Sustainability',
      'Physics and Astronomy',
      'Research Methods',
    ],
  },
  ////////////////////////////////////////
  courses: [{
    id: 'c1',
  }, {
    id: 'c2',
  }, {
    id: 'c3',
  }, {
    id: 'c4',
  }, {
    id: 'c5',
  }, {
    id: 'c6',
  }, {
    id: 'c7',
  }, {
    id: 'c8',
  }, {
    id: 'c9',
  }],

  ////////////////////////////////////////
  s12ns: [{
    id: 's1',
  }, {
    id: 's2',
  }, {
    id: 's3',
  }, {
    id: 's4',
  }, {
    id: 's5',
  }, {
    id: 's6',
  }, {
    id: 's7',
  }],

  cartItems: [{
    typeName: 's12nId',
    definition: {
      id: 's1',
    },
  }, {
    typeName: 's12nId',
    definition: {
      id: 's2',
    },
  }, {
    typeName: 'courseId',
    definition: {
      id: 'c1',
    },
  }, {
    typeName: 'courseId',
    definition: {
      id: 'c3',
    },
  }, {
    typeName: 'courseId',
    definition: {
      id: 'c5',
    },
  }],

  /////////////////////////////////
  priceInfo: [{
    id: 'c1',
    productType: 'Course',

    type: 'Course',
    amount: 59, // finalAmount
    currencySymbol: '$',
    currencyCode: 'USD',
  }, {
    id: 'c2',
    productType: 'Course',

    type: 'Course',
    amount: 58,
    currencySymbol: '$',
    currencyCode: 'USD',
  }, {
    id: 'c3',
    productType: 'Course',

    type: 'Course',
    amount: 57,
    currencySymbol: '$',
    currencyCode: 'USD',
  }, {
    id: 'c4',
    productType: 'Course',

    type: 'Course',
    amount: 59,
    currencySymbol: '$',
    currencyCode: 'USD',
  }, {
    id: 'c5',
    productType: 'Course',

    type: 'Course',
    amount: 58,
    currencySymbol: '$',
    currencyCode: 'USD',
  }, {
    id: 'c6',
    type: 'Course',
    productType: 'Course',

    amount: 57,
    currencySymbol: '$',
    currencyCode: 'USD',
  }, {
    id: 's1',
    productType: 'Specialization',

    type: 'Specialization',
    amount: 678,
    currencySymbol: '$',
    currencyCode: 'USD',
  }, {
    id: 's2',
    productType: 'Specialization',

    type: 'Specialization',
    amount: 436,
    currencySymbol: '$',
    currencyCode: 'USD',
  }, {
    id: 's3',
    productType: 'Specialization',

    type: 'Specialization',
    amount: 878,
    currencySymbol: '$',
    currencyCode: 'USD',
  }, {
    id: 's4',
    productType: 'Specialization',

    type: 'Specialization',
    amount: 121,
    currencySymbol: '$',
    currencyCode: 'USD',
  }, {
    id: 's5',
    productType: 'Specialization',

    type: 'Specialization',
    amount: 434,
    currencySymbol: '$',
    currencyCode: 'USD',
  }, {
    id: 's6',
    productType: 'Specialization',

    type: 'Specialization',
    amount: 764,
    currencySymbol: '$',
    currencyCode: 'USD',
  }],
  coursesNaptime: [{
    id: 'c1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis quos illo fugit aspernatur consequatur iure, velit excepturi esse, ipsum labore quidem ut sint at voluptatum quod? Consequuntur fugiat eligendi dolores?',
    name: 'Ancient Philosophy: Aristotle and His Successors C1',
    partnerIds: [1],
    courseCount: 1,
    promoPhoto: 'https://placehold.it/400x300',
    subDomain: 'Software Development',
    domain: 'Computer Science',

    workload: '4 weeks of study, 1-2 hours/week',
    upcomingSessionStartDate: 1467615600000,
    instructorIds: ['i1', 'i2'],
  }, {
    id: 'c2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit incidunt provident similique facere quaerat dolorem nam. Minima praesentium voluptatem, libero sunt minus iure totam aliquam. Laboriosam sunt a earum debitis.',
    name: 'Introduction to Game Design Course c2',
    courseCount: 1,
    partnerIds: [1],
    promoPhoto: 'https://placehold.it/400x300',
    subDomain: 'Mobile and Web Development',
    domain: 'Computer Science',

    workload: '4 weeks of study, 1-2 hours/week',
    upcomingSessionStartDate: 1467615600000,
    instructorIds: ['i1', 'i2'],

  }, {
    id: 'c3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quasi adipisci illo eum fuga autem officia cum, assumenda quibusdam id ipsum rerum molestias, eaque tenetur eveniet nulla quisquam excepturi nemo!',
    name: 'Introduction to Game Design Course c3',
    courseCount: 1,
    partnerIds: [1],
    promoPhoto: 'https://placehold.it/400x300',
    subDomain: 'Computer Security and Networks',
    domain: 'Computer Science',

    workload: '4 weeks of study, 1-2 hours/week',
    upcomingSessionStartDate: 1467615600000,
    instructorIds: ['i1', 'i2'],
  }, {
    id: 'c4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nobis, labore consectetur veritatis temporibus totam at illo neque, laudantium quas, placeat suscipit dolorum. Accusantium at quasi mollitia explicabo totam fugiat!',
    name: 'Introduction to Game Design Course c4',
    partnerName: 'California Insttute of the Art',
    partnerIds: [1],
    courseCount: 1,
    promoPhoto: 'https://placehold.it/400x300',
    subDomain: 'Software Development',
    domain: 'Computer Science',

    workload: '4 weeks of study, 1-2 hours/week',
    upcomingSessionStartDate: 1467615600000,
    instructorIds: ['i1', 'i2'],
  }, {
    id: 'c5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt id tempore harum, maxime non adipisci, blanditiis rem odit optio alias iusto velit sapiente sint tempora sed similique dolores, sunt vero!',
    name: 'Design and Product c5',
    courseCount: 1,
    partnerIds: [1],
    promoPhoto: 'https://placehold.it/400x300',
    subDomain: 'Software Development',
    domain: 'Computer Science',

    workload: '4 weeks of study, 1-2 hours/week',
    upcomingSessionStartDate: 1467615600000,
    instructorIds: ['i1', 'i2'],
  }, {
    id: 'c6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat asperiores provident quas. Impedit officiis eius placeat eligendi sapiente enim illum voluptate eaque ab officia asperiores aperiam provident, doloribus natus temporibus.',
    name: 'Introduction to Game Design Course c6',
    courseCount: 1,
    partnerIds: [1],
    promoPhoto: 'https://placehold.it/400x300',
    subDomain: 'Software Development',
    domain: 'Computer Science',

    workload: '4 weeks of study, 1-2 hours/week',
    upcomingSessionStartDate: 1467615600000,
    instructorIds: ['i1', 'i2'],
  }, {
    id: 'c7',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum nobis, labore consectetur veritatis temporibus totam at illo neque, laudantium quas, placeat suscipit dolorum. Accusantium at quasi mollitia explicabo totam fugiat!',
    name: 'Introduction to Game Design Course c7',
    partnerName: 'California Insttute of the Art',
    partnerIds: [1],
    courseCount: 1,
    promoPhoto: 'https://placehold.it/400x300',
    subDomain: 'Software Development',
    domain: 'Computer Science',

  }, {
    id: 'c8',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt id tempore harum, maxime non adipisci, blanditiis rem odit optio alias iusto velit sapiente sint tempora sed similique dolores, sunt vero!',
    name: 'Design and Product c8',
    courseCount: 1,
    partnerIds: [1],
    promoPhoto: 'https://placehold.it/400x300',
    subDomain: 'Software Development',
    domain: 'Computer Science',

  }, {
    id: 'c9',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat asperiores provident quas. Impedit officiis eius placeat eligendi sapiente enim illum voluptate eaque ab officia asperiores aperiam provident, doloribus natus temporibus.',
    name: 'Introduction to Game Design Course c9',
    courseCount: 1,
    partnerIds: [1],
    promoPhoto: 'https://placehold.it/400x300',
    subDomain: 'Software Development',
    domain: 'Computer Science',

    workload: '4 weeks of study, 1-2 hours/week',
    upcomingSessionStartDate: 1467615600000,
    instructorIds: ['i1', 'i2'],
  }],

  ////////////////////////////////////////
  s12nsNaptime: [{
    id: 's1',
    courseIds: ['c1', 'c2', 'c3'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro eligendi distinctio iste qui quaerat, eveniet necessitatibus nobis, reiciendis deleniti repellendus. Aspernatur maiores minima, fugiat saepe labore commodi, rerum deserunt error.',
    name: 'Full Stack Web Development s1',
    partnerName: 'California Insttute of the Art',
    partnerIds: [1],
    courseCount: 5,
    promoPhoto: 'https://placehold.it/400x300',
    subDomain: 'Software Development',
    domain: 'Computer Science',

    instructorIds: ['i1', 'i2'],
  }, {
    id: 's2',
    courseIds: ['c1', 'c2', 'c3'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. In tempora rerum, deserunt numquam velit dignissimos inventore illo amet harum sequi, nemo perspiciatis deleniti magnam quis nostrum itaque possimus excepturi quod.',
    name: 'Full Stack Web Development s2',
    courseCount: 5,
    partnerIds: [1],
    promoPhoto: 'https://placehold.it/400x300',
    subDomain: 'Software Development',
    domain: 'Computer Science',

    instructorIds: ['i1', 'i2'],
  }, {
    id: 's3',
    courseIds: ['c1', 'c2', 'c3'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate quaerat, sint? Deserunt maxime magnam, aliquam blanditiis tempora commodi quidem rem consequuntur voluptate! Temporibus amet omnis recusandae voluptate. Beatae, obcaecati, iusto!',
    name: 'Full Stack Web Development s3',
    courseCount: 5,
    partnerIds: [1],
    promoPhoto: 'https://placehold.it/400x300',
    subDomain: 'Software Development',
    domain: 'Computer Science',

    instructorIds: ['i1', 'i2'],
  }, {
    id: 's4',
    courseIds: ['c1', 'c2', 'c3'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi repellendus ex eaque atque est, repellat error dolore? Est nam optio laboriosam, odio deleniti natus libero, aliquid porro fugit nihil non?',
    name: 'Full Stack Web Development s4',
    partnerName: 'California Insttute of the Art',
    partnerIds: [1],
    courseCount: 5,
    promoPhoto: 'https://placehold.it/400x300',
    subDomain: 'Software Development',
    domain: 'Computer Science',

    instructorIds: ['i1', 'i2'],
  }, {
    id: 's5',
    courseIds: ['c1', 'c2', 'c3'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid natus deserunt architecto error autem, reprehenderit libero assumenda nulla repudiandae, animi dolorem minus ut, commodi dolores nihil tempore praesentium. Debitis, temporibus.',
    name: 'Full Stack Web Development s5',
    courseCount: 5,
    partnerIds: [1],
    promoPhoto: 'https://placehold.it/400x300',
    subDomain: 'Software Development',
    domain: 'Computer Science',

    instructorIds: ['i1', 'i2'],
  }, {
    id: 's6',
    courseIds: ['c1', 'c2', 'c3'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est sunt nihil commodi laboriosam cupiditate ad maiores voluptatem sint perferendis corporis, sapiente itaque, fuga eveniet? Illo dolorem ut doloremque magni laborum!',
    name: 'Full Stack Web Development s6',
    courseCount: 5,
    partnerIds: [1],
    promoPhoto: 'https://placehold.it/400x300',
    subDomain: 'Software Development',
    domain: 'Computer Science',

    instructorIds: ['i1', 'i2'],
  }, {
    id: 's7',
    courseIds: ['c1', 'c2', 'c3'],
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo odit, consequuntur eveniet, consectetur ullam suscipit tempore accusantium earum voluptas ad quibusdam dignissimos sint modi! Minima facilis architecto consectetur perspiciatis doloremque.',
    name: 'Full Stack Web Development s7',
    courseCount: 5,
    partnerIds: [1],
    promoPhoto: 'https://placehold.it/400x300',
    subDomain: 'Software Development',
    domain: 'Computer Science',

    instructorIds: ['i1', 'i2'],
  }],
  instructorsNaptime: [{
    id: 'i1',
    fullName: 'Scott DeRue, Ph.D.',
    title: 'Associate Dean and Professor of Management',
    department: 'Management and Organizations, Ross School of Business',
  }, {
    id: 'i2',
    fullName: 'Scott DeRue, Ph.D.1',
    title: 'Associate Dean and Professor of Management1',
    department: 'Management and Organizations, Ross School of Business1',
  }],
  courseDerivativesNatpime: [{
    id: 'c1',
    averageFiveStarRating: 2.26,
  }, {
    id: 'c2',
    averageFiveStarRating: 3.7,
  }, {
    id: 'c3',
    averageFiveStarRating: 2.7,
  }, {
    id: 'c4',
    averageFiveStarRating: 4.7,
  }, {
    id: 'c5',
    averageFiveStarRating: 4.7,
  }, {
    id: 'c6',
    averageFiveStarRating: 2.7,
  }, {
    id: 'c7',
    averageFiveStarRating: 4.7,
  }, {
    id: 'c8',
    averageFiveStarRating: 4.7,
  }, {
    id: 'c9',
    averageFiveStarRating: 4.7,
  }],
  domainNaptime: [{
    id: 'arts-and-humanities',
    name: 'Arts and Humanities',
    subdomainIds: [
      'history',
      'music-and-art',
      'philosophy',
    ],
  }, {
    id: 'business',
    subdomainIds: [
      'leadership-and-management',
      'finance',
      'marketing',
      'entrepreneurship',
      'business-essentials',
      'business-strategy',
    ],
    name: 'Business',
  }, {
    id: 'computer-science',
    name: 'Computer Science',
    subdomainIds: [
      'software-development',
      'mobile-and-web-development',
      'algorithms',
      'computer-security-and-networks',
      'design-and-product',
    ],
  }, {
    id: 'data-science',
    name: 'Data Science',
    subdomainIds: [
      'data-analysis',
      'machine-learning',
      'probability-and-statistics',
    ],
  }, {
    id: 'life-sciences',
    subdomainIds: [
      'animals-and-veterinary-science',
      'bioinformatics',
      'biology',
      'medicine-and-healthcare',
      'nutrition',
      'clinical-science',
    ],
    name: 'Life Sciences',
  }, {
    id: 'math-and-logic',
    name: 'Math and Logic',
    subdomainIds: [
      'math-and-logic',
    ],
  }, {
    id: 'personal-development',
    subdomainIds: [
      'personal-development',
    ],
    name: 'Personal Development',
  }, {
    id: 'physical-science-and-engineering',
    subdomainIds: [
      'electrical-engineering',
      'mechanical-engineering',
      'chemistry',
      'environmental-science-and-sustainability',
      'physics-and-astronomy',
      'research-methods',
    ],
    name: 'Physical Science and Engineering',
  }, {
    id: 'social-sciences',
    name: 'Social Sciences',
    subdomainIds: [
      'economics',
      'education',
      'governance-and-society',
      'law',
      'psychology',
    ],
  }, {
    id: 'language-learning',
    name: 'language learning',
    subdomainIds: [
      'learning-english',
      'other-languages',
    ],
  }],

  subdomainsNaptime: [{
    name: 'Music and Art',
    id: 'music-and-art',
    domainId: 'arts-and-humanities',
  },

  {
    name: 'Mobile and Web Development',
    id: 'mobile-and-web-development',
    domainId: 'computer-science',
  },

  {
    name: 'Design and Product',
    id: 'design-and-product',
    domainId: 'computer-science',
  },

  {
    name: 'Data Analysis',
    id: 'data-analysis',
    domainId: 'data-science',
  },

  {
    name: 'Machine Learning',
    id: 'machine-learning',
    domainId: 'data-science',
  },

  {
    name: 'Probability and Statistics',
    id: 'probability-and-statistics',
    domainId: 'data-science',
  },

  {
    name: 'Electrical Engineering',
    id: 'electrical-engineering',
    domainId: 'physical-science-and-engineering',
  },

  {
    name: 'Mechanical Engineering',
    id: 'mechanical-engineering',
    domainId: 'physical-science-and-engineering',
  },

  {
    name: 'Chemistry',
    id: 'chemistry',
    domainId: 'physical-science-and-engineering',
  },

  {
    name: 'Environmental Science and Sustainability',
    id: 'environmental-science-and-sustainability',
    domainId: 'physical-science-and-engineering',
  },

  {
    name: 'Physics and Astronomy',
    id: 'physics-and-astronomy',
    domainId: 'physical-science-and-engineering',
  },

  {
    name: 'Research Methods',
    id: 'research-methods',
    domainId: 'physical-science-and-engineering',
  },

  {
    name: 'Animals and Veterinary Science',
    id: 'animals-and-veterinary-science',
    domainId: 'life-sciences',
  },

  {
    name: 'Bioinformatics',
    id: 'bioinformatics',
    domainId: 'life-sciences',
  },

  {
    name: 'Biology',
    id: 'biology',
    domainId: 'life-sciences',
  },

  {
    name: 'Medicine & Healthcare',
    id: 'medicine-and-healthcare',
    domainId: 'life-sciences',
  },

  {
    name: 'Clinical Science',
    id: 'clinical-science',
    domainId: 'life-sciences',
  },

  {
    name: 'Nutrition',
    id: 'nutrition',
    domainId: 'life-sciences',
  },

  {
    name: 'Economics',
    id: 'economics',
    domainId: 'social-sciences',
  },

  {
    name: 'Education',
    id: 'education',
    domainId: 'social-sciences',
  },

  {
    name: 'Governance and Society',
    id: 'governance-and-society',
    domainId: 'social-sciences',
  },

  {
    name: 'Law',
    id: 'law',
    domainId: 'social-sciences',
  },

  {
    name: 'Psychology',
    id: 'psychology',
    domainId: 'social-sciences',
  },

  {
    name: 'Math and Logic',
    id: 'math-and-logic',
    domainId: 'math-and-logic',
  },

  {
    name: 'Personal Development',
    id: 'personal-development',
    domainId: 'personal-development',
  },

  {
    name: 'Learning English',
    id: 'learning-english',
    domainId: 'language-learning',
  },

  {
    name: 'Other Languages',
    id: 'other-languages',
    domainId: 'language-learning',
  }],
};
