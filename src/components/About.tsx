import { Title3, Subtitle2, Text, makeStyles, tokens } from '@fluentui/react-components';
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
    justifyContent: 'space-between',
    gap: tokens.spacingHorizontalL,
    marginBottom: tokens.spacingVerticalL,
    flexWrap: 'wrap',
  },
  aboutText: {
    flex: 1,
    minWidth: 0,
  },
  aboutImg: {
    width: '120px',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '50%',
    boxShadow: tokens.shadow4,
    marginLeft: tokens.spacingHorizontalL,
    background: tokens.colorNeutralBackground2,
    flexShrink: 0,
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
          <div className={classes.aboutText}>
            <p className={classes.title}>Hi there, I'm Jialin Shan</p>
            <p className={classes.subtitle}>
              A full stack developer with 4+ years of full time experience. I have extensive front
              end development experience with multiple Javascript frameworks such as Vue.js,
              React.js and Angular under my belt. I have experience with back end technologies such
              as node.js and C#. I bring strong customer relational skills and demonstrated my
              ability to meet deliverables with exceptional quality. My work ethic shows I can
              manage multiple project tasks and assist others with completing tasks to reach project
              deadlines and deliverables. Feel free to talk to me about games, sim racing, tech, or
              ducks!
            </p>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
