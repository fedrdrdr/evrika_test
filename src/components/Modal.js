import React, { useState } from 'react';

const entrances = ['Подъезд 1', 'Подъезд 2', 'Подъезд 3', 'Подъезд 4', 'Подъезд 5', 'Подъезд 6']; 

const apartmentsByEntrance = {
  'Подъезд 1': ["Квартира 1", "Квартира 2", "Квартира 3", "Квартира 4", "Квартира 5" ,"Квартира 6"],
  'Подъезд 2': ["Квартира 1", "Квартира 2", "Квартира 3", "Квартира 4", "Квартира 5" ,"Квартира 6"],
  'Подъезд 3': ["Квартира 1", "Квартира 2", "Квартира 3", "Квартира 4", "Квартира 5" ,"Квартира 6"],
  'Подъезд 4': ["Квартира 1", "Квартира 2", "Квартира 3", "Квартира 4", "Квартира 5" ,"Квартира 6"],
  'Подъезд 5': ["Квартира 1", "Квартира 2", "Квартира 3", "Квартира 4", "Квартира 5" ,"Квартира 6"],
  'Подъезд 6': ["Квартира 1", "Квартира 2", "Квартира 3", "Квартира 4", "Квартира 5" ,"Квартира 6"],
}; 

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
        </div>
        <select value={selectedEntrance} onChange={handleEntranceChange}>
          <option value="">Номер подъезда</option>
          {entrances.map((entrance, index) => (
            <option key={index} value={entrance}>{entrance}</option>
          ))}
        </select>
        {selectedEntrance && (
          <>
            <h3>Номер квартиры</h3>
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
              <button onClick={handleAddButtonClick}>Добавить</button>
            </div>
            
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
