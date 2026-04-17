import { useLang } from "@/lib/i18n"

export function Footer() {
  const { t, lang } = useLang()

  return (
    <footer className="py-16 md:py-24 border-t border-border">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="/" className="inline-block mb-6">
              <span className="text-foreground font-semibold tracking-widest text-sm uppercase">Hotel Volga</span>
            </a>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">{t.footer.studioLabel}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#projects" className="hover:text-foreground transition-colors">
                  {t.footer.links.rooms}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-foreground transition-colors">
                  {t.footer.links.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-foreground transition-colors">
                  {t.footer.links.services}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">
                  {t.footer.links.contact}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-4">{t.footer.contactLabel}</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="mailto:info@hotelvolga.ru" className="hover:text-foreground transition-colors">
                  info@hotelvolga.ru
                </a>
              </li>
              <li>
                <a href="tel:+78442123456" className="hover:text-foreground transition-colors">
                  +7 (8442) 12-34-56
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  ВКонтакте
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>{t.footer.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              {lang === "ru" ? "Политика конфиденциальности" : "Privacy Policy"}
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              {lang === "ru" ? "Условия использования" : "Terms of Use"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
