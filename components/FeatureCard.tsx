interface Props { title: string; description: string }
export function FeatureCard({ title, description }: Props) {
  return (
    <article className="rounded-2xl border border-brand-100/60 bg-gradient-to-br from-white via-brand-50/40 to-white p-5 shadow-sm">
      <h3 className="font-semibold text-stone-900">{title}</h3>
      <p className="text-sm text-stone-600 mt-2">{description}</p>
    </article>
  );
}
