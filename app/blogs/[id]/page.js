import React from "react";

export default async function Blog({ params }) {
  const { id } = await params;
  return <div>This is : {id}</div>;
}
