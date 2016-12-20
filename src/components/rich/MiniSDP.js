/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React, { PropTypes, Component } from 'react';
import {
  css, cssWithClass, StyleSheet, color, spacing, transition, fontFamily, font,
} from 'src/styles/theme';

import { compose, pure } from 'recompose';
import _ from 'underscore';

import withApiMockData from 'src/components/hocs/withApiMockData';

import { FormattedHTMLMessage } from 'react-intl';
import Button from 'src/components/basic/Button';
import { Card, CardBlock } from 'src/components/basic/Card';
import InstructorInfo from 'src/components/rich/InstructorInfo';
import TogglableContent from 'src/components/basic/TogglableContent';
import PartnerName from 'src/components/rich/PartnerName';
import CourseNextSessionStartTimeContainer from 'src/components/rich/CourseNextSessionStartTimeContainer';
import CourseInfoRow from 'src/components/rich/CourseInfoRow';
import { Accordion, Expandable } from 'src';
import Measure from 'react-measure';
import SvgCurriculum from 'src/components/svg/coursera/common/SvgCurriculum';
import SDPCoursePanel from 'src/components/rich/SDPCoursePanel';

// import S12nInfoRows from 'bundles/coursera-ui/components/rich/S12nInfoRows';

const MODAL_PADDING = 28; // Set by Modal component
const _t = c => c;
const CONFIG = {
  duration: 0.63,
};

class MiniSDP extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    s12n: PropTypes.object.isRequired,
    actionElement: PropTypes.node,
  }

  state = {
    showCourseDetails: false,
    mainVisibleContainerHeight: 0,
    mainHiddenContainer: 0,
  }

  toggleCourseDetails = () => {
    this.setState({showCourseDetails: !this.state.showCourseDetails});
  }

  render() {
    const {
      s12n, instructors, partner, courses
    } = this.props;
    const {
      name, partnerIds, description, courseIds, instructorIds, courseCount, capstoneProjectCount = 1,
    } = s12n;

    const {
      mainVisibleContainerHeight, mainHiddenContainer,
    } = this.state;

    const firstPartnerId = _(partnerIds).first();
    const { showCourseDetails } = this.state;

    return (
      <div {...css(styles.MiniSDP, styles.transitionContainer)}>
        <Card paperStyle={{margin: -MODAL_PADDING}}>
          <CardBlock isFullBleed >
            <div
              {...css(
                styles.transitionContainer,
              )}
              style={{height: showCourseDetails ? 0 : mainVisibleContainerHeight}}
            >
              <Measure
                onMeasure={({height}) => this.setState({mainVisibleContainerHeight: height})}
              >
                <div {...css(styles.mainVisibleContainer)}>
                  <div {...css(styles.courseInfoContainer)}>
                    <h3 {...css(styles.title)}>{name}</h3>
                    {!!firstPartnerId && <PartnerName partner={partner} />}
                    <div {...css(styles.actionElementContainer)}>{this.props.actionElement}</div>
                    <TogglableContent>
                      <p className="body-1-text course-description">
                        <strong className="body-2-text">{_t('About this course: ')}</strong>
                        {description}
                      </p>
                    </TogglableContent>
                  </div>
                  <div {...css(styles.instructorInfoContainer)}>
                    {!_(instructorIds).isEmpty() &&
                      <ul {...css(styles.instructorList)}>
                        {instructorIds.map(id =>
                          <div key={`InstructorInfo~${id}`} {...css(styles.InstructorInfoContainer, styles.borderBottom)}>
                            <InstructorInfo key={`instructorList~${id}`} instructor={_(instructors).find(item => item.id === id)} />
                          </div>
                        )}
                      </ul>
                    }
                  </div>
                  <div {...css(styles.CourseInfoRowsContainer)}>
                    <CourseInfoRow
                      icon={<SvgCurriculum size={44} />}
                      title={_t('Next Session Start')}
                      subtitle={
                        (<CourseNextSessionStartTimeContainer course={{upcomingSessionStartDateString: 'December 5, 2016'}} />)
                      }
                    />
                    <CourseInfoRow
                      icon={<SvgCurriculum size={44} />}
                      title={_t('Time Needed')}
                      subtitle={'6 weeks of study, 3-4 hours/week'}
                    />
                    <CourseInfoRow
                      icon={<SvgCurriculum size={44} />}
                      title={_t('Structure')}
                      subtitle={
                        <span>
                          <span className="display font-italic font-lg">{courseCount}</span> Courses
                          <span className="display font-italic font-lg"> { capstoneProjectCount}</span> capstone project
                          {/*
                            <FormattedHTMLMessage
                              id="courseCount"
                              message={_t(`
                                <span class="display font-italic font-lg">{courseCount}</span>
                                {courseCount, plural, =1 {course} other {courses}}
                              `)}
                              courseCount={courseCount}
                            />
                            {capstoneProjectCount && capstoneProjectCount > 0 &&
                              <FormattedHTMLMessage
                                id="capstoneProjectCount"
                                message={_t(`
                                   <span class="display font-italic font-lg">{capstoneProjectCount}</span>
                                  capstone
                                  {capstoneProjectCount, plural, =1 {project} other {projects}}
                                `)}
                                capstoneProjectCount={capstoneProjectCount}
                              />
                            }
                          */}
                        </span>
                      }
                    />
                  </div>
                  <div {...css(styles.buttonShowContainer)}>
                    <Button
                      type="noStyle"
                      style={{color: color.primary}}
                      onClick={this.toggleCourseDetails}
                      label={showCourseDetails ? _t('Hide Courses') : _t('View Courses')}
                    />
                  </div>
                </div>
              </Measure>
            </div>
          </CardBlock>
          <CardBlock isFullBleed>
            <div
              {...css(
                styles.transitionContainer,
              )}
              style={{height: showCourseDetails ? mainHiddenContainer + 16 : 0 }}
            >
              <Measure
                onMeasure={({height}) => this.setState({mainHiddenContainer: height})}
              >
                <div {...css(styles.mainHiddenContainer)}>
                  <div {...cssWithClass('horizontal-box', styles.buttonHideContainer)}>
                    <Button
                      type="noStyle"
                      style={{color: color.primary}}
                      onClick={this.toggleCourseDetails}
                      label={showCourseDetails ? _t('Hide Courses') : _t('Show Courses')}
                    />
                  </div>
                  <div {...css(styles.courseDetailContainer)}>
                    <Accordion
                      propsForExpandable={{
                        hideArrow: true,
                        hideBorder: true,
                      }}
                      propsForActiveExpandable={{
                        style: {backgroundColor: color.bgGray},
                      }}
                    >
                      {_(courseIds).map((id, index) =>
                        <SDPCoursePanel
                          key={`activeIndex~${id}}`}
                          index={index}
                          course={_(courses).findWhere(item => item.id === id)}
                        />
                      )}
                    </Accordion>
                  </div>
                </div>
              </Measure>
            </div>
          </CardBlock>
        </Card>
      </div>
    );
  }
}

