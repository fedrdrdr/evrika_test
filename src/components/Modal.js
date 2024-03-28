import React, { useState } from 'react';

const entrances = ['Подъезд 1', 'Подъезд 2', 'Подъезд 3']; // Список подъездов

const apartmentsByEntrance = {
  'Подъезд 1': [1, 2, 3, 4, 5 ,6],
  'Подъезд 2': [1, 2, 3, 4, 5 ,6],
  'Подъезд 3': [1, 2, 3, 4, 5 ,6],
  'Подъезд 4': [1, 2, 3, 4, 5 ,6],
}; // Список квартир по подъездам

function Modal({ addApartments, toggleModal }) {
  const [selectedEntrance, setSelectedEntrance] = useState('');
  const [selectedApartments, setSelectedApartments] = useState([]);

  const handleEntranceChange = (event) => {
    setSelectedEntrance(event.target.value);
    setSelectedApartments([]);
  };

  const handleApartmentClick = (apartment) => {
    setSelectedApartments((prevSelectedApartments) => [
      ...prevSelectedApartments,
      apartment,
    ]);
  };

  const handleAddButtonClick = () => {
    addApartments(selectedApartments.map((flatNumber) => ({
      entrance: selectedEntrance,
      flatNumbers: [flatNumber],
    })));
    toggleModal();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Выберите подъезд</h2>
          <button onClick={toggleModal}>✕</button>
        </div>
        <select value={selectedEntrance} onChange={handleEntranceChange}>
          <option value="">Выберите подъезд</option>
          {entrances.map((entrance, index) => (
            <option key={index} value={entrance}>{entrance}</option>
          ))}
        </select>
        {selectedEntrance && (
          <>
            <h3>Выберите квартиры</h3>
            <div className="apartments">
              {apartmentsByEntrance[selectedEntrance].map((apartment, index) => (
                <button
                  key={index}
                  onClick={() => handleApartmentClick(apartment)}
                  className={selectedApartments.includes(apartment) ? 'selected' : ''}
                >
                  {apartment}
                </button>
              ))}
            </div>
            <button onClick={handleAddButtonClick}>Добавить</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
