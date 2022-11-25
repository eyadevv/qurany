import { useState } from "react";
async function fetcher(data) {
  await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data), <h1>{data.message}</h1>)
    .catch((err) => console.log(err));
}
const Signup = ({ setmode }) => {
  const [username, setusername] = useState(null);
  const [email, setemail] = useState(null);
  const [password, setpassword] = useState(null);
  const [repeatedpassword, setrepeatedpassword] = useState(null);
  const data = { username, email, password, repeatedpassword };
  return (
    <div className="flex flex-col justify-center items-start flex-nowrap ">
      <label>username</label>
      <input type="text" onChange={(e) => setusername(e.target.value)} />
      <label>email</label>
      <input type="email" onChange={(e) => setemail(e.target.value)} />
      <label>password</label>
      <input type="password" onChange={(e) => setpassword(e.target.value)} />
      <label>repeat password</label>
      <input
        type="password"
        onChange={(e) => setrepeatedpassword(e.target.value)}
      />
      <div className="w-full flex flex-col justify-center items-center mt-4 gap-1">
        <button
          className="p-4 bg-black text-white rounded-xl"
          onClick={() => fetcher(data)}
        >
          Register
        </button>
        <button onClick={() => setmode("login")}>
          already have an account?
        </button>
      </div>
    </div>
  );
};
export default Signup;
