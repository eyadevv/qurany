import { useQuery } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";
const App = () => {
  const query = useQuery(["/app"], () => {
    return fetch("/api/qari", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ qariId: 1 }),
    }).then((res) => res.json());
  });
  const { data, isLoading, isError, isSuccess } = query;

  if (isLoading) {
    return (
      <div className="max-w-[80vw] h-36 flex flex-row justify-start items-center overflow-scroll gap-4 rounded-xl">
        <CircularProgress />
        <CircularProgress />
        <CircularProgress />
      </div>
    );
  }
  if (isError) {
    return <div>Something went wrong</div>;
  }
  if (isSuccess) {
    return (
      <main className="max-w-full">
        <div className="max-w-[80vw] h-36 flex flex-row justify-start items-center overflow-scroll gap-4 rounded-xl">
          {/* {data.map((qari, id) => {
            return <h1 key={id}>{qari.name}</h1>;
          })} */}
          <h1>Success</h1>
        </div>
      </main>
    );
  }
};
export default App;
