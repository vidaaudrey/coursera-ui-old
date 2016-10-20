import React from 'react';
import { css, cssWithClass, withStyles, ThemedStyleSheet } from 'src';
import withApiData from 'src/components/hocs/withApiData';

const CourseCard = ({
  styles,
  course, isSelected, id, onToggleCourseSelect
}) => {
  const {name, photoUrl, partnerIds, partnerName = 'John Hopken '} = course;

  return (
      <div {...cssWithClass('card vertical-box m-b-1', styles.CourseCard)}>
        <img src={photoUrl} alt="CourseraAlt" style={{width: '100%'}} />
        <div className="main flex-1 vertical-box p-a-1">
          <div className="content flex-1">
            <h3>{name}</h3>
            {partnerName}
          </div>
          <div className="footer horizontal-box align-items-spacebetween">
            <p>footer content</p>
            <button onClick={() => (onToggleCourseSelect(id, !isSelected))}>
              {isSelected ? 'Deselect' : 'Select'}
            </button>
          </div>
        </div>
      </div>
    );
};

const CourseCardWithApiData = withApiData({
  dataType: 'COURSE',
})(CourseCard);


export default withStyles(({}) => ({
  CourseCard: {
    minHeight: 400,
  }
}))(CourseCardWithApiData);
