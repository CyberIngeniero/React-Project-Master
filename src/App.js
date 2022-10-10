import './css/App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/Searchbar';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <PostList/>
    </div>
  );
}

export default App;
