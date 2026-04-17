import { createContext, useContext, useState, ReactNode } from "react"

export type Lang = "ru" | "en"

export const translations = {
  ru: {
    nav: {
      home: "Главная",
      about: "О нас",
      rooms: "Номера",
      services: "Услуги",
      faq: "Вопросы",
      contact: "Связаться",
    },
    hero: {
      eyebrow: "Гостиница 4 звезды · Волгоград",
      title: "Место, где\nначинается",
      titleAccent: "отдых",
    },
    philosophy: {
      eyebrow: "О нас",
      title: "Гостиница\nс",
      titleAccent: "характером",
      description:
        "Мы создаём пространство, где каждый гость чувствует себя как дома. Четыре звезды — это не просто статус, это наш стандарт заботы о каждой детали.",
      items: [
        {
          title: "В самом сердце Волгограда",
          description:
            "Располагаемся в историческом центре города — в шаговой доступности от Мамаева кургана, набережной и главных достопримечательностей.",
        },
        {
          title: "Комфорт и тишина",
          description:
            "Звукоизолированные номера, премиальное постельное бельё и деликатный сервис — всё для полноценного отдыха после насыщенного дня.",
        },
        {
          title: "Современный минимализм",
          description:
            "Чистые линии, нейтральные оттенки и продуманное освещение создают атмосферу спокойствия и элегантности.",
        },
        {
          title: "Безупречный сервис",
          description:
            "Круглосуточная стойка регистрации, консьерж-служба и персонал, готовый предугадать ваши пожелания.",
        },
      ],
    },
    projects: {
      eyebrow: "Наши номера",
      title: "Выберите свой номер",
      viewAll: "Смотреть все номера",
      items: [
        {
          title: "Стандартный номер",
          category: "Одноместный / двухместный",
          location: "Вид на город",
          year: "от 4 200 ₽",
        },
        {
          title: "Улучшенный номер",
          category: "Двухместный",
          location: "Вид на набережную",
          year: "от 5 800 ₽",
        },
        {
          title: "Номер Делюкс",
          category: "Двухместный",
          location: "Панорамный вид",
          year: "от 7 500 ₽",
        },
        {
          title: "Апартаменты Люкс",
          category: "Гостиная + спальня",
          location: "Вид на Волгу",
          year: "от 12 000 ₽",
        },
      ],
    },
    expertise: {
      eyebrow: "Наши услуги",
      title: "Всё для",
      titleAccent: "вашего",
      titleEnd: "комфорта",
      description:
        "Мы продумали каждую деталь, чтобы ваше пребывание было максимально удобным — будь то деловая поездка или романтический отпуск.",
      items: [
        {
          title: "Ресторан и завтраки",
          description:
            "Авторская кухня с блюдами из локальных продуктов. Завтраки «шведский стол» включены в стоимость проживания.",
          icon: "UtensilsCrossed",
        },
        {
          title: "Конференц-залы",
          description:
            "Три оснащённых зала для деловых встреч, переговоров и корпоративных мероприятий вместимостью до 80 человек.",
          icon: "Presentation",
        },
        {
          title: "СПА и фитнес",
          description:
            "Бассейн, сауна, тренажёрный зал и массажные кабинеты — полный комплекс для восстановления сил.",
          icon: "Sparkles",
        },
        {
          title: "Трансфер и парковка",
          description:
            "Бесплатная охраняемая парковка для гостей, трансфер из аэропорта и вокзала по предварительному запросу.",
          icon: "Car",
        },
      ],
    },
    faq: {
      eyebrow: "Вопросы",
      title: "Частые вопросы",
      items: [
        {
          question: "Где находится гостиница?",
          answer:
            "Мы расположены в историческом центре Волгограда, в 10 минутах пешком от Мамаева кургана и в 5 минутах от набережной реки Волга. До железнодорожного вокзала — 15 минут на такси.",
        },
        {
          question: "Какое время заезда и выезда?",
          answer:
            "Стандартное время заезда — 14:00, выезд до 12:00. Ранний заезд и поздний выезд доступны по предварительному запросу, при наличии свободных номеров, без дополнительной платы.",
        },
        {
          question: "Включён ли завтрак в стоимость?",
          answer:
            "Завтрак «шведский стол» включён в стоимость всех категорий номеров. Ресторан работает с 7:00 до 10:30. Также доступен room service.",
        },
        {
          question: "Есть ли парковка?",
          answer:
            "Да, для гостей гостиницы предоставляется бесплатная охраняемая парковка на 50 мест. Въезд возможен круглосуточно по карте гостя.",
        },
        {
          question: "Как добраться из аэропорта?",
          answer:
            "Мы организуем трансфер из аэропорта Волгограда (Гумрак) — необходимо заказать за 24 часа до прибытия. Стоимость уточняйте на стойке регистрации. Также доступно такси и автобус № 15.",
        },
        {
          question: "Можно ли с домашними животными?",
          answer:
            "Да, мы принимаем гостей с домашними животными весом до 10 кг. Необходимо предупредить при бронировании. Дополнительная плата — 500 ₽ в сутки за уборку номера.",
        },
      ],
    },
    cta: {
      eyebrow: "Бронирование",
      title: "Готовы к",
      titleAccent: "незабываемому",
      titleEnd: "отдыху?",
      description:
        "Забронируйте номер прямо сейчас и получите лучшую цену. Наш консьерж поможет спланировать идеальное пребывание в Волгограде.",
      btnPrimary: "Забронировать номер",
      btnSecondary: "Позвонить нам",
    },
    footer: {
      description:
        "4-звёздная гостиница в центре Волгограда. Комфорт, тишина и безупречный сервис с первой минуты.",
      studioLabel: "Гостиница",
      links: {
        rooms: "Номера",
        about: "О нас",
        services: "Услуги",
        contact: "Контакты",
      },
      contactLabel: "Связь",
      copyright: "© 2025 Гостиница Волга. Все права защищены.",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      rooms: "Rooms",
      services: "Services",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      eyebrow: "4-Star Hotel · Volgograd",
      title: "Where your",
      titleAccent: "rest begins",
    },
    philosophy: {
      eyebrow: "About Us",
      title: "A hotel\nwith",
      titleAccent: "character",
      description:
        "We create a space where every guest feels at home. Four stars is not just a status — it's our standard of care for every detail.",
      items: [
        {
          title: "In the heart of Volgograd",
          description:
            "Located in the historic city centre — within walking distance of Mamayev Kurgan, the embankment and key attractions.",
        },
        {
          title: "Comfort and silence",
          description:
            "Soundproofed rooms, premium bedding and discreet service — everything for a full rest after a busy day.",
        },
        {
          title: "Modern minimalism",
          description:
            "Clean lines, neutral tones and thoughtful lighting create an atmosphere of calm and elegance.",
        },
        {
          title: "Impeccable service",
          description:
            "24-hour front desk, concierge service and staff ready to anticipate your every wish.",
        },
      ],
    },
    projects: {
      eyebrow: "Our Rooms",
      title: "Choose your room",
      viewAll: "View all rooms",
      items: [
        {
          title: "Standard Room",
          category: "Single / Double",
          location: "City view",
          year: "from ₽4,200",
        },
        {
          title: "Superior Room",
          category: "Double",
          location: "Embankment view",
          year: "from ₽5,800",
        },
        {
          title: "Deluxe Room",
          category: "Double",
          location: "Panoramic view",
          year: "from ₽7,500",
        },
        {
          title: "Junior Suite",
          category: "Living room + bedroom",
          location: "Volga river view",
          year: "from ₽12,000",
        },
      ],
    },
    expertise: {
      eyebrow: "Our Services",
      title: "Everything for",
      titleAccent: "your",
      titleEnd: "comfort",
      description:
        "We've thought of every detail to make your stay as comfortable as possible — whether it's a business trip or a romantic getaway.",
      items: [
        {
          title: "Restaurant & Breakfast",
          description:
            "Signature cuisine with locally sourced ingredients. Buffet breakfast is included in the room rate.",
          icon: "UtensilsCrossed",
        },
        {
          title: "Conference Rooms",
          description:
            "Three fully equipped halls for meetings, negotiations and corporate events accommodating up to 80 guests.",
          icon: "Presentation",
        },
        {
          title: "SPA & Fitness",
          description:
            "Swimming pool, sauna, gym and massage rooms — a full complex for recovery and relaxation.",
          icon: "Sparkles",
        },
        {
          title: "Transfer & Parking",
          description:
            "Free secure parking for guests, airport and railway station transfers available on request.",
          icon: "Car",
        },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          question: "Where is the hotel located?",
          answer:
            "We are located in the historic centre of Volgograd, a 10-minute walk from Mamayev Kurgan and 5 minutes from the Volga embankment. The railway station is 15 minutes by taxi.",
        },
        {
          question: "What are the check-in and check-out times?",
          answer:
            "Standard check-in is at 14:00, check-out by 12:00. Early check-in and late check-out are available on request, subject to availability, at no extra charge.",
        },
        {
          question: "Is breakfast included?",
          answer:
            "Buffet breakfast is included in the rate for all room categories. The restaurant is open from 7:00 to 10:30. Room service is also available.",
        },
        {
          question: "Is there parking?",
          answer:
            "Yes, complimentary secure parking for 50 cars is available to hotel guests. Access is available 24/7 using your guest key card.",
        },
        {
          question: "How do I get from the airport?",
          answer:
            "We arrange transfers from Volgograd Airport (Gumrak) — please request at least 24 hours before arrival. Pricing available at the front desk. Taxis and bus No. 15 are also available.",
        },
        {
          question: "Are pets allowed?",
          answer:
            "Yes, we welcome guests with pets weighing up to 10 kg. Please inform us when booking. An additional fee of ₽500 per night applies for room cleaning.",
        },
      ],
    },
    cta: {
      eyebrow: "Reservations",
      title: "Ready for an",
      titleAccent: "unforgettable",
      titleEnd: "stay?",
      description:
        "Book your room now and get the best rate. Our concierge will help you plan the perfect stay in Volgograd.",
      btnPrimary: "Book a room",
      btnSecondary: "Call us",
    },
    footer: {
      description:
        "4-star hotel in the centre of Volgograd. Comfort, tranquillity and impeccable service from the very first moment.",
      studioLabel: "Hotel",
      links: {
        rooms: "Rooms",
        about: "About",
        services: "Services",
        contact: "Contact",
      },
      contactLabel: "Contact",
      copyright: "© 2025 Hotel Volga. All rights reserved.",
    },
  },
}

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: typeof translations.ru
}

const LangContext = createContext<LangContextType>({
  lang: "ru",
  setLang: () => {},
  t: translations.ru,
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ru")
  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
