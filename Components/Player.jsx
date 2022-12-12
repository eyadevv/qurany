import { useContext } from "react";
import { MdHeadphones, MdClear } from "react-icons/md";

import { PlayerContext } from "../context/PlayerContext";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const Player = () => {
  const { active, setactive, surahslist } = useContext(PlayerContext);

  const url = `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${
    active + 1
  }.mp3`;

  if (active && surahslist) {
    return (
      <div className="w-11/12 bg-black h-36  flex flex-col justify-start items-center">
        <hr className="w-20 h-1 bg-white rounded-xl" />
        <div className="w-11/12 flex flex-row justify-between items-center">
          {surahslist ? <h1>{surahslist[active - 1].name}</h1> : null}
          <MdClear onClick={() => setactive(false)} />
        </div>
        <AudioPlayer
          src={url}
          onPlay={() => console.log("onPlay")}
          layout="stacked"
          onClickNext={() => {
            if (active < surahslist.length) {
              setactive(() => active + 1);
            } else {
              setactive(() => 1);
            }
          }}
          onClickPrevious={() => {
            if (active > 1) {
              setactive(() => active - 1);
            } else {
              setactive(() => surahslist.length);
            }
          }}
          showSkipControls={true}
          showJumpControls={false}
          showFilledVolume={true}
        />
      </div>
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
