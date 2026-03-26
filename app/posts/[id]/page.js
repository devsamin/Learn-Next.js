import getPost from "@/lib/getPost";
import React from "react";

export default async function Post({ params }) {
  const { id } = await params;
  const post = await getPost(id);
  return (
    <div>
      <h1>Post - {id}</h1>
      <h2 className="text-blue-300">{post.title}</h2>
      <h2>{post.body}</h2>
    </div>
  );
}
