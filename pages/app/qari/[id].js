import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import Usernav from "../../../Components/Usernav";
import Surahstable from "../../../Components/Surahstable";
import Loader from "../../../Components/Loader";
import { loadQari } from "../../../lib/loadqari";
import { loadSurahs } from "../../../lib/loadsurahs";
// const Qari = () => {
//   const qariId = useRouter().query.id;
//   const availableId = qariId !== undefined;
//   const qari = useQuery(
//     ["/qari"],
//     () => {
//       try {
//         return fetch(`/api/fetchqari`, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ qariId }),
//         }).then((res) => res.json());
//       } catch (error) {
//         throw new Error(error);
//       }
//     },
//     { enabled: availableId }
//   );
//   const surahs = useQuery(
//     ["/surahs"],
//     () => {
//       try {
//         return fetch("/api/surahs", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ qariId }),
//         }).then((res) => res.json());
//       } catch (error) {
//         throw new Error(error);
//       }
//     },
//     { enabled: availableId }
//   );
//   if (qari.isLoading || surahs.isLoading) {
//     return <Loader />;
//   } else {
//     if (!qari.data.name || !surahs.data[0]) {
//       return (
//         <div className="w-full h-full flex justify-center items-center">
//           <h1>Error Fecthing Data</h1>
//         </div>
//       );
//     } else {
//       return (
//         <div className="w-full h-full flex flex-col justify-start items-center">
//           <Usernav
//             name={qari.data.name}
//             country={qari.data.country}
//             imageurl={qari.data.image}
//           />
//           <Surahstable surahs={surahs.data} />
//         </div>
//       );
//     }
//   }
// };
// export default Qari;

// prerender this page
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
  console.log(qari);
  return (
    <div className="w-full h-full flex flex-col justify-start items-center">
      <Usernav name={qari.name} country={qari.country} imageurl={qari.image} />
      <Surahstable surahs={surahs} />
    </div>
  );
};
export default Qari;
