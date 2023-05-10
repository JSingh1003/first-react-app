import logo from "./logo.svg";
import "./App.css";
import BlogCard from "./BlogCard";
import { isArrayEmpty } from "./Utils";
import { useState } from "react";

function App() {
  const [showBlogs, setShowBlogs] = useState(true);

  const blogArr = [
    {
      id: 1,
      title: "Blog Title 1",
      description:
        "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
    },
    ,
    {
      id: 2,
      title: "Blog Title 2",
      description:
        "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
    },
    ,
    {
      id: 3,
      title: "Blog Title 3",
      description:
        "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
    },
  ];

  const blogCards = isArrayEmpty(blogArr)
    ? []
    : blogArr.map((item, pos) => {
        return (
          <BlogCard
            key={pos}
            title={item.title}
            description={item.description}
            id={item.id}
          />
        );
      });

  const onHideBtnClick = () => {
    setShowBlogs(!showBlogs);
  };

  return (
    <div className="App">
      <button onClick={onHideBtnClick}>
        {showBlogs ? "Hide List" : "Show List"}
      </button>
      <br></br>
      {showBlogs ? blogCards : null}
    </div>
  );
}

export default App;
