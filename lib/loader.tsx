import axios from "axios";

export const Poster = async (mode, data, isloding, redirect) => {
  const url = `/api/${mode}`;
  isloding(true);
  await axios
    .post(url, data)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      isloding(false);
      redirect(true);
    });
};

export const Getter = async (url) => {
  await axios
    .get(url)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
