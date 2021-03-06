import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [names, setNames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios.get('/data/names.json')
      .then(res => {
        setIsLoaded(true);
        setNames(res.data.names);
      });
  })

  if (!isLoaded) {
    return <div>now loading...</div>
  } else {
    return (
      <div>
        <ul>
          {names.map(name => (
            <li key={name.id}>{name.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
