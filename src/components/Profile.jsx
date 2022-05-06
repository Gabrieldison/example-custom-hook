import React from "react";
import usePath from "../hooks/usePath";

export default function Profile() {
  const { isHome } = usePath();

  return (
    <div>
      <h1>Profile</h1>
      {isHome ? <h2> você está na home</h2> : <h2> você não está na home</h2>}
    </div>
  );
}
