import PropTypes from 'prop-types';
import React from 'react';

export default function Link(props) {
  return <a href={props.href}>{props.text}</a>;
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.text.isRequired,
};
