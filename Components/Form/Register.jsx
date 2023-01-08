import formauth from "../../lib/formauth";
import { TextField } from "@mui/material";
const Register = ({ data }) => {
  const {
    email,
    setemail,
    pass,
    setpass,
    username,
    setusername,
    repass,
    setrepass,
  } = data;
  return (
    <section className="flex flex-col gap-3">
      <TextField
        focused
        label="username"
        type="text"
        onChange={(e) => setusername(e.target.value)}
      />
      <TextField
        focused
        label="email"
        type="email"
        onChange={(e) => setemail(e.target.value)}
      />
      <TextField
        focused
        label="password"
        type="password"
        onChange={(e) => setpass(e.target.value)}
      />
      <TextField
        focused
        label="password"
        type="password"
        onChange={(e) => setrepass(e.target.value)}
      />
      <button
        onClick={() => formauth("join", { email, username, pass, repass })}
      >
        Submit
      </button>
    </section>
  );
};
export default Register;
