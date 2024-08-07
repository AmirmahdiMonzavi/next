export default function Page({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  return <h1 className="text-center">Post {params.postId}</h1>;
}
