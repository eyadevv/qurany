import Image from "next/image";
const Usernav = ({ imageurl, name, country }) => {
  if (imageurl && name && country) {
    return (
      <div className="w-full h-max flex flex-row justify-start items-center p-4 gap-2">
        {imageurl ? (
          <Image src={imageurl} alt={name} width="150" height="150" />
        ) : null}
        <h1 className="text-2xl font-bold">{name}</h1>
        <h2>{country}</h2>
      </div>
    );
  } else {
    return <h1>error loading qari</h1>;
  }
};
export default Usernav;
