import { makeStyles, tokens } from '@fluentui/react-components';
import { useRef, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

interface FadeInSectionProps {
  children: ReactNode;
}

const useStyles = makeStyles({
  content: {
    padding: tokens.spacingHorizontalXXL,
    maxWidth: '900px',
    width: '100%',
  },
});

export function FadeInSection({ children }: FadeInSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const classes = useStyles();
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`fade-in-section${isVisible ? ' visible' : ''}`}>
      <div className={classes.content}>{children}</div>
    </div>
  );
}
