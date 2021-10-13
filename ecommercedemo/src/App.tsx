import React from 'react';
import AngGuiNavBar from './AngGui/nav-bar/ang-gui-nav-bar';
import './App.css';
import { store, history} from './store';
function App() {
  return (
    <div className="App">
      <AngGuiNavBar/>
    </div>
  );
}

export default App;
