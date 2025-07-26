import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <div className="content">
        <About image={blogData.image} about={blogData.about} />
        <ArticleList posts={blogData.posts} />
      </div>
    </div>
  );
}

export default App;