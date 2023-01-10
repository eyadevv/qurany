import { useContext } from "react"
import { MdHeadphones, MdClear } from "react-icons/md"

import { PlayerContext } from "../context/PlayerContext"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import { useRouter } from "next/router"
const Player = ({ state }) => {
  const qari = useRouter().query.id
  const { active, setactive, surahslist } = useContext(PlayerContext)
  const url = `/api/stream/${qari}-${active}`

  if (active && surahslist) {
    return (
      <div className="w-11/12 bg-black h-36  flex flex-col justify-start items-center rounded-t-xl">
        <hr className="w-20 h-1 bg-white rounded-xl" />
        <div className="w-11/12 flex flex-row justify-between items-center">
          {surahslist ? <p>{surahslist[active - 1].name}</p> : null}
          <MdClear onClick={() => setactive(false)} />
        </div>
        <AudioPlayer
          src={url}
          layout="stacked"
          onClickNext={() => {
            if (active < surahslist.length) {
              setactive(() => active + 1)
            } else {
              setactive(() => 1)
            }
          }}
          onClickPrevious={() => {
            if (active > 1) {
              setactive(() => active - 1)
            } else {
              setactive(() => surahslist.length)
            }
          }}
          showSkipControls={true}
          showJumpControls={false}
          showFilledVolume={true}
        />
      </div>
    )
  } else if (state) {
    return (
      <div className="flex flex-row gap-4 justify-center items-center">
        <h3>Click Any SUrah To Start Play</h3>
        <MdHeadphones size="40" />
      </div>
    )
  } else {
    return null
  }
}
export default Player
