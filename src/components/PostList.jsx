import Post from "./Post";

const Posts = [
  {
    user: "@User1",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusamus, hic a, incidunt minima suscipit, praesentium nam omnis aliquid ducimus repudiandae placeat! Dolores quos iusto quidem excepturi. Amet, cumque quae!",
    created: Date.now() - 1000 * 60 * 60 * 24 * 3,
    likes: 25,
    comments: 15,
    image: "https://robohash.org/user1",
  },
  {
    user: "@User2",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusamus, hic a, incidunt minima suscipit, praesentium nam omnis aliquid ducimus repudiandae placeat! Dolores quos iusto quidem excepturi. Amet, cumque quae!",
    created: Date.now() - 1000 * 60 * 60 * 24 * 4,
    likes: 10,
    comments: 100,
    image: "https://robohash.org/user2",
  },
  {
    user: "@User3",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusamus, hic a, incidunt minima suscipit, praesentium nam omnis aliquid ducimus repudiandae placeat! Dolores quos iusto quidem excepturi. Amet, cumque quae!",
    created: Date.now() - 1000 * 60 * 60 * 24 * 5,
    likes: 155,
    comments: 30,
    image: "https://robohash.org/user3",
  },
  {
    user: "@User4",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusamus, hic a, incidunt minima suscipit, praesentium nam omnis aliquid ducimus repudiandae placeat! Dolores quos iusto quidem excepturi. Amet, cumque quae!",
    created: Date.now() - 1000 * 60 * 60 * 24 * 6,
    likes: 30,
    comments: 30,
    image: "https://robohash.org/user4",
  },
];

function PostList() {
  return (
    <div className="d-flex flex-wrap p-5">
      {Posts.map((post, index) => (
        <Post
          key={index}
          user={post.user}
          message={post.message}
        //   created={post.created}
          likes={post.likes}
          comments={post.comments}
          img={post.image}
        />
      ))}
    </div>
  );
}

export default PostList;
