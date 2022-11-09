import './App.css';
import About from './components/About';
import ClientData from './components/ClientData';
import Header from './components/header';
import Menu from './components/Menu';
import Price from './components/Price';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Shop />
      <Menu />
      <ClientData />
      <Price />
    </div>
  );
}

export default App;
