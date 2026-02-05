import './App.css';
import Navbar from './components/Navbar';
import Items from './components/Items';
import { bikes, cars } from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1 className="mainhead">EXPLORE ALL CATEGORIES</h1>
      <Items title="Cars" products={cars}/>
      <Items title="Bikes" products={bikes}/>
    </div>
  );
}

export default App;
