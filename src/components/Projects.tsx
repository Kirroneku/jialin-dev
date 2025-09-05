import { Title3, Divider, Body1, Text, makeStyles, tokens } from '@fluentui/react-components';
import { FadeInSection } from './FadeInSection';
import resumeData from '../data/resume.json';

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
    margin: `${tokens.spacingVerticalM} 0`,
  },
  ul: {
    paddingLeft: tokens.spacingHorizontalM,
  },
  
});

export function Projects() {
  const classes = useStyles();
  return (
  <section className={classes.section}>
      <FadeInSection>
        <div className={classes.content}>
          <Title3>Resume</Title3>
          <Divider className={classes.divider} />
          <Body1>
            {resumeData.map((role) => (
              <div key={role.title} style={{ marginBottom: tokens.spacingVerticalL }}>
                <Text weight="semibold">{role.title}</Text> <br />
                <Text as="span" style={{ color: tokens.colorNeutralForeground3 }}>{role.date}</Text>
                {role.highlights && role.highlights.length > 0 && (
                  <ul className={classes.ul}>
                    {role.highlights.map((h, i) => <li key={i}>{h}</li>)}
                  </ul>
                )}
                {role.projects && role.projects.length > 0 && (
                  <>
                    <ul className={classes.ul}>
                      {role.projects.map((proj, j) => (
                        <li key={proj.title}>
                          <Text weight="semibold">{proj.title}</Text>
                          {proj.tech && <div> ({proj.tech})</div>}
                          {proj.bullets && (
                            <ul>
                              {proj.bullets.map((b, k) => <li key={k}>{b}</li>)}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </Body1>
        </div>
      </FadeInSection>
    </section>
  );
}
