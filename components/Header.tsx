import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold tracking-tight">DogWheel — коляски</Link>
        <nav className="flex items-center gap-6 text-sm text-slate-700">
          <Link href="/products" className="hover:text-slate-900">Модели</Link>
          <Link href="/sizing" className="hover:text-slate-900">Подбор</Link>
          <Link href="/faq" className="hover:text-slate-900">FAQ</Link>
          <Link href="/about" className="hover:text-slate-900">О нас</Link>
          <Link href="/contact" className="inline-flex items-center rounded-lg bg-brand-600 px-3 py-1.5 text-white hover:bg-brand-700">Связаться</Link>
        </nav>
      </div>
    </header>
  );
}
