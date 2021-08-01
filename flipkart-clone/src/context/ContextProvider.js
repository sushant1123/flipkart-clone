import { createContext, useState } from "react";

export const LoginContext = createContext(null);

const ContextProvider = (props) => {
    const [account, setAccount] = useState("");

    return (
        <LoginContext.Provider value={{ account, setAccount }}>
            {props.children}
        </LoginContext.Provider>
    );
};

export default ContextProvider;
