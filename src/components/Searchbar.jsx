import { useState } from 'react';
import '../css/Searchbar.css';

function SearchBar({ SearchText }) {
  const [text, SetText] = useState({
    Text: '',
  });

  function inputHandler(event) {
    SetText({
      ...text,
      [event.target.name]: event.target.value,
    });

    SearchText(event.target.value);
  }

  return (
    <div className='search-bar mt-3' id='search-bar-container'>
      <input type='text' placeholder='Search...' name='Text' onChange={inputHandler} />
    </div>
  );
}

export default SearchBar;
