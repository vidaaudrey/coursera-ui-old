const React = require('react');
const Modal = require('react-modal');

class CSVImportModal extends React.Component {


  render() {
    const {handleClose} = this.props;
    return (
      <Modal
        isOpen
        onAfterOpen={() => {}}
        onRequestClose={handleClose}
        closeTimeoutMS={3000}
        style={{}}
        contentLabel="Modal"
      >
        <h1>Modal Content</h1>
        <p>Etc.</p>
        <button onClick={handleClose}> Close </button>
      </Modal>
    );
  }
}

module.exports = CSVImportModal;
