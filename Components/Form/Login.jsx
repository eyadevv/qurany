import { TextField, Button } from "@mui/material";
import { useState } from "react";
const Login = ({ setmode }) => {
  const [password, setpassword] = useState(null);
  const [email, setemail] = useState(null);
  const [passerror, setpasserror] = useState(false);
  console.log(email, password);
  const handlePass = (pass) => {
    if (pass.length <= 8) {
      setpasserror(true);
    } else {
      setpasserror(false);
      setpassword(pass);
    }
  };
  const handleSubmit = async () => {
    await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <section className="flex flex-col gap-4 items-center">
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
      <button onClick={() => handleSubmit()}>Login</button>
      <button onClick={() => setmode("Register")}>
        Don't have an account?
      </button>
    </section>
  );
};
export default Login;
