import { createContext, useReducer } from "react";
const Reducer = (state, action) => {
  const payload = action.payload;
  switch (action.type) {
    case "PLAY":
      return { ...state, playing: true };
    case "PAUSE":
      return { ...state, playing: false };
    case "NEXT":
      return { ...state, current: state.current + 1 };
    case "PREV":
      return { ...state, current: state.current - 1 };
    case "SETCURRENT":
      return { ...state, current: payload.id, currentsurah: payload.name };
    case "SURAHSLIST":
      return { ...state, surahslist: payload.surahs };
    default:
      return state;
  }
};
const PlayerContext = createContext();
const PlayerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, {
    playing: false,
    showplayer: false,
    current: 0,
    currentsurah: null,
    surahslist: [],
  });
  return (
    <PlayerContext.Provider value={{ state, dispatch }}>
      {children}
    </PlayerContext.Provider>
  );
};
export { PlayerContext, PlayerProvider };
