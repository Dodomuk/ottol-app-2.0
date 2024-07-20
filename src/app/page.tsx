import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <p>
        <Link href='/detail'>디테일 이동</Link>
      </p>
    </main>
  );
}
