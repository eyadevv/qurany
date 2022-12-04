import { FaPause, FaForward, FaBackward, FaPlay } from "react-icons/fa";
import ReactHowler from "react-howler";
import { PlayerContext } from "../context/PlayerContext";
import { useContext } from "react";
const Player = () => {
  const { state, dispatch } = useContext(PlayerContext);
  const { playing, current, currentsurah, surahslist } = state;
  const url = "http://localhost:3000/api/stream/1";
  return (
    <div className="w-5/6 h-20  rounded-xl  flex flex-col justify-around items-center ml-4  bg-gradient-to-r from-red-700 to-red-900 ">
      {currentsurah ? (
        <h1>{currentsurah}</h1>
      ) : (
        <h1>Click on any surah to start play</h1>
      )}
      <div className="w-max flex flex-row justify-between items-center gap-4">
        <FaBackward
          onClick={() =>
            dispatch({
              type: "PREV",
            })
          }
        />
        {playing ? (
          <FaPause
            onClick={() =>
              dispatch({
                type: "PAUSE",
              })
            }
          />
        ) : (
          <FaPlay
            onClick={() =>
              dispatch({
                type: "PLAY",
              })
            }
          />
        )}
        <FaForward
          onClick={() =>
            dispatch({
              type: "NEXT",
            })
          }
        />
        <ReactHowler
          html5
          format={[".mp3", "mp3"]}
          src={url}
          playing={playing}
          volume={0.2}
        />
      </div>
    </div>
  );
};
export default Player;
