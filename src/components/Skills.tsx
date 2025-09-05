import { Title3, Divider, Body1, makeStyles, tokens } from '@fluentui/react-components';
import resumeData from '../data/resume.json';
import { FadeInSection } from './FadeInSection';

const useStyles = makeStyles({
  section: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.spacingHorizontalL,
  },
  content: {
    background: tokens.colorNeutralBackground1,
    borderRadius: tokens.borderRadiusXLarge,
    boxShadow: tokens.shadow8,
    padding: tokens.spacingHorizontalL,
    maxWidth: '700px',
    width: '100%',
  },
  divider: {
    margin: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalNone}`,
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: tokens.spacingVerticalM,
    paddingLeft: tokens.spacingHorizontalM,
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
    },
  },
  skillItem: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
    fontSize: tokens.fontSizeBase500,
    fontWeight: 500,
  },
  skillLogo: {
    width: '32px',
    height: '32px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function Skills() {
  const classes = useStyles();
  // Collect all unique skills from resume.json
  const baseSkills = [
    { name: 'JavaScript', icon: <i className="devicon-javascript-plain colored" /> },
    { name: 'React', icon: <i className="devicon-react-original colored" /> },
    { name: 'Vue.js', icon: <i className="devicon-vuejs-plain colored" /> },
    { name: 'Ember.js', icon: <i className="devicon-ember-original-wordmark colored" /> },
    { name: 'TypeScript', icon: <i className="devicon-typescript-plain colored" /> },
    { name: 'TestCafe', icon: <i className="devicon-testcafe-plain colored" /> },
    { name: 'Playwright', icon: <i className="devicon-playwright-plain colored" /> },
    { name: 'Cypress', icon: <i className="devicon-cypressio-plain colored" /> },
    { name: 'Node.js', icon: <i className="devicon-nodejs-plain colored" /> },
    { name: 'GraphQL', icon: <i className="devicon-graphql-plain colored" /> },
    { name: 'Azure', icon: <i className="devicon-azure-plain colored" /> },
    { name: 'C#', icon: <i className="devicon-csharp-plain colored" /> },
    { name: '.NET', icon: <i className="devicon-csharp-plain colored" /> },
    { name: 'Vite', icon: <i className="devicon-vitejs-plain colored" /> },
    { name: 'Fluent UI', icon: <i className="devicon-fluentui-plain colored" /> },
    { name: 'CSS', icon: <i className="devicon-css3-plain colored" /> },
    { name: 'SCSS', icon: <i className="devicon-css3-plain colored" /> },
    { name: 'Figma', icon: <i className="devicon-figma-plain colored" /> },
    { name: 'Accessibility', icon: <i className="devicon-accessibility-plain colored" /> },
    { name: 'Responsive Design', icon: <i className="devicon-responsive-plain colored" /> },
  ];

  return (
    <section className={classes.section}>
      <FadeInSection>
        <div className={classes.content}>
          <Title3>Skills</Title3>
          <Divider className={classes.divider} />
          <Body1>
            <div className={classes.skillsGrid}>
              {baseSkills.map((skill) => (
                <div className={classes.skillItem} key={skill.name}>
                  <span className={classes.skillLogo}>{skill.icon}</span>
                  {skill.name}
                </div>
              ))}
            </div>
          </Body1>
        </div>
      </FadeInSection>
    </section>
  );
}
