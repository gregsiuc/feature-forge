import React, { useState } from 'react';
import './App.css';

function App() {
  const [features, setFeatures] = useState([]); // Array for submitted features
  const [newFeature, setNewFeature] = useState(''); // Input field value

  const handleSubmit = (e) => {
    e.preventDefault(); // Stops page reload
    if (newFeature.trim()) { // Only add if not empty
      setFeatures([...features, { text: newFeature, votes: 0 }]);
      setNewFeature(''); // Reset input
    }
  };

  return (
    <div className="App">
      <h1>Feature Forge</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newFeature}
          onChange={(e) => setNewFeature(e.target.value)}
          placeholder="Suggest a feature..."
        />
        <button type="submit">Submit</button>
      </form>
      <h2>Submitted Features</h2>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature.text} (Votes: {feature.votes})</li>
        ))}
      </ul>
    </div>
  );
}

export default App;