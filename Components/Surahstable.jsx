import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Table,
} from "@mui/material";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
const Surahstable = ({ surahs }) => {
  const { dispatch } = useContext(PlayerContext);
  return (
    <div className="w-full">
      <Table
        sx={{
          color: "white",
          backgroundColor: "transparent",
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
        <TableBody>
          {surahs.map((surah, key) => {
            const { id, name, ayahs, place } = surah;
            return (
              <TableRow
                key={key}
                onClick={() =>
                  dispatch({
                    type: "SETCURRENT",
                    payload: {
                      id,
                      name,
                    },
                  })
                }
              >
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
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
export default Surahstable;
