import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="container py-12">
      <h1 className="text-3xl font-semibold mb-6">Связаться с нами</h1>
      <p className="text-slate-600 mb-8">Оставьте контакты и кратко опишите задачу — мы ответим в ближайшее время.</p>
      <ContactForm />
    </div>
  );
}
