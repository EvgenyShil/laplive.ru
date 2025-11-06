'use client';
import { useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');
  const [error, setError] = useState<string>('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('idle');
    setError('');

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (res.ok) setStatus('ok');
    else {
      const data = await res.json().catch(() => ({}));
      setError(data?.error ?? 'Ошибка отправки');
      setStatus('error');
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-4">
      <div>
        <label className="block text-sm mb-1">Ваше имя</label>
        <input name="name" required className="w-full rounded-xl border px-3 py-2" placeholder="Иван" />
      </div>
      <div>
        <label className="block text-sm mb-1">Email</label>
        <input type="email" name="email" required className="w-full rounded-xl border px-3 py-2" placeholder="you@example.com" />
      </div>
      <div>
        <label className="block text-sm mb-1">Сообщение</label>
        <textarea name="message" required minLength={10} className="w-full rounded-xl border px-3 py-2 h-32" placeholder="Опишите задачу и параметры питомца" />
      </div>
      <button type="submit" className="inline-flex items-center rounded-xl bg-brand-600 px-5 py-3 text-white hover:bg-brand-700">Отправить</button>
      {status === 'ok' && <p className="text-green-600">Спасибо! Мы свяжемся с вами.</p>}
      {status === 'error' && <p className="text-red-600">{error}</p>}
    </form>
  );
}
