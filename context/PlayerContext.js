import { createContext, useReducer, useState } from "react";
const PlayerContext = createContext();
const PlayerProvider = ({ children }) => {
  const [surahslist, setsurahslist] = useState(null);
  const [active, setactive] = useState(0);

  return (
    <PlayerContext.Provider
      value={{ surahslist, setsurahslist, active, setactive }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
export { PlayerContext, PlayerProvider };
