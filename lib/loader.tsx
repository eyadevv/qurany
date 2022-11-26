import axios from "axios";

export const Poster = async (mode, data, isloding, redirect, setmsg) => {
  const url = `/api/${mode}`;
  isloding(true);
  await axios
    .post(url, data)
    .then((res) => {
      console.log("res :", res);
      isloding(false);
      redirect(true);
      setmsg("redirecting...");
    })
    .catch((err) => {
      if (err.response.status === 401) {
        setmsg("invalid credentials");
      } else {
        setmsg("there was an error on our side");
      }
      isloding(false);
    });
};

