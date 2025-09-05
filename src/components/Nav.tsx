import { makeStyles, tokens } from '@fluentui/react-components';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const useStyles = makeStyles({
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    zIndex: 100,
    background: tokens.colorNeutralBackground1,
    boxShadow: tokens.shadow8,
    padding: `${tokens.spacingVerticalM} ${tokens.spacingHorizontalNone}`,
    display: 'flex',
    justifyContent: 'center',
    gap: tokens.spacingHorizontalXXL,
  },
  navLink: {
    color: tokens.colorNeutralForeground2,
    fontWeight: 500,
    textDecoration: 'none',
    fontSize: tokens.fontSizeBase300,
    padding: `${tokens.spacingVerticalXS} ${tokens.spacingHorizontalM}`,
    borderRadius: tokens.borderRadiusMedium,
    transition: 'background 0.2s',
    '&:hover': {
      background: tokens.colorNeutralBackground3,
    },
  },
  active: {
    color: tokens.colorBrandForeground1,
    fontWeight: 700,
    background: tokens.colorNeutralBackground3,
  },
});

export function Nav() {
  const classes = useStyles();
  const location = useLocation();
  return (
    <nav className={classes.nav}>
      <RouterLink
        to="/about"
        className={`${classes.navLink} ${location.pathname === '/about' ? classes.active : ''}`}
      >
        About
      </RouterLink>
      <RouterLink
        to="/experience"
        className={`${classes.navLink} ${location.pathname === '/experience' ? classes.active : ''}`}
      >
        Experience
      </RouterLink>
      <RouterLink
        to="/skills"
        className={`${classes.navLink} ${location.pathname === '/skills' ? classes.active : ''}`}
      >
        Skills
      </RouterLink>
      <RouterLink
        to="/contact"
        className={`${classes.navLink} ${location.pathname === '/contact' ? classes.active : ''}`}
      >
        Contact
      </RouterLink>
    </nav>
  );
}
