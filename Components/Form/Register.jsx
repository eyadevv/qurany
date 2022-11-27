import { TextField, CircularProgress } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import { Poster } from "../../lib/loader";
const Register = ({ setmode }) => {
  const [pass, setpass] = useState(null);
  const [passerror, setpasserror] = useState(false);
  const [repass, setrepass] = useState(null);
  const [repasserror, setrepasserror] = useState(false);
  const [email, setemail] = useState(null);
  const [user, setuser] = useState(null);
  const [isloading, setisloading] = useState(false);
  const [redirect, setredirect] = useState(false);
  const handlePass = (pass) => {
    if (pass.length <= 8) {
      setpasserror(true);
    } else {
      setpasserror(false);
      setpass(pass);
    }
  };
  const handleRepass = (repass) => {
    setrepass(repass);
    if (repass !== pass) {
      setrepasserror(true);
    } else {
      setrepasserror(false);
    }
  };
  const data = { user, email, pass, repass };
  redirect ? useRouter().push("/app") : null;
  try {
    return (
      <section className="flex flex-col justify-center items-center gap-4 ">
        <h1>Welcome</h1>
        <TextField
          variant="outlined"
          label="username"
          placeholder="username"
          type="text"
          focused
          onChange={(e) => setuser(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="email"
          type="email"
          placeholder="example@email.com"
          focused
          onChange={(e) => setemail(e.target.value)}
        />
        <TextField
          variant="outlined"
          label="password"
          type="password"
          placeholder="password"
          focused
          error={passerror}
          onChange={(e) => handlePass(e.target.value)}
          helperText={passerror ? "Password must be 8 characters long" : ""}
        />
        <TextField
          variant="outlined"
          label="repeat password"
          placeholder="repeat password"
          focused
          type="password"
          error={repasserror}
          onChange={(e) => handleRepass(e.target.value)}
          helperText={repasserror ? "Passwords don't match" : ""}
        />
        <button
          onClick={() => Poster("register", data, setisloading, setredirect)}
        >
          Register
        </button>
        <button onClick={() => setmode("login")}>
          Already have an account
        </button>
        {isloading === true ? <CircularProgress color="success" /> : null}
      </section>
    );
  } catch (error) {
    console.log(error);
  }
};
export default Register;
