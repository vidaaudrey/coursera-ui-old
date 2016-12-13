import React, { PropTypes } from 'react';

const CourseNextSessionStartTimeContainer = ({ course }) => {
  if (!course || !course.upcomingSessionStartDateString) {
    return null;
  }
  return (
    <span className="CourseNextSessionStartTimeContainer">
      {course.upcomingSessionStartDateString}
    </span>
  );
};

CourseNextSessionStartTimeContainer.propTypes = {
  course: PropTypes.shape({
    upcomingSessionStartDateString: PropTypes.string,
  }),
};

module.exports = CourseNextSessionStartTimeContainer;
