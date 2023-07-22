import './App.css';
import Header from './component/Header';
import SideBar from './component/SideBar';
import KharidCoin from './pages/coinBuy';
import FurushCoin from './pages/coinSell';
import { Routes, Route } from 'react-router-dom';
import Coins from './component/coins';
import HomePage from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/signup';
import Dashbord from './pages/dashbord';

function App() {
  return (
    <div className="App">
      <Header/>
      <SideBar/>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/coins' element={<Coins/>}/>
          <Route path='/panel' element={<Dashbord/>}/>
          <Route path='/coins/buy' element={<KharidCoin/>}/>
          <Route path='/coins/sell' element={<FurushCoin/>}/>


      </Routes>
    </div>
  );
}

export default App;
