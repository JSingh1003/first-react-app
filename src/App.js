import logo from "./logo.svg";
import "./App.css";

function App() {
  const blogObj = {
    title: "Blog Title",
    description:
      "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
  };

  return (
    <div className="App">
      <div>
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p>
      </div>
      <hr></hr>
      <div>
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p>
      </div>
      <hr></hr>
      <div>
        <h3>{blogObj.title}</h3>
        <p>{blogObj.description}</p>
      </div>
    </div>
  );
}

export default App;
