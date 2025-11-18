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

  const animalName = useMemo(() => {
    if (animal === 'dog') return 'Собака';
    if (animal === 'rabbit') return 'Кролик';
    return customAnimal.trim() || 'Другой питомец';
  }, [animal, customAnimal]);

  const message = useMemo(() => {
    const support: string[] = [];
    if (supportRear) support.push('задних лап');
    if (supportFront) support.push('передних лап');
    const supportText = support.length ? support.join(' и ') : 'нужно обсудить';

    const valueOrDash = (value: string, unit: string) => (value ? `${value} ${unit}` : '—');

    return [
      'Запрос на подбор коляски',
      `Вид питомца: ${animalName}`,
      `Примерный вес: ${valueOrDash(weight, 'кг')}`,
      `Примерная длина: ${valueOrDash(length, 'см')}`,
      `Примерная высота: ${valueOrDash(height, 'см')}`,
      `Примерная ширина в холке: ${valueOrDash(width, 'см')}`,
      `Нужна помощь: ${supportText}`
    ].join('\n');
  }, [animalName, height, length, supportFront, supportRear, weight, width]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const encoded = encodeURIComponent(message);
    const appUrl = `tg://resolve?domain=your_dog_is_happy&text=${encoded}`;
    const webUrl = `https://t.me/your_dog_is_happy?text=${encoded}`;

    const openTelegram = (url: string) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
      if (!newWindow) {
        window.location.href = url;
      }
    };

    openTelegram(appUrl);

    setTimeout(() => {
      if (document.visibilityState === 'visible') {
        openTelegram(webUrl);
      }
    }, 1000);
  }

  const dimensionFields = [
    { label: 'Примерный вес (кг)', value: weight, onChange: setWeight, name: 'weight' },
    { label: 'Примерная длина (см)', value: length, onChange: setLength, name: 'length' },
    { label: 'Примерная высота (см)', value: height, onChange: setHeight, name: 'height' },
    { label: 'Примерная ширина в холке (см)', value: width, onChange: setWidth, name: 'width' }
  ] as const;

  const supportOptions = [
    { key: 'rear', label: 'Поддержка задних лап', checked: supportRear, onChange: setSupportRear },
    { key: 'front', label: 'Поддержка передних лап', checked: supportFront, onChange: setSupportFront }
  ] as const;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1 block text-sm" htmlFor="animal">
          Вид питомца
        </label>
        <select
          id="animal"
          value={animal}
          onChange={e => setAnimal(e.target.value as 'dog' | 'rabbit' | 'other')}
          className={fieldClass}
        >
          <option value="dog">Собака</option>
          <option value="rabbit">Кролик</option>
          <option value="other">Другой</option>
        </select>
      </div>
      {animal === 'other' && (
        <div>
          <label className="mb-1 block text-sm" htmlFor="custom-animal">
            Укажите вид
          </label>
          <input
            id="custom-animal"
            value={customAnimal}
            onChange={e => setCustomAnimal(e.target.value)}
            className={fieldClass}
            placeholder="Например, хорёк"
            required
          />
        </div>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        {dimensionFields.map(field => (
          <div key={field.name}>
            <label className="mb-1 block text-sm" htmlFor={field.name}>
              {field.label}
            </label>
            <input
              id={field.name}
              value={field.value}
              onChange={e => field.onChange(e.target.value)}
              className={fieldClass}
              inputMode="decimal"
            />
          </div>
        ))}
      </div>
      <fieldset className="space-y-2">
        <legend className="text-sm font-semibold">Что нужно поддержать</legend>
        {supportOptions.map(option => (
          <label key={option.key} className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={option.checked} onChange={e => option.onChange(e.target.checked)} />
            {option.label}
          </label>
        ))}
      </fieldset>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-xl bg-brand-600 px-5 py-3 text-white shadow hover:bg-brand-700"
      >
        Подобрать (будет сформировано сообщение для нас в Telegram)
      </button>
      <p className="whitespace-pre-line text-xs text-stone-500" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
