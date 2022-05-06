import React from "react";
import usePath from "../hooks/usePath";

export default function Home() {
  const { isHome } = usePath();

  return (
    <div>
      <h1>home</h1>
      {isHome ? <h2> você está na home</h2> : <h2> você não está na home</h2>}
    </div>
  );
}
