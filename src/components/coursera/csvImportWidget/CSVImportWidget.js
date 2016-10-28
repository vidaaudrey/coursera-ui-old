const React = require('react');

const _t = t => t;

const CSVImportModal = require('src/components/coursera/csvImportWidget/CSVImportModal');

class CSVImportWidget extends React.Component {
  static propTypes = {
    apiManager: React.PropTypes.object.isRequired,
  }

  state = {
    showCSVImportModal: false,
  }

  showCSVImportModal = () => {
    this.setState({showCSVImportModal: true});
  }

  hideCSVImportModal = () => {
    this.setState({showCSVImportModal: false});
  }

  render() {
    const { apiManager } = this.props;
    return (
      <div className="rc-CSVImportWidget horizontal-box align-items-vertical-center">
        <button
          type="button"
          className="primary submit-btn"
          onClick={this.showCSVImportModal}
        >
          {_t('Import Members')}
        </button>
        {this.state.showCSVImportModal &&
          <CSVImportModal
            handleClose={this.hideCSVImportModal}
            apiManager={apiManager}
          />
        }
      </div>
    );
  }
}

module.exports = CSVImportWidget;
