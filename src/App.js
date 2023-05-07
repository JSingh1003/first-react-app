import logo from "./logo.svg";
import "./App.css";

function App() {
  const firstName = "John";
  const lastName = "Wick";
  const age = 28;
  const job = "Loving Husband";

  const inputPlaceholder = "Enter Your Details";
  const detailsInputBox = (
    <input placeholder={inputPlaceholder} autoComplete></input>
  );

  const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
  };
  return (
    <div className="App">
      <h3>Full Name: {getFullName(firstName, lastName)} </h3>
      <p>Age: {age}</p>
      <p>Job: {job}</p>

      {detailsInputBox}
    </div>
  );
}

export default App;
