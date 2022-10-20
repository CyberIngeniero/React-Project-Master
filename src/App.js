import './css/App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/Searchbar';
import PostList from './components/PostList';
import Login from './components/Login';

function App() {
  const [inputText, setInputText] = useState('');
  const [token, setToken] = useState(localStorage.getItem('token'));

  function SearchText(inputText) {
    setInputText(inputText);
  }

  return (
    <div className='App'>
      <div className='container'>
        {token ? (
          <>
            <Navbar />
            <SearchBar SearchText={SearchText} />
            <PostList post={inputText}/>
          </>
        ) : (
          <Login setToken={setToken} />
        )}
      </div>
    </div>
  );
}

export default App;
