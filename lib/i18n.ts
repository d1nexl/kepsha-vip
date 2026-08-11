export type Locale = "cs" | "en" | "uk" | "ru";

export const LOCALES: Locale[] = ["cs", "en", "uk", "ru"];
export const DEFAULT_LOCALE: Locale = "cs";

export const LOCALE_META: Record<Locale, { label: string; native: string; flag: string }> = {
  cs: { label: "Čeština", native: "Čeština", flag: "🇨🇿" },
  en: { label: "English", native: "English", flag: "🇬🇧" },
  uk: { label: "Українська", native: "Українська", flag: "🇺🇦" },
  ru: { label: "Русский", native: "Русский", flag: "🇷🇺" },
};

export interface ServiceItem {
  num: string;
  title: string;
  desc: string;
}

export interface StepItem {
  num: string;
  title: string;
  desc: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Dictionary {
  meta: { title: string; description: string };
  nav: {
    home: string;
    services: string;
    process: string;
    why: string;
    gallery: string;
    contact: string;
    cta: string;
    menu: string;
    close: string;
  };
  hero: {
    badge: string;
    titleLines: string[];
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string[];
    scroll: string;
  };
  marquee: string[];
  services: {
    label: string;
    title: string;
    subtitle: string;
    items: ServiceItem[];
    hint: string;
    cta: string;
  };
  benefits: {
    label: string;
    title: string;
    statement: string[];
    items: string[];
  };
  process: {
    label: string;
    title: string;
    subtitle: string;
    steps: StepItem[];
  };
  gallery: {
    label: string;
    title: string;
    subtitle: string;
    alt: string;
    close: string;
    prev: string;
    next: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
    call: string;
  };
  form: {
    label: string;
    title: string;
    subtitle: string;
    fields: {
      name: string;
      phone: string;
      email: string;
      service: string;
      from: string;
      to: string;
      date: string;
      message: string;
    };
    placeholders: {
      name: string;
      phone: string;
      email: string;
      from: string;
      to: string;
      message: string;
      selectService: string;
    };
    serviceOptions: string[];
    optional: string;
    submit: string;
    sending: string;
    consent: string;
    success: { title: string; text: string; again: string };
    errors: {
      name: string;
      phone: string;
      email: string;
      service: string;
      consent: string;
    };
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    callNow: string;
    orWrite: string;
    channels: { whatsapp: string; viber: string; telegram: string };
    availabilityLabel: string;
    availability: string;
    coverageLabel: string;
    coverage: string;
    emailLabel: string;
  };
  faq: {
    label: string;
    title: string;
    items: FaqItem[];
  };
  footer: {
    tagline: string;
    linksLabel: string;
    contactLabel: string;
    langLabel: string;
    privacy: string;
    rights: string;
    coverage: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  // ─────────────────────────────── ČEŠTINA ───────────────────────────────
  cs: {
    meta: {
      title: "Kepsha.VIP — Stěhování, přeprava nákladu a vyklizení",
      description:
        "Profesionální stěhování, přeprava nákladu a vyklizení prostor po celé ČR i v Evropě. Rychlá domluva, férové jednání, bezpečná přeprava. Zavolejte +420 775 929 681.",
    },
    nav: {
      home: "Domů",
      services: "Služby",
      process: "Jak to funguje",
      why: "Proč my",
      gallery: "Galerie",
      contact: "Kontakt",
      cta: "Objednat přepravu",
      menu: "Menu",
      close: "Zavřít",
    },
    hero: {
      badge: "Přeprava • Stěhování • Vyklizení",
      titleLines: ["Převezeme.", "Vyřešíme.", "Zařídíme."],
      subtitle:
        "Stěhování, přeprava nákladu a vyklizení prostor. Rychle, bezpečně a bez zbytečných starostí — po celé ČR i v Evropě.",
      ctaPrimary: "Objednat přepravu",
      ctaSecondary: "Zavolat",
      trust: ["Rychlá domluva", "Profesionální přístup", "Působíme po celé ČR"],
      scroll: "Prohlédnout",
    },
    marquee: [
      "Stěhování",
      "Přeprava nákladu",
      "Vyklizení bytů",
      "Vyklizení sklepů",
      "Odvoz pozůstalosti",
      "Likvidace odpadu",
      "Po celé ČR i Evropě",
    ],
    services: {
      label: "Služby",
      title: "Vše kolem stěhování a vyklizení",
      subtitle:
        "Od jednoho kusu nábytku po kompletní vyklizení. Postaráme se o nakládku, přepravu i likvidaci.",
      hint: "Najeďte na službu pro detail",
      items: [
        {
          num: "01",
          title: "Stěhování bytů a domů",
          desc: "Kompletní stěhování bytů, domů, kanceláří i jednotlivých kusů. Zabalíme, naložíme a bezpečně převezeme.",
        },
        {
          num: "02",
          title: "Přeprava nákladu",
          desc: "Nábytek, spotřebiče, stavební materiál i křehké věci. Vhodná vozidla a šetrná manipulace.",
        },
        {
          num: "03",
          title: "Vyklizení bytů",
          desc: "Úplné nebo částečné vyklizení bytů a prostor. Vytřídíme, odvezeme a předáme čistý prostor.",
        },
        {
          num: "04",
          title: "Vyklizení sklepů a garáží",
          desc: "Odvoz nepotřebných věcí, starého nábytku a nepořádku ze sklepů, garáží a půd.",
        },
        {
          num: "05",
          title: "Odvoz pozůstalosti",
          desc: "Ohleduplné a organizované vyklizení po pozůstalosti s respektem a diskrétností.",
        },
        {
          num: "06",
          title: "Odvoz a likvidace odpadu",
          desc: "Odvoz nepotřebných věcí a zajištění jejich ekologické likvidace nebo recyklace.",
        },
      ],
      cta: "Objednat službu",
    },
    benefits: {
      label: "Proč Kepsha.VIP",
      title: "Proč si vybrat právě nás",
      statement: ["Jedna domluva.", "Jeden tým.", "Hotovo."],
      items: [
        "Rychlá domluva",
        "Férové jednání",
        "Profesionální přístup",
        "Bezpečná přeprava",
        "Flexibilní termíny",
        "Individuální cena",
        "Pomoc s nakládkou a vykládkou",
        "Komunikace 7 dní v týdnu",
      ],
    },
    process: {
      label: "Jak to funguje",
      title: "Od zavolání po hotovo",
      subtitle: "Jednoduchý proces bez zbytečné administrativy.",
      steps: [
        { num: "01", title: "Kontaktujete nás", desc: "Zavoláte nebo napíšete, co potřebujete převézt či vyklidit." },
        { num: "02", title: "Domluvíme detaily", desc: "Navrhneme řešení, termín a férovou individuální cenu." },
        { num: "03", title: "Přijedeme", desc: "Dorazíme včas s vhodným vozem a vlastním týmem." },
        { num: "04", title: "Převezeme / vyklidíme", desc: "Vše bezpečně převezeme nebo vyklidíme — a uklidíme po sobě." },
      ],
    },
    gallery: {
      label: "Galerie",
      title: "Naše práce v akci",
      subtitle: "Skutečné realizace — naložené dodávky, stěhování a vyklizení po celé ČR.",
      alt: "Kepsha.VIP — stěhování a přeprava, fotografie",
      close: "Zavřít",
      prev: "Předchozí",
      next: "Další",
    },
    cta: {
      title: "Máte něco na převoz?",
      subtitle: "Ozvěte se a domluvíme se ještě dnes. Rychle, bez závazků a s férovou cenou.",
      button: "Objednat přepravu",
      call: "Zavolat",
    },
    form: {
      label: "Poptávka",
      title: "Potřebujete přepravu?",
      subtitle: "Napište nám, co potřebujete převézt nebo vyklidit. Ozveme se co nejdříve.",
      fields: {
        name: "Jméno",
        phone: "Telefon",
        email: "E-mail",
        service: "Typ služby",
        from: "Odkud",
        to: "Kam",
        date: "Preferovaný termín",
        message: "Zpráva",
      },
      placeholders: {
        name: "Jan Novák",
        phone: "+420 …",
        email: "vas@email.cz",
        from: "Město, ulice",
        to: "Město, ulice",
        message: "Popište, co potřebujete převézt nebo vyklidit…",
        selectService: "Vyberte službu",
      },
      serviceOptions: [
        "Stěhování",
        "Převoz nákladu",
        "Vyklizení bytu",
        "Vyklizení sklepa / garáže",
        "Odvoz pozůstalosti",
        "Odvoz odpadu",
        "Jiná služba",
      ],
      optional: "nepovinné",
      submit: "Odeslat poptávku",
      sending: "Odesílám…",
      consent: "Souhlasím se zpracováním osobních údajů.",
      success: {
        title: "Děkujeme!",
        text: "Vaše poptávka byla odeslána. Brzy se vám ozveme.",
        again: "Odeslat další poptávku",
      },
      errors: {
        name: "Zadejte prosím jméno.",
        phone: "Zadejte platné telefonní číslo.",
        email: "Zadejte platný e-mail.",
        service: "Vyberte prosím službu.",
        consent: "Potvrďte prosím souhlas se zpracováním údajů.",
      },
    },
    contact: {
      label: "Kontakt",
      title: "Máte něco na převoz?",
      subtitle: "Jsme na příjmu 7 dní v týdnu. Zavolejte nebo napište přes svou oblíbenou aplikaci.",
      callNow: "Zavolat",
      orWrite: "nebo napište",
      channels: { whatsapp: "WhatsApp", viber: "Viber", telegram: "Telegram" },
      availabilityLabel: "Dostupnost",
      availability: "7 dní v týdnu",
      coverageLabel: "Působnost",
      coverage: "Celá ČR i Evropa",
      emailLabel: "E-mail",
    },
    faq: {
      label: "Časté dotazy",
      title: "Nejčastější otázky",
      items: [
        { q: "Jak rychle se ozvete?", a: "Obvykle reagujeme do několika minut až hodin. Ozvat se můžete telefonicky, přes formulář nebo WhatsApp, Viber a Telegram." },
        { q: "Působíte po celé ČR?", a: "Ano, stěhujeme a přepravujeme po celé České republice. Po domluvě zajišťujeme přepravu i v rámci Evropy." },
        { q: "Kolik bude přeprava stát?", a: "Cenu stanovujeme individuálně podle rozsahu, vzdálenosti a náročnosti. Předem vám sdělíme férovou nabídku bez skrytých poplatků." },
        { q: "Pomůžete s nakládkou a vykládkou?", a: "Samozřejmě. Náš tým se postará o nakládku, přepravu i vykládku — nemusíte hnout prstem." },
        { q: "Odvezete i odpad k likvidaci?", a: "Ano. Nepotřebné věci odvezeme a zajistíme jejich ekologickou likvidaci nebo recyklaci." },
      ],
    },
    footer: {
      tagline: "Profesionální stěhování, přeprava nákladu a vyklizení prostor po celé ČR i v Evropě.",
      linksLabel: "Navigace",
      contactLabel: "Kontakt",
      langLabel: "Jazyk",
      privacy: "Ochrana osobních údajů",
      rights: "Všechna práva vyhrazena.",
      coverage: "Působíme po celé ČR i v Evropě",
    },
  },

  // ─────────────────────────────── ENGLISH ───────────────────────────────
  en: {
    meta: {
      title: "Kepsha.VIP — Moving, Cargo Transport & Clearance",
      description:
        "Professional moving, cargo transport and property clearance across Czechia and Europe. Fast response, fair dealing, safe transport. Call +420 775 929 681.",
    },
    nav: {
      home: "Home",
      services: "Services",
      process: "How it works",
      why: "Why us",
      gallery: "Gallery",
      contact: "Contact",
      cta: "Book transport",
      menu: "Menu",
      close: "Close",
    },
    hero: {
      badge: "Transport • Moving • Clearance",
      titleLines: ["We move it.", "We solve it.", "We handle it."],
      subtitle:
        "Moving, cargo transport and property clearance. Fast, safe and free of hassle — across Czechia and all of Europe.",
      ctaPrimary: "Book transport",
      ctaSecondary: "Call",
      trust: ["Fast response", "Professional approach", "Nationwide coverage"],
      scroll: "Explore",
    },
    marquee: [
      "Moving",
      "Cargo transport",
      "Apartment clearance",
      "Cellar clearance",
      "Estate removals",
      "Waste disposal",
      "Across Czechia & Europe",
    ],
    services: {
      label: "Services",
      title: "Everything around moving & clearance",
      subtitle: "From a single item to a full clear-out. We handle loading, transport and disposal.",
      hint: "Hover a service for details",
      items: [
        { num: "01", title: "Home & apartment moving", desc: "Full moves of apartments, houses, offices or single items. We pack, load and transport safely." },
        { num: "02", title: "Cargo transport", desc: "Furniture, appliances, building materials and fragile goods. The right vehicles and careful handling." },
        { num: "03", title: "Apartment clearance", desc: "Full or partial clearance of flats and spaces. We sort, remove and hand over a clean space." },
        { num: "04", title: "Cellar & garage clearance", desc: "Removal of unwanted items, old furniture and clutter from cellars, garages and attics." },
        { num: "05", title: "Estate removals", desc: "Considerate, organised clearance of estates handled with respect and discretion." },
        { num: "06", title: "Waste removal & disposal", desc: "We haul away unwanted items and arrange their eco-friendly disposal or recycling." },
      ],
      cta: "Book this service",
    },
    benefits: {
      label: "Why Kepsha.VIP",
      title: "Why choose us",
      statement: ["One call.", "One team.", "Done."],
      items: [
        "Fast response",
        "Fair dealing",
        "Professional approach",
        "Safe transport",
        "Flexible dates",
        "Individual pricing",
        "Help with loading & unloading",
        "Available 7 days a week",
      ],
    },
    process: {
      label: "How it works",
      title: "From call to done",
      subtitle: "A simple process with no unnecessary paperwork.",
      steps: [
        { num: "01", title: "You contact us", desc: "Call or message us with what you need moved or cleared." },
        { num: "02", title: "We agree the details", desc: "We propose a solution, a date and a fair individual price." },
        { num: "03", title: "We arrive", desc: "We show up on time with the right vehicle and our own crew." },
        { num: "04", title: "We move / clear it", desc: "We transport or clear everything safely — and clean up after ourselves." },
      ],
    },
    gallery: {
      label: "Gallery",
      title: "Our work in action",
      subtitle: "Real jobs — loaded vans, moves and clearances across Czechia.",
      alt: "Kepsha.VIP — moving and transport, photo",
      close: "Close",
      prev: "Previous",
      next: "Next",
    },
    cta: {
      title: "Got something to move?",
      subtitle: "Get in touch and we'll sort it out today. Fast, no obligation, fair price.",
      button: "Book transport",
      call: "Call",
    },
    form: {
      label: "Request",
      title: "Need transport?",
      subtitle: "Tell us what you need moved or cleared. We'll get back to you as soon as possible.",
      fields: {
        name: "Name",
        phone: "Phone",
        email: "E-mail",
        service: "Service type",
        from: "From",
        to: "To",
        date: "Preferred date",
        message: "Message",
      },
      placeholders: {
        name: "John Smith",
        phone: "+420 …",
        email: "you@email.com",
        from: "City, street",
        to: "City, street",
        message: "Describe what you need moved or cleared…",
        selectService: "Select a service",
      },
      serviceOptions: [
        "Moving",
        "Cargo transport",
        "Apartment clearance",
        "Cellar / garage clearance",
        "Estate removal",
        "Waste disposal",
        "Other service",
      ],
      optional: "optional",
      submit: "Send request",
      sending: "Sending…",
      consent: "I agree to the processing of my personal data.",
      success: {
        title: "Thank you!",
        text: "Your request has been sent. We'll be in touch shortly.",
        again: "Send another request",
      },
      errors: {
        name: "Please enter your name.",
        phone: "Please enter a valid phone number.",
        email: "Please enter a valid e-mail.",
        service: "Please select a service.",
        consent: "Please confirm your consent to data processing.",
      },
    },
    contact: {
      label: "Contact",
      title: "Got something to move?",
      subtitle: "We're available 7 days a week. Call or message via your favourite app.",
      callNow: "Call",
      orWrite: "or message",
      channels: { whatsapp: "WhatsApp", viber: "Viber", telegram: "Telegram" },
      availabilityLabel: "Availability",
      availability: "7 days a week",
      coverageLabel: "Coverage",
      coverage: "All of Czechia & Europe",
      emailLabel: "E-mail",
    },
    faq: {
      label: "FAQ",
      title: "Frequently asked questions",
      items: [
        { q: "How fast do you reply?", a: "We usually respond within minutes to a few hours. Reach us by phone, the form, or WhatsApp, Viber and Telegram." },
        { q: "Do you cover all of Czechia?", a: "Yes, we move and transport across the entire Czech Republic. By arrangement we also handle transport within Europe." },
        { q: "How much does transport cost?", a: "We price individually based on scope, distance and complexity. You'll get a fair quote upfront with no hidden fees." },
        { q: "Do you help with loading and unloading?", a: "Of course. Our team handles loading, transport and unloading — you don't have to lift a finger." },
        { q: "Do you also take waste for disposal?", a: "Yes. We haul away unwanted items and arrange their eco-friendly disposal or recycling." },
      ],
    },
    footer: {
      tagline: "Professional moving, cargo transport and property clearance across Czechia and Europe.",
      linksLabel: "Navigation",
      contactLabel: "Contact",
      langLabel: "Language",
      privacy: "Privacy policy",
      rights: "All rights reserved.",
      coverage: "Operating across Czechia & Europe",
    },
  },

  // ─────────────────────────────── УКРАЇНСЬКА ───────────────────────────────
  uk: {
    meta: {
      title: "Kepsha.VIP — Переїзди, вантажні перевезення та вивезення",
      description:
        "Професійні переїзди, вантажні перевезення та вивезення майна по всій Чехії та Європі. Швидка відповідь, чесність, безпечне перевезення. Телефонуйте +420 775 929 681.",
    },
    nav: {
      home: "Головна",
      services: "Послуги",
      process: "Як це працює",
      why: "Чому ми",
      gallery: "Галерея",
      contact: "Контакти",
      cta: "Замовити перевезення",
      menu: "Меню",
      close: "Закрити",
    },
    hero: {
      badge: "Перевезення • Переїзди • Вивезення",
      titleLines: ["Перевеземо.", "Вирішимо.", "Організуємо."],
      subtitle:
        "Переїзди, вантажні перевезення та вивезення майна. Швидко, безпечно й без зайвих турбот — по всій Чехії та Європі.",
      ctaPrimary: "Замовити перевезення",
      ctaSecondary: "Подзвонити",
      trust: ["Швидка відповідь", "Професійний підхід", "Працюємо по всій Чехії"],
      scroll: "Далі",
    },
    marquee: [
      "Переїзди",
      "Вантажні перевезення",
      "Вивезення квартир",
      "Вивезення підвалів",
      "Вивезення спадщини",
      "Утилізація сміття",
      "По всій Чехії та Європі",
    ],
    services: {
      label: "Послуги",
      title: "Усе щодо переїздів і вивезення",
      subtitle: "Від однієї речі до повного вивезення. Беремо на себе завантаження, перевезення й утилізацію.",
      hint: "Наведіть на послугу для деталей",
      items: [
        { num: "01", title: "Переїзди квартир і будинків", desc: "Повні переїзди квартир, будинків, офісів та окремих речей. Пакуємо, вантажимо й безпечно перевозимо." },
        { num: "02", title: "Вантажні перевезення", desc: "Меблі, техніка, будматеріали та крихкі речі. Відповідний транспорт і дбайливе поводження." },
        { num: "03", title: "Вивезення квартир", desc: "Повне або часткове вивезення квартир і приміщень. Сортуємо, вивозимо й передаємо чистий простір." },
        { num: "04", title: "Вивезення підвалів і гаражів", desc: "Вивезення непотрібних речей, старих меблів та мотлоху з підвалів, гаражів і горищ." },
        { num: "05", title: "Вивезення спадщини", desc: "Дбайливе та організоване вивезення майна після спадщини — з повагою й делікатністю." },
        { num: "06", title: "Вивезення та утилізація відходів", desc: "Вивозимо непотрібні речі та забезпечуємо їх екологічну утилізацію чи переробку." },
      ],
      cta: "Замовити послугу",
    },
    benefits: {
      label: "Чому Kepsha.VIP",
      title: "Чому обирають нас",
      statement: ["Одна домовленість.", "Одна команда.", "Готово."],
      items: [
        "Швидка відповідь",
        "Чесні умови",
        "Професійний підхід",
        "Безпечне перевезення",
        "Гнучкі терміни",
        "Індивідуальна ціна",
        "Допомога із завантаженням",
        "На звʼязку 7 днів на тиждень",
      ],
    },
    process: {
      label: "Як це працює",
      title: "Від дзвінка до результату",
      subtitle: "Простий процес без зайвої бюрократії.",
      steps: [
        { num: "01", title: "Ви звертаєтесь", desc: "Телефонуєте або пишете, що потрібно перевезти чи вивезти." },
        { num: "02", title: "Узгоджуємо деталі", desc: "Пропонуємо рішення, термін і чесну індивідуальну ціну." },
        { num: "03", title: "Приїжджаємо", desc: "Прибуваємо вчасно з відповідним транспортом і власною командою." },
        { num: "04", title: "Перевозимо / вивозимо", desc: "Усе безпечно перевозимо або вивозимо — і прибираємо за собою." },
      ],
    },
    gallery: {
      label: "Галерея",
      title: "Наша робота в дії",
      subtitle: "Реальні виїзди — завантажені фургони, переїзди та вивезення по всій Чехії.",
      alt: "Kepsha.VIP — переїзди та перевезення, фото",
      close: "Закрити",
      prev: "Попереднє",
      next: "Наступне",
    },
    cta: {
      title: "Маєте що перевезти?",
      subtitle: "Звʼяжіться з нами — і ми все владнаємо вже сьогодні. Швидко, без зобовʼязань і за чесною ціною.",
      button: "Замовити перевезення",
      call: "Подзвонити",
    },
    form: {
      label: "Заявка",
      title: "Потрібне перевезення?",
      subtitle: "Напишіть, що потрібно перевезти чи вивезти. Ми звʼяжемося з вами якнайшвидше.",
      fields: {
        name: "Імʼя",
        phone: "Телефон",
        email: "E-mail",
        service: "Тип послуги",
        from: "Звідки",
        to: "Куди",
        date: "Бажаний термін",
        message: "Повідомлення",
      },
      placeholders: {
        name: "Іван Петренко",
        phone: "+420 …",
        email: "vy@email.com",
        from: "Місто, вулиця",
        to: "Місто, вулиця",
        message: "Опишіть, що потрібно перевезти чи вивезти…",
        selectService: "Оберіть послугу",
      },
      serviceOptions: [
        "Переїзд",
        "Вантажне перевезення",
        "Вивезення квартири",
        "Вивезення підвалу / гаража",
        "Вивезення спадщини",
        "Вивезення сміття",
        "Інша послуга",
      ],
      optional: "необовʼязково",
      submit: "Надіслати заявку",
      sending: "Надсилаю…",
      consent: "Погоджуюся на обробку персональних даних.",
      success: {
        title: "Дякуємо!",
        text: "Вашу заявку надіслано. Ми скоро звʼяжемося з вами.",
        again: "Надіслати ще одну заявку",
      },
      errors: {
        name: "Будь ласка, вкажіть імʼя.",
        phone: "Вкажіть коректний номер телефону.",
        email: "Вкажіть коректний e-mail.",
        service: "Будь ласка, оберіть послугу.",
        consent: "Підтвердьте згоду на обробку даних.",
      },
    },
    contact: {
      label: "Контакти",
      title: "Маєте що перевезти?",
      subtitle: "Ми на звʼязку 7 днів на тиждень. Телефонуйте або пишіть у зручному застосунку.",
      callNow: "Подзвонити",
      orWrite: "або напишіть",
      channels: { whatsapp: "WhatsApp", viber: "Viber", telegram: "Telegram" },
      availabilityLabel: "Доступність",
      availability: "7 днів на тиждень",
      coverageLabel: "Географія",
      coverage: "Уся Чехія та Європа",
      emailLabel: "E-mail",
    },
    faq: {
      label: "Часті запитання",
      title: "Найчастіші запитання",
      items: [
        { q: "Як швидко ви відповідаєте?", a: "Зазвичай відповідаємо протягом кількох хвилин або годин. Пишіть телефоном, через форму або у WhatsApp, Viber і Telegram." },
        { q: "Ви працюєте по всій Чехії?", a: "Так, ми перевозимо по всій Чеській Республіці. За домовленістю організуємо перевезення й у межах Європи." },
        { q: "Скільки коштує перевезення?", a: "Ціну визначаємо індивідуально — залежно від обсягу, відстані та складності. Ви отримаєте чесну пропозицію без прихованих платежів." },
        { q: "Ви допомагаєте із завантаженням?", a: "Звичайно. Наша команда бере на себе завантаження, перевезення й розвантаження — вам не доведеться нічого піднімати." },
        { q: "Ви вивозите сміття на утилізацію?", a: "Так. Вивозимо непотрібні речі та забезпечуємо їх екологічну утилізацію чи переробку." },
      ],
    },
    footer: {
      tagline: "Професійні переїзди, вантажні перевезення та вивезення майна по всій Чехії та Європі.",
      linksLabel: "Навігація",
      contactLabel: "Контакти",
      langLabel: "Мова",
      privacy: "Захист персональних даних",
      rights: "Усі права захищено.",
      coverage: "Працюємо по всій Чехії та Європі",
    },
  },

  // ─────────────────────────────── РУССКИЙ ───────────────────────────────
  ru: {
    meta: {
      title: "Kepsha.VIP — Переезды, грузоперевозки и вывоз имущества",
      description:
        "Профессиональные переезды, грузоперевозки и вывоз имущества по всей Чехии и Европе. Быстрый ответ, честность, безопасная перевозка. Звоните +420 775 929 681.",
    },
    nav: {
      home: "Главная",
      services: "Услуги",
      process: "Как это работает",
      why: "Почему мы",
      gallery: "Галерея",
      contact: "Контакты",
      cta: "Заказать перевозку",
      menu: "Меню",
      close: "Закрыть",
    },
    hero: {
      badge: "Перевозки • Переезды • Вывоз",
      titleLines: ["Перевезём.", "Решим.", "Организуем."],
      subtitle:
        "Переезды, грузоперевозки и вывоз имущества. Быстро, безопасно и без лишних хлопот — по всей Чехии и Европе.",
      ctaPrimary: "Заказать перевозку",
      ctaSecondary: "Позвонить",
      trust: ["Быстрый ответ", "Профессиональный подход", "Работаем по всей Чехии"],
      scroll: "Далее",
    },
    marquee: [
      "Переезды",
      "Грузоперевозки",
      "Вывоз из квартир",
      "Вывоз из подвалов",
      "Вывоз наследства",
      "Утилизация отходов",
      "По всей Чехии и Европе",
    ],
    services: {
      label: "Услуги",
      title: "Всё о переездах и вывозе",
      subtitle: "От одной вещи до полного вывоза. Берём на себя погрузку, перевозку и утилизацию.",
      hint: "Наведите на услугу для деталей",
      items: [
        { num: "01", title: "Переезды квартир и домов", desc: "Полные переезды квартир, домов, офисов и отдельных вещей. Упакуем, погрузим и безопасно перевезём." },
        { num: "02", title: "Грузоперевозки", desc: "Мебель, техника, стройматериалы и хрупкие вещи. Подходящий транспорт и бережное обращение." },
        { num: "03", title: "Вывоз из квартир", desc: "Полный или частичный вывоз из квартир и помещений. Сортируем, вывозим и передаём чистое пространство." },
        { num: "04", title: "Вывоз из подвалов и гаражей", desc: "Вывоз ненужных вещей, старой мебели и хлама из подвалов, гаражей и чердаков." },
        { num: "05", title: "Вывоз наследства", desc: "Бережный и организованный вывоз имущества после наследства — с уважением и деликатностью." },
        { num: "06", title: "Вывоз и утилизация отходов", desc: "Вывозим ненужные вещи и обеспечиваем их экологичную утилизацию или переработку." },
      ],
      cta: "Заказать услугу",
    },
    benefits: {
      label: "Почему Kepsha.VIP",
      title: "Почему выбирают нас",
      statement: ["Одна договорённость.", "Одна команда.", "Готово."],
      items: [
        "Быстрый ответ",
        "Честные условия",
        "Профессиональный подход",
        "Безопасная перевозка",
        "Гибкие сроки",
        "Индивидуальная цена",
        "Помощь с погрузкой",
        "На связи 7 дней в неделю",
      ],
    },
    process: {
      label: "Как это работает",
      title: "От звонка до результата",
      subtitle: "Простой процесс без лишней бюрократии.",
      steps: [
        { num: "01", title: "Вы обращаетесь", desc: "Звоните или пишете, что нужно перевезти или вывезти." },
        { num: "02", title: "Согласуем детали", desc: "Предлагаем решение, срок и честную индивидуальную цену." },
        { num: "03", title: "Приезжаем", desc: "Прибываем вовремя с подходящим транспортом и своей командой." },
        { num: "04", title: "Перевозим / вывозим", desc: "Всё безопасно перевозим или вывозим — и убираем за собой." },
      ],
    },
    gallery: {
      label: "Галерея",
      title: "Наша работа в деле",
      subtitle: "Реальные выезды — загруженные фургоны, переезды и вывоз по всей Чехии.",
      alt: "Kepsha.VIP — переезды и перевозки, фото",
      close: "Закрыть",
      prev: "Предыдущее",
      next: "Следующее",
    },
    cta: {
      title: "Есть что перевезти?",
      subtitle: "Свяжитесь с нами — и мы всё уладим уже сегодня. Быстро, без обязательств и по честной цене.",
      button: "Заказать перевозку",
      call: "Позвонить",
    },
    form: {
      label: "Заявка",
      title: "Нужна перевозка?",
      subtitle: "Напишите, что нужно перевезти или вывезти. Мы свяжемся с вами как можно скорее.",
      fields: {
        name: "Имя",
        phone: "Телефон",
        email: "E-mail",
        service: "Тип услуги",
        from: "Откуда",
        to: "Куда",
        date: "Желаемый срок",
        message: "Сообщение",
      },
      placeholders: {
        name: "Иван Иванов",
        phone: "+420 …",
        email: "vy@email.com",
        from: "Город, улица",
        to: "Город, улица",
        message: "Опишите, что нужно перевезти или вывезти…",
        selectService: "Выберите услугу",
      },
      serviceOptions: [
        "Переезд",
        "Грузоперевозка",
        "Вывоз из квартиры",
        "Вывоз из подвала / гаража",
        "Вывоз наследства",
        "Вывоз мусора",
        "Другая услуга",
      ],
      optional: "необязательно",
      submit: "Отправить заявку",
      sending: "Отправляю…",
      consent: "Согласен на обработку персональных данных.",
      success: {
        title: "Спасибо!",
        text: "Ваша заявка отправлена. Мы скоро свяжемся с вами.",
        again: "Отправить ещё одну заявку",
      },
      errors: {
        name: "Пожалуйста, укажите имя.",
        phone: "Укажите корректный номер телефона.",
        email: "Укажите корректный e-mail.",
        service: "Пожалуйста, выберите услугу.",
        consent: "Подтвердите согласие на обработку данных.",
      },
    },
    contact: {
      label: "Контакты",
      title: "Есть что перевезти?",
      subtitle: "Мы на связи 7 дней в неделю. Звоните или пишите в удобном мессенджере.",
      callNow: "Позвонить",
      orWrite: "или напишите",
      channels: { whatsapp: "WhatsApp", viber: "Viber", telegram: "Telegram" },
      availabilityLabel: "Доступность",
      availability: "7 дней в неделю",
      coverageLabel: "География",
      coverage: "Вся Чехия и Европа",
      emailLabel: "E-mail",
    },
    faq: {
      label: "Частые вопросы",
      title: "Часто задаваемые вопросы",
      items: [
        { q: "Как быстро вы отвечаете?", a: "Обычно отвечаем в течение нескольких минут или часов. Пишите по телефону, через форму или в WhatsApp, Viber и Telegram." },
        { q: "Вы работаете по всей Чехии?", a: "Да, мы перевозим по всей Чешской Республике. По договорённости организуем перевозку и в пределах Европы." },
        { q: "Сколько стоит перевозка?", a: "Цену определяем индивидуально — в зависимости от объёма, расстояния и сложности. Вы получите честное предложение без скрытых платежей." },
        { q: "Вы помогаете с погрузкой?", a: "Конечно. Наша команда берёт на себя погрузку, перевозку и разгрузку — вам не придётся ничего поднимать." },
        { q: "Вы вывозите мусор на утилизацию?", a: "Да. Вывозим ненужные вещи и обеспечиваем их экологичную утилизацию или переработку." },
      ],
    },
    footer: {
      tagline: "Профессиональные переезды, грузоперевозки и вывоз имущества по всей Чехии и Европе.",
      linksLabel: "Навигация",
      contactLabel: "Контакты",
      langLabel: "Язык",
      privacy: "Защита персональных данных",
      rights: "Все права защищены.",
      coverage: "Работаем по всей Чехии и Европе",
    },
  },
};
