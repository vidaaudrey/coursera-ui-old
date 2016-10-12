const React = require('react');

const styles = {
  GradientCell: {
    width: 320,
    height: 240,
  },
  textBox: {
    width: 320,
  }
};

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
        className="vertical-box align-items-absolute-center h-100 m-a-1"
      >
        <div
          className="vertical-box align-items-absolute-center m-b-1"
          style={{...styles.GradientCell, ...getGradientStyle(gradient, deg)}}
        >
        </div>
        <div className="vertical-box align-items-left text-uppercase" style={styles.textBox}>
          <div className="primary-text">{name} </div>
          <div>
            <span className="text-muted m-r-2">{gradient.start}</span>
            <span className="text-muted">{gradient.end}</span>
          </div>
        </div>
      </div>
    </div>
  );
}


export default GradientCell;
