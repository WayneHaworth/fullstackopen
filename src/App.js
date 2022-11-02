import axios from "axios";
import React from "react";

const client = axios.create({
  baseURL: "https://fakestoreapi.com/products",
});

const Post = ({ title, category, image }) => {
  return (
    <div>
      <img width="40" src={image} alt={title} />
      <h1>{title}</h1>
      <p>{category}</p>
    </div>
  );
};

const App = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    client.get("/").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const shortlist = posts.slice(0, 5);

  return (
    <div>
      {shortlist.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          category={post.category}
          image={post.image}
        />
      ))}
    </div>
  );
};

export default App;
