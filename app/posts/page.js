import getAllposts from "@/lib/getAllposts";
import Link from "next/link";
import React from "react";

export default async function Posts() {
  const posts = await getAllposts();
  //   console.log(posts);
  return (
    <div className="mt-5">
      <h1>All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li>
            <Link href={`/posts/${post.id}`} key={post.id}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
