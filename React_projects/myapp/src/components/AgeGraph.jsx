import React, { useState } from 'react';
import './AgeGraph.css';

function AgeGraph() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [people, setPeople] = useState([
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 40 },
    { name: 'Charlie', age: 60 }
  ]);

  // Handle adding a new person and age
  const handleAddPerson = (e) => {
    e.preventDefault();
    if (!age || isNaN(age)) return;

    setPeople([...people, { name: name || `Person ${people.length + 1}`, age: Number(age) }]);
    setName('');
    setAge('');
  };

  return (
    <div className="graph-container">
      <h3>Person Age Bar Graph</h3>

      {/* Form to enter data */}
      <form onSubmit={handleAddPerson} className="age-form">
        <input 
          type="text" 
          placeholder="Enter Name (optional)" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Enter Age" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
          required 
          min="1"
          max="120"
        />
        <button type="submit">Add Age</button>
      </form>

      {/* Graph Area */}
      <div className="bar-graph">
        {people.map((person, index) => {
          // Multiply age by a scaling factor (e.g., 5px per year) to control bar length
          const barWidth = person.age * 5; 

          return (
            <div key={index} className="bar-row">
              <span className="person-label">{person.name} ({person.age} yrs)</span>
              
              {/* Disabled text field acting as the bar graph element */}
              <input 
                type="text" 
                disabled 
                className="disabled-bar"
                style={{ width: `${barWidth}px` }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AgeGraph;