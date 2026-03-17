import Link from "next/link";
import React from "react";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "First Blog",
    },
    {
      id: 2,
      title: "Second Blog ",
    },
    {
      id: 3,
      title: "Third Blog ",
    },
  ];
  return (
    <main>
      <div className="mt-3">
        {blogs.map((blog) => (
          <li className="mt-2" key={blog.id}>
            <Link href={`blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </div>
    </main>
  );
}
