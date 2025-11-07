export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 text-sm text-slate-600">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} LAPLIVE. Все права защищены.</p>
          <nav className="flex gap-4">
            <a href="#" className="hover:text-slate-900">Политика конфиденциальности</a>
            <a href="#" className="hover:text-slate-900">Условия использования</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
