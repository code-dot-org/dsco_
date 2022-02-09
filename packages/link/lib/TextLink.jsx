import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Link from './Link';
import style from './text-link.module.scss';

/**
 * A version of the Link component that styles a hyperlink composed of
 * an icon and text. It can also be icon-only or text-only.
 *
 * Any props not defined by this component are passed through to the Link component.
 */
export default function TextLink({icon, iconBefore, text, ...linkProps}) {
  if (icon) {
    icon = React.cloneElement(icon, {
      // Icons should be hidden from screenreaders if text is available.
      'aria-hidden': !!text,
      key: 'icon',
    });
  }

  return (
    <Link
      {...linkProps}
      className={classnames(style.link, linkProps.className)}
    >
      {iconBefore && icon}
      {text && <span key="text">{text}</span>}
      {!iconBefore && icon}
    </Link>
  );
}

TextLink.displayName = 'TextLink';

TextLink.propTypes = {
  /** Link destination */
  href: PropTypes.string.isRequired,
  icon: PropTypes.node,
  /** Render the icon before or after the text? */
  iconBefore: PropTypes.bool,
  text: PropTypes.string,
};

TextLink.defaultProps = {
  icon: undefined,
  iconBefore: false,
  text: undefined,
};
