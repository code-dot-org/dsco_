import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as styles from './link.module.scss';

/**
 * A generic hyperlink component that accepts and renders any type of children.
 */
export default function Link({
  children,
  className,
  external,
  href,
  id,
  onClick,
  openInNewTab,
  weight,
}) {
  return (
    <a
      className={classnames(styles.link, styles[weight], className)}
      href={href}
      id={id}
      onClick={onClick}
      target={openInNewTab ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
}

Link.displayName = 'Link';

Link.propTypes = {
  children: PropTypes.node,
  /** CSS class to be applied after all internal classes */
  className: PropTypes.string,
  /** Does the link go to an external source? */
  external: PropTypes.bool,
  /** Link destination */
  href: PropTypes.string.isRequired,
  id: PropTypes.string,
  /** A callback to invoke when link is clicked. Useful for analytics hooks. */
  onClick: PropTypes.func,
  /** Should the link open in a new tab? */
  openInNewTab: PropTypes.bool,
  /** Font weight of the link */
  weight: PropTypes.oneOf(['regular', 'medium', 'bold']),
};

Link.defaultProps = {
  children: undefined,
  className: undefined,
  external: false,
  id: undefined,
  onClick: () => {},
  openInNewTab: false,
  weight: 'regular',
};
