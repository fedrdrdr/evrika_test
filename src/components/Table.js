import React, { useState } from 'react';
import AddApartmentsButton from './AddApartmentsButton';

function Table({ apartments, clearApartments, houseNumber }) {
  // Функция для удаления дубликатов номеров квартир для каждого подъезда
  const removeDuplicates = (apartments) => {
    const uniqueApartments = {};
    apartments.forEach((apartment) => {
      if (!uniqueApartments[apartment.entrance]) {
        uniqueApartments[apartment.entrance] = new Set();
      }
      apartment.flatNumbers.forEach((flatNumber) => {
        uniqueApartments[apartment.entrance].add(flatNumber);
      });
    });
    return Object.keys(uniqueApartments).map((entrance) => ({
      entrance,
      flatNumbers: Array.from(uniqueApartments[entrance]),
    }));
  };

  const uniqueApartments = removeDuplicates(apartments);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddApartments = (selectedApartments) => {
    const updatedApartments = [...apartments, ...selectedApartments];

    clearApartments(updatedApartments);
    setIsModalOpen(false);
  };

  return (
    <div className="table">
      <table style={{width:"358px"}}>
        <thead>
          <tr >
            <th>Номер подъезда</th>
            <th>Номер квартиры</th>
          </tr>
        </thead>
        <tbody>
          {uniqueApartments.map((apartment, index) => (
            <tr key={index}>
              <td>{apartment.entrance}</td>
              <td>{apartment.flatNumbers.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <AddApartmentsButton
          addApartments={handleAddApartments}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default Table;
