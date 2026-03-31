import React from "react";

export default async function Comment({ CommentsPromise }) {
  const comments = await CommentsPromise;
  //   console.log(comments);
  return (
    <div>
      <h1> All Comments</h1>
      <hr></hr>
      <ul>
        {comments?.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
}
