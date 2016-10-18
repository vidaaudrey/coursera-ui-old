const React = require('react');

const styles = {
  ColorCell: {
    width: 160,
    height: 160,
    borderRadius: '50%',
  }
};


function ColorCell({colors, name, onClick}) {
  const colorName = `${name}500`;
  const color = colors[colorName];
  return (
    <div className="ColorCell col-xs-12 col-sm-4 col-md-3 col-lg-2">
      <div
        className="vertical-box align-items-absolute-center h-100 m-a-1"
      >
        <div
          className="vertical-box align-items-absolute-center"
          onClick={() => (onClick(name))}
          style={{...styles.ColorCell, backgroundColor: color}}
        >
          <span className="text-uppercase color-white">{color} </span>
          <span className="color-white">{name}</span>
        </div>
      </div>
    </div>
  );
}
export default ColorCell;
