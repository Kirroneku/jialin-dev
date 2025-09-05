import { Title3, Divider, Body1, Text, Link, makeStyles, tokens } from '@fluentui/react-components';
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
});

export function Contact() {
  const classes = useStyles();
  return (
    <section className={classes.section}>
      <FadeInSection>
        <Title3>Contact</Title3>
        <Divider className={classes.divider} />
        <Body1>
          <Text>Email: </Text>
          <Link href="mailto:your.email@example.com">your.email@example.com</Link>
          <br />
          <Text>GitHub: </Text>
          <Link href="https://github.com/yourusername" target="_blank">
            yourusername
          </Link>
          <br />
          <Text>LinkedIn: </Text>
          <Link href="https://linkedin.com/in/yourusername" target="_blank">
            yourusername
          </Link>
        </Body1>
      </FadeInSection>
    </section>
  );
}
