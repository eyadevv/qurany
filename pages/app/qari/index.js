import { useQuery } from "@tanstack/react-query";
const index = () => {
  const query = useQuery(["/app"], () => {
    return fetch("/api/qari").then((res) => res.json());
  });
  const { data, isLoading, isError, isSuccess } = query;
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Something went wrong</div>;
  }
  if(isSuccess) {
    return (
      <div >
        {data.map((qari, id) => {
          return <h1 key={id}>{qari.name}</h1>;
        })}
      </div>
    );
  }



};
export default index;
