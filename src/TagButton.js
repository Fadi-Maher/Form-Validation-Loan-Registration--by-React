import React from 'react';
import PropTypes from 'prop-types';
import "./TagButtonStyle.css";

export default function TagButton({ title, children }) {
  return (
    <button className="tagButton">
      {title} {children}
    </button>
  );
}

TagButton.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
