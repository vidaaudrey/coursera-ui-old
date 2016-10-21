import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import {Avatar, Button} from 'src';
const _ = require('underscore');
import {CourseCard, LayeredS12nCard} from 'src';

class DomainCard extends React.Component {
  static propTypes = {
    selectedCourseIds: React.PropTypes.array,
    selectedS12nIds: React.PropTypes.array,
    domainId: React.PropTypes.string.isRequired,
    domainName: React.PropTypes.string.isRequired,
    searchKeyWord: React.PropTypes.string,
  }

  static defaultProps = {
    selectedCourseIds: [],
    selectedS12nIds: [],
  }

  constructor(props, context) {
    super(props, context);
    const {domainId, searchKeyWord} = props;
    console.log('--Domain Card TODO: search on s12n and course by domainId and searchKeyWord--', domainId, searchKeyWord);
  }

  render() {
    const {
      style, styles, selectedCourseIds, selectedS12nIds,
      onToggleCourseSelect, onToggleS12nSelect,
      domainName,
    } = this.props;
    const s12nIds = ['s1', 's2', 's3'];
    const courseIds = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];

    const s12ns = _.chain(s12nIds)
      .map(id => ({
        id,
        isSelected: _(selectedS12nIds).contains(id),
      }))
      .value();
    const courses = _.chain(courseIds)
      .map(id => ({
        id,
        isSelected: _(selectedCourseIds).contains(id),
      }))
      .value();

    return (
      <div {...css(styles.DomainCard)}>
        <h2 {...css(styles.domainName)}>{domainName}</h2>
        <h5 {...css(styles.cardType)}> Specializations</h5>
        <div className="row m-b-2">
            {s12ns.map((item, index) => (
              <div key={`LayeredS12nCard~${item.id}`} className="col-xs-12 col-md-6 col-lg-4">
                <LayeredS12nCard
                  id={item.id}
                  isSelected={item.isSelected}
                  onToggleS12nSelect={onToggleS12nSelect}
                />
              </div>
            ))}
        </div>
        <h4 {...css(styles.cardType)}> Courses</h4>
        <div className="row m-b-2">
            {courses.map((item, index) => (
              <div key={`CourseCard~${item.id}`} className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <CourseCard
                  id={item.id}
                  isSelected={item.isSelected}
                  onToggleCourseSelect={onToggleCourseSelect}
                />
              </div>
            ))}
            <div className="col-xs-12 text-xs-right">
              <Button type="secondary" label={'See All'} />
            </div>
        </div>
      </div>
    );
  }
}

function getStyles({coursePhotoSize}) {
  return {
    DomainCard: {
    },
  };
}

export default withStyles(({color, spacing}) => ({
  DomainCard: {
    textAlign: 'left',
  },
  domainName: {
    fontWeight: 'normal',
  },
  cardType: {
    textTransform: 'uppercase',
    color: color.secondaryText,
  },
}))(DomainCard);
