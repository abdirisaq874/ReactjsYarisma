import './App.css';
import { Navbar } from './Components';
import { Films } from './Components/Films/Films';
import { Header } from './Components/Header/Header';
// import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Films/>
    </div>
  );
}

export default App;
