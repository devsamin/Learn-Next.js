"use client";
import React from "react";

export default function Misson() {
  return (
    <div>
      <div>Misson page</div>

      <button
        onClick={() => console.log("I have click hered")}
        className="mt-3 p-2 bg-green-500 "
      >
        Click Here
      </button>
    </div>
  );
}
