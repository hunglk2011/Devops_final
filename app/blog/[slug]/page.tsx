// app/blog/[slug]/page.tsx

type Params = {
  slug: string;
};

export async function generateMetadata({ params }: { params: Params }) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: { params: Params }) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <p>HCMUE</p>
      <p>2024</p>
    </>
  );
}
