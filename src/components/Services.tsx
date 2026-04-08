const SERVICES = [
  {
    icon: "❄️",
    title: "Заправка кондиционеров",
    price: "от 1 500 ₽",
    description:
      "Заправляем кондиционеры тракторов МТЗ, комбайнов и спецтехники хладагентом R134a и R410a. Перед заправкой обязательно проверяем систему на утечки — чтобы фреон не ушёл через неделю. Выезжаем на поле или производственную базу.",
    points: [
      "Проверка давления и герметичности",
      "Заправка до нормы производителя",
      "Выезд к заказчику по Курской области",
    ],
  },
  {
    icon: "🔧",
    title: "Ремонт кондиционеров",
    price: "от 2 000 ₽",
    description:
      "Ремонтируем любые неисправности климатических систем спецтехники: замена компрессора, устранение утечек, ремонт электрики, замена конденсатора и испарителя. Работаем с техникой МТЗ, Беларус, John Deere, Case и другими марками.",
    points: [
      "Диагностика за 30 минут",
      "Оригинальные и качественные аналоги запчастей",
      "Гарантия на все виды ремонта",
    ],
  },
  {
    icon: "🛠️",
    title: "Обслуживание кондиционеров",
    price: "от 1 200 ₽",
    description:
      "Плановое ТО кондиционера продлевает срок службы системы и предотвращает дорогостоящий ремонт. Рекомендуем проводить обслуживание раз в сезон — перед началом полевых работ. Чистим, проверяем, регулируем всю систему.",
    points: [
      "Чистка радиатора и испарителя",
      "Проверка всех узлов и соединений",
      "Замена фильтров и осушителя",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-neutral-400 mb-4">Что мы делаем</p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-16 leading-tight">
          Услуги
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((s, i) => (
            <div key={i} className="border border-neutral-200 p-8 flex flex-col">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-1">{s.title}</h3>
              <p className="text-blue-600 font-semibold text-sm mb-4">{s.price}</p>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">{s.description}</p>
              <ul className="mt-auto flex flex-col gap-2">
                {s.points.map((point, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-neutral-700">
                    <span className="text-blue-600 font-bold mt-0.5">—</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block bg-neutral-900 text-white px-10 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-neutral-700 transition-colors duration-300"
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </section>
  );
}
