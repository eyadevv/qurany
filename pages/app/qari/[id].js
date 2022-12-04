import { useRouter } from "next/router";
import Usernav from "../../../Components/Usernav";
import Surahstable from "../../../Components/Surahstable";
import { loadQari } from "../../../lib/loadqari";
import { loadSurahs } from "../../../lib/loadsurahs";

export async function getServerSideProps() {
  const qari = await loadQari();
  const surahs = await loadSurahs();
  return {
    props: {
      qari,
      surahs,
    },
  };
}
const Qari = ({ qari, surahs }) => {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <Usernav name={qari.name} country={qari.country} imageurl={qari.image} />
      <Surahstable surahs={surahs} />
    </div>
  );
};
export default Qari;
