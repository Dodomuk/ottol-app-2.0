import Link from 'next/link';

export default function detailPage() {
  return (
    <main>
      <div>디테일 페이지</div>;
      <p>
        <Link href='/detail/banana'>바나나</Link>
      </p>
      <p>
        <Link href='/detail/peach'>복숭아</Link>
      </p>
    </main>
  );
}
