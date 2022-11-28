import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Table,
} from "@mui/material";
const Surahstable = ({ surahs }) => {
  return (
    <div className="w-full h-[70vh] overflow-scroll bg-black text-white gap-2 mt-4">
      <Table
        sx={{
          backgroundColor: "transparent",
          color: "white",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "white" }}>id</TableCell>
            <TableCell sx={{ color: "white" }}>Name</TableCell>
            <TableCell sx={{ color: "white" }}>ayat</TableCell>
            <TableCell sx={{ color: "white" }}>type</TableCell>
          </TableRow>
        </TableHead>
        {surahs.map((surah, key) => {
          const { id, name, ayahs, place } = surah;
          return (
            <TableBody key={key}>
              <TableRow>
                <TableCell sx={{ color: "white", border: "none" }}>
                  {id}
                </TableCell>
                <TableCell sx={{ color: "white", border: "none" }}>
                  {name}
                </TableCell>
                <TableCell sx={{ color: "white", border: "none" }}>
                  {ayahs}
                </TableCell>
                <TableCell sx={{ color: "white", border: "none" }}>
                  {place}
                </TableCell>
              </TableRow>
            </TableBody>
          );
        })}
      </Table>
    </div>
  );
};
export default Surahstable;
{
  /* <Table>
<TableHead>
  <TableRow>
    <TableCell>id</TableCell>
    <TableCell>Name</TableCell>
    <TableCell>Ayat</TableCell>
    <TableCell>PLace</TableCell>
  </TableRow>
</TableHead>
<TableBody>
  <TableRow>
    <TableCell>1</TableCell>
    <TableCell>Abdul Basit</TableCell>
    <TableCell>6236</TableCell>
    <TableCell>Makkah</TableCell>
  </TableRow>
</TableBody>
</Table> */
}
