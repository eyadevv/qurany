import { NextApiRequest, NextApiResponse } from "next"
import AWS from "aws-sdk"
const BUCKET = new AWS.S3({
  endpoint: process.env.B2_ENDPOINT,
  region: process.env.B2_REGION,
  accessKeyId: process.env.B2_KEY,
  secretAccessKey: process.env.B2_SECRET,
})
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // get all the chapters after the last / in the url
  const id = req.url.split("/")
  const filename = id[id.length - 1]
  console.log(filename)

  try {
    const params = {
      Bucket: process.env.B2_BUCKET_NAME,
      Key: `${filename}.mp3`,
    }
    const s3Stream = BUCKET.getObject(params)
    res.status(200).setHeader("Content-Type", "audio/mpeg")
    s3Stream.createReadStream().pipe(res)
  } catch (err) {
    res.status(404).json({ message: "Not found" })
  }
}
