import Link from 'next/link';

const navLinks = [
  { href: '/products', label: 'Модели' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'О нас' }
] as const;

export function Header() {
  return (
    <header className="border-b border-brand-100/60 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight text-stone-800">
          DogWheel
          <span className="sr-only"> — поддержка движения для питомцев</span>
        </Link>
        <nav aria-label="Основная навигация" className="flex items-center gap-6 text-sm text-stone-700">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-stone-900">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="inline-flex items-center rounded-lg bg-brand-600 px-3 py-1.5 text-white shadow hover:bg-brand-700">
            Связаться
          </Link>
        </nav>
      </div>
    </header>
  );
}
