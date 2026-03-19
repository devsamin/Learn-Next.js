"use client";

import React from "react";

export default function Button() {
  return (
    <button
      onClick={() => console.log("I have click hered")}
      className="mt-3 p-2 bg-green-500 "
    >
      Click Here
    </button>
  );
}
