/* eslint-disable no-param-reassign, no-use-before-define, max-len */
import React, {PropTypes, Component} from 'react';
import {css, cssWithClass, StyleSheet, color, spacing, transition} from 'src/styles/theme';
import withScrollTo from 'src/components/hocs/withScrollTo';
import Chip from 'src/components/extended/chipList/Chip';
import {
  Link, DirectLink, Element, Events, scrollSpy, animateScroll as scroll, scroller
}  from 'react-scroll';

function durationFn (deltaTop) {
  return deltaTop;
}

class ScrollDemo extends React.Component {

  // componentDidMount() {
  //   Events.scrollEvent.register('begin', (args) => {
  //     console.log('--begin--',  args, arguments);
  //   })
  //   Events.scrollEvent.register('end', (args) => {
  //     console.log('--end--',  args, arguments);
  //   })
  //   scrollSpy.update();
  // }
  scrollToTop = () => {
    this.props.scrollToTop({});
  }
  scrollToBottom = () => {
    this.props.scrollToBottom({});
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  onClick = ()  => {
    this.props.scrollToElement('same', {smooth: true});
  }

  render() {
    console.warn('---', this.props);
    return (
      <div {...cssWithClass('container', styles.ScrollDemo)}>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><button onClick={this.onClick}>To test 3</button></li>
                <li><button onClick={this.scrollToBottom}>To Bottom</button></li>

                <li>
                  <Link activeClass="active" to="test4" spy={true} smooth={true} duration={500} offset={-200} >
                    <Chip
                      label="light theme"
                      onClick={() => {}}
                    />
                  </Link>
                </li>
                <li><Link activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} >Test 1</Link></li>
                <li><Link activeClass="active" className="test2" to="test2" spy={true} smooth={true} duration={500}>Test 2</Link></li>
                <li><Link activeClass="active" className="test3" to="test3" spy={true} smooth={true} duration={500} >Test 3</Link></li>
                <li><Link activeClass="active" className="test4" to="test4" spy={true} smooth={true} duration={500}>Test 4</Link></li>
                <li><Link activeClass="active" className="test5" to="test5" spy={true} smooth={true} duration={500} delay={1000}>Test 5 ( delay )</Link></li>
                <li><Link activeClass="active" className="test6" to="anchor" spy={true} smooth={true} duration={500}>Test 6 (anchor)</Link></li>
                <li><Link activeClass="active" className="test7" to="test7" spy={true} smooth={true} duration={durationFn}>Test 7 (duration and container)</Link></li>
                <li> <a onClick={() => scroll.scrollTo(100)}>Scroll To 100!</a></li>
                <li> <a onClick={() => scroll.scrollToBottom()}>Scroll To Bottom</a></li>
                <li> <a onClick={() => scroll.scrollMore(500)}>Scroll 500 More!</a></li>
                <li> <a onClick={() => scroll.scrollMore(1000, { delay : 1500 })}>Scroll 1000 More! ( delay ) </a></li>
                <li><Link activeClass="active" className="test8" to="same" spy={true} smooth={true} duration={500}>Same target</Link></li>
                <li><Link activeClass="active" className="test9" to="same" spy={true} smooth={true} duration={500}>Same target</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <Element name="test1" {...css(styles.element)} >
          test 1
        </Element>

        <Element name="test2" {...css(styles.element)}>
          test 2
        </Element>

        <Element name="test3" {...css(styles.element)}>
          test 3
        </Element>

        <Element name="test4" {...css(styles.element)}>
          test 4
        </Element>

        <Element name="test5" {...css(styles.element)}>
          test 5
        </Element>

        <div id="anchor" {...css(styles.element)}>
          test 6 (anchor)
        </div>

        <Link activeClass="active" to="firstInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{display:'inline-block', margin: '20px'}}>
          Go to first element inside container
        </Link>

        <Link activeClass="active" to="secondInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{display:'inline-block', margin: '20px'}}>
          Go to second element inside container
        </Link>
        <Element name="test7" {...css(styles.element)} id="containerElement" style={{
          position: 'relative',
          height:'200px',
          overflow:'scroll',
          marginBottom: '100px'
        }}>
          test 7 (duration and container)

          <Element name="firstInsideContainer" style={{
            marginBottom: '200px'
          }}>
            first element inside container
          </Element>

          <Element name="secondInsideContainer" style={{
            marginBottom: '200px'
          }}>
            second element inside container
          </Element>
        </Element>


        <Element id="same" {...css(styles.element)}>
          Two links point to this
        </Element>

        <a onClick={this.scrollToTop}>To the top!</a>
        <button onClick={this.scrollToTop}>To Top</button>
      </div>
    );
  }
}

module.exports = withScrollTo({})(ScrollDemo);

const styles = StyleSheet.create({
  ScrollDemo: {
    minHeight: 300,
    transition: transition.easeOut(),
  },
  active: {
    color: 'red',
  },
  element: {
    height:600,
  	backgroundColor: '#ededed',
  	borderTop:'1px solid #000',
  	paddingTop:55,
  	paddingLeft:10,
  }
});
