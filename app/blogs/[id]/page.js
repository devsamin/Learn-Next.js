import { notFound } from "next/navigation";
import React from "react";

export default async function Blog({ params }) {
  const { id } = await params;
  if (id === "3") {
    notFound();
  }
  return <div>This is : {id}</div>;
}
