import Login from "../Components/Form/Login";
import Register from "../Components/Form/Register";
import { useState } from "react";

const Welcome = () => {
  const [mode, setmode] = useState("Register");
  return (
    <main className="w-screen h-screen flex justify-center items-center bg-black">
      <section className="w-max h-5/6 flex flex-col justify-center items-center p-8 bg-white rounded-xl ">
        {mode === "Register" ? (
          <Register setmode={setmode} />
        ) : (
          <Login setmode={setmode} />
        )}
      </section>
    </main>
  );
};
Welcome.exclude = true;
export default Welcome;
