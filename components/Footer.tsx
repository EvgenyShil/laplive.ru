export function Footer() {
  return (
    <footer className="border-t border-brand-100/60 bg-white/70">
      <div className="container py-8 text-sm text-stone-600">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} DogWheel. Все права защищены.</p>
          <nav className="flex gap-4">
            <a href="#" className="hover:text-stone-900">Политика конфиденциальности</a>
            <a href="#" className="hover:text-stone-900">Условия использования</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
