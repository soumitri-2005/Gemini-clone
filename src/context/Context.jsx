import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState(""); // to save input data
  const [recentPrompt, setRecentPrompt] = useState(""); // after clicking on sent btn the input data will save on recent prompt and it will display on main component
  const [prevPrompts, setPrevPrompts] = useState([]); // for input history and it will diaplay on recent tab
  const [showResult, setShowresult] = useState(false); // once it is true it will hide the main component and show the chat
  const [loading, setLoading] = useState(false); // for loading animation
  const [resultData, setResultData] = useState(""); // display the result data

  const delayPara = (index, nextWord) => {

  }

  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowresult(true);
    setRecentPrompt(input);
    const response = await runChat(input);
    // for text styling
    let responseArray = response.split("**");
    let newResponse;
    for (let i = 0; i < responseArray.length; i++) {
        if(i === 0 || i%2 !== 1) {
            newResponse += responseArray[i];
        } else {
            newResponse += "<b>" + responseArray[i] + "</b>"
        }
    }
    let newResponse2 = newResponse.split("*").join("</br>");
    setResultData(newResponse2);
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
