import './css/App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/Searchbar';
import PostList from './components/PostList';

function App() {
  const [inputText, setInputText] = useState('');

  function SearchText(inputText) {
    setInputText(inputText);
  }

  return (
    <div className='App'>
      <Navbar />
      <SearchBar SearchText={SearchText}/>
      <PostList post={inputText}/>
    </div>
  );
}

export default App;
