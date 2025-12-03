import React from "react";
import Hello from "../components/hello";

const Home = () => {
  console.log("WHAT AM I");
  return (
    <main>
      <Hello />
      <div className="text-5xl underline">Welcome to Next.js!</div>
    </main>
  );
};

export default Home;
