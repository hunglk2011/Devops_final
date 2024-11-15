type Params = {
  params: {
    slug: string;
  };
};

// `generateMetadata` does not need to return a promise
export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

// The Page component expects the `params` prop to be passed
export default function Page({ params }: Params) {
  return (
    <>
      <h1>Slug: {params.slug}</h1>
      <p>HCMUE</p>
      <p>2024</p>
    </>
  );
}
