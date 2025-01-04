import React, { useContext } from "react";
import "./main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <div>
          <p>Gemini</p>
        </div>
        <div className="nav-right">
          <div class="toggle-switch">
            <input className="toggle-input" id="toggle" type="checkbox" />
            <label className="toggle-label" for="toggle"></label>
          </div>
          <img src={assets.user_icon} alt="" />
        </div>
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Soumitri.</span>
              </p>
              <p>How can i help you today?</p>
            </div>
            <div className="cards">
              <div
                onClick={() =>
                  onSent("Suggest some beautiful and royal places in India.")
                }
                className="card"
              >
                <p>Suggest some beautiful and royal places in India.</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div
                onClick={() =>
                  onSent("Easy exercises to sharp mind and healthy heart.")
                }
                className="card"
              >
                <p>Easy exercises to sharp mind and healthy heart.</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div
                onClick={() =>
                  onSent("Write me a leave application for college.")
                }
                className="card"
              >
                <p>Write me a leave application for college.</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div
                onClick={() =>
                  onSent("Give me a step by step guid to learn React easily.")
                }
                className="card"
              >
                <p>Give me a step by step guid to learn React easily.</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="reult-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini can make mistakes. Visit the help section for more info.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
