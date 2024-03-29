// App.js
import React, { useState } from 'react';
import Table from './Table';
import AddApartmentsButton from './AddApartmentsButton';

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
            <AddApartmentsButton addApartments={(selectedApartments) => addApartments(house.number, selectedApartments)} />
            <button onClick={() => clearApartments(house.number)}>Очистить</button>
          </div>
          <Table apartments={house.apartments} houseNumber={house.number} clearApartments={() => clearApartments(house.number)} />
        </div>
      ))}
    </div>
  );
}

export default App;
