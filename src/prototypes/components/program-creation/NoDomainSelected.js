import React from 'react';
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

const NoDomainSelected = (props) => {
  return (
    <div {...cssWithClass('vertical-box align-items-absolute-center', styles.NoDomainSelected)}>
      <h2 className="m-b-3">
        Please select at least one domain!
      </h2>
    </div>
  );
};

module.exports = NoDomainSelected;

const styles = StyleSheet.create({
  NoDomainSelected: {
    minHeight: 300,
  },
});
