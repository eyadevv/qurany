const Surahstable = ({ surahs }) => {
  return (
    <div className="w-full h-[70vh] overflow-scroll bg-black gap-2">
      {surahs.map((surah, key) => {
        const { id, name, ayahs, place } = surah;
        return (
          <div
            key={key}
            className="w-full h-8  flex flex-row justify-between p-4"
          >
            <h1>{id}</h1>
            <h1>{name}</h1>
            <h1>{ayahs}</h1>
            <h1>{place}</h1>
          </div>
        );
      })}
    </div>
  );
};
export default Surahstable;
