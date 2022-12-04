import { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";
const BUCKET = new AWS.S3({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    sessionToken: process.env.AWS_SESSION_TOKEN,
  },
});
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const params = {
      Bucket: process.env.AWS_BUCKET,
      Key: "./stream/1-1.mp3",
    };
    const s3Stream = BUCKET.getObject(params);
    res.status(200).setHeader("Content-Type", "audio/mpeg");
    s3Stream.createReadStream().pipe(res);
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "Not found" });
  }
}
