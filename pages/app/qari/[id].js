import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import Usernav from "../../../Components/Usernav";
import PlayerContext from "../../../Context/PlayerConext";
import Surahstable from "../../../Components/Surahstable";
const Qari = () => {
  const player = useContext(PlayerContext);
  const qariId = useRouter().query.id;
  const availableId = qariId !== undefined;
  const qari = useQuery(
    ["/qari"],
    () => {
      return fetch(`/api/fetchqari`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ qariId }),
      }).then((res) => res.json());
    },
    { enabled: availableId }
  );
  const surahs = useQuery(
    ["/surahs"],
    () => {
      return fetch("/api/surahs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ qariId }),
      }).then((res) => res.json());
    },
    { enabled: availableId }
  );
  return (
    <div className="w-full h-full overflow-scroll ">
      {qari.isLoading ? (
        <Usernav name="loading" country="" />
      ) : (
        <Usernav
          imageurl={qari.data.image}
          name={qari.data.name || "qari not found"}
          country={qari.data.country || "try again later"}
        />
      )}
      {surahs.isLoading ? (
        <div>loading</div>
      ) : (
        <Surahstable surahs={surahs.data} />
      )}
    </div>
  );
};
export default Qari;
