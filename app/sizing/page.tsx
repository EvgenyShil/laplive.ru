import type { Metadata } from 'next';
import { SizeCalculator } from '@/components/SizeCalculator';

const title = 'Подбор размера коляски DogWheel — расчёт по весу и длине спины';
const description =
  'Рассчитайте рекомендуемую конфигурацию коляски DogWheel: введите вес питомца и длину спины, чтобы получить подходящий размер.';

export const metadata: Metadata = {
  title,
  description,
  keywords: ['подбор размера коляски', 'расчёт коляски для собаки', 'DogWheel размер'],
  alternates: { canonical: '/sizing' },
  openGraph: {
    title,
    description,
    url: 'https://dogwheel.ru/sizing',
    type: 'article'
  }
};

export default function SizingPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold mb-6">Подбор размера</h1>
      <p className="text-slate-600 mb-8">Введите вес питомца и длину спины — получите рекомендуемую конфигурацию.</p>
      <SizeCalculator />
    </div>
  );
}
