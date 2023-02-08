import Usernav from "../../../Components/Usernav"
import Surahstable from "../../../Components/Surahstable"
import { loadQari } from "../../../lib/loadqari"
import { loadSurahs } from "../../../lib/loadsurahs"
import Error from "../../../Components/Error"

export async function getStaticPaths() {
  const qari = await loadQari()
  let paths
  if (qari) {
    paths = qari.map((qari) => ({
      params: { id: qari.id.toString() },
    }))
  } else {
    paths = []
  }

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const qari = await loadQari(params.id)
  const surahs = await loadSurahs(params.id)
  return {
    props: {
      qari,
      surahs,
    },
  }
}
// { qari, surahs }
const Qari = () => {
  // if (qari && surahs) {
  const qari = {
    name: "islam subhi",
    country: "Egypt",
    imageurl: null,
  }
  const surahs = [
    {
      id: 1,
      name: "alfatiha",
      ayahs: "7",
      arabicName: "الفاتحة",
    },
    {
      id: 1,
      name: "alfatiha",
      ayahs: "7",
      arabicName: "الفاتحة",
    },
    {
      id: 1,
      name: "alfatiha",
      ayahs: "7",
      arabicName: "الفاتحة",
    },
    {
      id: 1,
      name: "alfatiha",
      ayahs: "7",
      arabicName: "الفاتحة",
    },
    {
      id: 1,
      name: "alfatiha",
      ayahs: "7",
      arabicName: "الفاتحة",
    },
    {
      id: 1,
      name: "alfatiha",
      ayahs: "7",
      arabicName: "الفاتحة",
    },
    {
      id: 1,
      name: "alfatiha",
      ayahs: "7",
      arabicName: "الفاتحة",
    },
    {
      id: 1,
      name: "alfatiha",
      ayahs: "7",
      arabicName: "الفاتحة",
    },
  ]
  return (
    <div className="w-full h-max flex flex-col justify-start items-center overflow-scroll">
      <Usernav
        name={qari.name}
        country={qari.country}
        imageurl={qari.imageurl}
      />
      <Surahstable surahs={surahs} />
    </div>
  )
  // } else {
  //   return <Error />
  // }
}
export default Qari
