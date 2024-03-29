import React, { useState } from 'react';
import Table from './Table';
import AddApartmentsButton from './AddApartmentsButton';
import DeleteIcon from '../icons/DeleteIcon';

function App() {
  const [houses, setHouses] = useState([
    { number: 1, apartments: [] },
    { number: 2, apartments: [] },
    { number: 3, apartments: [] },
    { number: 4, apartments: [] },
  ]);

  const clearApartments = (houseNumber) => {
    setHouses(prevHouses => prevHouses.map(house => {
      if (house.number === houseNumber) {
        return { ...house, apartments: [] };
      }
      return house;
    }));
  };

  const addApartments = (houseNumber, selectedApartments) => {
    setHouses(prevHouses => prevHouses.map(house => {
      if (house.number === houseNumber) {
        return { ...house, apartments: [...house.apartments, ...selectedApartments] };
      }
      return house;
    }));
  };

  return (
    <div className="app">
      {houses.map(house => (
        <div key={house.number} className="block">
          <div className="table-header">
            <h2>Дом: {house.number}</h2>
            <div className='buttons'>
              <AddApartmentsButton addApartments={(selectedApartments) => addApartments(house.number, selectedApartments)} />
              <button className="button" onClick={() => clearApartments(house.number)}><DeleteIcon /> </button>
            </div>
          </div>
          <Table apartments={house.apartments} houseNumber={house.number} clearApartments={() => clearApartments(house.number)} />
        </div>
      ))}
    </div>
  );
}

export default App;
