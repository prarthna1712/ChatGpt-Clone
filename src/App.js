import "./App.css";
import gptlogo from "../src/assets/chatgpt.svg";
import addBtn from "../src/assets/add-30.png";
import msgIcon from "../src/assets/message.svg";
import home from "../src/assets/home.svg";
import saved from "../src/assets/bookmark.svg";
import rocket from "../src/assets/rocket.svg";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptlogo} alt="logo" className="logo" />
            <span className="brand">ChatGPT</span>

            <button className="midbtn">
              <img src={addBtn} alt="Newchat" className="addbtn" />
              New Chat
            </button>
          </div>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="query" /> What is programming?
            </button>
            <button className="query">
              <img src={msgIcon} alt="query" />
              What is Web Development?
            </button>
          </div>
        </div>

        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listItemImg" />
            Home
            <img src={saved} alt="" className="listItemImg" />
            Saved
            <img src={rocket} alt="" className="listItemImg" />
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className="main">
        <h1>Main Content</h1>
      </div>
    </div>
  );
}

export default App;
