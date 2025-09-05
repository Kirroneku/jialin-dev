import fluentLogo from '../assets/fluent-design.svg';
import testcafeLogo from '../assets/testcafe.svg';
import accessibilityIcon from '../assets/accessibility-icon.webp';
import React from 'react';

export type Skill = {
  name: string;
  icon: React.ReactNode;
};

export type SkillGroup = {
  label: string;
  skills: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend',
    skills: [
      { name: 'JavaScript', icon: <i className="devicon-javascript-plain colored" /> },
      { name: 'TypeScript', icon: <i className="devicon-typescript-plain colored" /> },
      { name: 'React', icon: <i className="devicon-react-original colored" /> },
      { name: 'Angular', icon: <i className="devicon-angularjs-plain colored" /> },
      { name: 'Vue.js', icon: <i className="devicon-vuejs-plain colored" /> },
      { name: 'Ember.js', icon: <i className="devicon-ember-original-wordmark colored" /> },
      {
        name: 'Fluent UI',
        icon: <img src={fluentLogo} alt="Fluent UI" style={{ width: 28, height: 28 }} />,
      },
      { name: 'CSS', icon: <i className="devicon-css3-plain colored" /> },
      { name: 'SCSS', icon: <i className="devicon-css3-plain colored" /> },
    ],
  },
  {
    label: 'Backend / Cloud',
    skills: [
      { name: 'Node.js', icon: <i className="devicon-nodejs-plain-wordmark colored" /> },
      { name: 'GraphQL', icon: <i className="devicon-graphql-plain colored" /> },
      { name: 'C# .NET', icon: <i className="devicon-csharp-plain colored" /> },
      { name: 'Azure', icon: <i className="devicon-azure-plain colored" /> },
      { name: 'AWS', icon: <i className="devicon-amazonwebservices-plain-wordmark colored" /> },
    ],
  },
  {
    label: 'Testing',
    skills: [
      {
        name: 'TestCafe',
        icon: <img src={testcafeLogo} alt="TestCafe" style={{ width: 28, height: 28 }} />,
      },
      { name: 'Playwright', icon: <i className="devicon-playwright-plain colored" /> },
      { name: 'Cypress', icon: <i className="devicon-cypressio-plain colored" /> },
      { name: 'Jest', icon: <i className="devicon-jest-plain colored" /> },
    ],
  },
  {
    label: 'Tooling',
    skills: [
      { name: 'Vite', icon: <i className="devicon-vitejs-plain colored" /> },
      { name: 'Azure DevOps', icon: <i className="devicon-azuredevops-plain colored" /> },
      { name: 'Git', icon: <i className="devicon-git-plain colored" /> },
    ],
  },
  {
    label: 'Broad skills',
    skills: [
      { name: 'Figma', icon: <i className="devicon-figma-plain colored" /> },
      {
        name: 'Accessibility',
        icon: <img src={accessibilityIcon} alt="Accessibility" style={{ width: 28, height: 28 }} />,
      },
    ],
  },
];
