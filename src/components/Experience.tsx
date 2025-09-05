import { Title3, Divider, Body1, Text, makeStyles, tokens } from '@fluentui/react-components';
import { FadeInSection } from './FadeInSection';
import { resumeData } from '../data/resumeData';
import { educationData } from '../data/educationData';

const useStyles = makeStyles({
  section: {
    minHeight: '75vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.spacingHorizontalXL,
  },
  divider: {
    margin: `${tokens.spacingVerticalM} 0`,
  },
  ul: {
    paddingLeft: tokens.spacingHorizontalM,
  },
  roleHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalM,
    marginBottom: tokens.spacingVerticalXS,
  },
  roleLogo: {
    maxWidth: '120px',
    height: '20px',
    objectFit: 'contain',
  },
  dateText: {
    flexGrow: 1,
    textAlign: 'right',
    color: tokens.colorNeutralForeground3,
  },
});

export function Experience() {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <FadeInSection>
        <Title3>Experience</Title3>
        <Divider className={classes.divider} />
        <Body1>
          {resumeData.map((role) => (
            <div key={role.title} style={{ marginBottom: tokens.spacingVerticalL }}>
              <div className={classes.roleHeader}>
                <Text weight="semibold">{role.title}</Text>
                {role.logo && (
                  <img src={role.logo} alt={role.title + ' logo'} className={classes.roleLogo} />
                )}
                <Text as="span" className={classes.dateText}>
                  {role.date}
                </Text>
              </div>
              {role.highlights && role.highlights.length > 0 && (
                <ul className={classes.ul}>
                  {role.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
              {role.projects && role.projects.length > 0 && (
                <>
                  <ul className={classes.ul}>
                    {role.projects.map((proj) => (
                      <li key={proj.title}>
                        <Text weight="semibold">{proj.title}</Text>
                        {proj.tech && <div> ({proj.tech})</div>}
                        {proj.bullets && (
                          <ul>
                            {proj.bullets.map((b, k) => (
                              <li key={k}>{b}</li>
                            ))}
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
        <Divider className={classes.divider} />
        <Title3>Education</Title3>
        <Body1>
          {educationData.map((edu) => (
            <div key={edu.title} style={{ display: 'flex' }}>
              <Text weight="semibold">{edu.title}</Text> <br />
              <Text className={classes.dateText}>{edu.date}</Text>
            </div>
          ))}
        </Body1>
      </FadeInSection>
    </section>
  );
}
