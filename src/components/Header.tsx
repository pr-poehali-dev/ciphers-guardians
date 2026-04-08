interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 px-4 sm:px-6 py-4 sm:py-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide font-bold">AiroMax</div>
        <nav className="flex items-center gap-4 sm:gap-8">
          <a
            href="#catalog"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm hidden sm:block"
          >
            Каталог
          </a>
          <a
            href="#contact"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm hidden sm:block"
          >
            Контакты
          </a>
          <a
            href="tel:+79513209983"
            className="text-white hover:text-neutral-300 transition-colors duration-300 text-xs sm:text-sm font-semibold tracking-wide border border-white/40 px-2 sm:px-4 py-2 hover:border-white/80 whitespace-nowrap"
          >
            +7 951 320-99-83
          </a>
        </nav>
      </div>
    </header>
  );
}