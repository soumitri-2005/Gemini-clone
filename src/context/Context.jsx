import { createContext } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const onSent = async (prompt) => {
        await runChat(prompt);
    }

    onSent("What is react js?");

    const contextValue = {

    }

    return (
        <Context.Provider value={contextValue}>
            {props.chidren}
        </Context.Provider>
    )
}

export default ContextProvider;