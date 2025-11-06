interface Props { title: string; description: string }
export function FeatureCard({ title, description }: Props) {
  return (
    <article className="rounded-2xl border p-5 shadow-sm bg-white/50">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-slate-600 mt-2">{description}</p>
    </article>
  );
}
