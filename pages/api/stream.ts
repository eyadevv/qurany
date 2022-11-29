import { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";
const S3 = new AWS.S3({
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
    // const files = await S3.listObjectsV2({
    //   Bucket: process.env.BUCKET,
    // }).promise();
    // res.status(200).json({ files });

    // delete all files in bucket
    const files = await S3.listObjectsV2({
      Bucket: process.env.BUCKET,
    }).promise();

    res.status(200).json({ files });
  } catch (error) {
    console.log(error);
  }
}
