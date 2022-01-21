import React from 'react';
import PropTypes from 'prop-types';

export default function Link(props) {
  return <a href={props.href}>{props.text}</a>;
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
