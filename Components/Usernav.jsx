import Image from "next/image"
import Error from "./Error"
const Usernav = ({ imageurl, name, country }) => {
  if (imageurl && name && country) {
    return (
      <div className="w-full h-max flex flex-row justify-start items-center p-4 gap-2">
        {imageurl ? (
          <Image src={imageurl} alt={name} width="150" height="150" />
        ) : null}
        <h2 className="text-2xl font-bold">{name}</h2>
        <h2>{country}</h2>
      </div>
    )
  } else {
    return <Error />
  }
}
export default Usernav
