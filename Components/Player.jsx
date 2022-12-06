import ReactHowler from "react-howler";
import { useState, useRef, useEffect, useContext } from "react";
import {
  MdPlayCircleFilled,
  MdPauseCircleFilled,
  MdSkipNext,
  MdSkipPrevious,
  MdRepeat,
  MdRepeatOne,
  MdShuffle,
  MdHeadphones,
} from "react-icons/md";

import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  ChakraProvider,
} from "@chakra-ui/react";
import { PlayerContext } from "../context/PlayerContext";
const Player = () => {
  const SoundRef = useRef(null);
  const [playing, setplaying] = useState(false);
  const [seek, setseek] = useState(0);
  const [duration, setduration] = useState(0);
  const [shuffle, setshuffle] = useState(false);
  const [repeat, setrepeat] = useState(false);
  const [seeking, setseeking] = useState(false);
  const { active, setactive, surahslist } = useContext(PlayerContext);
  useEffect(() => {
    let id;
    if (playing && !seeking && SoundRef.current) {
      const animate = () => {
        setseek(SoundRef.current.seek());
        id = requestAnimationFrame(animate);
      };
      id = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(id);
    }
    cancelAnimationFrame(id);
  }, [playing, seeking]);

  const handleseek = (e) => {
    setseek(e[0]);
    SoundRef.current.seek(e[0]);
  };
  const HrMinSec = (time) => {
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time % 3600) / 60);
    let seconds = Math.floor(time % 60);
    return `${hours}:${minutes}:${seconds}`;
  };
  const MinSec = (time) => {
    if (time === 0) {
      return "0:00";
    } else {
      let minutes = Math.floor(time / 60);
      let seconds = Math.floor(time % 60);
      return `${minutes}:${seconds}`;
    }
  };

  const url = `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${
    active + 1
  }.mp3`;

  if (active && surahslist) {
    return (
      <ChakraProvider>
        <div className="w-11/12 bg-black h-36  flex flex-col justify-start items-center">
          <hr className="w-20 h-1 bg-white rounded-xl" />
          <div className="w-11/12 flex flex-row justify-between items-center">
            {surahslist ? <h1>{surahslist[active - 1].name}</h1> : null}
            <p>X</p>
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <RangeSlider
              aria-label={["min", "max"]}
              width="80%"
              max={duration}
              onChange={(e) => handleseek(e)}
              value={[seek]}
              onChangeStart={() => setseeking(true)}
              onChangeEnd={() => setseeking(false)}
            >
              <RangeSliderTrack bg="red.100">
                <RangeSliderFilledTrack />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={3} index={0}></RangeSliderThumb>
            </RangeSlider>
            <div className="w-4/5 flex flex-row justify-between items-between">
              {seek > 3600 ? <p>{HrMinSec(seek)}</p> : <p>{MinSec(seek)}</p>}
              {duration > 3600 ? (
                <p>{HrMinSec(duration)}</p>
              ) : (
                <p>{MinSec(duration)}</p>
              )}
            </div>
          </div>

          <div className="w-4/5 flex flex-row justify-between items-center ">
            {repeat ? (
              <MdRepeatOne size="30" onClick={() => setrepeat(false)} />
            ) : (
              <MdRepeat size="30" onClick={() => setrepeat(true)} />
            )}
            <div className="flex flex-row justify-center items-center gap-2 ">
              <MdSkipPrevious
                size="40"
                onClick={() =>
                  active <= 1
                    ? setactive(surahslist.length)
                    : setactive(() => active - 1)
                }
              />
              {playing ? (
                <MdPauseCircleFilled
                  size="40"
                  onClick={() => setplaying(false)}
                />
              ) : (
                <MdPlayCircleFilled
                  size="40"
                  onClick={() => setplaying(true)}
                />
              )}
              <MdSkipNext
                size="40"
                onClick={() =>
                  active >= surahslist.length
                    ? setactive(0)
                    : setactive(() => active + 1)
                }
              />
            </div>
            {shuffle ? (
              <MdShuffle size="30" onClick={() => setshuffle(false)} />
            ) : (
              <MdShuffle
                size="30"
                opacity={0.5}
                onClick={() => setshuffle(true)}
              />
            )}
          </div>

          <ReactHowler
            ref={SoundRef}
            src={url}
            format={["mp3", ".mp3"]}
            playing={playing}
            volume={0.1}
            onLoad={() => setduration(SoundRef.current.duration())}
            html5={true}
            preload={true}
          />
        </div>
      </ChakraProvider>
    );
  } else {
    return (
      <div className="flex flex-row gap-4 justify-center items-center">
        <h1>Click Any SUrah To Start Play</h1>
        <MdHeadphones size="40" />
      </div>
    );
  }
};
export default Player;
