import { useQuery } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";
const fetcher = async (url) => {
  return fetch(url).then((res) => res.json());
};
const Sheik = ({ name }) => {
  return (
    <div className="w-56 h-20 flex justify-center items-center bg-red-500 m-4">
      <h1>{name}</h1>
    </div>
  );
};
const playlist = () => {
  const query = useQuery(["qari"], () => fetcher("/api/qari"));
  console.log(query.data);
  return (
    <section>
      <h1>qari</h1>
      {query.isLoading ? (
        <CircularProgress />
      ) : (
        query.data?.map((qari) => {
          return <Sheik name={qari.name} />;
        })
      )}
    </section>
  );
};
export default playlist;
