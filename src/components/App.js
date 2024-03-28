// App.js
import React, { useState } from 'react';
import Table from './Table';
import AddApartmentsButton from './AddApartmentsButton';

function App() {
  const [apartments1, setApartments1] = useState([]);
  const [apartments2, setApartments2] = useState([]);
  const [apartments3, setApartments3] = useState([]);
  const [apartments4, setApartments4] = useState([]);

  const clearApartments = (setApartments) => {
    setApartments([]);
  };

  return (
    <div className="app">
      <div style={{margin:"10px"}}>
        <AddApartmentsButton addApartments={(selectedApartments) => setApartments1([...apartments1, ...selectedApartments])} />
        <Table apartments={apartments1} houseNumber={1} clearApartments={() => clearApartments(setApartments1)} />
      </div>
      
      <div>
        <AddApartmentsButton addApartments={(selectedApartments) => setApartments2([...apartments2, ...selectedApartments])} />
        <Table apartments={apartments2} houseNumber={2} clearApartments={() => clearApartments(setApartments2)} />
      </div>
      
      <div>
        <AddApartmentsButton addApartments={(selectedApartments) => setApartments3([...apartments3, ...selectedApartments])} />
        <Table apartments={apartments3} houseNumber={3} clearApartments={() => clearApartments(setApartments3)} />
      </div>
      
      <div>
        <AddApartmentsButton addApartments={(selectedApartments) => setApartments4([...apartments4, ...selectedApartments])} />
        <Table apartments={apartments4} houseNumber={4} clearApartments={() => clearApartments(setApartments4)} />
      </div>
    </div>
  );
}

export default App;
