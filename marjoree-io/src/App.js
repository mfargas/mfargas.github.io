import './App.css';
import Header from './components/Header.js'
import {useState} from 'react';

function App(props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Header isMenuOpen={isMenuOpen} />
        
      </header>
    </div>
  );
  }

export default App;
