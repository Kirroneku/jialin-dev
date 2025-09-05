import { Avatar, Title3, Subtitle2, Text, makeStyles, tokens } from '@fluentui/react-components';
import { FadeInSection } from './FadeInSection';

const useStyles = makeStyles({
  section: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.spacingHorizontalL,
  },
  headerFlex: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXL,
    padding: tokens.spacingHorizontalL,
    maxWidth: '900px',
    width: '100%',
  },
  title: {
    fontSize: tokens.fontSizeHero800,
    fontWeight: 700,
    marginBottom: tokens.spacingVerticalM,
  },
  subtitle: {
    color: tokens.colorNeutralForeground3,
    fontSize: tokens.fontSizeBase500,
    lineHeight: 1.7,
  },
});

export function About() {
  const classes = useStyles();
  return (
  <section className={classes.section}>
      <FadeInSection>
        <div className={classes.headerFlex}>
          <Avatar name="Jialin" size={64} color="colorful" />
          <div>
            <span className={classes.title}>Welcome!</span>
            <Text className={classes.subtitle}>
              I'm Jialin Shan, I'm a full stack developer who specializes in front end development with multiple Javascript frameworks such as Vue.js and React.js. I have experience with back end technologies such as node.js and C#. I have strong customer relational skills and demonstrated my ability to meet deliverables with exceptional quality on all my projects. My work ethic shows I can manage multiple project tasks and assist others with completing tasks to reach project deadlines and deliverables.
            </Text>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
