/* eslint-disable no-use-before-define */
import React, { PropTypes, Component } from 'react';
import {
  cssWithClass, StyleSheet, css, color, spacing, transition,
} from 'src/styles/theme';
import _ from 'underscore';
import SvgSearch from 'src/components/svg/coursera/common/SvgSearch';
import SvgClear from 'src/components/svg/coursera/common/SvgClear';

const _t = t => t;

// TODO[Audrey]: work with design to finalize the details
class SearchInput extends Component {
  static propTypes = {
    // Override the inline-styles of the search input
    style: PropTypes.object,
    // Additoinal attributes for search input
    htmlAttributes: PropTypes.object,
    // Label for accessibility.
    label: PropTypes.string,
    // If set to true, it will put the cursor in the input after mount.
    autoFocus: PropTypes.bool,
    // Triggered whenever search input is changed.
    onChange: PropTypes.func,
    // Triggered whenever submit button is clicked or user pressed 'Enter'.
    onSearch: PropTypes.func.isRequired,
    // Placeholder text for search input.
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    label: _t('Search'),
    placeholder: '',
    autoFocus: false,
  }

  state = {
    keyword: '',
    showReset: false,
  }

  componentDidMount() {
    if (this.props.autoFocus && this.searchRef) {
      this.searchRef.focus();
    }
  }

  onReset = () => {
    const keyword = '';
    this.setState({ keyword, showReset: false});
    this.searchRef.value = '';
    this.props.onSearch(keyword);
  }

  onSubmit = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    const keyword = SearchInput.sanitizeKeyword(this.state.keyword);
    this.setState({showReset: keyword.length !== 0});
    this.props.onSearch(keyword);
  }

  onChange = () => {
    const searchInput = this.searchRef;
    if (searchInput) {
      const keyword = searchInput.value.trim();
      if (this.props.onChange) {
        const sanitizeKeyword = SearchInput.sanitizeKeyword(keyword);
        this.props.onChange(sanitizeKeyword);
      }
      this.setState({keyword, showReset: true});
    }
  }

  static sanitizeKeyword = (keyword) => {
    return _.escape(keyword);
  }

  render() {
    const {label, placeholder, style, htmlAttributes } = this.props;
    const {showReset} = this.state;
    return (
      <form
        {...cssWithClass('horizontal-box align-items-vertical-center', styles.SearchInput)}
        onSubmit={this.onSubmit}
      >
        <label htmlFor={label} {...css(styles.srOnly)}>{label}</label>
        <div {...cssWithClass('flex-1', styles.inputArea)}>
          <input
            {...htmlAttributes}
            {...css(styles.searchInput)}
            style={style}
            ref={ref => (this.searchRef = ref)}
            type="text"
            placeholder={placeholder}
            onChange={this.onChange}
          />
        </div>
        <div {...cssWithClass('horizontal-box align-items-vertical-center align-items-right', styles.btnContainer)}>
          {showReset &&
            <button
              {...css(styles.iconBtn)}
              onClick={this.onReset}
              type="reset"
            >
              <SvgClear
                color={color.secondaryText}
                hoverColor={color.primary}
              />
            </button>
          }
          <button
            {...css(styles.iconBtn, styles.searchBtn)}
            onClick={this.onSubmit}
            onSubmit={this.onSubmit}
            type="submit"
          >
            <SvgSearch
              color={color.secondaryText}
              hoverColor={color.primary}
            />
          </button>
        </div>
      </form>
    );
  }
}

module.exports = SearchInput;

const styles = StyleSheet.create({
  SearchInput: {
    transition: transition.easeOut(),
    userSelect: 'none',
    position: 'relative',
    width: '100%',
    minHeight: 42,
    border: `2px solid ${color.divider}`,
  },
  inputArea: {
    maxWidth: '100%',
    height: '100%',
    paddingRight: 76,
    paddingTop: 0,
    paddingBottom: 0,
    ':focus': {
      outline: 'none',
    },
  },
  btnContainer: {
    padding: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
  },
  searchInput: {
    padding: 8,
    width: '100%',
    border: 'none',
    ':focus': {
      outline: 'none',
    },
  },
  iconBtn: {
    margin: 0,
    padding: 0,
    paddingTop: 2, // Visually shift to the center
    width: 36,
    backgroundColor: 'transparent',
    border: 'none',
    ':focus': {
      outline: 'none',
    },
  },
  searchBtn: {
    borderLeftColor: color.divider,
    borderLeftWidth: 2,
  },
  srOnly: {
    position: 'absolute',
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    border: 0,
    ':active': {
      position: 'static',
      width: 'auto',
      height: 'auto',
      margin: 0,
      overflow: 'visible',
      clip: 'auto',
    },
    ':focus': {
      position: 'static',
      width: 'auto',
      height: 'auto',
      margin: 0,
      overflow: 'visible',
      clip: 'auto',
    },
  },
});
