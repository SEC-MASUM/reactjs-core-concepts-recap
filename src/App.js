import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="NuaKhali" spacial="bivag"></District>
      <District name="Bramonbaria" spacial="joddha Akbor"></District>
      <District name="Sumilla" spacial="moyna and moti"></District>
    </div>
  );
}

function LoadPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/users/1/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1>Posts: {posts.length}</h1>
      {posts.map((post) => (
        <Post title={post.title} body={post.body}></Post>
      ))}
    </div>
  );
}
function Post(props) {
  return (
    <div
      style={{
        backgroundColor: "lightcyan",
        margin: "20px",
        border: "4px solid salmon",
      }}
    >
      <h2>Title: {props.title}</h2>
      <hp>Body: {props.body}</hp>
    </div>
  );
}

const districtStyle = {
  backgroundColor: "orange",
  margin: "20px",
  padding: "10px",
  borderRadius: "5px",
};

function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  };

  return (
    <div style={districtStyle}>
      <h3>Name: {props.name}</h3>
      <p>Specialty: {props.spacial}</p>
      <h2>Power: {power}</h2>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  );
}

export default App;
