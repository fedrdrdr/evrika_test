// AddApartmentsButton.js
import React, { useState } from 'react';
import Modal from './Modal';

function AddApartmentsButton({ addApartments }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="add-apartments-button">
      <button onClick={toggleModal}>Добавить</button>
      {isOpen && <Modal addApartments={addApartments} toggleModal={toggleModal} />}
    </div>
  );
}

export default AddApartmentsButton;
