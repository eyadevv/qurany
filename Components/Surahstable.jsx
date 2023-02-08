import { TableBody, TableCell, TableHead, TableRow, Table } from "@mui/material"
import { useContext, useEffect } from "react"
import { PlayerContext } from "../context/PlayerContext"
const Surahstable = ({ surahs }) => {
  const { setactive, setsurahslist } = useContext(PlayerContext)
  useEffect(() => {
    setsurahslist(() => surahs)
  }, [])

  return (
    <div className="w-full h-[40vh] flex justify-center items-center flex-shrink overflow-scroll bg-yellow-900 ">
      <Table
        sx={{
          color: "white",
          backgroundColor: "transparent",
          width: "100%",
          height: "100%",
          flexShrink: "inherit",
          overflow: "scroll",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "white" }}>id</TableCell>
            <TableCell sx={{ color: "white" }}>Name</TableCell>
            <TableCell sx={{ color: "white" }}>ArabicName</TableCell>
            <TableCell sx={{ color: "white" }}>Ayahs</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {surahs.map((surah, key) => {
            const { id, name, ayahs, arabicName } = surah
            return (
              <TableRow key={key} onClick={() => setactive(() => id)}>
                <TableCell sx={{ color: "white", border: "none" }}>
                  {id}
                </TableCell>
                <TableCell sx={{ color: "white", border: "none" }}>
                  {name}
                </TableCell>
                <TableCell
                  sx={{ color: "white", border: "none", direction: "rtl" }}
                >
                  {arabicName}
                </TableCell>
                <TableCell sx={{ color: "white", border: "none" }}>
                  {ayahs}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
export default Surahstable
