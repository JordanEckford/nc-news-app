import { createContext, useState } from "react";

export const UsernameContext = createContext();

export const UsernameProvider = ({ children }) => {
 const [username, setUsername] = useState(null);

 return <UsernameContext.Provider value={{ username, setUsername }}>{children} </UsernameContext.Provider>;
};