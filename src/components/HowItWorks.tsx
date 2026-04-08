const STEPS = [
  {
    number: "01",
    title: "Выбираете комплект",
    description: "Выбираете модель техники в каталоге или оставляете заявку — мы сами подберём подходящий комплект и озвучим цену.",
  },
  {
    number: "02",
    title: "Оформляете заказ",
    description: "Подтверждаете заказ по телефону или в Telegram. Доставка по всей России — комплект приедет в удобное для вас время.",
  },
  {
    number: "03",
    title: "Получаете и устанавливаете",
    description: "Наш мастер приедет и установит кондиционер за 1 день. Или монтируете сами — в комплекте подробная инструкция.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-neutral-900 px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-neutral-500 mb-4">Просто и быстро</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 sm:mb-16 leading-tight">
          Как это работает
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-neutral-700">
          {STEPS.map((step, i) => (
            <div key={i} className="flex flex-col px-4 md:px-10 first:pl-0 last:pr-0 py-6 sm:py-8 md:py-0 border-b border-neutral-700 md:border-b-0 last:border-b-0">
              <span className="text-4xl sm:text-6xl font-bold text-neutral-700 mb-4 sm:mb-6 leading-none">{step.number}</span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}