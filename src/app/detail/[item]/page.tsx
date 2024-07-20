export default function ItemPage({ params }: any) {
  return (
    <main>
      <div>Item contents: {params.item} </div>
    </main>
  );
}
