import { Title3, Divider, Body1, Text, Link, makeStyles, tokens } from '@fluentui/react-components';
import { Mail24Regular } from '@fluentui/react-icons';
import { FadeInSection } from './FadeInSection';

const useStyles = makeStyles({
  section: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    margin: `${tokens.spacingVerticalM} 0`,
  },
  linkWithIcon: {
    display: 'flex',
    alignItems: 'center',
    gap: tokens.spacingHorizontalXS,
    marginBottom: tokens.spacingVerticalXS,
  },
});

export function Contact() {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <FadeInSection>
        <Title3>Contact Me!</Title3>
        <Divider className={classes.divider} />
        <Body1>
          <Link href="mailto:j6shan@gmail.com" className={classes.linkWithIcon}>
            <Mail24Regular style={{ verticalAlign: 'middle' }} />
            j6shan@gmail.com
          </Link>
          <br />
          <Link
            href="https://github.com/kirroneku"
            target="_blank"
            className={classes.linkWithIcon}
          >
            <i
              className="devicon-github-original colored"
              style={{ fontSize: 24, verticalAlign: 'middle' }}
            />
            kirroneku
          </Link>
          <br />
          <Link
            href="https://linkedin.com/in/jialinshan"
            target="_blank"
            className={classes.linkWithIcon}
          >
            <i
              className="devicon-linkedin-plain colored"
              style={{ fontSize: 24, verticalAlign: 'middle' }}
            />
            Jialin Shan
          </Link>
        </Body1>
      </FadeInSection>
    </section>
  );
}
