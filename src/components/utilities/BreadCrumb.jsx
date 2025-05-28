import Link from 'next/link';

export default function Breadcrumb({ title }) {
  return (
    <nav aria-label="breadcrumb" className='mt-[10px]'>
      <ol className="flex items-center justify-center gap-[10px] text-white">
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>/</li>
        <li aria-current="page" className="font-medium text-white/70">
          {title}
        </li>
      </ol>
    </nav>
  );
}
