import PostCard from "@/components/PostCard";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}

export default async function Page({ params }) {
  const post = await loadPost(params.postId);
  return (
    <div>
      <h2>Este es el post {params.postId}</h2>
      <div>
        <h3>
          {post.id} - {post.title}
        </h3>
        <p>{post.body}</p>
      </div>
    </div>
  );
}
