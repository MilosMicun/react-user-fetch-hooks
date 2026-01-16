import { useFetchPost } from "../hooks/useFetchPost";

function Post() {
  const { data, loading, error } = useFetchPost();

  if (loading) return <p>Loading post...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}

export default Post;
