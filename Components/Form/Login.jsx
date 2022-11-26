import { TextField, CircularProgress } from "@mui/material";
import { useState } from "react";
import { Poster } from "../../lib/loader";
import { useRouter } from "next/router";
const Login = ({ setmode }) => {
  const [password, setpassword] = useState(null);
  const [email, setemail] = useState(null);
  const [passerror, setpasserror] = useState(false);
  const [isloading, setisloading] = useState(false);
  const [redirect, setredirect] = useState(false);
  console.log(email, password);
  const handlePass = (pass) => {
    if (pass.length <= 8) {
      setpasserror(true);
    } else {
      setpasserror(false);
      setpassword(pass);
    }
  };
  const data = { email, password };
  redirect ? useRouter().push("/app") : null;

  return (
    <section className="flex flex-col gap-4 items-center">
      <h1>Welcome back</h1>
      <TextField
        id="outlined-basic"
        label="Email or Username"
        variant="outlined"
        focused
        type="email"
        onChange={(e) => setemail(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="password"
        variant="outlined"
        focused
        type="password"
        error={passerror}
        onChange={(e) => handlePass(e.target.value)}
        helperText={passerror ? "Password must be 8 characters long" : ""}
      />
      <button onClick={() => Poster("login", data, setisloading, setredirect)}>
        Login
      </button>
      <button onClick={() => setmode("Register")}>
        Don't have an account?
      </button>
      {isloading ? <CircularProgress /> : null}
    </section>
  );
};
export default Login;
