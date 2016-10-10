const React = require('react');
import {isPaletteColorDark} from './storyUtils';

const styles = {
  PaletteCell: {
    width: 500,
    height: 200,
  }
};


function PaletteCell({color, name, onClick}) {
  const isColorDark = isPaletteColorDark(color);
  const textColorClass = isColorDark ? 'color-white' : 'color-black';

  return (
    <div className="PaletteCell col-xs-6 col-sm-3 col-xl" style={{...styles.PaletteCell, backgroundColor: color}}>
      <div className="vertical-box h-100 p-a-1" onClick={() => (onClick(name))}>
        <span className={`flex-1 ${textColorClass} text-uppercase`}>{color}</span>
        <span className={`${textColorClass} text-uppercase`}>{name}</span>
      </div>
    </div>
  );
}

PaletteCell.propTypes = {
  color: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
}

export default PaletteCell;
