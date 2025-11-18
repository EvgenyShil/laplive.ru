import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-brand-100/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold tracking-tight text-stone-800">DogWheel — коляски</Link>
        <nav className="flex items-center gap-6 text-sm text-stone-700">
          <Link href="/products" className="hover:text-stone-900">Модели</Link>
          <Link href="/faq" className="hover:text-stone-900">FAQ</Link>
          <Link href="/about" className="hover:text-stone-900">О нас</Link>
          <Link href="/contact" className="inline-flex items-center rounded-lg bg-brand-600 px-3 py-1.5 text-white shadow hover:bg-brand-700">Связаться</Link>
        </nav>
      </div>
    </header>
  );
}
