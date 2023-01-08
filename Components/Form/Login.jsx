import formauth from "../../lib/formauth";
import { TextField } from "@mui/material";
const Login = ({ data }) => {
  const { email, setemail, pass, setpass } = data;
  return (
    <section className="flex flex-col gap-3">
      <TextField
        focused
        label="username or email"
        onChange={(e) => setemail(e.target.value)}
      />
      <TextField
        focused
        label="password"
        onChange={(e) => setpass(e.target.value)}
      />
      <button onClick={() => formauth("login", { email, pass })}>Submit</button>
    </section>
  );
};
export default Login;
