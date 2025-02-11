import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="upperSide">
          <img src="" alt="" className="logo" />
          <span className="brand">ChatGPT</span>
          <button className="midbtn">
            <img src="" alt="" className="addbtn" />
            New Chat
          </button>
          <div className="sidebottom">
            <button className="query">
              <img src="" alt="" className="" />
              What is programming?
            </button>
            <button className="query">
              <img src="" alt="" className="" />
              What is Web Development?
            </button>
          </div>
        </div>
        <div className="lowerSide"></div>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default App;
