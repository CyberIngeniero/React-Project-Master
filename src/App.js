import './css/App.css';
import { useState } from 'react';
import { Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Home from './screens/Home';
import Profile from './components/Profile';

function App() {
  const [inputText, setInputText] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));

  function SearchText(inputText) {
    setInputText(inputText);
  }

  return (
    <div className='App'>
      <Navbar Token={token} setToken={setToken}/>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home SearchText={SearchText} inputText={inputText} token={token}/>} />
          <Route path='/login' element={<Login setToken={setToken} />} />
          <Route path='/profile' element={<Profile token={token}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
