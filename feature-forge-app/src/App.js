import React, { useState } from 'react';
import './App.css';

function App() {
  const [features, setFeatures] = useState([]); // Array of features with votes
  const [newFeature, setNewFeature] = useState(''); // Input value

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newFeature.trim()) {
      setFeatures([...features, { text: newFeature, votes: 0 }]);
      setNewFeature('');
    }
  };

  const handleVote = (index, change) => {
    const updatedFeatures = features.map((feature, i) =>
      i === index ? { ...feature, votes: feature.votes + change } : feature
    );
    setFeatures(updatedFeatures);
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
          <li key={index}>
            {feature.text} (Votes: {feature.votes})
            <button className="upvote" onClick={() => handleVote(index, 1)}>👍 Upvote</button>
            <button className="downvote" onClick={() => handleVote(index, -1)}>👎 Downvote</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;