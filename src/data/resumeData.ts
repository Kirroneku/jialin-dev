import avanadeLogo from '../assets/avanadeLogo.png';
import twnLogo from '../assets/twnLogo.png';
import bentleyLogo from '../assets/bentleyLogo.png';
import bmoLogo from '../assets/bmoLogo.png';
import evertzLogo from '../assets/evertzLogo.png';

export interface Project {
  title: string;
  tech?: string;
  bullets: string[];
}

export interface ExperienceRole {
  title: string;
  logo: string;
  location: string;
  date: string;
  highlights?: string[];
  projects: Project[];
}

export const resumeData: ExperienceRole[] = [
  {
    title: 'Full Stack Developer Consultant, Avanade',
    logo: avanadeLogo,
    location: 'Toronto, ON, CA',
    date: 'June 2022 – Present',
    highlights: [
      'Mentored junior developers as a Career Advisor',
      'Lead and organized several community events',
    ],
    projects: [
      {
        title: 'Full Stack Developer - Leading Tech Corporation',
        tech: 'React, Angular, TypeScript, Git, Automated Testing, GraphQL, Azure DevOps',
        bullets: [
          'Delivered data-centric product to market with 40k+ monthly active users and a growing market base.',
          'Primary developer of product extension using a React-based solution for onboarding users from other existing products to the main product, directly acquiring 1000+ users.',
          'Implemented and enhanced end to end testing infrastructure with Azure and Playwright, enabling hourly automated tests with failure notification system to ensure product stability via Azure Devops',
          'First point of contact for testing infrastructure and end to end tests on the project.',
          'Developed middleware API layer to transform GraphQL responses into frontend data structures, leading to easier to understand and reduce complexity on the front end code.',
          'Actively pursued improvements to the end user experience of the product.',
        ],
      },
      {
        title: 'Full Stack Developer - Higher Education Institution',
        tech: 'React.js, C# .NET, JavaScript, Git',
        bullets: [
          'Participated in greenfield development of full-stack application with React frontend with C# backend',
          'Demonstrated strong communication skills through effective collaboration with offshore development team',
          'Provided key transitional support in project roll-off and additional resource consulting after contract end.',
          'Primary point of contact on accessibility and Google analytics features.',
        ],
      },
    ],
  },
  {
    title: 'Full Stack Developer Sr Analyst, Avanade',
    logo: avanadeLogo,
    location: 'Toronto, ON, CA',
    date: 'April 2021 - June 2022',
    projects: [
      {
        title: 'Full Stack Developer - Big 5 Canadian Bank',
        tech: 'Vue.js, Ember.js, JavaScript, Git, Automated Testing',
        bullets: [
          'Delivered multiple web pages using Vue.js and Ember.js frameworks according to design specifications and API integration',
          'Developed tests with Cypress and Chai for reliable end-to-end coverage',
          'Assumed team lead responsibilities for duration of short-term project',
          'Created documentation of core systems to enhance developer onboarding and knowledge transfer',
          'Refactored code to address technical debt in existing codebases',
        ],
      },
      {
        title: 'Applications Developer - Mortgage Services Provider',
        tech: 'React.js, TypeScript, JavaScript, Automated Testing',
        bullets: [
          'Constructed React.js web interfaces with TypeScript implementation based on design specifications',
          'Solutioned fixes for bugs based on reports',
        ],
      },
    ],
  },
  {
    title: 'Software Developer Co-op, The Weather Network',
    logo: twnLogo,
    location: 'Oakville, ON, CA',
    date: 'May 2018 - December 2018',
    highlights: [],
    projects: [
      {
        title: 'The Weather Network and MeteoMedia Alexa skill',
        bullets: [
          'Developed and released The Weather Network and MeteoMedia Alexa skill, which has accumulated numerous daily users, in an agile scrum methodology with product managers and other engineers.',
        ],
      },
      {
        title: 'Interactive Map App',
        tech: 'JavaScript, React, Mapbox, NPM, Three.js, AWS',
        bullets: [
          'Wrote an interactive map app using JavaScript, React, Mapbox, NPM, Three.js, and AWS. The project is used by meteorologists to predict the weather by displaying current, past and future data such as radar, cloud, and pressure.',
          'Created and tested AWS CloudFormation templates for new load balancers, EC2 instances, and S3 buckets.',
        ],
      },
    ],
  },
  {
    title: 'Software Developer, Intern, Bentley Systems Inc.',
    logo: bentleyLogo,
    location: 'Burlington, ON, CA',
    date: 'September 2017 - December 2017',
    projects: [
      {
        title: 'Website Customization Page Optimization',
        tech: 'AngularJS',
        bullets: [
          'Collaborated with an international team in an agile development method to optimize a customization page on the main product’s website.',
        ],
      },
    ],
  },
  {
    title: 'Software Developer, Intern, Bank of Montreal Capital Markets',
    logo: bmoLogo,
    location: 'Toronto, ON, CA',
    date: 'January 2017 - April 2017',
    projects: [
      {
        title: 'Equity Visualization Web Toolkit',
        tech: 'AngularJS',
        bullets: [
          'Enhanced a web-toolkit for equity visualization using AngularJs by implementing modern features (e.g. exporting auto-generated pdf’s, creating friendly UI, more filter options) as well as identifying and fixing bugs.',
          'Developed a mobile friendly web view of the big data visualization website for phones and tablets.',
        ],
      },
    ],
  },
  {
    title: 'Software Developer, Intern, Evertz Microsystems Ltd.',
    logo: evertzLogo,
    location: 'Burlington, ON, CA',
    date: 'September 2015 - December 2015 + May 2016 - August 2016',
    projects: [
      {
        title: 'Home Automation Proof of Concept',
        tech: 'Python',
        bullets: [
          'Developed proof of concept home automation software interfacing with third party devices and APIs in Python.',
        ],
      },
      {
        title: 'Automated and Manual Regression Testing for Magnum Products',
        tech: 'Selenium',
        bullets: [
          'Created automated regression tests in Selenium to reduce manual testing for Magnum products.',
          'Performed manual testing for new releases of Magnum products to ensure quality with hardware',
        ],
      },
    ],
  },
];
