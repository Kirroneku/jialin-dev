import { Title3, Divider, Body1, makeStyles, tokens } from '@fluentui/react-components';
import { FadeInSection } from './FadeInSection';
import { skillGroups } from '../data/skillsData';

const useStyles = makeStyles({
  section: {
    minHeight: '75vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.spacingHorizontalXL,
  },
  divider: {
    margin: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalNone}`,
  },
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: tokens.spacingVerticalM,
    paddingLeft: tokens.spacingHorizontalM,
    '@media (max-width: 900px)': {
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

  // Render function must be in component scope to access classes
  function renderSkillGroup(group: {
    label: string;
    skills: { name: string; icon: React.ReactNode }[];
  }) {
    return (
      <div key={group.label} style={{ marginBottom: tokens.spacingVerticalXL }}>
        <h4>{group.label}</h4>
        <div className={classes.skillsGrid}>
          {group.skills.map((skill: { name: string; icon: React.ReactNode }) => (
            <div className={classes.skillItem} key={skill.name}>
              <span className={classes.skillLogo} aria-label={skill.name}>
                {skill.icon}
              </span>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section className={classes.section}>
      <FadeInSection>
        <Title3>Skills</Title3>
        <Divider className={classes.divider} />
        <Body1>{skillGroups.map(renderSkillGroup)}</Body1>
      </FadeInSection>
    </section>
  );
}
