export type Chapter = {
  ply: number;
  move: string;
  side: 'white' | 'black';
  title: string;
  period: string;
  summary: string;
  tags: string[];
  square: string;
  piece: string;
};

// Edit this file when you want to revise the story, dates, or technologies.
// Every entry maps to one half-move of the Légal Trap on the homepage board.
export const chapters: Chapter[] = [
  { ply: 1, move: '1. e4', side: 'white', title: 'Akshar Nandan School', period: '2005 - 2017', summary: 'A Marathi-medium school where curiosity was part of the culture and where I developed the habits of learning independently.', tags: ['Curiosity','Self Learning'], square: 'e4', piece: '♙' },
  { ply: 2, move: '... e5', side: 'black', title: 'MIT Junior College', period: '2017 - 2019', summary: 'Studied Physics, Chemistry, Mathematics and Electronics. Everything in English for the first time', tags: ['MHT-CET: 99.6 percentile','HSC: 85.85%'], square: 'e5', piece: '♟' },
  { ply: 3, move: '2. Nf3', side: 'white', title: 'Pune Institute of Computer Technology', period: '2019 - 2023', summary: 'Arguably the best place in Pune to study Computer Science. Competitive, high bar, and it pushed me.', tags: ['CGPA: 9.53/10','Computer Engineering'], square: 'f3', piece: '♘' },
  { ply: 4, move: '... Nc6', side: 'black', title: 'Competitive Programming', period: 'During PICT', summary: 'Competitive programming strengthened my algorithmic thinking and led to first place in PICT at ICPC Regionals 2020. Attended Chennai Mathematical Institute\'s Algorithms and Lower Bounds Workshop', tags: [ 'Codeforces Expert', 'CMI Winter School 2022'], square: 'c6', piece: '♞' },
  { ply: 5, move: '3. Bc4', side: 'white', title: 'Python Developer Intern ', period: '2021', summary: 'At Hypersegment Automation, built Python tooling around Zerodha APIs for trading workflows and automated market-data extraction from public sources.', tags: ['Python', 'APIs', 'Automation'], square: 'c4', piece: '♗' },
  { ply: 6, move: '... d6', side: 'black', title: 'Blockchain Development', period: '2022', summary: 'At Cybernetics Software, developed and deployed an Ethereum-based application on the Kovan test network as a prototype.', tags: ['Intern','Solidity', 'Web3'], square: 'd6', piece: '♟' },
  { ply: 7, move: '4. Nc3', side: 'white', title: 'Druva Inc.', period: '2023 - 2025', summary: 'Joined Druva as a software engineer and worked on production systems where ownership meant contributing across design, implementation, testing, and deployment.', tags: ['Go', 'Python', 'AWS'], square: 'c3', piece: '♘' },
  { ply: 8, move: '... Bg4', side: 'black', title: 'Threat Hunt', period: 'Druva', summary: 'Built two Golang microservices from the ground up for the Threat Hunt feature, including API design, error classification, and a framework for independent testing.', tags: ['Microservices', 'Go', 'Testing'], square: 'g4', piece: '♝' },
  { ply: 9, move: '5. h3', side: 'white', title: 'Storage APIs', period: 'Druva', summary: 'Migrated RESTful APIs for a new storage system across authentication, middleware, transport, data, and business layers while maintaining automated tests.', tags: ['REST APIs', 'System design'], square: 'h3', piece: '♙' },
  { ply: 10, move: '... Bh5', side: 'black', title: 'University of Zürich', period: '2025 - Present', summary: 'Moved to Zürich to pursue Msc Informatics with major in Software Systems and Data Science as minor.', tags: ['MSc Informatics', 'Software Systems', 'Data science'], square: 'h5', piece: '♝' },
  { ply: 11, move: '6. Nxe5', side: 'white', title: 'ETH Zürich', period: '2025 - Present', summary: 'Joined ETH Zurich as a special student, expanding my theoretical and systems perspective through coursework including Cloud Computing Architecture.', tags: ['Special Student'], square: 'e5', piece: '♘' },
  { ply: 12, move: '... Bxd1', side: 'black', title: 'Research Assistant @ ETH', period: 'ETH Zürich', summary: 'Creating a end-to-end data pipeline to collect text data from Wikipedia and perform topic modelling for actionable insights.', tags: [], square: 'd1', piece: '♝' },
  { ply: 13, move: '7. Bxf7+', side: 'white', title: 'What Comes Next?', period: 'Now', summary: 'Continuing to develop as an engineer and researcher', tags: [], square: 'f7', piece: '♗' }
];
