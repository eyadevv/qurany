import { useState } from "react";
async function fetcher(data) {
  await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
const Login = ({ mode, setmode }) => {
  const [user, setuser] = useState(null);
  const [password, setpassword] = useState(null);
  const data = { user, password };
  return (
    <div className="flex flex-col justify-center items-start">
      <label>email or username</label>
      <input type="text" onChange={(e) => setuser(e.target.value)} />
      <label>password</label>
      <input type="password" onChange={(e) => setpassword(e.target.value)} />
      <div className="w-full flex flex-col justify-center items-center mt-4">
        <button
          className="p-4 bg-black text-white rounded-xl"
          onClick={() => fetcher(data)}
        >
          Login
        </button>
        <button onClick={() => setmode("register")}>
          don't have an account?
        </button>
      </div>
    </div>
  );
};
export default Login;
