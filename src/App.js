// import logo from './logo.svg';
// import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ItemList } from './components/ItemList';

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <Navbar/>
      <Hero/>
      <ItemList/>
    </div>
  );
}

export default App;
