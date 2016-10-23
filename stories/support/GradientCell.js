const React = require('react');
const {
  cssWithClass, StyleSheet, css, color, spacing, gradient, transition,
} = require('src/styles/theme');

function getGradientStyle({start, end}, deg = 90){
  return {
    background: start, /* For browsers that do not support gradients */
    background: `-webkit-linear-gradient(${deg}deg, ${start}, ${end})`, /* For Safari 5.1 to 6.0 */
    background: `-o-linear-gradient(${deg}deg, ${start}, ${end})`, /* For Opera 11.1 to 12.0 */
    background: `-moz-linear-gradient(${deg}deg, ${start}, ${end})`, /* For Firefox 3.6 to 15 */
    background: `linear-gradient(${deg}deg, ${start}, ${end})`,
  };
}

function GradientCell({gradient, name, deg}) {
  return (
    <div className="GradientCell col-xs col-lg-3">
      <div
        className="vertical-box h-100 m-a-1"
      >
        <div
          {...cssWithClass('m-b-1 w-100', styles.GradientCell)}
          style={{...getGradientStyle(gradient, deg)}}
        >
        </div>
        <div {...css('vertical-box align-items-left text-uppercase', styles.textBox)}>
          <div className="primary-text">{name} </div>
          <div>
            <span className="text-muted m-r-2 text-uppercase">{gradient.start}</span>
            <span className="text-muted text-uppercase">{gradient.end}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = GradientCell;

const styles = StyleSheet.create({
  GradientCell: {
    height: 240,
    minWidth: 300,
    transition: transition.easeOut(),
  },
  textBox: {
    minHeight: 60,
  },
});
