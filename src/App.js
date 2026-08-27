// import logo from './logo.svg';
// import './App.css';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ItemList } from './components/ItemList';
import { Calculator } from './components/Calculator';
function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      {/* <Navbar/>
      <Hero/>
      <ItemList/> */}
      <Calculator/>
    </div>
  );
}

export default App;
