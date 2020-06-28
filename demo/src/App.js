import React from 'react';
import Menu from 'animation-menu';

function App() {
  return (
    <div className="App">
      <Menu color="green" onClick={() => console.log('Menu clicked')} />
    </div>
  );
}

export default App;
