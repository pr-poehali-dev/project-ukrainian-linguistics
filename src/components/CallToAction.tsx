import { ArrowRight } from "lucide-react"
import { HighlightedText } from "./HighlightedText"
import { useLang } from "@/lib/i18n"

export function CallToAction() {
  const { t } = useLang()

  return (
    <section id="contact" className="py-32 md:py-29 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-primary-foreground/60 text-sm tracking-[0.3em] uppercase mb-8">{t.cta.eyebrow}</p>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-medium leading-[1.1] tracking-tight mb-8 text-balance">
            {t.cta.title}
            <br />
            <HighlightedText>{t.cta.titleAccent}</HighlightedText> {t.cta.titleEnd}
          </h2>

          <p className="text-primary-foreground/70 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            {t.cta.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@hotelvolga.ru"
              className="inline-flex items-center justify-center gap-3 bg-primary-foreground text-foreground px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/90 transition-colors duration-300 group"
            >
              {t.cta.btnPrimary}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+78442123456"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 px-8 py-4 text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors duration-300"
            >
              {t.cta.btnSecondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
