'use client'

import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div>
      <h3>
        <Link href={`/posts/${post.id}`}>{post.id} - {post.title}</Link>
      </h3>
      <p>{post.body}</p>
      <button onClick={() => alert(`click ${post.id}`)}>click</button>
    </div>
  );
}
