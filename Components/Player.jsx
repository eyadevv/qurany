import {
  MdPauseCircle,
  MdArrowForward,
  MdArrowBack,
  MdPlayArrow,
  MdShuffle,
  MdShuffleOn,
  MdRepeat,
  MdRepeatOne,
  MdReplyAll,
} from "react-icons/md";
import ReactHowler from "react-howler";
import { useState, useContext, useRef } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { useEffect } from "react";
const Player = () => {
  const { surahslist, active, setactive } = useContext(PlayerContext);
  const [isplaying, setisplaying] = useState(false);
  const [repeat, setrepeat] = useState(false);
  const [shuffle, setshuffle] = useState(false);
  const [duration, setduration] = useState(0);
  const [seek, setseek] = useState(0);
  const [isseeking, setisseeking] = useState(false);
  const soundRef = useRef(null);
  const url = `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${active}.mp3`;

  const handleseek = (e) => {
    setseek(() => e.target.value);
    soundRef.current.seek(e.target.value);
    setisseeking(() => false);
  };
  useEffect(() => {
    let Timeid;
    if (isplaying && !isseeking) {
      const update = () => {
        setseek(() => soundRef.current.seek());
        Timeid = requestAnimationFrame(update);
      };
      Timeid = requestAnimationFrame(update);
      return () => cancelAnimationFrame(Timeid);
    } else {
      cancelAnimationFrame(Timeid);
    }
  }, [isplaying, isseeking]);

  if (!surahslist || !active) {
    return null;
  } else {
    return (
      <div className="w-5/6 h-32 bg-red-700 rounded-t-xl flex flex-col justify-start items-center ">
        <hr className="w-20 h-1 bg-white mt-1" />
        <div className="w-11/12 flex flex-row justify-between items-center ">
          <h1 className="text-xl font-bold">{surahslist[active - 1].name}</h1>
        </div>
        <div className="w-11/12 flex justify-center items-center ">
          {Math.floor(seek / 60)}:{Math.floor(seek % 60)}
          <input
            type="range"
            min={0}
            max={duration}
            value={seek}
            onChange={(e) => handleseek(e)}
          />
          {Math.floor(duration / 60)}:{Math.floor(duration % 60)}
        </div>
        <div className="w-11/12 h-max  flex lfex-row justify-between items-center">
          {shuffle ? (
            <MdShuffleOn size="30" onClick={() => setshuffle(false)} />
          ) : (
            <MdShuffle size="30" onClick={() => setshuffle(true)} />
          )}
          <div className="flex flex-row ">
            <MdArrowBack
              size="30"
              onClick={() =>
                active > 1
                  ? setactive(() => active - 1)
                  : setactive(() => surahslist.length)
              }
            />
            {isplaying ? (
              <MdPauseCircle size="30" onClick={() => setisplaying(false)} />
            ) : (
              <MdPlayArrow size="30" onClick={() => setisplaying(() => true)} />
            )}
            <MdArrowForward
              size="30"
              onClick={() =>
                active < surahslist.length
                  ? setactive(() => active + 1)
                  : setactive(() => 1)
              }
            />
          </div>

          {repeat ? (
            <MdRepeatOne size="30" onClick={() => setrepeat(false)} />
          ) : (
            <MdRepeat size="30" onClick={() => setrepeat(true)} />
          )}
        </div>

        <ReactHowler
          ref={soundRef}
          src={url}
          playing={isplaying}
          html5={true}
          format={["mp3", ".mp3"]}
          volume={0.1}
          loop={repeat}
          onEnd={() =>
            repeat ? setactive(() => active) : setactive(active + 1)
          }
          onLoad={() => setduration(soundRef.current.duration())}
        />
      </div>
    );
  }
};
export default Player;
