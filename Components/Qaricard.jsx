import Image from "next/image"
import Link from "next/link"
const Qaricard = ({ image, name, country, id }) => {
  return (
    <Link
      className="w-60 h-60  text-center flex flex-col justify-start items-center gap-2"
      href={`/app/qari/${id}`}
    >
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="rounded-full w-32 h-32"
      />
      <div>
        <h3 className="font-bold">{name}</h3>
        <p>{country}</p>
      </div>
    </Link>
  )
}
export default Qaricard
