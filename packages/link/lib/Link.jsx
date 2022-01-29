import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './link.module.scss';

export default function Link(props) {
  return (
    <a href={props.href} className={styles.link}>
      {props.text}
    </a>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
