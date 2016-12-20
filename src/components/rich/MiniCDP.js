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

const MODAL_PADDING = 28; // Set by Modal component
const _t = c => c;
const CONFIG = {
  duration: 0.63,
};

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, vero.';

class MiniCDP extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    course: PropTypes.object.isRequired,
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
      course, instructors, partner,
    } = this.props;
    const {
      name, description, partnerIds, instructorIds
    } = course;

    const {
      mainVisibleContainerHeight, mainHiddenContainer,
    } = this.state;

    const firstPartnerId = _(partnerIds).first();
    const { showCourseDetails } = this.state;

    return (
      <div {...css(styles.MiniCDP, styles.transitionContainer)}>
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
                  </div>
                  <div {...css(styles.buttonShowContainer)}>
                    <Button
                      type="noStyle"
                      style={{color: color.primary}}
                      onClick={this.toggleCourseDetails}
                      label={showCourseDetails ? _t('Hide Course') : _t('View Course')}
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
                      label={showCourseDetails ? _t('Hide Course') : _t('Show Course')}
                    />
                  </div>
                  <div {...css(styles.courseDetailContainer)}>
                    <h1>Syllabus...</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores beatae doloribus maxime, odit! Officia quia, commodi architecto dolorem eaque sed odio, aliquam doloribus ut unde ab nam consequatur. Unde, minima.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores beatae doloribus maxime, odit! Officia quia, commodi architecto dolorem eaque sed odio, aliquam doloribus ut unde ab nam consequatur. Unde, minima.</p>
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
    dataType: 'MINI_CDP',
  }),
  pure,
)(MiniCDP);


const styles = StyleSheet.create({
  MiniCDP: {
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
    paddingBottom: '2.5rem',
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
