import logo from "./logo.svg";
import "./App.css";
import BlogCard from "./BlogCard";
import { isArrayEmpty } from "./Utils";
import { useState, useEffect } from "react";

const initBlogArr = [
  {
    id: 1,
    title: "Blog Title 1",
    description:
      "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
    likeCount: 0,
  },
  ,
  {
    id: 2,
    title: "Blog Title 2",
    description:
      "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
    likeCount: 0,
  },
  ,
  {
    id: 3,
    title: "Blog Title 3",
    description:
      "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
    likeCount: 0,
  },
];

function App() {
  const [showBlogs, setShowBlogs] = useState(true);
  const [blogArr, setBlogArr] = useState(initBlogArr);

  const onLikeBtnClick = (id) => {
    const newBlogArr = blogArr.map((blog, i) => {
      if (blog.id === id) {
        blog.likeCount++;
        return blog;
      }
      return blog;
    });
    setBlogArr(newBlogArr);
  };

  const blogCards = isArrayEmpty(blogArr)
    ? []
    : blogArr.map((item, pos) => {
        return (
          <BlogCard
            key={pos}
            title={item.title}
            description={item.description}
            id={item.id}
            likeCount={item.likeCount}
            onLikeBtnClick={() => onLikeBtnClick(item.id)}
          />
        );
      });

  const onHideBtnClick = () => {
    setShowBlogs(!showBlogs);
  };

  useEffect(() => {
    console.log("Mount");
    return () => {
      console.log("Dis Mount");
    };
  }, [blogArr]);

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
