import React from 'react';
import Modal from 'react-modal';
const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, .9)',
      zIndex: 1000,
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '95%', 
      maxWidth: '100%',
      height:'500px',
      maxHeight: '100vh',
      padding: '20px',
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      borderRadius: '24px 24px 0 0',
      border:'none'
    },
  };

const PopupBox = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Popup Box"
      style={customStyles}
    >
      {children}
    </Modal>
  );
};

export default PopupBox;
