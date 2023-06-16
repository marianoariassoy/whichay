import { useState, createContext } from "react";

export const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lan, setLan] = useState("es");
  const [homeSection, setHomeSection] = useState(true);

  return <LanguageContext.Provider value={{ lan, setLan, homeSection, setHomeSection }}>{children}</LanguageContext.Provider>;
};
