import { useQuery } from "@tanstack/react-query";
import Loader from "../../Components/Loader";
const App = () => {
  const query = useQuery(["/app"], () => {
    return fetch("/api/qari").then((res) => res.json());
  });
  const { data, isLoading, isError } = query;

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <div>Something went wrong</div>;
  }
  if (data[0]) {
    return (
      <main className="w-full h-full flex justify-center items-center">
        <h1>Welcome to the feed</h1>
      </main>
    );
  }
};
export default App;
