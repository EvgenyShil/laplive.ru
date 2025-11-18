import { ContactForm } from '@/components/ContactForm';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="container space-y-10 py-12 text-stone-900">
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold">Связаться с нами</h1>
          <p className="text-stone-600">
            Расскажите о своём питомце — мы подскажем конфигурацию, материалы и сроки изготовления. Всегда на связи в
            мессенджерах и по телефону.
          </p>
          <address className="not-italic rounded-2xl border border-brand-100/60 bg-white/80 p-6 shadow-sm">
            <dl className="space-y-4">
              <div className="space-y-1">
                <dt className="text-sm text-stone-500">Телефон</dt>
                <dd>
                  <a href="tel:+79032203502" className="text-lg font-semibold text-stone-900">
                    +7 903 220 35 02
                  </a>
                </dd>
              </div>
              <div className="space-y-1">
                <dt className="text-sm text-stone-500">Telegram</dt>
                <dd>
                  <Link
                    href="https://t.me/your_dog_is_happy"
                    className="inline-flex items-center rounded-xl bg-brand-600 px-4 py-2 text-white shadow hover:bg-brand-700"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @your_dog_is_happy
                  </Link>
                </dd>
              </div>
            </dl>
          </address>
        </div>
        <section id="fit-form" className="space-y-4 rounded-2xl border border-brand-100/60 bg-white/80 p-6 shadow-sm">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold">Подобрать коляску</h2>
            <p className="text-stone-600">
              Заполните форму — мы соберём сообщение и автоматически откроем Telegram с черновиком для отправки нам.
            </p>
          </div>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}
