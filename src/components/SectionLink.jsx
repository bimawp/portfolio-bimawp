import {
  Link,
  useLocation
} from 'react-router-dom';

import {
  scrollToSection
} from '../utils/sectionNavigation';

export default function SectionLink({
  section,
  onClick,
  children,
  ...props
}) {
  const { pathname, hash } = useLocation();

  function handleClick(event) {
    onClick?.(event);

    // Biarkan browser menangani klik khusus.
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    // Menangani klik berulang pada section yang sama.
    if (
      pathname === '/' &&
      hash === `#${section}`
    ) {
      event.preventDefault();
      scrollToSection(section);
    }
  }

  return (
    <Link
      to={`/#${section}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}