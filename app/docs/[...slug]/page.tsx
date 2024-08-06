export default function Page({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  if (params.slug.length === 1) {
    return <h1 className="text-center">Concept {params.slug[0]} for docs</h1>;
  }

  if (params.slug.length === 2) {
    return (
      <h1 className="text-center">
        Concept {params.slug[0]} Feature {params.slug[1]} for Docs
      </h1>
    );
  }

  return <h1 className="text-center">Docs Page</h1>;
}
