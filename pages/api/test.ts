import axios from "axios";
import { createReadStream, createWriteStream } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  axios
    .get("https://www.youtube.com/watch?v=NK7fqhAwJm0")
    .then((data) => {
      //   const stream = createReadStream(data);
      //   res.setHeader("Content-Type", "video/mp4");
      //   stream.pipe(res);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: "error" });
    });
}
