import React, { useState } from 'react';
import './AgeGraph.css';

function AgeGraph() {
  const [ages, setAges] = useState({
    person1: '',
    person2: '',
    person3: ''
  });
  
  // State to track whether the graph should be visible
  const [showGraph, setShowGraph] = useState(false);

  const handleAgeChange = (person, value) => {
    setAges({
      ...ages,
      [person]: value
    });
  };

  return (
    <div className="graph-container">
      <h3>Person Age Bar Graph</h3>

      {/* Separate input text fields to enter age */}
      <div className="inputs-section">
        <div className="input-row">
          <label>Person 1 Age:</label>
          <input 
            type="number" 
            value={ages.person1} 
            onChange={(e) => handleAgeChange('person1', e.target.value)} 
            placeholder="Enter age"
          />
        </div>

        <div className="input-row">
          <label>Person 2 Age:</label>
          <input 
            type="number" 
            value={ages.person2} 
            onChange={(e) => handleAgeChange('person2', e.target.value)} 
            placeholder="Enter age"
          />
        </div>

        <div className="input-row">
          <label>Person 3 Age:</label>
          <input 
            type="number" 
            value={ages.person3} 
            onChange={(e) => handleAgeChange('person3', e.target.value)} 
            placeholder="Enter age"
          />
        </div>
      </div>

      {/* Button to show/hide the graph */}
      <button onClick={() => setShowGraph(!showGraph)} className="toggle-btn">
        {showGraph ? 'Hide Graph' : 'Show Graph'}
      </button>

      {/* Graph Area - only appears when showGraph is true */}
      {showGraph && (
        <div className="bar-graph-section">
          <hr className="divider" />
          <div className="bar-graph">
            <div className="bar-row">
              <span className="person-label">Person 1</span>
              <input 
                type="text" 
                disabled 
                className="disabled-bar"
                style={{ width: `${(Number(ages.person1) || 0) * 4}px` }}
                value={ages.person1 ? `${ages.person1} yrs` : ''}
              />
            </div>

            <div className="bar-row">
              <span className="person-label">Person 2</span>
              <input 
                type="text" 
                disabled 
                className="disabled-bar"
                style={{ width: `${(Number(ages.person2) || 0) * 4}px` }}
                value={ages.person2 ? `${ages.person2} yrs` : ''}
              />
            </div>

            <div className="bar-row">
              <span className="person-label">Person 3</span>
              <input 
                type="text" 
                disabled 
                className="disabled-bar"
                style={{ width: `${(Number(ages.person3) || 0) * 4}px` }}
                value={ages.person3 ? `${ages.person3} yrs` : ''}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AgeGraph;