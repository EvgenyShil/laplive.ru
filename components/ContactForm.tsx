'use client';

import { useMemo, useState } from 'react';

export function ContactForm() {
  const [animal, setAnimal] = useState<'dog' | 'rabbit' | 'other'>('dog');
  const [customAnimal, setCustomAnimal] = useState('');
  const [weight, setWeight] = useState('');
  const [length, setLength] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [supportRear, setSupportRear] = useState(true);
  const [supportFront, setSupportFront] = useState(false);
  const fieldClass =
    'w-full rounded-xl border border-brand-100/70 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-200/70';

  const message = useMemo(() => {
    const animalName =
      animal === 'dog' ? 'Собака' : animal === 'rabbit' ? 'Кролик' : customAnimal.trim() || 'Другой питомец';
    const support: string[] = [];
    if (supportRear) support.push('задних лап');
    if (supportFront) support.push('передних лап');
    const supportText = support.length ? support.join(' и ') : 'нужно обсудить';

    return [
      'Запрос на подбор коляски',
      `Вид животного: ${animalName}`,
      `Примерный вес: ${weight || '—'} кг`,
      `Примерная длина: ${length || '—'} см`,
      `Примерная высота: ${height || '—'} см`,
      `Примерная ширина в холке: ${width || '—'} см`,
      `Нужна помощь: ${supportText}`
    ].join('\n');
  }, [animal, customAnimal, height, length, supportFront, supportRear, weight, width]);

  function openTelegram(url: string) {
    const opened = window.open(url, '_blank', 'noopener,noreferrer');
    if (!opened) {
      window.location.href = url;
      return false;
    }
    return true;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const encoded = encodeURIComponent(message);
    const appUrl = `tg://resolve?domain=your_dog_is_happy&text=${encoded}`;
    const webUrl = `https://t.me/your_dog_is_happy?text=${encoded}`;
    const launched = openTelegram(appUrl);

    if (!launched) {
      return;
    }

    setTimeout(() => {
      if (document.visibilityState === 'visible') {
        openTelegram(webUrl);
      }
    }, 700);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm mb-1">Вид животного</label>
        <select value={animal} onChange={e => setAnimal(e.target.value as 'dog' | 'rabbit' | 'other')} className={fieldClass}>
          <option value="dog">Собака</option>
          <option value="rabbit">Кролик</option>
          <option value="other">Другой</option>
        </select>
      </div>
      {animal === 'other' && (
        <div>
          <label className="block text-sm mb-1">Укажите вид</label>
          <input value={customAnimal} onChange={e => setCustomAnimal(e.target.value)} className={fieldClass} placeholder="Например, хорёк" />
        </div>
      )}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Примерный вес (кг)</label>
          <input value={weight} onChange={e => setWeight(e.target.value)} className={fieldClass} />
        </div>
        <div>
          <label className="block text-sm mb-1">Примерная длина (см)</label>
          <input value={length} onChange={e => setLength(e.target.value)} className={fieldClass} />
        </div>
        <div>
          <label className="block text-sm mb-1">Примерная высота (см)</label>
          <input value={height} onChange={e => setHeight(e.target.value)} className={fieldClass} />
        </div>
        <div>
          <label className="block text-sm mb-1">Примерная ширина в холке (см)</label>
          <input value={width} onChange={e => setWidth(e.target.value)} className={fieldClass} />
        </div>
      </div>
      <fieldset className="space-y-2">
        <legend className="text-sm font-semibold">Что нужно поддержать</legend>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={supportRear} onChange={e => setSupportRear(e.target.checked)} /> Поддержка задних лап
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={supportFront} onChange={e => setSupportFront(e.target.checked)} /> Поддержка передних лап
        </label>
      </fieldset>
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-white shadow hover:bg-brand-700"
      >
        Подобрать (будет сформировано сообщение для нас в Telegram)
      </button>
      <p className="text-xs text-stone-500 whitespace-pre-line">{message}</p>
    </form>
  );
}
