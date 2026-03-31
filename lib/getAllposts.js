import next from "next";
import { revalidatePath } from "next/cache";

export default async function getAllposts() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10",

    {
      next: {
        revalidate: 10,
      },
    },
  );

  return res.json();
}