module.exports = compose(
  withApiMockData({
    dataType: 'MINI_SDP',
  }),
  pure,
)(MiniSDP);


const styles = StyleSheet.create({
  MiniSDP: {
    minHeight: 80,
    transition: transition.easeOut(),
  },
  transitionContainer: {
    position: 'relative',
    overflow: 'hidden',
    transition: `height ${CONFIG.duration}s ${transition.easeOutFunction}`,
  },
  mainVisibleContainer: {
  },
  mainHiddenContainer: {
    minHeight: 0,
  },
  visible: {
  },
  hidden: {
    height: 0,
  },
  courseInfoContainer: {
    padding: spacing.md,
  },
  hideContainer: {
    padding: 0,
    margin: 0,
    maxHeight: 0,
    overflow: 'hidden',
  },
  actionElementContainer: {
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
  },
  title: {
    fontFamily: fontFamily.display,
    marginBottom: 0,
  },
  instructorList: {
    padding: 0,
    margin: 0,
    borderTop: `1px solid ${color.divider}`,
  },
  borderBottom: {
    borderBottom: `1px solid ${color.divider}`,
  },
  InstructorInfoContainer: {
    padding: spacing.sm,
  },
  courseDetailContainer: {
    marginTop: 64,
    marginBottom: spacing.md,
  },
  buttonShowContainer: {
    position: 'absolute',
    right: spacing.md,
    bottom: spacing.md,
  },
  buttonHideContainer: {
    position: 'absolute',
    right: spacing.md,
    top: '-2.5rem',
  },
  courseInfoRowText: {
    fontSize: font.sm,
  },
  courseInfoRowNumber: {
    fontSize: font.lg,
    fontFamily: fontFamily.display,
  },
});
