import "./App.css";
import gptlogo from "../src/assets/chatgpt.svg";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptlogo} alt="logo" className="logo" />
            <span className="brand">ChatGPT</span>
            <button className="midbtn">New Chat</button>
          </div>
          <div className="upperSideBottom">
            <button className="query">What is programming?</button>
            <button className="query">What is Web Development?</button>
          </div>
        </div>
        <div className="lowerSide">
          <p>Lower Sidebar Content</p>
        </div>
      </div>
      <div className="main">
        <h1>Main Content</h1>
      </div>
    </div>
  );
}

export default App;
