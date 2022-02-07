import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as styles from './link.module.scss';

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

export const linkPropTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  external: PropTypes.bool,
  href: PropTypes.string.isRequired,
  id: PropTypes.string,
  onClick: PropTypes.func,
  openInNewTab: PropTypes.bool,
  weight: PropTypes.oneOf(['regular', 'medium', 'bold']),
};
Link.propTypes = linkPropTypes;

Link.defaultProps = {
  children: undefined,
  className: undefined,
  external: false,
  id: undefined,
  onClick: () => {},
  openInNewTab: false,
  weight: 'regular',
};
