import Icon from "@/components/ui/icon";

const PRODUCTS = [
  {
    id: "mtz-80",
    model: "МТЗ-80 / МТЗ-82",
    tag: "Хит продаж",
    price: "54 900",
    oldPrice: "62 000",
    cooling: "3.5 кВт",
    features: ["Компрессор Sanden", "Испаритель под кабину", "Кронштейн в комплекте", "Установка за 1 день"],
    popular: true,
  },
  {
    id: "belarus",
    model: "Беларус 1221 / 1523",
    tag: "Мощный",
    price: "68 500",
    oldPrice: null,
    cooling: "5.0 кВт",
    features: ["Компрессор Denso", "Двойной испаритель", "Ремень и шкив в комплекте", "Установка за 1 день"],
    popular: false,
  },
  {
    id: "mtz-320",
    model: "МТЗ-320 / МТЗ-422",
    tag: "Компактный",
    price: "41 900",
    oldPrice: null,
    cooling: "2.5 кВт",
    features: ["Компрессор Sanden 508", "Малогабаритный блок", "Крепёж в комплекте", "Установка за 4 часа"],
    popular: false,
  },
  {
    id: "combine",
    model: "Комбайны (Дон, Акрос, Вектор)",
    tag: "Для комбайнов",
    price: "от 79 000",
    oldPrice: null,
    cooling: "6.0 кВт",
    features: ["Усиленный компрессор", "Выносной конденсатор", "Подходит под кабины разных годов", "Монтаж по заявке"],
    popular: false,
  },
];

export default function Catalog() {
  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="catalog" className="bg-neutral-50 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-sm tracking-widest text-neutral-500 mb-4">Каталог</p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 leading-tight">
          Комплекты по моделям
        </h2>
        <p className="text-neutral-500 mb-14 text-base max-w-xl">
          Каждый комплект полностью готов к установке — ничего докупать не нужно.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => (
            <div
              key={p.id}
              className={`flex flex-col bg-white border ${p.popular ? "border-black" : "border-neutral-200"} relative`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-4 bg-black text-white text-xs uppercase tracking-widest px-3 py-1">
                  {p.tag}
                </div>
              )}
              {!p.popular && (
                <div className="absolute -top-3 left-4 bg-neutral-200 text-neutral-700 text-xs uppercase tracking-widest px-3 py-1">
                  {p.tag}
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-neutral-900 mb-1 leading-snug">{p.model}</h3>
                <p className="text-sm text-neutral-500 mb-4">Холодопроизводительность: {p.cooling}</p>

                <div className="mb-6">
                  {p.oldPrice && (
                    <p className="text-sm text-neutral-400 line-through mb-0.5">{p.oldPrice} ₽</p>
                  )}
                  <p className="text-3xl font-bold text-neutral-900">{p.price} <span className="text-base font-normal">₽</span></p>
                </div>

                <ul className="flex flex-col gap-2 mb-8 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-neutral-600">
                      <Icon name="Check" size={15} className="text-black mt-0.5 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToForm}
                  className={`w-full py-3 text-sm uppercase tracking-wide font-semibold transition-colors duration-300 cursor-pointer ${
                    p.popular
                      ? "bg-black text-white hover:bg-neutral-800"
                      : "bg-white text-black border border-black hover:bg-black hover:text-white"
                  }`}
                >
                  Оставить заявку
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm text-neutral-400 text-center">
          Не нашли свою модель? — <button onClick={scrollToForm} className="underline hover:text-neutral-700 transition-colors cursor-pointer">Напишите нам</button>, подберём индивидуально.
        </p>
      </div>
    </section>
  );
}
