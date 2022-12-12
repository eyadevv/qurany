import { useRouter } from "next/router";
import Usernav from "../../../Components/Usernav";
import Surahstable from "../../../Components/Surahstable";
import { loadQari } from "../../../lib/loadqari";
import { loadSurahs } from "../../../lib/loadsurahs";
import Error from "../../../Components/Error";

// pre-rendering for static generation on Dynamic Routes
export async function getStaticPaths() {
  const qari = await loadQari();
  const paths = qari.map((qari) => ({
    params: { id: qari.id.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const qari = await loadQari(params.id);
  const surahs = await loadSurahs(params.id);
  return {
    props: {
      qari,
      surahs,
    },
  };
}

const Qari = ({ qari, surahs }) => {
  if (qari && surahs) {
    return (
      <div className="w-full h-full flex flex-col justify-start items-center">
        <Usernav
          name={qari.name}
          country={qari.country}
          imageurl={qari.image}
        />
        <Surahstable surahs={surahs} />
      </div>
    );
  } else {
    return <Error />;
  }
};
export default Qari;
