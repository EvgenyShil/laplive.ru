import { ContactForm } from '@/components/ContactForm';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container py-12 space-y-10">
      <div className="grid gap-8 lg:grid-cols-2 items-start">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold">Связаться с нами</h1>
          <p className="text-slate-600">
            Расскажите о своём питомце — мы подскажем конфигурацию, материалы и сроки изготовления. Всегда на связи в
            мессенджерах и по телефону.
          </p>
          <div className="rounded-2xl border p-6 space-y-3 bg-white/60">
            <div>
              <p className="text-sm text-slate-500">Телефон</p>
              <a href="tel:+79032203502" className="text-lg font-semibold">
                +7 903 220 35 02
              </a>
            </div>
            <div>
              <p className="text-sm text-slate-500">Telegram</p>
              <Link
                href="https://t.me/your_dog_is_happy"
                className="inline-flex items-center rounded-xl bg-brand-600 px-4 py-2 text-white hover:bg-brand-700"
                target="_blank"
                rel="noreferrer"
              >
                @your_dog_is_happy
              </Link>
            </div>
          </div>
        </div>
        <section id="fit-form" className="rounded-2xl border p-6 bg-white/60 space-y-4">
          <div>
            <h2 className="text-2xl font-semibold">Подобрать коляску</h2>
            <p className="text-slate-600">
              Заполните форму — мы соберём сообщение и откроем Telegram с черновиком для отправки нам.
            </p>
          </div>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
