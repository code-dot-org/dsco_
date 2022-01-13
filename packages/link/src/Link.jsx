import React from "react";
// TODO: add prop-types

export default function Link(props) {
  return <a href={props.href}>{props.text}</a>;
}
