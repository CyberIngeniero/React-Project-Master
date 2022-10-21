import PostList from "../components/PostList";
import SearchBar from "../components/Searchbar";

function Home({SearchText, inputText, token}) {
    return (
        <div className="Home">
            <SearchBar SearchText={SearchText} />
            <PostList post={inputText} token={token}/>
        </div>
    )
}
export default Home;