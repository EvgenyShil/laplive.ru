interface Props { author: string; quote: string }
export function Testimonial({ author, quote }: Props) {
  return (
    <section className="rounded-2xl border p-6 bg-white/60">
      <blockquote className="text-lg">“{quote}”</blockquote>
      <p className="mt-3 text-sm text-slate-600">— {author}</p>
    </section>
  );
}
