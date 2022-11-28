import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
const Qari = () => {
  const qariId = useRouter().query.id;
  const availableId = (qariId !== undefined);
  console.log(availableId);
  const query = useQuery(
    ["/qari"],
    () => {
      return fetch(`/api/fetchqari`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ qariId }),
      }).then((res) => res.json());
    },
    { enabled: availableId }
  );
  if (query.isLoading) {
    return <div>Loading...</div>;
  }
  if (query.isError) {
    return <div>Something went wrong</div>;
  }
  if (query.isSuccess) {
    return (
      <div>
        <h1>{query.data.name}</h1>
        <h1>{query.data.country}</h1>
      </div>
    );
  }
};
export default Qari;
