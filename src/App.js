import logo from "./logo.svg";
import "./App.css";
import BlogCard from "./BlogCard";
import { isArrayEmpty } from "./Utils";

function App() {
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

  return <div className="App">{blogCards}</div>;
}

export default App;
