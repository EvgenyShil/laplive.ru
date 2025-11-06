'use client';
import { useMemo, useState } from 'react';

type Model = 'rear' | 'front' | 'quad';

const MODEL_LABEL: Record<Model, string> = {
  rear: 'Задняя опора',
  front: 'Передняя опора',
  quad: 'Четырёхопорная',
};

export function SizeCalculator() {
  const [weight, setWeight] = useState<number>(10);
  const [length, setLength] = useState<number>(40);

  const result = useMemo(() => {
    // Примерная логика подбора — заглушка, адаптируйте под реальные правила
    let model: Model = 'rear';
    if (weight > 35 || length > 75) model = 'quad';
    if (weight < 8 && length < 35) model = 'rear';
    // При необходимости добавь сюда ветку model = 'front' по правилам подбора

    const wheel = weight < 12 ? '8–10"' : weight < 25 ? '12"' : '14–16"';
    const frame = length < 45 ? 'S' : length < 65 ? 'M' : 'L';

    return { model, wheel, frame };
  }, [weight, length]);

  return (
    <div className="rounded-2xl border p-6 max-w-xl bg-white/60">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block text-sm">
          Вес (кг)
          <input
            type="number"
            min={1}
            step={0.1}
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
            className="mt-1 w-full rounded-xl border px-3 py-2"
          />
        </label>
        <label className="block text-sm">
          Длина спины (см)
          <input
            type="number"
            min={10}
            step={1}
            value={length}
            onChange={(e) => setLength(parseFloat(e.target.value))}
            className="mt-1 w-full rounded-xl border px-3 py-2"
          />
        </label>
      </div>

      <div className="mt-6 rounded-xl bg-slate-50 p-4 border">
        <p className="text-sm text-slate-600">Рекомендация:</p>
        <p className="font-medium mt-1">Модель: {MODEL_LABEL[result.model]}</p>
        <p className="text-sm">Размер рамы: {result.frame}</p>
        <p className="text-sm">Диаметр колёс: {result.wheel}</p>
      </div>
    </div>
  );
}
