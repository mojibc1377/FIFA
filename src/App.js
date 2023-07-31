import * as React from 'react';
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
import ChallengePage from './pages/mosabeqat';
import ContactUs from './pages/ContactUs';
import ChallengeForm from './component/challengeForm';
import Settings from './component/Settings';
import CurrentAcceptedChallenges from './pages/currentAcceptedChallenge';
import ChallengeDetailPage from './component/challengeDetails';
import MyChallenges from './component/mychallenges';


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
          <Route path='/coins/buy' element={<KharidCoin/>}/>
          <Route path='/coins/sell' element={<FurushCoin/>}/>
          <Route path='/panel' element={<Dashbord/>}/>
          <Route path='/panel/challenges/current' element={<CurrentAcceptedChallenges/>}/>
          <Route path ='/panel/challenges/my' element={<MyChallenges/>} />
          <Route path='/challenges' element={<ChallengePage/>}/>
          <Route path="/challenge-detail/:challengeId" element={<ChallengeDetailPage/>}/>
          <Route path='/challenges/new' element={<ChallengeForm/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>

      </Routes>
     </div>

  );
}

export default App;
