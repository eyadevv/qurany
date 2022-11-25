import Signup from "../Components/Form/Signup";
import Login from "../Components/Form/Login.jsx";
import { useState } from "react";

const Welcome = () => {
  const [mode, setmode] = useState("register");
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <h1>Welcome to Next.js!</h1>
      <section className="border-4 border-black w-96 h-5/6 flex flex-col justify-center items-center rounded-xl">
        {mode === "register" ? (
          <Signup setmode={setmode} mode={mode} />
        ) : (
          <Login setmode={setmode} mode={mode} />
        )}
      </section>
    </main>
  );
};
Welcome.exclude = true;
export default Welcome;
