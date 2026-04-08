import { useState } from "react";

const TECH_OPTIONS = [
  "Трактор МТЗ-80 / МТЗ-82",
  "Трактор Беларус 1221/1523",
  "Комбайн CLAAS",
  "Комбайн Дон / Акрос",
  "Экскаватор",
  "Погрузчик",
  "Другая спецтехника",
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", tech: "", comment: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white px-4 sm:px-6 py-16 sm:py-24 flex items-center justify-center">
      <div className="w-full max-w-2xl">
        <p className="uppercase text-sm tracking-widest text-neutral-500 mb-4">Бесплатный подбор</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
          Подберём комплект<br />под вашу технику
        </h2>
        <p className="text-neutral-500 mb-10 text-base">
          Оставьте заявку — наш специалист свяжется в течение 30 минут и подберёт оптимальный вариант.
        </p>

        {submitted ? (
          <div className="border border-neutral-200 p-6 sm:p-10 text-center">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">Заявка принята!</h3>
            <p className="text-neutral-500">Свяжемся с вами в течение 30 минут.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Ваше имя"
                required
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="flex-1 border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
              />
              <input
                type="tel"
                placeholder="Номер телефона"
                required
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                className="flex-1 border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
              />
            </div>
            <select
              value={form.tech}
              onChange={e => setForm({ ...form, tech: e.target.value })}
              className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors text-neutral-700 bg-white"
            >
              <option value="">Выберите модель техники</option>
              {TECH_OPTIONS.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <textarea
              placeholder="Дополнительная информация (необязательно)"
              rows={3}
              value={form.comment}
              onChange={e => setForm({ ...form, comment: e.target.value })}
              className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-black transition-colors resize-none"
            />
            <button
              type="submit"
              className="bg-black text-white px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-neutral-800 transition-colors duration-300 cursor-pointer w-full sm:w-fit"
            >
              Оставить заявку
            </button>
            <p className="text-xs text-neutral-400">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </form>
        )}
      </div>
    </section>
  );
}