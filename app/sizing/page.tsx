import { SizeCalculator } from '@/components/SizeCalculator';

export default function SizingPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold mb-6">Подбор размера</h1>
      <p className="text-slate-600 mb-8">Введите вес питомца и длину спины — получите рекомендуемую конфигурацию.</p>
      <SizeCalculator />
    </div>
  );
}
