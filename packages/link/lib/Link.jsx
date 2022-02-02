import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './link.module.scss';

export default function Link(props) {
  // Now we can imagine that all the theming context contains is the current
  // name of the active theme.
  const theme = useTheme();
  
  return (
    <a href={props.href} className={styles.link} theme={theme}>
      {props.text}
    </a>
  );
}

Link.displayName = 'Link';

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
