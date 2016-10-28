const React = require('react');

const _t = t => t;

const Dropzone = require('react-dropzone');

class FileUploadWidget extends React.Component {
  static propTypes = {
    onDrop: React.PropTypes.func,
    defaultMessage: React.PropTypes.string,
    children: React.PropTypes.node,
    accept: React.PropTypes.string,
  }

  static defaultProps = {
    defaultMessage: _t('Choose a file to upload'),
    accept: '.csv', // Not 'text/csv'
  }

  state = {
    files: [],
  }

  onDrop = (files) => {
    this.setState({files});
    if (this.props.onDrop) {
      this.props.onDrop({files});
    }
  }
  onOpenClick = () => {
    this.dropzone.open();
  }

  render() {
    const {defaultMessage, accept} = this.props;

    return (
      <div className="rc-FileUploadWidget">
        <Dropzone
          onDrop={this.onDrop}
          className="dropzone vertical-box align-items-absolute-center"
          accept={accept}
          ref={r => (this.dropzone = r)}
        >
          <div>Try dropping some files here, or click to select files to upload.</div>
          {defaultMessage}
          {this.props.children}
        </Dropzone>
        {this.state.files.length > 0 &&
          <div>
            <h2>Uploading {this.state.files.length} files...</h2>
            <div>
              {this.state.files.map((file, index) =>
                <span key={index}>{index} {file.name}</span>)
              }
            </div>
          </div>
        }
      </div>
    );
  }
}

module.exports = FileUploadWidget;
