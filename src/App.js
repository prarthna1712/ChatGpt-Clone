import "./App.css";
import gptlogo from "../src/assets/chatgpt.svg";
import addBtn from "../src/assets/add-30.png";
import msgIcon from "../src/assets/message.svg";
import home from "../src/assets/home.svg";
import saved from "../src/assets/bookmark.svg";
import rocket from "../src/assets/rocket.svg";
import sendBtn from "../src/assets/send.svg";
import userIcon from "../src/assets/user-icon.png";
import gptImgLogo from "../src/assets/chatgptLogo.svg";
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
            <span>Home</span>
            <img src={saved} alt="" className="listItemImg" />
            <span> Saved</span>
            <img src={rocket} alt="" className="listItemImg" />
            <span> Upgrade to Pro</span>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img src={userIcon} alt="" /> <p className="txt"></p>
          </div>
          <div className="chat">
            <img src={gptImgLogo} alt="" /> <p className="txt"></p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" name="" id="" placeholder="send a message.." />
            <button className="send">
              {" "}
              <img src={sendBtn} alt="Send" />
            </button>
          </div>
          <p>ChatGPT can make mistakes. Check important info.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
