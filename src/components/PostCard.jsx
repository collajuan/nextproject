'use client'

import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div className='bg-gray-950 py-10'>
      <h3 className='text-xl font-bold mb-4' >
        <Link href={`/posts/${post.id}`}>{post.id} - {post.title}</Link>
      </h3>
      <p className='text-slate-300'>{post.body}</p>
      <button onClick={() => alert(`click ${post.id}`)}>click</button>
    </div>
  );
}
