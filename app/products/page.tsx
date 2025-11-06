import Image from 'next/image';

const products = [
  { id: 'rear', title: 'Задняя опора', desc: 'Для собак с парезом/параличом задних конечностей.', img: '/images/dog-placeholder.jpg' },
  { id: 'front', title: 'Передняя опора', desc: 'Поддержка передних конечностей при неврологических патологиях.', img: '/images/dog-placeholder.jpg' },
  { id: 'quad', title: 'Четырёхопорная', desc: 'Полная поддержка корпуса и баланса.', img: '/images/dog-placeholder.jpg' },
];

export default function ProductsPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold mb-8">Модели</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(p => (
          <article key={p.id} className="rounded-2xl border bg-white/50 shadow-sm overflow-hidden">
            <Image src={p.img} alt={p.title} width={800} height={600} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-600 mt-2">{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
