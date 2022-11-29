import { useState } from "react";
import { FaPause, FaForward, FaBackward, FaPlay } from "react-icons/fa";
import ReactHowler from "react-howler";
const Player = () => {
  const [playing, setplaying] = useState(false);
  const url = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3";
  return (
    <div className="w-5/6 h-20  rounded-xl flex flex-row justify-center items-center ml-4  bg-gradient-to-r from-red-700 to-red-900">
      <div className="w-max flex flex-row justify-between items-center gap-4">
        <FaBackward />
        {playing ? (
          <FaPause onClick={() => setplaying(false)} />
        ) : (
          <FaPlay onClick={() => setplaying(true)} />
        )}
        <FaForward />
        <ReactHowler src={url} playing={playing} />
      </div>
    </div>
  );
};
export default Player;
