import { useState, createContext } from "react";

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lan, setLan] = useState("es");

  return <LanguageContext.Provider value={{ lan, setLan }}>{children}</LanguageContext.Provider>;
};
