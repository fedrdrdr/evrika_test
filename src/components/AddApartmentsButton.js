// AddApartmentsButton.js
import React, { useState } from 'react';
import Modal from './Modal';
import AddIcon from '../icons/AddIcon';

function AddApartmentsButton({ addApartments }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div >
      <button onClick={toggleModal} className="button"><AddIcon /></button>
      {isOpen && <Modal addApartments={addApartments} toggleModal={toggleModal} />}
    </div>
  );
}

export default AddApartmentsButton;
