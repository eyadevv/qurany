import { useQuery } from "@tanstack/react-query";
import Loader from "../../../Components/Loader";
import Qaricard from "../../../Components/Qaricard";
const Index = () => {
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
      <div className="w-full h-full flex flex-row justify-center items-center overflow-scroll gap-4">
        {data.map((qari, id) => {
          return (
            <Qaricard
              key={id}
              id={qari.id}
              name={qari.name}
              image={qari.image}
              country={qari.country}
            />
          );
        })}
      </div>
    );
  }
};
export default Index;
