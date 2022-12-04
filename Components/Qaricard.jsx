import Image from "next/image";
import Link from "next/link";
const Qaricard = ({ image, name, country, id }) => {
  return (
    <Link
      className="w-max h-56  flex flex-col justify-between items-center p-4"
      href={`/app/qari/${id}`}
    >
      <Image
        src={image}
        alt={name}
        width="160"
        height="160"
        className="rounded-full"
      />
      <div>
        <h1>{name}</h1>
        <h2>{country}</h2>
      </div>
    </Link>
  );
};
export default Qaricard;
