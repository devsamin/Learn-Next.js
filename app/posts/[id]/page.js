import Comment from "@/app/comment/page";
import getPost from "@/lib/getPost";
import getPostComments from "@/lib/getPostComments";
import React, { Suspense } from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const post = await getPost(id);
  return {
    title: post.title,
  };
}
export default async function Post({ params }) {
  const { id } = await params;

  const post = await getPost(id);
  const CommentsPromise = getPostComments(id);

  // const [post, comments] = await Promise.all([postPromise, CommentsPromise]);

  return (
    <div>
      <h1>Post - {id}</h1>
      <h2 className="text-blue-300">{post.title}</h2>
      <h2>{post.body}</h2>
      <hr></hr>
      <Suspense fallback="Post Comment are Loading...">
        <Comment CommentsPromise={CommentsPromise} />
      </Suspense>
    </div>
  );
}
