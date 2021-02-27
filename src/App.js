import React, { useState, useEffect } from 'react';

function App() {
  const [names, setNames] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch('/data/names.json')
      .then(res => res.json())
      .then(json => {
        setIsLoaded(true);
        setNames(json.names);
      })
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
