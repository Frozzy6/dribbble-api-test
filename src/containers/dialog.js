import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { closeDialog } from '../actions';
import DialogContent from '../components/DialogContent';


const mapStateToProps = ({dialog}) => {
  const { isOpen, item = {} } = dialog;
  return { isOpen, item };
};

const mapDispatchToProps = (dispatch, props) => ({
  onRequestClose: () =>  dispatch(closeDialog())
});


const Dialog = function(props) {
    class ReduxDialog extends Component {
      render(){
        const {isOpen, ...rest} = this.props;
        if ( isOpen ) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
        return (
          <Modal isOpen={isOpen} className="app-modal" overlayClassName="app-overlay">
            <DialogContent {...rest}/>
          </Modal>
        )
      }

    }

    return connect(mapStateToProps, mapDispatchToProps)(ReduxDialog)
}

export default Dialog(DialogContent);
