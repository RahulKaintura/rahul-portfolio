export const profile = {
  name: 'Rahul Kaintura', email: 'rahulkaintura324@gmail.com',
  github: 'https://github.com/RahulKaintura', linkedin: 'https://linkedin.com/in/rahul-kaintura', leetcode: 'https://leetcode.com/u/h4_rahul',
  university: 'Uttaranchal University', cgpa: '9.20', graduation: '2028', solved: '340+',
};
export const roles = ['Web Developer', 'Frontend Developer', 'Problem Solver'];
export const skills = {
  Languages: ['C++', 'JavaScript', 'SQL'], Frontend: ['React.js', 'HTML', 'CSS', 'Tailwind CSS', 'JSP'],
  Backend: ['Node.js', 'Express.js', 'REST APIs'], Databases: ['MongoDB', 'MySQL'],
  Tools: ['Git', 'GitHub', 'Postman', 'VS Code'], Fundamentals: ['DSA', 'OOP', 'DBMS', 'Operating Systems', 'Computer Networks'],
};
// Add verified repository URLs to repo and deployed URLs to live when available.
export const projects = [
  {id:'lost', title:'Lost & Found Portal', category:'Major', stack:['React.js','Node.js','Express.js','MongoDB','JWT'], description:'A full-stack portal for reporting lost and found items.', details:['JWT authentication','MongoDB schemas and REST APIs for CRUD operations']},
  {id:'taskmate', title:'TaskMate', category:'Major', stack:['React.js','Tailwind CSS','JavaScript'], description:'A responsive task management application.', details:['Add, edit, delete and complete tasks','LocalStorage persistence and dark/light themes'], live:'https://taskmate-rk01.netlify.app'},
  {id:'portfolio', title:'Personal Developer Portfolio', category:'Major', stack:['React.js','JavaScript','CSS'], description:'A responsive showcase of my skills, projects and coding profiles.', details:['Dynamic typing animation and interactive sections','Responsive layout and theme switching']},
  {id:'weather', title:'Weather App', category:'Practice', stack:['JavaScript','OpenWeather API'], description:'Displays weather and air quality data.'},
  {id:'movie', title:'Movie Discovery App', category:'Practice', stack:['React.js','React Router'], description:'Movie browsing interface with client-side navigation.'},
  {id:'baazaar', title:'Baazaar', category:'Practice', stack:['React.js'], description:'Responsive e-commerce frontend with theme switching and demo checkout.'},
  {id:'sales', title:'Sales Prediction', category:'Practice', stack:['Python','scikit-learn'], description:'Regression and classification models for sales data.'},
];
