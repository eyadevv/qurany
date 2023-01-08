import Qaricard from "../../../Components/Qaricard"
import Error from "../../../Components/Error"
import { loadQari } from "../../../lib/loadqari"

export async function getStaticProps() {
  const data = await loadQari()
  return {
    props: {
      data,
    },
  }
}
const Index = ({ data }) => {
  if (data) {
    return (
      <div className="w-full h-full flex flex-row justify-center flex-wrap items-center  gap-4">
        {data.map((qari, id) => {
          return (
            <Qaricard
              key={id}
              id={qari.id}
              name={qari.name}
              image={qari.image}
              country={qari.country}
            />
          )
        })}
      </div>
    )
  } else {
    return <Error />
  }
}
export default Index
