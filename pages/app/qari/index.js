import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
const Index = () => {
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
  if (isSuccess) {
    return (
      <div>
        {data.map((qari, id) => {
          return (
            <Link href={`/app/qari/${qari.id}`}>
              <h1 key={id}>{qari.name}</h1>
            </Link>
          );
        })}
      </div>
    );
  }
};
export default Index;
